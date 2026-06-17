"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Palette, Send, BarChart2, TrendingUp } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Keşif",
      description: "Markanızı, sektörünüzü, rakiplerinizi ve hedef kitlenizi derinlemesine inceliyoruz. Sosyal medya check-up'ı yaparak eksikleri belirliyoruz.",
      icon: Search
    },
    {
      num: "02",
      title: "Strateji",
      description: "Marka kimliğinize uygun tasarım şablonlarını, içerik sütunlarını, paylaşım sıklığını ve büyüme hedeflerini içeren detaylı yol haritası çiziyoruz.",
      icon: Compass
    },
    {
      num: "03",
      title: "İçerik Üretimi",
      description: "Grafik tasarım, Reels kurgusu ve metin yazarlığı (copywriting) süreçlerini yürütüyoruz. Markanıza özel lüks ve özgün görsel dil oluşturuyoruz.",
      icon: Palette
    },
    {
      num: "04",
      title: "Yayınlama",
      description: "Hazırlanan içerikleri en yüksek etkileşim saatlerinde, doğru etiket (hashtag) ve açıklama kurgularıyla planlayıp yayına alıyoruz.",
      icon: Send
    },
    {
      num: "05",
      title: "Optimizasyon",
      description: "Haftalık ve aylık analizler yaparak hangi içeriklerin ve reklamların daha yüksek performans gösterdiğini belirliyoruz, bütçeyi optimize ediyoruz.",
      icon: BarChart2
    },
    {
      num: "06",
      title: "Ölçeklendirme",
      description: "Başarılı olan kampanya ve kurguları çoğaltarak markanızın erişimini, satışlarını ve dijital dünyadaki otoritesini katlayarak büyütyoruz.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="surec" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-lavender/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-extrabold mb-4 block">
            Çalışma Metodolojim
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            Adım Adım <span className="font-serif italic text-brand-gold font-normal">Büyüme</span> Süreci
          </h2>
          <div className="w-12 h-[2px] bg-brand-gold/40 mx-auto mt-5 mb-4" />
          <p className="text-sm md:text-base text-brand-navy/60 font-light font-sans leading-relaxed">
            Fikir aşamasından nihai ölçeklendirmeye kadar uyguladığım şeffaf, butik ve başarı odaklı çalışma aşamaları.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Vertical connecting line with gradient accent - responsive left-6 on mobile, centered on desktop */}
          <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-gold/60 via-brand-gold-muted/30 to-brand-gold/10 -translate-x-1/2" />

          <div className="space-y-10 lg:space-y-14">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 45 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col lg:flex-row items-stretch lg:items-center lg:justify-between relative group ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spacer block to keep grid aligned */}
                  <div className="w-full lg:w-[45%] hidden lg:block" />

                  {/* Chronometer Node Circle in the center - responsive left-6 on mobile, centered on desktop */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-brand-navy border border-brand-gold/30 flex items-center justify-center z-20 shadow-xl group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-[-3px] lg:inset-[-4px] rounded-full border border-brand-gold/15 group-hover:border-brand-gold/45 transition-colors duration-500 animate-pulse-slow" />
                    <span className="text-[9px] lg:text-[10px] font-sans font-extrabold text-brand-gold tracking-widest">{step.num}</span>
                  </div>

                  {/* Content Card - shifts to right on mobile using w-[calc(100%-48px)] and ml-auto */}
                  <div className="w-[calc(100%-48px)] ml-auto lg:ml-0 lg:w-[45%] p-5 md:p-7 bg-white/40 backdrop-blur-md border border-brand-gold/15 hover:border-brand-gold/45 hover:shadow-[0_15px_40px_rgba(212,175,55,0.05)] hover:-translate-y-1 transition-all duration-500 rounded-[1.75rem] relative overflow-hidden">
                    {/* Top gold accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-gold/60 via-brand-gold-muted/30 to-transparent" />
                    
                    <div className="flex items-start gap-4">
                      {/* Icon container - shurnk sizes */}
                      <div className="w-10 h-10 rounded-[0.9rem] bg-brand-navy flex items-center justify-center shadow-md border border-brand-gold/20 group-hover:bg-brand-gold transition-all duration-500 shrink-0">
                        <IconComponent className="w-4.5 h-4.5 text-brand-gold group-hover:text-brand-navy transition-colors duration-500" />
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold block">ADIM {step.num}</span>
                        <h3 className="font-serif text-lg md:text-xl text-brand-navy font-bold tracking-wide transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        {/* Dynamic underline detail */}
                        <div className="w-8 h-[1.5px] bg-brand-gold/30 mt-1.5 group-hover:w-14 transition-all duration-500" />
                      </div>
                    </div>
                    
                    <p className="mt-4 text-xs md:text-sm text-brand-navy/70 font-sans font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
