"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

type Category = "all" | "tent" | "curtain" | "special" | "goods";

interface CaseItem {
  src: string;
  title: string;
  category: Category;
}

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "tent", label: "テント・オーニング" },
  { key: "curtain", label: "カーテン・横幕" },
  { key: "special", label: "特殊施工" },
  { key: "goods", label: "小物製作" },
];

const cases: CaseItem[] = [
  // テント・オーニング
  { src: "/images/cases/tent-awning.jpg", title: "フランス料理店 オーニングテント", category: "tent" },
  { src: "/images/cases/fixed-tent1.jpg", title: "飲食店 テント看板", category: "tent" },
  { src: "/images/cases/fixed-tent2.jpg", title: "店舗 ストライプテント", category: "tent" },
  { src: "/images/cases/fixed-tent3.jpg", title: "固定テント", category: "tent" },
  { src: "/images/cases/fixed-retractable.jpg", title: "固定テント＋開閉式テント", category: "tent" },
  { src: "/images/cases/retractable-tent1.jpg", title: "旅館 引き寄せテント（昼景）", category: "tent" },
  { src: "/images/cases/retractable-tent2.jpg", title: "旅館 引き寄せテント（夜景）", category: "tent" },
  { src: "/images/cases/retractable-tent3.jpg", title: "引き寄せテント", category: "tent" },
  { src: "/images/cases/retractable-tent4.jpg", title: "引き寄せテント", category: "tent" },
  { src: "/images/cases/carport-shade.jpg", title: "住宅 カーポートシェード", category: "tent" },
  { src: "/images/cases/awning-tent.jpg", title: "店舗 オーニングテント", category: "tent" },
  { src: "/images/cases/parasol.jpg", title: "パラソル", category: "tent" },
  { src: "/images/cases/fixed-tent-cafe.jpg", title: "カフェ 固定テント", category: "tent" },
  { src: "/images/cases/fixed-tent-red.jpg", title: "店舗 固定テント", category: "tent" },
  { src: "/images/cases/fixed-tent-green.jpg", title: "屋外テント屋根", category: "tent" },
  { src: "/images/cases/shop-awning1.jpg", title: "店舗オーニング", category: "tent" },
  { src: "/images/cases/shop-awning2.jpg", title: "店舗オーニング", category: "tent" },
  { src: "/images/cases/signboard-tent.jpg", title: "看板テント", category: "tent" },
  { src: "/images/cases/house-awning.jpg", title: "個人宅 オーニングテント", category: "tent" },
  // カーテン・横幕
  { src: "/images/cases/factory-curtain.jpg", title: "工場 間仕切り横幕", category: "curtain" },
  { src: "/images/cases/factory-clear-curtain.jpg", title: "工場 透明カーテン", category: "curtain" },
  { src: "/images/cases/clear-curtain.jpg", title: "透明カーテン", category: "curtain" },
  { src: "/images/cases/wire-curtain.jpg", title: "糸入り透明カーテン", category: "curtain" },
  { src: "/images/cases/wire-curtain2.jpg", title: "糸入り透明カーテン", category: "curtain" },
  { src: "/images/cases/wire-curtain3.jpg", title: "糸入り透明カーテン", category: "curtain" },
  { src: "/images/cases/kominka-curtain.jpg", title: "古民家喫茶 透明のれん", category: "curtain" },
  { src: "/images/cases/mesh-curtain.jpg", title: "メッシュ横幕", category: "curtain" },
  { src: "/images/cases/mesh-curtain2.jpg", title: "メッシュカーテン", category: "curtain" },
  { src: "/images/cases/factory-clear-curtain2.jpg", title: "加工場 透明カーテン", category: "curtain" },
  // 特殊施工
  { src: "/images/cases/boat-canopy.jpg", title: "船舶用天幕", category: "special" },
  { src: "/images/cases/smoke-barrier.jpg", title: "防煙垂れ壁", category: "special" },
  { src: "/images/cases/truck-sheet.jpg", title: "軽トラック用シート", category: "special" },
  { src: "/images/cases/construction.jpg", title: "施工の様子", category: "special" },
  { src: "/images/cases/construction2.jpg", title: "施工風景 防煙垂れ壁の取付", category: "special" },
  { src: "/images/cases/construction3.jpg", title: "施工風景 テント張り替え", category: "special" },
  { src: "/images/cases/construction4.jpg", title: "施工風景 高所作業", category: "special" },
  // 小物製作
  { src: "/images/cases/diaper-stacker.jpg", title: "おむつストッカー", category: "goods" },
  { src: "/images/cases/keychain1.jpg", title: "オリジナルキーホルダー", category: "goods" },
  { src: "/images/cases/keychain2.jpg", title: "オリジナルキーホルダー", category: "goods" },
  { src: "/images/cases/table-case.jpg", title: "テーブルケース", category: "goods" },
];

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: CaseItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in cursor-pointer"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-white/70 hover:text-white transition-colors"
        aria-label="閉じる"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2"
        aria-label="前へ"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2"
        aria-label="次へ"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative w-[90vw] h-[75vh] sm:w-[85vw] sm:h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-contain"
          sizes="90vw"
          quality={90}
        />
      </div>

      {/* Title */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center pointer-events-none">
        <p className="text-white text-sm sm:text-base font-medium tracking-wide drop-shadow-lg">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default function CasesGrid() {
  const [active, setActive] = useState<Category>("all");
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "all" ? cases : cases.filter((c) => c.category === active);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev <= 0 ? filtered.length - 1 : prev - 1
    );
  }, [filtered.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev >= filtered.length - 1 ? 0 : prev + 1
    );
  }, [filtered.length]);

  const handleClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
      <section id="cases" ref={sectionRef} className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section heading */}
          <div
            className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent text-sm tracking-[0.2em] mb-3">WORKS</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-wide">
              施工事例
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
            <p className="text-muted text-sm mt-6 max-w-lg mx-auto leading-relaxed">
              店舗テントから工場の間仕切り、船の天幕まで。
              <br className="hidden sm:block" />
              さまざまな現場での施工事例をご紹介します。
            </p>
          </div>

          {/* Category tabs */}
          <div
            className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setActive(cat.key); setLightboxIndex(null); }}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full border transition-all duration-300 ${
                  active === cat.key
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-muted border-border hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid — 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${active}`}
                className={`group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 cursor-pointer transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${Math.min(i * 80, 600) + 300}ms` : "0ms",
                }}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm sm:text-base font-medium drop-shadow-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
