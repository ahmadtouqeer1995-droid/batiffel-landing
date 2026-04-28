"use client";

import { Phone, Mail, ArrowRight } from "lucide-react";

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
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="border-t border-[#E7E5E4]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-16 md:py-24 text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-extrabold text-[#1C1917] mb-6 text-balance">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-[#78716C] mb-10 max-w-xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour un devis gratuit et
            personnalisé.
          </p>
          <button
            onClick={() => handleClick("#contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#16A34A] text-white font-semibold rounded-full hover:scale-[1.02] hover:shadow-xl transition-all"
          >
            Demandez un devis gratuit
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-[#E7E5E4]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left */}
            <p className="text-sm text-[#1C1917]">
              © {new Date().getFullYear()} Batiffel — Tous droits réservés
            </p>

            {/* Center */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-[#1C1917] hover:text-[#16A34A] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+33681361213"
                className="flex items-center gap-2 text-sm font-medium text-[#1C1917] hover:text-[#16A34A] transition-colors"
              >
                <Phone size={14} />
                06 81 36 12 13
              </a>
              <a
                href="mailto:batiffel.ste@outlook.com"
                className="flex items-center gap-2 text-sm font-medium text-[#1C1917] hover:text-[#16A34A] transition-colors"
              >
                <Mail size={14} />
                E-mail
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E7E5E4] text-center">
            <p className="text-xs text-[#1C1917]">
              Artisan rénovation intérieure — Île-de-France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
