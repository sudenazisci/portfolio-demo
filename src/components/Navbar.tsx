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
      className={`fixed z-50 left-0 right-0 mx-auto transition-all duration-500 ease-in-out ${
        scrolled || isOpen
          ? "top-0 lg:top-4 max-w-full lg:max-w-7xl px-6 lg:px-8 py-4 lg:py-3 lg:rounded-full bg-[#FCFAF7]/95 lg:bg-[#FCFAF7]/90 backdrop-blur-md shadow-md lg:shadow-[0_8px_30px_rgba(14,22,41,0.06)] border-b lg:border border-[#0E1629]/5 w-full"
          : "top-0 max-w-full px-6 md:px-12 py-6 bg-transparent border-b border-transparent w-full"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col group py-1">
          <span className="font-serif text-xl md:text-2xl font-light tracking-[0.15em] text-brand-navy group-hover:text-brand-gold transition-colors duration-500 select-none">
            ELİF YILMAZ
          </span>
          <span className="text-[8px] tracking-[0.35em] font-sans font-extrabold text-[#C5A572] uppercase mt-0.5 group-hover:translate-x-1 transition-transform duration-500 ease-out select-none">
            Content & Growth
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-navy/70 hover:text-brand-navy transition-all duration-300 relative py-1.5 group"
              >
                {link.name}
                {/* Elegant bottom line with center-out reveal */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-gold group-hover:w-1/2 transition-all duration-300 ease-out" />
                {/* Hover Dot */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
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
            className="lg:hidden bg-[#FCFAF7] border-b border-[#0E1629]/5 shadow-lg overflow-hidden absolute top-full left-0 right-0 w-full"
          >
            <div className="px-6 py-8 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif tracking-wide text-brand-navy hover:text-brand-gold py-1 block"
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
