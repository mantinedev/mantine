/* oxlint-disable no-console */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { modeLrgb, modeOklch, modeRgb, useMode, wcagLuminance } from 'culori/fn';
import { buildDefaultPalettes, type PaletteEntry } from './build-default-palettes.mts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

useMode(modeRgb);
useMode(modeOklch);
useMode(modeLrgb);

const palettes = buildDefaultPalettes();

const LUMINANCE_THRESHOLD = 0.2;

function textColor(hex: string): string {
  const lum = wcagLuminance(hex) ?? 0;
  return lum > LUMINANCE_THRESHOLD ? '#000000' : '#ffffff';
}

interface ButtonSpec {
  name: string;
  filledBg: string;
  filledHover: string;
  filledText: string;
  lightBg: string;
  lightHover: string;
  lightText: string;
}

function getButtonSpec(entry: PaletteEntry, darkSection: boolean): ButtonSpec {
  const s = entry.shades;
  const name = entry.spec.name;

  const darkSurface = 'oklch(0.107 0 0)';

  if (darkSection) {
    return {
      name,
      filledBg: s[7]!.oklch,
      filledHover: s[8]!.oklch,
      filledText: textColor(s[7]!.hex),
      lightBg: `color-mix(in srgb, ${s[8]!.oklch}, ${darkSurface} 50%)`,
      lightHover: `color-mix(in srgb, ${s[7]!.oklch}, ${darkSurface} 45%)`,
      lightText: s[2]!.oklch,
    };
  }

  return {
    name,
    filledBg: s[6]!.oklch,
    filledHover: s[7]!.oklch,
    filledText: textColor(s[6]!.hex),
    lightBg: s[1]!.oklch,
    lightHover: s[2]!.oklch,
    lightText: s[9]!.oklch,
  };
}

function renderButtonStyles(entries: PaletteEntry[], darkSection: boolean): string {
  const suffix = darkSection ? '-dark' : '-light';
  return entries
    .map((entry) => {
      const b = getButtonSpec(entry, darkSection);
      const cls = `btn-${entry.spec.name}${suffix}`;
      const clsLight = `btn-light-${entry.spec.name}${suffix}`;
      if (darkSection) {
        return [
          `.${cls} { background: ${b.filledBg}; color: ${b.filledText}; }`,
          `.${cls}:hover { background: ${b.filledHover}; }`,
          `.${clsLight} { background: var(--rest-bg); color: ${b.lightText}; }`,
          `.${clsLight}:hover { background: var(--hover-bg); }`,
        ].join('\n');
      }
      return [
        `.${cls} { background: ${b.filledBg}; color: ${b.filledText}; }`,
        `.${cls}:hover { background: ${b.filledHover}; }`,
        `.${clsLight} { background: ${b.lightBg}; color: ${b.lightText}; }`,
        `.${clsLight}:hover { background: ${b.lightHover}; }`,
      ].join('\n');
    })
    .join('\n');
}

function renderSwatchRow(entry: PaletteEntry, darkSection: boolean): string {
  const isDarkBg = darkSection;
  const nameColor = isDarkBg ? '#cccccc' : '#333333';
  let html = `<div class="palette-row">`;
  html += `<div class="color-name" style="color:${nameColor}">${entry.spec.name}</div>`;

  for (const shade of entry.shades) {
    const isKey = shade.index === 6 || shade.index === 8;
    const outlineClass = isKey ? ' swatch-key' : '';
    const labelClass = shade.index === 6 ? ' label-light' : shade.index === 8 ? ' label-dark' : '';
    const textCol = textColor(shade.hex);
    html += `<div class="swatch${outlineClass}" style="background:${shade.oklch}">`;
    html += `<span class="swatch-idx" style="color:${textCol}">${shade.index}</span>`;
    if (labelClass) {
      html += `<span class="swatch-label${labelClass}" style="color:${textCol}">${shade.index === 6 ? 'light' : 'dark'}</span>`;
    }
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

function renderColorButtons(entry: PaletteEntry, darkSection: boolean): string {
  const suffix = darkSection ? '-dark' : '-light';
  const name = entry.spec.name;
  const cls = `btn-${name}${suffix}`;
  const clsLight = `btn-light-${name}${suffix}`;
  const s = entry.shades;
  let html = `<div class="button-row">`;
  html += `<div class="btn-pair">`;
  html += `<button class="btn ${cls}">${name}</button>`;
  if (darkSection) {
    html += `<button class="btn ${clsLight} dark-light-btn" data-c8="${s[8]!.oklch}" data-c7="${s[7]!.oklch}">${name} light</button>`;
  } else {
    html += `<button class="btn ${clsLight}">${name} light</button>`;
  }
  html += `</div>`;
  html += `</div>`;
  return html;
}

function renderSliderControl(): string {
  return `<div id="dark-slider-wrap" style="
    position:sticky;top:0;z-index:10;
    background:#1a1a1a;border-bottom:1px solid #333;
    padding:12px 0 14px;margin:-0px 0 20px;
  ">
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <label for="dark-mix-slider" style="font-family:system-ui,sans-serif;font-size:13px;font-weight:600;color:#ccc;white-space:nowrap;">Light-variant mix — surface %</label>
      <input id="dark-mix-slider" type="range" min="20" max="90" step="1" value="64"
        style="width:220px;accent-color:#aaa;cursor:pointer;" />
      <span id="dark-mix-readout" style="font-family:monospace;font-size:12px;color:#aaa;white-space:nowrap;"></span>
    </div>
  </div>`;
}

function renderSection(entries: PaletteEntry[], darkSection: boolean): string {
  const bg = darkSection ? '#0d0d0d' : '#ffffff';
  const labelColor = darkSection ? '#e0e0e0' : '#111111';
  const label = darkSection
    ? 'Dark context (#0d0d0d background)'
    : 'Light context (white background)';

  let html = `<section style="background:${bg};padding:32px 24px;">`;
  html += `<h2 style="font-family:system-ui,sans-serif;color:${labelColor};margin:0 0 20px;font-size:18px;font-weight:600;">${label}</h2>`;

  if (darkSection) {
    html += renderSliderControl();
  }

  for (const entry of entries) {
    html += `<div class="color-group">`;
    html += renderSwatchRow(entry, darkSection);
    html += renderColorButtons(entry, darkSection);
    html += `</div>`;
  }

  html += `</section>`;
  return html;
}

const lightStyles = renderButtonStyles(palettes, false);
const darkStyles = renderButtonStyles(palettes, true);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mantine v10 — Candidate Color Palettes</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:system-ui,sans-serif;}
  header{padding:24px;background:#f8f8f8;border-bottom:1px solid #e0e0e0;}
  header h1{font-size:20px;font-weight:700;color:#111;}
  header p{font-size:13px;color:#555;margin-top:6px;}
  .legend{font-size:12px;color:#444;margin-top:10px;}

  .palette-row{display:flex;align-items:center;margin-bottom:10px;gap:0;}
  .color-name{font-family:system-ui,sans-serif;font-size:13px;font-weight:600;width:68px;flex-shrink:0;text-align:right;padding-right:12px;}

  .swatch{
    position:relative;
    width:80px;height:72px;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    flex-shrink:0;gap:1px;
    outline:1px solid rgba(128,128,128,0.15);
  }
  .swatch-key{
    outline:3px solid rgba(255,255,255,0.6);
    box-shadow:0 0 0 3px rgba(0,0,0,0.35);
    z-index:1;position:relative;
  }
  .swatch-idx{font-family:monospace;font-size:14px;font-weight:700;line-height:1;}
  .swatch-label{font-family:monospace;font-size:8px;opacity:0.7;line-height:1;}

  .section-divider{height:1px;background:rgba(128,128,128,0.2);margin:24px 0 0;}

  .color-group{margin-bottom:22px;padding-bottom:14px;border-bottom:1px solid rgba(128,128,128,0.18);}
  .button-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;}
  .btn-pair{display:flex;gap:6px;}
  .btn{
    padding:8px 16px;
    border:none;border-radius:6px;
    font-family:system-ui,sans-serif;font-size:13px;font-weight:500;
    cursor:pointer;
    transition:background 120ms ease;
    white-space:nowrap;
  }

  ${lightStyles}
  ${darkStyles}
</style>
</head>
<body>
<header>
  <h1>Mantine v10 — Candidate Color Palettes</h1>
  <p>14 colors × 10 shades. Shades built directly from per-color spec (hue, peakC, lDelta, cScale overrides). Each swatch shows its shade index (0–9); full oklch + hex values are in candidate-palettes.md.</p>
  <div class="legend">Indices 6 (light filled) and 8 (dark filled) are outlined. Hover the buttons to test interactive states.</div>
</header>
${renderSection(palettes, false)}
${renderSection(palettes, true)}
<script>
(function () {
  var slider = document.getElementById('dark-mix-slider');
  var readout = document.getElementById('dark-mix-readout');
  var surface = '#0d0d0d';

  function update() {
    var pct = parseInt(slider.value, 10);
    var hoverPct = Math.max(pct - 7, 0);
    document.querySelectorAll('.dark-light-btn').forEach(function (btn) {
      var c8 = btn.getAttribute('data-c8');
      var c7 = btn.getAttribute('data-c7');
      btn.style.setProperty('--rest-bg', 'color-mix(in srgb, ' + c8 + ', ' + surface + ' ' + pct + '%)');
      btn.style.setProperty('--hover-bg', 'color-mix(in srgb, ' + c7 + ', ' + surface + ' ' + hoverPct + '%)');
    });
    readout.textContent = pct + '% surface · ' + (100 - pct) + '% color — color-mix(in srgb, <color>, ' + surface + ' ' + pct + '%)';
  }

  slider.addEventListener('input', update);
  update();
})();
</script>
</body>
</html>`;

const outDir = path.resolve(__dirname, '../../claude/colors-10.0');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'palette-preview.html');
fs.writeFileSync(outPath, html, 'utf8');

console.log(`Written: ${outPath}`);
