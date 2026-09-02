/* oxlint-disable no-console */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { inGamut, modeLrgb, modeOklch, modeRgb, useMode, wcagContrast } from 'culori/fn';
import {
  DARK_LIGHTNESS_RAMP,
  lightnessRampForHue,
} from '../../packages/@mantine/colors-generator/src/ramp';
import { buildDefaultPalettes } from './build-default-palettes.mts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const oklch = useMode(modeOklch);
useMode(modeRgb);
useMode(modeLrgb);

const inSrgb = inGamut('rgb');

const BRIGHT_HUES = new Set(['yellow', 'lime', 'orange', 'green']);

type ContrastVerdict = 'BUFFER-PASS' | 'PASS' | 'MARGINAL' | 'FAIL';

function contrastVerdict(ratio: number): ContrastVerdict {
  if (ratio >= 4.65) {
    return 'BUFFER-PASS';
  }
  if (ratio >= 4.5) {
    return 'MARGINAL';
  }
  return 'FAIL';
}

function filledContrast(hexColor: string): {
  ratio: number;
  text: 'white' | 'black';
  verdict: ContrastVerdict;
} {
  const vsWhite = wcagContrast(hexColor, 'white');
  const vsBlack = wcagContrast(hexColor, 'black');
  const ratio = Math.max(vsWhite, vsBlack);
  const text = vsWhite >= vsBlack ? 'white' : 'black';
  return { ratio, text, verdict: contrastVerdict(ratio) };
}

interface ColorQA {
  name: string;
  hue: number;
  peakC: number;
  allInGamut: boolean;
  outOfGamutIndices: number[];
  lMonotonicOk: boolean;
  lDeviations: { index: number; actual: number; expected: number; delta: number }[];
  idx6Contrast: { ratio: number; text: 'white' | 'black'; verdict: ContrastVerdict };
  idx8Contrast: { ratio: number; text: 'white' | 'black'; verdict: ContrastVerdict };
  chromaRetention5: number;
  chromaRetention6: number;
  chromaRetentionFlag: boolean;
  appearanceFlag: boolean;
  appearanceNote: string;
  shades: Array<{ index: number; l: number; c: number; h: number; hex: string; oklch: string }>;
}

const palettes = buildDefaultPalettes();
const results: ColorQA[] = [];

for (const { spec, shades } of palettes) {
  const isDark = spec.name === 'dark';
  const peakC = 'peakC' in spec ? spec.peakC : 0;
  const hue = spec.hue;

  const outOfGamutIndices: number[] = [];
  for (const shade of shades) {
    const parsed = oklch(shade.oklch);
    if (parsed && !inSrgb(parsed)) {
      outOfGamutIndices.push(shade.index);
    }
  }
  const allInGamut = outOfGamutIndices.length === 0;

  const baseRamp = isDark ? (DARK_LIGHTNESS_RAMP as readonly number[]) : lightnessRampForHue(hue);
  const lDeviations: ColorQA['lDeviations'] = [];
  for (const shade of shades) {
    const expected = baseRamp[shade.index]!;
    const delta = Math.abs(shade.l - expected);
    if (delta > 0.005) {
      lDeviations.push({ index: shade.index, actual: shade.l, expected, delta });
    }
  }

  let lMonotonicOk = true;
  for (let i = 1; i < shades.length; i++) {
    if (shades[i]!.l >= shades[i - 1]!.l) {
      lMonotonicOk = false;
      break;
    }
  }

  const idx6Contrast = filledContrast(shades[6]!.hex);
  const idx8Contrast = filledContrast(shades[8]!.hex);

  const c5actual = shades[5]!.c;
  const c6actual = shades[6]!.c;
  const chromaRetention5 = isDark ? 1 : c5actual / peakC;
  const chromaRetention6 = isDark ? 1 : c6actual / peakC;
  const chromaRetentionFlag =
    !isDark && peakC > 0.01 && (chromaRetention5 < 0.7 || chromaRetention6 < 0.7);

  const idx6L = baseRamp[6]!;
  const idx6IsBright = BRIGHT_HUES.has(spec.name);
  const appearanceFlag = idx6IsBright;
  const appearanceNote = idx6IsBright
    ? `Hue ${hue}° (${spec.name}) uses lifted ramp; index-6 L=${idx6L.toFixed(4)}, hex ${shades[6]!.hex} — should read as bright/recognizable ${spec.name}.`
    : '';

  results.push({
    name: spec.name,
    hue,
    peakC,
    allInGamut,
    outOfGamutIndices,
    lMonotonicOk,
    lDeviations,
    idx6Contrast,
    idx8Contrast,
    chromaRetention5,
    chromaRetention6,
    chromaRetentionFlag,
    appearanceFlag,
    appearanceNote,
    shades: shades.map((s) => ({ ...s, oklch: s.oklch })),
  });
}

function v(verdict: ContrastVerdict): string {
  return verdict;
}

function pct(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

let md = `# Palette Proofs — Mantine v10 Colors QA\n\n`;
md += `Generated: ${new Date().toISOString()}\n\n`;
md += `Gates: gamut=sRGB, L-ramp strictly decreasing, index-6 contrast≥4.5 with white text (BUFFER-PASS≥4.65), chroma-retention≥70%.\n\n`;
md += `Bright hues (yellow/lime/orange/green) use an elevated lightness ramp.\n\n`;

md += `## Summary Table\n\n`;
md += `| Color | Gamut | L-mono | Idx6 text | Idx6 ratio | Idx6 verdict | Idx8 text | Idx8 ratio | Idx8 verdict | C-ret idx5 | C-ret idx6 | Appearance |\n`;
md += `|-------|-------|--------|-----------|------------|--------------|-----------|------------|--------------|------------|------------|------------|\n`;

for (const r of results) {
  const gamut = r.allInGamut ? 'PASS' : `FAIL(${r.outOfGamutIndices.join(',')})`;
  const lmono = r.lMonotonicOk ? 'PASS' : 'FAIL';
  const cret5 =
    r.chromaRetention5 < 0.7 ? `**${pct(r.chromaRetention5)}**` : pct(r.chromaRetention5);
  const cret6 =
    r.chromaRetention6 < 0.7 ? `**${pct(r.chromaRetention6)}**` : pct(r.chromaRetention6);
  const app = r.appearanceFlag ? 'FLAG' : '-';

  md += `| ${r.name} | ${gamut} | ${lmono} | ${r.idx6Contrast.text} | ${r.idx6Contrast.ratio.toFixed(2)} | ${v(r.idx6Contrast.verdict)} | ${r.idx8Contrast.text} | ${r.idx8Contrast.ratio.toFixed(2)} | ${v(r.idx8Contrast.verdict)} | ${cret5} | ${cret6} | ${app} |\n`;
}

md += `\n## Per-Hue Notes\n\n`;

for (const r of results) {
  const hasNotes =
    !r.allInGamut ||
    !r.lMonotonicOk ||
    r.lDeviations.length > 0 ||
    r.chromaRetentionFlag ||
    r.appearanceFlag ||
    r.idx6Contrast.verdict === 'FAIL' ||
    r.idx6Contrast.verdict === 'MARGINAL' ||
    r.idx8Contrast.verdict === 'FAIL' ||
    r.idx8Contrast.verdict === 'MARGINAL';

  if (!hasNotes) {
    continue;
  }

  md += `### ${r.name}\n\n`;

  if (!r.allInGamut) {
    md += `- **Gamut FAIL** at indices: ${r.outOfGamutIndices.join(', ')}\n`;
  }
  if (r.lDeviations.length > 0) {
    for (const dev of r.lDeviations) {
      md += `- **L deviation** at idx ${dev.index}: actual=${dev.actual.toFixed(4)}, expected=${dev.expected.toFixed(4)}, delta=${dev.delta.toFixed(5)}\n`;
    }
  }
  if (!r.lMonotonicOk) {
    md += `- **L not strictly decreasing** across the ramp.\n`;
  }
  if (r.idx6Contrast.verdict === 'FAIL' || r.idx6Contrast.verdict === 'MARGINAL') {
    md += `- **Index 6 contrast ${r.idx6Contrast.verdict}**: ${r.idx6Contrast.ratio.toFixed(2)} vs ${r.idx6Contrast.text}\n`;
  }
  if (r.idx8Contrast.verdict === 'FAIL' || r.idx8Contrast.verdict === 'MARGINAL') {
    md += `- **Index 8 contrast ${r.idx8Contrast.verdict}**: ${r.idx8Contrast.ratio.toFixed(2)} vs ${r.idx8Contrast.text}\n`;
  }
  if (r.chromaRetentionFlag) {
    if (r.chromaRetention5 < 0.7) {
      md += `- **Chroma retention FLAG idx5**: ${pct(r.chromaRetention5)} of target ${r.peakC} (actual ${r.shades[5]!.c.toFixed(4)})\n`;
    }
    if (r.chromaRetention6 < 0.7) {
      md += `- **Chroma retention FLAG idx6**: ${pct(r.chromaRetention6)} of target ${r.peakC} (actual ${r.shades[6]!.c.toFixed(4)})\n`;
    }
  }
  if (r.appearanceFlag) {
    md += `- **Appearance:** ${r.appearanceNote}\n`;
  }

  md += `\n`;
}

md += `## Plain-English Summary\n\n`;

const passIdx6 = results.filter((r) => r.idx6Contrast.verdict === 'BUFFER-PASS');
const marginalIdx6 = results.filter((r) => r.idx6Contrast.verdict === 'MARGINAL');
const failIdx6 = results.filter((r) => r.idx6Contrast.verdict === 'FAIL');
const passIdx8 = results.filter((r) => r.idx8Contrast.verdict === 'BUFFER-PASS');
const marginalIdx8 = results.filter((r) => r.idx8Contrast.verdict === 'MARGINAL');
const failIdx8 = results.filter((r) => r.idx8Contrast.verdict === 'FAIL');
const chromaFlags = results.filter((r) => r.chromaRetentionFlag);
const appearanceFlags = results.filter((r) => r.appearanceFlag);
const gamutFails = results.filter((r) => !r.allInGamut);

md += `### Index 6 (Light filled shade) — contrast gate ≥ 4.5:1\n\n`;
md += `- **BUFFER-PASS (≥4.65):** ${passIdx6.length ? passIdx6.map((r) => `${r.name} (${r.idx6Contrast.ratio.toFixed(2)})`).join(', ') : 'none'}\n`;
md += `- **MARGINAL (4.5–4.65):** ${marginalIdx6.length ? marginalIdx6.map((r) => `${r.name} (${r.idx6Contrast.ratio.toFixed(2)})`).join(', ') : 'none'}\n`;
md += `- **FAIL (<4.5):** ${failIdx6.length ? failIdx6.map((r) => `${r.name} (${r.idx6Contrast.ratio.toFixed(2)})`).join(', ') : 'none'}\n\n`;

md += `### Index 8 (Dark filled shade) — contrast gate ≥ 4.5:1\n\n`;
md += `- **BUFFER-PASS (≥4.65):** ${passIdx8.length ? passIdx8.map((r) => `${r.name} (${r.idx8Contrast.ratio.toFixed(2)})`).join(', ') : 'none'}\n`;
md += `- **MARGINAL (4.5–4.65):** ${marginalIdx8.length ? marginalIdx8.map((r) => `${r.name} (${r.idx8Contrast.ratio.toFixed(2)})`).join(', ') : 'none'}\n`;
md += `- **FAIL (<4.5):** ${failIdx8.length ? failIdx8.map((r) => `${r.name} (${r.idx8Contrast.ratio.toFixed(2)})`).join(', ') : 'none'}\n\n`;

md += `### Chroma retention (≥70% of target required)\n\n`;
md += `${chromaFlags.length === 0 ? 'All colors retain ≥70% of target chroma at indices 5 and 6. No flags.' : chromaFlags.map((r) => `**${r.name}**: idx5=${pct(r.chromaRetention5)}, idx6=${pct(r.chromaRetention6)}`).join('; ')}\n\n`;

md += `### Gamut\n\n`;
md += `${gamutFails.length === 0 ? 'All 10 shades of all 14 colors are within sRGB gamut after clamping.' : gamutFails.map((r) => `**${r.name}**: out-of-gamut at indices ${r.outOfGamutIndices.join(', ')}`).join('; ')}\n\n`;

md += `### Appearance — bright hues (lifted ramp, index-6 should read as bright/recognizable)\n\n`;
md += `The following hues use the per-hue BRIGHT lightness ramp:\n\n`;
md += appearanceFlags
  .map((r) => {
    const idx6L = lightnessRampForHue(r.hue)[6]!;
    return `- **${r.name}** (hue ${r.hue}°): index-6 hex ${r.shades[6]!.hex}, L=${idx6L.toFixed(4)}, contrast ${r.idx6Contrast.ratio.toFixed(2)}:1 vs ${r.idx6Contrast.text} — ${r.idx6Contrast.verdict}`;
  })
  .join('\n');
md += `\n`;

const outDir = path.resolve(__dirname, '../../claude/colors-10.0');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'palette-proofs.md');
fs.writeFileSync(outPath, md, 'utf8');

console.log(`Written: ${outPath}`);

export { results };
