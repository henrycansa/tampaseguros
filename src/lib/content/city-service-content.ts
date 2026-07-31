import type { ProductContent } from "@/lib/content/products";
import type { CityInfo } from "@/lib/content/cities";

export type CityServiceContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  geo: string;
  localIntro: string;
  faqs: { q: string; a: string }[];
};

export function buildCityServiceContentEs(service: ProductContent, city: CityInfo): CityServiceContent {
  const h1 = `${service.eyebrow} en ${city.name}, FL`;

  const geo = `${service.eyebrow} en ${city.name}, Florida: Tampa Seguros ayuda a familias y negocios en ${city.county} a comparar y elegir su cobertura, con asesoría 100% en español. Conocemos ${city.regionNote} y trabajamos con referencias locales como ${city.hospitalNote}, para que tomes una decisión informada sin costo por nuestro acompañamiento y sin letra pequeña.`;

  const localIntro = `En ${city.name} acompañamos a residentes que enfrentan ${city.climateNote}, además de las mismas necesidades de protección que cualquier familia o negocio en Florida. Ya sea que vivas cerca de ${city.hospitalNote} o en cualquier otro punto de ${city.regionNote}, un asesor de Tampa Seguros revisa tu situación específica y te recomienda la cobertura que realmente necesitas, sin presión ni compromiso.`;

  const faqs = [service.faqs[0], service.faqs[1], city.localFaq, service.faqs[2]];

  return {
    metaTitle: `${service.eyebrow} en ${city.name} FL | Tampa Seguros`,
    metaDescription: `${service.eyebrow} en ${city.name}, Florida. Asesoría gratis en español, comparamos aseguradoras licenciadas. Cotiza con Tampa Seguros (Lic. L099087).`,
    h1,
    geo,
    localIntro,
    faqs,
  };
}

export function buildCityServiceContentEn(service: ProductContent, city: CityInfo): CityServiceContent {
  const h1 = `${service.eyebrow} in ${city.name}, FL`;

  const geo = `${service.eyebrow} in ${city.name}, Florida: Tampa Seguros helps families and businesses in ${city.county} compare and choose their coverage, with free bilingual guidance. We know ${city.regionNote} and work with local references like ${city.hospitalNote}, so you make an informed decision at no cost for our support and no fine print.`;

  const localIntro = `In ${city.name} we support residents facing ${city.climateNote}, on top of the same protection needs as any family or business in Florida. Whether you live near ${city.hospitalNote} or anywhere else in ${city.regionNote}, a Tampa Seguros advisor reviews your specific situation and recommends the coverage you actually need, with no pressure and no obligation.`;

  const faqs = [service.faqs[0], service.faqs[1], city.localFaq, service.faqs[2]];

  return {
    metaTitle: `${service.eyebrow} in ${city.name} FL | Tampa Seguros`,
    metaDescription: `${service.eyebrow} in ${city.name}, Florida. Free bilingual guidance, we compare licensed carriers. Get a quote with Tampa Seguros (Lic. L099087).`,
    h1,
    geo,
    localIntro,
    faqs,
  };
}
