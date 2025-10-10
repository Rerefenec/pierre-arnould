"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimationGallery from "./AnimationGallery";

export interface GalleryItem {
  title: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "3eme période",
    image: "/gallery5.jpg",
    description:
      "La fusion conceptuelle...",
  },
  {
    title: "Tondos",
    image: "/gallery4.jpg",
    description: "Une exploration circulaire...",
  },
  {
    title: "Compartimentés",
    image: "/gallery2.jpg",
    description: "La structure du fragment...",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section className="my-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-6 text-black">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.title}
            layoutId={item.title}
            onClick={() => setSelected(item)}
            className={`cursor-pointer relative ${
              index === 1
                ? "md:col-span-2 md:col-start-2"
                : "md:col-span-1 md:mt-20"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className={`object-contain rounded-xl w-full ${
                index === 1 ? "h-96 md:h-[30rem]" : "h-64 md:h-80"
              }`}
            />
            <h3 className="mt-2 text-lg font-semibold text-center">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Modal separado */}
      <AnimationGallery selected={selected} onClose={() => setSelected(null)} items={galleryItems} />
    </section>
  );
}
