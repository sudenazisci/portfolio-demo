"use client";

import React, { useState } from "react";
import { Check, MessageSquare, Heart, Play, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InstagramShowcase() {
  const [hearts, setHearts] = useState<{
    id: number;
    x: number;
    y: number;
    scale: number;
    rotate: number;
    rotateDelta: number;
    duration: number;
    color: string;
  }[]>([]);

  const handleLikeClick = () => {
    const colors = ["#D4AF37", "#E8C2C6", "#C5A572", "#E2DFF4", "#F472B6", "#EF4444"];
    const newHearts = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: (Math.random() - 0.5) * 240, // Random X offset between -120 and 120
      y: -150 - Math.random() * 200, // Random Y offset between -150 and -350
      scale: 0.8 + Math.random() * 1.0,
      rotate: (Math.random() - 0.5) * 60,
      rotateDelta: (Math.random() - 0.5) * 90,
      duration: 1.0 + Math.random() * 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setHearts((prev) => [...prev, ...newHearts]);
  };

  const mockPosts = [
    { id: 1, src: "/photo_post_1.png", alt: "Sky and clouds photography" },
    { id: 2, src: "/photo_post_2.png", alt: "Green hills landscape photography" },
    { id: 3, src: "/photo_post_3.png", alt: "Village street photography" },
    { id: 4, src: "/photo_post_4.png", alt: "Detail light flower photography" },
    { id: 5, src: "/photo_post_5.png", alt: "Sunset photographer silhouette photography" },
    { id: 6, src: "/photo_post_6.png", alt: "Branch silhouette art photography" },
  ];

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden flex items-center">
      {/* Decorative gradient blurs */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full bg-brand-lavender/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-brand-rose/15 blur-[120px] pointer-events-none" />

      {/* Subtle background dotted grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Dashed Loop SVG Trail */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg className="w-full h-full" fill="none" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 250,550 C 320,350 400,100 550,150 C 700,200 620,400 480,350 C 380,310 320,480 500,580 C 600,640 750,520 850,400"
            stroke="#C5A572"
            strokeWidth="2"
            strokeDasharray="10,10"
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Gold-outlined iPhone mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Outer gold outline matching the luxury theme */}
              <div className="w-[290px] h-[580px] rounded-[42px] outline outline-[3.5px] outline-brand-gold/45 outline-offset-4 shadow-2xl bg-[#0E1629] overflow-hidden flex flex-col p-1.5">
                
                {/* Simulated iPhone Screen */}
                <div className="w-full h-full rounded-[36px] bg-[#0E1629] overflow-hidden flex flex-col relative text-white text-xs">
                  
                  {/* Top notch detail */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#0E1629] rounded-b-xl z-30 flex items-center justify-center" />

                  {/* Header */}
                  <div className="pt-6 px-4 pb-2 border-b border-white/5 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm tracking-wide text-brand-gold">seb_i_nur_art</span>
                      <span className="bg-brand-gold text-[#FCFAF7] text-[8px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                    </div>
                    <div className="flex gap-4 text-brand-gold/80">
                      <span>➕</span>
                      <span>☰</span>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="relative w-14 h-14 rounded-full p-[1.5px] bg-brand-gold overflow-hidden">
                        <div className="relative w-full h-full rounded-full border border-[#0E1629] bg-[#F6F3EC] overflow-hidden">
                          <Image
                            src="/seb_avatar.png"
                            alt="Seb-i Nur Art Avatar"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex-1 flex justify-around text-center">
                        <div>
                          <p className="font-bold text-sm">198</p>
                          <p className="text-[9px] text-gray-400">Gönderi</p>
                        </div>
                        <div>
                          <p className="font-bold text-sm">525</p>
                          <p className="text-[9px] text-gray-400">Takipçi</p>
                        </div>
                        <div>
                          <p className="font-bold text-sm">85</p>
                          <p className="text-[9px] text-gray-400">Takip</p>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-3 text-[10px] leading-tight">
                      <p className="font-bold text-xs">şeb-i nûr art</p>
                      <p className="text-gray-400">Fotoğrafçı / Fotoğraf sanatçısı 📷</p>
                      <p className="text-gray-300 mt-1">Reklam medya ve iletişim 🏫</p>
                      <p className="text-gray-300 mt-1">Media and Communication Professional</p>
                      <p className="text-gray-300 mt-1">Photographer chasing the light</p>
                      <a href="#" className="text-brand-gold font-medium block mt-0.5">@nurselauzum</a>
                    </div>

                    {/* Edit Profile Button */}
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 py-1.5 bg-neutral-800 rounded-lg text-[10px] font-semibold">Profili Düzenle</button>
                      <button className="px-2 py-1.5 bg-neutral-800 rounded-lg">👤</button>
                    </div>

                    {/* Story Highlights */}
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-0.5 scrollbar-none text-[9px]">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center">🖼️</div>
                        <span className="text-[8px] mt-1 text-gray-400">Öne Çıkanlar</span>
                      </div>
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center">🐑</div>
                        <span className="text-[8px] mt-1 text-gray-400">Kurban bayra...</span>
                      </div>
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center">📸</div>
                        <span className="text-[8px] mt-1 text-gray-400">Bir anı kal...</span>
                      </div>
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center">✨</div>
                        <span className="text-[8px] mt-1 text-gray-400">Güzel bir anı</span>
                      </div>
                    </div>
                  </div>

                  {/* Grid Tabs */}
                  <div className="flex border-t border-white/5 text-gray-400 text-center">
                    <div className="flex-1 py-2 flex justify-center border-b border-white text-white"><Grid className="w-4 h-4" /></div>
                    <div className="flex-1 py-2 flex justify-center"><Play className="w-4 h-4" /></div>
                    <div className="flex-1 py-2 flex justify-center"><Heart className="w-4 h-4" /></div>
                  </div>

                  {/* Posts Grid */}
                  <div className="flex-1 overflow-y-auto p-0.5 bg-[#0E1629]">
                    <div className="grid grid-cols-3 gap-0.5">
                      {mockPosts.map((post) => (
                        <div key={post.id} className="aspect-square relative overflow-hidden group/post">
                          <Image
                            src={post.src}
                            alt={post.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/post:scale-110"
                            sizes="100px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>

          {/* Right: Instagram Management Title & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center text-brand-navy">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-8"
            >
              Instagram <br />
              <span className="font-serif italic text-brand-gold font-normal">Yönetimi</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-base md:text-lg font-medium leading-relaxed max-w-xl text-brand-navy/85"
            >
              <p>
                <strong>Seb-i Nur Art</strong> projesinde, epoksi ve akrilik sanat eserlerinin dijital vitrinini baştan tasarladım. Eserlerin yapım süreçlerini gösteren estetik reels videolarının kurgusundan, lüks sanat galerisi hissiyatı veren grid düzenine kadar tüm süreci yönettim.
              </p>
              <p>
                Sanatçının özgün ve huzur veren tarzını yansıtan hikaye şablonları, etkileşimi artıran soru-cevap seansları ve doğrudan satışa yönlendiren Shopier entegrasyonu ile markanın dijital satışlarını ve takipçi sadakatini güçlendirdim.
              </p>
            </motion.div>

            {/* Handwritten quote (using Caveat font) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-12 max-w-md relative"
            >
              <p className="font-handwriting text-2xl md:text-3xl text-brand-navy/95 leading-normal">
                "Sanatçının fırçasındaki ışığı ekranlara taşıyarak, eserlerin hak ettiği estetik değeri dijitalde bulmasını sağladık."
              </p>
            </motion.div>

            {/* Floating Heart like button on bottom right */}
            <div className="absolute right-6 md:right-12 bottom-6 z-20">
              {/* Floating hearts container */}
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                <AnimatePresence>
                  {hearts.map((heart) => (
                    <motion.div
                      key={heart.id}
                      initial={{ opacity: 1, scale: 0.3, x: 16, y: 16, rotate: heart.rotate }}
                      animate={{
                        opacity: 0,
                        scale: heart.scale,
                        x: heart.x,
                        y: heart.y,
                        rotate: heart.rotate + heart.rotateDelta,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: heart.duration, ease: "easeOut" }}
                      onAnimationComplete={() => {
                        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
                      }}
                      className="absolute pointer-events-none"
                    >
                      <Heart
                        className="w-6 h-6"
                        style={{
                          color: heart.color,
                          fill: heart.color,
                          filter: `drop-shadow(0 2px 8px ${heart.color}55)`,
                        }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={handleLikeClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-xl hover:bg-brand-navy transition-colors duration-300 cursor-pointer relative z-10"
                aria-label="Beğen"
              >
                <Heart className="w-5 h-5 fill-white" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
