import { normalizeQuarterValue } from './normalize-quarter-value';

describe('@mantine/dates/normalize-quarter-value', () => {
  it('returns null/undefined as is', () => {
    expect(normalizeQuarterValue(null)).toBe(null);
    expect(normalizeQuarterValue(undefined)).toBe(undefined);
  });

  it('normalizes a scalar value to the start of its quarter', () => {
    expect(normalizeQuarterValue('2026-05-15')).toBe('2026-04-01');
    expect(normalizeQuarterValue('2026-01-01')).toBe('2026-01-01');
    expect(normalizeQuarterValue(new Date(2026, 7, 20))).toBe('2026-07-01');
  });

  it('returns null for empty or invalid input', () => {
    expect(normalizeQuarterValue('')).toBe(null);
    expect(normalizeQuarterValue('invalid-date')).toBe(null);
  });

  it('normalizes every item when value is an array', () => {
    expect(normalizeQuarterValue(['2026-02-10', '2026-08-20'])).toStrictEqual([
      '2026-01-01',
      '2026-07-01',
    ]);
    expect(normalizeQuarterValue([null, '2026-08-20'])).toStrictEqual([null, '2026-07-01']);
  });
});
