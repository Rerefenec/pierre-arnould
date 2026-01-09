import Image from "next/image";

type GalleryItem = {
  title: string;
  image: string;
  serie: string;
  index: number; 
  lien: string;
};

interface GalleryCollectionsProps {
  items: GalleryItem[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  onImageClick?: (item: GalleryItem) => void;
}

export default function GalleryCollections({
  items,
  currentPage,
  setCurrentPage,
  onImageClick,
}: GalleryCollectionsProps) {
  const itemsPerPage = 6;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goPrev = () =>
    setCurrentPage(Math.max(currentPage - 1, 1));
  const goNext = () =>
    setCurrentPage(Math.min(currentPage + 1, totalPages));

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 justify-items-center">
        {currentItems.map((item) => (
          <div
            key={item.title}
            className="cursor-pointer flex flex-col items-center"
            onClick={() => onImageClick?.(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="object-contain rounded-md w-full h-60"
            />
            <h3 className="mt-2 text-center font-semibold text-neutral-500">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button onClick={goPrev} disabled={currentPage === 1}>
            ← Précédent
          </button>
          <span className="text-white">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
          >
            Suivant →
          </button>
        </div>
      )}
    </div>
  );
}
