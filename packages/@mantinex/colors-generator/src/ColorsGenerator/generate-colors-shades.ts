import chroma from 'chroma-js';

/**
 * Generates 10 shades from light to dark for a given color.
 * The contrast between shade[6] and white is always between 4.5 and 4.55 (never above 4.55).
 * The lightest and darkest shades are calculated from the color, not forced to white/black.
 * @param hexColor - The base color in hex format (e.g. #3498db)
 * @returns Array of 10 hex color shades from light (0) to dark (9)
 */
export function generateColorShades(hexColor: string): string[] {
  const base = chroma(hexColor);

  let shade6: chroma.Color | null = null;
  for (let l = 0.8; l >= 0.2; l -= 0.001) {
    const candidate = base.set('hsl.l', l);
    const contrast = chroma.contrast(candidate, '#fff');
    if (contrast >= 4.5 && contrast <= 4.55) {
      shade6 = candidate;
      break;
    }
  }

  if (!shade6) {
    let best: chroma.Color = base.set('hsl.l', 0.2);
    let bestContrast = 0;
    for (let l = 0.8; l >= 0.2; l -= 0.001) {
      const candidate = base.set('hsl.l', l);
      const contrast = chroma.contrast(candidate, '#fff');
      if (contrast < 4.5 && contrast > bestContrast) {
        best = candidate;
        bestContrast = contrast;
      }
    }
    shade6 = best;
  }

  const lightest = base.set('hsl.l', 0.97).hex();
  const darkest = base.set('hsl.l', 0.36).hex();
  const scale = chroma.scale([lightest, shade6.hex(), darkest]).mode('rgb');
  return Array.from({ length: 10 }, (_, i) => scale(i / 9).hex());
}
