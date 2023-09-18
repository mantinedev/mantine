import { rem, em } from './rem';

describe('@mantine/units-converters/rem', () => {
  it('returns undefined if input is undefined', () => {
    expect(rem(undefined)).toBe(undefined);
  });

  it('handles 0 correctly', () => {
    expect(rem(0)).toBe('0');
    expect(rem('0')).toBe('0');
  });

  it('converts numbers to rem', () => {
    expect(rem(16)).toBe('calc(1rem * var(--mantine-scale))');
    expect(rem(-32)).toBe('calc(-2rem * var(--mantine-scale))');
  });

  it('converts string px to rems', () => {
    expect(rem('32px')).toBe('calc(2rem * var(--mantine-scale))');
  });

  it('scales rem values', () => {
    expect(rem('2rem')).toBe('calc(2rem * var(--mantine-scale))');
  });

  it('does not modify other values', () => {
    expect(rem('10%')).toBe('10%');
    expect(rem('5vh')).toBe('5vh');
  });

  it('does not modify scaled values', () => {
    expect(rem('calc(2rem * var(--mantine-scale))')).toBe('calc(2rem * var(--mantine-scale))');
  });
});

describe('@mantine/units-converters/em', () => {
  it('converts numbers to em', () => {
    expect(em(0)).toBe('0');
    expect(em(16)).toBe('1em');
    expect(em(-32)).toBe('-2em');
  });

  it('converts string px to ems', () => {
    expect(em('32px')).toBe('2em');
  });

  it('does not modify other values', () => {
    expect(em('2em')).toBe('2em');
    expect(em('10%')).toBe('10%');
    expect(em('5vh')).toBe('5vh');
  });
});
