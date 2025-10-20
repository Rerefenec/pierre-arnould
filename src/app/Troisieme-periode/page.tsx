"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

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
    image: `/2021-20xx-3eme-periode-mini/pierre-arnould-artist-3eme-periode-${i + 1}.webp`,
    description: "..",
  })),
];

export default function TroisiemePeriodePage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Hero />

        <div className="bg-black min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">
          {/* Grille responsive */}
          <div className="mt-30 grid grid-cols-1 md:grid-cols-3 gap-40 px-4 md:px-0">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-start text-center rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out p-4"
              >
                {/* Conteneur de l'image pour le centrage */}
                <div className="flex items-center justify-center w-full h-[400px]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    className="object-contain rounded-md"
                    width={250}
                    height={400}
                  />
                </div>

                {/* Texte */}
                <div className=" w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-2">
                  <h2 className="text-white mt-2 text-center font-semibold">
                    {work.title}
                  </h2>
                  <p className="text-gray-500 text-sm text-center">{work.style}</p>
                  <p className="text-gray-600 text-center mt-1">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
