"use client";

import { useState} from "react";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import GalleryCollections from "@/components/GalleryCollections";
import Header from "@/components/Header";

const galleryItems = [
  // 🔹 3eme période (8 imágenes)
  ...Array.from({ length: 17 }, (_, i) => ({
    title: `3eme période ${i + 1}`,
    style: "3eme période",
    image: `/2021-20xx-3eme-periode-mini/pierre-arnould-artist-3eme-periode-${i + 1}.webp`,
  })),

  // 🔹 Tondos (22 imágenes)
  ...Array.from({ length: 21 }, (_, i) => ({
    title: `Tondo ${i + 1}`,
    style: "Tondos",
    image: `/1995-2020-Tondos/pierre-arnould-artist-tondo-${i + 1}.webp`,
  })),

  // 🔹 Compartimentés (26 imágenes)
  ...Array.from({ length: 9 }, (_, i) => ({
    title: `Compartimenté ${i + 1}`,
    style: "Compartimentés",
    image: `/1969-1994-Compartimentes-mini/pierre-arnould-artist-compartimentes-${i + 1}.webp`,
  })),




];




const styles = ["3eme période", "Tondos", "Compartimentés", "Toutes les œuvres"];

export default function Collections() {
  const [query, setQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
 const shuffledGalleryItems = [...galleryItems].sort(() => Math.random() - 0.5);

  // 🔹 Fonction pour réinitialiser tous les filtres
  const resetFilters = () => {
    setQuery("");
    setSelectedStyle(null);
  };

   // 🔹 Filtrage pour le nombre d’images
  const filteredCount = shuffledGalleryItems.filter(
    (item) =>
      (!selectedStyle || item.style === selectedStyle) &&
      item.title.toLowerCase().includes(query.toLowerCase())
  ).length;
  
  return (
    <main className="overflow-x-hidden bg-black ">
      <Header />
      <div className="mt-40">
        <h1 className=" text-white flex justify-center animate__animated animate__fadeInDown text-6xl font-bold ">
          Collections
        </h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        filteredCount={filteredCount}
        resetFilters={resetFilters}
      />

      <div className="flex relative p-18 pb-1 bg-black z-1">
        <SideBar
          styles={styles}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />

        <GalleryCollections
          items={shuffledGalleryItems}
          selectedStyle={selectedStyle}
          query={query}
        />
      </div>
      </div >

      <div className="relative p-1 bg-black z-1">
                <Footer />
              </div>
    </main>
  );
}