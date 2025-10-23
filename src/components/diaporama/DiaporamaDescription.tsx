import { Work } from "./data/seriesData";
import { useRouter } from "next/navigation";

interface DiaporamaDescriptionProps {
  work: Work;
  index: number;
  total: number;
  ouvres: string;
  isZoomed: boolean;
}
export function DiaporamaDescription({
  work,
  index,
  total,
  ouvres,
  isZoomed,
}: DiaporamaDescriptionProps) {
  const router = useRouter();

  if (isZoomed) return null;

  return (
    <div
      className="
        w-full 
        flex flex-col 
        items-center 
        md:w-1/4 lg:w-1/3 xl:w-2/5 
        md:p-8 
        text-center
        md:gap-8
        md:justify-center
        md:min-h-screen
      "
    >
      {/* === Texte descriptif === */}
      <div className="overflow-y-auto">
        <p className="text-gray-400 text-lg mb-3 mt-2">
          {work.title} ({index} / {total})
        </p>
        <p className="text-gray-300 italic mb-3">{work.description}</p>
        <p className="text-gray-500 text-sm mb-1">Année : {work.year}</p>
      </div>

      {/* === Bouton retour === */}
      <div className="border-t mt-10 border-gray-700 w-full pt-4 flex justify-center">
        <button
          onClick={() => router.push(`/${ouvres}`)}
          className="
            hidden md:inline-block   /* 🔹 caché sur mobile, visible md+ */
            w-full 
            md:w-auto 
            px-6 py-3 
            bg-white/10 
            hover:bg-white/20 
            text-white 
            rounded-lg 
            transition 
            text-center
          "
        >
          Retour à la galerie
        </button>
      </div>
    </div>
  );
}
