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
import { homeEn, localCities, businessProductsEn } from "@/lib/content/home";
import { businessPillarEn } from "@/lib/content/pillars";
import { hreflang } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: businessPillarEn.metaTitle,
  description: businessPillarEn.metaDescription,
  alternates: hreflang("/seguros-comerciales/", "/en/business-insurance/", "en"),
};

const breadcrumbItems = [
  { name: "Home", path: "/en" },
  { name: businessPillarEn.breadcrumbName, path: "/en/business-insurance/" },
];

export default function BusinessInsurancePage() {
  const carriers = getCarriers().filter((c) => c.category === "comercial");
  const insuranceOptions = [...businessProductsEn.map((p) => p.title), "Not sure / Other"];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        lang="en"
        eyebrow={businessPillarEn.eyebrow}
        headline={businessPillarEn.h1}
        geo={businessPillarEn.geo}
        pasItems={[
          { icon: AlertTriangle, text: businessPillarEn.problem },
          { icon: TrendingDown, text: businessPillarEn.agitation },
          { icon: ShieldCheck, text: businessPillarEn.solution },
        ]}
        imageSrc="/images/seguros-comerciales-tampa-seguros.webp"
        imageAlt="Business owner reviewing contracts and financial data in his office, protected by Tampa Seguros commercial insurance"
        whatsappLabel={homeEn.heroCtaWhatsapp}
        callLabel={homeEn.heroCtaCall}
        quoteLabel={homeEn.heroCtaQuote}
        variant="dark"
        compact
      />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{businessPillarEn.gridTitle}</h2>
            <p className="mt-2 text-foreground/70">{businessPillarEn.gridIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessProductsEn.map((product) => (
              <BusinessCard
                key={product.title}
                href={product.href}
                icon={product.icon}
                title={product.title}
                description={product.description}
                linkLabel="Learn more"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{businessPillarEn.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{businessPillarEn.quoteSubtitle}</p>
          </div>
          <QuoteForm lang="en" insuranceOptions={insuranceOptions} source="business_pillar_quote_form" />
        </div>
      </section>

      <SocialProofBar stats={homeEn.socialProof} />

      <CarrierTrustBar carriers={carriers} title={businessPillarEn.trustTitle} subtitle={businessPillarEn.trustSubtitle} />

      <LocalAreas title={businessPillarEn.localTitle} body={businessPillarEn.localBody} cities={localCities} />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{businessPillarEn.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={businessPillarEn.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={businessPillarEn.faqs} />

      <GoogleReviewsSection lang="en" />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{businessPillarEn.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{businessPillarEn.finalCtaBody}</p>
          <HeroCtas
            lang="en"
            whatsappLabel={homeEn.heroCtaWhatsapp}
            callLabel={homeEn.heroCtaCall}
            quoteLabel={homeEn.heroCtaQuote}
          />
        </div>
      </section>
    </main>
  );
}
