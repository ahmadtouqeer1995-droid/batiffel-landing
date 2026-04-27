"use client";

import SectionReveal from "../components/SectionReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rénovation complète maison",
    type: "Particulier",
    desc: "Cuisine, salon et sols refaits à neuf",
    image: "/projects/projet-1.jpg",
  },
  {
    title: "Commerce rénové",
    type: "Professionnel",
    desc: "Comptoir, éclairage et carrelage",
    image: "/projects/projet-2.jpg",
  },
  {
    title: "Boulangerie rénovée",
    type: "Professionnel",
    desc: "Vitrine, plafond et espace vente",
    image: "/projects/projet-3.jpg",
  },
  {
    title: "Aménagement bureau",
    type: "Professionnel",
    desc: "Open space, sols et éclairage",
    image: "/projects/projet-4.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <SectionReveal>
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-4">
              Réalisations
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4 text-balance">
              Tous types de projets, tous budgets.
            </h2>
            <p className="text-lg text-[#78716C] max-w-2xl">
              Des studios aux locaux commerciaux, nous donnons vie à vos espaces.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={0.1 * (i + 1)}>
              <div className="group relative bg-[#FAFAF9] rounded-2xl overflow-hidden border border-[#E7E5E4] hover:border-[#1C1917] transition-all duration-300">
                {/* Image — fills 100% container */}
                <div className="aspect-[4/3] relative overflow-hidden bg-[#E7E5E4]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1C1917]/0 group-hover:bg-[#1C1917]/10 transition-all duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold tracking-wide uppercase text-[#78716C]">
                      {project.type}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#78716C] group-hover:text-[#1C1917] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[#1C1917] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#78716C]">{project.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
