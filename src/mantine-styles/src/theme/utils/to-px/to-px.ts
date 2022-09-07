const PIXELS_PER_INCH = 96;

const defaults = {
  ch: 8,
  ex: 7.15625,
  em: 16,
  rem: 16,
  in: PIXELS_PER_INCH,
  cm: PIXELS_PER_INCH / 2.54,
  mm: PIXELS_PER_INCH / 25.4,
  pt: PIXELS_PER_INCH / 72,
  pc: PIXELS_PER_INCH / 6,
  px: 1,
};

function parseUnit(str: string): [number, string] {
  const out: [number, string] = [0, 'px'];
  const currentString = String(str);
  const num = parseFloat(currentString);
  out[0] = num;
  out[1] = currentString.match(/[\d.\-+]*\s*(.*)/)[1] || '';
  return out;
}

export function toPx(str: string) {
  const [numberUnit, unit] = parseUnit(str);
  const unitFormula = unit in defaults ? defaults[unit] : 1;
  return numberUnit * unitFormula;
}
