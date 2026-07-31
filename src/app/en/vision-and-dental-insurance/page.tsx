import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { homeEn, personalProductsEn } from "@/lib/content/home";
import { productsEn } from "@/lib/content/products";
import { hreflang } from "@/lib/hreflang";

const content = productsEn.visionDental;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: hreflang("/seguro-vision-y-dental/", "/en/vision-and-dental-insurance/"),
};

const breadcrumbItems = [
  { name: "Home", path: "/en" },
  { name: "Personal Insurance", path: "/en/personal-insurance/" },
  { name: content.breadcrumbName, path: "/en/vision-and-dental-insurance/" },
];

export default function VisionAndDentalInsurancePage() {
  const relatedItems = personalProductsEn.filter((p) => content.relatedHrefs.includes(p.href));
  const insuranceOptions = [...personalProductsEn.map((p) => p.title), "Not sure / Other"];

  return (
    <ProductPageTemplate
      lang="en"
      content={content}
      breadcrumbItems={breadcrumbItems}
      relatedItems={relatedItems}
      insuranceOptions={insuranceOptions}
      ctaLabels={{ whatsapp: homeEn.heroCtaWhatsapp, call: homeEn.heroCtaCall, quote: homeEn.heroCtaQuote }}
      socialProofStats={homeEn.socialProof}
      quoteSource="product_vision_dental_quote_form"
    />
  );
}
