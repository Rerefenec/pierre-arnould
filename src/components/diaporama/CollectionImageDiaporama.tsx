import { motion, AnimatePresence } from "framer-motion";
import { Work } from "./data/seriesData";

// L'interface n'inclut plus onNext et onPrev
interface CollectionDiaporamaImageProps {
  currentWork: Work;
  isZoomed: boolean;
  onExitFullscreen?: () => void;
}

export function CollectionImageDiaporama({
  currentWork,
  isZoomed,
  onExitFullscreen,
}: CollectionDiaporamaImageProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full relative ${
        isZoomed ? "z-50" : "md:w-2/3 md:h-[80vh]"
      }`}
    >
      {/* Fullscreen (Mode Zoomé) */}
      {isZoomed && (
        <>
          {/* Bouton Fermer (reste) */}
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
              />{" "}
            </svg>
          </button>
          {/* Les flèches gauche et droite ont été retirées ici */}
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
                className="object-contain max-h-[90vh] max-w-[95vw]  shadow-lg select-none"
              />
            </AnimatePresence>
          </div>
        </>
      )}
        {/* MODE NORMAL (desktop + mobile)  */}
      {!isZoomed && (
        <>
          {/* Desktop */}
          <div className="hidden md:flex w-full h-full items-center justify-between px-10">
            {/* La flèche gauche est retirée ici */}
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
            {/* La flèche droite est retirée ici */}
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
              {/* Les flèches gauche et droite sont retirées ici */}           {" "}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
