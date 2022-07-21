import { getFloatingPosition } from './get-floating-position';

describe('@mantine/core/get-floating-position', () => {
  it('returns correct position for ltr direction', () => {
    expect(getFloatingPosition('ltr', 'right')).toBe('right');
    expect(getFloatingPosition('ltr', 'left')).toBe('left');
    expect(getFloatingPosition('ltr', 'left-start')).toBe('left-start');
    expect(getFloatingPosition('ltr', 'right-end')).toBe('right-end');
    expect(getFloatingPosition('ltr', 'top')).toBe('top');
    expect(getFloatingPosition('ltr', 'bottom')).toBe('bottom');
  });

  it('returns correct position for rtl direction', () => {
    expect(getFloatingPosition('rtl', 'left')).toBe('right');
    expect(getFloatingPosition('rtl', 'right')).toBe('left');
    expect(getFloatingPosition('rtl', 'right-start')).toBe('left-start');
    expect(getFloatingPosition('rtl', 'left-end')).toBe('right-end');
    expect(getFloatingPosition('rtl', 'top')).toBe('top');
    expect(getFloatingPosition('rtl', 'bottom')).toBe('bottom');
  });
});
