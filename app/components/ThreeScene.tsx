"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Hammer, Wrench, Paintbrush, HardHat } from "lucide-react";

const bricks = [
  { color: "#16A34A", top: "8%", left: "6%", w: 44, h: 30, delay: 0 },
  { color: "#DC2626", top: "15%", right: "10%", w: 38, h: 26, delay: 0.3 },
  { color: "#16A34A", top: "75%", left: "4%", w: 34, h: 22, delay: 0.6 },
  { color: "#DC2626", top: "78%", right: "6%", w: 40, h: 28, delay: 0.9 },
  { color: "#16A34A", top: "42%", left: "2%", w: 30, h: 18, delay: 1.2 },
  { color: "#DC2626", top: "48%", right: "2%", w: 36, h: 24, delay: 1.5 },
  { color: "#16A34A", top: "5%", left: "55%", w: 26, h: 16, delay: 0.4 },
  { color: "#DC2626", bottom: "8%", left: "52%", w: 32, h: 20, delay: 0.8 },
];

export default function ConstructionScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hammerRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Briques qui flottent doucement
      gsap.utils.toArray<HTMLElement>(".brick").forEach((brick, i) => {
        gsap.to(brick, {
          y: "-=14",
          rotation: i % 2 === 0 ? 10 : -10,
          duration: 2.2 + (i % 3) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: bricks[i]?.delay ?? 0,
        });
      });

      // Outils qui tournent lentement
      gsap.to(".orbit-tool", {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      // Marteau qui frappe
      if (hammerRef.current) {
        gsap.to(hammerRef.current, {
          rotation: -30,
          duration: 0.25,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          repeatDelay: 0.35,
        });
      }

      // Maison qui pulse légèrement
      if (houseRef.current) {
        gsap.to(houseRef.current, {
          scale: 1.03,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Éclats / sparkles
      gsap.utils.toArray<HTMLElement>(".spark").forEach((spark, i) => {
        gsap.to(spark, {
          scale: 1.6,
          opacity: 0,
          duration: 1,
          repeat: -1,
          delay: i * 0.25,
          ease: "power1.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden"
    >
      {/* Briques en arrière-plan */}
      {bricks.map((b, i) => (
        <div
          key={i}
          className="brick absolute rounded-md shadow-md"
          style={{
            backgroundColor: b.color,
            width: b.w,
            height: b.h,
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
          }}
        />
      ))}

      {/* Maison au centre */}
      <div
        ref={houseRef}
        className="relative z-0 flex flex-col items-center justify-center"
      >
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[260px] md:h-[260px]"
        >
          {/* Toit */}
          <path
            d="M110 20L200 90V200H20V90L110 20Z"
            stroke="#1C1917"
            strokeWidth="4"
            fill="#FAFAF9"
          />
          {/* Ligne de toit */}
          <path
            d="M20 90L110 20L200 90"
            stroke="#1C1917"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cheminée */}
          <rect
            x="155"
            y="45"
            width="20"
            height="35"
            rx="2"
            fill="#DC2626"
            stroke="#1C1917"
            strokeWidth="3"
          />
          {/* Fumée */}
          <circle cx="165" cy="38" r="5" fill="#78716C" opacity="0.4" />
          <circle cx="170" cy="30" r="4" fill="#78716C" opacity="0.3" />
          {/* Porte */}
          <rect
            x="95"
            y="140"
            width="30"
            height="60"
            rx="2"
            fill="#16A34A"
            stroke="#1C1917"
            strokeWidth="3"
          />
          {/* Poignée porte */}
          <circle cx="118" cy="175" r="3" fill="#1C1917" />
          {/* Fenêtre gauche */}
          <rect
            x="45"
            y="110"
            width="36"
            height="36"
            rx="2"
            fill="#E7E5E4"
            stroke="#1C1917"
            strokeWidth="3"
          />
          <line x1="63" y1="110" x2="63" y2="146" stroke="#1C1917" strokeWidth="2" />
          <line x1="45" y1="128" x2="81" y2="128" stroke="#1C1917" strokeWidth="2" />
          {/* Fenêtre droite */}
          <rect
            x="139"
            y="110"
            width="36"
            height="36"
            rx="2"
            fill="#E7E5E4"
            stroke="#1C1917"
            strokeWidth="3"
          />
          <line x1="157" y1="110" x2="157" y2="146" stroke="#1C1917" strokeWidth="2" />
          <line x1="139" y1="128" x2="175" y2="128" stroke="#1C1917" strokeWidth="2" />
          {/* Briques décoratives sur le mur */}
          <rect x="50" y="160" width="14" height="8" rx="1" fill="#DC2626" opacity="0.9" />
          <rect x="155" y="155" width="14" height="8" rx="1" fill="#16A34A" opacity="0.9" />
          <rect x="40" y="100" width="12" height="7" rx="1" fill="#16A34A" opacity="0.8" />
          <rect x="180" y="105" width="12" height="7" rx="1" fill="#DC2626" opacity="0.8" />
          {/* Sol */}
          <line x1="10" y1="200" x2="210" y2="200" stroke="#1C1917" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Outils orbitant autour */}
      <div className="orbit-tool absolute w-72 h-72 md:w-96 md:h-96 flex items-center justify-center pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Wrench size={36} className="text-[#DC2626]" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <Paintbrush size={36} className="text-[#16A34A]" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <HardHat size={36} className="text-[#78716C]" />
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
          <Wrench size={36} className="text-[#DC2626] rotate-45" />
        </div>
      </div>

      {/* Marteau qui frappe en bas à droite de la maison */}
      <div className="absolute bottom-[18%] right-[28%] md:right-[30%] z-20">
        <div
          ref={hammerRef}
          className="origin-bottom-right"
          style={{ transformOrigin: "85% 95%" }}
        >
          <Hammer size={52} className="text-[#1C1917]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Éclats */}
      <div className="absolute top-[28%] right-[22%] z-20">
        <div className="spark w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
      </div>
      <div className="absolute bottom-[22%] left-[26%] z-20">
        <div className="spark w-2 h-2 rounded-full bg-[#16A34A]" />
      </div>
      <div className="absolute top-[22%] left-[30%] z-20">
        <div className="spark w-2 h-2 rounded-full bg-[#16A34A]" />
      </div>
    </div>
  );
}
