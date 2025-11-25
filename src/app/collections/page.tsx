"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Icône de flèche pour le bouton

import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import GalleryCollections from "@/components/GalleryCollections";
import Header from "@/components/Header";

// ... (galleryItems et styles restent inchangés)
const galleryItems = [
  ...Array.from({ length: 24 }, (_, i) => ({
    title: `Geometrique ${i + 1}`,
    style: "Géometriques",
    image: `/2021-2025-Geometriques-mini/pierre-arnould-artiste-geometrique-${
      i + 1
    }.webp`,
  })), 

  ...Array.from({ length: 23 }, (_, i) => ({
    title: `Baroque ${i + 1}`,
    style: "Baroques",
    image: `/2021-2025-Baroques-mini/pierre-arnould-artiste-baroque-${
      i + 1
    }.webp`,
  })),

  ...Array.from({ length: 57 }, (_, i) => ({
    title: `Tondo ${i + 1}`,
    style: "Tondos",
    image: `/1995-2020-Tondos-mini/pierre-arnould-artiste-tondo-${i + 1}.webp`,
  })), 

  ...Array.from({ length: 27 }, (_, i) => ({
    title: `Cloisonnes ${i + 1}`,
    style: "Cloisonnés",
    image: `/1969-1994-Cloisonnes-mini/pierre-arnould-artiste-cloisonnes-${
      i + 1
    }.webp`,
  })),
  
];

const styles = [
  "Géometriques",
  "Baroques",
  "Tondos",
  "Cloisonnés",
  "Toutes les œuvres",
];

export default function Collections() {
  const [query, setQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false); // 1. Nouvel état pour la visibilité du bouton
  const [shuffledGalleryItems] = useState(() => 
    [...galleryItems].sort(() => Math.random() - 0.5)
  );

  const resetFilters = () => {
    setQuery("");
    setSelectedStyle(null);
  };

  const filteredCount = shuffledGalleryItems.filter(
    (item) =>
      (!selectedStyle || item.style === selectedStyle) &&
      item.title.toLowerCase().includes(query.toLowerCase())
  ).length; // 2. Fonction pour remonter en haut de la page

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ajoute une animation de défilement douce
    });
  }; // 3. Logique pour montrer/cacher le bouton

 useEffect(() => {
  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 🔥 Apparaît uniquement quand tu es tout en bas (tolérance 5px)
    const atBottom = Math.abs(documentHeight - (scrollTop + windowHeight)) < 5;

    setIsVisible(atBottom);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <main className="overflow-x-hidden bg-black min-h-screen">
     <Header />
      <section className="mt-32 sm:mt-24 md:mt-32 xl:mt-40">
        <h1
          className="text-white text-center animate__animated animate__fadeInDown 
text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
        >
        Collections 
        </h1>
        <div className="px-4 sm:px-6 md:px-10 xl:px-20">
          <SearchBar
            query={query}
            setQuery={setQuery}
            filteredCount={filteredCount}
            resetFilters={resetFilters}
            styles={styles}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </div>
       {/* Layout principal */}
        <div className="flex flex-col lg:flex-row relative bg-black px-2 sm:px-6 md:px-10 xl:px-16 2xl:px-32">
          {/* Sidebar : Ajout de 'hidden' et 'lg:block' pour la réactivité */}           <aside className="lg:w-1/5 mb-6 lg:mb-0 lg:pr-8 hidden lg:block">
            <SideBar
              styles={styles}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
            />
          </aside>
          {/* Galerie */}
          <section className="flex-1">
            <GalleryCollections
              items={shuffledGalleryItems}
              selectedStyle={selectedStyle}
              query={query}
            />
          </section>
                  </div>
      </section>
      {/* 4. Bouton de retour en haut de page */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-33 right-6 z-50 
 bg-white text-black p-3 rounded-full shadow-lg 
 hover:bg-gray-300 transition-all duration-100"
          aria-label="Remonter en haut de page"
        >
         <ArrowUp className="w-6 h-6" />
        </button>
      )}
      <footer className="relative bg-black mt-10 px-2 sm:px-6 md:px-10 xl:px-16 2xl:px-32">
        <Footer />
      </footer>
    </main>
  );
}
