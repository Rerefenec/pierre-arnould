"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled ? "text-white" : "text-white"
        }`}
      >
        {/* Fondo */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-700 ${
            scrolled
              ? "bg-black/95 backdrop-blur-md border-b border-white/20"
              : "bg-black/40 backdrop-blur-sm border-b border-transparent"
          }`}
        />

        {/* Contenido centrado */}
        <div className="flex justify-between items-center p-4">
          {/* Brand */}
          <Link
            href="/"
            className="font-bold text-xl sm:text-2xl md:text-3xl relative z-10"
          >
            Pierre Arnould
          </Link>

          {/* Menu Desktop */}
<nav className="hidden md:flex space-x-6 whitespace-nowrap">
            <Link href="/">Home</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/A propos">À propos</Link>
            <Link href="/faqs">FAQs</Link>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden relative z-10 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full transition-all duration-500 
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/50 backdrop-blur-sm"}
        text-white z-40`}
      >
        <nav className="flex flex-col items-center py-6 space-y-5 text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/collections" onClick={() => setMenuOpen(false)}>Collections</Link>
          <Link href="/A propos" onClick={() => setMenuOpen(false)}>À propos</Link>
          <Link href="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
        </nav>
      </div>
    </>
  );
}
