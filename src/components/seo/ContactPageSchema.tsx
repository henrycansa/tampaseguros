import { business } from "@/lib/content/business";

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${business.brandName}`,
    url: `${business.siteUrl}/contacto/`,
    about: {
      "@type": "InsuranceAgency",
      name: business.brandName,
      telephone: business.phoneE164,
      email: business.email,
      url: business.siteUrl,
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
