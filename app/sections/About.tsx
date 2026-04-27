"use client";

import SectionReveal from "../components/SectionReveal";
import AboutVisual from "../components/AboutVisual";
import { Check } from "lucide-react";

const points = [
  "Interventions sur mesure, tous budgets",
  "Zone d'action : toute l'Île-de-France (40 km depuis Paris)",
  "Devis gratuit et personnalisé",
  "Artisanat français, matériaux de qualité",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <SectionReveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-4">
                À propos
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-8 text-balance leading-tight">
                Une équipe d&apos;artisans à votre service depuis Évry-Courcouronnes.
              </h2>
              <p className="text-lg text-[#78716C] leading-relaxed mb-10">
                Batiffel accompagne les particuliers et les professionnels de
                l&apos;Île-de-France dans tous leurs projets de rénovation intérieure.
                De la simple mise en peinture à la rénovation complète de locaux
                commerciaux, nous intervenons avec rigueur, propreté et respect
                des délais.
              </p>
              <ul className="space-y-4">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#1C1917] flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </span>
                    <span className="text-[#1C1917] font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Right — Image placeholder */}
          <SectionReveal delay={0.2}>
            <AboutVisual />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
