export type FontCategory = 'sans-serif' | 'serif' | 'display' | 'handwriting' | 'monospace';

export interface GoogleFont {
  family: string;
  category: FontCategory;
  weights: string;
}

export const SYSTEM_FONT = 'System UI';

const SYSTEM_STACK = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

const FALLBACKS: Record<FontCategory, string> = {
  'sans-serif': 'sans-serif',
  serif: 'Georgia, serif',
  display: 'sans-serif',
  handwriting: 'cursive',
  monospace: 'ui-monospace, monospace',
};

let catalog: Promise<GoogleFont[]> | null = null;

export function loadGoogleFonts() {
  catalog ??= import('./google-fonts.json').then((module) =>
    (module.default as [string, FontCategory, string][]).map(([family, category, weights]) => ({
      family,
      category,
      weights,
    }))
  );
  return catalog;
}

export function getFontStack(family: string, font: GoogleFont | undefined) {
  if (family === SYSTEM_FONT) {
    return SYSTEM_STACK;
  }

  return `'${family}', ${FALLBACKS[font?.category ?? 'sans-serif']}`;
}

export function getGoogleFontsUrl(fonts: GoogleFont[]) {
  if (fonts.length === 0) {
    return null;
  }

  const query = fonts
    .map((font) => `family=${encodeURIComponent(font.family)}:wght@${font.weights}`)
    .join('&');

  return `https://fonts.googleapis.com/css2?${query}&display=swap`;
}
