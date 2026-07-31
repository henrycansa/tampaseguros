import type { Metadata } from "next";
import { AlertTriangle, TrendingDown, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HeroCtas } from "@/components/home/HeroCtas";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { CarrierTrustBar } from "@/components/home/CarrierTrustBar";
import { LocalAreas } from "@/components/home/LocalAreas";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { GoogleReviewsSection } from "@/components/ui/GoogleReviewsSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { getCarriers } from "@/lib/carriers";
import { homeEs, localCities, businessProductsEs } from "@/lib/content/home";
import { businessPillarEs } from "@/lib/content/pillars";
import { hreflang } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: businessPillarEs.metaTitle,
  description: businessPillarEs.metaDescription,
  alternates: hreflang("/seguros-comerciales/", "/en/business-insurance/"),
};

const breadcrumbItems = [
  { name: "Inicio", path: "/" },
  { name: businessPillarEs.breadcrumbName, path: "/seguros-comerciales/" },
];

export default function SegurosComercialesPage() {
  const carriers = getCarriers().filter((c) => c.category === "comercial");
  const insuranceOptions = [...businessProductsEs.map((p) => p.title), "No estoy seguro / Otro"];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        lang="es"
        eyebrow={businessPillarEs.eyebrow}
        headline={businessPillarEs.h1}
        geo={businessPillarEs.geo}
        pasItems={[
          { icon: AlertTriangle, text: businessPillarEs.problem },
          { icon: TrendingDown, text: businessPillarEs.agitation },
          { icon: ShieldCheck, text: businessPillarEs.solution },
        ]}
        imageSrc="/images/seguros-comerciales-tampa-seguros.webp"
        imageAlt="Dueño de negocio revisando contratos y datos financieros en su oficina, protegido por los seguros comerciales de Tampa Seguros"
        whatsappLabel={homeEs.heroCtaWhatsapp}
        callLabel={homeEs.heroCtaCall}
        quoteLabel={homeEs.heroCtaQuote}
        variant="dark"
        compact
      />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{businessPillarEs.gridTitle}</h2>
            <p className="mt-2 text-foreground/70">{businessPillarEs.gridIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessProductsEs.map((product) => (
              <BusinessCard
                key={product.title}
                href={product.href}
                icon={product.icon}
                title={product.title}
                description={product.description}
                linkLabel="Más información"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{businessPillarEs.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{businessPillarEs.quoteSubtitle}</p>
          </div>
          <QuoteForm lang="es" insuranceOptions={insuranceOptions} source="business_pillar_quote_form" />
        </div>
      </section>

      <SocialProofBar stats={homeEs.socialProof} />

      <CarrierTrustBar carriers={carriers} title={businessPillarEs.trustTitle} subtitle={businessPillarEs.trustSubtitle} />

      <LocalAreas title={businessPillarEs.localTitle} body={businessPillarEs.localBody} cities={localCities} />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{businessPillarEs.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={businessPillarEs.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={businessPillarEs.faqs} />

      <GoogleReviewsSection lang="es" />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{businessPillarEs.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{businessPillarEs.finalCtaBody}</p>
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
