"use client";

import SectionReveal from "../components/SectionReveal";
import { Paintbrush, Zap, Grid3X3, Droplets } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Peinture",
    desc: "Intérieure, façades, papier peint et enduits de finition.",
    icon: Paintbrush,
  },
  {
    num: "02",
    title: "Électricité",
    desc: "Installation complète, mise aux normes et domotique.",
    icon: Zap,
  },
  {
    num: "03",
    title: "Carrelage",
    desc: "Sols et murs, tous formats, décoration et pose précise.",
    icon: Grid3X3,
  },
  {
    num: "04",
    title: "Sanitaires",
    desc: "Plomberie, installation salle de bain et WC complets.",
    icon: Droplets,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left — Zone d'intervention + map */}
          <SectionReveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-1">
                Zone d&apos;intervention
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl md:text-3xl font-extrabold text-[#1C1917] mb-[15px] text-balance">
                Île-de-France
              </h2>
              <div className="w-[700px] h-[700px] bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden">
                <img
                  src="/ile-de-france.png"
                  alt="Carte de l'Île-de-France"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SectionReveal>

          {/* Right — Services list */}
          <SectionReveal delay={0.2}>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-4">
                Nos expertises
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-extrabold text-[#1C1917] mb-12 text-balance">
                Des services complets pour votre rénovation.
              </h2>

              <div className="space-y-0">
                {services.map((service) => (
                  <div
                    key={service.num}
                    className="group border-t border-[#E7E5E4] py-8 transition-all hover:pl-4"
                  >
                    <div className="flex items-start gap-6">
                      <span className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[#78716C] mt-1">
                        {service.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <service.icon
                            size={20}
                            className="text-[#78716C] group-hover:text-[#1C1917] transition-colors"
                          />
                          <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[#1C1917]">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-[#78716C] leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-[#E7E5E4]" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
