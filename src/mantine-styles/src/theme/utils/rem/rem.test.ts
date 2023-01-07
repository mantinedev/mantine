import { rem } from './rem';

describe('@mantine/styles/rem', () => {
  it('converts numbers to rem', () => {
    expect(rem(16)).toBe('1rem');
  });

  it('converts string px to rems', () => {
    expect(rem('32px')).toBe('2rem');
  });

  it('does not modify other values', () => {
    expect(rem('2rem')).toBe('2rem');
    expect(rem('10%')).toBe('10%');
    expect(rem('5vh')).toBe('5vh');
  });
});
