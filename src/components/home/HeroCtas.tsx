"use client";

import { MessageCircle, Phone } from "lucide-react";
import { business, telHref, whatsappHref } from "@/lib/content/business";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const messages = {
  es: "Hola, quiero una revisión gratuita de mis opciones de seguro.",
  en: "Hi, I'd like a free review of my insurance options.",
};

export function HeroCtas({
  lang,
  whatsappLabel,
  callLabel,
  quoteLabel,
  variant = "light",
  quoteHref = "#cotizacion",
}: {
  lang: "es" | "en";
  whatsappLabel: string;
  callLabel: string;
  quoteLabel: string;
  variant?: "light" | "dark";
  quoteHref?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={whatsappHref(messages[lang])}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.dataLayer?.push({ event: "generate_lead", lead_source: "hero_whatsapp" })}
        className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-cold-blue px-6 py-3.5 text-sm font-semibold text-tardis shadow-sm transition hover:brightness-95 active:scale-[0.97]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {whatsappLabel}
      </a>
      <a
        href={telHref()}
        onClick={() => window.dataLayer?.push({ event: "generate_lead", lead_source: "hero_call" })}
        className={
          isDark
            ? "flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-tardis active:scale-[0.97]"
            : "flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-tardis px-6 py-3.5 text-sm font-semibold text-tardis transition hover:bg-tardis hover:text-white active:scale-[0.97]"
        }
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        {callLabel} · {business.phoneDisplay}
      </a>
      <a
        href={quoteHref}
        className={
          isDark
            ? "flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] active:scale-[0.97]"
            : "flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-tardis px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-tardis-dark active:scale-[0.97]"
        }
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        {quoteLabel}
      </a>
    </div>
  );
}
