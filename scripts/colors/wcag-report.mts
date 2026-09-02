/* oxlint-disable no-console */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  converter,
  formatHex,
  interpolate,
  modeLrgb,
  modeOklch,
  modeRgb,
  useMode,
  wcagContrast,
  wcagLuminance,
} from 'culori/fn';
import { buildDefaultPalettes } from './build-default-palettes.mts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

useMode(modeRgb);
useMode(modeOklch);
useMode(modeLrgb);

const toRgb = converter('rgb');

const DARK_SURFACE = '#0d0d0d';
const LUMINANCE_THRESHOLD = 0.3;

const AA_NORMAL = 4.5;
const AA_LARGE = 3.0;

function autoText(hex: string): string {
  const lum = wcagLuminance(hex) ?? 0;
  return lum > LUMINANCE_THRESHOLD ? '#000000' : '#ffffff';
}

function mixSrgb(colorHex: string, surfaceHex: string, t: number): string {
  const c1 = toRgb(colorHex)!;
  const c2 = toRgb(surfaceHex)!;
  const mix = interpolate([c1, c2], 'rgb');
  return formatHex(mix(t))!;
}

interface ButtonCase {
  color: string;
  scheme: 'light' | 'dark';
  variant: 'filled' | 'light';
  textHex: string;
  bgHex: string;
  contrast: number;
  aaNormal: boolean;
  aaLarge: boolean;
}

const palettes = buildDefaultPalettes();
const cases: ButtonCase[] = [];

const CHROMATIC_NAMES = new Set([
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
  'gray',
  'dark',
]);

for (const { spec, shades } of palettes) {
  if (!CHROMATIC_NAMES.has(spec.name)) {
    continue;
  }

  const s = shades;

  const idx1Hex = s[1]!.hex;
  const idx2Hex = s[2]!.hex;
  const idx6Hex = s[6]!.hex;
  const idx8Hex = s[8]!.hex;

  const lightFilledBg = idx6Hex;
  const lightFilledText = autoText(lightFilledBg);
  const lightLightBg = idx1Hex;
  const lightLightText = idx8Hex;

  const darkFilledBg = idx8Hex;
  const darkFilledText = autoText(darkFilledBg);
  const darkLightBg = mixSrgb(idx8Hex, DARK_SURFACE, 0.5);
  const darkLightText = idx2Hex;

  const addCase = (
    scheme: 'light' | 'dark',
    variant: 'filled' | 'light',
    textHex: string,
    bgHex: string
  ) => {
    const contrast = wcagContrast(textHex, bgHex) ?? 0;
    cases.push({
      color: spec.name,
      scheme,
      variant,
      textHex,
      bgHex,
      contrast,
      aaNormal: contrast >= AA_NORMAL,
      aaLarge: contrast >= AA_LARGE,
    });
  };

  addCase('light', 'filled', lightFilledText, lightFilledBg);
  addCase('light', 'light', lightLightText, lightLightBg);
  addCase('dark', 'filled', darkFilledText, darkFilledBg);
  addCase('dark', 'light', darkLightText, darkLightBg);
}

const totalCases = cases.length;
const passNormal = cases.filter((c) => c.aaNormal).length;
const failNormal = cases.filter((c) => !c.aaNormal);
const failNormalPassLarge = failNormal.filter((c) => c.aaLarge);
const failNormalFailLarge = failNormal.filter((c) => !c.aaLarge);

let md = `# WCAG 2.1 AA Button Contrast Report — Mantine v10\n\n`;
md += `Generated: ${new Date().toISOString()}\n\n`;
md += `**Informational only** — this report documents contrast ratios for FILLED and LIGHT button variants in both light and dark color schemes, using the final v10 palettes (including Y5 yellow). No palette changes are made based on these results.\n\n`;
md += `**Thresholds:** AA normal text ≥ 4.5:1 | AA large text (≥18.66px or ≥14px bold) ≥ 3:1\n\n`;
md += `**Mappings:**\n`;
md += `- Light / filled: bg = idx6; text = auto-contrast (black if lum > 0.3, else white)\n`;
md += `- Light / light: bg = idx1; text = idx8\n`;
md += `- Dark / filled: bg = idx8; text = auto-contrast\n`;
md += `- Dark / light: bg = interpolate([idx8, #0d0d0d], srgb)(0.5) (≡ color-mix 50% surface); text = idx2\n\n`;
md += `---\n\n`;

md += `## Summary\n\n`;
md += `**${passNormal} of ${totalCases} cases PASS AA-normal (≥ 4.5:1).**\n\n`;

if (failNormal.length === 0) {
  md += `All ${totalCases} cases pass AA-normal. No failures.\n\n`;
} else {
  md += `**${failNormal.length} case(s) FAIL AA-normal:**\n\n`;
  md += `| Color | Scheme | Variant | bg | text | Ratio | AA-normal | AA-large |\n`;
  md += `|-------|--------|---------|-----|------|-------|-----------|----------|\n`;
  for (const c of failNormal) {
    md += `| ${c.color} | ${c.scheme} | ${c.variant} | \`${c.bgHex}\` | \`${c.textHex}\` | ${c.contrast.toFixed(2)} | FAIL | ${c.aaLarge ? 'PASS' : 'FAIL'} |\n`;
  }
  md += `\n`;
  if (failNormalPassLarge.length > 0) {
    md += `Of those, **${failNormalPassLarge.length}** pass AA-large (≥ 3:1): ${failNormalPassLarge.map((c) => `${c.color}/${c.scheme}/${c.variant} (${c.contrast.toFixed(2)})`).join(', ')}\n\n`;
  }
  if (failNormalFailLarge.length > 0) {
    md += `**${failNormalFailLarge.length}** fail even AA-large: ${failNormalFailLarge.map((c) => `${c.color}/${c.scheme}/${c.variant} (${c.contrast.toFixed(2)})`).join(', ')}\n\n`;
  }
}

md += `---\n\n`;

md += `## Full Results (all ${totalCases} cases)\n\n`;
md += `| Color | Scheme | Variant | bg | text | Contrast | AA-normal | AA-large |\n`;
md += `|-------|--------|---------|-----|------|----------|-----------|----------|\n`;

for (const c of cases) {
  const aN = c.aaNormal ? 'PASS' : 'FAIL';
  const aL = c.aaLarge ? 'PASS' : 'FAIL';
  md += `| ${c.color} | ${c.scheme} | ${c.variant} | \`${c.bgHex}\` | \`${c.textHex}\` | ${c.contrast.toFixed(2)} | ${aN} | ${aL} |\n`;
}

md += `\n`;

const outDir = path.resolve(__dirname, '../../claude/colors-10.0');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'wcag-aa-report.md');
fs.writeFileSync(outPath, md, 'utf8');

console.log(`Written: ${outPath}`);
console.log(
  `Total cases: ${totalCases} | PASS AA-normal: ${passNormal} | FAIL: ${failNormal.length}`
);
if (failNormal.length > 0) {
  console.log('Failures:');
  for (const c of failNormal) {
    console.log(
      `  ${c.color} / ${c.scheme} / ${c.variant}: ${c.contrast.toFixed(2)}:1 (AA-large: ${c.aaLarge ? 'PASS' : 'FAIL'})`
    );
  }
}
