import { buildValue } from './build-value';

describe('buildValue', () => {
  it('formats a simple integer', () => {
    expect(buildValue({ value: 42 })).toBe('42');
  });

  it('adds prefix', () => {
    expect(buildValue({ value: 42, prefix: '$ ' })).toBe('$ 42');
  });

  it('adds suffix', () => {
    expect(buildValue({ value: 42, suffix: '%' })).toBe('42%');
  });

  it('adds prefix and suffix', () => {
    expect(buildValue({ value: 42, prefix: '$ ', suffix: ' USD' })).toBe('$ 42 USD');
  });

  it('formats with thousand separator (boolean)', () => {
    expect(buildValue({ value: 1000000, thousandSeparator: true })).toBe('1,000,000');
  });

  it('formats with custom thousand separator', () => {
    expect(buildValue({ value: 1000000, thousandSeparator: ' ' })).toBe('1 000 000');
  });

  it('formats decimal values', () => {
    expect(buildValue({ value: 3.14, decimalScale: 2, fixedDecimalScale: true })).toBe('3.14');
  });

  it('formats with custom decimal separator', () => {
    expect(
      buildValue({ value: 3.14, decimalSeparator: ',', decimalScale: 2, fixedDecimalScale: true })
    ).toBe('3,14');
  });

  it('handles negative values', () => {
    expect(buildValue({ value: -42 })).toBe('-42');
  });

  it('handles negative values with prefix', () => {
    expect(buildValue({ value: -1234, prefix: '$ ', thousandSeparator: true })).toBe('$ -1,234');
  });

  it('handles zero', () => {
    expect(buildValue({ value: 0 })).toBe('0');
  });

  it('combines all formatting options', () => {
    expect(
      buildValue({
        value: 1234.5,
        prefix: '$ ',
        suffix: ' USD',
        thousandSeparator: true,
        decimalScale: 2,
        fixedDecimalScale: true,
      })
    ).toBe('$ 1,234.50 USD');
  });

  it('does not add separator for numbers under 1000', () => {
    expect(buildValue({ value: 999, thousandSeparator: true })).toBe('999');
  });
});
