"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WorkImage from "@/components/WorkImage";
import { useState, useEffect } from "react";

interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
}

// 🔹 Clé de série pour le diaporama
const SERIES_KEY = "cloisonnes";

const works: Work[] = [
  ...Array.from({ length: 27 }, (_, i) => ({
    title: `Cloisonnes ${i + 1}`,
    style: "Cloisonnés",
    image: `/1969-1994-Cloisonnes-mini/pierre-arnould-artiste-cloisonnes-${
      i + 1
    }.webp`,
    description: "..",
  })),
];

export default function CloisonnesPage() {
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (failedImages.length > 0) {
      console.log(
        "Images échouées :",
        failedImages.map((idx) => ({
          index: idx + 1,
          src: works[idx].image,
        }))
      );
    }
  }, [failedImages]);

  // 🔹 ✅ Función para hacer scroll a la última imagen vista
  const scrollToLastViewed = () => {
    const lastId = sessionStorage.getItem("lastViewedId");
    console.log("🔹 Buscando scroll a:", lastId);
    
    if (lastId) {
      // Pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => {
        const element = document.getElementById(`thumb-${lastId}`);
        console.log("🔹 Elemento encontrado:", element);
        
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        sessionStorage.removeItem("lastViewedId");
      }, 300);
    }
  };

  // 🔹 Al montar el componente Y cada vez que la página se hace visible
  useEffect(() => {
    scrollToLastViewed();

    const handleFocus = () => {
      console.log("🔹 Página enfocada");
      scrollToLastViewed();
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  return (
    <div>
      <main className="overflow-x-hidden">
        <Hero />

        {/* 🔹 Fond global noir */}
        <div className="bg-black min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">
          {/* 🔹 Grille des œuvres */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 md:gap-30 mt-10 md:mt-0">
            {works.map((work, idx) => (
              <div
                key={idx}
                id={`thumb-image-${idx}`}
                className="flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out p-4 w-dvh max-w-full mb-10 md:mb-0 overflow-hidden"
              >
                {/* Image avec limite de hauteur et centrage */}
                <div className="aspect-square w-full flex items-center justify-center bg-black/20 mb-4">
                  <WorkImage
                    src={work.image}
                    alt={work.title}
                    title={work.title}
                    className="object-contain"
                    workSeries={SERIES_KEY}
                    workIndex={idx}
                    onError={() => handleImageError(idx)}
                  />
                </div>

                {/* Informations de l'œuvre toujours en bas */}
                <div className="mt-auto w-70 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-3 md:p-4 flex flex-col items-center justify-center">
                  <h2 className="text-white text-center font-semibold text-sm md:text-base lg:text-lg">
                    {work.title}
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm lg:text-base">
                    {work.style}
                  </p>
                  <p className="text-gray-500 wrap-break-word overflow-hidden line-clamp-3 w-full text-xs md:text-sm lg:text-base">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}