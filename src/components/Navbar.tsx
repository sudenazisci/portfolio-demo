"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımda", href: "#hakkimda" },
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "Portföy", href: "#portfoy" },
    { name: "Süreç", href: "#surec" },
    { name: "Fiyatlandırma", href: "#fiyatlandirma" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <nav
      className={`fixed z-50 left-0 right-0 mx-auto transition-all duration-500 ease-in-out border
        ${isOpen 
          ? "top-3 w-[90%] rounded-2xl py-3 px-5 bg-[#FCFAF7] border-[#0E1629]/10 shadow-xl" 
          : scrolled
            ? "top-3 w-[90%] lg:w-[85%] max-w-5xl px-5 py-1.5 rounded-full bg-[#FCFAF7]/95 border-brand-gold/20 backdrop-blur-md shadow-[0_8px_32px_rgba(14,22,41,0.08)]"
            : "top-4 w-[95%] lg:w-[92%] max-w-7xl px-6 py-2.5 rounded-full bg-[#FCFAF7]/80 border-brand-gold/15 backdrop-blur-md shadow-[0_4px_30px_rgba(14,22,41,0.05)]"
        }
      `}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col group py-0.5">
          <span className="font-serif text-lg md:text-xl font-light tracking-[0.15em] text-brand-navy group-hover:text-brand-gold transition-colors duration-500 select-none flex items-center gap-1">
            ELİF YILMAZ <span className="text-[9px] text-brand-gold group-hover:rotate-45 transition-transform duration-500">✦</span>
          </span>
          <span className="text-[7px] tracking-[0.35em] font-sans font-extrabold text-[#C5A572] uppercase mt-0.5 group-hover:translate-x-1 transition-transform duration-500 ease-out select-none">
            Content & Growth
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-navy/85 hover:text-brand-navy transition-all duration-500 relative py-1.5 px-3.5 rounded-full hover:bg-brand-gold/8 group"
              >
                {link.name}
                {/* Hover Dot */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-brand-navy hover:text-brand-gold focus:outline-none transition-colors duration-300"
          aria-label="Menüyü Aç"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full overflow-hidden mt-4 pt-4 border-t border-[#0E1629]/5"
          >
            <div className="space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-serif tracking-wide text-brand-navy hover:text-brand-gold py-1 block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
