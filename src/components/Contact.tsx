"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Instagram, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", businessName: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="iletisim" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-rose/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />
      
      {/* Subtle background dotted grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-extrabold mb-4 block">
            İletişim & Randevu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy leading-tight">
            Yeni Bir <span className="font-serif italic text-brand-gold font-normal">Başarı</span> Hikayesi Yazalım
          </h2>
          <p className="mt-4 text-xs md:text-sm text-brand-navy/60 font-medium font-sans leading-relaxed">
            Markanızın potansiyelini ortaya çıkarmak ve dijital varlığınızı premium bir görünüme kavuşturmak için formu doldurun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-serif text-3xl font-light text-brand-navy mb-6 leading-tight">
                Ofis & <span className="font-serif italic text-brand-gold font-normal">İletişim</span>
              </h3>
              <p className="text-sm text-brand-navy/70 font-light font-sans leading-relaxed mb-6">
                İşinizi ve markanızı büyütmek için buradayım. Kahve eşliğinde sosyal medya stratejinizi konuşmak üzere bizimle iletişime geçin.
              </p>
            </div>

            {/* Info details */}
            <div className="space-y-6">
              <div className="flex items-center gap-5 group/item cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center bg-[#FCFAF7] shrink-0 transition-all duration-300 group-hover/item:border-brand-gold group-hover/item:bg-brand-gold group-hover/item:text-[#FCFAF7] text-brand-gold shadow-[0_2px_10px_rgba(212,175,55,0.05)]">
                  <Mail className="w-4.5 h-4.5 transition-transform duration-300 group-hover/item:scale-110" />
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-brand-navy/40 font-bold font-sans block">E-Posta</span>
                  <a href="mailto:hello@elifyilmaz.studio" className="text-sm font-serif font-semibold text-brand-navy group-hover/item:text-brand-gold transition-colors duration-300 block mt-0.5">
                    hello@elifyilmaz.studio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group/item cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center bg-[#FCFAF7] shrink-0 transition-all duration-300 group-hover/item:border-brand-gold group-hover/item:bg-brand-gold group-hover/item:text-[#FCFAF7] text-brand-gold shadow-[0_2px_10px_rgba(212,175,55,0.05)]">
                  <MapPin className="w-4.5 h-4.5 transition-transform duration-300 group-hover/item:scale-110" />
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-brand-navy/40 font-bold font-sans block">Konum</span>
                  <span className="text-sm font-serif font-semibold text-brand-navy group-hover/item:text-brand-gold transition-colors duration-300 block mt-0.5">
                    Nişantaşı, İstanbul, TR
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-8 border-t border-brand-navy/10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/40 font-bold font-sans mb-4">Sosyal Medya Kanalları</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-navy/10 flex items-center justify-center bg-[#FCFAF7] hover:bg-brand-gold hover:border-brand-gold hover:text-[#FCFAF7] text-brand-navy transition-all duration-300 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-navy/10 flex items-center justify-center bg-[#FCFAF7] hover:bg-brand-gold hover:border-brand-gold hover:text-[#FCFAF7] text-brand-navy transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-navy/10 flex items-center justify-center bg-[#FCFAF7] hover:bg-brand-gold hover:border-brand-gold hover:text-[#FCFAF7] text-brand-navy transition-all duration-300 shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 p-8 md:p-10 bg-[#FCFAF7]/80 backdrop-blur-md border border-[#D4AF37]/15 shadow-[0_12px_40px_rgba(14,22,41,0.03)] rounded-2xl relative">
            
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <CheckCircle className="w-16 h-16 text-emerald-600 mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-brand-navy mb-4">Mesajınız Alındı!</h3>
                <p className="text-sm text-brand-navy/70 font-light font-sans max-w-sm mx-auto leading-relaxed">
                  Harika bir keşif görüşmesi planlayabilmek için detayları inceliyorum. Sizinle en geç 24 saat içinde e-posta yoluyla iletişime geçeceğim.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FCFAF7] bg-brand-navy hover:bg-brand-gold transition-colors duration-300 rounded-full"
                >
                  Yeni Mesaj Gönder
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Name */}
                <div className="flex flex-col relative group">
                  <label htmlFor="name" className="text-[9px] uppercase tracking-[0.25em] font-bold text-brand-navy/55 transition-colors duration-300 group-focus-within:text-brand-gold">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Lütfen tam adınızı girin"
                    className="w-full bg-transparent border-b border-brand-navy/15 py-3 text-brand-navy placeholder:text-brand-navy/30 focus:border-brand-gold focus:outline-none text-sm transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-focus-within:w-full" />
                </div>

                {/* Email */}
                <div className="flex flex-col relative group">
                  <label htmlFor="email" className="text-[9px] uppercase tracking-[0.25em] font-bold text-brand-navy/55 transition-colors duration-300 group-focus-within:text-brand-gold">
                    E-Posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Ornek@isletme.com"
                    className="w-full bg-transparent border-b border-brand-navy/15 py-3 text-brand-navy placeholder:text-brand-navy/30 focus:border-brand-gold focus:outline-none text-sm transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-focus-within:w-full" />
                </div>

                {/* Business Name */}
                <div className="flex flex-col relative group">
                  <label htmlFor="businessName" className="text-[9px] uppercase tracking-[0.25em] font-bold text-brand-navy/55 transition-colors duration-300 group-focus-within:text-brand-gold">
                    İşletme / Marka Adı
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Şirketiniz veya markanızın adı"
                    className="w-full bg-transparent border-b border-brand-navy/15 py-3 text-brand-navy placeholder:text-brand-navy/30 focus:border-brand-gold focus:outline-none text-sm transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-focus-within:w-full" />
                </div>

                {/* Message */}
                <div className="flex flex-col relative group">
                  <label htmlFor="message" className="text-[9px] uppercase tracking-[0.25em] font-bold text-brand-navy/55 transition-colors duration-300 group-focus-within:text-brand-gold">
                    Mesajınız / Hedefleriniz *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Bize markanızdan, hedeflerinizden ve beklentilerinizden bahsedin..."
                    className="w-full bg-transparent border-b border-brand-navy/15 py-3 text-brand-navy placeholder:text-brand-navy/30 focus:border-brand-gold focus:outline-none text-sm transition-colors duration-300 resize-none"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-focus-within:w-full" />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#FCFAF7] bg-brand-navy hover:bg-brand-gold disabled:bg-neutral-400 transition-all duration-500 shadow-[0_4px_15px_rgba(14,22,41,0.1)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    {status === "loading" ? "Gönderiliyor..." : "Mesajı İlet"}
                    <Send className="w-3.5 h-3.5 animate-pulse" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
