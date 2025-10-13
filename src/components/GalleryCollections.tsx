import Image from "next/image";

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
  const filteredItems = items.filter(
    (item) =>
      (!selectedStyle || item.style === selectedStyle) &&
      item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {filteredItems.map((item) => (
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
  );
}
