import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityServicePageTemplate } from "@/components/city/CityServicePageTemplate";
import { homeEn, personalProductsEn } from "@/lib/content/home";
import { productsEn } from "@/lib/content/products";
import { citiesEn } from "@/lib/content/cities";
import { serviceSlugsEs, serviceSlugsEn, serviceKeyFromSlug, serviceKeys } from "@/lib/content/service-slugs";
import { buildCityServiceContentEn } from "@/lib/content/city-service-content";
import { mapEmbedSrcFor } from "@/lib/content/business";
import { hreflang } from "@/lib/hreflang";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceKeys.flatMap((key) =>
    citiesEn.map((city) => ({
      service: serviceSlugsEn[key],
      city: city.slug,
    })),
  );
}

function resolve(service: string, city: string) {
  const serviceKey = serviceKeyFromSlug(service, "en");
  const cityInfo = citiesEn.find((c) => c.slug === city);
  if (!serviceKey || !cityInfo) return null;
  return { service: productsEn[serviceKey], city: cityInfo, serviceKey };
}

type Params = { service: string; city: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service, city } = await params;
  const resolved = resolve(service, city);
  if (!resolved) return {};
  const content = buildCityServiceContentEn(resolved.service, resolved.city);
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: hreflang(`/${serviceSlugsEs[resolved.serviceKey]}/${city}/`, `/en/${service}/${city}/`),
  };
}

export default async function ServiceCityPage({ params }: { params: Promise<Params> }) {
  const { service: serviceSlug, city: citySlug } = await params;
  const resolved = resolve(serviceSlug, citySlug);
  if (!resolved) notFound();
  const { service, city } = resolved;
  const content = buildCityServiceContentEn(service, city);

  const breadcrumbItems = [
    { name: "Home", path: "/en" },
    { name: service.breadcrumbName, path: `/en/${serviceSlug}/` },
    { name: city.name, path: `/en/${serviceSlug}/${citySlug}/` },
  ];

  const otherCities = citiesEn.filter((c) => c.slug !== citySlug);
  const insuranceOptions = [...personalProductsEn.map((p) => p.title), "Not sure / Other"];

  return (
    <CityServicePageTemplate
      lang="en"
      service={service}
      city={city}
      content={content}
      breadcrumbItems={breadcrumbItems}
      otherCities={otherCities}
      otherCitiesHref={(slug) => `/en/${serviceSlug}/${slug}/`}
      serviceHref={`/en/${serviceSlug}/`}
      ctaLabels={{ whatsapp: homeEn.heroCtaWhatsapp, call: homeEn.heroCtaCall, quote: homeEn.heroCtaQuote }}
      insuranceOptions={insuranceOptions}
      quoteSource={`city_${serviceSlug}_${citySlug}_quote_form`}
      mapEmbedSrc={mapEmbedSrcFor(`${city.name}, FL`)}
    />
  );
}
