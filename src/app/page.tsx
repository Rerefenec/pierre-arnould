"use client";

import Hero from "./../components/Hero";
import GalleryHome from "../components/GalleryHome";
import Footer from "./../components/Footer";

export default function HomePage() {
  return (
    <div>
      <main className="overflow-x-hidden">
      <Hero />
      {/* Fondo de la galería en blanco para cubrir progresivamente el Hero */}
      <div className="relative pt-18 pb-1 bg-white z-1">
        <GalleryHome />
      </div>
    </main>
    <div className="relative p-1 bg-white z-1">
      <Footer />
    </div>
    </div>
  );
}
