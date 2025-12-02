import { seriesData, Work } from "@/app/data/seriesData";
import { promises as fs } from "fs";
import path from "path";

const BASE_URL = "https://pierre-arnould.vercel.app";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const BATCH_SIZE = 500;
const SERIE_NAME = "2021-2025-Baroques";

// Build image URLs from the canonical data source (seriesData) instead of scanning the
// filesystem. This avoids bundling large public assets into the serverless function
// and keeps the lambda small. We produce the mini WebP thumbnails used around the site.
async function getImages(_dir: string): Promise<string[]> {
  const serieKey = "baroques";
  const works = seriesData[serieKey] || [];

  const imgs = works.map((w: Work, i: number) => {
    // original images in seriesData are .jpg under /2021-2025-Baroques/
    // we want the mini .webp thumbnails: /2021-2025-Baroques-mini/..-<n>.webp
    const webpPath = w.image
      .replace("/2021-2025-Baroques/", "/2021-2025-Baroques-mini/")
      .replace(/\.jpe?g$/i, ".webp")
      .replace(/\\/g, "/");

    return `${BASE_URL}${webpPath}`;
  });

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