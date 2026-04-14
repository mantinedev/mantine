import { getDigits } from './get-digits';

describe('getDigits', () => {
  it('strips formatting characters', () => {
    expect(getDigits('+1 (202) 555-1234')).toBe('+12025551234');
  });

  it('preserves leading +', () => {
    expect(getDigits('+44')).toBe('+44');
  });

  it('returns digits without + when input has no +', () => {
    expect(getDigits('12025551234')).toBe('12025551234');
  });

  it('returns empty string for empty input', () => {
    expect(getDigits('')).toBe('');
  });

  it('strips all non-digit characters', () => {
    expect(getDigits('abc-def')).toBe('');
  });
});
