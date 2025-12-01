// app/sitemap/series/[slug].xml/route.ts

// 1. Définition de l'interface Work (puisqu'elle n'est pas importée)
export interface Work {
  title: string;
  image: string; // Le chemin de l'image (ex: /1969-1994-Cloisonnes/file.jpg)
  style: string;
  description: string;
  year: string;
  lien: string; // La partie de l'URL de la page (ex: 'cloisonnes' ou 'oeuvres/cloisonnes')
}

// 2. Importation de seriesData
// ⚠️ VÉRIFIEZ CE CHEMIN : Si votre fichier est dans /src/data/seriesData.ts
// et la route est dans /src/app/sitemap/series/[slug].xml/route.ts
// vous avez besoin de remonter 3 niveaux : ../../../
import { seriesData } from "../../../data/seriesData";

const BASE_URL = "https://pierre-arnould.vercel.app";
const BATCH_SIZE = 500;

// Mappage inversé : du nom de dossier/URL (ex: '1969-1994-cloisonnes') à la clé de données (ex: 'cloisonnes')
const FOLDER_TO_KEY_MAP: Record<string, string> = {
  "1969-1994-cloisonnes": "cloisonnes",
  "1995-2020-tondos": "tondos",
  "2021-2025-baroques": "baroques",
  "2021-2025-geometriques": "geometrique",
};

// Next.js utilise les "params" pour récupérer le slug de l'URL.
// ✅ LIGNE CORRIGÉE
// Next.js injecte l'objet 'context' comme deuxième argument, contenant les 'params'.
export async function GET(request: Request, context: { params: { slug: string } }) {
// Nous déstructurons 'params' à partir de 'context' pour faciliter la lecture du code.
    const { params } = context; 
    
    // Le reste de votre logique utilise maintenant params.slug
    const slugWithoutExtension = params.slug.replace(".xml", "");
  // Expression régulière pour extraire le nom complet de la série (y compris les années)
  // et le numéro de lot final.
  const match = slugWithoutExtension.match(/^([a-z0-9\-]+)-(\d+)$/);

  if (!match || match.length !== 3) {
    return new Response("Invalid sitemap format", { status: 400 });
  }

  // Exemple : '1995-2020-tondos-1' -> fullFolderName = '1995-2020-tondos', batchIndexStr = '1'
  const fullFolderName = match[1];
  const batchNumber = parseInt(match[2], 10);

  // 3. Trouver la clé de la série dans l'objet seriesData à partir du nom complet
  const serieKey = FOLDER_TO_KEY_MAP[fullFolderName];

  if (!serieKey || !seriesData[serieKey]) {
    return new Response("Serie not recognized or data missing", {
      status: 404,
    });
  }

  // On s'assure que le tableau est bien typé par l'interface définie
  const allWorks: Work[] = (seriesData[serieKey] as Work[]) || [];

  if (allWorks.length === 0 || batchNumber < 1) {
    return new Response("No data or invalid batch", { status: 404 });
  }

  // 4. Calculer les bornes du lot
  const start = (batchNumber - 1) * BATCH_SIZE;
  const end = start + BATCH_SIZE;

  if (start >= allWorks.length) {
    return new Response("Batch index out of range", { status: 404 });
  }

  const batchWorks = allWorks.slice(start, end);

  // 5. Générer l'XML du sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  batchWorks.forEach((work) => {
    // L'URL de la page où l'œuvre est visible (en utilisant work.lien, ex: 'cloisonnes')
    const pageUrl = `${BASE_URL}/oeuvres/${work.lien}#${work.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/'/g, "")}`;
    // L'URL de l'image (dans le dossier public)
    const imageUrl = `${BASE_URL}${work.image}`;

    xml += `  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${work.title}</image:title>
    </image:image>
  </url>
`;
  });

  xml += `</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
