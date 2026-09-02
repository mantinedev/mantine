/* oxlint-disable no-console */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  clampChroma,
  formatCss,
  formatHex,
  inGamut,
  modeLrgb,
  modeOklch,
  modeRgb,
  useMode,
  wcagLuminance,
} from 'culori/fn';
import {
  BRIGHT_LIGHTNESS_RAMP,
  CHROMA_ENVELOPE,
} from '../../packages/@mantine/colors-generator/src/ramp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

useMode(modeOklch);
useMode(modeRgb);
useMode(modeLrgb);

const LUMINANCE_THRESHOLD = 0.3;

const TAPER = [0.1, 0.2, 0.35, 0.55, 0.75, 0.9, 1.0, 0.7, 0.4, 0.15] as const;

interface YellowVariantSpec {
  label: string;
  hue: number;
  idx6L: number;
  peakC: number;
}

const VARIANTS: YellowVariantSpec[] = [
  { label: 'Y1 — Golden (v9-like)', hue: 85, idx6L: 0.8, peakC: 0.16 },
  { label: 'Y2 — Amber (warm)', hue: 76, idx6L: 0.77, peakC: 0.175 },
  { label: 'Y3 — Bright', hue: 100, idx6L: 0.85, peakC: 0.16 },
  { label: 'Y4 — Gold', hue: 90, idx6L: 0.81, peakC: 0.155 },
  { label: 'Y5 — Deep warm', hue: 80, idx6L: 0.75, peakC: 0.185 },
];

interface ShadeResult {
  index: number;
  l: number;
  c: number;
  h: number;
  oklch: string;
  hex: string;
  inGamut: boolean;
}

function buildVariant(spec: YellowVariantSpec): ShadeResult[] {
  const { hue, idx6L, peakC } = spec;
  const base6L = BRIGHT_LIGHTNESS_RAMP[6];

  return Array.from({ length: 10 }, (_, i) => {
    const l = BRIGHT_LIGHTNESS_RAMP[i] + (idx6L - base6L) * TAPER[i];
    const c = peakC * (CHROMA_ENVELOPE[i] / CHROMA_ENVELOPE[6]);
    const raw = { mode: 'oklch' as const, l, c, h: hue };
    const clamped = clampChroma(raw, 'oklch', 'rgb');
    const clampedL = clamped.l ?? l;
    const clampedC = clamped.c ?? c;
    const inSrgb = inGamut('rgb');
    const isInGamut = inSrgb(clamped);

    return {
      index: i,
      l: clampedL,
      c: clampedC,
      h: clamped.h ?? hue,
      oklch: formatCss(clamped),
      hex: formatHex(clamped),
      inGamut: isInGamut,
    };
  });
}

function autoContrastText(hex: string): string {
  const lum = wcagLuminance(hex) ?? 0;
  return lum > LUMINANCE_THRESHOLD ? '#000000' : '#ffffff';
}

function isStrictlyDecreasing(shades: ShadeResult[]): boolean {
  for (let i = 1; i < shades.length; i++) {
    if (shades[i]!.l >= shades[i - 1]!.l) {
      return false;
    }
  }
  return true;
}

function allInSrgb(shades: ShadeResult[]): boolean {
  return shades.every((s) => s.inGamut);
}

function renderVariantRow(spec: YellowVariantSpec, shades: ShadeResult[]): string {
  const idx6 = shades[6]!;
  const idx7 = shades[7]!;
  const idx1 = shades[1]!;
  const idx2 = shades[2]!;
  const idx8 = shades[8]!;

  const filledText = autoContrastText(idx6.hex);
  const strictDec = isStrictlyDecreasing(shades);
  const inGamut = allInSrgb(shades);

  const statusBadge = (ok: boolean, label: string) =>
    `<span style="display:inline-block;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:600;background:${ok ? '#22c55e' : '#ef4444'};color:#fff;">${label}: ${ok ? 'OK' : 'FAIL'}</span>`;

  let html = `<div class="variant-block">`;
  html += `<div class="variant-header">`;
  html += `<span class="variant-label">${spec.label}</span>`;
  html += `<span class="variant-meta">hue=${spec.hue}° idx6L=${spec.idx6L} peakC=${spec.peakC}</span>`;
  html += `<span class="variant-status">${statusBadge(strictDec, 'L-mono')} ${statusBadge(inGamut, 'gamut')}</span>`;
  html += `</div>`;

  html += `<div class="swatch-row">`;
  for (const shade of shades) {
    const isIdx6 = shade.index === 6;
    const isIdx8 = shade.index === 8;
    const isKey = isIdx6 || isIdx8;
    const textCol = autoContrastText(shade.hex);
    const keyStyle = isKey
      ? 'outline:3px solid rgba(255,255,255,0.7);box-shadow:0 0 0 3px rgba(0,0,0,0.4);z-index:1;position:relative;'
      : '';
    html += `<div class="swatch" style="background:${shade.oklch};${keyStyle}">`;
    html += `<span class="si" style="color:${textCol}">${shade.index}</span>`;
    if (isIdx6) {
      html += `<span class="sl" style="color:${textCol}">L=${shade.l.toFixed(3)}</span>`;
    } else if (isIdx8) {
      html += `<span class="sl" style="color:${textCol}">idx8</span>`;
    }
    html += `</div>`;
  }
  html += `</div>`;

  html += `<div class="btn-row">`;
  html += `<button class="btn" style="background:${idx6.oklch};color:${filledText}">Filled (idx6) — text: ${filledText === '#000000' ? 'black' : 'white'}</button>`;
  html += `<button class="btn" onmouseover="this.style.background='${idx7.oklch}'" onmouseout="this.style.background='${idx6.oklch}'" style="background:${idx6.oklch};color:${filledText}">Filled hover→idx7</button>`;
  html += `<button class="btn" style="background:${idx1.oklch};color:${idx8.oklch}">Light (idx1 bg, idx8 text)</button>`;
  html += `<button class="btn" onmouseover="this.style.background='${idx2.oklch}'" onmouseout="this.style.background='${idx1.oklch}'" style="background:${idx1.oklch};color:${idx8.oklch}">Light hover→idx2</button>`;
  html += `</div>`;

  html += `<div class="shade-detail">`;
  html += `<strong>idx6:</strong> ${idx6.oklch} — ${idx6.hex} | lum=${(wcagLuminance(idx6.hex) ?? 0).toFixed(4)} | text=${filledText === '#000000' ? 'black' : 'white'}`;
  html += `</div>`;

  html += `</div>`;
  return html;
}

const variantRows = VARIANTS.map((spec) => {
  const shades = buildVariant(spec);
  return renderVariantRow(spec, shades);
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mantine v10 — Yellow Variants</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:system-ui,sans-serif;background:#f4f4f5;padding:24px;}
  h1{font-size:20px;font-weight:700;color:#111;margin-bottom:6px;}
  .subtitle{font-size:13px;color:#555;margin-bottom:24px;}

  .variant-block{
    background:#fff;border-radius:10px;padding:20px 24px;
    margin-bottom:20px;
    box-shadow:0 1px 4px rgba(0,0,0,0.08);
  }
  .variant-header{display:flex;align-items:baseline;gap:12px;margin-bottom:12px;flex-wrap:wrap;}
  .variant-label{font-size:16px;font-weight:700;color:#111;}
  .variant-meta{font-size:12px;color:#666;font-family:monospace;}
  .variant-status{display:flex;gap:6px;margin-left:auto;}

  .swatch-row{display:flex;gap:0;margin-bottom:12px;}
  .swatch{
    width:76px;height:68px;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:2px;flex-shrink:0;
    outline:1px solid rgba(0,0,0,0.08);
  }
  .si{font-family:monospace;font-size:14px;font-weight:700;line-height:1;}
  .sl{font-family:monospace;font-size:8px;opacity:0.75;line-height:1;}

  .btn-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;}
  .btn{
    padding:7px 14px;border:none;border-radius:6px;
    font-family:system-ui,sans-serif;font-size:13px;font-weight:500;
    cursor:pointer;transition:background 100ms;white-space:nowrap;
  }

  .shade-detail{font-size:11px;color:#555;font-family:monospace;padding:4px 0;}
</style>
</head>
<body>
<h1>Mantine v10 — Yellow Palette Variants</h1>
<p class="subtitle">5 candidate yellow palettes. TAPER=[0.1,0.2,0.35,0.55,0.75,0.9,1.0,0.7,0.4,0.15]. autoContrast: luminanceThreshold=0.3 (black if lum>0.3, else white). Indices 6 (idx6L target) and 8 are outlined.</p>
${variantRows}
</body>
</html>`;

const outDir = path.resolve(__dirname, '../../claude/colors-10.0');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'yellow-variants.html');
fs.writeFileSync(outPath, html, 'utf8');

console.log(`Written: ${outPath}`);

for (const spec of VARIANTS) {
  const shades = buildVariant(spec);
  const idx6 = shades[6]!;
  const lum = wcagLuminance(idx6.hex) ?? 0;
  const text = autoContrastText(idx6.hex);
  const strictDec = isStrictlyDecreasing(shades);
  const inGamut = allInSrgb(shades);
  console.log(
    `${spec.label}: idx6 ${idx6.oklch} ${idx6.hex} lum=${lum.toFixed(4)} text=${text === '#000000' ? 'black' : 'white'} L-mono=${strictDec} in-gamut=${inGamut}`
  );
}
