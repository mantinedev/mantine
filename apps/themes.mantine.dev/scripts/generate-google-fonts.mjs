import fs from 'node:fs/promises';
import path from 'node:path';

const METADATA_URL = 'https://fonts.google.com/metadata/fonts';
const OUTPUT = path.join(import.meta.dirname, '../src/preview/google-fonts.json');
const NOTO_FAMILIES = ['Noto Sans', 'Noto Serif', 'Noto Sans Mono'];

const CATEGORIES = {
  'Sans Serif': 'sans-serif',
  Serif: 'serif',
  Display: 'display',
  Handwriting: 'handwriting',
  Monospace: 'monospace',
};

function getWeights(font) {
  const axis = font.axes.find((item) => item.tag === 'wght');
  if (axis) {
    return `${axis.min}..${axis.max}`;
  }

  return Object.keys(font.fonts)
    .filter((key) => !key.endsWith('i'))
    .map(Number)
    .sort((a, b) => a - b)
    .join(';');
}

const response = await fetch(METADATA_URL);
const metadata = await response.json();

const fonts = metadata.familyMetadataList
  .filter((font) => font.subsets.includes('latin'))
  .filter((font) => !font.isNoto || NOTO_FAMILIES.includes(font.family))
  .filter((font) => CATEGORIES[font.category])
  .sort((a, b) => a.popularity - b.popularity)
  .map((font) => [font.family, CATEGORIES[font.category], getWeights(font)]);

await fs.writeFile(OUTPUT, `${JSON.stringify(fonts)}\n`);
console.log(`Saved ${fonts.length} fonts to ${path.relative(process.cwd(), OUTPUT)}`);
