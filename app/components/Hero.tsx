"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cases/retractable-tent2.jpg"
        alt="和風庭園の引き寄せテント（夜景）"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p
          className={`text-white/60 text-xs sm:text-sm tracking-[0.3em] mb-4 sm:mb-5 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          京都のテント屋 創業昭和26年
        </p>
        <h1
          className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wider mb-3 sm:mb-4 transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          西岡テント
        </h1>
        <p
          className={`text-white/80 text-lg sm:text-xl md:text-2xl tracking-[0.15em] font-light mb-8 sm:mb-10 transition-all duration-1000 delay-400 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          施工事例集
        </p>
        <div
          className={`w-10 h-px bg-white/40 mx-auto mb-8 sm:mb-10 transition-all duration-1000 delay-500 ${
            visible
              ? "opacity-100 scale-x-100"
              : "opacity-0 scale-x-0"
          }`}
        />
        <p
          className={`text-white/60 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-8 sm:mb-10 transition-all duration-1000 delay-600 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          テントの企画・製作・施工まで一貫対応。
          <br />
          4代にわたる技術と経験で、さまざまなご要望にお応えしています。
        </p>
        <a
          href="#cases"
          className={`inline-block bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 text-sm tracking-wider hover:bg-white/20 transition-all duration-1000 delay-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          事例を見る
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
