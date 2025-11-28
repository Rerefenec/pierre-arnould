import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://pierre-arnould.vercel.app/"; // ← mets ton domaine ici

  // Récupère toutes les images dans /public (parcours récursif de tous les sous-dossiers)
  const publicDir = path.join(process.cwd(), "public");

  async function getImages(dir, rootDir) {
    let entries = await fs.readdir(dir, { withFileTypes: true });
    let results = [];

    for (let entry of entries) {
      let fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        results.push(...await getImages(fullPath, rootDir));
      } else if (entry.isFile() && /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(entry.name)) {
        // calcule le chemin relatif depuis la racine `public` et transforme en URL
        const rel = path.relative(rootDir, fullPath).split(path.sep).join('/');
        const stat = await fs.stat(fullPath);
        results.push({ url: `${baseUrl}${rel}`, rel, fullPath, lastmod: stat.mtime.toISOString() });
      }
    }
    return results;
  }

  // Si `public` n'existe pas — on retourne simplement une liste vide
  let allImages = [];
  try {
    allImages = await getImages(publicDir, publicDir);
  } catch (err) {
    // si le dossier n'existe pas ou autre erreur, on loggue et on continue proprement
    // (Next/Edge handlers ne doivent pas s'effondrer pour un sitemap)
    console.error('sitemap: unable to read public directory', err);
    allImages = [];
  }

  // Construction XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Tu peux ajouter ici une liste de pages de ton site :
  const pages = [
    "",
    "/apropos",
    "/contact",
    "/baroques",
    "/cloisonnes",
    "/cloisonnes+geometriques",
    "/collections",
    "/diaporama",
    "/geometrique",
    "/tondos"
];

  pages.forEach((p) => {
    xml += `  <url>
    <loc>${baseUrl}${p}</loc>
`;

    // associe les images selon la page
    // règles simples basées sur les dossiers / noms utilisés dans les page.tsx
    const rules = {
      '/cloisonnes': ['1969-1994-Cloisonnes-mini', '1969-1994-Cloisonnes'],
      '/baroques': ['2021-2025-Baroques-mini', '2021-2025-Baroques'],
      '/geometrique': ['2021-2025-Geometriques-mini', '2021-2025-Geometriques'],
      '/tondos': ['1995-2020-Tondos-mini', '1995-2020-Tondos'],
      '/collections': ['-mini'], // miniatures issues de toutes les séries
      '/diaporama': ['1969-1994-Cloisonnes/', '1995-2020-Tondos/', '2021-2025-Baroques/', '2021-2025-Geometriques/'],
      '': ['logo.png', 'logo2.png', 'lui.png'] // page d'accueil : logos etc
    };

    const pageKey = p; // p est la clé comme '/cloisonnes'
    const patterns = rules[pageKey] || [];

    const imagesForThisPage = allImages.filter((img) => {
      const lower = img.rel.toLowerCase();
      return patterns.some(pattern => lower.includes(pattern.toLowerCase()));
    });

    // Détermine la dernière date de modification parmi les images associées (si existantes)
    if (imagesForThisPage.length > 0) {
      const latest = imagesForThisPage.reduce((max, im) => (im.lastmod > max ? im.lastmod : max), imagesForThisPage[0].lastmod);
      xml += `    <lastmod>${latest}</lastmod>\n`;
      // Ajoute ces images dans le sitemap pour la page courante
      imagesForThisPage.forEach(img => {
        xml += `    <image:image>\n      <image:loc>${img.url}</image:loc>\n    </image:image>\n`;
      });
    }

    xml += `  </url>\n`;
  });

  // === Génère des URLs individuelles pour chaque image en diaporama ===
  // On regroupe les images par dossier-series et on produit des URLs
  const dirToSeries = {
    '1969-1994-Cloisonnes': 'cloisonnes',
    '1995-2020-Tondos': 'tondos',
    '2021-2025-Baroques': 'baroques',
    '2021-2025-Geometriques': 'geometrique',
  };

  // pour chaque répertoire-series, on produit /diaporama/{serie}?index=n
  Object.entries(dirToSeries).forEach(([dirName, serieSlug]) => {
    const imgs = allImages.filter(img => img.rel.startsWith(dirName + '/'))
      // trier par numéro dans le nom si possible, sinon ordre alphabétique
      .sort((a, b) => {
        const an = (a.rel.match(/-(\d+)\./) || [])[1];
        const bn = (b.rel.match(/-(\d+)\./) || [])[1];
        if (an && bn) return Number(an) - Number(bn);
        return a.rel.localeCompare(b.rel);
      });

    imgs.forEach((img, idx) => {
      const index = idx + 1; // base 1 like dans ton diaporama
      xml += `  <url>\n    <loc>${baseUrl}diaporama/${serieSlug}?index=${index}</loc>\n`;
      if (img.lastmod) xml += `    <lastmod>${img.lastmod}</lastmod>\n`;
      xml += `    <image:image>\n      <image:loc>${img.url}</image:loc>\n    </image:image>\n  </url>\n`;
    });
  });

  // Ajoute un URL dédié pour les images (optionnel)
  xml += `
  <url>
    <loc>${baseUrl}/</loc>
`;

  allImages.forEach(img => {
    xml += `
    <image:image>
      <image:loc>${img.url}</image:loc>
    </image:image>
`;
  });

  xml += `  </url>\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
