export interface Work {
  title: string;
  image: string;
  style: string;
  description: string;
  year: string;
  lien: string;
}

export const seriesData: Record<string, Work[]> = {

  // =======================================================
  // CLOISONNÉS (1969-1994) : 27 œuvres
  // =======================================================
  cloisonnes: [
    // 🎨 EXEMPLES DÉTAILLÉS (Cloisonnés 1 à 4)
    {
      title: "La Jungle Mystique",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-1.jpg`,
      style: "Cloisonnés",
      description:"Relief pigmenté sur panneau, patine.",      year: "1980",
      lien: "cloisonnes",
    },
    {
      title: "L'Entrée du Labyrinthe",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-2.jpg`,
      style: "Cloisonnés",
      description:"Relief, résine/enduit, peintures métalliques sur bois.",
      year: "1982",
      lien: "cloisonnes",
    },
    {
      title: "Le Guerrier Géométrique",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-3.jpg`,
      style: "Cloisonnés",
description:"Technique mixte en relief, finition martelée.",      year: "1985",
      lien: "cloisonnes",
    },
    {
      title: "L'Archétype",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-4.jpg`,
      style: "Cloisonnés",
description:"Terre texturée, pigments et feuilles de métal.",      year: "1986",
      lien: "cloisonnes",
    },
    // 📌 À COMPLÉTER (Cloisonnés 5 à 27)
    ...Array.from({ length: 23 }, (_, i) => ({
      title: `Cloisonné #${i + 5}`, // Commence à 5
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-${i + 5}.jpg`,
      style: "Cloisonnés",
      description: `[À personnaliser] Description unique pour le Cloisonné n°${i + 5}.`,
      year: `${1987 + i}`, // Année progressive à titre indicatif
      lien: "cloisonnes",
    })),
  ],

  // =======================================================
  // TONDOS (1995-2020) : 57 œuvres
  // =======================================================
  tondos: Array.from({ length: 57 }, (_, i) => ({
    title: `Tondos #${i + 1}`,
    image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-${i + 1}.jpg`,
    style: "Tondos",
    description: `[À personnaliser] Description de l'œuvre Tondos n°${i + 1}. Ces œuvres circulaires explorent les thèmes de l'orbite, du mouvement et de la connexion cosmique, typiques de cette période.`,
    year: "2025",
    lien: "tondos",
  })),

  // =======================================================
  // BAROQUES (2021-2025) : 23 œuvres
  // =======================================================
  baroques: Array.from({ length: 23 }, (_, i) => ({
    title: `Baroques #${i + 1}`,
    image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-${i + 1}.jpg`,
    style: "baroques",
    description: `[À personnaliser] Description de l'œuvre Baroque n°${i + 1}. Caractérisé par un style opulent et des formes exubérantes qui rappellent l'esthétique baroque, tout en conservant une abstraction moderne.`,
    year: "2025",
    lien: "baroques",
  })),

  // =======================================================
  // GÉOMÉTRIQUES (2021-2025) : 24 œuvres
  // =======================================================
  geometrique: Array.from({ length: 24 }, (_, i) => ({
    title: `Geometrique #${i + 1}`,
    image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-${i + 1}.jpg`,
    style: "geometrique",
    description: `[À personnaliser] Description de l'œuvre Géométrique n°${i + 1}. Une série mettant l'accent sur la structure, les lignes pures et l'interaction des couleurs dans des compositions rigoureuses.`,
    year: "2025",
    lien: "geometrique",
  })),

};