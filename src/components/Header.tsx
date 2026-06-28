"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "サービス", href: "#services" },
    { label: "法人向け", href: "#corporate" },
    { label: "実績", href: "#results" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-obsidian/95 backdrop-blur-sm border-b border-cream/5" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-xl text-cream tracking-widest">BENRIYA</span>
          <span className="text-gold font-sans text-[9px] tracking-[0.35em] uppercase mt-0.5">Premium Concierge</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="font-sans text-xs tracking-wider text-cream/60 hover:text-gold transition-colors duration-300 uppercase">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-[10px]">無料相談</a>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="メニュー">
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-charcoal border-t border-cream/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="font-sans text-sm tracking-wider text-cream/70 hover:text-gold transition-colors uppercase">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center text-[10px]">無料相談</a>
        </div>
      )}
    </header>
  );
}
