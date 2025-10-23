"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WorkImage from "@/components/WorkImage";
import { useState } from "react";

interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
}

const SERIES_KEY = "tondos";
const works: Work[] = Array.from({ length: 41 }, (_, i) => ({
  title: `Tondo ${i + 1}`,
  style: "Tondos",
  image: `/1995-2020-Tondos-mini/pierre-arnould-artiste-tondo-${i + 1}.webp`,
  description: "..",
}));

const ITEMS_PER_PAGE = 6; // 3x3

export default function TondoPage() {
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => [...prev, index]);
  };

  const totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);

  const currentWorks = works.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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

        {/* Fond global noir */}
        <div className="bg-black min-h-screen text-gray-900 flex flex-col items-center justify-center p-6">
          {/* Grille des œuvres */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0 justify-items-center">
            {currentWorks.map((work, idx) => (
              <div
  key={idx}
  className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out p-4  w-full max-w-xs h-full"
>
  {/* Image avec limite de hauteur et centrage */}
  <div className="flex-1 flex justify-center items-center w-full min-h-[350px] max-h-[500px] mb-4 overflow-hidden">
    <WorkImage
      src={work.image}
      alt={work.title}
      title={work.title}
      width={400}
      height={400}
      className="object-contain max-h-full max-w-full rounded-md"
      workSeries={SERIES_KEY}
      workIndex={idx + 1}
      onError={() => handleImageError(idx)}
    />
  </div>

  {/* Informations de l'œuvre toujours en bas */}
  <div className="mt-auto w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-3">
    <h2 className="text-white text-center font-semibold">{work.title}</h2>
    <p className="text-gray-400 text-sm text-center">{work.style}</p>
    <p className="text-gray-500 text-center mt-1">{work.description}</p>
  </div>
</div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex mt-6 space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              ← Précédent
            </button>
            <span className="text-white flex items-center">
              Page {currentPage} / {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Suivant →
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
