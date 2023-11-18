import { getBaseValue } from './get-base-value';

describe('@mantine/core/get-base-value', () => {
  it('returns base value from object', () => {
    expect(getBaseValue({ base: 1 })).toBe(1);
    expect(getBaseValue({ base: 2, sm: 3 })).toBe(2);
    expect(getBaseValue({ sm: 3, md: 4 })).toBe(undefined);
  });

  it('returns value if its not an object', () => {
    expect(getBaseValue(1)).toBe(1);
    expect(getBaseValue('string')).toBe('string');
    expect(getBaseValue(null)).toBe(null);
    expect(getBaseValue(undefined)).toBe(undefined);
  });
});
