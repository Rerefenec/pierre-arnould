"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WorkImage from "@/components/WorkImage";
import { useState, useEffect } from "react";

interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
}

const SERIES_KEY = "geometrique";

const works: Work[] = [
  ...Array.from({ length: 24 }, (_, i) => ({
    title: `Geometrique ${i + 1}`,
    style: "geometrique",
    image: `/2021-2025-Geometriques-mini/pierre-arnould-artiste-geometrique-${i + 1}.webp`,
    description: "..",
  })),
];

export default function GeometriquePage() {
   const [failedImages, setFailedImages] = useState<number[]>([]);
      const [isReady, setIsReady] = useState(false); // ✅ Commence à false (invisible)
  
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
  
      // 🔹 ✅ Fonction pour faire scroll à la dernière image vue
      const scrollToLastViewed = () => {
          const lastIndex = sessionStorage.getItem("lastViewedIndex");
  
          if (lastIndex !== null) {
              const idx = parseInt(lastIndex, 10);
              const element = document.getElementById(`thumb-${idx}`);
  
              if (element) {
                  // ✅ Scroll instantané (pour éviter le saut visible, car l'opacité est à 0)
                  element.scrollIntoView({ behavior: "instant", block: "center" });
                  sessionStorage.removeItem("lastViewedIndex");
              }
  
              // ✅ Afficher avec fade-in après un délai (200ms pour stabilité sur tous les appareils)
              setTimeout(() => setIsReady(true), 200); 
          } else {
              // Si pas de scroll à effectuer, on affiche immédiatement
              setIsReady(true);
          }
      };
  
      // 🔹 ✅ useEffect pour exécuter le scroll au montage
      useEffect(() => {
          scrollToLastViewed();
  
          const handleFocus = () => {
              const lastIndex = sessionStorage.getItem("lastViewedIndex");
              if (lastIndex) scrollToLastViewed();
          };
  
          window.addEventListener("focus", handleFocus);
          return () => window.removeEventListener("focus", handleFocus);
      }, []);
  
      return (
          // 🎯 Conteneur externe : Garde le fond noir sur toute la page
          <div className="bg-black min-h-screen">
              
              {/* 🎯 HERO : Placé en dehors du conteneur de transition pour rester visible immédiatement */}
              <Hero /> 
  
              {/* Conteneur avec la transition d'opacité (applique le fade-in au reste du contenu) */}
              <div style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}>
                  <main className="overflow-x-hidden">
  
                      <div className="text-gray-900 flex flex-col items-center justify-center md:p-6">  
                          {/* 🔹 Grille des œuvres */}
                          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 md:gap-30 mt-10 md:mt-0">
                              {works.map((work, idx) => (
                                  <div
                                      key={idx}
                                      id={`thumb-${idx}`}
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
  
                                      {/* Informations de l'œuvre (utilise work.title et work.description importés) */}
  <div className="mt-auto w-full sm:min-w-60 sm:max-w-72 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-3 md:p-4 flex flex-col items-center justify-center">
                                          <h2 className="text-white text-center font-semibold text-sm md:text-base lg:text-lg">
                                              {work.title} 
                                          </h2>
                                          <p className="mt-1 text-gray-400 text-xs md:text-sm lg:text-base">
                                              {work.style}
                                          </p>
                                          <p className="mt-1 text-center text-gray-500 wrap-break-word overflow-hidden line-clamp-3 w-full text-xs md:text-sm lg:text-base">
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
          </div>
      );
  }