export async function GET() {
  const base = "https://pierre-arnould.vercel.app";

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

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach(p => {
    xml += `  <url>
    <loc>${base}${p}</loc>
  </url>
`;
  });

  xml += `</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
