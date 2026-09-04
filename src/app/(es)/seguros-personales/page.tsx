import type { Metadata } from "next";
import { AlertTriangle, TrendingDown, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HeroCtas } from "@/components/home/HeroCtas";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ProductCard } from "@/components/ui/ProductCard";
import { CarrierTrustBar } from "@/components/home/CarrierTrustBar";
import { LocalAreas } from "@/components/home/LocalAreas";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { GoogleReviewsSection } from "@/components/ui/GoogleReviewsSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { getCarriers } from "@/lib/carriers";
import { homeEs, localCities, personalProductsEs } from "@/lib/content/home";
import { personalPillarEs } from "@/lib/content/pillars";
import { hreflang } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: personalPillarEs.metaTitle,
  description: personalPillarEs.metaDescription,
  alternates: hreflang("/seguros-personales/", "/en/personal-insurance/", "es"),
};

const breadcrumbItems = [
  { name: "Inicio", path: "/" },
  { name: personalPillarEs.breadcrumbName, path: "/seguros-personales/" },
];

export default function SegurosPersonalesPage() {
  const carriers = getCarriers().filter((c) => ["salud", "auto", "hogar"].includes(c.category));
  const insuranceOptions = [...personalProductsEs.map((p) => p.title), "No estoy seguro / Otro"];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        lang="es"
        eyebrow={personalPillarEs.eyebrow}
        headline={personalPillarEs.h1}
        geo={personalPillarEs.geo}
        pasItems={[
          { icon: AlertTriangle, text: personalPillarEs.problem },
          { icon: TrendingDown, text: personalPillarEs.agitation },
          { icon: ShieldCheck, text: personalPillarEs.solution },
        ]}
        imageSrc="/images/seguros-personales-tampa-seguros.webp"
        imageAlt="Familia hispana multigeneracional caminando y sonriendo, protegida por los seguros personales de Tampa Seguros"
        whatsappLabel={homeEs.heroCtaWhatsapp}
        callLabel={homeEs.heroCtaCall}
        quoteLabel={homeEs.heroCtaQuote}
        compact
      />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{personalPillarEs.gridTitle}</h2>
            <p className="mt-2 text-foreground/70">{personalPillarEs.gridIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personalProductsEs.map((product) => (
              <ProductCard
                key={product.href}
                href={product.href}
                icon={product.icon}
                title={product.title}
                description={product.description}
                linkLabel="Ver detalles"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{personalPillarEs.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{personalPillarEs.quoteSubtitle}</p>
          </div>
          <QuoteForm lang="es" insuranceOptions={insuranceOptions} source="personal_pillar_quote_form" />
        </div>
      </section>

      <SocialProofBar stats={homeEs.socialProof} />

      <CarrierTrustBar carriers={carriers} title={personalPillarEs.trustTitle} subtitle={personalPillarEs.trustSubtitle} />

      <LocalAreas title={personalPillarEs.localTitle} body={personalPillarEs.localBody} cities={localCities} />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{personalPillarEs.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={personalPillarEs.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={personalPillarEs.faqs} />

      <GoogleReviewsSection lang="es" />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{personalPillarEs.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{personalPillarEs.finalCtaBody}</p>
          <HeroCtas
            lang="es"
            whatsappLabel={homeEs.heroCtaWhatsapp}
            callLabel={homeEs.heroCtaCall}
            quoteLabel={homeEs.heroCtaQuote}
          />
        </div>
      </section>
    </main>
  );
}
