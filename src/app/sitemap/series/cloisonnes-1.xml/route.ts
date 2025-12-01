import { promises as fs } from "fs";
import path from "path";

const BASE_URL = "https://pierre-arnould.vercel.app";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const BATCH_SIZE = 500;
const SERIE_NAME = "1969-1994-Cloisonnes"; // Cambiar para cada serie
const BATCH_NUMBER = 1;                    // Cambiar para cada batch

async function getImages(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let imgs: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      imgs.push(...await getImages(full));
    } else if (/\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(entry.name) &&
               !entry.name.toLowerCase().includes("-mini")) {
      const rel = path.relative(PUBLIC_DIR, full).replace(/\\/g, "/");
      imgs.push(`${BASE_URL}/${rel}`);
    }
  }
  return imgs;
}

export async function GET() {
  const dir = path.join(PUBLIC_DIR, SERIE_NAME);
  let images: string[] = [];
  try {
    images = await getImages(dir);
  } catch (e) {
    console.error("Error reading images", e);
  }

  const start = (BATCH_NUMBER - 1) * BATCH_SIZE;
  const batchImages = images.slice(start, start + BATCH_SIZE);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  batchImages.forEach(url => {
    xml += `  <url>
    <loc>${url}</loc>
    <image:image>
      <image:loc>${url}</image:loc>
    </image:image>
  </url>
`;
  });

  xml += `</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
