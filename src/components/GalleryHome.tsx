"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimationGallery from "./AnimationGalleryHome";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export interface GalleryItem {
  title: string;
  image: string;
  description: string;
  lien: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "3eme période",
    image: "/2021-20xx-3eme-periode/pierre-arnould-artist-3eme-periode-6.jpg",
    description: "La fusion conceptuelle...",
    lien: "/Troisieme-periode",
  },
  {
    title: "Tondos",
    image: "/1995-2020-Tondos/pierre-arnould-artist-tondo-9.jpg",
    description: "Une exploration circulaire...",
    lien: "/tondo",
  },
  {
    title: "Compartimentés",
    image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-2.JPG",
    description: "La structure du fragment...",
    lien: "/compartimentes",
  },
];

export default function GalleryHome() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [showArrow, setShowArrow] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 🔹 Escuchar el scroll global y ocultar la flecha cuando el usuario baja
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setShowArrow(false);
      else setShowArrow(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative my-16 px-6">
      {/* 🔹 Flecha dentro del contenedor */}
     <AnimatePresence>
  {showArrow && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="absolute -top-25 left-1/2 -translate-x-1/2 z-30" // centrada en la pantalla
    >
      <div className="flex items-center justify-center bg-white/80 text-black rounded-full p-2 shadow-md animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </div>
    </motion.div>
  )}
</AnimatePresence>





      {/* Galería */}
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
            <h3 className="mt-4 text-lg flex justify-center font-semibold">
              <Link
                href={item.lien}
                className="hover:underline text-black-600"
                onClick={(e) => e.stopPropagation()}
              >
                {item.title}
              </Link>
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Modal separado */}
      <AnimationGallery
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
