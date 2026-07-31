import { business } from "@/lib/content/business";

export function hreflang(esPath: string, enPath: string) {
  return {
    languages: {
      es: `${business.siteUrl}${esPath}`,
      en: `${business.siteUrl}${enPath}`,
    },
  };
}
