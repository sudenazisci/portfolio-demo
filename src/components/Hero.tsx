"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BlurText from "./BlurText";
import CountUp from "./CountUp";

export default function Hero() {
  const stats = [
    { prefix: "+", to: 50, suffix: "", label: "Yönetilen Marka" },
    { prefix: "+", to: 4, suffix: " Yıl", label: "Deneyim" },
    { prefix: "+", to: 10, suffix: "M", label: "Aylık Erişim" },
    { prefix: "+%", to: 300, suffix: "", label: "Ortalama Büyüme" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#FCFAF7]">
      {/* Decorative luxury shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-lavender/40 blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-rose/30 blur-[100px] animate-float-reverse pointer-events-none" />
      
      {/* Abstract Gold Accent Circle */}
      <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full border border-brand-gold/10 pointer-events-none" />
      <div className="absolute top-[25%] left-[5%] w-72 h-72 rounded-full border border-brand-gold/5 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Çerçevesiz Editöryal Başlık & Altın Çizgi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-8 pl-3 border-l-2 border-brand-gold"
            >
              <span className="text-xs uppercase font-sans tracking-[0.25em] font-extrabold text-brand-navy leading-none">
                Sosyal Medya & İçerik Stratejisi
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-navy leading-[1.15] tracking-tight flex flex-col gap-2">
              <BlurText
                text="Markaları"
                delay={30}
                startDelay={100}
                animateBy="letters"
                direction="bottom"
                className="font-serif text-brand-navy"
              />
              <BlurText
                text="Ekranı Durduran"
                delay={30}
                startDelay={350}
                animateBy="letters"
                direction="bottom"
                className="font-serif italic text-brand-gold font-normal"
              />
              <BlurText
                text="Başarı Hikayelerine"
                delay={25}
                startDelay={750}
                animateBy="letters"
                direction="bottom"
                className="font-serif text-brand-navy"
              />
              <BlurText
                text="Dönüştürüyorum."
                delay={25}
                startDelay={1150}
                animateBy="letters"
                direction="bottom"
                className="font-serif text-brand-navy"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base md:text-lg text-brand-navy/80 font-medium max-w-xl leading-relaxed font-sans"
            >
              Sosyal Medya Yönetimi • İçerik Stratejisti • Marka Büyüme Uzmanı. 
              Doğru hikaye anlatımı ve performans odaklı pazarlama ile işletmenizin dijital ayak izini baştan tasarlayın.
            </motion.p>

            {/* CTAs (Daha Tok Butonlar) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
            >
              {/* Button 1: Portföyü İncele (Sliding background from left) */}
              <motion.a
                href="#portfoy"
                className="relative px-9 py-4 text-xs font-bold uppercase tracking-widest text-[#FCFAF7] border border-brand-navy hover:border-brand-gold overflow-hidden group flex items-center gap-2 select-none rounded-full cursor-pointer shadow-[0_4px_14px_rgba(14,22,41,0.08)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.18)] transition-all duration-500"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                {/* Base color */}
                <span className="absolute inset-0 bg-brand-navy" />
                {/* Gold sliding hover background */}
                <motion.span
                  className="absolute inset-0 bg-brand-gold"
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: { x: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Portföyü İncele
                  <motion.span
                    variants={{
                      hover: { x: 5 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
                  </motion.span>
                </span>
              </motion.a>

              {/* Button 2: Ücretsiz Görüşme Planla (Sliding background from bottom) */}
              <motion.a
                href="#iletisim"
                className="relative px-9 py-4 text-xs font-bold uppercase tracking-widest text-brand-navy border border-brand-navy/35 hover:border-brand-navy overflow-hidden group flex items-center justify-center select-none rounded-full cursor-pointer hover:shadow-[0_4px_14px_rgba(14,22,41,0.04)] transition-all duration-500"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                {/* Navy sliding hover background */}
                <motion.span
                  className="absolute inset-0 bg-brand-navy"
                  initial={{ y: "100%" }}
                  variants={{
                    hover: { y: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="relative z-10 transition-colors duration-300"
                  variants={{
                    hover: { color: "#FCFAF7" }
                  }}
                >
                  Ücretsiz Görüşme Planla
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Statistics (Premium Editorial Layout) */}
            <div className="mt-16 pt-8 border-t border-brand-navy/10 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5 }}
                    className={`flex flex-col px-6 py-5 md:py-6 transition-all duration-300 relative group cursor-default overflow-hidden
                      ${idx % 2 !== 0 ? 'border-l border-brand-navy/10' : ''}
                      ${idx >= 2 ? 'border-t border-brand-navy/10 md:border-t-0' : ''}
                      ${idx > 0 ? 'md:border-l md:border-brand-navy/10' : ''}
                    `}
                  >
                    {/* Hover Glow Light Background */}
                    <span className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10" />
                    
                    {/* Animated Golden Accent Border at the bottom of the card on hover */}
                    <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-brand-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    
                    {/* Elegant Numbering */}
                    <span className="font-serif text-[10px] italic text-brand-gold/50 group-hover:text-brand-gold transition-colors duration-300 select-none">
                      / 0{idx + 1}
                    </span>

                    {/* Elegant Stat Value */}
                    <div className="relative flex items-baseline gap-0.5 mt-1.5">
                      <span className="font-serif text-3xl md:text-4xl font-black text-brand-gold group-hover:text-brand-gold-muted transition-colors duration-300">
                        {stat.prefix}
                        <CountUp to={stat.to} duration={1.5} delay={0.2 + idx * 0.1} />
                        {stat.suffix}
                      </span>
                      {/* Floating decorative dot */}
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-300 ml-1" />
                    </div>

                    {/* Stat Label */}
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-navy/60 group-hover:text-brand-navy/80 transition-colors duration-300 mt-2 font-sans leading-relaxed">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait Image Container - Capsule/Stadium Shape */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-[260px] h-[380px] md:w-[300px] md:h-[440px] flex items-center justify-center p-3 border border-brand-gold/25 rounded-[100px]"
            >
              {/* Offset Gold Capsule Background Shape */}
              <div className="absolute inset-0 rounded-[100px] bg-brand-gold/10 translate-x-3 translate-y-3 pointer-events-none -z-10" />

              {/* Inner Image Frame */}
              <div className="relative w-full h-full rounded-[88px] overflow-hidden border border-brand-gold/20 shadow-xl bg-brand-cream">
                <Image
                  src="/elif_portrait.png"
                  alt="Elif Yılmaz - Sosyal Medya Yöneticisi"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-w-7xl) 100vw, 300px"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
