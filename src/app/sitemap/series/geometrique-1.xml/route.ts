import { seriesData, type Work } from "@/app/data/seriesData";

const BASE_URL = "https://pierrearnould.com";
const BATCH_SIZE = 500;
const BATCH_NUMBER = 1; // Cambiar pour chaque batch

async function getImages(): Promise<string[]> {
  const works: Work[] = seriesData.geometrique || [];
  return works.map(w => {
    const webp = w.image.replace("/2021-2025-Geometriques/", "/2021-2025-Geometriques-mini/").replace(/\.[a-zA-Z]+$/i, ".webp");
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
