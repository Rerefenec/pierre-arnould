"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // 🔹 cambia apenas empiece el scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Imagen de fondo fija y estática detrás de todo */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/photo1.jpg"
          alt="Pierre Arnould, plasticien"
          fill
          priority
          className="object-cover object-center"
        />
        {/* capa negra semitransparente */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Header */}
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

      {/* Hero content (solo ocupa la pantalla inicial) */}
      <section className=" h-165 flex flex-col justify-center text-center text-white">
        <h1 className="flex-col animate__animated animate__fadeInDown text-6xl font-bold inline-flex ">
         <span>Pierre Arnould </span> 
        < br />
           <span>Plasticien</span>
          </h1>
      </section>
    </>
  );
}


