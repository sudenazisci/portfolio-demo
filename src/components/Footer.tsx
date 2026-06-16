"use client";

import React from "react";
import { Instagram, Linkedin, MessageSquare, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-[#FCFAF7] pt-20 pb-10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-brand-rose/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#FCFAF7]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-[#FCFAF7]">
                ELİF YILMAZ
              </span>
              <p className="mt-4 text-sm text-[#FCFAF7]/60 font-light max-w-sm leading-relaxed">
                Sosyal Medya Yönetimi, İçerik Stratejisi ve Performans Pazarlaması ile markanızı ekranda durduran dijital deneyimlere dönüştürün.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-8 md:mt-12">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@elifyilmaz.studio"
                className="w-10 h-10 rounded-full border border-[#FCFAF7]/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold text-[#FCFAF7] transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold font-medium mb-6">Navigasyon</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hakkimda" className="text-sm text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-sm text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#portfoy" className="text-sm text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Portföy
                </a>
              </li>
              <li>
                <a href="#surec" className="text-sm text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Süreç
                </a>
              </li>
              <li>
                <a href="#fiyatlandirma" className="text-sm text-[#FCFAF7]/70 hover:text-[#FCFAF7] transition-colors duration-300">
                  Fiyatlandırma
                </a>
              </li>
            </ul>
          </div>

          {/* Business Details */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold font-medium mb-6">Ofis</h4>
            <p className="text-sm text-[#FCFAF7]/70 font-light leading-relaxed mb-4">
              Nişantaşı, Şişli<br />
              İstanbul, Türkiye
            </p>
            <p className="text-sm text-[#FCFAF7]/70 font-light">
              Pzt - Cmt: 09:00 - 18:00
            </p>
            <a
              href="mailto:hello@elifyilmaz.studio"
              className="text-sm text-brand-gold hover:underline block mt-4"
            >
              hello@elifyilmaz.studio
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FCFAF7]/40 font-light">
          <p>© {currentYear} Elif Yılmaz Studio. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#FCFAF7] transition-colors">Kullanım Koşulları</a>
            <a href="#" className="hover:text-[#FCFAF7] transition-colors">Gizlilik Politikası</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1 hover:text-[#FCFAF7] transition-colors focus:outline-none"
              aria-label="Yukarı Git"
            >
              Yukarı Git <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
