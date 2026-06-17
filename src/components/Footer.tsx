"use client";

import React from "react";
import { Instagram, Linkedin, MessageSquare, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-[#FCFAF7] pt-8 pb-4 md:pt-10 md:pb-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-brand-rose/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 pb-6 border-b border-[#FCFAF7]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="font-serif text-lg md:text-xl font-medium tracking-wide text-[#FCFAF7]">
                ELİF YILMAZ
              </span>
              <p className="mt-2 text-[11px] text-[#FCFAF7]/60 font-light max-w-sm leading-relaxed">
                Sosyal Medya Yönetimi, İçerik Stratejisi ve Performans Pazarlaması ile markanızı ekranda durduran dijital deneyimlere dönüştürün.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-2 mt-4 md:mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-3 h-3" />
              </a>
              <a
                href="mailto:contact@elifyilmaz.studio"
                className="w-8 h-8 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xs text-brand-gold font-medium mb-2">Navigasyon</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#hakkimda" className="text-[11px] text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-[11px] text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#portfoy" className="text-[11px] text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Portföy
                </a>
              </li>
              <li>
                <a href="#surec" className="text-[11px] text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Süreç
                </a>
              </li>
              <li>
                <a href="#fiyatlandirma" className="text-[11px] text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Fiyatlandırma
                </a>
              </li>
            </ul>
          </div>

          {/* Business Details */}
          <div>
            <h4 className="font-serif text-xs text-brand-gold font-medium mb-2">Ofis</h4>
            <p className="text-[11px] text-[#FCFAF7]/70 font-light leading-relaxed mb-1.5">
              Nişantaşı, Şişli<br />
              İstanbul, Türkiye
            </p>
            <p className="text-[11px] text-[#FCFAF7]/70 font-light">
              Pzt - Cmt: 09:00 - 18:00
            </p>
            <a
              href="mailto:hello@elifyilmaz.studio"
              className="text-[11px] text-brand-gold hover:underline block mt-1.5"
            >
              hello@elifyilmaz.studio
            </a>
          </div>

        </div>

        {/* Back to Top Button (Positioned higher, above copyright line) */}
        <div className="flex justify-end pt-6 pb-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-full border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center text-[#FCFAF7]/80 hover:text-brand-navy bg-transparent hover:bg-brand-gold transition-all duration-300 focus:outline-none group shadow-sm hover:scale-105"
            aria-label="Yukarı Git"
            title="Yukarı Git"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="pt-3 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#FCFAF7]/40 font-light border-t border-[#FCFAF7]/10">
          <p>© {currentYear} Elif Yılmaz Studio. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4 mt-2.5 md:mt-0">
            <a href="#" className="hover:text-[#FCFAF7] transition-colors">Kullanım Koşulları</a>
            <a href="#" className="hover:text-[#FCFAF7] transition-colors">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
