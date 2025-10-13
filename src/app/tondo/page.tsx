
"use client";

import Header from "@/components/Header";

interface Work {
  title: string;
  image: string;
  year: string;
  description: string; // nouveau champ pour le texte sous l'image
}

const works: Work[] = [
  { title: "Compartimentés #1", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-1.JPG", year: "2024", description: "Description de l'œuvre #1" },
  { title: "Compartimentés #2", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-2.JPG", year: "2024", description: "Description de l'œuvre #2" },
  { title: "Compartimentés #3", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-3.JPG", year: "2024", description: "Description de l'œuvre #3" },
  { title: "Compartimentés #4", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-4.JPG", year: "2024", description: "Description de l'œuvre #4" },
  { title: "Compartimentés #5", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-5.JPG", year: "2024", description: "Description de l'œuvre #5" },
  { title: "Compartimentés #6", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-6.JPG", year: "2024", description: "Description de l'œuvre #6" },
  { title: "Compartimentés #7", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-7.JPG", year: "2024", description: "Description de l'œuvre #7" },
  { title: "Compartimentés #8", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-8.JPG", year: "2024", description: "Description de l'œuvre #8" },
  { title: "Compartimentés #9", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-9.JPG", year: "2024", description: "Description de l'œuvre #9" },
  { title: "Compartimentés #10", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-10.JPG", year: "2024", description: "Description de l'œuvre #10" },
  { title: "Compartimentés #11", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-11.JPG", year: "2024", description: "Description de l'œuvre #11" },
  { title: "Compartimentés #12", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-12.JPG", year: "2024", description: "Description de l'œuvre #12" },
  { title: "Compartimentés #13", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-13.JPG", year: "2024", description: "Description de l'œuvre #13" },
  { title: "Compartimentés #14", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-14.JPG", year: "2024", description: "Description de l'œuvre #14" },
  { title: "Compartimentés #15", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-15.JPG", year: "2024", description: "Description de l'œuvre #15" },
  { title: "Compartimentés #16", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-16.JPG", year: "2024", description: "Description de l'œuvre #16" },
  { title: "Compartimentés #17", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-17.JPG", year: "2024", description: "Description de l'œuvre #17" },
  { title: "Compartimentés #18", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-18.JPG", year: "2024", description: "Description de l'œuvre #18" },
  { title: "Compartimentés #19", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-19.JPG", year: "2024", description: "Description de l'œuvre #19" },
  { title: "Compartimentés #20", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-20.JPG", year: "2024", description: "Description de l'œuvre #20" },
  { title: "Compartimentés #21", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-21.JPG", year: "2024", description: "Description de l'œuvre #21" },
  { title: "Compartimentés #22", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-22.JPG", year: "2024", description: "Description de l'œuvre #22" },
  { title: "Compartimentés #23", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-23.JPG", year: "2024", description: "Description de l'œuvre #23" },
  { title: "Compartimentés #24", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-24.JPG", year: "2024", description: "Description de l'œuvre #24" },
  { title: "Compartimentés #25", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-25.JPG", year: "2024", description: "Description de l'œuvre #25" },
  { title: "Compartimentés #26", image: "/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-26.JPG", year: "2024", description: "Description de l'œuvre #26" },
];

export default function TondoPage() {
  return (
    <div>
    <Header />
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center px-6 md:px-0">Série : Tondos</h1>

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
            <p className="text-gray-500 text-sm text-center">{work.year}</p>
            <p className="text-gray-600 text-center mt-1">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
