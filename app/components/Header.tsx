"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "私たちについて", href: "#about" },
  { label: "施工事例", href: "#cases" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="西岡テント"
            width={48}
            height={48}
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
            priority
          />
          <span
            className={`font-bold text-base sm:text-lg tracking-wide transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            西岡テント
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-2 bg-foreground"
                : scrolled
                ? "bg-foreground"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "opacity-0"
                : scrolled
                ? "bg-foreground"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-2 bg-foreground"
                : scrolled
                ? "bg-foreground"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-sm ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
