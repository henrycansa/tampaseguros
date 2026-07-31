import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { homeEs, personalProductsEs } from "@/lib/content/home";
import { productsEs } from "@/lib/content/products";
import { hreflang } from "@/lib/hreflang";

const content = productsEs.funeral;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: hreflang("/plan-funeral/", "/en/funeral-plan/"),
};

const breadcrumbItems = [
  { name: "Inicio", path: "/" },
  { name: "Seguros Personales", path: "/seguros-personales/" },
  { name: content.breadcrumbName, path: "/plan-funeral/" },
];

export default function PlanFuneralPage() {
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
      quoteSource="product_funeral_quote_form"
    />
  );
}
