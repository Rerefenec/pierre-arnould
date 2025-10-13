
"use client";

interface Work {
  title: string;
  image: string;
  year: string;
  description: string; // nouveau champ pour le texte sous l'image
}

const works: Work[] = [
  { title: "Compartimentés #1", image: "/compartimentes/pierre-arnould-artist-002.JPG", year: "2024", description: "Description de l'œuvre #1" },
  { title: "Compartimentés #2", image: "/compartimentes/pierre-arnould-artist-003.JPG", year: "2024", description: "Description de l'œuvre #2" },
  { title: "Compartimentés #3", image: "/compartimentes/pierre-arnould-artist-004.JPG", year: "2024", description: "Description de l'œuvre #3" },
  { title: "Compartimentés #4", image: "/compartimentes/pierre-arnould-artist-010.JPG", year: "2024", description: "Description de l'œuvre #4" },
  { title: "Compartimentés #5", image: "/compartimentes/pierre-arnould-artist-012.JPG", year: "2024", description: "Description de l'œuvre #5" },
  { title: "Compartimentés #6", image: "/compartimentes/pierre-arnould-artist-016.JPG", year: "2024", description: "Description de l'œuvre #6" },
  { title: "Compartimentés #7", image: "/compartimentes/pierre-arnould-artist-020.JPG", year: "2024", description: "Description de l'œuvre #7" },
  { title: "Compartimentés #8", image: "/compartimentes/pierre-arnould-artist-005.JPG", year: "2024", description: "Description de l'œuvre #8" },
  { title: "Compartimentés #9", image: "/compartimentes/pierre-arnould-artist-007.JPG", year: "2024", description: "Description de l'œuvre #9" },
];

export default function TondoPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center justify-center md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center px-6 md:px-0">Série : Compartimentés</h1>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        {works.map((work, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Image réduite de moitié */}
            <img
              src={work.image}
              alt={work.title}
              className="w-1/2 md:w-1/2 h-auto object-contain rounded-md shadow-md"
            />

            {/* Texte sous l'image */}
            <h2 className="text-gray-800 mt-2 text-center font-semibold">{work.title}</h2>
            <p className="text-gray-500 text-sm text-center">{work.year}</p>
            <p className="text-gray-600 text-center mt-1">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
