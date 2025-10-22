"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
  year: string;
}

const works: Work[] = Array.from({ length: 9 }, (_, i) => ({
  title: `Compartimentés #${i + 1}`,
  image: `/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-${i + 1}.jpg`,
  style: "style",
  description: "description",
  year: "2025",
}));


export default function DiaporamaPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 🔹 On lit le paramètre `index` depuis l’URL
  const initialIndex = parseInt(searchParams.get("index") || "0", 10);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // 🔹 Si l’index change dans l’URL, on met à jour
  useEffect(() => {
    const i = parseInt(searchParams.get("index") || "0", 10);
    if (!isNaN(i)) setCurrentIndex(i);
  }, [searchParams]);

  const goTo = (index: number) => {
    if (index < 0) index = works.length - 1;
    if (index >= works.length) index = 0;
    setCurrentIndex(index);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center md:p-6">
      <h1 className="text-2xl md:text-2xl font-bold mb-4 md:mb-8 text-center px-6 md:px-0">
        Série : Compartimentés
      </h1>

      {/* Image principale + flèches */}
      <div className="relative w-full md:max-w-3xl aspect-[4/3] mb-4 md:mb-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={works[currentIndex].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <img
              src={works[currentIndex].image}
              alt={works[currentIndex].title}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Flèche gauche */}
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="absolute left-2 md:left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-20 pointer-events-auto"
          aria-label="Image précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Flèche droite */}
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="absolute right-2 md:right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-20 pointer-events-auto"
          aria-label="Image suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Infos de l’image */}
      <h2 className="text-gray-400 mb-2 text-center px-6">
        {works[currentIndex].title}
      </h2>
      <p className="text-gray-400">{works[currentIndex].style}</p>
      <p className="text-gray-400 italic mb-6">{works[currentIndex].description}</p>
      <p className="text-gray-400 mb-6">{works[currentIndex].year}</p>

      {/* 🔙 Bouton retour */}
      <button
        onClick={() => router.push("/compartimentes")}
        className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition"
      >
        Retour à la galerie
      </button>
    </div>
  );
}