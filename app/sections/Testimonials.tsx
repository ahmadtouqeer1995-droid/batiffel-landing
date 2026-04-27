"use client";

import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Équipe sérieuse et propre. Notre salon et nos chambres ont été entièrement rénovés en 3 semaines. Résultat impeccable !",
    author: "Marie L.",
    location: "Évry-Courcouronnes",
    rating: 5,
  },
  {
    text: "J'ai fait appel à Batiffel pour la rénovation complète de ma boutique. Travail soigné, respect des horaires et devis respecté.",
    author: "Karim D.",
    location: "Paris 15e",
    rating: 5,
  },
  {
    text: "Peinture et électricité refaites à neuf. Devis clair, artisans à l'écoute. Je recommande les yeux fermés.",
    author: "Sophie & Thomas B.",
    location: "Issy-les-Moulineaux",
    rating: 5,
  },
  {
    text: "Notre salle de bain est magnifique ! Carrelage au sol et murs impeccables, robinetterie bien installée. Travail rapide et sans poussière.",
    author: "Amélie R.",
    location: "Montreuil",
    rating: 5,
  },
  {
    text: "Rénovation de notre local commercial à Paris. L'équipe a travaillé de nuit pour ne pas perturber notre activité. Pro et efficace.",
    author: "Franck M.",
    location: "Paris 10e",
    rating: 5,
  },
  {
    text: "Faux plafond, peinture et parquet refaits dans mon appartement. Un vrai changement, le rendement est superbe. Merci l'équipe !",
    author: "Lucas P.",
    location: "Créteil",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="temoignages" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-4">
              Avis clients
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C1917] text-balance">
              Ils nous ont fait confiance.
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Card */}
            <div className="bg-[#FAFAF9] rounded-3xl p-8 md:p-14 border border-[#E7E5E4]">
              <Quote
                size={40}
                className="text-[#E7E5E4] mb-6"
                strokeWidth={1.5}
              />

              <p className="text-xl md:text-2xl text-[#1C1917] leading-relaxed mb-8 font-medium italic">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-[family-name:var(--font-montserrat)] font-bold text-[#1C1917]">
                    {testimonials[active].author}
                  </p>
                  <p className="text-sm text-[#78716C]">
                    {testimonials[active].location}
                  </p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-[#1C1917] fill-[#1C1917]"
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-[#E7E5E4] flex items-center justify-center hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all"
                aria-label="Précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === active
                        ? "bg-[#1C1917] w-8"
                        : "bg-[#E7E5E4] hover:bg-[#78716C]"
                    }`}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-[#E7E5E4] flex items-center justify-center hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all"
                aria-label="Suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
