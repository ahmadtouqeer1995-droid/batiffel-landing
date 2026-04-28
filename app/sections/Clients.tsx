"use client";

import SectionReveal from "../components/SectionReveal";
import { Home, Building2 } from "lucide-react";

const clients = [
  {
    icon: Home,
    title: "Particuliers",
    desc: "Propriétaires, locataires, investisseurs. Nous adaptons chaque chantier à votre budget et à vos contraintes.",
    tags: ["Maisons", "Appartements", "Studios"],
  },
  {
    icon: Building2,
    title: "Professionnels",
    desc: "Bureaux, commerces, boutiques. Rénovation clé en main sans interruption de votre activité.",
    tags: ["Bureaux", "Commerces", "Locaux professionnels"],
    note: "Pas de sous-traitance sur grands chantiers",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-4">
              Nos clients
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C1917] text-balance">
              Nous travaillons avec...
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {clients.map((client, i) => (
            <SectionReveal key={client.title} delay={0.1 * (i + 1)} className="h-full">
              <div className="group h-full flex flex-col bg-white border border-[#E7E5E4] rounded-2xl p-8 md:p-10 hover:border-[#1C1917] transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 rounded-full bg-[#F5F5F4] flex items-center justify-center mb-6 group-hover:bg-[#1C1917] transition-colors">
                  <client.icon
                    size={24}
                    className="text-[#1C1917] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#1C1917] mb-3">
                  {client.title}
                </h3>
                <p className="text-[#78716C] leading-relaxed mb-6">
                  {client.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#F5F5F4] text-[#78716C] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {client.note && (
                  <p className="mt-4 text-xs text-[#78716C] italic">
                    * {client.note}
                  </p>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
