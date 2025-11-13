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
      {/* Header principal */}
      <header
        className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-4 transition-all duration-700 ease-in-out text-white"
      >
        {/* Fond avec transition fluide */}
        <div 
          className={`absolute inset-0 -z-10 transition-all duration-700 ease-in-out
            ${
              scrolled
                ? "bg-black/95 backdrop-blur-sm border-b border-white/30"
                : "bg-black/40 backdrop-blur-sm border-b border-transparent"
            }`}
        />

<div className="font-bold relative z-10 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
  Pierre Arnould
</div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 relative z-10">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/A propos">À propos</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden focus:outline-none relative z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div
          className={`fixed top-16 left-0 w-full z-30 md:hidden transition-all duration-300
            ${
              scrolled
                ? "bg-black/40 backdrop-blur-sm text-white border-b border-b-white/15"
                : "bg-black/40 backdrop-blur-sm text-white"
            }
          `}
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/collections" onClick={() => setMenuOpen(false)}>
              Collections
            </Link>
            <Link href="/A propos" onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
            <Link href="/faqs" onClick={() => setMenuOpen(false)}>
              FAQs
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}