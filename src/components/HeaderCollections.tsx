"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icônes hamburger et close

export default function HeaderCollections() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[20vh]">
      {/* 🔹 Image de fond */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/2021-20xx-3eme-periode/pierre-arnould-artist-3eme-periode-7.jpg"
          alt="Pierre Arnould, plasticien"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔹 Header principal */}
      <header
        className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-4 transition-all duration-500 ${
          scrolled
              ? "bg-white text-black shadow-md backdrop-blur-sm" // 🔹 après scroll
              : "text-white  bg-cover bg-center bg-no-repeat shadow-md backdrop-blur-sm" // 🔹 au début
        }`}
      >
         {/* voile noir léger pour lisibilité du texte */}
        {!scrolled && (
          <div className="absolute inset-0 bg-black/40 -z-10 transition-opacity duration-700"></div>
        )}

        <div className="text-2xl font-bold">Pierre Arnould</div>

        {/* 🔹 Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/A propos">À propos</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>

        {/* 🔹 Bouton hamburger mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* 🔹 Menu mobile déroulant */}
      {menuOpen && (
        <div
          className={`fixed top-16 left-0 w-full z-30 text-black shadow-md md:hidden transition-all duration-300 ${
            scrolled
              ? "bg-white"
              : "bg-black/40 backdrop-sm text-white backdrop-blur-sm"
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

      {/* 🔹 Texte central */}
      <div className="flex justify-center items-center h-full text-white text-4xl font-bold">
        Collections
      </div>
    </div>
  );
}
