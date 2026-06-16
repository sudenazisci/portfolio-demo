"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="hakkimda" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Collages / Magazine Layout */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Background gold stroke frame */}
            <div className="absolute top-6 left-6 w-[280px] h-[380px] md:w-[340px] md:h-[440px] border border-brand-gold/20 -z-10 hidden sm:block" />

            {/* Main Image */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[380px] md:w-[340px] md:h-[440px] overflow-hidden shadow-xl"
            >
              <Image
                src="/elif_portrait.png"
                alt="Elif Yılmaz Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-w-7xl) 100vw, 340px"
              />
            </motion.div>

            {/* Floating Second Image (Overlapping Editorial Detail) */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 right-4 md:right-10 w-[160px] h-[220px] overflow-hidden shadow-2xl border-4 border-[#FCFAF7] hidden sm:block"
            >
              <Image
                src="/maison_fashion.png"
                alt="Editorial detail"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>

            {/* Golden Decorative Signature Box */}
            <div className="absolute -top-6 -left-4 p-4 glass-panel border border-brand-gold/30 hidden md:block">
              <span className="font-serif italic text-sm text-brand-gold">elif yilmaz studio.</span>
            </div>
          </div>

          {/* Text/Content Spread */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 text-xs uppercase font-sans tracking-[0.25em] text-brand-gold font-bold mb-6 w-fit relative group cursor-default"
            >
              {/* Animated background glow effect on hover */}
              <span className="absolute -inset-x-4 -inset-y-2 bg-brand-gold/5 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
              
              <div className="relative flex items-center justify-center">
                {/* Main spinning sparkle (Custom luxury star) */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="text-brand-gold z-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                  >
                    <path
                      d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                  </svg>
                </motion.div>

                {/* Secondary tiny sparkle that flashes (Custom luxury star) */}
                <motion.div
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.7, 1.1, 0.7],
                    x: [10, 12, 10],
                    y: [-8, -10, -8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute text-brand-gold-muted/80"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Text with animated character entrance or subtle shimmer */}
              <span className="relative z-10 select-none overflow-hidden inline-block py-0.5">
                <span className="inline-block relative">
                  Hikayem & Vizyonum
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </span>
              </span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy leading-tight mb-8">
              Dijital Dünyada <br />
              <span className="font-serif italic text-brand-gold">İz Bırakan</span> Markalar Yaratıyorum
            </h2>

            <div className="space-y-6 text-brand-navy/80 font-light leading-relaxed font-sans text-sm md:text-base">
              <p>
                Merhaba, ben <strong>Elif Yılmaz</strong>. İstanbul merkezli çalışan bir Sosyal Medya Yöneticisi, İçerik Stratejisti ve Marka Büyüme Uzmanıyım. Markaların dijital ekosistemde sadece var olmalarını değil, hedef kitleleriyle gerçek bağlar kurarak büyümelerini sağlıyorum.
              </p>
              
              <p className="border-l-2 border-brand-gold pl-6 py-1 italic text-brand-navy/95 font-medium font-serif text-lg leading-relaxed">
                "İşletmelerin stratejik içerik üretimi, sosyal medya yönetimi, hikaye anlatıcılığı ve performans pazarlaması yoluyla büyümesine yardımcı oluyorum. Misyonum, sıradan markaları akılda kalıcı dijital deneyimlere dönüştürmektir."
              </p>

              <p>
                Luna Beauty, Mellow Coffee ve Maison Fashion gibi moda, yeme-içme, güzellik ve startup sektörlerindeki birçok markaya sıfırdan dijital kimlik kazandırdım. Yaratıcılığı analitik verilerle birleştirerek, markanızın hak ettiği görünürlüğü ve cirosal büyümeyi elde etmesini hedefliyorum.
              </p>
            </div>

            {/* Micro details or sub-stats */}
            <div className="mt-8 grid grid-cols-2 gap-6 pt-8 border-t border-brand-navy/10">
              <div>
                <h5 className="font-serif text-lg text-brand-navy font-semibold">Stratejik Odak</h5>
                <p className="text-xs text-brand-navy/60 font-light mt-1">
                  Yaratıcı hikayeleri veri analitiği ile destekleyerek sürdürülebilir büyüme sağlıyoruz.
                </p>
              </div>
              <div>
                <h5 className="font-serif text-lg text-brand-navy font-semibold">Premium Estetik</h5>
                <p className="text-xs text-brand-navy/60 font-light mt-1">
                  Sektörünüzde fark yaratacak lüks ve profesyonel görsel standartları uyguluyoruz.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors duration-300 group"
              >
                İletişime Geçin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
