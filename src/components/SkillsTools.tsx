"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

export default function SkillsTools() {
  const tools = [
    "Meta Business Suite",
    "Canva",
    "Adobe Photoshop",
    "CapCut",
    "Premiere Pro",
    "Notion",
    "Trello",
    "ChatGPT",
    "Google Analytics"
  ];

  const skills = [
    {
      title: "İçerik Planlama & Tasarım",
      desc: "Aylık editoryal planlar, özgün görsel diller ve estetik grid mizanpajları."
    },
    {
      title: "Marka Stratejisi & Kimliği",
      desc: "Rakiplerden sıyrılan, akılda kalıcı marka ses tonu ve kimliği kurgulama."
    },
    {
      title: "Reklam Metni Yazarlığı",
      desc: "Tıklama ve satış getiren, harekete geçirici yaratıcı metin yazımı (copywriting)."
    },
    {
      title: "Topluluk & Kriz Yönetimi",
      desc: "Takipçi sadakati oluşturan anlık iletişim, yorum ve kriz yönetimi süreçleri."
    },
    {
      title: "Sosyal Medya Denetimleri",
      desc: "Hesaplarınızın performansını analiz eden kapsamlı veri ve denetim raporları."
    },
    {
      title: "Performans & ROI Analizi",
      desc: "Pazarlama bütçelerinin ROI odaklı optimizasyonu ve reklam verisi analizi."
    },
    {
      title: "Trend & Algoritma Takibi",
      desc: "En güncel reels akımları ve Instagram algoritma değişikliklerine hızlı adaptasyon."
    },
    {
      title: "Influencer Pazarlaması",
      desc: "Marka kimliğine uygun mikro ve makro influencer iş birlikleri yönetimi."
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const toolsContainerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const toolsItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14 } }
  };

  return (
    <section id="yetenekler" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-extrabold mb-4 block">
            Uzmanlık Alanlarım
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            Yetenekler & <span className="font-serif italic text-brand-gold font-normal">Profesyonel</span> Araçlar
          </h2>
        </div>

        {/* Notebook Container - Rounded corners & rich shadows */}
        <div className="relative bg-[#FCFAF7] border border-brand-gold/25 shadow-2xl rounded-[2.5rem] overflow-hidden max-w-5xl mx-auto">
          
          {/* Notebook Metal Rings Binder Shadow Effect */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 border-l border-r border-brand-gold/15 hidden md:block z-20" />
          
          {/* Notebook Ring binder loops */}
          <div className="absolute top-[8%] bottom-[8%] left-1/2 -translate-x-1/2 flex flex-col justify-between hidden md:flex z-30 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="relative w-7 h-4 rounded-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 border border-neutral-400/50 shadow-md -mt-1" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Page: Skills */}
            <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-brand-gold/15 relative">
              {/* Notebook Lines Decorative */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.04)_1px,transparent_1px)] bg-[size:100%_2.75rem] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-10 pb-6 border-b border-brand-gold/20 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-brand-gold font-extrabold">
                      01 • YETENEK HAVUZU
                    </span>
                    <span className="font-serif italic text-xs text-brand-gold">Metodoloji</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-brand-navy font-black tracking-tight">
                    Stratejik Yetenekler
                  </h3>
                  <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-brand-gold -mb-[1px]" />
                </div>

                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-4"
                >
                  {skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="group flex items-start gap-4 p-3.5 rounded-2xl hover:bg-gradient-to-r hover:from-brand-gold/5 hover:via-brand-lavender/5 hover:to-transparent border-l-2 border-transparent hover:border-brand-gold transition-all duration-300 cursor-pointer"
                    >
                      {/* Interactive Circle Check Icon */}
                      <div className="w-6 h-6 rounded-full border-2 border-brand-gold/30 group-hover:border-brand-gold flex items-center justify-center shrink-0 mt-0.5 bg-[#FCFAF7] group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                        <Check className="w-4 h-4 text-brand-gold group-hover:text-white stroke-[3] transition-colors" />
                      </div>
                      <div>
                        <span className="font-serif text-base font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors duration-300 block">
                          {skill.title}
                        </span>
                        <span className="text-xs text-brand-navy/60 group-hover:text-brand-navy/80 font-sans font-medium block mt-1 transition-colors leading-relaxed">
                          {skill.desc}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Right Page: Tools */}
            <div className="p-8 md:p-12 lg:p-16 relative">
              {/* Notebook Lines Decorative */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.04)_1px,transparent_1px)] bg-[size:100%_2.75rem] pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-10 pb-6 border-b border-brand-gold/20 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-brand-gold font-extrabold">
                      02 • TEKNOLOJİK ALTYAPI
                    </span>
                    <span className="font-serif italic text-xs text-brand-gold">Araçlar & Yazılımlar</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-brand-navy font-black tracking-tight">
                    Kullandığım Araçlar
                  </h3>
                  <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-brand-gold -mb-[1px]" />
                </div>

                <motion.div 
                  variants={toolsContainerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-2 gap-4"
                >
                  {tools.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      variants={toolsItemVariants}
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="group p-5 bg-[#FCFAF7]/40 backdrop-blur-sm border border-brand-gold/20 hover:border-brand-gold hover:bg-[#FCFAF7] hover:shadow-[0_15px_30px_rgba(197,165,114,0.12)] transition-all duration-500 rounded-2xl flex flex-col justify-between min-h-[105px] cursor-pointer relative overflow-hidden"
                    >
                      {/* Top indicator: index number */}
                      <span className="font-sans text-xs tracking-wider text-brand-gold font-bold group-hover:translate-x-1 transition-transform duration-300">
                        0{idx + 1}
                      </span>
                      
                      {/* Tool Name */}
                      <span className="font-serif text-base font-extrabold text-brand-navy mt-3 block group-hover:text-brand-gold transition-colors duration-300">
                        {tool}
                      </span>

                      {/* Sliding bottom gold underline */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-gold group-hover:w-full transition-all duration-500" />
                    </motion.div>
                  ))}
                </motion.div>



              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
