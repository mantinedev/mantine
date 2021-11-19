/* eslint-disable no-bitwise */

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

function isHexColor(hex: string): boolean {
  const replaced = hex.replace('#', '');
  return (
    typeof replaced === 'string' && replaced.length === 6 && !Number.isNaN(Number(`0x${replaced}`))
  );
}

function hexToRgba(color: string): RGBA {
  const replaced = color.replace('#', '');

  const parsed = parseInt(replaced, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;

  return {
    r,
    g,
    b,
    a: 1,
  };
}

function rgbStringToRgba(color: string): RGBA {
  const [r, g, b, a] = color
    .replace(/[^0-9,.]/g, '')
    .split(',')
    .map(Number);

  return { r, g, b, a: a || 1 };
}

export function toRgba(color: string): RGBA {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }

  if (color.startsWith('rgb')) {
    return rgbStringToRgba(color);
  }

  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  };
}
