"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import type { NavConfig } from "@/lib/content/nav";
import { business, telHref } from "@/lib/content/business";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Header({ nav, lang }: { nav: NavConfig; lang: "es" | "en" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePersonalOpen, setMobilePersonalOpen] = useState(false);

  const homeHref = lang === "es" ? "/" : "/en";
  const logoAlt =
    lang === "es"
      ? "Tampa Seguros — logotipo, familia protegida bajo un escudo azul"
      : "Tampa Seguros logo — family protected under a blue shield";
  const whatsappMessage =
    lang === "es"
      ? "Hola, quiero una revisión gratuita de mis opciones de seguro."
      : "Hi, I'd like a free review of my insurance options.";

  return (
    <header className="sticky top-0 z-40 border-b border-tardis/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href={homeHref} className="flex min-h-[48px] shrink-0 items-center">
          <Image
            src="/logos/tampa-seguros-logo.svg"
            alt={logoAlt}
            width={520}
            height={172}
            priority
            className="h-12 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          <Link href={nav.about.href} className="text-sm font-medium text-tardis hover:text-tardis-dark">
            {nav.about.label}
          </Link>

          <div className="group relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-tardis hover:text-tardis-dark"
              aria-haspopup="true"
            >
              {nav.personal.label}
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-1/2 top-full grid w-[36rem] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-1 rounded-lg border border-tardis/10 bg-white p-4 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {nav.personal.children.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-[48px] items-center rounded-md px-3 py-2 text-sm text-foreground hover:bg-bg-soft hover:text-tardis"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href={nav.business.href} className="text-sm font-medium text-tardis hover:text-tardis-dark">
            {nav.business.label}
          </Link>
          <Link href={nav.contact.href} className="text-sm font-medium text-tardis hover:text-tardis-dark">
            {nav.contact.label}
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={nav.langSwitchHref}
            className="flex min-h-[48px] items-center rounded-full border border-tardis/20 px-3 py-1 text-xs font-semibold text-tardis hover:bg-bg-soft"
          >
            {nav.langLabel}
          </Link>
          <a
            href={telHref()}
            className="flex min-h-[48px] items-center gap-2 text-sm font-medium text-tardis hover:text-tardis-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.dataLayer?.push({ event: "generate_lead", lead_source: "header_whatsapp" })}
            className="flex min-h-[48px] items-center gap-2 rounded-full bg-cold-blue px-5 py-2 text-sm font-semibold text-tardis transition hover:brightness-95 active:scale-[0.97]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {nav.ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md text-tardis transition active:scale-[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-tardis md:hidden"
          aria-label={mobileOpen ? (lang === "es" ? "Cerrar menú" : "Close menu") : lang === "es" ? "Abrir menú" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-tardis/10 bg-white px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2" aria-label="Principal móvil">
            <Link
              href={nav.about.href}
              className="flex min-h-[48px] items-center rounded-md px-2 text-base font-medium text-tardis active:bg-bg-soft"
              onClick={() => setMobileOpen(false)}
            >
              {nav.about.label}
            </Link>

            <button
              className="flex min-h-[48px] items-center justify-between rounded-md px-2 text-base font-medium text-tardis active:bg-bg-soft"
              aria-expanded={mobilePersonalOpen}
              onClick={() => setMobilePersonalOpen((v) => !v)}
            >
              {nav.personal.label}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobilePersonalOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {mobilePersonalOpen && (
              <div className="ml-2 flex flex-col gap-1 border-l border-tardis/10 pl-3">
                {nav.personal.children.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-[48px] items-center rounded-md px-2 text-base text-foreground/80 active:bg-bg-soft"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href={nav.business.href}
              className="flex min-h-[48px] items-center rounded-md px-2 text-base font-medium text-tardis active:bg-bg-soft"
              onClick={() => setMobileOpen(false)}
            >
              {nav.business.label}
            </Link>
            <Link
              href={nav.contact.href}
              className="flex min-h-[48px] items-center rounded-md px-2 text-base font-medium text-tardis active:bg-bg-soft"
              onClick={() => setMobileOpen(false)}
            >
              {nav.contact.label}
            </Link>
            <Link
              href={nav.langSwitchHref}
              className="flex min-h-[48px] items-center rounded-md px-2 text-base font-medium text-tardis active:bg-bg-soft"
            >
              {lang === "es" ? "English version" : "Versión en español"}
            </Link>
          </nav>

          <div className="mt-3 flex flex-col gap-3">
            <a
              href={telHref()}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-tardis/20 px-5 text-base font-medium text-tardis transition active:scale-[0.97]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.dataLayer?.push({ event: "generate_lead", lead_source: "header_whatsapp_mobile" })}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-cold-blue px-5 text-base font-semibold text-tardis transition active:scale-[0.97]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {nav.ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
