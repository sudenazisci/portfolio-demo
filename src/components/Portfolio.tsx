"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  UserPlus, 
  Heart, 
  Coins, 
  Globe, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Luna Beauty Studio",
      category: "Güzellik & Kozmetik",
      image: "/luna_beauty.png",
      stats: [
        { label: "Takipçi Artışı", value: "2.300 → 18.400", icon: <UserPlus className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> },
        { label: "Etkileşim Oranı", value: "+%320", icon: <Heart className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> },
        { label: "Ciro Artışı", value: "+%180", icon: <Coins className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> }
      ],
      description: "Sosyal medyada lüks marka algısı oluşturularak, hedeflenen Instagram Reels kampanyaları ile randevu doluluk oranları 3 katına çıkarıldı."
    },
    {
      title: "Mellow Coffee House",
      category: "Yeme-İçme & Kafe",
      image: "/mellow_coffee.png",
      stats: [
        { label: "Takipçi Artışı", value: "1.200 → 12.700", icon: <UserPlus className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> },
        { label: "Aylık Erişim", value: "+%450", icon: <Globe className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> },
        { label: "Müşteri Kaydı", value: "+%240", icon: <Sparkles className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> }
      ],
      description: "Lokasyon bazlı hedeflemeler, estetik iç mekan reels videoları ve influencer iş birlikleriyle kahve dükkanının şube bilinirliği zirveye taşındı."
    },
    {
      title: "Maison Fashion",
      category: "Moda & E-Ticaret",
      image: "/maison_fashion.png",
      stats: [
        { label: "Takipçi Artışı", value: "5.100 → 38.000", icon: <UserPlus className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> },
        { label: "Satış Artışı", value: "+%210", icon: <Coins className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> },
        { label: "Web Sitesi Trafiği", value: "+%310", icon: <Globe className="w-4.5 h-4.5 text-brand-gold" strokeWidth={2.5} /> }
      ],
      description: "Küratörlü Instagram vitrini, estetik ürün kombin videoları ve dönüşüm odaklı Meta reklam stratejileri ile e-ticaret satışlarında rekor kırıldı."
    }
  ];

  return (
    <section id="portfoy" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-rose/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-extrabold mb-4 block">
              Vaka Çalışmaları (Case Studies)
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
              Gerçek Sonuçlar, <span className="font-serif italic text-brand-gold font-normal">Büyüyen</span> Markalar
            </h2>
          </div>
          <p className="text-sm md:text-base text-brand-navy/80 font-medium max-w-sm font-sans leading-relaxed">
            Sadece estetik paylaşımlar değil; işletmelerin cirosunu, erişimini ve sadık kitle sayısını doğrudan artıran dönüşümler.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Image Showcase - Rounded Corners */}
              <div className={`lg:col-span-6 relative w-full h-[300px] md:h-[450px] overflow-hidden group shadow-xl rounded-[2rem] ${
                idx % 2 === 1 ? "lg:order-2" : ""
              }`}>
                {/* Border gold effect */}
                <div className="absolute inset-4 border border-[#FCFAF7]/20 z-20 pointer-events-none rounded-[1.5rem]" />
                <div className="absolute inset-0 bg-[#0E1629]/20 group-hover:bg-[#0E1629]/5 transition-colors duration-500 z-10" />
                
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-7xl) 100vw, 600px"
                />
              </div>

              {/* Data and Content */}
              <div className={`lg:col-span-6 ${
                idx % 2 === 1 ? "lg:order-1" : ""
              }`}>
                {/* Rounded category tag */}
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-extrabold text-brand-gold bg-brand-navy px-4 py-1.5 inline-block mb-4 rounded-full">
                  {project.category}
                </span>
                
                <h3 className="font-serif text-3xl md:text-4xl text-brand-navy font-extrabold mb-4">
                  {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-brand-navy/80 font-medium font-sans leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Premium Analytics Cards - Rounded Corners */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 bg-[#FCFAF7] border border-brand-gold/15 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 rounded-[1.25rem] flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] uppercase tracking-wider text-brand-navy/50 font-sans font-extrabold">
                          {stat.label}
                        </span>
                        {stat.icon}
                      </div>
                      <span className="font-serif text-lg font-black text-brand-navy">
                        {stat.value}
                      </span>
                      {/* Mini growth indicator badge */}
                      <span className="text-[9px] text-emerald-600 font-extrabold flex items-center gap-0.5 mt-1 font-sans">
                        ▲ %100 Doğrulanmış
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="#iletisim"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors duration-300 group"
                  >
                    Benzer Strateji Planla
                    <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
