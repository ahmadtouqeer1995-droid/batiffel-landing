"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinksLeft = [
  { label: "Qui sommes-nous", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const navLinksRight = [
  { label: "Services", href: "#services" },
  { label: "Nos clients", href: "#clients" },
  { label: "EASERY", href: "#" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAFAF9]/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Left cluster */}
            <div className="flex items-center gap-8">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-[2px] font-[family-name:var(--font-montserrat)] text-xl font-extrabold tracking-tight text-[#1C1917] hover:opacity-70 transition-opacity"
              >
                <img src="/logo.png" alt="" className="h-[110px] w-auto" />
                <span>Batiffel</span>
              </a>
              <div className="hidden lg:flex items-center gap-6">
                {navLinksLeft.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1C1917] transition-all group-hover:w-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right cluster */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinksRight.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1C1917] transition-all group-hover:w-full" />
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="ml-2 px-5 py-2.5 bg-[#16A34A] text-white text-sm font-semibold rounded-full hover:scale-[1.02] hover:shadow-lg transition-all"
              >
                Devis gratuit
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#1C1917]"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAFAF9] transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-12 gap-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileOpen(false);
            }}
            className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-[#1C1917]"
          >
            <span>Batiffel</span>
          </a>
          <div className="flex flex-col gap-6 mt-8">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-medium text-[#1C1917] hover:text-[#78716C] transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNav("#contact")}
            className="mt-8 px-8 py-4 bg-[#16A34A] text-white text-lg font-semibold rounded-full"
          >
            Demander un devis
          </button>
        </div>
      </div>
    </>
  );
}
