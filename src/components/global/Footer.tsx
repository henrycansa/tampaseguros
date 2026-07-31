import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import type { NavConfig } from "@/lib/content/nav";
import { business, telHref } from "@/lib/content/business";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const copy = {
  es: {
    tagline: "Asesoría de seguros 100% gratuita, en español, para familias y negocios de Florida.",
    personalTitle: "Seguros Personales",
    businessTitle: "Empresa",
    contactTitle: "Contacto",
    address: "Dirección",
    rights: `© ${new Date().getFullYear()} Tampa Seguros. Todos los derechos reservados.`,
    eeat: `Tampa Seguros es una marca operada por GODAGER GROUP LLC, licencia estatal de Florida ${business.license}. Dirección: ${business.addressLine} ${business.city} FL ${business.zip}.`,
  },
  en: {
    tagline: "100% free insurance guidance, bilingual, for Florida families and businesses.",
    personalTitle: "Personal Insurance",
    businessTitle: "Company",
    contactTitle: "Contact",
    address: "Address",
    rights: `© ${new Date().getFullYear()} Tampa Seguros. All rights reserved.`,
    eeat: `Tampa Seguros is a brand operated by GODAGER GROUP LLC, Florida state license ${business.license}. Address: ${business.addressLine}, ${business.city} ${business.state} ${business.zip}.`,
  },
} as const;

export function Footer({ nav, lang }: { nav: NavConfig; lang: "es" | "en" }) {
  const t = copy[lang];

  return (
    <footer className="bg-tardis text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="inline-block rounded-lg bg-white p-2">
              <Image
                src="/logos/tampa-seguros-logo.svg"
                alt="Tampa Seguros"
                width={520}
                height={172}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/80">{t.tagline}</p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-cold-blue">
              {t.personalTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {nav.personal.children.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold">
              {t.businessTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={nav.business.href} className="text-sm text-white/80 hover:text-white">
                  {nav.business.label}
                </Link>
              </li>
              <li>
                <Link href={nav.about.href} className="text-sm text-white/80 hover:text-white">
                  {nav.about.label}
                </Link>
              </li>
              <li>
                <Link href={nav.contact.href} className="text-sm text-white/80 hover:text-white">
                  {nav.contact.label}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-cold-blue">
              {t.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {business.addressLine}, {business.city} {business.state} {business.zip}
                </span>
              </li>
              <li>
                <a href={telHref()} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${business.whatsappE164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="text-xs leading-relaxed text-white/70">{t.eeat}</p>
          <p className="mt-2 text-xs text-white/60">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
