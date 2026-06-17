"use client";

import React, { useState, useEffect } from "react";

interface SectionTheme {
  bg: string;
  blob1Color: string;
  blob2Color: string;
  transform1: string;
  transform2: string;
}

const SECTION_THEMES: Record<string, SectionTheme> = {
  hero: {
    bg: "#FCFAF7", // brand-bg
    blob1Color: "rgba(232, 194, 198, 0.35)", // brand-rose
    blob2Color: "rgba(226, 223, 244, 0.35)", // brand-lavender
    transform1: "translate(0px, 0px) scale(1)",
    transform2: "translate(0px, 0px) scale(1)",
  },
  hakkimda: {
    bg: "#F6F3EC", // brand-cream
    blob1Color: "rgba(212, 175, 55, 0.2)", // brand-gold
    blob2Color: "rgba(232, 194, 198, 0.25)", // brand-rose
    transform1: "translate(15vw, 10vh) scale(1.1)",
    transform2: "translate(-10vw, -10vh) scale(0.95)",
  },
  hizmetler: {
    bg: "#EFECE3", // brand-ivory
    blob1Color: "rgba(226, 223, 244, 0.35)", // brand-lavender
    blob2Color: "rgba(197, 165, 114, 0.2)", // brand-gold-muted
    transform1: "translate(-5vw, 25vh) scale(0.9)",
    transform2: "translate(10vw, -20vh) scale(1.15)",
  },
  portfoy: {
    bg: "#F7EAEB", // brand-rose-light
    blob1Color: "rgba(232, 194, 198, 0.4)", // brand-rose
    blob2Color: "rgba(239, 236, 227, 0.35)", // brand-ivory
    transform1: "translate(20vw, -5vh) scale(1.15)",
    transform2: "translate(-20vw, 15vh) scale(0.9)",
  },
  "instagram-showcase": {
    bg: "#F3F1FB", // brand-lavender-light
    blob1Color: "rgba(226, 223, 244, 0.4)", // brand-lavender
    blob2Color: "rgba(247, 234, 235, 0.35)", // brand-rose-light
    transform1: "translate(5vw, 15vh) scale(1.05)",
    transform2: "translate(15vw, 5vh) scale(1.05)",
  },
  yetenekler: {
    bg: "#F6F3EC", // brand-cream
    blob1Color: "rgba(212, 175, 55, 0.2)", // brand-gold
    blob2Color: "rgba(226, 223, 244, 0.3)", // brand-lavender
    transform1: "translate(10vw, 20vh) scale(1.1)",
    transform2: "translate(-15vw, -5vh) scale(0.95)",
  },
  surec: {
    bg: "#FCFAF7", // brand-bg
    blob1Color: "rgba(197, 165, 114, 0.2)", // brand-gold-muted
    blob2Color: "rgba(239, 236, 227, 0.4)", // brand-ivory
    transform1: "translate(-10vw, 5vh) scale(0.95)",
    transform2: "translate(25vw, 15vh) scale(1.1)",
  },
  yorumlar: {
    bg: "#F3F1FB", // brand-lavender-light
    blob1Color: "rgba(226, 223, 244, 0.4)", // brand-lavender
    blob2Color: "rgba(232, 194, 198, 0.3)", // brand-rose
    transform1: "translate(25vw, -10vh) scale(1.2)",
    transform2: "translate(-5vw, 20vh) scale(0.85)",
  },
  fiyatlandirma: {
    bg: "#F7EAEB", // brand-rose-light
    blob1Color: "rgba(232, 194, 198, 0.35)", // brand-rose
    blob2Color: "rgba(212, 175, 55, 0.18)", // brand-gold
    transform1: "translate(-15vw, 30vh) scale(0.9)",
    transform2: "translate(15vw, -10vh) scale(1.1)",
  },
  iletisim: {
    bg: "#EFECE3", // brand-ivory
    blob1Color: "rgba(197, 165, 114, 0.25)", // brand-gold-muted
    blob2Color: "rgba(226, 223, 244, 0.35)", // brand-lavender
    transform1: "translate(5vw, 15vh) scale(1.05)",
    transform2: "translate(-10vw, 5vh) scale(1.0)",
  },
};

export default function ScrollBackground({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = Object.keys(SECTION_THEMES);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Trigger threshold set to update as middle of section passes 1/3 viewport height
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -35% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const currentTheme = SECTION_THEMES[activeSection] || SECTION_THEMES.hero;

  return (
    <>
      {/* Fixed fluid morphing background */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Base background color transition */}
        <div
          className="absolute inset-0 transition-colors duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1)"
          style={{ backgroundColor: currentTheme.bg }}
        />

        {/* Floating/Morphing Aurora Blob 1 */}
        <div
          className="absolute rounded-full filter blur-[70px] md:blur-[90px] transition-all duration-[1800ms] cubic-bezier(0.16, 1, 0.3, 1) pointer-events-none"
          style={{
            backgroundColor: currentTheme.blob1Color,
            width: "55vw",
            height: "55vw",
            maxWidth: "700px",
            maxHeight: "700px",
            top: "-10vh",
            left: "-10vw",
            transform: `${currentTheme.transform1} translateZ(0)`,
            willChange: "transform, background-color",
          }}
        />

        {/* Floating/Morphing Aurora Blob 2 */}
        <div
          className="absolute rounded-full filter blur-[70px] md:blur-[90px] transition-all duration-[1800ms] cubic-bezier(0.16, 1, 0.3, 1) pointer-events-none"
          style={{
            backgroundColor: currentTheme.blob2Color,
            width: "50vw",
            height: "50vw",
            maxWidth: "650px",
            maxHeight: "650px",
            bottom: "-10vh",
            right: "-10vw",
            transform: `${currentTheme.transform2} translateZ(0)`,
            willChange: "transform, background-color",
          }}
        />
      </div>

      {children}
    </>
  );
}
