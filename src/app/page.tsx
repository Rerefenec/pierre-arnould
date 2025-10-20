"use client";

import Hero from "./../components/Hero";
import GalleryHome from "../components/GalleryHome";
import Footer from "./../components/Footer";

export default function HomePage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <div className="relative  lg:h-[80vh] xl:h-[80vh] 2xl:h-[90vh]">
      <Hero />
      </div>
      {/* Fondo de la galería en blanco para cubrir progresivamente el Hero */}
      <div className="relative pt-26 pb-1 bg-black ">
        <GalleryHome />
      </div>
    </main>
    <Footer />
    </div>
  );
}

