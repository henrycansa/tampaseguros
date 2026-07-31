import { AlertTriangle, TrendingDown, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HeroCtas } from "@/components/home/HeroCtas";
import { CoverageList } from "@/components/ui/CoverageList";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { CarrierTrustBar } from "@/components/home/CarrierTrustBar";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { LocalContext } from "@/components/city/LocalContext";
import { OtherCitiesLinks } from "@/components/city/OtherCitiesLinks";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { GoogleReviewsSection } from "@/components/ui/GoogleReviewsSection";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema, type BreadcrumbItem } from "@/components/seo/BreadcrumbSchema";
import { getCarriers } from "@/lib/carriers";
import type { ProductContent } from "@/lib/content/products";
import type { CityInfo } from "@/lib/content/cities";
import type { CityServiceContent } from "@/lib/content/city-service-content";

export function CityServicePageTemplate({
  lang,
  service,
  city,
  content,
  breadcrumbItems,
  otherCities,
  otherCitiesHref,
  serviceHref,
  ctaLabels,
  insuranceOptions,
  quoteSource,
  mapEmbedSrc,
}: {
  lang: "es" | "en";
  service: ProductContent;
  city: CityInfo;
  content: CityServiceContent;
  breadcrumbItems: BreadcrumbItem[];
  otherCities: CityInfo[];
  otherCitiesHref: (citySlug: string) => string;
  serviceHref: string;
  ctaLabels: { whatsapp: string; call: string; quote: string };
  insuranceOptions: string[];
  quoteSource: string;
  mapEmbedSrc: string;
}) {
  const carriers = getCarriers().filter((c) => c.category === service.carrierCategory);

  const t =
    lang === "es"
      ? {
          localTitle: `Contexto local en ${city.name}`,
          localLabels: { county: "Condado", region: "Referencia médica", climate: "Clima y temporada" },
          mapTitle: `Mapa de ${city.name}, FL`,
          otherCitiesTitle: "También ofrecemos este seguro en:",
          backToService: "Ver todos los detalles de este seguro",
          quoteTitle: "Cotización gratis en menos de 2 minutos",
          quoteSubtitle: "Cuéntanos qué necesitas y un asesor con licencia en Florida te contacta el mismo día, sin compromiso.",
          trustTitle: "Trabajamos con las aseguradoras líderes en Florida",
          trustSubtitle: "Comparamos entre varias compañías para encontrar tu mejor opción.",
          faqTitle: `Preguntas frecuentes: ${service.eyebrow} en ${city.name}`,
        }
      : {
          localTitle: `Local context in ${city.name}`,
          localLabels: { county: "County", region: "Medical reference", climate: "Climate & season" },
          mapTitle: `Map of ${city.name}, FL`,
          otherCitiesTitle: "We also offer this insurance in:",
          backToService: "See full details of this insurance",
          quoteTitle: "Free quote in under 2 minutes",
          quoteSubtitle: "Tell us what you need and a Florida-licensed advisor will reach out the same day, no obligation.",
          trustTitle: "We work with Florida's leading carriers",
          trustSubtitle: "We compare across several companies to find your best option.",
          faqTitle: `FAQs: ${service.eyebrow} in ${city.name}`,
        };

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema name={content.h1} description={content.geo} serviceType={service.serviceType} />

      <Hero
        lang={lang}
        eyebrow={`${service.eyebrow} · ${city.name}, FL`}
        headline={content.h1}
        geo={content.geo}
        pasItems={[
          { icon: AlertTriangle, text: service.problem },
          { icon: TrendingDown, text: service.agitation },
          { icon: ShieldCheck, text: service.solution },
        ]}
        imageSrc={service.image}
        imageAlt={service.imageAlt}
        whatsappLabel={ctaLabels.whatsapp}
        callLabel={ctaLabels.call}
        quoteLabel={ctaLabels.quote}
        compact
      />

      <LocalContext title={t.localTitle} intro={content.localIntro} city={city} labels={t.localLabels} />

      <CoverageList title={service.coverageTitle} items={service.coverageItems} />

      <section id="cotizacion" className="scroll-mt-20 bg-tardis px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">{t.quoteTitle}</h2>
            <p className="mt-3 text-white/80">{t.quoteSubtitle}</p>
          </div>
          <QuoteForm lang={lang} insuranceOptions={insuranceOptions} source={quoteSource} />
        </div>
      </section>

      <CarrierTrustBar carriers={carriers} title={t.trustTitle} subtitle={t.trustSubtitle} />

      <section className="px-4 py-14 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center font-heading text-xl font-bold text-tardis">{t.mapTitle}</h2>
          <MapEmbed src={mapEmbedSrc} title={t.mapTitle} />
        </div>
      </section>

      <OtherCitiesLinks title={t.otherCitiesTitle} cities={otherCities} buildHref={otherCitiesHref} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{t.faqTitle}</h2>
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
          <h2 className="font-heading text-3xl font-bold text-tardis">{service.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{service.finalCtaBody}</p>
          <HeroCtas lang={lang} whatsappLabel={ctaLabels.whatsapp} callLabel={ctaLabels.call} quoteLabel={ctaLabels.quote} />
          <a href={serviceHref} className="text-sm font-semibold text-tardis underline underline-offset-4">
            {t.backToService}
          </a>
        </div>
      </section>
    </main>
  );
}
