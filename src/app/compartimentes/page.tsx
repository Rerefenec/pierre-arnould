"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";

interface Work {
  title: string;
  style: string;
  image: string;
  description: string;
}

const works: Work[] = [
  ...Array.from({ length: 9 }, (_, i) => ({
    title: `Compartimentés ${i + 1}`,
    style: "Compartimentés",
    image: `/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-${
      i + 1
    }.jpg`,
    description: "..",
  })),
];

export default function CompartimentesPage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Hero />

        {/* 🔹 Fond global noir */}
        <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center md:p-10">
          {/* 🔹 Grille des œuvres */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-6 justify-items-center mt-10">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center
              bg-white/10 backdrop-blur-sm border border-white/20 
              rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02]
              transition-all duration-500 ease-in-out w-full max-w-sm p-8"
              >
                {/*  Image centrée */}
                <div className="flex items-center justify-center h-80">
                  <Image
                    src={work.image}
                    alt={work.title}
                    className="max-h-full max-w-full object-contain rounded-md transition-transform duration-500 hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>

                {/* Texte */}
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
      {/* Footer */}
      <Footer />
    </div>
  );
}

// bouh
