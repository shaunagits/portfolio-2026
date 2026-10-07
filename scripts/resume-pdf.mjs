// Prints /resume to public/shauna-arnold-resume.pdf using the page's own print styles,
// so the web résumé and the PDF always match. Run after `npm run build`:
//   npm run resume:pdf
// Needs Playwright (not a project dependency): `npm i -g playwright && npx playwright install chromium`.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch {
  console.error('Playwright is not installed. Run: npm i -g playwright && npx playwright install chromium');
  process.exit(1);
}

const dist = join(process.cwd(), 'dist');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  try { const body = await readFile(join(dist, p)); res.writeHead(200, { 'content-type': types[extname(p)] ?? 'application/octet-stream' }); res.end(body); }
  catch { res.writeHead(404); res.end(); }
}).listen(4329);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:4329/resume/', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const out = join(process.cwd(), 'public/shauna-arnold-resume.pdf');
await page.pdf({ path: out, format: 'Letter', preferCSSPageSize: true, printBackground: true });
await browser.close();
server.close();
console.log(`Wrote ${out}`);
