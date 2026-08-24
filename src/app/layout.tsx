import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Apenas o peso e o estilo realmente usados no site (ver componentes de
// título) — carregar pesos/itálicos não utilizados custa performance sem
// nenhum ganho visual.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.zip,
    addressCountry: "BR",
  },
};

export const metadata: Metadata = {
  title: "Vittace | Odontologia e Medicina Estética",
  description:
    "Clínica Vittace, em Curitiba: odontologia e medicina estética em um só endereço, com atendimento próximo do início ao fim. Agende sua avaliação.",
  keywords: [
    "clínica odontológica",
    "medicina estética",
    "harmonização facial",
    "clínica premium",
    "Vittace",
  ],
  openGraph: {
    title: "Vittace | Odontologia e Medicina Estética",
    description:
      "Odontologia e medicina estética em um só endereço, com atendimento próximo do início ao fim. Agende sua avaliação na Clínica Vittace.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-vittace-cream text-vittace-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-vittace-brown focus:px-6 focus:py-3 focus:text-sm focus:text-vittace-cream"
        >
          Pular para o conteúdo
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </MotionConfig>
      </body>
    </html>
  );
}
