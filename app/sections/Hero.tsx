"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import ThreeScene from "../components/ThreeScene";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] md:min-h-screen flex items-center pt-20 pb-12 md:pb-0"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <p className="hero-label text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-6">
              Rénovation intérieure — Île-de-France
            </p>
            <h1 className="hero-title font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-[#1C1917] mb-6 text-balance">
              Transformer votre habitat en{" "}
              <span className="text-[#DC2626]">Île-de-France</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-[#78716C] leading-relaxed mb-10 max-w-xl">
              Peinture, électricité, menuiserie, carrelage et sanitaire. Particuliers et professionnels en île-de-France.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#16A34A] text-white font-semibold rounded-full hover:scale-[1.02] hover:shadow-xl transition-all"
              >
                Demander un devis gratuit
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#1C1917] font-semibold hover:text-[#78716C] transition-colors"
              >
                Découvrir nos services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right 3D scene */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <ThreeScene />
          </div>
        </div>
      </div>
    </section>
  );
}
