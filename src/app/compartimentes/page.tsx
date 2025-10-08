


"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

interface Work {
  title: string;
  image: string;
  year: string;
}

const works: Work[] = [
  { title: "Compartimentés #1", image: "/compartimentes/pierre-arnould-artist-002.JPG", year: "2024" },
  { title: "Compartimentés #2", image: "/compartimentes/pierre-arnould-artist-003.JPG", year: "2024" },
  { title: "Compartimentés #3", image: "/compartimentes/pierre-arnould-artist-004.JPG", year: "2024" },
  { title: "Compartimentés #4", image: "/compartimentes/pierre-arnould-artist-010.JPG", year: "2024" },
  { title: "Compartimentés #5", image: "/compartimentes/pierre-arnould-artist-012.JPG", year: "2024" },
  { title: "Compartimentés #6", image: "/compartimentes/pierre-arnould-artist-016.JPG", year: "2024" },
  { title: "Compartimentés #7", image: "/compartimentes/pierre-arnould-artist-020.JPG", year: "2024" },
  { title: "Compartimentés #8", image: "/compartimentes/pierre-arnould-artist-005.JPG", year: "2024" },
  { title: "Compartimentés #9", image: "/compartimentes/pierre-arnould-artist-007.JPG", year: "2024" },
 
  
  // ajoute tes autres œuvres ici
];

export default function CompartimentesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) index = works.length - 1;
    if (index >= works.length) index = 0;
    setCurrentIndex(index);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6">
      {/* <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Sculptures, Objects & Installations
      </h1> */}
      <h1 className="text-2xl md:text-2xl font-bold mb-8 text-center">Série : Compartimentés</h1>

      {/* Image principale + flèches */}
      <div className="relative w-full max-w-3xl aspect-[4/3] mb-6 flex items-center justify-center">
        {/* --- Image animée (on la rend z-10) --- */}
       <AnimatePresence mode="wait">
  <motion.div
    key={works[currentIndex].title}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="absolute inset-0 flex items-center justify-center z-10"
  >
    <Image
      src={works[currentIndex].image}
      alt={works[currentIndex].title}
      fill
      className="object-contain"
      priority={true}
    />
  </motion.div>
</AnimatePresence>


        {/* --- Flèche gauche (PLACÉE APRÈS l'image animée et z-20 pour être au-dessus) --- */}
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="absolute left-2 md:left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-20 pointer-events-auto"
          aria-label="Image précédente"
        >
          {/* SVG chevron left */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* --- Flèche droite (PLACÉE APRÈS aussi) --- */}
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="absolute right-2 md:right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-20 pointer-events-auto"
          aria-label="Image suivante"
        >
          {/* SVG chevron right */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Titre et année */}
      <h2 className="text-gray-400 mb-2 text-center">
        {works[currentIndex].title}
      </h2>
      <p className="text-gray-400 mb-6">{works[currentIndex].year}</p>

      {/* Cercles de navigation */}
      <div className="flex space-x-3">
        {works.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full transition-all ${
              idx === currentIndex ? "bg-white scale-125" : "bg-gray-600"
            }`}
            onClick={() => goTo(idx)}
            aria-label={`Aller à l’image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}