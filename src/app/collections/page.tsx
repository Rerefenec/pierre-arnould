"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import GalleryCollections from "@/components/GalleryCollections";
import Header from "@/components/Header";
import { seriesData } from "@/components/diaporama/data/seriesData";
import CollectionDiaporama from "@/components/diaporama/CollectionDiaporama";

const galleryItems = Object.entries(seriesData).flatMap(([serie, works]) =>
  works.map((work, index) => {
    const miniImage = work.image
      .replace("/1969-1994-Cloisonnes/", "/1969-1994-Cloisonnes-mini/")
      .replace("/1995-2020-Tondos/", "/1995-2020-Tondos-mini/")
      .replace("/2021-2025-Baroques/", "/2021-2025-Baroques-mini/")
      .replace("/2021-2025-Geometriques/", "/2021-2025-Geometriques-mini/")
      .replace(".jpg", ".webp")
      .replace(".png", ".webp");

    return { title: work.title, style: work.style, image: miniImage, lien: work.lien, index, serie };
  })
);

const styles = ["Géometriques", "Baroques", "Tondos", "Cloisonnés", "Toutes les œuvres"];

export default function Collections() {
  const [query, setQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [openDiaporama, setOpenDiaporama] = useState<{ serie: string; index: number } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [shuffledGalleryItems] = useState(() => [...galleryItems].sort(() => Math.random() - 0.5));

  const resetFilters = () => { setQuery(""); setSelectedStyle(null); setCurrentPage(1); };
  const filteredCount = shuffledGalleryItems.filter(
    (item) => (!selectedStyle || item.style === selectedStyle) && item.title.toLowerCase().includes(query.toLowerCase())
  ).length;

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
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
        <h1 className="text-white text-center animate__animated animate__fadeInDown text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Collections
        </h1>

        <div className="px-4 sm:px-6 md:px-10 xl:px-20">
          <SearchBar
            query={query}
            setQuery={(v) => { setQuery(v); setCurrentPage(1); }}
            filteredCount={filteredCount}
            resetFilters={() => { resetFilters(); setCurrentPage(1); }}
            styles={styles}
            selectedStyle={selectedStyle}
            setSelectedStyle={(style) => { setSelectedStyle(style); setCurrentPage(1); }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="flex flex-col lg:flex-row relative bg-black px-2 sm:px-6 md:px-10 xl:px-16 2xl:px-32">
          <aside className="lg:w-1/5 mb-6 lg:mb-0 lg:pr-8 hidden lg:block">
            <SideBar
              styles={styles}
              selectedStyle={selectedStyle}
              setSelectedStyle={(style) => { setSelectedStyle(style); setCurrentPage(1); }}
              setCurrentPage={setCurrentPage}
            />
          </aside>

          <section className="flex-1">
           <GalleryCollections
  items={shuffledGalleryItems}
  selectedStyle={selectedStyle}
  query={query}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  onImageClick={(item) => setOpenDiaporama({ serie: item.serie, index: item.index })}
/>

          </section>
        </div>
      </section>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-33 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-100"
          aria-label="Remonter en haut de page"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

{openDiaporama && (
  <div className="fixed inset-0 z-9999">
    <CollectionDiaporama
      ouvres={openDiaporama.serie}
      initialIndex={openDiaporama.index} // <-- passer l'index initial
      onClose={() => setOpenDiaporama(null)} // <-- pour fermer proprement
    />
  </div>
)}




      <footer className="relative bg-black mt-10 px-2 sm:px-6 md:px-10 xl:px-16 2xl:px-32">
        <Footer />
      </footer>
    </main>
  );
}
