import { motion, AnimatePresence } from "framer-motion";
import { Work } from "./data/seriesData";

interface DiaporamaImageProps {
  currentWork: Work;
  isZoomed: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export function DiaporamaImage({
  currentWork,
  isZoomed,
  onNext,
  onPrev,
}: DiaporamaImageProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full ${
        isZoomed ? "flex-1" : "md:w-2/3 md:h-[80vh]"
      }`}
    >
      {/* === Desktop : flex 3 colonnes === */}
      {!isZoomed && (
        <div className="hidden md:flex w-full h-full items-center justify-between px-10">
          {/* Flèche gauche */}
          <button
            onClick={onPrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition self-center"
            aria-label="Image précédente"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

         {/* Image centrale */}
          <div className="flex-1 flex justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentWork.title + "-desktop"}
                src={currentWork.image}
                alt={currentWork.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="object-contain h-full max-h-full **w-full max-w-full** rounded-xl shadow-lg"
              />
            </AnimatePresence>
          </div>

          {/* Flèche droite */}
          <button
            onClick={onNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition self-center"
            aria-label="Image suivante"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* === Mobile : flèches en bas === */}
      {isZoomed || (
        <div className="md:hidden flex flex-col items-center h-full pt-5">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentWork.title + "-mobile"}
              src={currentWork.image}
              alt={currentWork.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="object-contain h-[60vh] w-full rounded-xl shadow-lg"
            />
          </AnimatePresence>

          <div className="flex w-full mt-2 gap-5 justify-center">
            <button
              onClick={onPrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Image précédente"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={onNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Image suivante"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
