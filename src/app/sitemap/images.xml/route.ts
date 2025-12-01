// sitemap-images.xml.ts

// ⚠️ REMPLACER le chemin d'importation par le chemin réel de votre fichier de données
import { seriesData } from '../../data/seriesData'; // Exemple de chemin

const BASE_URL = "https://pierre-arnould.vercel.app";
const SERIES = Object.keys(seriesData); // Utiliser les clés de votre objet de données
const BATCH_SIZE = 500;

// La fonction countImages n'est PLUS nécessaire, car nous avons les données.

export async function GET() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Itérer sur les clés (noms de série) de votre objet seriesData
  for (const serieKey of SERIES) {
    // 💡 Le total d'images est simplement la longueur du tableau pour cette série
    const totalImages = seriesData[serieKey].length; 
    
    // Le nom du dossier dans l'URL de la sitemap doit correspondre au format d'origine (ex: 1969-1994-Cloisonnes)
    // Nous devons donc trouver le nom de dossier correspondant à la clé (ex: 'cloisonnes' -> '1969-1994-Cloisonnes')
    
    // Pour l'index de la sitemap (le nom du fichier)
    const folderName = serieKey.toUpperCase(); // Ou utiliser une Map si les clés sont trop différentes

    // Si vous aviez la liste des noms de dossiers d'origine (comme dans votre premier code):
    const SERIES_FOLDER_NAMES = [
      "1969-1994-Cloisonnes",
      "1995-2020-Tondos",
      "2021-2025-Baroques",
      "2021-2025-Geometriques"
    ];
    // Vous devriez utiliser une logique pour mapper serieKey à SERIES_FOLDER_NAMES,
    // mais si vous utilisez les clés de votre objet comme base:
    // const folderName = SERIES_FOLDER_NAMES.find(name => name.toLowerCase().includes(serieKey)) || serieKey;
    
    // Simplification : nous allons utiliser la clé et le formatage pour le nom du fichier.
    const nameForFile = serieKey.toLowerCase().replace(/ /g,"-");
    
    const totalBatches = Math.ceil(totalImages / BATCH_SIZE);
    
    for (let i = 1; i <= totalBatches; i++) {
      // 💡 Nous utilisons serieKey pour nommer les sitemaps
      const fileName = `sitemap-images-${nameForFile}-${i}.xml`;
      xml += `  <sitemap>
    <loc>${BASE_URL}/sitemap/series/${fileName}</loc>
  </sitemap>
`;
    }
  }

  xml += `</sitemapindex>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}

// ⚠️ N'oubliez pas de mettre à jour la logique de mapping si les clés (ex: 'cloisonnes') ne correspondent pas
// aux noms de dossiers dans l'URL (ex: '1969-1994-Cloisonnes').