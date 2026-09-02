/* oxlint-disable no-console */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDefaultPalettes } from './build-default-palettes.mts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const palettes = buildDefaultPalettes();

function fmt(n: number, d = 4): string {
  return n.toFixed(d);
}

let md = `# Candidate Palettes — Mantine v10 Colors\n\n`;
md += `Generated: ${new Date().toISOString()}\n\n`;
md += `Shades built directly from per-color spec (hue, peakC, lDelta, cScale overrides).\n\n`;
md += `Chroma normalized so index 6 = peakC before cScale is applied.\n\n`;
md += `---\n\n`;

for (const { spec, shades } of palettes) {
  const peakCLabel = 'peakC' in spec ? spec.peakC : 0;
  md += `## ${spec.name} (hue ${spec.hue}°, peak C ${peakCLabel})\n\n`;
  md += `| Index | L | C | H | oklch | hex | Note |\n`;
  md += `|-------|--------|--------|--------|-------|-----|------|\n`;

  for (const shade of shades) {
    const notes: string[] = [];
    if (shade.index === 6) {
      notes.push('**light filled (idx 6)**');
    }
    if (shade.index === 8) {
      notes.push('**dark filled (idx 8)**');
    }
    md += `| ${shade.index} | ${fmt(shade.l, 3)} | ${fmt(shade.c, 4)} | ${fmt(shade.h, 1)} | \`${shade.oklch}\` | \`${shade.hex}\` | ${notes.join(', ')} |\n`;
  }

  md += `\n`;
}

const outDir = path.resolve(__dirname, '../../claude/colors-10.0');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'candidate-palettes.md');
fs.writeFileSync(outPath, md, 'utf8');

console.log(`Written: ${outPath}`);
console.log(`Palettes generated: ${palettes.map((p) => p.spec.name).join(', ')}`);

export { palettes };
