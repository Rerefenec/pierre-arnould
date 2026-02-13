export async function GET() {
  const base = "https://pierrearnould.com";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${base}/sitemap-images.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
}
