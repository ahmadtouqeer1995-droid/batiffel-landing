"use client";

import { Phone, Mail } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Qui sommes-nous", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Mentions légales", href: "#" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#E7E5E4] bg-[#FAFAF9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <p className="text-sm text-[#78716C]">
            © {new Date().getFullYear()} Batiffel — Tous droits réservés
          </p>

          {/* Center */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="text-sm text-[#78716C] hover:text-[#1C1917] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+33681361213"
              className="flex items-center gap-2 text-sm font-medium text-[#1C1917] hover:text-[#78716C] transition-colors"
            >
              <Phone size={14} />
              06 81 36 12 13
            </a>
            <a
              href="mailto:batiffel.ste@outlook.com"
              className="flex items-center gap-2 text-sm font-medium text-[#1C1917] hover:text-[#78716C] transition-colors"
            >
              <Mail size={14} />
              E-mail
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#E7E5E4] text-center">
          <p className="text-xs text-[#78716C]">
            Artisan rénovation intérieure — Île-de-France
          </p>
        </div>
      </div>
    </footer>
  );
}
