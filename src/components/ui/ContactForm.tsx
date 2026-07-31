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
    email: "Correo electrónico",
    emailPlaceholder: "tucorreo@ejemplo.com",
    reason: "Motivo de contacto",
    reasonPlaceholder: "Selecciona una opción",
    reasonOptions: ["Seguros personales", "Seguros comerciales", "Servicio al cliente / póliza existente", "Otro"],
    message: "Mensaje (opcional)",
    messagePlaceholder: "Cuéntanos brevemente en qué te podemos ayudar",
    submit: "Enviar mensaje",
    submitting: "Enviando...",
    successTitle: "¡Mensaje recibido!",
    successBody: "Un asesor de Tampa Seguros te contacta muy pronto.",
    errorGeneric: "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.",
    errorName: "Escribe tu nombre.",
    errorPhone: "Escribe un teléfono válido de 10 dígitos.",
    errorReason: "Selecciona un motivo de contacto.",
    errorEmail: "Escribe un correo válido.",
    disclaimer: "Al enviar aceptas que un asesor de Tampa Seguros te contacte. Sin spam.",
  },
  en: {
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone",
    phonePlaceholder: "(813) 000-0000",
    email: "Email",
    emailPlaceholder: "you@example.com",
    reason: "Reason for contact",
    reasonPlaceholder: "Select an option",
    reasonOptions: ["Personal insurance", "Commercial insurance", "Customer service / existing policy", "Other"],
    message: "Message (optional)",
    messagePlaceholder: "Tell us briefly how we can help",
    submit: "Send message",
    submitting: "Sending...",
    successTitle: "Message received!",
    successBody: "A Tampa Seguros advisor will reach out soon.",
    errorGeneric: "We couldn't send your message. Try again or message us on WhatsApp.",
    errorName: "Enter your name.",
    errorPhone: "Enter a valid 10-digit phone number.",
    errorReason: "Select a reason for contact.",
    errorEmail: "Enter a valid email.",
    disclaimer: "By submitting you agree a Tampa Seguros advisor may contact you. No spam.",
  },
} as const;

export function ContactForm({ lang, source = "contact_page_form" }: { lang: Lang; source?: string }) {
  const t = copy[lang];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formLoadedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const reason = String(form.get("reason") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const website = String(form.get("website") ?? "").trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = t.errorName;
    if (phone.replace(/\D/g, "").length < 10) errors.phone = t.errorPhone;
    if (!reason) errors.reason = t.errorReason;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t.errorEmail;
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, reason, message, lang, source, website, formLoadedAt }),
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
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium text-tardis">
            {t.name}
          </label>
          <input
            id="cf-name"
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
          <label htmlFor="cf-phone" className="text-sm font-medium text-tardis">
            {t.phone}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            className="min-h-[48px] rounded-md border border-tardis/20 px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
            aria-invalid={Boolean(fieldErrors.phone)}
          />
          {fieldErrors.phone && <p className="text-xs text-red-600">{fieldErrors.phone}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-sm font-medium text-tardis">
          {t.email}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          className="min-h-[48px] rounded-md border border-tardis/20 px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
          aria-invalid={Boolean(fieldErrors.email)}
        />
        {fieldErrors.email && <p className="text-xs text-red-600">{fieldErrors.email}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-reason" className="text-sm font-medium text-tardis">
          {t.reason}
        </label>
        <select
          id="cf-reason"
          name="reason"
          defaultValue=""
          className="min-h-[48px] rounded-md border border-tardis/20 bg-white px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
          aria-invalid={Boolean(fieldErrors.reason)}
        >
          <option value="" disabled>
            {t.reasonPlaceholder}
          </option>
          {t.reasonOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.reason && <p className="text-xs text-red-600">{fieldErrors.reason}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-medium text-tardis">
          {t.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className="resize-none rounded-md border border-tardis/20 px-3 py-2.5 text-base outline-none focus-visible:border-tardis focus-visible:ring-2 focus-visible:ring-cold-blue/50"
        />
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
