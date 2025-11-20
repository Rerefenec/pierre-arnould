import { motion, AnimatePresence } from "framer-motion";
import { Work } from "./data/seriesData";

interface DiaporamaImageProps {
  currentWork: Work;
  isZoomed: boolean;
  onNext: () => void;
  onPrev: () => void;
  onExitFullscreen?: () => void; // 🔥 para cerrar
}

export function DiaporamaImage({
  currentWork,
  isZoomed,
  onNext,
  onPrev,
  onExitFullscreen,
}: DiaporamaImageProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full relative ${
        isZoomed ? "z-50" : "md:w-2/3 md:h-[80vh]"
      }`}
    >
      {/* === FULLSCREEN === */}
      {isZoomed && (
        <>
          {/* 🔥 Bouton fermer */}
          <button
            onClick={onExitFullscreen}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
            aria-label="Fermer"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 🔥 Flèche gauche */}
          <button
            onClick={onPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
            aria-label="Image précédente"
          >
            <svg
              className="w-8 h-8 text-white"
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

          {/* 🔥 Flèche droite */}
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
            aria-label="Image suivante"
          >
            <svg
              className="w-8 h-8 text-white"
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

          {/* Image */}
          <div className="flex items-center justify-center w-screen h-screen p-5">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentWork.title + "-zoomed"}
                src={currentWork.image}
                alt={currentWork.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="object-contain max-h-[90vh] max-w-[95vw]  shadow-lg select-none"
              />
            </AnimatePresence>
          </div>
        </>
      )}

      {/* === MODE NORMAL (desktop + mobile) — tu n'y changes rien === */}
      {!isZoomed && (
        <>
          {/* Desktop */}
          <div className="hidden md:flex w-full h-full items-center justify-between px-10">
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
                  className="object-contain h-full w-full shadow-lg select-none"
                />
              </AnimatePresence>
            </div>

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

          {/* Mobile */}
          <div className="flex sm:hidden flex-col items-center w-full mt-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentWork.title + "-mobile"}
                src={currentWork.image}
                alt={currentWork.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="object-contain h-[65vh] w-full shadow-lg select-none"
              />
            </AnimatePresence>

            <div className="flex w-full mt-6 gap-5 justify-center">
              <button
                onClick={onPrev}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={onNext}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
