"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WorkImage from "@/components/WorkImage";
import { useState, useEffect } from "react";
// 🎯 1. Importer la structure et les données depuis la source unique
import { Work, seriesData } from "@/app/data/seriesData"; 
import { usePathname } from "next/navigation";


// 🔹 Clé de série pour le diaporama
const SERIES_KEY = "cloisonnes";

// 🎯 2. Utiliser les données importées et les adapter pour les miniatures
// Cette étape crée le tableau 'works' utilisé dans la grille avec les chemins des miniatures.
const works: Work[] = seriesData[SERIES_KEY].map((work, i) => ({
    ...work,
    // On remplace le chemin de l'image (qui est la full size dans seriesData)
    // par le chemin de la miniature pour optimiser le chargement de la grille.
    // NOTE: i+1 est utilisé ici pour reconstruire le nom de fichier de la miniature
    image: `/1969-1994-Cloisonnes-mini/pierre-arnould-artiste-cloisonnes-${i + 1}.webp`,
}));

export default function CloisonnesClient() {
      const pathname = usePathname();
    
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

 {pathname === "/cloisonnes" && (
  <div
    className="
      relative 
      -mt-10 sm:-mt-14 md:-mt-15   /* remonte sur le Hero */
      bg-black/60 
      backdrop-blur-sm 
      text-gray-200 
      text-justify
      px-4 py-6 
      max-w-6xl mx-auto 
      rounded-xl 
      shadow-lg
    "
  >
   La structure du fragment. Ici, je travaille la texture et la construction.
    J&apos;assemble de petits morceaux de bois ou de carton en une mosaïque brute et 
    uniforme. Ces œuvres transforment des matériaux récupérés en une surface tactile 
    et architecturale qui juxtapose l&apos;ordre de la grille et le chaos du matériau

  </div>
)}
La structure du fragment. Ici, je travaille la texture et la construction. J&apos;assemble de petits morceaux de bois ou de carton en une mosaïque brute et uniforme. Ces œuvres transforment des matériaux récupérés en une surface tactile et architecturale qui juxtapose l'ordre de la grille et le chaos du matériau
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