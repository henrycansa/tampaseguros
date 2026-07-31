export type ServiceKey =
  | "obamacare"
  | "medicare"
  | "vida"
  | "funeral"
  | "shortTerm"
  | "descuento"
  | "visionDental"
  | "auto"
  | "hogar";

export const serviceSlugsEs: Record<ServiceKey, string> = {
  obamacare: "seguro-medico-obamacare",
  medicare: "seguro-medicare",
  vida: "seguro-de-vida",
  funeral: "plan-funeral",
  shortTerm: "seguro-short-term",
  descuento: "planes-medico-de-descuento",
  visionDental: "seguro-vision-y-dental",
  auto: "seguros-de-autos",
  hogar: "seguros-de-hogar",
};

export const serviceSlugsEn: Record<ServiceKey, string> = {
  obamacare: "aca-obamacare-health-insurance",
  medicare: "medicare-insurance",
  vida: "life-insurance",
  funeral: "funeral-plan",
  shortTerm: "short-term-health-insurance",
  descuento: "medical-discount-plans",
  visionDental: "vision-and-dental-insurance",
  auto: "auto-insurance",
  hogar: "home-insurance",
};

export const serviceKeys: ServiceKey[] = [
  "obamacare",
  "medicare",
  "vida",
  "funeral",
  "shortTerm",
  "descuento",
  "visionDental",
  "auto",
  "hogar",
];

export function serviceKeyFromSlug(slug: string, lang: "es" | "en"): ServiceKey | undefined {
  const map = lang === "es" ? serviceSlugsEs : serviceSlugsEn;
  return serviceKeys.find((key) => map[key] === slug);
}
