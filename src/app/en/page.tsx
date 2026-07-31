import type { Metadata } from "next";
import { HomeVideoHero } from "@/components/home/HomeVideoHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ProductCard } from "@/components/ui/ProductCard";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { CarrierTrustBar } from "@/components/home/CarrierTrustBar";
import { LocalAreas } from "@/components/home/LocalAreas";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { HeroCtas } from "@/components/home/HeroCtas";
import { GoogleReviewsSection } from "@/components/ui/GoogleReviewsSection";
import { getCarriers } from "@/lib/carriers";
import {
  homeEn,
  localCities,
  personalProductsEn,
  businessProductsEn,
} from "@/lib/content/home";

export const metadata: Metadata = {
  description: homeEn.metaDescription,
};

export default function HomeEn() {
  const carriers = getCarriers();
  const insuranceOptions = [
    ...personalProductsEn.map((p) => p.title),
    "Commercial Insurance",
    "Not sure / Other",
  ];

  return (
    <main>
      <HomeVideoHero
        h1={homeEn.videoHeroH1}
        subtitle={homeEn.videoHeroSubtitle}
        geo={homeEn.geo}
        personal={homeEn.gatewayPersonal}
        business={homeEn.gatewayBusiness}
        trustPoints={homeEn.heroTrustPoints}
      />

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{homeEn.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{homeEn.quoteSubtitle}</p>
          </div>
          <QuoteForm lang="en" insuranceOptions={insuranceOptions} source="home_quote_form" />
        </div>
      </section>

      <SocialProofBar stats={homeEn.socialProof} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{homeEn.personalTitle}</h2>
            <p className="mt-2 text-foreground/70">{homeEn.personalIntro}</p>
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
          <div className="mt-8 text-center">
            <a href="/en/personal-insurance/" className="text-sm font-semibold text-tardis underline underline-offset-4">
              {homeEn.personalCta}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{homeEn.businessTitle}</h2>
            <p className="mt-2 text-foreground/70">{homeEn.businessIntro}</p>
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
          <div className="mt-8 text-center">
            <a href="/en/business-insurance/" className="inline-flex min-h-[48px] items-center text-sm font-semibold text-tardis underline underline-offset-4">
              {homeEn.businessCta}
            </a>
          </div>
        </div>
      </section>

      <CarrierTrustBar carriers={carriers} title={homeEn.trustTitle} subtitle={homeEn.trustSubtitle} />

      <LocalAreas title={homeEn.localTitle} body={homeEn.localBody} cities={localCities} />

      <GoogleReviewsSection lang="en" />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{homeEn.faqTitle}</h2>
            <p className="mt-2 text-foreground/70">{homeEn.faqSubtitle}</p>
          </div>
          <div className="mt-8">
            <FaqAccordion items={homeEn.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={homeEn.faqs} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{homeEn.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{homeEn.finalCtaBody}</p>
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
