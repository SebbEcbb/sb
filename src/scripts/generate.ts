import * as fs from 'fs';
import { pages } from './scripts/data.js'; // Ensure data.ts exists in the same folder

function buildXml() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastMod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    // "./" refers to the root where you run the command
    fs.writeFileSync('./sitemap.xml', xml); 
    console.log("🚀 Success: sitemap.xml created in root!");
}

buildXml();