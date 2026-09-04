import type { Metadata } from "next";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HeroCtas } from "@/components/home/HeroCtas";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ContactPageSchema } from "@/components/seo/ContactPageSchema";
import { homeEn } from "@/lib/content/home";
import { contactEn } from "@/lib/content/contact";
import { business, businessHoursEn, fullAddress, mapEmbedSrc, telHref, mailtoHref } from "@/lib/content/business";
import { hreflang } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: contactEn.metaTitle,
  description: contactEn.metaDescription,
  alternates: hreflang("/contacto/", "/en/contact/", "en"),
};

const breadcrumbItems = [
  { name: "Home", path: "/en" },
  { name: contactEn.breadcrumbName, path: "/en/contact/" },
];

export default function ContactPage() {
  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactPageSchema />

      <Hero
        lang="en"
        eyebrow={contactEn.eyebrow}
        headline={contactEn.h1}
        geo={contactEn.geo}
        body="Message us on WhatsApp, call us, or fill out the form below. A real advisor responds the same business day."
        imageSrc="/images/contacto-tampa-seguros.webp"
        imageAlt="Tampa Seguros team ready to help by phone or WhatsApp"
        whatsappLabel={homeEn.heroCtaWhatsapp}
        callLabel={homeEn.heroCtaCall}
        quoteLabel="Go to the form"
        quoteHref="#form"
        compact
      />

      <section id="form" className="scroll-mt-20 px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{contactEn.formTitle}</h2>
            <p className="mt-2 text-foreground/70">{contactEn.formSubtitle}</p>
            <div className="mt-6">
              <ContactForm lang="en" source="contact_page_form" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-tardis/10 bg-bg-soft p-6">
              <h3 className="font-heading text-lg font-bold text-tardis">{contactEn.infoTitle}</h3>
              <ul className="mt-4 flex flex-col gap-4 text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-tardis">{contactEn.officeLabel}</p>
                    <p>{fullAddress()}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-tardis">{contactEn.hoursLabel}</p>
                    <ul>
                      {businessHoursEn.map((h) => (
                        <li key={h.days}>
                          {h.days}: {h.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-tardis">{contactEn.emailLabel}</p>
                    <a href={mailtoHref()} className="hover:text-tardis">
                      {business.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-tardis">{contactEn.phoneLabel}</p>
                    <a href={telHref()} className="hover:text-tardis">
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-heading text-lg font-bold text-tardis">{contactEn.mapTitle}</h3>
              <MapEmbed src={mapEmbedSrc()} title="Tampa Seguros location on Google Maps" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{contactEn.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={contactEn.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={contactEn.faqs} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{contactEn.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{contactEn.finalCtaBody}</p>
          <HeroCtas
            lang="en"
            whatsappLabel={homeEn.heroCtaWhatsapp}
            callLabel={homeEn.heroCtaCall}
            quoteLabel="Go to the form"
            quoteHref="#form"
          />
        </div>
      </section>
    </main>
  );
}
