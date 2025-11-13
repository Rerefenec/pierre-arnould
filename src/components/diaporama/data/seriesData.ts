export interface Work {
  title: string;
  image: string;
  style: string;
  description: string;
  year: string;
  lien: string;
}

export const seriesData: Record<string, Work[]> = {

  compartimentes: Array.from({ length: 27 }, (_, i) => ({
    title: `Compartimentés #${i + 1}`,
    image: `/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-${
      i + 1
    }.jpg`,
    style: "Compartimentés",
    description: "Description de l'œuvre (Compartimentés)",
    year: "2025",
    lien: "compartimentes",
  })),

  tondos: Array.from({ length: 59 }, (_, i) => ({
    title: `Tondos #${i + 1}`,
    image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-${i + 1}.jpg`,
    style: "Tondos",
    description: "Description de l'œuvre (Tondos)",
    year: "2025",
    lien: "tondos",
  })),

  geometrique: Array.from({ length: 24 }, (_, i) => ({
    title: `Geometrique #${i + 1}`,
    image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-${
      i + 1
    }.jpg`,
    style: "geometrique",
    description: "Description de l'œuvre (Geometrique)",
    year: "2025",
    lien: "geometrique",
  })),

   baroque: Array.from({ length: 23 }, (_, i) => ({
    title: `Baroque #${i + 1}`,
    image: `/2021-2025-Baroque/pierre-arnould-artiste-baroque-${
      i + 1
    }.jpg`,
    style: "baroque",
    description: "Description de l'œuvre (Baroque)",
    year: "2025",
    lien: "baroque",
  })),

};
