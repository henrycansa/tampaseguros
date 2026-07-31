import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/leads";
import { isRateLimited, clientIpFrom } from "@/lib/rate-limit";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  insuranceType?: unknown;
  zip?: unknown;
  reason?: unknown;
  message?: unknown;
  lang?: unknown;
  source?: unknown;
  // Anti-spam: campo honeypot (debe llegar vacío) y timestamp de carga del formulario.
  website?: unknown;
  formLoadedAt?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_TIME_MS = 1500;

export async function POST(request: Request) {
  const ip = clientIpFrom(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: los bots suelen rellenar todos los campos, incluido este, oculto
  // para usuarios reales. Si viene con contenido, respondemos "éxito" sin
  // procesar nada, para no delatar el mecanismo anti-spam.
  if (isNonEmptyString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  // Envío demasiado rápido tras cargar el formulario = probable bot.
  const loadedAt = typeof body.formLoadedAt === "number" ? body.formLoadedAt : null;
  if (loadedAt && Date.now() - loadedAt < MIN_SUBMIT_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const name = isNonEmptyString(body.name) ? body.name.trim().slice(0, 120) : "";
  const phoneDigits = isNonEmptyString(body.phone) ? body.phone.replace(/\D/g, "") : "";
  const email = isNonEmptyString(body.email) ? body.email.trim().slice(0, 160) : "";
  const insuranceType = isNonEmptyString(body.insuranceType) ? body.insuranceType.trim().slice(0, 80) : "";
  const zip = isNonEmptyString(body.zip) ? body.zip.trim().slice(0, 10) : "";
  const reason = isNonEmptyString(body.reason) ? body.reason.trim().slice(0, 80) : "";
  const message = isNonEmptyString(body.message) ? body.message.trim().slice(0, 1000) : "";
  const lang = body.lang === "en" ? "en" : "es";
  const source = isNonEmptyString(body.source) ? body.source.trim().slice(0, 60) : "unknown";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "required";
  if (phoneDigits.length < 10) errors.phone = "invalid";
  if (email && !EMAIL_REGEX.test(email)) errors.email = "invalid";
  if (!insuranceType && !reason) errors.reason = "required";
  if (!/^\d{5}$/.test(zip)) errors.zip = "invalid";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation_failed", fields: errors }, { status: 400 });
  }

  try {
    const result = await deliverLead({
      name,
      phone: phoneDigits,
      email: email || undefined,
      insuranceType: insuranceType || undefined,
      zip,
      reason: reason || undefined,
      message: message || undefined,
      lang,
      source,
    });

    if (!result.delivered) {
      console.error("[lead] delivery failed", result.error);
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] unexpected error", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
