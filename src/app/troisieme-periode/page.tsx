"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WorkImage from "@/components/WorkImage";
import { useState } from "react";

interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
}

const works: Work[] = [
  ...Array.from({ length: 17 }, (_, i) => ({
    title: `3eme période ${i + 1}`,
    style: "3eme période",
    image: `/2021-20xx-3eme-periode-mini/pierre-arnould-artist-3eme-periode-${
      i + 1
    }.webp`,
    description: "..",
  })),
];

export default function TroisiemePeriodePage() {
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => [...prev, index]);
  };

  return (
    <div>
      <main className="overflow-x-hidden">
        <Hero />

        {/* Afficher les images avec erreurs */}
        {failedImages.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 m-6">
            <p className="font-semibold text-red-800">
              Images qui n&apos;ont pas pu être chargées :
            </p>
            <ul className="list-disc list-inside text-red-700 mt-2">
              {failedImages.map((idx) => (
                <li key={idx}>
                  Tondo {idx + 1}:{" "}
                  <code className="bg-red-100 px-2 py-1 rounded text-sm">
                    {works[idx].image}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-black min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">
          {/* Grille responsive */}
          <div className="mt-30 grid grid-cols-1 md:grid-cols-3 gap-40 px-4 md:px-0">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-start text-center rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out p-4"
              >
                {/* Conteneur de l'image pour le centrage */}
                <div className="relative">
                  <WorkImage
                    src={work.image}
                    alt={work.title}
                    title={work.title}
                    width={250}
                    height={400}
                    className="object-contain rounded-md"
                    workSeries="troisieme-periode"
                    workIndex={idx}
                    onError={() => handleImageError(idx)}
                  />
                </div>

                {/* Texte */}
                <div className=" w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-2">
                  <h2 className="text-white mt-2 text-center font-semibold">
                    {work.title}
                  </h2>
                  <p className="text-gray-500 text-sm text-center">
                    {work.style}
                  </p>
                  <p className="text-gray-600 text-center mt-1">
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
  );
}
