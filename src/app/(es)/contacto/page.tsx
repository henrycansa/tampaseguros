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
import { homeEs } from "@/lib/content/home";
import { contactEs } from "@/lib/content/contact";
import { business, businessHoursEs, fullAddress, mapEmbedSrc, telHref, mailtoHref } from "@/lib/content/business";
import { hreflang } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: contactEs.metaTitle,
  description: contactEs.metaDescription,
  alternates: hreflang("/contacto/", "/en/contact/"),
};

const breadcrumbItems = [
  { name: "Inicio", path: "/" },
  { name: contactEs.breadcrumbName, path: "/contacto/" },
];

export default function ContactoPage() {
  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactPageSchema />

      <Hero
        lang="es"
        eyebrow={contactEs.eyebrow}
        headline={contactEs.h1}
        geo={contactEs.geo}
        body="Escríbenos por WhatsApp, llámanos o completa el formulario abajo. Un asesor real te responde el mismo día hábil."
        imageSrc="/images/contacto-tampa-seguros.webp"
        imageAlt="Equipo de Tampa Seguros listo para atender tu consulta por teléfono o WhatsApp"
        whatsappLabel={homeEs.heroCtaWhatsapp}
        callLabel={homeEs.heroCtaCall}
        quoteLabel="Ir al formulario"
        quoteHref="#formulario"
        compact
      />

      <section id="formulario" className="scroll-mt-20 px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{contactEs.formTitle}</h2>
            <p className="mt-2 text-foreground/70">{contactEs.formSubtitle}</p>
            <div className="mt-6">
              <ContactForm lang="es" source="contact_page_form" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-tardis/10 bg-bg-soft p-6">
              <h3 className="font-heading text-lg font-bold text-tardis">{contactEs.infoTitle}</h3>
              <ul className="mt-4 flex flex-col gap-4 text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-tardis">{contactEs.officeLabel}</p>
                    <p>{fullAddress()}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-tardis">{contactEs.hoursLabel}</p>
                    <ul>
                      {businessHoursEs.map((h) => (
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
                    <p className="font-medium text-tardis">{contactEs.emailLabel}</p>
                    <a href={mailtoHref()} className="hover:text-tardis">
                      {business.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-tardis">{contactEs.phoneLabel}</p>
                    <a href={telHref()} className="hover:text-tardis">
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-heading text-lg font-bold text-tardis">{contactEs.mapTitle}</h3>
              <MapEmbed src={mapEmbedSrc()} title="Ubicación de Tampa Seguros en Google Maps" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{contactEs.faqTitle}</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={contactEs.faqs} />
          </div>
        </div>
      </section>
      <FaqSchema items={contactEs.faqs} />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-tardis">{contactEs.finalCtaTitle}</h2>
          <p className="max-w-xl text-foreground/70">{contactEs.finalCtaBody}</p>
          <HeroCtas
            lang="es"
            whatsappLabel={homeEs.heroCtaWhatsapp}
            callLabel={homeEs.heroCtaCall}
            quoteLabel="Ir al formulario"
            quoteHref="#formulario"
          />
        </div>
      </section>
    </main>
  );
}
