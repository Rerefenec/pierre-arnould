"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { seriesData } from "./data/seriesData";
import { DiaporamaHeader } from "./DiaporamaHeader";
import { DiaporamaImage } from "./DiaporamaImage";
import { DiaporamaDescription } from "./DiaporamaDescription";

export default function Diaporama({ ouvres }: { ouvres: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const works = seriesData[ouvres] || [];
  const [isZoomed, setIsZoomed] = useState(false);
  const indexUrl = parseInt(searchParams.get("index") || "1", 10);
  const worksCount = works.length;

  const currentIndex = ((indexUrl - 1 + worksCount) % worksCount);
  const currentWork = works[currentIndex];

  
  const handleZoom = () => {
    if (!isZoomed) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
    setIsZoomed(!isZoomed);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentWork.title,
        text: `Découvrez l'œuvre : ${currentWork.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié !");
    }
  };


const goTo = useCallback((direction: "next" | "prev") => {
  if (isZoomed) return;
  const newIndex = direction === "next"
    ? (indexUrl % worksCount) + 1
    : ((indexUrl - 2 + worksCount) % worksCount) + 1;
  const newParams = new URLSearchParams(searchParams);
  newParams.set("index", newIndex.toString());
  router.replace(`/diaporama/${ouvres}?${newParams.toString()}`);
}, [isZoomed, indexUrl, worksCount, searchParams, router, ouvres]);

const handleClose = useCallback(() => {
  if (isZoomed) {
    document.exitFullscreen?.();
    setIsZoomed(false);
  } else router.push(`/${ouvres}`);
}, [isZoomed, router, ouvres]);


useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo("next");
    else if (e.key === "ArrowLeft") goTo("prev");
    else if (e.key === "Escape") handleClose();
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [goTo, handleClose]);


  if (worksCount === 0)
    return <p className="text-center mt-18 text-white bg-black min-h-screen">Oeuvre inconnue</p>;

  return (
    <div className={isZoomed ? "fixed inset-0 bg-black flex items-center justify-center" : "fixed inset-0 bg-black flex flex-col gap-4"}>
      <DiaporamaHeader isZoomed={isZoomed} onZoom={handleZoom} onShare={handleShare} onClose={handleClose} />
  <main className={`flex flex-1 flex-col md:flex-row pt-16 ${isZoomed ? "items-center justify-center" : ""}`}>

  {/* IMAGE */}
  <DiaporamaImage
    currentWork={currentWork}
    isZoomed={isZoomed}
    onNext={() => goTo("next")}
    onPrev={() => goTo("prev")}
  />

  {/* DESCRIPTION visible partout (elle vient naturellement en dessous sur mobile) */}
  <DiaporamaDescription
    work={currentWork}
    index={indexUrl}
    total={worksCount}
    ouvres={ouvres}
    isZoomed={isZoomed}
  />
</main>

    </div>
  );
}
