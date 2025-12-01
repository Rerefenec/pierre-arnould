import { promises as fs } from "fs";
import path from "path";

const BASE_URL = "https://pierre-arnould.vercel.app";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const SERIES = [
  "1969-1994-Cloisonnes",
  "1995-2020-Tondos",
  "2021-2025-Baroques",
  "2021-2025-Geometriques"
];
const BATCH_SIZE = 500;

async function countImages(dir: string): Promise<number> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let count = 0;
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += await countImages(full);
    } else if (/\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(entry.name) &&
               !entry.name.toLowerCase().includes("-mini")) {
      count++;
    }
  }
  return count;
}

export async function GET() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const serie of SERIES) {
    const dir = path.join(PUBLIC_DIR, serie);
    let totalImages = 0;
    try {
      totalImages = await countImages(dir);
    } catch {}
    const totalBatches = Math.ceil(totalImages / BATCH_SIZE);
    for (let i = 1; i <= totalBatches; i++) {
      const fileName = `sitemap-images-${serie.toLowerCase().replace(/ /g,"-")}-${i}.xml`;
      xml += `  <sitemap>
    <loc>${BASE_URL}/sitemap/series/${fileName}</loc>
  </sitemap>
`;
    }
  }

  xml += `</sitemapindex>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
