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
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/"
            alt="Portrait de Pierre Arnould"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO DERECHA */}
        <div className="space-y-6 text-justify">
          <h2 className="text-4xl font-bold">            Pierre Arnould </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            pierrearnould@gmail.com
            <br />
            07 81 87 12 15
          </p>
          
        </div>
      </section>

     

      <Footer />
    </div>
  );
}
