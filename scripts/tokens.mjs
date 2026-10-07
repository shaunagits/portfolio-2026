// Generates src/styles/tokens.css from tokens/tokens.json. Runs before dev and build,
// so the CSS can never disagree with the token file Claude and people read.
import { readFileSync, writeFileSync } from 'node:fs';
const t = JSON.parse(readFileSync(new URL('../tokens/tokens.json', import.meta.url)));
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)).join(', ');
const lines = ['/* GENERATED from tokens/tokens.json by scripts/tokens.mjs. Do not edit by hand. */', ':root {'];
for (const [k, v] of Object.entries(t.color)) lines.push(`  --${k}: ${v};`, `  --${k}-rgb: ${rgb(v)};`);
for (const [k, v] of Object.entries(t.art)) lines.push(`  --${k}: ${v};`, `  --${k}-rgb: ${rgb(v)};`);
for (const [k, v] of Object.entries(t.font)) lines.push(`  --font-${k}: ${v};`);
t.space.forEach((v, i) => lines.push(`  --space-${i + 1}: ${v}px;`));
for (const [k, v] of Object.entries(t.radius)) lines.push(`  --radius-${k}: ${v}px;`);
for (const [k, v] of Object.entries(t.type)) if (!k.startsWith('$')) lines.push(`  --text-${k}: ${v.size};`);
lines.push(`  --ease: ${t.motion.ease};`, `  --dur-fast: ${t.motion.fast};`, `  --dur-base: ${t.motion.base};`, `  --dur-slow: ${t.motion.slow};`, '}');
// Dusk: the same roles at night. Only the overridden colours are re-declared.
lines.push('', ':root { color-scheme: light; }', ':root[data-theme="dusk"] {', '  color-scheme: dark;');
for (const [k, v] of Object.entries({ ...t.dusk.color, ...t.dusk.art })) lines.push(`  --${k}: ${v};`, `  --${k}-rgb: ${rgb(v)};`);
lines.push('}');
writeFileSync(new URL('../src/styles/tokens.css', import.meta.url), lines.join('\n') + '\n');
console.log(`tokens.css: ${Object.keys(t.color).length + Object.keys(t.art).length} colours (${Object.keys(t.dusk.color).length + Object.keys(t.dusk.art).length} re-set for dusk), ${t.space.length} spaces`);
