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
  homeEs,
  localCities,
  personalProductsEs,
  businessProductsEs,
} from "@/lib/content/home";

export const metadata: Metadata = {
  description: homeEs.metaDescription,
};

export default function Home() {
  const carriers = getCarriers();
  const insuranceOptions = [
    ...personalProductsEs.map((p) => p.title),
    "Seguro Comercial",
    "No estoy seguro / Otro",
  ];

  return (
    <main>
      <HomeVideoHero
        h1={homeEs.videoHeroH1}
        subtitle={homeEs.videoHeroSubtitle}
        geo={homeEs.geo}
        personal={homeEs.gatewayPersonal}
        business={homeEs.gatewayBusiness}
        trustPoints={homeEs.heroTrustPoints}
      />

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{homeEs.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{homeEs.quoteSubtitle}</p>
          </div>
          <QuoteForm lang="es" insuranceOptions={insuranceOptions} source="home_quote_form" />
        </div>
      </section>

      <SocialProofBar stats={homeEs.socialProof} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{homeEs.personalTitle}</h2>
            <p className="mt-2 text-foreground/70">{homeEs.personalIntro}</p>
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
          <div className="mt-8 text-center">
            <a href="/seguros-personales/" className="text-sm font-semibold text-tardis underline underline-offset-4">
              {homeEs.personalCta}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{homeEs.businessTitle}</h2>
            <p className="mt-2 text-foreground/70">{homeEs.businessIntro}</p>
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
          <div className="mt-8 text-center">
            <a href="/seguros-comerciales/" className="inline-flex min-h-[48px] items-center text-sm font-semibold text-tardis underline underline-offset-4">
              {homeEs.businessCta}
            </a>
          </div>
        </div>
      </section>

      <CarrierTrustBar carriers={carriers} title={homeEs.trustTitle} subtitle={homeEs.trustSubtitle} />

      <LocalAreas title={homeEs.localTitle} body={homeEs.localBody} cities={localCities} />

      <GoogleReviewsSection lang="es" />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{homeEs.faqTitle}</h2>
            <p className="mt-2 text-foreground/70">{homeEs.faqSubtitle}</p>
          </div>
          <div className="mt-8">
            <FaqAccordion items={homeEs.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={homeEs.faqs} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{homeEs.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{homeEs.finalCtaBody}</p>
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
