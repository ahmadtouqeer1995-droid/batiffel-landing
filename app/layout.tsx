import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Batiffel | Rénovation Intérieure Île-de-France — Peinture, Électricité, Carrelage",
  description:
    "Entreprise de rénovation intérieure en Île-de-France. Peinture, électricité, carrelage, sanitaires pour particuliers et professionnels. Devis gratuit. ☎ 06 81 36 12 13",
  keywords: [
    "rénovation intérieure",
    "peinture",
    "électricité",
    "carrelage",
    "sanitaires",
    "Île-de-France",
    "Paris",
    "Évry-Courcouronnes",
    "artisan",
    "devis gratuit",
  ],
  authors: [{ name: "Batiffel" }],
  openGraph: {
    title: "Batiffel | Rénovation Intérieure Île-de-France",
    description:
      "Peinture, électricité, carrelage et sanitaires. Particuliers et professionnels en Île-de-France. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    url: "https://batiffel.fr",
    siteName: "Batiffel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batiffel | Rénovation Intérieure Île-de-France",
    description:
      "Peinture, électricité, carrelage et sanitaires. Devis gratuit en Île-de-France.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://batiffel.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
