import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  title: string;
  image: string;
  style: string;
};

interface GalleryCollectionsProps {
  items: GalleryItem[];
  selectedStyle: string | null;
  query: string;
}

export default function GalleryCollections({ items, selectedStyle, query }: GalleryCollectionsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 🔹 Filtrer les items selon style et recherche
  const filteredItems = items.filter(
    (item) =>
      (!selectedStyle || item.style === selectedStyle) &&
      item.title.toLowerCase().includes(query.toLowerCase())
  );

  // 🔹 Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {currentItems.map((item) => (
          <div key={item.title} className="relative cursor-pointer">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="object-cover rounded-md w-full h-64"
            />
            <h3 className="mt-2 text-center font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* 🔹 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            ← Précédent
          </button>

          <span>
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Suivant →
          </button>
        </div>
      )}
    </div>
  );
}
