// AnimationGallery.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GalleryItem } from "./Gallery";

interface GalleryModalProps {
  selected: GalleryItem | null;
  onClose: () => void;
}

export default function AnimationGallery({ selected, onClose }: GalleryModalProps) {
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
            className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl mx-4 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">{selected.title}</h2>

            <div className="flex justify-center">
              <motion.div key={selected.title} className="cursor-pointer">
                <Image
                  src={selected.image} // <-- imagen dinámica
                  alt={selected.title}
                  width={400}
                  height={400}
                  className="object-cover rounded-xl w-auto h-80"
                />
                <p className="text-gray-600 text-sm mt-2">
                  {selected.description} {/* <-- descripción dinámica */}
                </p>
              </motion.div>
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
