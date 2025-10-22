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
      className={`relative flex flex-col items-center justify-center w-full ${
        isZoomed ? "flex-1" : "md:w-2/3"
      }`}
    >
      {/* IMAGE */}
      <div className="flex items-center justify-center w-full h-[60vh] sm:h-[65vh] md:h-[80vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentWork.title + (isZoomed ? "-zoom" : "")}
            src={currentWork.image}
            alt={currentWork.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="object-contain max-w-full max-h-full"
          />
        </AnimatePresence>
      </div>

      {/* === Flèches === */}
      {!isZoomed && (
        <>
          {/* === Desktop : flèches latérales === */}
          <div className="hidden md:flex">
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-20"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-20"
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

          {/* === Tablettes & téléphones : flèches en bas === */}
          <div className="md:hidden w-full flex justify-center gap-8 py-4 mt-2 bg-black/40">
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
        </>
      )}
    </div>
  );
}
