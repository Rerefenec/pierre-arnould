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
    image: `/2021-20xx-3eme-periode-mini/pierre-arnould-artist-3eme-periode-${ i + 1}.webp`,
    description: "..",
  })),
];

export default function TroisiemePeriodePage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Hero />

        <div className="bg-black text-gray-900 flex flex-col items-center justify-center md:p-10">
          {/* Grille responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-6 justify-items-center mt-10">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center text-center
              bg-white/10 backdrop-blur-sm border border-white/20 
              rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] 
              transition-all duration-500 ease-in-out w-full max-w-sm p-8"
              >
                {/* Imagen centrada vertical y horizontalmente */}
                <div className="flex items-center justify-center h-80">
                  <Image
                    src={work.image}
                    alt={work.title}
                    className="max-h-full max-w-full object-contain rounded-md transition-transform duration-500 hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>

                {/* Texto */}
                <div className="mt-6 text-white">
                  <h2 className="font-semibold text-lg">{work.title}</h2>
                  <p className="text-sm opacity-90">{work.style}</p>
                  <p className="text-sm mt-1 opacity-80">{work.description}</p>
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
