"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface WorkImageProps {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  className?: string;
  onError?: () => void;
  onLoad?: () => void;
  workSeries: string; // nom de la série
  workIndex: number;  // index de l'image
}

export default function WorkImage({
  src,
  alt,
  title,
  width,
  height,
  className = "",
  onError,
  onLoad,
  workSeries,
  workIndex,
}: WorkImageProps) {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    console.error(`❌ Error loading image: ${src}`);
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    console.log(`✅ Image loaded successfully: ${title}`);
    setIsLoading(false);
    onLoad?.();
  };

const handleClick = () => {
  // Naviguer vers le diaporama avec le nom de la série
  router.push(`/diaporama/${workSeries}?index=${workIndex}`);
};

  return (
    <div className="relative group cursor-pointer" onClick={handleClick}>
      {/* Loader pendant le chargement */}
      {isLoading && !hasError && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md animate-pulse"
          style={{ width, height }}
        >
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto" />
            <p className="text-xs text-gray-500 mt-2">Chargement...</p>
          </div>
        </div>
      )}

      {/* Image avec erreur */}
      {hasError ? (
        <div
          className="flex items-center justify-center bg-gray-200 rounded-md"
          style={{ width, height }}
        >
          <div className="text-center p-4">
            <span className="text-4xl">🖼️</span>
            <p className="text-xs text-gray-600 mt-2">Image non trouvée</p>
            <p className="text-xs text-gray-500 mt-1">{title}</p>
          </div>
        </div>
      ) : (
        <>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} transition-all duration-300 group-hover:opacity-90 group-hover:scale-[1.02]`}
            onError={handleError}
            onLoad={handleLoad}
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-white text-center">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
              <p className="text-sm font-medium">Voir en diaporama</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}