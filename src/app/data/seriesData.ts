export interface Work {
  title: string;
  image: string;
  
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
      title: " Jungle Mystique",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-1.jpg`,
      
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "cloisonnes",
    },
    {
      title: "Entrée du Labyrinthe",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-2.jpg`,
      
      description: "Relief, résine/enduit, peintures métalliques sur bois 60x80 cm",
      year: "1982",
      lien: "cloisonnes",
    },
    {
      title: "Guerrier Géométrique",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-3.jpg`,
      
      description: "Technique mixte en relief, finition martelée 50x75 cm",
      year: "1985",
      lien: "cloisonnes",
    },
    {
      title: "L'Archétype",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-4.jpg`,
      
      description: "Terre texturée, pigments et feuilles de métal",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "L'Éclatement Central",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-5.jpg`,
      
      description: "Technique mixte sur panneau 80x60 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Le Dédale Tribal",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-6.jpg`,
      
      description: "Pigments or et bleu nuit sur bois 90x65 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Formes de la Métamorphose",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-7.jpg`,
      
      description: "Relief pigmenté sur panneau 50x75 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Machine de Rêve Ocre",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-8.jpg`,
      
      description: "Pigments et feuilles de métal sur bois 45x45 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Profil du Guerrier Féminin",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-9.jpg`,
      
      description: "Relief cloisonné sur panneau 41x54 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Égérie Géométrique",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-10.jpg`,
      
      description: "Relief pigmenté sur panneau 41x54 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Jungle Cellulaire",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-11.jpg`,
      
      description: "Patine et reliefs sur bois 50x75 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Mosaïque Fractale Brune",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-12.jpg`,
      
      description: "Reliefs cloisonnés sur panneau 50x75 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Gardien Solaire",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-13.jpg`,
      
      description: "Technique mixte sur panneau 30x3 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Éruption Flora-Mécanique",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-14.jpg`,
      
      description: "Relief pigmenté et métal sur panneau 80x60 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Vol de l'Insecte Mécanique",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-15.jpg`,
      
      description: "Relief cloisonné sur panneau 40x65 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Reggane",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-16.jpg`,
      
      description: "Technique de mosaïque en relief sur panneau 50x75 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Tunnel de Lumière Dorée",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-17.jpg`,
      
      description: "Reliefs pigmentés et laqués 45x75 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Grande Cérémonie",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-18.jpg`,
      
      description: "Reliefs pigmentés sur panneau 40x65 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Coupe de Mitochondrie Bleue",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-19.jpg`,
      
      description: "Reliefs cloisonnés sur panneau 35x50 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Duel Solaire",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-20.jpg`,
      
      description: "Terre texturée, pigments et feuilles de métal 60x100 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Structure Subatomique Jaune",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-21.jpg`,
      
      description: "Reliefs laqués sur panneau 30x55 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Fragmentarium Végétal",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-22.jpg`,
      
      description: "Reliefs patinés sur panneau 90x180 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Trois Niveaux du Temps",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-23.jpg`,
      
      description: "Reliefs pigmentés sur panneau 45x90 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Urgence Rouge (The Red Emergency)",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-24.jpg`,
      
      description: "Reliefs pigmentés et encadrés 85x60 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Spectre du Totem",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-25.jpg`,
      
      description: "Reliefs et paillettes sur fond noir 40x80 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Essence de l'Oiseau-Soleil",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-26.jpg`,
      
      description: "Reliefs laqués sur panneau 110x30 cm",
      year: "1986",
      lien: "cloisonnes",
    },
    {
      title: "Harmonie des Bulles (d'aprés le baiser de Klimt)",
      image: `/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-27.jpg`,
      
      description: "Pigments et patine bronze sur panneau 80x30 cm.",
      year: "1986",
      lien: "cloisonnes",
    },
  ],

  // =======================================================
  // TONDOS (1995-2020) : 56 œuvres
  // =======================================================

  tondos: [
    // 🎨 EXEMPLES DÉTAILLÉS (Cloisonnés 1 à 4)
    {
      title: "Paléo-Bolide",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-1.jpg`,
      
      description: "technique mixte Ø 90 cm",
      year: "2003",
      lien: "tondos",
    },
    {
      title: "Engrenage Galactique",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-2.jpg`,
      
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "tondos",
    },
    {
      title: "Planisphère Végétal",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-3.jpg`,
      
      description: "technique mixte Ø 110 cm",
      year: "2002",
      lien: "tondos",
    },
    {
      title: "Disque de Poussière Ocre",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-4.jpg`,
      
      description: "technique mixte Ø 100 cm",
      year: "2002",
      lien: "tondos",
    },
    {
      title: "Phaistos Bis",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-5.jpg`,
      
      description: "technique mixte Ø 60 cm",
      year: "1992",
      lien: "tondos",
    },
    {
      title: "Marsupialement Votre",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-6.jpg`,
      
      description: "technique mixte Ø 65 cm",
      year: "1995",
      lien: "tondos",
    },
    {
      title: "La 27ème Arcane",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-7.jpg`,
      
      description: "technique mixte Ø 69 cm",
      year: "1994",
      lien: "tondos",
    },
    {
      title: "Roue Cosmique",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-8.jpg`,
      
      description: "technique mixte Ø 60 cm",
      year: "1996",
      lien: "tondos",
    },
    {
      title: "Jubilé Beige",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-9.jpg`,
      
      description: "technique mixte Ø 65 cm",
      year: "1998",
      lien: "tondos",
    },
    {
      title: "Profil d'Élémental",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-10.jpg`,
      
      description: "technique mixte Ø 65 cm",
      year: "1988",
      lien: "tondos",
    },
    {
      title: "Pavois Zapotec",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-11.jpg`,
      
      description: "technique mixte Ø 60 cm",
      year: "1990",
      lien: "tondos",
    },
    {
      title: "Mandala Vert",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-12.jpg`,
      
      description: "technique mixte Ø 60 cm",
      year: "1991",
      lien: "tondos",
    },
    {
      title: "Tondo Rondo",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-13.jpg`,
      
      description: "technique mixte Ø 60 cm",
      year: "1990",
      lien: "tondos",
    },
    {
      title: "Cadran Solaire Maya",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-14.jpg`,
      
      description: "technique mixte Ø 80 cm",
      year: "1986",
      lien: "tondos",
    },
    {
      title: "Like Ciceron",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-15.jpg`,
      
      description: "technique mixte Ø 61 cm",
      year: "1991",
      lien: "tondos",
    },
    {
      title: "Mandala Jaune Décalé",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-16.jpg`,
     
      description: "technique mixte Ø 65 cm",
      year: "1994",
      lien: "tondos",
    },
    {
      title: "Rondache National",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-17.jpg`,
      
      description: "technique mixte Ø 63 cm",
      year: "1995",
      lien: "tondos",
    },
    {
      title: "UFO Vert Acide",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-18.jpg`,
      
      description: "technique mixte Ø 63 cm",
      year: "1986",
      lien: "tondos",
    },
    {
      title: "Corps céleste Psychopompe",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-19.jpg`,
      
      description: "technique mixte Ø 80 cm",
      year: "1989",
      lien: "tondos",
    },
    {
      title: "Symbiose du Plongeur",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-20.jpg`,
      
      description: "technique mixte 63x72 cm",
      year: "1992",
      lien: "tondos",
    },
    {
      title: "Triple Fusion Cellulaire",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-21.jpg`,
      
      description: "technique mixte Ø 110 cm",
      year: "1989",
      lien: "tondos",
    },
    {
      title: "Tombé des Nues",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-22.jpg`,
      
      description: "technique mixte Ø 63 cm",
      year: "1984",
      lien: "tondos",
    },
    {
      title: "Rapport d'Autopsie Céleste",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-23.jpg`,
      
      description: "technique mixte Ø 110 cm",
      year: "2000",
      lien: "tondos",
    },
    {
      title: "Électro-Encéphalogramme",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-24.jpg`,
      
      description: "technique mixte Ø 85 cm",
      year: "1984",
      lien: "tondos",
    },
    {
      title: "Anatomie de l'Orange Mécanique",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-25.jpg`,
      
      description: "technique mixte Ø 90 cm",
      year: "1981",
      lien: "tondos",
    },
    {
      title: "Horloge de la Mitose",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-26.jpg`,
      
      description: "technique mixte Ø 70 cm",
      year: "1996",
      lien: "tondos",
    },
    {
      title: "Mandala Anesthésique",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-27.jpg`,
      
      description: "technique mixte Ø 60 cm",
      year: "1988",
      lien: "tondos",
    },
    {
      title: "Stroboscodisc",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-28.jpg`,
      
      description: "technique mixte Ø 70 cm",
      year: "1989",
      lien: "tondos",
    },
    {
      title: "Un dimanche à la Campagne",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-29.jpg`,
      
      description: "technique mixte Ø 68 cm",
      year: "1999",
      lien: "tondos",
    },
    {
      title: "Tarmac Maya",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-30.jpg`,
      
      description: "technique mixte Ø 75 cm",
      year: "1986",
      lien: "tondos",
    },
    {
      title: "Trois Langues à Couper",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-31.jpg`,
      
      description: "technique mixte Ø 71 cm",
      year: "1993",
      lien: "tondos",
    },
    {
      title: "Entrée en Matière",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-32.jpg`,
     
      description: "technique mixte Ø 60 cm",
      year: "1994",
      lien: "tondos",
    },
    {
      title: "Concertino numéro 5",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-33.jpg`,
    
      description: "technique mixte Ø 65 cm",
      year: "1994",
      lien: "tondos",
    },
    {
      title: "Egide",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-34.jpg`,
      
      description: "technique mixte Ø 65 cm",
      year: "1991",
      lien: "tondos",
    },
    {
      title: "Empreinte sur Lune Sombre",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-35.jpg`,
      
      description: "technique mixte Ø 40 cm",
      year: "1979",
      lien: "tondos",
    },
    {
      title: "Didouilles",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-36.jpg`,
     
      description: "technique mixte Ø 68 cm",
      year: "1991",
      lien: "tondos",
    },
    {
      title: "Orbites et Signes Perdus",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-37.jpg`,
      
      description: "technique mixte Ø 90 cm",
      year: "1986",
      lien: "tondos",
    },
    {
      title: "Cosmic Ethnic",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-38.jpg`,
      
      description: "technique mixte Ø 65 cm",
      year: "1988",
      lien: "tondos",
    },
    {
      title: "Tip Top Marbré",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-39.jpg`,
      
      description: "technique mixte Ø 65 cm",
      year: "1990",
      lien: "tondos",
    },
    {
      title: "Objet Trouvé Triploïde",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-40.jpg`,
      
      description: "technique mixte Ø 90 cm",
      year: "2000",
      lien: "tondos",
    },
    {
      title: "Circuits Végétaux de l'ADN",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-41.jpg`,
      
      description: "technique mixte Ø 45 cm",
      year: "2001",
      lien: "tondos",
    },
    {
      title: "Sujet à Caution",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-42.jpg`,
      
      description: "technique mixte Ø 90 cm",
      year: "2002",
      lien: "tondos",
    },
    {
      title: "Écran de Surveillance Virale",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-43.jpg`,
      
      description: "technique mixte Ø 60 cm",
      year: "1999",
      lien: "tondos",
    },
    {
      title: "Quadrant des Mouvements Premiers",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-44.jpg`,
      
      description: "technique mixte Ø 50 cm",
      year: "1995",
      lien: "tondos",
    },
    {
      title: "Triade Hyperboréenne",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-45.jpg`,
      
      description: "technique mixte Ø 110 cm",
      year: "1997",
      lien: "tondos",
    },
    {
      title: "Lune Noire et Crépuscule Tribal",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-46.jpg`,
      
      description: "technique mixte Ø 100 cm",
      year: "1990",
      lien: "tondos",
    },
    {
      title: "Bouclier Cardiaque",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-47.jpg`,
      
      description: "technique mixte Ø 40x40 cm",
      year: "2025",
      lien: "tondos",
    },
    {
      title: "Labyrinthe Toxique",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-48.jpg`,
      
      description: "technique mixte Ø 45 cm",
      year: "1997",
      lien: "tondos",
    },
    {
      title: "Aura des Organes Doubles",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-49.jpg`,
   
      description: "technique mixte Ø 75 cm",
      year: "1991",
      lien: "tondos",
    },
    {
      title: "Archétype de la Roue à Énergie",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-50.jpg`,
      
      description: "technique mixte Ø 110 cm",
      year: "1994",
      lien: "tondos",
    },
    {
      title: "Micro-Chirurgie Flottante",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-51.jpg`,
      
      description: "technique mixte Ø 55 cm",
      year: "2004",
      lien: "tondos",
    },
    {
      title: "Vestiges d'une Cité Sous-Marine",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-52.jpg`,
     
      description: "technique mixte Ø 80 cm",
      year: "2000",
      lien: "tondos",
    },
    {
      title: "Garde du Corps Céleste",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-53.jpg`,
     
      description: "technique mixte Ø 85 cm",
      year: "1998",
      lien: "tondos",
    },
    {
      title: "Talisman de la Double Hélice",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-54.jpg`,
     
      description: "technique mixte Ø 55 cm",
      year: "2014",
      lien: "tondos",
    },
    {
      title: "Bolide d'argent",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-55.jpg`,
      
      description: "technique mixte Ø 80 cm",
      year: "1995",
      lien: "tondos",
    },
    {
      title: "Ventilation cellulaire",
      image: `/1995-2020-Tondos/pierre-arnould-artiste-tondo-56.jpg`,
      
      description: "technique mixte Ø 81 cm",
      year: "1993",
      lien: "tondos",
    },
  
  ],

  // =======================================================
  // BAROQUES (2021-2025) : 23 œuvres
  // =======================================================
  // baroques: Array.from({ length: 23 }, (_, i) => ({
  //   title: `Baroques #${i + 1}`,
  //   image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-${i + 1}.jpg`,
  //   style: "Baroques",
  //   description: `[À personnaliser] Description de l'œuvre Baroque n°${
  //     i + 1
  //   }`,
  //   year: "2025",
  //   lien: "baroques",
  // })),*
  baroques: [
 {
      title: "Arbre à palabres",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-1.jpg`,
      
      description: "technique mixte 20x30 cm",
      year: "1979",
      lien: "baroques",
    },
     {
      title: "Dédale",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-2.jpg`,
      
      description: "technique mixte 20x30 cm",
      year: "2011",
      lien: "baroques",
    },
     {
      title: "Port d'attaches",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-3.jpg`,
      
      description: "technique mixte 50x50 cm",
      year: "2024",
      lien: "baroques",
    },

 {
      title: "Jeu de pistes",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-4.jpg`,
     
      description: "technique mixte 100x100 cm",
      year: "1979",
      lien: "baroques",
    },
     {
      title: "Composition Jaune",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-5.jpg`,
     
      description: "technique mixte 40x70 cm",
      year: "2002",
      lien: "baroques",
    },
     {
      title: "Imagine",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-6.jpg`,
     
      description: "technique mixte 30x40 cm",
      year: "2022",
      lien: "baroques",
    },
     {
      title: "Hyménoptère",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-7.jpg`,
      
      description: "technique mixte 40x44 cm",
      year: "2023",
      lien: "baroques",
    },
    {
      title: "Rotor hydrique",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-8.jpg`,
      
      description: "technique mixte 30x38 cm",
      year: "2021",
      lien: "baroques",
    },
     {
      title: "Astronef",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-9.jpg`,
      
      description: "technique mixte 35x50 cm",
      year: "2023",
      lien: "baroques",
    },
 
 {
      title: "Pico Pico",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-10.jpg`,
      
      description: "technique mixte 35x55 cm",
      year: "2023",
      lien: "baroques",
    },
     {
      title: "Récup' dorée",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-11.jpg`,
    
      description: "technique mixte 50x80 cm",
      year: "1998",
      lien: "baroques",
    },
     {
      title: "Patterne beige",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-12.jpg`,
     
      description: "technique mixte 50x80 cm",
      year: "1999",
      lien: "baroques",
    },
     {
      title: "Lépidoptère cornu",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-13.jpg`,
      
      description: "technique mixte 35x55 cm",
      year: "2008",
      lien: "baroques",
    },
     {
      title: "Labyrinthe terra",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-14.jpg`,
      
      description: "technique mixte 45x70 cm",
      year: "1990",
      lien: "baroques",
    },
     {
      title: "Dancing chisel",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-15.jpg`,
      
      description: "technique mixte 30x40 cm",
      year: "2001",
      lien: "baroques",
    },
 {
      title: "Masque sénoufo",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-16.jpg`,
      
      description: "technique mixte 40x60 cm",
      year: "2013",
      lien: "baroques",
    },
        {
      title: "N'dédélé",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-17.jpg`,
     
      description: "technique mixte 30x50 cm",
      year: "2022",
      lien: "baroques",
    },
     {
      title: "Yoruba",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-18.jpg`,
   
      description: "technique mixte 35x70 cm",
      year: "2090",
      lien: "baroques",
    },
 
     {
      title: "Tribalisme",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-19.jpg`,
      
      description: "technique mixte 30x90 cm",
      year: "2013",
      lien: "baroques",
    },
     {
      title: "Ashanti",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-20.jpg`,
     
      description: "technique mixte 35x70 cm",
      year: "2024",
      lien: "baroques",
    },
     {
      title: "Primitivisme",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-21.jpg`,
     
      description: "technique mixte 30x80 cm",
      year: "2023",
      lien: "baroques",
    },
     {
      title: "Aborigène",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-22.jpg`,
    
      description: "technique mixte 25x65 cm",
      year: "2023",
      lien: "baroques",
    },
     {
      title: "Trigono spacial",
      image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-23.jpg`,
     
      description: "technique mixte 100x90 cm",
      year: "1989",
      lien: "baroques",
    },
  ],

  // =======================================================
  // GÉOMÉTRIQUES (2021-2025) : 24 œuvres
  // =======================================================
  // geometrique: Array.from({ length: 24 }, (_, i) => ({
  //   title: `Geometrique #${i + 1}`,
  //   image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-${
  //     i + 1
  //   }.jpg`,
  //   style: "Géometrique",
  //   description: `[À personnaliser] Description de l'œuvre Géométrique n°${
  //     i + 1
  //   }`,
  //   year: "2025",
  //   lien: "geometrique",
  // })),
  geometrique: [
 {
      title: "Fraise vanille",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-1.jpg`,
    
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "geometrique",
    },
 {
      title: "Germination",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-2.jpg`,
    
      description: "technique mixte 40x40 cm",
      year: "1969",
      lien: "geometrique",
    },
 {
      title: "Octo-ventilo",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-3.jpg`,
     
      description: "technique mixte 80x80 cm",
      year: "1999",
      lien: "geometrique",
    },
     {
      title: "Byzance",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-4.jpg`,
    
      description: "technique mixte 80x80 cm",
      year: "1999",
      lien: "geometrique",
    },
 {
      title: "Mayapolis",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-5.jpg`,
     
      description: "technique mixte 40x40 cm",
      year: "2010",
      lien: "geometrique",
    },
 {
      title: "Hokkaido zen",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-6.jpg`,
    
      description: "technique mixte 40x40 cm",
      year: "1997",
      lien: "geometrique",
    },
     {
      title: "Gotic",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-7.jpg`,
      
      description: "technique mixte 90x90 cm",
      year: "1991",
      lien: "geometrique",
    },

     {
      title: "Zoulou",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-8.jpg`,
    
      description: "technique mixte 90x90 cm",
      year: "1988",
      lien: "geometrique",
    },
     {
      title: "Forum",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-9.jpg`,
     
      description: "technique mixte 45x45 cm",
      year: "2025",
      lien: "geometrique",
    },
     {
      title: "Temple sacrificiel",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-10.jpg`,
     
      description: "technique mixte 45x45 cm",
      year: "2025",
      lien: "geometrique",
    },
     {
      title: "Bauhaus",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-11.jpg`,
     
      description: "technique mixte 35x35 cm",
      year: "2020",
      lien: "geometrique",
    },
     {
      title: "Epimedic",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-12.jpg`,
     
      description: "technique mixte 40x40 cm",
      year: "2000",
      lien: "geometrique",
    },
     {
      title: "Architectonic",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-13.jpg`,
    
      description: "technique mixte 40x50 cm",
      year: "1967",
      lien: "geometrique",
    },
     {
      title: "Pacific Maori ",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-14.jpg`,
     
      description: "technique mixte 50x55 cm",
      year: "1992",
      lien: "geometrique",
    },
     {
      title: "Message planette rouge",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-15.jpg`,
     
      description: "technique mixte 40x40 cm",
      year: "1998",
      lien: "geometrique",
    },
     {
      title: "Echiquier andalou",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-16.jpg`,
     
      description: "technique mixte 90x90 cm",
      year: "1995",
      lien: "geometrique",
    },
     {
      title: "Temple d'albatre",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-17.jpg`,
    
      description: "technique mixte 25x45 cm",
      year: "2025",
      lien: "geometrique",
    },
     {
      title: "Parcours-piège",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-18.jpg`,
      
      description: "technique mixte 30x30 cm",
      year: "1990",
      lien: "geometrique",
    },
     {
      title: "Dans l'armurerie",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-19.jpg`,
     
      description: "technique mixte 35x35 cm",
      year: "2001",
      lien: "geometrique",
    },
     {
      title: "Embarquement comète",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-20.jpg`,
     
      description: "technique mixte 80x80 cm",
      year: "1996",
      lien: "geometrique",
    },
     {
      title: "Braille Tetris",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-21.jpg`,
      
      description: "technique mixte 35x45 cm",
      year: "1992",
      lien: "geometrique",
    },
     {
      title: "Composition au carré",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-22.jpg`,
      
      description: "technique mixte 50x75 cm",
      year: "1989",
      lien: "geometrique",
    },
     {
      title: "Composition au moule à gateau",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-23.jpg`,
      
      description: "technique mixte 40x60 cm",
      year: "2020",
      lien: "geometrique",
    },
     {
      title: "Composition tressée",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-24.jpg`,
     
      description: "technique mixte 40x75 cm",
      year: "1978",
      lien: "geometrique",
    },
  ],
}
