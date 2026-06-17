import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elif Yılmaz | Premium Sosyal Medya Yöneticisi & İçerik Stratejisti",
  description: "Markaları Ekranı Durduran Başarı Hikayelerine Dönüştürüyorum. Sosyal Medya Yönetimi, İçerik Stratejisi, Instagram Büyüme ve Performans Pazarlaması.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} ${caveat.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[#0E1629] font-sans">
        {children}
      </body>
    </html>
  );
}
