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
  
  tondos: [
    // 🎨 EXEMPLES DÉTAILLÉS (Cloisonnés 1 à 4)
    {
      title: "Paléo-Bolide",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-1.jpg`,
      style: "Tondos",
description:"Acrylique sur Bois 75x75 cm",
      year: "1986",
      lien: "tondos",
    },
    {
      title: "Phaistos Bis",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-5.jpg`,
      style: "Tondos",
description:"Acrylique sur Bois 60x60 cm",
      year: "1985",
      lien: "tondos",
    },
    {
      title: "Marsupialement Votre",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-6.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 65x65 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "La 27ème Arcane",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-7.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 69x69 cm",
      year: "1982",
      lien: "tondos",
    },
     {
      title: "Jubilé Beige",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-9.jpg`,
      style: "Tondos",
description:"Acrylique sur Bois 65x66 cm",
      year: "1985",
      lien: "tondos",
    },
     {
      title: "Pavois Zapotec",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-11.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 60x60 cm",
      year: "1980",
      lien: "tondos",
    },
    {
      title: "Mandala Vert",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-12.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 60x60 cm",
      year: "1980",
      lien: "tondos",
    },
    {
      title: "Tondo Rondo",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-13.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 60x60 cm",
      year: "1982",
      lien: "tondos",
    },
     {
      title: "Like Ciceron",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-15.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 61x61 cm",
      year: "1980",
      lien: "tondos",
    },
    {
      title: "Mandala Jaune Décalé",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-16.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 60x60 cm",
      year: "1980",
      lien: "tondos",
    },
     {
      title: "Rondache National",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-17.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 63x63 cm",
      year: "1980",
      lien: "tondos",
    },
    {
      title: "Corps céleste Psychopompe",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-19.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 80x80 cm",
      year: "1980",
      lien: "tondos",
    },
    {
      title: "Tombé des Nues",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-22.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 63x63 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Un dimanche à la Campagne",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-29.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 68x68 cm",
      year: "1982",
      lien: "tondos",
    },
     {
      title: "Tarmac Maya",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-30.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 75x75 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Trois Langues à Couper",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-31.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 71x71 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Entrée en Matière",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-32.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 60x60 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Concertino numéro 5",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-33.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 65x65 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Egide",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-34.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 65x65 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Didouilles",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-36.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 68x68 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Cosmic Ethnic",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-38.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 65x65 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Tip Top Marbré",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-39.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 60x60 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Objet Trouvé Triploïde",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-40.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 75x75 cm",
      year: "1982",
      lien: "tondos",
    },
    {
      title: "Sujet à Caution",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-42.jpg`,
      style: "Tondos",
      description:"Acrylique sur Bois 80x80 cm",
      year: "1982",
      lien: "tondos",
    },
    
  ...Array.from({ length: 57 }, (_, i) => ({
    title: `Tondos #${i + 1}`,
    image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-${i + 1}.jpg`,
    style: "Tondos",
    description: `[À personnaliser] Description de l'œuvre Tondos n°${i + 1}. Ces œuvres circulaires explorent les thèmes de l'orbite, du mouvement et de la connexion cosmique, typiques de cette période.`,
    year: "2025",
    lien: "tondos",
  })),
],

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