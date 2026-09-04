import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { homeEs, personalProductsEs } from "@/lib/content/home";
import { productsEs } from "@/lib/content/products";
import { hreflang } from "@/lib/hreflang";

const content = productsEs.visionDental;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: hreflang("/seguro-vision-y-dental/", "/en/vision-and-dental-insurance/", "es"),
};

const breadcrumbItems = [
  { name: "Inicio", path: "/" },
  { name: "Seguros Personales", path: "/seguros-personales/" },
  { name: content.breadcrumbName, path: "/seguro-vision-y-dental/" },
];

export default function SeguroVisionYDentalPage() {
  const relatedItems = personalProductsEs.filter((p) => content.relatedHrefs.includes(p.href));
  const insuranceOptions = [...personalProductsEs.map((p) => p.title), "No estoy seguro / Otro"];

  return (
    <ProductPageTemplate
      lang="es"
      content={content}
      breadcrumbItems={breadcrumbItems}
      relatedItems={relatedItems}
      insuranceOptions={insuranceOptions}
      ctaLabels={{ whatsapp: homeEs.heroCtaWhatsapp, call: homeEs.heroCtaCall, quote: homeEs.heroCtaQuote }}
      socialProofStats={homeEs.socialProof}
      quoteSource="product_vision_dental_quote_form"
    />
  );
}
