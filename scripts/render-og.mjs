import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const SVG_PATH = resolve('public/og-image.svg');
const PNG_PATH = resolve('public/og-image.png');

const svg = readFileSync(SVG_PATH, 'utf8');

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
});

const png = resvg.render().asPng();
writeFileSync(PNG_PATH, png);

console.log(`og-image.png written (${(png.length / 1024).toFixed(1)} kB)`);
