import { promises as fs } from "fs";
import path from "path";

const BASE_URL = "https://pierre-arnould.vercel.app";
const PUBLIC_DIR = path.join(process.cwd(), "public");

// Configura tus series de imágenes (carpetas dentro de /public)
const SERIES = [
  "1969-1994-Cloisonnes",
  "1995-2020-Tondos",
  "2021-2025-Baroques",
  "2021-2025-Geometriques"
];

// Número máximo de imágenes por sitemap (para no romper Vercel)
const BATCH_SIZE = 500;

async function getImages(dir: string, root: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let imgs: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      imgs.push(...await getImages(full, root));
    } else if (
      /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(entry.name) &&
      !entry.name.toLowerCase().includes("-mini") // ❌ excluir miniaturas
    ) {
      const rel = path.relative(root, full).replace(/\\/g, "/");
      imgs.push(`${BASE_URL}/${rel}`);
    }
  }
  return imgs;
}

export async function GET() {
  // Recoger imágenes de todas las series
  let allImages: Record<string, string[]> = {};

  for (const serie of SERIES) {
    const dir = path.join(PUBLIC_DIR, serie);
    try {
      const imgs = await getImages(dir, PUBLIC_DIR);
      if (imgs.length > 0) {
        allImages[serie] = imgs;
      }
    } catch (e) {
      console.error(`Error leyendo la serie ${serie}:`, e);
    }
  }

  // Construir XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Crear un sitemap por serie y dividir en batches si hay muchas imágenes
  for (const [serie, imgs] of Object.entries(allImages)) {
    const totalBatches = Math.ceil(imgs.length / BATCH_SIZE);

    for (let i = 0; i < totalBatches; i++) {
      const batchNumber = i + 1;
      xml += `  <sitemap>
    <loc>${BASE_URL}/sitemap-images-${serie.toLowerCase()}-${batchNumber}.xml</loc>
  </sitemap>
`;
    }
  }

  xml += `</sitemapindex>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
