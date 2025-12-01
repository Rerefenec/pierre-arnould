import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://pierre-arnould.vercel.app";
  const publicDir = path.join(process.cwd(), "public");

  async function getImages(dir: string, root: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let imgs: string[] = [];

    for (const entry of entries) {
      const full = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        imgs.push(...await getImages(full, root));
      } else if (/\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(entry.name)) {
        const rel = path.relative(root, full).replace(/\\/g, "/");
        imgs.push(`${baseUrl}/${rel}`);
      }
    }
    return imgs;
  }

  let imageUrls: string[] = [];
  try {
    imageUrls = await getImages(publicDir, publicDir);
  } catch (e) {
    console.error("error reading images", e);
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  imageUrls.forEach((url: string) => {
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

