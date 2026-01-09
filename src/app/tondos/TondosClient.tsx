"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WorkImage from "@/components/WorkImage";
import { useState, useEffect } from "react";
import { Work, seriesData } from "@/app/data/seriesData"; 
import { usePathname } from "next/navigation";


const SERIES_KEY = "tondos";

const works: Work[] = seriesData[SERIES_KEY].map((work, i) => ({
    ...work,
    image: `/1995-2020-Tondos-mini/pierre-arnould-artiste-tondo-${i + 1}.webp`,
}));

export default function TondosClient() {
  const pathname = usePathname();

 const [failedImages, setFailedImages] = useState<number[]>([]);
    const [isReady, setIsReady] = useState(false);

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

    const scrollToLastViewed = () => {
        const lastIndex = sessionStorage.getItem("lastViewedIndex");

        if (lastIndex !== null) {
            const idx = parseInt(lastIndex, 10);
            const element = document.getElementById(`thumb-${idx}`);

            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                sessionStorage.removeItem("lastViewedIndex");
            }

            setTimeout(() => setIsReady(true), 200); 
        } else {
            setIsReady(true);
        }
    };

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
        <div className="bg-black min-h-screen">
            <Hero />
   
   {pathname === "/tondos" && (
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
    Une exploration circulaire. Dans cette série, je me concentre sur la forme du 
    tondo, un cercle parfait qui invite à la contemplation. J&apos;expérimente avec des 
    motifs répétitifs et des couleurs vives, créant des œuvres qui semblent vibrer 
    et se déplacer. C&apos;est un dialogue entre la forme et la couleur, une invitation 
    à voir au-delà du cadre.
  </div>
)}



            <div style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}>
                <main className="overflow-x-hidden">

                    <div className="text-gray-900 flex flex-col items-center justify-center md:p-6">  
                        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 md:gap-30 mt-10 md:mt-0">
                            {works.map((work, idx) => (
                                <div
                                    key={idx}
                                    id={`thumb-${idx}`}
                                    className="flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out p-4 w-dvh max-w-full mb-10 md:mb-0 overflow-hidden"
                                >
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

                                    <div className="mt-auto w-full sm:min-w-60 sm:max-w-72 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-3 md:p-4 flex flex-col items-center justify-center">
                                        <h2 className="text-white text-center font-semibold text-sm md:text-base lg:text-lg">
                                            {work.title} 
                                        </h2>
                                      
                                        <p className="mt-1 text-center text-gray-500 wrap-break-word overflow-hidden w-full text-xs md:text-sm lg:text-base">
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
