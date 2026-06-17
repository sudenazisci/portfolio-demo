"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left/prev, 1: right/next

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
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay every 5 seconds, resetting the timer when activeIndex changes (manual navigation)
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, testimonials.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
    })
  };

  return (
    <section id="yorumlar" className="py-24 bg-transparent relative overflow-hidden">
      {/* Subtle decorative glowing backdrops */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-brand-gold/5 blur-[80px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-brand-rose/5 blur-[80px] pointer-events-none animate-float-slow" />
      
      {/* Rotating gold star ornament in corner */}
      <div className="absolute top-16 right-16 text-brand-gold/20 hidden md:block animate-float-slow">
        <span className="text-3xl font-light">✦</span>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 relative">
          <span className="text-[11px] uppercase font-sans tracking-[0.25em] text-brand-gold font-bold mb-3 block">
            Müşteri Yorumları
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-navy tracking-wide">
            Markaların <span className="font-serif italic text-brand-gold font-normal relative">
              Gözünden
              <span className="absolute left-0 right-0 bottom-1 h-[1px] bg-brand-gold/30" />
            </span> Elif Yılmaz
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto mt-4" />
        </div>

        {/* Card Component */}
        <div className="relative group min-h-[300px] md:min-h-[250px] flex flex-col justify-between">
          
          {/* Offset background decorative frame */}
          <div className="absolute inset-0 border border-brand-gold/15 translate-x-2 translate-y-2 rounded-2xl pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          
          {/* Foreground luxury card */}
          <div className="relative overflow-hidden w-full h-full bg-[#FCFAF7]/60 backdrop-blur-md border border-white/80 p-6 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(212,175,55,0.04)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] transition-all duration-500 flex flex-col justify-between">
            
            {/* Large Serif Decorative Quotation Mark */}
            <span className="font-serif text-[80px] leading-none text-brand-gold/15 absolute -top-2 -left-1 font-normal select-none pointer-events-none">
              “
            </span>

            <div className="relative overflow-hidden flex-grow flex items-center min-h-[120px] z-10">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 32 },
                    opacity: { duration: 0.25 }
                  }}
                  className="w-full"
                >
                  {/* Rating Stars with stagger style */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="font-serif text-base md:text-lg italic text-brand-navy leading-relaxed mb-6 relative z-10">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    {/* Monogram Seal */}
                    <div className="relative w-11 h-11 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-cream/80 shadow-[0_4px_12px_rgba(212,175,55,0.06)] shrink-0 overflow-hidden group/seal">
                      <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-gold/20" />
                      <span className="font-serif text-xs font-bold text-brand-gold-muted tracking-wider relative z-10 transition-transform duration-300 group-hover/seal:scale-110 select-none">
                        {testimonials[activeIndex].initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm md:text-base font-semibold text-brand-navy tracking-wide">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-[9px] text-brand-navy/60 font-semibold font-sans tracking-[0.08em] uppercase mt-0.5">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation controls line */}
            <div className="flex justify-between items-center mt-6 pt-5 border-t border-brand-navy/5 relative z-20">
              
              {/* Pagination Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className="relative py-2 focus:outline-none cursor-pointer group"
                    aria-label={`Yorum ${idx + 1}`}
                  >
                    <span className={`block h-1.5 rounded-full transition-all duration-500 ease-out ${
                      idx === activeIndex 
                        ? "bg-brand-gold w-6 shadow-[0_0_8px_rgba(212,175,55,0.4)]" 
                        : "bg-brand-gold/20 w-2.5 group-hover:bg-brand-gold/45"
                    }`} />
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full border border-brand-navy/10 hover:border-brand-gold/45 text-brand-navy hover:text-brand-gold bg-[#FCFAF7]/40 hover:bg-[#FCFAF7] backdrop-blur-sm shadow-[0_2px_8px_rgba(14,22,41,0.02)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.08)] transition-all duration-300 flex items-center justify-center cursor-pointer group active:scale-95"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="w-4.5 h-4.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full border border-brand-navy/10 hover:border-brand-gold/45 text-brand-navy hover:text-brand-gold bg-[#FCFAF7]/40 hover:bg-[#FCFAF7] backdrop-blur-sm shadow-[0_2px_8px_rgba(14,22,41,0.02)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.08)] transition-all duration-300 flex items-center justify-center cursor-pointer group active:scale-95"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
