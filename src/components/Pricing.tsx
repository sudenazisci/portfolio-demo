"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const packages = [
    {
      name: "Starter (Başlangıç)",
      desc: "Sosyal medyada profesyonel bir başlangıç yapmak isteyen butik işletmeler için ideal paket.",
      features: [
        "Aylık 12 Gönderi Planlaması",
        "Kreatif Grid Tasarımı",
        "Aylık 4 Adet Reels Videosu",
        "Temel Reklam Kurulumu",
        "Aylık Raporlama ve Analiz",
        "E-posta ile İletişim Desteği"
      ],
      popular: false,
      cta: "Starter Paket Seç"
    },
    {
      name: "Growth (Büyüme)",
      desc: "Sosyal medyada büyümek, erişimini katlamak ve aktif müşteri kazanmak isteyen dinamik markalar.",
      features: [
        "Aylık 20 Gönderi Planlaması",
        "Lüks & Editöryal Grid Tasarımı",
        "Aylık 8 Adet Reels Videosu (Kurgu dahil)",
        "Gelişmiş Meta Reklam Yönetimi",
        "Topluluk Yönetimi (Günde 1 saat)",
        "Detaylı Raporlama & Toplantı",
        "WhatsApp / Hızlı Destek Hattı"
      ],
      popular: true,
      cta: "Growth Paket Seç"
    },
    {
      name: "Premium (Lüks)",
      desc: "Sektöründe lider olmak isteyen, tam kapsamlı dijital pazarlama ve video prodüksiyonu hedefleyen markalar.",
      features: [
        "Sınırsız Gönderi ve Hikaye Yönetimi",
        "Tam Kapsamlı Marka Stratejisi",
        "Aylık 16 Adet Reels Videosu (Çekim dahil)",
        "Bütünsel Performans Reklamcılığı",
        "7/24 Topluluk & Kriz Yönetimi",
        "Haftalık Raporlama & Strateji Toplantısı",
        "Öncelikli Telefon ve Slack Desteği"
      ],
      popular: false,
      cta: "Premium Paket Seç"
    }
  ];

  return (
    <section id="fiyatlandirma" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative gradient blurs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-lavender/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-brand-rose/20 blur-[100px] pointer-events-none" />
      
      {/* Subtle background dotted grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[10px] uppercase font-sans tracking-[0.2em] text-brand-gold font-bold mb-4 w-fit"
          >
            <span>Özel Bütçelendirme</span>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy leading-tight mt-2">
            Markanıza Özel <span className="font-serif italic text-brand-gold font-normal">Esnek</span> Paketler
          </h2>
          <p className="mt-4 text-xs md:text-sm text-brand-navy/60 font-medium font-sans leading-relaxed max-w-xl mx-auto">
            Hedeflerinize ve bütçenize en uygun hizmet paketini seçin, markanızın dijital yükselişini bugünden başlatın.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 bg-brand-cream/15 border border-brand-navy/5 flex flex-col justify-between relative transition-all duration-500 rounded-[2rem] hover:shadow-[0_20px_50px_rgba(14,22,41,0.04)] hover:-translate-y-2 group
                ${pkg.popular 
                  ? "border-brand-gold bg-[#FCFAF7]/90 backdrop-blur-sm shadow-[0_20px_50px_rgba(212,175,55,0.08)] ring-1 ring-brand-gold/20 lg:-translate-y-4 lg:hover:-translate-y-6" 
                  : "bg-[#FCFAF7]/40 backdrop-blur-sm"
                }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-brand-gold text-[#FCFAF7] text-[8px] uppercase tracking-[0.2em] font-extrabold px-3 py-1.5 font-sans rounded-full shadow-md">
                  En Çok Tercih Edilen
                </span>
              )}

              {/* Package Header */}
              <div>
                <h3 className="font-serif text-2xl text-brand-navy font-bold mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {pkg.name}
                </h3>
                <p className="text-xs text-brand-navy/60 font-light font-sans mb-6 h-12 leading-relaxed">
                  {pkg.desc}
                </p>
                
                {/* Custom CTA / Quote */}
                <div className="mb-8 pb-6 border-b border-brand-navy/10 relative">
                  <span className="font-serif text-2xl font-medium text-brand-gold group-hover:text-brand-gold-muted transition-colors">
                    Teklif İsteyin
                  </span>
                  <p className="text-[9px] text-brand-navy/40 uppercase tracking-widest font-sans mt-1">
                    Markaya Özel Bütçelendirme
                  </p>
                  {/* Subtle underline line reveal on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37]/35 group-hover:w-full transition-all duration-700 ease-out" />
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 group/item">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                      <span className="text-xs md:text-sm text-brand-navy/80 font-light font-sans leading-relaxed group-hover/item:text-brand-navy transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-6">
                <a
                  href="#iletisim"
                  className={`w-full py-3.5 text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 group/btn transition-all duration-500 rounded-full ${
                    pkg.popular
                      ? "bg-brand-gold text-[#FCFAF7] hover:bg-brand-navy shadow-md hover:shadow-lg"
                      : "border border-brand-navy/20 text-brand-navy hover:bg-brand-gold hover:border-brand-gold hover:text-[#FCFAF7]"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
