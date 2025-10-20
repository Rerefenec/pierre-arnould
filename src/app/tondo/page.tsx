"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useState } from "react";

interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
}

const works: Work[] = [
  ...Array.from({ length: 21 }, (_, i) => ({
    title: `Tondo ${i + 1}`,
    style: "Tondos",
    image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-${i + 1}.jpg`,
    description: "..",
  }))
];

export default function TondoPage() {
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const handleImageError = (index: number, imagePath: string) => {
    console.error(`❌ Error loading image ${index + 1}: ${imagePath}`);
    setFailedImages(prev => [...prev, index]);
  };

  const handleImageLoad = (index: number) => {
    console.log(`✅ Image ${index + 1} loaded successfully`);
  };

  return (
    <div>
      <Hero />
      
      {/* Mostrar imágenes con errores */}
      {failedImages.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 m-6">
          <p className="font-semibold text-red-800">
            Imágenes que no se pudieron cargar:
          </p>
          <ul className="list-disc list-inside text-red-700 mt-2">
            {failedImages.map(idx => (
              <li key={idx}>
                Tondo {idx + 1}: <code className="bg-red-100 px-2 py-1 rounded text-sm">{works[idx].image}</code>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-black min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {works.map((work, idx) => (
            <div key={idx}   className="flex flex-col items-center justify-center text-center
              bg-white/10 backdrop-blur-sm border border-white/20 
              rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02]
              transition-all duration-500 ease-in-out w-full max-w-sm p-8">
              <div className="relative w-1/2 md:w-1/2">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-auto object-contain rounded-md"
                  onError={() => handleImageError(idx, work.image)}
                  onLoad={() => handleImageLoad(idx)}
                />
                {failedImages.includes(idx) && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-md">
                    <div className="text-center p-4">
                      <span className="text-4xl">🖼️</span>
                      <p className="text-xs text-gray-600 mt-2">Imagen no encontrada</p>
                    </div>
                  </div>
                )}
              </div>

              <h2 className="text-gray-800 mt-2 text-center font-semibold">{work.title}</h2>
              <p className="text-gray-500 text-sm text-center">{work.style}</p>
              <p className="text-gray-600 text-center mt-1">{work.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative p-1 bg-white z-1">
        <Footer />
      </div>
    </div>
  );
}