import { business } from "@/lib/content/business";

export function ServiceSchema({
  name,
  description,
  serviceType,
}: {
  name: string;
  description: string;
  serviceType: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "InsuranceAgency",
      name: business.brandName,
      telephone: business.phoneE164,
      url: business.siteUrl,
    },
    areaServed: {
      "@type": "State",
      name: business.areaServed,
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
