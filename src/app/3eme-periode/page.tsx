"use client";

import Header from "@/components/Header";

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
    description: "",
  })),
];

export default function TroisemePeriodePage() {
  return (
    <div className="bg-[url('/146.jpg')] bg-cover bg-center min-h-screen text-gray-900">
      {/* 🔹 Header */}
      <Header />

      {/* 🔹 Contenu principal */}
      <div className="flex flex-col items-center justify-center pt-32 md:p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black drop-shadow-lg">
          Série : 3ème période
        </h1>

        {/* 🔹 Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 justify-items-center">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-between text-center 
              bg-white/10 backdrop-blur-sm border border-white/20
              rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-sm"
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center p-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-3/4 h-auto object-contain rounded-md"
                />
              </div>

              {/* Texte */}
              <div className="pb-4 text-black">
                <h2 className="font-semibold text-lg">{work.title}</h2>
                <p className="text-sm opacity-90">{work.style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
