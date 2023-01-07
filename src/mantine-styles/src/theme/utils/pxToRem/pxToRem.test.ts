import { pxToRem } from './pxToRem';

describe('@mantine/styles/pxToRem', () => {
  it('converts numbers to rem', () => {
    expect(pxToRem(16)).toBe('1rem');
  });

  it('converts string px to rems', () => {
    expect(pxToRem('32px')).toBe('2rem');
  });

  it('does not modify other values', () => {
    expect(pxToRem('2rem')).toBe('2rem');
    expect(pxToRem('10%')).toBe('10%');
    expect(pxToRem('5vh')).toBe('5vh');
  });
});
