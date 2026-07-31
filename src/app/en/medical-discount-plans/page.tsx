import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { homeEn, personalProductsEn } from "@/lib/content/home";
import { productsEn } from "@/lib/content/products";
import { hreflang } from "@/lib/hreflang";

const content = productsEn.descuento;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: hreflang("/planes-medico-de-descuento/", "/en/medical-discount-plans/"),
};

const breadcrumbItems = [
  { name: "Home", path: "/en" },
  { name: "Personal Insurance", path: "/en/personal-insurance/" },
  { name: content.breadcrumbName, path: "/en/medical-discount-plans/" },
];

export default function MedicalDiscountPlansPage() {
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
      quoteSource="product_descuento_quote_form"
    />
  );
}
