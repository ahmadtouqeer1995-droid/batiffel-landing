"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const departments = [
  { id: "75", name: "Paris", d: "M180,160 L200,160 L200,180 L180,180 Z" },
  { id: "77", name: "Seine-et-Marne", d: "M200,160 L280,140 L300,200 L260,240 L220,220 L200,180 Z" },
  { id: "78", name: "Yvelines", d: "M120,160 L180,160 L180,180 L160,220 L100,200 L100,170 Z" },
  { id: "91", name: "Essonne", d: "M160,220 L200,180 L220,220 L200,280 L160,280 Z" },
  { id: "92", name: "Hauts-de-Seine", d: "M140,180 L160,180 L160,200 L140,200 Z" },
  { id: "93", name: "Seine-Saint-Denis", d: "M200,160 L220,160 L220,180 L200,180 Z" },
  { id: "94", name: "Val-de-Marne", d: "M200,180 L220,180 L220,200 L200,200 Z" },
  { id: "95", name: "Val-d'Oise", d: "M160,120 L220,120 L220,160 L180,160 L160,140 Z" },
];

export default function IDFMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll("path.dept");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        paths,
        { strokeDashoffset: 1000, strokeDasharray: 1000, fillOpacity: 0 },
        {
          strokeDashoffset: 0,
          fillOpacity: 1,
          duration: 2,
          stagger: 0.1,
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
    <div className="relative w-full max-w-[400px] mx-auto">
      <svg
        ref={svgRef}
        viewBox="80 100 240 200"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle for 40km radius */}
        <circle
          cx="190"
          cy="190"
          r="75"
          fill="none"
          stroke="#E7E5E4"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <text x="260" y="140" fontSize="8" fill="#78716C" textAnchor="middle">
          Rayon 40km
        </text>

        {/* Paris center dot */}
        <circle cx="190" cy="180" r="3" fill="#1C1917" />
        <text x="190" y="175" fontSize="8" fill="#1C1917" textAnchor="middle" fontWeight="600">
          Paris
        </text>

        {departments.map((dept) => (
          <path
            key={dept.id}
            d={dept.d}
            className="dept"
            fill={hovered === dept.id ? "#1C1917" : "transparent"}
            fillOpacity={hovered === dept.id ? 0.08 : 0}
            stroke="#78716C"
            strokeWidth="1"
            onMouseEnter={() => setHovered(dept.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: "pointer", transition: "fill 0.3s, fill-opacity 0.3s" }}
          />
        ))}

        {/* Labels */}
        {departments.map((dept) => {
          const bbox = getBBox(dept.d);
          return (
            <text
              key={`label-${dept.id}`}
              x={bbox.cx}
              y={bbox.cy}
              fontSize="7"
              fill={hovered === dept.id ? "#1C1917" : "#78716C"}
              textAnchor="middle"
              dominantBaseline="middle"
              fontWeight={hovered === dept.id ? "600" : "400"}
              style={{ pointerEvents: "none", transition: "all 0.3s" }}
            >
              {dept.id}
            </text>
          );
        })}
      </svg>

      {hovered && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
          {departments.find((d) => d.id === hovered)?.name}
        </div>
      )}
    </div>
  );
}

function getBBox(d: string) {
  const nums = d.match(/-?\d+(\.\d+)?/g)?.map(Number) || [];
  const xs = nums.filter((_, i) => i % 2 === 0);
  const ys = nums.filter((_, i) => i % 2 === 1);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  return { cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
}
