import { getSpacing } from '../../../../core';
import { getPaddingValue } from './get-padding-value';

describe('@mantine/core/AppShellMediaStyles/get-padding-value', () => {
  it('returns 0px for 0', () => {
    expect(getPaddingValue(0)).toBe('0px');
    expect(getPaddingValue('0')).toBe('0px');
  });

  it('returns spacing value for number', () => {
    expect(getPaddingValue(1)).toBe(getSpacing(1));
    expect(getPaddingValue('1')).toBe(getSpacing(1));
  });

  it('returns spacing value for string', () => {
    expect(getPaddingValue('xs')).toBe(getSpacing('xs'));
    expect(getPaddingValue('0rem')).toBe(getSpacing('0rem'));
  });
});
