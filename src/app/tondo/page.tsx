
"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
interface Work {
  title: string;
  style: string;
  image: string;
  description: string; // nouveau champ pour le texte sous l'image
}

const works: Work[] = [
    ...Array.from({ length: 21 }, (_, i) => ({
    title: `Tondo ${i + 1}`,
    style: "Tondos",
    image: `/1995-2020-Tondos/pierre-arnould-artist-tondo-${i + 1}.jpg`,
    description: "..", 
  }))];


export default function TondoPage() {
  return (
    <div>
    <Hero />
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">

      {/* Grille responsive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        {works.map((work, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Image réduite de moitié */}
            <img
              src={work.image}
              alt={work.title}
              className="w-1/2 md:w-1/2 h-auto object-contain rounded-md"
            />

            {/* Texte sous l'image */}
            <h2 className="text-gray-800 mt-2 text-center font-semibold">{work.title}</h2>
            <p className="text-gray-500 text-sm text-center">{work.style}</p>
            <p className="text-gray-600 text-center mt-1">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
     <div className="relative p-1 bg-white z-1">
          <Footer />
        </div>
    </div>
  );
}
