import { seriesData, type Work } from "@/app/data/seriesData";

const BASE_URL = "https://pierre-arnould.vercel.app";
const BATCH_SIZE = 500;
const SERIE_NAME = "1995-2020-Tondos"; // Cambiar para cada serie
const BATCH_NUMBER = 1;                    // Cambiar para cada batch

async function getImages(): Promise<string[]> {
  // Use the canonical seriesData to avoid scanning the public/ folder
  const works: Work[] = seriesData.tondos || [];
  return works.map(w => {
    // convert e.g. /1995-2020-Tondos/pierre-arnould-artiste-tondo-1.jpg
    // into /1995-2020-Tondos-mini/pierre-arnould-artiste-tondo-1.webp
    const webp = w.image.replace("/1995-2020-Tondos/", "/1995-2020-Tondos-mini/").replace(/\.[a-zA-Z]+$/i, ".webp");
    return `${BASE_URL}${webp}`;
  });
}

export async function GET() {
  let images: string[] = [];
  try {
    images = await getImages();
  } catch (e) {
    console.error("Error building images from seriesData", e);
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
