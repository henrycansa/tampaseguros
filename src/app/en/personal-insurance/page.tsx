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
import { homeEn, localCities, personalProductsEn } from "@/lib/content/home";
import { personalPillarEn } from "@/lib/content/pillars";
import { hreflang } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: personalPillarEn.metaTitle,
  description: personalPillarEn.metaDescription,
  alternates: hreflang("/seguros-personales/", "/en/personal-insurance/", "en"),
};

const breadcrumbItems = [
  { name: "Home", path: "/en" },
  { name: personalPillarEn.breadcrumbName, path: "/en/personal-insurance/" },
];

export default function PersonalInsurancePage() {
  const carriers = getCarriers().filter((c) => ["salud", "auto", "hogar"].includes(c.category));
  const insuranceOptions = [...personalProductsEn.map((p) => p.title), "Not sure / Other"];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        lang="en"
        eyebrow={personalPillarEn.eyebrow}
        headline={personalPillarEn.h1}
        geo={personalPillarEn.geo}
        pasItems={[
          { icon: AlertTriangle, text: personalPillarEn.problem },
          { icon: TrendingDown, text: personalPillarEn.agitation },
          { icon: ShieldCheck, text: personalPillarEn.solution },
        ]}
        imageSrc="/images/seguros-personales-tampa-seguros.webp"
        imageAlt="Multigenerational Hispanic family walking and smiling, protected by Tampa Seguros personal insurance"
        whatsappLabel={homeEn.heroCtaWhatsapp}
        callLabel={homeEn.heroCtaCall}
        quoteLabel={homeEn.heroCtaQuote}
        compact
      />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{personalPillarEn.gridTitle}</h2>
            <p className="mt-2 text-foreground/70">{personalPillarEn.gridIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personalProductsEn.map((product) => (
              <ProductCard
                key={product.href}
                href={product.href}
                icon={product.icon}
                title={product.title}
                description={product.description}
                linkLabel="See details"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{personalPillarEn.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{personalPillarEn.quoteSubtitle}</p>
          </div>
          <QuoteForm lang="en" insuranceOptions={insuranceOptions} source="personal_pillar_quote_form" />
        </div>
      </section>

      <SocialProofBar stats={homeEn.socialProof} />

      <CarrierTrustBar carriers={carriers} title={personalPillarEn.trustTitle} subtitle={personalPillarEn.trustSubtitle} />

      <LocalAreas title={personalPillarEn.localTitle} body={personalPillarEn.localBody} cities={localCities} />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{personalPillarEn.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={personalPillarEn.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={personalPillarEn.faqs} />

      <GoogleReviewsSection lang="en" />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{personalPillarEn.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{personalPillarEn.finalCtaBody}</p>
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
