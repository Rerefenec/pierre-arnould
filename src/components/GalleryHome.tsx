"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    lien: "/troisieme-periode",
  },
  {
    title: "Tondos",
    image: "/1995-2020-Tondos/pierre-arnould-artiste-tondo-9.jpg",
    description: "Une exploration circulaire...",
    lien: "/tondos",
  },
  {
    title: "Compartimentés",
    image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-3.jpg",
    description: "La structure du fragment...",
    lien: "/compartimentes",
  },
];

export default function GalleryHome() {
  const [showArrow, setShowArrow] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY <= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToGallery = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={sectionRef} className="relative px-7 mb-10 lg:pt-13 xl:pt-13">
      {/* Flèche de défilement */}
      <AnimatePresence>
        {showArrow && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute -top-18 left-1/2 -translate-x-1/2 z-30"
          >
            <button
              onClick={scrollToGallery}
              className="flex items-center justify-center bg-white text-black rounded-full p-2 shadow-md animate-bounce hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Défiler vers la galerie"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Galerie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white items-center">
        {galleryItems.map((item) => {
          let orderClass = "";
          let colSpanClass = "md:col-span-1";

          if (item.title === "Tondos") {
            orderClass = "order-first";
            colSpanClass = "sm:col-span-2 md:col-span-4";
          } else {
            orderClass = "order-last";
            colSpanClass = "sm:col-span-1 md:col-span-2";
          }

          return (
            <Link
              key={item.title}
              href={item.lien}
              className={`cursor-pointer relative flex flex-col justify-center items-center ${orderClass} ${colSpanClass}`}
            >
              <motion.div layoutId={item.title} className="w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-contain rounded-xl w-full h-52 sm:h-48 md:h-80 lg:h-100 xl:h-120"
                />
                <h3 className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl flex justify-center font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
