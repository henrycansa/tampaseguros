import type { Metadata } from "next";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HeroCtas } from "@/components/home/HeroCtas";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { homeEs, personalProductsEs } from "@/lib/content/home";
import { aboutEs } from "@/lib/content/about";
import { business } from "@/lib/content/business";
import { hreflang } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: aboutEs.metaTitle,
  description: aboutEs.metaDescription,
  alternates: hreflang("/nosotros/", "/en/about-us/", "es"),
};

const breadcrumbItems = [
  { name: "Inicio", path: "/" },
  { name: aboutEs.breadcrumbName, path: "/nosotros/" },
];

export default function NosotrosPage() {
  const insuranceOptions = [...personalProductsEs.map((p) => p.title), "Seguro Comercial", "No estoy seguro / Otro"];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        lang="es"
        eyebrow={aboutEs.eyebrow}
        headline={aboutEs.h1}
        geo={aboutEs.geo}
        body={aboutEs.storyIntro}
        imageSrc="/images/nosotros-tampa-seguros.webp"
        imageAlt="Asesor de Tampa Seguros conversando cercanamente con una clienta en la oficina"
        whatsappLabel={homeEs.heroCtaWhatsapp}
        callLabel={homeEs.heroCtaCall}
        quoteLabel={homeEs.heroCtaQuote}
        compact
      />

      <section className="px-4 py-12 md:px-8">
        <ul className="mx-auto flex max-w-2xl flex-col gap-3">
          {aboutEs.storyBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 rounded-xl bg-bg-soft p-4">
              <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
              <span className="text-base text-foreground/80">{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 py-8 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cold-blue/30 bg-white p-8">
            <h2 className="font-heading text-xl font-bold text-tardis">{aboutEs.missionTitle}</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/70">{aboutEs.missionBody}</p>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-white p-8">
            <h2 className="font-heading text-xl font-bold text-tardis">{aboutEs.visionTitle}</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/70">{aboutEs.visionBody}</p>
          </div>
        </div>
      </section>

      <section className="bg-tardis px-4 py-14 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <ShieldCheck className="h-10 w-10 text-cold-blue" aria-hidden="true" />
          <h2 className="font-heading text-2xl font-bold text-white">{aboutEs.eeatTitle}</h2>
          <p className="max-w-2xl text-white/80">{aboutEs.eeatBody}</p>
        </div>
      </section>

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-bold text-tardis md:text-3xl">{aboutEs.whyTitle}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutEs.whyItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cold-blue/25 text-tardis">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-bold text-tardis">{item.title}</h3>
                <p className="text-base text-foreground/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{aboutEs.teamTitle}</h2>
          <p className="mt-3 text-foreground/70">{aboutEs.teamBody}</p>
          <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            {aboutEs.teamTraits.map((trait) => (
              <li key={trait} className="rounded-xl bg-bg-soft p-4 text-base text-foreground/80">
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{homeEs.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{homeEs.quoteSubtitle}</p>
          </div>
          <QuoteForm lang="es" insuranceOptions={insuranceOptions} source="about_quote_form" />
        </div>
      </section>

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{aboutEs.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={aboutEs.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={aboutEs.faqs} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{aboutEs.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{aboutEs.finalCtaBody}</p>
          <HeroCtas lang="es" whatsappLabel={homeEs.heroCtaWhatsapp} callLabel={homeEs.heroCtaCall} quoteLabel={homeEs.heroCtaQuote} />
          <p className="text-xs text-foreground/50">
            {business.legalName} · {business.license.startsWith("L") ? "Lic." : ""} {business.license}
          </p>
        </div>
      </section>
    </main>
  );
}
