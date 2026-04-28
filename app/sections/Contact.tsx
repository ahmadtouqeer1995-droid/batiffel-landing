"use client";

import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import { QRCodeSVG } from "qrcode.react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

const departments = [
  "Paris (75)",
  "Seine-et-Marne (77)",
  "Yvelines (78)",
  "Essonne (91)",
  "Hauts-de-Seine (92)",
  "Seine-Saint-Denis (93)",
  "Val-de-Marne (94)",
  "Val-d'Oise (95)",
];

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    projet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append("access_key", "e10ab774-de55-4ba2-9fb3-77dd970fb8b2");
    formData.append("name", form.nom);
    formData.append("email", form.email);
    formData.append("phone", form.telephone);
    formData.append("subject", `Demande de devis - ${form.projet}`);
    formData.append("message", `Type de projet : ${form.projet}\n\nDescription :\n${form.message}`);
    formData.append("from_name", "Batiffel Website");
    formData.append("replyto", form.email);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ nom: "", telephone: "", email: "", projet: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAFAF9] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 [&>*]:min-w-0">
          {/* Left — Zone d'activité + Coordonnées */}
          <SectionReveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#78716C] mb-4">
                Où intervenons-nous ?
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-extrabold text-[#1C1917] mb-6 text-balance">
                Toute l&apos;Île-de-France
              </h2>
              <p className="text-[#78716C] leading-relaxed mb-8">
                Basés à Évry-Courcouronnes (91000), nous intervenons en
                Île-de-France.
              </p>

              {/* Departments */}
              <div className="flex flex-wrap gap-2 mb-10">
                {departments.map((dept) => (
                  <span
                    key={dept}
                    className="px-3 py-1.5 bg-white border border-[#E7E5E4] text-[#78716C] text-xs font-medium rounded-full"
                  >
                    {dept}
                  </span>
                ))}
              </div>

              {/* Coordinates */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#1C1917]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#78716C] uppercase tracking-wide mb-0.5">
                      Téléphone
                    </p>
                    <a
                      href="tel:+33681361213"
                      className="font-semibold text-[#1C1917] hover:text-[#78716C] transition-colors"
                    >
                      +33 6 81 36 12 13
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#1C1917]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#78716C] uppercase tracking-wide mb-0.5">
                      E-mail
                    </p>
                    <a
                      href="mailto:batiffel.ste@outlook.com"
                      className="font-semibold text-[#1C1917] hover:text-[#78716C] transition-colors"
                    >
                      batiffel.ste@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#1C1917]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#78716C] uppercase tracking-wide mb-0.5">
                      Adresse
                    </p>
                    <p className="font-semibold text-[#1C1917]">
                      200 Rue Rosenberg
                      <br />
                      91000 Évry-Courcouronnes
                      <br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-[#1C1917]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#78716C] uppercase tracking-wide mb-0.5">
                      Horaires
                    </p>
                    <p className="font-semibold text-[#1C1917]">
                      Lundi — Samedi
                    </p>
                    <p className="text-[#78716C]">08:00 — 19:00</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp QR */}
              <div className="bg-white border border-[#E7E5E4] rounded-2xl p-6 inline-flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-[#1C1917] font-semibold">
                  <MessageCircle size={20} />
                  <span>Contactez-nous sur WhatsApp</span>
                </div>
                <QRCodeSVG
                  value="https://wa.me/33681361213"
                  size={128}
                  bgColor="#FFFFFF"
                  fgColor="#1C1917"
                  level="M"
                  includeMargin={false}
                />
                <p className="text-xs text-[#78716C] text-center">
                  Scannez ce QR code pour nous envoyer un message
                </p>
                <a
                  href="https://wa.me/33681361213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#1C1917] underline underline-offset-4 hover:text-[#78716C] transition-colors"
                >
                  ou cliquez ici
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal delay={0.2}>
            <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#1C1917] mb-2">
                Demande de devis
              </h3>
              <p className="text-[#78716C] mb-8">
                Décrivez votre projet et nous vous recontacterons sous 24h.
              </p>

              {submitted ? (
                <div className="bg-[#F5F5F4] rounded-xl p-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center">
                    <Send size={24} className="text-white" />
                  </div>
                  <h4 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[#1C1917] mb-2">
                    Demande envoyée !
                  </h4>
                  <p className="text-[#78716C]">
                    Nous vous recontactons sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-1.5">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nom}
                      onChange={(e) =>
                        setForm({ ...form, nom: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1C1917] transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1C1917] mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.telephone}
                        onChange={(e) =>
                          setForm({ ...form, telephone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1C1917] transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1C1917] mb-1.5">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1C1917] transition-colors"
                        placeholder="jean@exemple.fr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-1.5">
                      Type de projet
                    </label>
                    <select
                      required
                      value={form.projet}
                      onChange={(e) =>
                        setForm({ ...form, projet: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl text-[#1C1917] focus:outline-none focus:border-[#1C1917] transition-colors appearance-none"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="peinture">Peinture</option>
                      <option value="electricite">Électricité</option>
                      <option value="carrelage">Carrelage</option>
                      <option value="sanitaires">Sanitaires</option>
                      <option value="renovation-complete">
                        Rénovation complète
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-1.5">
                      Description du projet
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1C1917] transition-colors resize-none"
                      placeholder="Décrivez votre projet en quelques lignes..."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 text-center bg-red-50 rounded-lg py-2">
                      Une erreur est survenue. Veuillez réessayer ou nous appeler.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#1C1917] text-white font-semibold rounded-xl hover:scale-[1.01] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                    <Send size={18} />
                  </button>

                  <p className="text-xs text-[#78716C] text-center">
                    Réponse garantie sous 24 heures ouvrées.
                  </p>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
