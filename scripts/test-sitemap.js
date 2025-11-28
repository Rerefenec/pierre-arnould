const fs = require('fs').promises;
const path = require('path');

async function getImages(dir, rootDir) {
  let entries = await fs.readdir(dir, { withFileTypes: true });
  let results = [];

  for (let entry of entries) {
    let fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...await getImages(fullPath, rootDir));
    } else if (entry.isFile() && /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(entry.name)) {
      const rel = path.relative(rootDir, fullPath).split(path.sep).join('/');
      results.push(`/${rel}`);
    }
  }
  return results;
}

(async function run() {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const allImages = await getImages(publicDir, publicDir);

    const rules = {
      '/cloisonnes': ['1969-1994-Cloisonnes-mini', '1969-1994-Cloisonnes'],
      '/baroques': ['2021-2025-Baroques-mini', '2021-2025-Baroques'],
      '/geometrique': ['2021-2025-Geometriques-mini', '2021-2025-Geometriques'],
      '/tondos': ['1995-2020-Tondos-mini', '1995-2020-Tondos'],
      '/collections': ['-mini'],
      '/diaporama': ['1969-1994-Cloisonnes/', '1995-2020-Tondos/', '2021-2025-Baroques/', '2021-2025-Geometriques/'],
      '/': ['logo.png', 'logo2.png', 'lui.png']
    };

    for (const [page, patterns] of Object.entries(rules)) {
      const matches = allImages.filter(img => {
        const lower = img.toLowerCase();
        return patterns.some(p => lower.includes(p.toLowerCase()));
      });
      console.log(`${page} -> ${matches.length} images`);
      if (matches.length > 0) console.log(matches.slice(0,5).join('\n'));
      console.log('---');
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
