import { getLogicalArrowKey } from './get-logical-arrow-key';

describe('@mantine/schedule/get-logical-arrow-key', () => {
  it('returns the key unchanged in LTR', () => {
    expect(getLogicalArrowKey('ArrowLeft', 'ltr')).toBe('ArrowLeft');
    expect(getLogicalArrowKey('ArrowRight', undefined)).toBe('ArrowRight');
  });

  it('swaps ArrowLeft and ArrowRight in RTL', () => {
    expect(getLogicalArrowKey('ArrowLeft', 'rtl')).toBe('ArrowRight');
    expect(getLogicalArrowKey('ArrowRight', 'rtl')).toBe('ArrowLeft');
  });

  it('keeps block-axis and other keys in RTL', () => {
    expect(getLogicalArrowKey('ArrowUp', 'rtl')).toBe('ArrowUp');
    expect(getLogicalArrowKey('ArrowDown', 'rtl')).toBe('ArrowDown');
    expect(getLogicalArrowKey('Enter', 'rtl')).toBe('Enter');
  });
});
