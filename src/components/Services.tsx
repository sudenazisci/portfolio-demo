"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Compass, 
  TrendingUp, 
  Video, 
  MessageCircle, 
  Megaphone, 
  ArrowUpRight 
} from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: <Instagram className="w-5 h-5" strokeWidth={2.5} />,
      title: "Sosyal Medya Yönetimi",
      description: "Markanızın dijital kimliğini yansıtan, düzenli ve profesyonel hesap yönetimi. Feed tasarımı, içerik planlama ve marka sesi oluşturma.",
      tag: "Popüler"
    },
    {
      icon: <Compass className="w-5 h-5" strokeWidth={2.5} />,
      title: "İçerik Stratejisi",
      description: "Rakiplerinizi geride bırakacak, hedef kitlenizi müşteriye dönüştürecek içerik haritaları, kampanya kurguları ve hikaye anlatıcılığı şablonları.",
      tag: "Stratejik"
    },
    {
      icon: <TrendingUp className="w-5 h-5" strokeWidth={2.5} />,
      title: "Instagram Büyüme",
      description: "Organik ve hedeflenmiş takipçi artış stratejileri. Algoritma dostu içerikler ve etkileşim oranını tavan yaptıracak taktikler.",
      tag: "Hızlı Büyüme"
    },
    {
      icon: <Video className="w-5 h-5" strokeWidth={2.5} />,
      title: "Reels Üretimi",
      description: "Konsept geliştirmeden kurguya, trend müzik seçiminden video çekim direktörlüğüne kadar baştan sona scroll-stopping dikey video üretimi.",
      tag: "Video Odaklı"
    },
    {
      icon: <MessageCircle className="w-5 h-5" strokeWidth={2.5} />,
      title: "Topluluk Yönetimi",
      description: "Gelen mesajların, yorumların yanıtlanması, müşteri sadakati yaratma, soru-cevap seansları ve takipçilerinizle samimi bağ kurma süreçleri.",
      tag: "Etkileşim"
    },
    {
      icon: <Megaphone className="w-5 h-5" strokeWidth={2.5} />,
      title: "Ücretli Reklamlar",
      description: "Meta (Instagram & Facebook) reklam yöneticisi aracılığıyla yüksek dönüşüm oranlı, ölçülebilir ve hedef kitle odaklı sponsorlu kampanyalar.",
      tag: "ROI Odaklı"
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="hizmetler" className="py-24 bg-[#FCFAF7] relative overflow-hidden">
      
      {/* Hareketli Arka Plan Işık Küreleri (Floating Glowing Spheres in Background) */}
      <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-brand-gold/10 blur-[100px] animate-float-slow pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-brand-lavender/25 blur-[120px] animate-float-reverse pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-brand-rose/15 blur-[90px] animate-float-slow pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-extrabold mb-4 block">
            Hizmetlerim & Çözümler
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            Markanızı <span className="font-serif italic text-brand-gold font-normal">Büyütecek</span> Profesyonel Hizmetler
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-navy/80 font-medium font-sans leading-relaxed">
            İhtiyaçlarınıza özel olarak kurgulanmış, marka değerinizi artıran ve satışlarınızı katlayan bu hizmet paketleri.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 bg-[#FCFAF7]/60 backdrop-blur-md border border-brand-gold/20 hover:border-brand-gold hover:bg-[#FCFAF7] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(197,165,114,0.12)] flex flex-col justify-between min-h-[380px] rounded-[2rem]"
            >
              <div>
                {/* Header card info */}
                <div className="flex items-center justify-between mb-6">
                  {/* Glassmorphic Icon Wrapper */}
                  <div className="w-12 h-12 bg-white border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform duration-500 shadow-sm rounded-xl">
                    {service.icon}
                  </div>
                  
                  {/* Gold border Badge */}
                  <span className="text-[9px] uppercase font-sans tracking-widest font-extrabold text-brand-gold border border-brand-gold/30 px-3 py-1.5 bg-white/60 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="font-serif text-2xl text-brand-navy font-extrabold mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-navy/80 font-medium leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Bottom Divider Line and CTA (Kutulu Premium Mizanpaj) */}
              <div className="w-full">
                <div className="w-full h-[1px] bg-brand-gold/10 mb-6" />
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] text-brand-navy/60 group-hover:text-brand-gold transition-colors duration-300 font-extrabold">
                    Teklif Al & Detaylar
                  </span>
                  
                  {/* Square Outline Gold Button (Rotates on hover) */}
                  <div className="w-10 h-10 border border-brand-gold/30 group-hover:border-brand-gold group-hover:bg-brand-gold text-brand-navy group-hover:text-white flex items-center justify-center transition-all duration-500 rounded-xl">
                    <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5] group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Small bottom note */}
        <div className="text-center mt-16">
          <p className="text-xs text-brand-navy/60 font-semibold font-sans">
            Özel entegre projeleriniz için <a href="#iletisim" className="text-brand-gold hover:underline font-bold">bizimle iletişime geçerek</a> özel teklif alabilirsiniz.
          </p>
        </div>

      </div>
    </section>
  );
}
