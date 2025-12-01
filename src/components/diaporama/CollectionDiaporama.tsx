"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { seriesData } from "../../app/data/seriesData";
import { DiaporamaHeader } from "./DiaporamaHeader";
import { CollectionImageDiaporama } from "./CollectionImageDiaporama";
import { DiaporamaDescription } from "./DiaporamaDescription";

interface CollectionDiaporamaProps {
  ouvres: string;
  initialIndex?: number;
  onClose?: () => void;
}

export default function CollectionDiaporama({
  ouvres,
  initialIndex: initialIndexProp,
  onClose,
}: CollectionDiaporamaProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = (ouvres || "").toLowerCase();
  const works = seriesData[key] || [];
  const worksCount = works.length;
  const initialIndex =
    initialIndexProp ?? parseInt(searchParams.get("index") || "1", 10) - 1;
const [currentIndex] = useState(
  initialIndex >= 0 && initialIndex < worksCount ? initialIndex : 0
);


  const currentWork = works[currentIndex];
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔹 Sauvegarder index uniquement pour scroll/restauration dans cette collection
  useEffect(() => {
    sessionStorage.setItem(`lastViewedIndex-${key}`, currentIndex.toString());
  }, [currentIndex, key]);

  // 🔹 Zoom / fullscreen
  useEffect(() => {
    const handleFullscreenChange = () =>
      setIsZoomed(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleZoom = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container?.requestFullscreen?.().catch(console.log);
    } else {
      document.exitFullscreen?.().catch(console.log);
    }
  };

  const handleShare = () => {
    if (!currentWork) return;
    if (navigator.share) {
      navigator
        .share({
          title: currentWork.title,
          text: `Découvrez l'œuvre : ${currentWork.title}`,
          url: window.location.href,
        })
        .catch(console.log);
    } else if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Lien copié !"))
        .catch(console.log);
    } else {
      window.prompt("Copiez ce lien :", window.location.href);
    }
  };

  const handleClose = () => {
    if (isZoomed && document.fullscreenElement) {
      document.exitFullscreen?.();
      setIsZoomed(false);
    } else if (onClose) {
      onClose(); // revient à la page Collections
    } else {
      router.back();
    }
  };

  if (worksCount === 0) {
    return (
      <p className="text-center mt-18 text-white bg-black min-h-screen">
        Oeuvre inconnue
      </p>
    );
  }

  return (
    <div
      ref={containerRef}
      className={
        isZoomed
          ? "fixed inset-0 bg-black flex items-center justify-center z-50"
          : "fixed inset-0 bg-black flex flex-col"
      }
    >
      <DiaporamaHeader
        isZoomed={isZoomed}
        onZoom={handleZoom}
        onShare={handleShare}
        onClose={handleClose}
      />

      <main
        className={`flex flex-1 flex-col md:flex-row ${
          isZoomed ? "items-center justify-center" : "pt-0 sm:pt-16"
        }`}
      >
        <CollectionImageDiaporama // <-- CHANGEMENT ICI
          currentWork={currentWork}
          isZoomed={isZoomed} // onNext et onPrev ne sont plus nécessaires
          onExitFullscreen={() => document.exitFullscreen()}
        />
        <DiaporamaDescription
          work={currentWork}
          index={currentIndex + 1}
          total={worksCount}
          ouvres={ouvres}
          isZoomed={isZoomed}
        />
      </main>
    </div>
  );
}
