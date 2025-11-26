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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: work.title,
        text: `Découvrez l'œuvre : ${work.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié !");
    }
  };

  return (
    <>
      {/*  Version Desktop/Tablette (sm+)  */}
      <div className="rounded-sm hidden sm:flex w-full flex-col items-center md:w-1/4 lg:w-1/3 xl:w-2/5 md:p-8 text-center md:gap-8 md:justify-center md:min-h-screen">
        <div className="overflow-y-auto">
          <p className="text-gray-400 text-lg mb-3 mt-2">
            {work.title} ({index} / {total})
          </p>
          <p className="text-gray-300 italic mb-3">{work.description}</p>
          <p className="text-gray-500 text-sm mb-1">Année : {work.year}</p>
        </div>
      </div>
    </>
  );
}