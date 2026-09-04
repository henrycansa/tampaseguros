import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityServicePageTemplate } from "@/components/city/CityServicePageTemplate";
import { homeEs, personalProductsEs } from "@/lib/content/home";
import { productsEs } from "@/lib/content/products";
import { citiesEs } from "@/lib/content/cities";
import { serviceSlugsEs, serviceSlugsEn, serviceKeyFromSlug, serviceKeys } from "@/lib/content/service-slugs";
import { buildCityServiceContentEs } from "@/lib/content/city-service-content";
import { mapEmbedSrcFor } from "@/lib/content/business";
import { hreflang } from "@/lib/hreflang";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceKeys.flatMap((key) =>
    citiesEs.map((city) => ({
      servicio: serviceSlugsEs[key],
      ciudad: city.slug,
    })),
  );
}

function resolve(servicio: string, ciudad: string) {
  const serviceKey = serviceKeyFromSlug(servicio, "es");
  const city = citiesEs.find((c) => c.slug === ciudad);
  if (!serviceKey || !city) return null;
  return { service: productsEs[serviceKey], city, serviceKey };
}

type Params = { servicio: string; ciudad: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { servicio, ciudad } = await params;
  const resolved = resolve(servicio, ciudad);
  if (!resolved) return {};
  const content = buildCityServiceContentEs(resolved.service, resolved.city);
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: hreflang(`/${servicio}/${ciudad}/`, `/en/${serviceSlugsEn[resolved.serviceKey]}/${ciudad}/`, "es"),
  };
}

export default async function ServicioCiudadPage({ params }: { params: Promise<Params> }) {
  const { servicio, ciudad } = await params;
  const resolved = resolve(servicio, ciudad);
  if (!resolved) notFound();
  const { service, city } = resolved;
  const content = buildCityServiceContentEs(service, city);

  const breadcrumbItems = [
    { name: "Inicio", path: "/" },
    { name: service.breadcrumbName, path: `/${servicio}/` },
    { name: city.name, path: `/${servicio}/${ciudad}/` },
  ];

  const otherCities = citiesEs.filter((c) => c.slug !== ciudad);
  const insuranceOptions = [...personalProductsEs.map((p) => p.title), "No estoy seguro / Otro"];

  return (
    <CityServicePageTemplate
      lang="es"
      service={service}
      city={city}
      content={content}
      breadcrumbItems={breadcrumbItems}
      otherCities={otherCities}
      otherCitiesHref={(citySlug) => `/${servicio}/${citySlug}/`}
      serviceHref={`/${servicio}/`}
      ctaLabels={{ whatsapp: homeEs.heroCtaWhatsapp, call: homeEs.heroCtaCall, quote: homeEs.heroCtaQuote }}
      insuranceOptions={insuranceOptions}
      quoteSource={`city_${servicio}_${ciudad}_quote_form`}
      mapEmbedSrc={mapEmbedSrcFor(`${city.name}, FL`)}
    />
  );
}
