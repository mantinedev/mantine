import { isNumberLike } from './is-number-like';

describe('@mantine/core/isNumberLike', () => {
  it('returns true for numbers', () => {
    expect(isNumberLike(1)).toBe(true);
    expect(isNumberLike(0)).toBe(true);
    expect(isNumberLike(-1)).toBe(true);
    expect(isNumberLike(1.1)).toBe(true);
    expect(isNumberLike(-1.1)).toBe(true);
    expect(isNumberLike(0.1)).toBe(true);
    expect(isNumberLike(-0.1)).toBe(true);
    expect(isNumberLike(Infinity)).toBe(true);
    expect(isNumberLike(-Infinity)).toBe(true);
  });

  it('returns true for strings that start with number', () => {
    expect(isNumberLike('1')).toBe(true);
    expect(isNumberLike('0')).toBe(true);
    expect(isNumberLike('-1')).toBe(true);
    expect(isNumberLike('1.1')).toBe(true);
    expect(isNumberLike('-1.1')).toBe(true);
    expect(isNumberLike('0.1')).toBe(true);
    expect(isNumberLike('-0.1')).toBe(true);
  });

  it('handles calc, var and values separated by space', () => {
    expect(isNumberLike('calc(10rem - 5px)')).toBe(true);
    expect(isNumberLike('var(--test-var)')).toBe(true);
    expect(isNumberLike('10px 5px')).toBe(true);
    expect(isNumberLike('1rem 0.5rem')).toBe(true);
  });

  it('returns false for strings that do not start with number', () => {
    expect(isNumberLike('')).toBe(false);
    expect(isNumberLike(' ')).toBe(false);
    expect(isNumberLike('a')).toBe(false);
    expect(isNumberLike('a1')).toBe(false);
  });

  it('returns false for custom sizes', () => {
    expect(isNumberLike('2xl')).toBe(false);
    expect(isNumberLike('3xl')).toBe(false);
    expect(isNumberLike('2xs')).toBe(false);
    expect(isNumberLike('3xs')).toBe(false);
  });
});
