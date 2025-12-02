import { promises as fs } from "fs";
import path from "path";

const BASE_URL = "https://pierre-arnould.vercel.app";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const BATCH_SIZE = 500;
const SERIE_NAME = "2021-2025-Baroques";

async function getImages(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const imgs: string[] = [];
  
  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      imgs.push(...await getImages(full));
    } else {
      // Only include .webp images for this sitemap
      const isImage = /\.webp$/i.test(entry.name);

      // chemin relatif
      const rel = path
        .relative(PUBLIC_DIR, full)
        .replace(/\\/g, "/");

      // Exclude diaporama folder items, keep only webp
      const isDiaporama = rel.startsWith("diaporama/");

      if (isImage && !isDiaporama) {
        imgs.push(`${BASE_URL}/${rel}`);
      }
    }
  }
  return imgs;
}


async function generateSitemaps() {
  const dir = path.join(PUBLIC_DIR, SERIE_NAME);
  const images = await getImages(dir);
  const batches = Math.ceil(images.length / BATCH_SIZE);
  
  for (let batch = 1; batch <= batches; batch++) {
    const start = (batch - 1) * BATCH_SIZE;
    const batchImages = images.slice(start, start + BATCH_SIZE);
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
    
    batchImages.forEach(url => {
      xml += `  <url>\n    <loc>${url}</loc>\n    <image:image>\n      <image:loc>${url}</image:loc>\n    </image:image>\n  </url>\n`;
    });
    
    xml += `</urlset>`;
    
    const outPath = path.join(PUBLIC_DIR, `sitemap-baroques-${batch}.xml`);
    await fs.writeFile(outPath, xml);
    console.log(`Generated ${outPath}`);
  }
}

generateSitemaps().catch(console.error);