"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import GalleryCollections from "@/components/GalleryCollections";
import HeaderCollections from "@/components/HeaderCollections";

const galleryItems = [
  // 🔹 3eme période (8 imágenes)
  ...Array.from({ length: 17 }, (_, i) => ({
    title: `3eme période ${i + 1}`,
    style: "3eme période",
    image: `/2021-20xx-3eme-periode/pierre-arnould-artist-3eme-periode-${i + 1}.jpg`,
  })),

  // 🔹 Tondos (22 imágenes)
  ...Array.from({ length: 22 }, (_, i) => ({
    title: `Tondo ${i + 1}`,
    style: "Tondos",
    image: `/1995-2020-Tondos/pierre-arnould-artist-tondo-${i + 1}.jpg`,
  })),

  // 🔹 Compartimentés (26 imágenes)
  ...Array.from({ length: 26 }, (_, i) => ({
    title: `Compartimenté ${i + 1}`,
    style: "Compartimentés",
    image: `/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-${i + 1}.jpg`,
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
    <main className="overflow-x-hidden">
      <HeaderCollections />

      <SearchBar
        query={query}
        setQuery={setQuery}
        filteredCount={filteredCount}
        resetFilters={resetFilters}
      />

      <div className="flex relative p-18 pb-1 bg-white z-1">
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

      <Footer />
    </main>
  );
}