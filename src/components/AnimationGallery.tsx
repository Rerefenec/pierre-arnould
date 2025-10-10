"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import  { GalleryItem } from "./Gallery"; // importe uniquement le type/interface Gallery

interface GalleryModalProps {
  selected: GalleryItem | null;
  onClose: () => void;
  items: GalleryItem[];
}

export default function AnimationGallery({ selected, onClose, items }: GalleryModalProps) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId={selected.title}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl mx-4 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              {selected.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.map((item) => (
                <motion.div
                  key={item.title}
                  className="cursor-pointer"
                  layoutId={`modal-${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="object-cover rounded-xl w-full h-64"
                  />
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
