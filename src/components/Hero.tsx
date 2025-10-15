"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./Header";

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
          src="/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-26.jpg"
          alt="Pierre Arnould, plasticien"
          fill
          priority
          className="object-cover object-center"
        />
        {/* capa negra semitransparente */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header */}
     <Header />

      {/* Hero content (solo ocupa la pantalla inicial) */}
      <section className=" h-165 flex flex-col justify-center text-center text-white">
        <h1 className="flex-col animate__animated animate__fadeInDown text-6xl font-bold inline-flex ">
         <span>Pierre Arnould </span> 
           <span>Plasticien</span>
          </h1>
      </section>
    </>
  );
}


