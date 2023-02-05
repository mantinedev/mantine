import { rem, em } from './rem';

describe('@mantine/styles/rem', () => {
  it('converts numbers to rem', () => {
    expect(rem(0)).toBe('0rem');
    expect(rem(16)).toBe('1rem');
    expect(rem(-32)).toBe('-2rem');
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

describe('@mantine/styles/em', () => {
  it('converts numbers to em', () => {
    expect(em(0)).toBe('0em');
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
