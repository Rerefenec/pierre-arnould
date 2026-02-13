// sitemap-images.xml.ts

// ⚠️ ASSUREZ-VOUS QUE CE CHEMIN EST CORRECT :
import { seriesData } from '../../data/seriesData'; 

const BASE_URL = "https://pierrearnould.com";
const BATCH_SIZE = 500;

// Créez un MAP pour lier les clés de votre objet data aux noms de dossiers/URL complets.
const KEY_TO_FOLDER_MAP: Record<string, string> = {
  // Clés de seriesData : Nom du Dossier/Série Complet pour l'URL
  'cloisonnes': "1969-1994-Cloisonnes",
  'tondos': "1995-2020-Tondos",
  'baroques': "2021-2025-Baroques",
  'geometrique': "2021-2025-Geometriques", 
};

export async function GET() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Itérer sur les clés de seriesData
  for (const serieKey of Object.keys(seriesData)) {
    
    // 1. Vérifier si nous avons une correspondance de dossier et des données
    const folderName = KEY_TO_FOLDER_MAP[serieKey];

    if (folderName && seriesData[serieKey]) {
        
        // 2. Calculer le nombre total d'images
        const totalImages = seriesData[serieKey].length; 
        
        // 3. Formater le nom du fichier sitemap (ex: 1969-1994-cloisonnes)
        const nameForFile = folderName.toLowerCase().replace(/ /g,"-");
        
        // 4. Calculer le nombre de sitemaps d'images nécessaires (batches)
        const totalBatches = Math.ceil(totalImages / BATCH_SIZE);
        
        for (let i = 1; i <= totalBatches; i++) {
          const fileName = `sitemap-images-${nameForFile}-${i}.xml`;
          xml += `  <sitemap>
    <loc>${BASE_URL}/sitemap/series/${fileName}</loc>
  </sitemap>
`;
        }
    } else {
        // Optionnel: Loggez une erreur si une clé de seriesData n'est pas mappée.
        console.warn(`Missing folder mapping for serieKey: ${serieKey}`);
    }
  }

  xml += `</sitemapindex>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}