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
    image: `/1969-1994-Compartimentes-mini/pierre-arnould-artist-compartimentes-${
      i + 1
    }.webp`,
    description: "..",
  })),
];

export default function CompartimentesPage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Hero />

        {/* 🔹 Fond global noir */}
        <div className="bg-black min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">
          {/* 🔹 Grille des œuvres */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out p-8"
              >
                {/*  Image centrée */}
                <div className="relative w-full aspect-square flex items-center justify-center bg-black rounded-md overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                   width={800}
    height={800}
                    className="object-contain p-2"
                  />
                </div>

                {/* Texte */}
                <div className="mt-4 w-full bg-white/10 backdrop-blur-sm border  rounded-xl shadow-lg p-2">
                  <h2 className="text-white mt-2 text-center font-semibold">
                    {work.title}
                  </h2>
                  <p className="text-gray-500 text-sm text-center">
                    {work.style}
                  </p>
                  <p className="text-gray-600 text-center mt-1">
                    {work.description}
                  </p>
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
