import { getDigitParts } from './get-digit-parts';

describe('getDigitParts', () => {
  it('splits a positive integer into digits', () => {
    expect(getDigitParts({ value: 123 })).toEqual({
      negative: false,
      intDigits: ['1', '2', '3'],
      fracDigits: [],
      hasDecimal: false,
    });
  });

  it('splits zero', () => {
    expect(getDigitParts({ value: 0 })).toEqual({
      negative: false,
      intDigits: ['0'],
      fracDigits: [],
      hasDecimal: false,
    });
  });

  it('handles negative values', () => {
    const result = getDigitParts({ value: -42 });
    expect(result.negative).toBe(true);
    expect(result.intDigits).toEqual(['4', '2']);
  });

  it('handles decimal values', () => {
    const result = getDigitParts({ value: 3.14 });
    expect(result.intDigits).toEqual(['3']);
    expect(result.fracDigits).toEqual(['1', '4']);
    expect(result.hasDecimal).toBe(true);
  });

  it('applies decimalScale', () => {
    const result = getDigitParts({ value: 1.5, decimalScale: 3, fixedDecimalScale: true });
    expect(result.fracDigits).toEqual(['5', '0', '0']);
    expect(result.hasDecimal).toBe(true);
  });

  it('trims trailing zeros when fixedDecimalScale is false', () => {
    const result = getDigitParts({ value: 1.5, decimalScale: 3 });
    expect(result.fracDigits).toEqual(['5']);
  });

  it('removes decimal entirely when all fractional digits are zeros and fixedDecimalScale is false', () => {
    const result = getDigitParts({ value: 2, decimalScale: 2 });
    expect(result.fracDigits).toEqual([]);
    expect(result.hasDecimal).toBe(false);
  });

  it('keeps trailing zeros with fixedDecimalScale', () => {
    const result = getDigitParts({ value: 2, decimalScale: 2, fixedDecimalScale: true });
    expect(result.fracDigits).toEqual(['0', '0']);
    expect(result.hasDecimal).toBe(true);
  });

  it('handles large numbers', () => {
    const result = getDigitParts({ value: 1000000 });
    expect(result.intDigits).toEqual(['1', '0', '0', '0', '0', '0', '0']);
  });

  it('handles single digit', () => {
    const result = getDigitParts({ value: 5 });
    expect(result.intDigits).toEqual(['5']);
    expect(result.fracDigits).toEqual([]);
  });

  it('handles numbers that would produce scientific notation (large)', () => {
    const result = getDigitParts({ value: 1e21 });
    expect(result.intDigits.every((d) => /^\d$/.test(d))).toBe(true);
    expect(result.intDigits.length).toBe(22);
    expect(result.intDigits[0]).toBe('1');
  });

  it('handles numbers that would produce scientific notation (small)', () => {
    const result = getDigitParts({ value: 1e-7 });
    expect(result.intDigits).toEqual(['0']);
    expect(result.fracDigits.every((d) => /^\d$/.test(d))).toBe(true);
    expect(result.fracDigits.length).toBe(7);
    expect(result.fracDigits[6]).toBe('1');
    expect(result.hasDecimal).toBe(true);
  });

  it('handles Infinity gracefully', () => {
    const result = getDigitParts({ value: Infinity });
    expect(result.intDigits).toEqual(['0']);
  });

  it('handles NaN gracefully', () => {
    const result = getDigitParts({ value: NaN });
    expect(result.intDigits).toEqual(['0']);
  });

  it('handles large numbers with decimalScale', () => {
    const result = getDigitParts({ value: 1e21, decimalScale: 2, fixedDecimalScale: true });
    expect(result.intDigits.every((d) => /^\d$/.test(d))).toBe(true);
    expect(result.fracDigits).toEqual(['0', '0']);
  });
});
