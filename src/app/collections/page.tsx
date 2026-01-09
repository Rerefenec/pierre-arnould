"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import GalleryCollections from "@/components/GalleryCollections";
import Header from "@/components/Header";
import { seriesData } from "@/app/data/seriesData";
import CollectionDiaporama from "@/components/diaporama/CollectionDiaporama";

/* =======================
   Utils
======================= */
const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

/* =======================
   Data
======================= */
const galleryItems = Object.entries(seriesData).flatMap(([serie, works]) =>
  works.map((work, index) => {
    const miniImage = work.image
      .replace("/1969-1994-Cloisonnes/", "/1969-1994-Cloisonnes-mini/")
      .replace("/1995-2020-Tondos/", "/1995-2020-Tondos-mini/")
      .replace("/2021-2025-Baroques/", "/2021-2025-Baroques-mini/")
      .replace("/2021-2025-Geometriques/", "/2021-2025-Geometriques-mini/")
      .replace(".jpg", ".webp")
      .replace(".png", ".webp");

    return {
      title: work.title,
      image: miniImage,
      lien: work.lien,
      index, 
      serie,
    };
  })
);

const styles = [
  "Géométrique",
  "Baroques",
  "Tondos",
  "Cloisonnés",
  "Toutes les œuvres",
];

const styleToLien: Record<string, string | null> = {
  Géométrique: "geometrique",
  Baroques: "baroques",
  Tondos: "tondos",
  Cloisonnés: "cloisonnes",
  "Toutes les œuvres": null,
};

export default function Collections() {
  const [query, setQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDiaporama, setOpenDiaporama] = useState<{
    serie: string;
    index: number;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shuffledGalleryItems, setShuffledGalleryItems] =
    useState(galleryItems);

  /* Shuffle once on client */
  useEffect(() => {
    setShuffledGalleryItems(
      [...galleryItems].sort(() => Math.random() - 0.5)
    );
  }, []);

  const selectedLien = selectedStyle
    ? styleToLien[selectedStyle]
    : null;

  /* ✅ SINGLE FILTER SOURCE */
  const filteredItems = shuffledGalleryItems.filter(
    (item) =>
      (!selectedLien || item.lien === selectedLien) &&
      normalize(item.title).includes(normalize(query))
  );

  const filteredCount = filteredItems.length;

  const resetFilters = () => {
    setQuery("");
    setSelectedStyle(null);
    setCurrentPage(1);
  };

  /* Scroll button */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const atBottom =
        Math.abs(documentHeight - (scrollTop + windowHeight)) < 5;
      setIsVisible(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden bg-black min-h-screen">
      <Header />

      <section className="mt-32 sm:mt-24 md:mt-32 xl:mt-40">
        <h1 className="text-white text-center text-5xl font-bold mb-8">
          Collections
        </h1>

        <div className="px-4 sm:px-6 md:px-10 xl:px-20">
          <SearchBar
            query={query}
            setQuery={(v) => {
              setQuery(v);
              setCurrentPage(1);
            }}
            filteredCount={filteredCount}
            resetFilters={resetFilters}
            styles={styles}
            selectedStyle={selectedStyle}
            setSelectedStyle={(style) => {
              setSelectedStyle(style);
              setCurrentPage(1);
            }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="flex flex-col lg:flex-row px-6">
          <aside className="hidden lg:block lg:w-1/5">
            <SideBar
              styles={styles}
              selectedStyle={selectedStyle}
              setSelectedStyle={(style) => {
                setSelectedStyle(style);
                setCurrentPage(1);
              }}
              setCurrentPage={setCurrentPage}
            />
          </aside>

          <section className="flex-1">
            <GalleryCollections
              items={filteredItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              onImageClick={(item) =>
                setOpenDiaporama({
                  serie: item.serie,
                  index: item.index, 
                })
              }
            />
          </section>
        </div>
      </section>

      {isVisible && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full"
        >
          <ArrowUp />
        </button>
      )}

      {openDiaporama && (
        <CollectionDiaporama
          ouvres={openDiaporama.serie}
          initialIndex={openDiaporama.index}
          onClose={() => setOpenDiaporama(null)}
        />
      )}

      <Footer />
    </main>
  );
}
