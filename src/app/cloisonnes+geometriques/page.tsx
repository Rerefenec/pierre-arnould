"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import UnderGallery from "@/components/UnderGallery";
import UnderHero from "@/components/UnderHero";

export default function HomePage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        
        <div className="relative">

      {/* <Hero /> */}
      <UnderHero />
      </div>
      {/* Fondo de la galería en blanco para cubrir progresivamente el Hero */}
      <div className="relative pt-26 pb-1 bg-black ">
        <UnderGallery />
      </div>
    </main>
    <Footer />
    </div>
  );
}