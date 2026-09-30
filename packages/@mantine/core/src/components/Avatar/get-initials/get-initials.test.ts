import { getInitials } from './get-initials';

describe('@mantine/core/Avatar/get-initials', () => {
  it('should return initials', () => {
    expect(getInitials('John Mol')).toBe('JM');
    expect(getInitials('John')).toBe('JO');
    expect(getInitials('John Doe')).toBe('JD');
    expect(getInitials('John Doe', 1)).toBe('J');
    expect(getInitials('Madonna')).toBe('MA');
    expect(getInitials('John Ronald Tolkien')).toBe('JR');
  });

  it('ignores leading, trailing and repeated whitespace', () => {
    expect(getInitials('  John Doe')).toBe('JD');
    expect(getInitials('John  Doe')).toBe('JD');
    expect(getInitials(' Jane Doe')).toBe('JD');
    expect(getInitials('John Doe  ')).toBe('JD');
    expect(getInitials('John Doe')).toBe('JD');
    expect(getInitials('   ')).toBe('');
  });

  it('operates on code points', () => {
    expect(getInitials('😀 Smile')).toBe('😀S');
    expect(getInitials('😀😃')).toBe('😀😃');
  });

  it('normalizes to NFC', () => {
    expect(getInitials('E\u0301mile Zola')).toBe('\u00C9Z');
  });

  it('splits multi-code-point emoji (ZWJ sequences, flags) into code points, a known cosmetic limit', () => {
    expect(getInitials('👨‍👩‍👧 Family')).toBe('👨F');
    expect(getInitials('🇺🇸 USA')).toBe('🇺U');
  });

  it('handles extra whitespace', () => {
    expect(getInitials('John  Doe')).toBe('JD');
    expect(getInitials('  John Doe  ')).toBe('JD');
    expect(getInitials('  John')).toBe('JO');
    expect(getInitials('   ')).toBe('');
    expect(getInitials('')).toBe('');
  });
});
