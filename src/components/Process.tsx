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
      icon: <Search className="w-5 h-5 text-[#FCFAF7]" />
    },
    {
      num: "02",
      title: "Strateji",
      description: "Marka kimliğinize uygun tasarım şablonlarını, içerik sütunlarını, paylaşım sıklığını ve büyüme hedeflerini içeren detaylı yol haritası çiziyoruz.",
      icon: <Compass className="w-5 h-5 text-[#FCFAF7]" />
    },
    {
      num: "03",
      title: "İçerik Üretimi",
      description: "Grafik tasarım, Reels kurgusu ve metin yazarlığı (copywriting) süreçlerini yürütüyoruz. Markanıza özel lüks ve özgün görsel dil oluşturuyoruz.",
      icon: <Palette className="w-5 h-5 text-[#FCFAF7]" />
    },
    {
      num: "04",
      title: "Yayınlama",
      description: "Hazırlanan içerikleri en yüksek etkileşim saatlerinde, doğru etiket (hashtag) ve açıklama kurgularıyla planlayıp yayına alıyoruz.",
      icon: <Send className="w-5 h-5 text-[#FCFAF7]" />
    },
    {
      num: "05",
      title: "Optimizasyon",
      description: "Haftalık ve aylık analizler yaparak hangi içeriklerin ve reklamların daha yüksek performans gösterdiğini belirliyoruz, bütçeyi optimize ediyoruz.",
      icon: <BarChart2 className="w-5 h-5 text-[#FCFAF7]" />
    },
    {
      num: "06",
      title: "Ölçeklendirme",
      description: "Başarılı olan kampanya ve kurguları çoğaltarak markanızın erişimini, satışlarını ve dijital dünyadaki otoritesini katlayarak büyütyoruz.",
      icon: <TrendingUp className="w-5 h-5 text-[#FCFAF7]" />
    }
  ];

  return (
    <section id="surec" className="py-24 bg-[#FCFAF7] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-lavender/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-bold mb-4 block">
            Çalışma Metodolojim
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy leading-tight">
            Adım Adım <span className="font-serif italic text-brand-gold">Büyüme</span> Süreci
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-navy/60 font-light font-sans leading-relaxed">
            Fikir aşamasından nihai ölçeklendirmeye kadar uyguladığım şeffaf ve başarı odaklı çalışma aşamaları.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Vertical connecting line on desktop */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-brand-gold/15 -translate-x-[50%] hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-center lg:justify-between relative ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer block to keep grid aligned */}
                <div className="w-full lg:w-[45%] hidden lg:block" />

                {/* Number Circle in the center */}
                <div className="absolute left-[50%] -translate-x-[50%] w-12 h-12 rounded-full bg-brand-navy border-4 border-brand-cream flex items-center justify-center z-20 shadow-md hidden lg:flex">
                  <span className="text-[10px] font-sans font-bold text-brand-gold">{step.num}</span>
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-[45%] p-8 bg-brand-cream/40 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 rounded-none relative">
                  {/* Step Icon inside the card */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans font-bold lg:hidden">ADIM {step.num}</span>
                      <h3 className="font-serif text-xl md:text-2xl text-brand-navy font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-brand-navy/70 font-light font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
