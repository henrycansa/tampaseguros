import { business } from "@/lib/content/business";

export function hreflang(esPath: string, enPath: string, canonical: "es" | "en") {
  return {
    canonical: `${business.siteUrl}${canonical === "es" ? esPath : enPath}`,
    languages: {
      es: `${business.siteUrl}${esPath}`,
      en: `${business.siteUrl}${enPath}`,
    },
  };
}
