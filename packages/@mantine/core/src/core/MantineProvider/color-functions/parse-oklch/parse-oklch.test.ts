import { parseOklch } from './parse-oklch';

describe('@mantine/core/parse-oklch', () => {
  it('parses decimal lightness syntax', () => {
    expect(parseOklch('oklch(0.55 0.15 130)')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 130,
      alpha: 1,
    });
  });

  it('parses percent lightness syntax (normalizes to 0..1)', () => {
    expect(parseOklch('oklch(55% 0.15 130)')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 130,
      alpha: 1,
    });
    expect(parseOklch('oklch(100% 0 0)')).toStrictEqual({ l: 1, c: 0, h: 0, alpha: 1 });
  });

  it('parses alpha after a slash (decimal)', () => {
    expect(parseOklch('oklch(0.55 0.15 130 / 0.5)')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 130,
      alpha: 0.5,
    });
  });

  it('parses alpha after a slash (percent)', () => {
    expect(parseOklch('oklch(0.55 0.15 130 / 50%)')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 130,
      alpha: 0.5,
    });
  });

  it('treats "none" hue as 0', () => {
    expect(parseOklch('oklch(0.55 0.15 none)')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 0,
      alpha: 1,
    });
  });

  it('parses the comma syntax', () => {
    expect(parseOklch('oklch(0.55, 0.15, 130)')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 130,
      alpha: 1,
    });
    expect(parseOklch('oklch(0.55, 0.15, 130, 0.5)')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 130,
      alpha: 0.5,
    });
  });

  it('tolerates extra internal whitespace', () => {
    expect(parseOklch('oklch(   0.55    0.15    130   /   0.5   )')).toStrictEqual({
      l: 0.55,
      c: 0.15,
      h: 130,
      alpha: 0.5,
    });
  });

  it('parses negative hue and decimal hue values', () => {
    expect(parseOklch('oklch(0.6396 0.1968 3.1869)')).toStrictEqual({
      l: 0.6396,
      c: 0.1968,
      h: 3.1869,
      alpha: 1,
    });
    expect(parseOklch('oklch(0.5 0.1 -30)')).toStrictEqual({ l: 0.5, c: 0.1, h: -30, alpha: 1 });
  });

  it('returns null for junk', () => {
    expect(parseOklch('#ffffff')).toBeNull();
    expect(parseOklch('rgb(0, 0, 0)')).toBeNull();
    expect(parseOklch('oklch()')).toBeNull();
    expect(parseOklch('oklch(0.5)')).toBeNull();
    expect(parseOklch('oklch(0.5 0.1)')).toBeNull();
    expect(parseOklch('not a color')).toBeNull();
    expect(parseOklch('oklch(foo bar baz)')).toBeNull();
  });
});
