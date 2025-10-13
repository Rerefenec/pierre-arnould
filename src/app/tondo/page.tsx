
"use client";

import Header from "@/components/Header";

interface Work {
  title: string;
  image: string;
  year: string;
  description: string; // nouveau champ pour le texte sous l'image
}

const works: Work[] = [
  { title: "Tondo #1", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (1).jpg", year: "2024", description: "Description de l'œuvre #1" },
  { title: "Tondo #2", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (2).jpg", year: "2024", description: "Description de l'œuvre #2" },
  { title: "Tondo #3", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (3).jpg", year: "2024", description: "Description de l'œuvre #3" },
  { title: "Tondo #4", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (4).jpg", year: "2024", description: "Description de l'œuvre #4" },
  { title: "Tondo #5", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (5).jpg", year: "2024", description: "Description de l'œuvre #5" },
  { title: "Tondo #6", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (6).jpg", year: "2024", description: "Description de l'œuvre #6" },
  { title: "Tondo #7", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (7).jpg", year: "2024", description: "Description de l'œuvre #7" },
  { title: "Tondo #8", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (8).jpg", year: "2024", description: "Description de l'œuvre #8" },
  { title: "Tondo #9", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (9).jpg", year: "2024", description: "Description de l'œuvre #9" },
  { title: "Tondo #10", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (10).jpg", year: "2024", description: "Description de l'œuvre #1" },
  
  { title: "Tondo #11", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (11).jpg", year: "2024", description: "Description de l'œuvre #2" },
  { title: "Tondo #12", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (12).jpg", year: "2024", description: "Description de l'œuvre #3" },
  { title: "Tondo #13", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (13).jpg", year: "2024", description: "Description de l'œuvre #4" },
  { title: "Tondo #14", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (14).jpg", year: "2024", description: "Description de l'œuvre #5" },
  { title: "Tondo #15", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (15).jpg", year: "2024", description: "Description de l'œuvre #6" },
  { title: "Tondo #16", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (16).jpg", year: "2024", description: "Description de l'œuvre #7" },
  { title: "Tondo #17", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (17).jpg", year: "2024", description: "Description de l'œuvre #8" },
  { title: "Tondo #18", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (18).jpg", year: "2024", description: "Description de l'œuvre #9" },
{ title: "Tondo #19", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (19).jpg", year: "2024", description: "Description de l'œuvre #1" },
{ title: "Tondo #20", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (20).jpg", year: "2024", description: "Description de l'œuvre #2" },
{ title: "Tondo #21", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (21).jpg", year: "2024", description: "Description de l'œuvre #3" },
{ title: "Tondo #22", image: "/1995-2020 Tondos/pierre-arnould-artist-tondo (22).jpg", year: "2024", description: "Description de l'œuvre #4" },


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
