import Image from "next/image";

type GalleryItem = {
  title: string;
  image: string;
  style: string;
  serie: string;
  index: number;
};

interface GalleryCollectionsProps {
  items: GalleryItem[];
  selectedStyle: string | null;
  query: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  onImageClick?: (item: GalleryItem) => void;
}

export default function GalleryCollections({
  items,
  selectedStyle,
  query,
  currentPage,
  setCurrentPage,
  onImageClick,
}: GalleryCollectionsProps) {
  const itemsPerPage = 6;

  const filteredItems = items.filter(
    (item) =>
      (!selectedStyle || item.style === selectedStyle) &&
      item.title.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const goPrev = () => setCurrentPage(Math.max(currentPage - 1, 1));
  const goNext = () => setCurrentPage(Math.min(currentPage + 1, totalPages));

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 justify-items-center">
        {currentItems.map((item) => (
          <div
            key={item.title}
            className="relative cursor-pointer flex flex-col items-center"
            onClick={() => onImageClick?.(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="object-contain rounded-md w-full h-60"
            />
            <h3 className="mt-2 text-center font-semibold text-neutral-500">{item.title}</h3>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            ← Précédent
          </button>
          <span className="text-white">
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
