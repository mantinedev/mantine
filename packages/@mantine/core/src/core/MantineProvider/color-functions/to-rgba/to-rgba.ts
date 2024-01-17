export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

function isHexColor(hex: string): boolean {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;

  return HEX_REGEXP.test(hex);
}

function hexToRgba(color: string): RGBA {
  let hexString = color.replace('#', '');

  if (hexString.length === 3) {
    const shorthandHex = hexString.split('');
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2],
    ].join('');
  }

  if (hexString.length === 8) {
    const alpha = parseInt(hexString.slice(6, 8), 16) / 255;

    return {
      r: parseInt(hexString.slice(0, 2), 16),
      g: parseInt(hexString.slice(2, 4), 16),
      b: parseInt(hexString.slice(4, 6), 16),
      a: alpha,
    };
  }

  const parsed = parseInt(hexString, 16);
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
    .replace(/[^0-9,./]/g, '')
    .split(/[/,]/)
    .map(Number);

  return { r, g, b, a: a || 1 };
}

function hslStringToRgba(hslaString: string): RGBA {
  const hslaRegex =
    /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;

  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    };
  }

  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : undefined;

  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs((huePrime % 2) - 1));
  const m = l - chroma / 2;

  let r: number;
  let g: number;
  let b: number;

  if (huePrime >= 0 && huePrime < 1) {
    r = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r = x;
    g = 0;
    b = chroma;
  } else {
    r = chroma;
    g = 0;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1,
  };
}

export function toRgba(color: string): RGBA {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }

  if (color.startsWith('rgb')) {
    return rgbStringToRgba(color);
  }

  if (color.startsWith('hsl')) {
    return hslStringToRgba(color);
  }

  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  };
}
