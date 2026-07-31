import { business } from "@/lib/content/business";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: business.brandName,
    url: business.siteUrl,
    logo: `${business.siteUrl}/logos/tampa-seguros-logo.svg`,
    image: `${business.siteUrl}/logos/tampa-seguros-logo.svg`,
    telephone: business.phoneE164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: business.country,
    },
    areaServed: {
      "@type": "State",
      name: business.areaServed,
    },
    parentOrganization: {
      "@type": "Organization",
      name: business.legalName,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Florida Insurance License",
      value: business.license,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
