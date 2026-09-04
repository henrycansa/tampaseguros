import type { Metadata } from "next";
import { roboto, merriweather } from "@/lib/fonts";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/global/FloatingWhatsApp";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { navEn } from "@/lib/content/nav";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tampaseguros.com"),
  title: {
    default: "Tampa Seguros | Personal & Commercial Insurance in Florida",
    template: "%s | Tampa Seguros",
  },
  description:
    "Free, bilingual insurance guidance for health, life, auto, home and business coverage in Florida. Tampa Seguros, operated by Godager Group LLC (Lic. L099087).",
  alternates: {
    canonical: "https://www.tampaseguros.com/en",
    languages: {
      es: "https://www.tampaseguros.com",
      en: "https://www.tampaseguros.com/en",
    },
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground font-sans pb-[76px] md:pb-0">
        <LocalBusinessSchema />
        <Header nav={navEn} lang="en" />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer nav={navEn} lang="en" />
        <FloatingWhatsApp lang="en" />
      </body>
    </html>
  );
}
