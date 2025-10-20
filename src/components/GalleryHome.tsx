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
    image: "/1995-2020-Tondos/pierre-arnould-artiste-tondo-9.jpg",
    description: "Une exploration circulaire...",
    lien: "/tondo",
  },
  {
    title: "Compartimentés",
    image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-3.jpg",
    description: "La structure du fragment...",
    lien: "/compartimentes",
  },
];

export default function GalleryHome() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [showArrow, setShowArrow] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 🔹 Écouter le scroll global et masquer la flèche quand l'utilisateur descend
  useEffect(() => {
    const handleScroll = () => {
      // Masquer la flèche dès que l'utilisateur scroll un peu (10px)
      if (window.scrollY > 10) setShowArrow(false);
      else setShowArrow(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative px-7 mb-10 lg:pt-13 xl:pt-13" 
    >
      {/* 🔹 Flèche de défilement vers le bas */}
      <AnimatePresence>
        {showArrow && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute -top-18 left-1/2 -translate-x-1/2 z-30" 
          >
            <div className="flex items-center justify-center bg-white text-black rounded-full p-2 shadow-md animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Galérie des périodes (maintenant sous la ligne de flottaison sur grands écrans) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white items-center">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.title}
            layoutId={item.title}
            onClick={() => setSelected(item)}
            className={`cursor-pointer relative flex flex-col justify-center items-center ${
              index === 1
                ? "md:col-span-2" // milieu occupe 2 colonnes
                : "md:col-span-1"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className={`object-contain rounded-xl w-full 
              h-[13rem] sm:h-[12rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem]`}
            />
            <h3 className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl flex justify-center font-semibold">
              <Link
                href={item.lien}
                className="hover:underline text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {item.title}
              </Link>
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Modal séparé */}
      <AnimationGallery
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}