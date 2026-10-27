import fs from 'node:fs/promises';
import path from 'node:path';

const VERSION = '14.51.0';
const SOURCE = `https://cdn.jsdelivr.net/npm/color-name-list@${VERSION}/dist/colornames.short.json`;
const OUTPUT = path.join(import.meta.dirname, '../src/preview/color-names.json');

const response = await fetch(SOURCE);
const names = await response.json();

const data = {
  source: `color-name-list@${VERSION} (MIT, https://github.com/meodai/color-names)`,
  colors: names.filter((item) => /^[a-z ]+$/i.test(item.name)).map((item) => [item.name, item.hex]),
};

await fs.writeFile(OUTPUT, `${JSON.stringify(data)}\n`);
console.log(`Saved ${data.colors.length} color names to ${path.relative(process.cwd(), OUTPUT)}`);
