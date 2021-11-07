/* eslint-disable no-bitwise */

function parseRgb(color: string) {
  return color
    .replace(/[^0-9,.]/g, '')
    .split(',')
    .map(Number);
}

function parseHex(color: string) {
  const replaced = color.replace('#', '');

  if (replaced.length !== 6) {
    return [0, 0, 0];
  }

  const parsed = parseInt(replaced, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;
  return [r, g, b];
}

export function rgba(color: string, alpha: number) {
  if (typeof color !== 'string') {
    return '';
  }

  const parser = color.startsWith('#') ? parseHex : parseRgb;
  const [r, g, b] = parser(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
