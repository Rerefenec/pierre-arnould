"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
// Assurez-vous que DiaporamaHeader, DiaporamaImage, DiaporamaDescription sont correctement importés.
import { seriesData } from "./data/seriesData";
import { DiaporamaHeader } from "./DiaporamaHeader";
import { DiaporamaImage } from "./DiaporamaImage";
import { DiaporamaDescription } from "./DiaporamaDescription";

export default function Diaporama({ ouvres }: { ouvres: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const works = seriesData[ouvres] || [];
  const worksCount = works.length; // 🚨 IMPORTANT : Lire l'index actuel directement depuis l'URL (1-based)

  const indexUrl = parseInt(searchParams.get("index") || "1", 10); // 🚨 Convertir en index de tableau (0-based) et assurer qu'il est valide
  let currentIndex = indexUrl - 1;
  if (currentIndex < 0 || currentIndex >= worksCount) {
    currentIndex = 0;
  }

  const currentWork = works[currentIndex]; // 🔹 Gestion de l'état zoom (Reste en useState car il n'est pas lié à l'URL)

  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null); // 🔹 Debug : image actuelle

  useEffect(() => {
    console.log(
      `URL de l'image actuelle (index ${indexUrl}) :`,
      currentWork?.image
    );
  }, [currentWork, indexUrl]); // 🔹 Fullscreen listener

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsZoomed(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []); // 🔹 Zoom / fullscreen

  const handleZoom = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container?.requestFullscreen?.().catch((err) => console.log(err));
    } else {
      document.exitFullscreen?.().catch((err) => console.log(err));
    }
  }; // 🔹 Partage (inchangé)

const handleShare = () => {
  if (!currentWork) return;

  // ✅ Si le navigateur supporte navigator.share (mobile natif)
  if (navigator.share) {
    navigator
      .share({
        title: currentWork.title,
        text: `Découvrez l'œuvre : ${currentWork.title}`,
        url: window.location.href,
      })
      .catch((err) => console.log("Erreur partage :", err));
  } 
  // ✅ Sinon, fallback vers le copier-coller si disponible
  else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Lien copié !"))
      .catch((err) => console.log("Impossible de copier :", err));
  } 
  // ✅ Dernier fallback : prompt
  else {
    window.prompt("Copiez ce lien :", window.location.href);
  }
};



  const goTo = useCallback(
    (direction: "next" | "prev") => {
      if (isZoomed) return; // Utilise l'index 0-basé actuel, lu directement du composant

      let new0Index;
      if (direction === "next") {
        // Logique de bouclage Next : (index + 1) % total
        new0Index = (currentIndex + 1) % worksCount;
      } else {
        // Logique de bouclage Prev : (index - 1 + total) % total
        new0Index = (currentIndex - 1 + worksCount) % worksCount;
      } // Convertir en index 1-basé pour l'URL

      const newIndexUrl = new0Index + 1;

      const newParams = new URLSearchParams(searchParams);
      newParams.set("index", newIndexUrl.toString()); // Met à jour l'URL, le composant se re-rendra et lira le nouvel indexUrl
      router.replace(`/diaporama/${ouvres}?${newParams.toString()}`);
    },
    [currentIndex, worksCount, searchParams, router, ouvres, isZoomed]
  ); // 🔹 Fermeture (inchangé)

  const handleClose = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      router.push(`/${ouvres}`);
    }
  }, [router, ouvres]); // 🔹 Clavier // NOTE : On ajoute currentIndex aux dépendances car 'goTo' utilise currentIndex

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
    return (
      <p className="text-center mt-18 text-white bg-black min-h-screen">
         Oeuvre inconnue 
      </p>
    );

 return (
  <div
    ref={containerRef}
    className={
      isZoomed
        ? "fixed inset-0 bg-black flex items-center justify-center z-50"
        : "fixed inset-0 bg-black flex flex-col"
        // ☝️ Enlevé gap-4 pour mobile
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
        // ☝️ pt-0 sur mobile, pt-16 sur tablette+
      }`}
    >
                       {" "}
        <DiaporamaImage
        currentWork={currentWork}
        isZoomed={isZoomed}
        onNext={() => goTo("next")}
        onPrev={() => goTo("prev")}
      />
      <DiaporamaDescription
        work={currentWork}
        index={currentIndex + 1}
        total={worksCount}
        ouvres={ouvres}
        isZoomed={isZoomed}
      />
                   {" "}
      </main>
             {" "}
    </div>
  );
}
