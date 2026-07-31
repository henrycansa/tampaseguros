"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Lang = "es" | "en";

const copy = {
  es: {
    name: "Nombre completo",
    namePlaceholder: "Tu nombre",
    phone: "Teléfono",
    phonePlaceholder: "(813) 000-0000",
    insuranceType: "¿Qué seguro te interesa?",
    insuranceTypePlaceholder: "Selecciona una opción",
    zip: "Código postal (ZIP)",
    zipPlaceholder: "33602",
    submit: "Obtener mi revisión gratuita",
    submitting: "Enviando...",
    successTitle: "¡Listo! Ya recibimos tu información.",
    successBody: "Un asesor con licencia en Florida te va a contactar hoy mismo.",
    errorGeneric: "No pudimos enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp.",
    errorName: "Escribe tu nombre.",
    errorPhone: "Escribe un teléfono válido de 10 dígitos.",
    errorInsurance: "Selecciona un tipo de seguro.",
    errorZip: "Escribe un código postal válido de 5 dígitos.",
    disclaimer: "Al enviar aceptas que un asesor de Tampa Seguros te contacte. Sin spam.",
  },
  en: {
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone",
    phonePlaceholder: "(813) 000-0000",
    insuranceType: "Which insurance are you interested in?",
    insuranceTypePlaceholder: "Select an option",
    zip: "ZIP code",
    zipPlaceholder: "33602",
    submit: "Get my free review",
    submitting: "Sending...",
    successTitle: "You're set! We received your info.",
    successBody: "A Florida-licensed advisor will reach out today.",
    errorGeneric: "We couldn't send the form. Try again or message us on WhatsApp.",
    errorName: "Enter your name.",
    errorPhone: "Enter a valid 10-digit phone number.",
    errorInsurance: "Select an insurance type.",
    errorZip: "Enter a valid 5-digit ZIP code.",
    disclaimer: "By submitting you agree a Tampa Seguros advisor may contact you. No spam.",
  },
} as const;

export function QuoteForm({
  lang,
  insuranceOptions,
  source = "home_quote_form",
}: {
  lang: Lang;
  insuranceOptions: string[];
  source?: string;
}) {
  const t = copy[lang];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formLoadedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const insuranceType = String(form.get("insuranceType") ?? "").trim();
    const zip = String(form.get("zip") ?? "").trim();
    const website = String(form.get("website") ?? "").trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = t.errorName;
    if (phone.replace(/\D/g, "").length < 10) errors.phone = t.errorPhone;
    if (!insuranceType) errors.insuranceType = t.errorInsurance;
    if (!/^\d{5}$/.test(zip)) errors.zip = t.errorZip;
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, insuranceType, zip, lang, source, website, formLoadedAt }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      window.dataLayer?.push({ event: "generate_lead", lead_source: source });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-8 text-center shadow-sm">
        <CheckCircle2 className="h-10 w-10 text-cold-blue" aria-hidden="true" />
        <p className="font-heading text-lg font-bold text-tardis">{t.successTitle}</p>
        <p className="text-base text-foreground/70">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="qf-website">Website</label>
        <input id="qf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qf-name" className="text-sm font-medium text-tardis">
          {t.name}
        </label>
        <input
          id="qf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t.namePlaceholder}
          className="min-h-[48px] rounded-md border border-tardis/20 px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
          aria-invalid={Boolean(fieldErrors.name)}
        />
        {fieldErrors.name && <p className="text-xs text-red-600">{fieldErrors.name}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qf-phone" className="text-sm font-medium text-tardis">
          {t.phone}
        </label>
        <input
          id="qf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={t.phonePlaceholder}
          className="min-h-[48px] rounded-md border border-tardis/20 px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
          aria-invalid={Boolean(fieldErrors.phone)}
        />
        {fieldErrors.phone && <p className="text-xs text-red-600">{fieldErrors.phone}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qf-insurance" className="text-sm font-medium text-tardis">
          {t.insuranceType}
        </label>
        <select
          id="qf-insurance"
          name="insuranceType"
          defaultValue=""
          className="min-h-[48px] rounded-md border border-tardis/20 bg-white px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
          aria-invalid={Boolean(fieldErrors.insuranceType)}
        >
          <option value="" disabled>
            {t.insuranceTypePlaceholder}
          </option>
          {insuranceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.insuranceType && <p className="text-xs text-red-600">{fieldErrors.insuranceType}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qf-zip" className="text-sm font-medium text-tardis">
          {t.zip}
        </label>
        <input
          id="qf-zip"
          name="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          placeholder={t.zipPlaceholder}
          className="min-h-[48px] rounded-md border border-tardis/20 px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
          aria-invalid={Boolean(fieldErrors.zip)}
        />
        {fieldErrors.zip && <p className="text-xs text-red-600">{fieldErrors.zip}</p>}
      </div>

      {status === "error" && <p className="text-sm text-red-600">{t.errorGeneric}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-cold-blue px-6 py-3 text-sm font-semibold text-tardis transition hover:brightness-95 active:scale-[0.97] disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? t.submitting : t.submit}
      </button>
      <p className="text-center text-xs text-foreground/50">{t.disclaimer}</p>
    </form>
  );
}
