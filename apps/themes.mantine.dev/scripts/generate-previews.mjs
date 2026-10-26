import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const BASE_URL = process.argv[2] ?? 'http://localhost:4821';
const ROOT = path.join(import.meta.dirname, '..');
const OUTPUT = path.join(ROOT, 'public/previews');
const VIEWPORT = { width: 1280, height: 720 };
const SIZE = { width: 640, height: 360 };
const QUALITY = 0.72;
const SCHEMES = ['light', 'dark'];

const source = await fs.readFile(path.join(ROOT, 'src/presets/presets.ts'), 'utf8');
const ids = [...source.matchAll(/id: '([^']+)'/g)].map((match) => match[1]);

async function encodeWebp(page, png) {
  const dataUrl = await page.evaluate(
    async ({ base64, size, quality }) => {
      const blob = await (await fetch(`data:image/png;base64,${base64}`)).blob();
      const bitmap = await createImageBitmap(blob);
      const canvas = document.createElement('canvas');
      canvas.width = size.width;
      canvas.height = size.height;
      const context = canvas.getContext('2d');
      context.imageSmoothingQuality = 'high';
      context.drawImage(bitmap, 0, 0, size.width, size.height);
      return canvas.toDataURL('image/webp', quality);
    },
    { base64: png.toString('base64'), size: SIZE, quality: QUALITY }
  );

  return Buffer.from(dataUrl.split(',')[1], 'base64');
}

await fs.mkdir(OUTPUT, { recursive: true });
const browser = await chromium.launch();

try {
  const encoder = await browser.newPage();

  for (const id of ids) {
    for (const scheme of SCHEMES) {
      const context = await browser.newContext({ viewport: VIEWPORT, colorScheme: scheme });
      await context.addInitScript(
        ({ presetId, value }) => {
          localStorage.setItem('mantine-color-scheme-value', value);
          localStorage.setItem(`${presetId}-color-scheme`, value);
        },
        { presetId: id, value: scheme }
      );

      const page = await context.newPage();
      await page.goto(`${BASE_URL}/${id}/`, { waitUntil: 'networkidle' });
      await page.addStyleTag({ content: 'nextjs-portal { display: none !important; }' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(800);

      const png = await page.screenshot({ animations: 'disabled' });
      const webp = await encodeWebp(encoder, png);
      const file = path.join(OUTPUT, `${id}-${scheme}.webp`);
      await fs.writeFile(file, webp);
      console.log(`${path.relative(ROOT, file)} ${(webp.length / 1024).toFixed(1)} KB`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}
