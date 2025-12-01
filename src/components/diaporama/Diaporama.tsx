"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { seriesData } from "../../app/data/seriesData";
import { DiaporamaHeader } from "./DiaporamaHeader";
import { DiaporamaImage } from "./DiaporamaImage";
import { DiaporamaDescription } from "./DiaporamaDescription";

export default function Diaporama({ ouvres }: { ouvres: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = (ouvres || "").toLowerCase();
  const works = seriesData[key] || [];
  const worksCount = works.length;

  // 🔹 Index actual basado en URL (1-based)
  const indexUrl = parseInt(searchParams.get("index") || "1", 10);
  let currentIndex = indexUrl - 1;
  if (currentIndex < 0 || currentIndex >= worksCount) currentIndex = 0;

  const currentWork = works[currentIndex];
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔹 ✅ Guardar índice cada vez que cambie
  useEffect(() => {
    sessionStorage.setItem("lastViewedIndex", currentIndex.toString());
    console.log("🔹 Guardando índice:", currentIndex);
  }, [currentIndex]);

  // 🔹 Zoom / fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => setIsZoomed(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleZoom = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container?.requestFullscreen?.().catch(console.log);
    } else {
      document.exitFullscreen?.().catch(console.log);
    }
  };

  // 🔹 Compartir
  const handleShare = () => {
    if (!currentWork) return;
    if (navigator.share) {
      navigator
        .share({ title: currentWork.title, text: `Découvrez l'œuvre : ${currentWork.title}`, url: window.location.href })
        .catch(console.log);
    } else if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(window.location.href).then(() => alert("Lien copié !")).catch(console.log);
    } else {
      window.prompt("Copiez ce lien :", window.location.href);
    }
  };

  // 🔹 Navegación Next / Prev
  const goTo = useCallback(
    (direction: "next" | "prev") => {
      let newIndex;
      if (direction === "next") newIndex = (currentIndex + 1) % worksCount;
      else newIndex = (currentIndex - 1 + worksCount) % worksCount;

      const newIndexUrl = newIndex + 1;
      const params = new URLSearchParams(searchParams);
      params.set("index", newIndexUrl.toString());
      router.replace(`/diaporama/${ouvres}?${params.toString()}`);
    },
    [currentIndex, worksCount, searchParams, router, ouvres]
  );

  // 🔹 Cerrar diaporama
  const handleClose = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      console.log("🔹 Cerrando desde índice:", currentIndex);
      router.push(`/${ouvres}`);
    }
  }, [router, currentIndex, ouvres]);

  // 🔹 Atajos teclado
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
      <p className="text-center mt-18 text-white bg-black min-h-screen">Oeuvre inconnue</p>
    );

  return (
    <div
      ref={containerRef}
      className={
        isZoomed
          ? "fixed inset-0 bg-black flex items-center justify-center z-50"
          : "fixed inset-0 bg-black flex flex-col"
      }
    >
                 {" "}

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
                   {" "}

        <DiaporamaImage
          currentWork={currentWork}
          isZoomed={isZoomed}
          onNext={() => goTo("next")}
          onPrev={() => goTo("prev")}
          onExitFullscreen={() => document.exitFullscreen()}
        />

           {" "}

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