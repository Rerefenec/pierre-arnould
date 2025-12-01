import { NextRequest } from "next/server";
import { seriesData } from "../../../data/seriesData";

export interface Work {
  title: string;
  image: string;
  style: string;
  description: string;
  year: string;
  lien: string;
}

const BASE_URL = "https://pierre-arnould.vercel.app";
const BATCH_SIZE = 500;

const FOLDER_TO_KEY_MAP: Record<string, string> = {
  "1969-1994-cloisonnes": "cloisonnes",
  "1995-2020-tondos": "tondos",
  "2021-2025-baroques": "baroques",
  "2021-2025-geometriques": "geometrique",
};

type RouteParams = { slug: string };

export async function GET(
  request: NextRequest,
  context: { params: RouteParams; searchParams: URLSearchParams } // ✅ include searchParams
) {
  const { slug } = context.params;

  const slugWithoutExtension = slug.replace(".xml", "");

  const match = slugWithoutExtension.match(/^([a-z0-9\-]+)-(\d+)$/);
  if (!match || match.length !== 3) {
    return new Response("Invalid sitemap format", { status: 400 });
  }

  const fullFolderName = match[1];
  const batchNumber = parseInt(match[2], 10);

  const serieKey = FOLDER_TO_KEY_MAP[fullFolderName];
  if (!serieKey || !seriesData[serieKey]) {
    return new Response("Serie not recognized or data missing", { status: 404 });
  }

  const allWorks: Work[] = seriesData[serieKey] as Work[];

  const start = (batchNumber - 1) * BATCH_SIZE;
  const end = start + BATCH_SIZE;

  if (start >= allWorks.length || batchNumber < 1) {
    return new Response("Batch index out of range", { status: 404 });
  }

  const batchWorks = allWorks.slice(start, end);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  batchWorks.forEach((work) => {
    const pageUrl = `${BASE_URL}/oeuvres/${work.lien}#${work.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/'/g, "")}`;
    const imageUrl = `${BASE_URL}${work.image}`;

    xml += `  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${work.title}</image:title>
    </image:image>
  </url>
`;
  });

  xml += `</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
