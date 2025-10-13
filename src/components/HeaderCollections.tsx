"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderCollections() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[20vh]">
      {/* 🔹 Imagen de fondo solo para el área del header */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/2021-20xx-3eme-periode/pierre-arnould-artist-3eme-periode-7.jpg"
          alt="Pierre Arnould, plasticien"
          fill
          priority
          className="object-cover object-center"
        />
        {/* capa negra semitransparente */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔹 Header flotante */}
      <header
        className={`fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="text-2xl font-bold">Pierre Arnould</div>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/A propos">À propos</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>
      </header>

      {/* 🔹 Texto o placeholder opcional en el centro del fondo */}
      <div className="animate__animated animate__fadeInDown flex justify-center items-center h-full text-white text-4xl font-bold">
        Collections
      </div>
    </div>
  );
}
