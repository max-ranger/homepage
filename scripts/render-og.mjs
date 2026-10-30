import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const OG_SVG_PATH = resolve('public/og-image.svg');
const OG_PNG_PATH = resolve('public/og-image.png');
const ICON_SVG_PATH = resolve('public/favicon.svg');
const ICON_PNG_PATH = resolve('public/apple-touch-icon.png');

function render(svgPath, pngPath, options) {
  const png = new Resvg(readFileSync(svgPath, 'utf8'), options).render().asPng();
  writeFileSync(pngPath, png);
  console.log(`${pngPath.split('/').pop()} written (${(png.length / 1024).toFixed(1)} kB)`);
}

render(OG_SVG_PATH, OG_PNG_PATH, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
});

// iOS rounds the corners itself and shows transparency as black, so fill them with the ground.
render(ICON_SVG_PATH, ICON_PNG_PATH, {
  fitTo: { mode: 'width', value: 180 },
  background: '#0b0c0a',
});
