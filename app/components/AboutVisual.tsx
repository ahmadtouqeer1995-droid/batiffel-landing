"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutVisual() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll("path, line, rect, circle");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        paths,
        { strokeDashoffset: 800, strokeDasharray: 800, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] bg-[#F5F5F4] rounded-2xl overflow-hidden flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 400 500"
        className="w-full h-full p-8 md:p-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Room outline - isometric perspective */}
        <path
          d="M50 350 L200 280 L350 350 L200 420 Z"
          stroke="#1C1917"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Back wall */}
        <path
          d="M50 350 L50 150 L200 80 L200 280"
          stroke="#1C1917"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right wall */}
        <path
          d="M350 350 L350 150 L200 80"
          stroke="#1C1917"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Ceiling line */}
        <path
          d="M50 150 L200 80 L350 150"
          stroke="#E7E5E4"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Window on back wall */}
        <rect
          x="100"
          y="160"
          width="60"
          height="80"
          rx="2"
          stroke="#1C1917"
          strokeWidth="1.5"
        />
        <line
          x1="130"
          y1="160"
          x2="130"
          y2="240"
          stroke="#1C1917"
          strokeWidth="1"
        />
        <line
          x1="100"
          y1="200"
          x2="160"
          y2="200"
          stroke="#1C1917"
          strokeWidth="1"
        />

        {/* Door on right wall */}
        <path
          d="M270 350 L270 230 L310 210 L310 350"
          stroke="#1C1917"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="280" cy="290" r="3" fill="#1C1917" />

        {/* Paint roller - abstract representation */}
        <line
          x1="180"
          y1="120"
          x2="180"
          y2="200"
          stroke="#1C1917"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="165"
          y="100"
          width="30"
          height="20"
          rx="4"
          stroke="#1C1917"
          strokeWidth="1.5"
        />
        {/* Paint drip effect */}
        <path
          d="M170 120 Q170 140 175 145 Q180 140 180 120"
          stroke="#1C1917"
          strokeWidth="1"
          fill="none"
        />

        {/* Light fixture from ceiling */}
        <line
          x1="200"
          y1="80"
          x2="200"
          y2="130"
          stroke="#1C1917"
          strokeWidth="1"
        />
        <circle cx="200" cy="140" r="12" stroke="#1C1917" strokeWidth="1.5" />
        <path
          d="M190 140 Q200 155 210 140"
          stroke="#1C1917"
          strokeWidth="1"
          fill="none"
        />

        {/* Floor tiles - perspective grid */}
        <line
          x1="100"
          y1="385"
          x2="300"
          y2="385"
          stroke="#E7E5E4"
          strokeWidth="1"
        />
        <line
          x1="125"
          y1="395"
          x2="275"
          y2="395"
          stroke="#E7E5E4"
          strokeWidth="1"
        />
        <line
          x1="150"
          y1="405"
          x2="250"
          y2="405"
          stroke="#E7E5E4"
          strokeWidth="1"
        />

        {/* Batiffel mark */}
        <text
          x="200"
          y="460"
          textAnchor="middle"
          className="font-[family-name:var(--font-montserrat)]"
          fontSize="10"
          fontWeight="800"
          letterSpacing="0.15em"
          fill="#78716C"
        >
          BATIFFEL
        </text>
        <text
          x="200"
          y="475"
          textAnchor="middle"
          fontSize="8"
          letterSpacing="0.1em"
          fill="#A8A29E"
        >
          RÉNOVATION INTÉRIEURE
        </text>
      </svg>
    </div>
  );
}
