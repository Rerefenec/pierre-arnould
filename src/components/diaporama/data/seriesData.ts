// data/seriesData.ts
export interface Work {
  title: string;
  image: string;
  style: string;
  description: string;
  year: string;
}

export const seriesData: Record<string, Work[]> = {
  compartimentes: Array.from({ length: 9 }, (_, i) => ({
    title: `Compartimentés #${i + 1}`,
    image: `/1969-1994-Compartimentes/pierre-arnould-artist-compartimentes-${i + 1}.jpg`,
    style: "Compartimentés",
    description: "Description de l'œuvre (Compartimentés)",
    year: "2025",
  })),
  tondos: Array.from({ length: 41 }, (_, i) => ({
    title: `Tondos #${i + 1}`,
    image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-${i + 1}.jpg`,
    style: "Tondos",
    description: "Description de l'œuvre (Tondos)",
    year: "2025",
  })),
  "troisieme-periode": Array.from({ length: 17 }, (_, i) => ({
    title: `3eme période #${i + 1}`,
    image: `/2021-20xx-3eme-periode/pierre-arnould-artist-3eme-periode-${i + 1}.jpg`,
    style: "3eme période",
    description: "Description de l'œuvre (3eme période)",
    year: "2025",
  })),
};
