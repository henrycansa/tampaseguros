"use client";

import { Phone } from "lucide-react";
import { business, telHref } from "@/lib/content/business";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const messages = {
  es: "Hola, quiero una revisión gratuita de mis opciones de seguro.",
  en: "Hi, I'd like a free review of my insurance options.",
};

const chatLabels = {
  es: "Chatear por WhatsApp con Tampa Seguros",
  en: "Chat on WhatsApp with Tampa Seguros",
};

const shortLabels = {
  whatsapp: { es: "WhatsApp", en: "WhatsApp" },
  call: { es: "Llamar", en: "Call" },
};

export function FloatingWhatsApp({ lang }: { lang: "es" | "en" }) {
  const whatsappHref = `https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(messages[lang])}`;

  return (
    <>
      {/* Desktop: burbuja flotante circular (el usuario tiene mouse, no necesita zona de pulgar) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={chatLabels[lang]}
        onClick={() => window.dataLayer?.push({ event: "generate_lead", lead_source: "floating_whatsapp" })}
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tardis md:flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Mobile: barra de acción fija en la zona del pulgar (thumb zone), siempre a un toque */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-tardis/10 bg-white p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={telHref()}
          onClick={() => window.dataLayer?.push({ event: "generate_lead", lead_source: "sticky_bar_call" })}
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border-2 border-tardis text-sm font-semibold text-tardis transition active:scale-[0.97]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {shortLabels.call[lang]}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={chatLabels[lang]}
          onClick={() => window.dataLayer?.push({ event: "generate_lead", lead_source: "sticky_bar_whatsapp" })}
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-semibold text-white transition active:scale-[0.97]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {shortLabels.whatsapp[lang]}
        </a>
      </div>
    </>
  );
}
