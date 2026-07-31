export const business = {
  brandName: "Tampa Seguros",
  legalName: "Godager Group LLC",
  license: "L099087",
  addressLine: "400 N Ashley Dr suite 1900",
  city: "Tampa",
  state: "FL",
  zip: "33602",
  country: "US",
  areaServed: "Florida",
  phoneDisplay: "(813) 540-0707",
  phoneE164: "+18135400707",
  whatsappE164: "18135400707",
  email: "contacto@tampaseguros.com",
  siteUrl: "https://www.tampaseguros.com",
} as const;

export const businessHoursEs = [
  { days: "Lunes a Viernes", hours: "9:00 AM – 6:00 PM" },
  { days: "Sábado", hours: "10:00 AM – 2:00 PM" },
  { days: "Domingo", hours: "Cerrado" },
];

export const businessHoursEn = [
  { days: "Monday–Friday", hours: "9:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

export function whatsappHref(message: string) {
  return `https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:${business.phoneE164}`;
}

export function mailtoHref() {
  return `mailto:${business.email}`;
}

export function fullAddress() {
  return `${business.addressLine}, ${business.city}, ${business.state} ${business.zip}`;
}

export function mapEmbedSrc() {
  return mapEmbedSrcFor(fullAddress());
}

export function mapEmbedSrcFor(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
