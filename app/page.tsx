import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Batiffel",
  description:
    "Entreprise de rénovation intérieure en Île-de-France. Peinture, électricité, carrelage, sanitaires pour particuliers et professionnels.",
  url: "https://batiffel.fr",
  telephone: "+33681361213",
  email: "batiffel.ste@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "200 Rue Rosenberg",
    addressLocality: "Évry-Courcouronnes",
    postalCode: "91000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.6240",
    longitude: "2.4240",
  },
  areaServed: {
    "@type": "Place",
    name: "Île-de-France",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de rénovation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peinture intérieure" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Électricité" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carrelage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sanitaires" } },
    ],
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Marie L." },
      reviewBody:
        "Équipe sérieuse et propre. Notre salon et nos chambres ont été entièrement rénovés en 3 semaines. Résultat impeccable !",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Karim D." },
      reviewBody:
        "J'ai fait appel à Batiffel pour la rénovation complète de ma boutique. Travail soigné, respect des horaires et devis respecté.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Clients />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
