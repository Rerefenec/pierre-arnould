import { Work } from "./data/seriesData";
import { useRouter } from "next/navigation";

interface DiaporamaDescriptionProps {
  work: Work;
  index: number;
  total: number;
  ouvres: string;
  isZoomed: boolean;
}

export function DiaporamaDescription({ work, index, total, ouvres, isZoomed }: DiaporamaDescriptionProps) {
  const router = useRouter();

  if (isZoomed) return null;

  return (
    <div className="w-full md:w-1/4 lg:w-1/3 xl:w-2/5 p-4 md:p-8 flex flex-col justify-between h-full">
      <div className="text-center mt-30 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-2">Série : {work.style}</h1>
        <p className="text-gray-400 text-lg mb-4">{work.title} ({index} / {total})</p>
        <p className="text-gray-300 italic mb-4">{work.description}</p>
        <p className="text-gray-500 text-sm">Année : {work.year}</p>
      </div>
      <div className="pt-4 border-t border-gray-700 w-full flex justify-center">
        <button
          onClick={() => router.push(`/${ouvres}`)}
          className="w-full md:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition text-center"
        >
          Retour à la galerie
        </button>
      </div>
    </div>
  );
}
