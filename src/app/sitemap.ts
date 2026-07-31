import type { MetadataRoute } from "next";
import { business } from "@/lib/content/business";
import { serviceKeys, serviceSlugsEs, serviceSlugsEn } from "@/lib/content/service-slugs";
import { citiesEs } from "@/lib/content/cities";

const BASE = business.siteUrl;

type Pair = {
  esPath: string;
  enPath: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

function pairEntries({ esPath, enPath, priority, changeFrequency }: Pair): MetadataRoute.Sitemap {
  const languages = {
    es: `${BASE}${esPath}`,
    en: `${BASE}${enPath}`,
  };
  const lastModified = new Date();

  return [
    { url: languages.es, lastModified, changeFrequency, priority, alternates: { languages } },
    { url: languages.en, lastModified, changeFrequency, priority, alternates: { languages } },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  entries.push(...pairEntries({ esPath: "/", enPath: "/en", priority: 1, changeFrequency: "weekly" }));
  entries.push(...pairEntries({ esPath: "/nosotros/", enPath: "/en/about-us/", priority: 0.6, changeFrequency: "monthly" }));
  entries.push(...pairEntries({ esPath: "/contacto/", enPath: "/en/contact/", priority: 0.6, changeFrequency: "monthly" }));
  entries.push(
    ...pairEntries({ esPath: "/seguros-personales/", enPath: "/en/personal-insurance/", priority: 0.9, changeFrequency: "weekly" }),
  );
  entries.push(
    ...pairEntries({ esPath: "/seguros-comerciales/", enPath: "/en/business-insurance/", priority: 0.9, changeFrequency: "weekly" }),
  );

  for (const key of serviceKeys) {
    const es = serviceSlugsEs[key];
    const en = serviceSlugsEn[key];

    entries.push(...pairEntries({ esPath: `/${es}/`, enPath: `/en/${en}/`, priority: 0.85, changeFrequency: "weekly" }));

    for (const city of citiesEs) {
      entries.push(
        ...pairEntries({
          esPath: `/${es}/${city.slug}/`,
          enPath: `/en/${en}/${city.slug}/`,
          priority: 0.7,
          changeFrequency: "monthly",
        }),
      );
    }
  }

  return entries;
}
