"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AproposPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />

      {/* --------------- SECTION 1 : Portrait + Biographie --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGEN IZQUIERDA */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <Image
            src="/dessins-photos/pierre-arnould-dessin2.jpg"
            alt="dessin de Pierre Arnould artiste plasticien"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXTO DERECHA */}
        <div className="space-y-6 text-center md:text-justify">
          <h2 className="text-4xl font-bold">            Pierre Arnould </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            pierre.arnould2@wanadoo.fr
            <br />
           
            <br />
            Atelier principal à Perpignan, France
          </p>
          
        </div>
      </section>

     

      <Footer />
    </div>
  );
}
