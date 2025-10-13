"use client";

import Link from "next/link";
interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
}

const works: Work[] = [
  ...Array.from({ length: 17 }, (_, i) => ({
    title: `3eme période ${i + 1}`,
    style: "3eme période",
    image: `/2021-20xx-3eme-periode/pierre-arnould-artist-3eme-periode-${i + 1}.jpg`,
    description: "", // Ajoutez une description appropriée ici si nécessaire
  })),
];

export default function TroisemePeriodePage() {
  return (
    <div className="bg-[url('/bg.jpg')] min-h-screen text-gray-900">

      <header className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 bg-[url('/bg.jpg')] text-black border-b border-black shadow-md">
        <div className="text-2xl font-bold">Pierre Arnould</div>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/A propos">À propos</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center px-6 md:px-0 text-white">
          Série : Compartimentés
        </h1>

        {/* Grille responsive centrée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 justify-items-center">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-between text-center bg-yellow-400 rounded-md w-full max-w-sm"
            >
              {/* Image centrée verticalement */}
              <div className="flex-1 flex items-center justify-center p-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-3/4 h-auto object-contain rounded-md"
                />
              </div>

              {/* Bloc texte en bas */}
              <div className="pb-4">
                <h2 className="text-black font-semibold">{work.title}</h2>
                <p className="text-black text-sm">{work.style}</p>
                <p className="text-black text-sm mt-1">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
