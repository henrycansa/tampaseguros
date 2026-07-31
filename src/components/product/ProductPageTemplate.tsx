import { AlertTriangle, TrendingDown, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HeroCtas } from "@/components/home/HeroCtas";
import { CoverageList } from "@/components/ui/CoverageList";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { CarrierTrustBar } from "@/components/home/CarrierTrustBar";
import { LocalAreas } from "@/components/home/LocalAreas";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { GoogleReviewsSection } from "@/components/ui/GoogleReviewsSection";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema, type BreadcrumbItem } from "@/components/seo/BreadcrumbSchema";
import { getCarriers } from "@/lib/carriers";
import { localCities, type ProductCardData } from "@/lib/content/home";
import type { ProductContent } from "@/lib/content/products";

export function ProductPageTemplate({
  lang,
  content,
  breadcrumbItems,
  relatedItems,
  insuranceOptions,
  ctaLabels,
  socialProofStats,
  quoteSource,
}: {
  lang: "es" | "en";
  content: ProductContent;
  breadcrumbItems: BreadcrumbItem[];
  relatedItems: ProductCardData[];
  insuranceOptions: string[];
  ctaLabels: { whatsapp: string; call: string; quote: string };
  socialProofStats: { value: string; label: string }[];
  quoteSource: string;
}) {
  const carriers = getCarriers().filter((c) => c.category === content.carrierCategory);

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema name={content.h1} description={content.geo} serviceType={content.serviceType} />

      <Hero
        lang={lang}
        eyebrow={content.eyebrow}
        headline={content.h1}
        geo={content.geo}
        pasItems={[
          { icon: AlertTriangle, text: content.problem },
          { icon: TrendingDown, text: content.agitation },
          { icon: ShieldCheck, text: content.solution },
        ]}
        imageSrc={content.image}
        imageAlt={content.imageAlt}
        imageFlip={content.imageFlip}
        whatsappLabel={ctaLabels.whatsapp}
        callLabel={ctaLabels.call}
        quoteLabel={ctaLabels.quote}
        compact
      />

      <CoverageList title={content.coverageTitle} items={content.coverageItems} />

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
              {lang === "es" ? "Cotización gratis en menos de 2 minutos" : "Free quote in under 2 minutes"}
            </h2>
            <p className="mt-3 text-white/80">
              {lang === "es"
                ? "Cuéntanos qué necesitas y un asesor con licencia en Florida te contacta el mismo día, sin compromiso."
                : "Tell us what you need and a Florida-licensed advisor will reach out the same day, no obligation."}
            </p>
          </div>
          <QuoteForm lang={lang} insuranceOptions={insuranceOptions} source={quoteSource} />
        </div>
      </section>

      <SocialProofBar stats={socialProofStats} />

      <CarrierTrustBar
        carriers={carriers}
        title={lang === "es" ? "Trabajamos con las aseguradoras líderes en Florida" : "We work with Florida's leading carriers"}
        subtitle={
          lang === "es"
            ? "Comparamos entre varias compañías para encontrar tu mejor opción, sin favorecer a una sola marca."
            : "We compare across several companies to find your best option, without favoring a single brand."
        }
      />

      <LocalAreas
        title={lang === "es" ? "Asesoría cercana en tu comunidad" : "Local guidance in your community"}
        body={
          lang === "es"
            ? "Ayudamos a clientes en todo Florida, con presencia especial en el área de Tampa Bay: Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland y Plant City."
            : "We help clients across Florida, with a strong presence in the Tampa Bay area: Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland and Plant City."
        }
        cities={localCities}
      />

      <RelatedServices title={content.relatedTitle} items={relatedItems} linkLabel={content.relatedLinkLabel} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{content.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={content.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={content.faqs} />

      <GoogleReviewsSection lang={lang} />

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{content.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{content.finalCtaBody}</p>
          <HeroCtas lang={lang} whatsappLabel={ctaLabels.whatsapp} callLabel={ctaLabels.call} quoteLabel={ctaLabels.quote} />
        </div>
      </section>
    </main>
  );
}
