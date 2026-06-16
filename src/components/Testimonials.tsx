"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Elif ile çalışmak sosyal medyadaki varlığımızı tamamen değiştirdi. Sadece takipçi sayımız artmadı, randevu defterimiz de tamamen doldu. İşine olan tutkusu ve vizyonu inanılmaz.",
      author: "Melis Alkan",
      role: "Kurucu, Luna Beauty Studio",
      rating: 5,
      initials: "MA"
    },
    {
      quote: "Mellow Coffee'nin açılışından bu yana dijital stratejisini Elif yönetiyor. Lokasyon bazlı kurguladığı Reels videoları sayesinde kapıda her gün kuyruklar oluşuyor. Şiddetle tavsiye ederim.",
      author: "Cem Yılmaz",
      role: "Kurucu Ortak, Mellow Coffee House",
      rating: 5,
      initials: "CY"
    },
    {
      quote: "E-ticaret sitemizdeki ciro artışımızın ana mimarı Elif'in kreatif Meta reklam stratejileridir. Bütçemizi en verimli şekilde kullanarak satışlarımızı %210 oranında artırdı.",
      author: "Selin Demir",
      role: "Pazarlama Lideri, Maison Fashion",
      rating: 5,
      initials: "SD"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative quotes icons on background */}
      <div className="absolute top-10 left-10 text-brand-gold/5 pointer-events-none">
        <Quote className="w-60 h-60" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-bold mb-4 block">
            Müşteri Yorumları
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy">
            Markaların <span className="font-serif italic text-brand-gold">Gözünden</span> Elif Yılmaz
          </h2>
        </div>

        {/* Slider Card */}
        <div className="relative bg-[#FCFAF7] border border-brand-gold/20 p-8 md:p-16 shadow-xl rounded-none min-h-[350px] flex flex-col justify-between">
          <Quote className="w-12 h-12 text-brand-gold/30 mb-8" />
          
          <div className="overflow-hidden relative flex-1 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg md:text-xl italic text-brand-navy leading-relaxed mb-8">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Initials circle */}
                  <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-cream shrink-0">
                    <span className="font-serif text-sm font-semibold text-brand-gold">
                      {testimonials[activeIndex].initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-brand-navy">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-xs text-brand-navy/60 font-light font-sans mt-0.5">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-brand-navy/5">
            {/* Pagination indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-brand-gold w-6" : "bg-brand-gold/30"
                  }`}
                  aria-label={`Yorum ${idx + 1}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-brand-navy/10 hover:border-brand-gold hover:bg-brand-gold hover:text-[#FCFAF7] transition-all duration-300 flex items-center justify-center rounded-none"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-brand-navy/10 hover:border-brand-gold hover:bg-brand-gold hover:text-[#FCFAF7] transition-all duration-300 flex items-center justify-center rounded-none"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
