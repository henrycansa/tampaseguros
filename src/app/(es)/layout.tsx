import type { Metadata } from "next";
import { roboto, merriweather } from "@/lib/fonts";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/global/FloatingWhatsApp";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { navEs } from "@/lib/content/nav";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tampaseguros.com"),
  title: {
    default: "Tampa Seguros | Seguros personales y comerciales en Florida",
    template: "%s | Tampa Seguros",
  },
  description:
    "Asesoría 100% gratuita en español para seguros de salud, vida, auto, hogar y negocios en Florida. Tampa Seguros, operado por Godager Group LLC (Lic. L099087).",
  alternates: {
    canonical: "https://www.tampaseguros.com",
    languages: {
      es: "https://www.tampaseguros.com",
      en: "https://www.tampaseguros.com/en",
    },
  },
};

export default function EsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground font-sans pb-[76px] md:pb-0">
        <LocalBusinessSchema />
        <Header nav={navEs} lang="es" />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer nav={navEs} lang="es" />
        <FloatingWhatsApp lang="es" />
      </body>
    </html>
  );
}
