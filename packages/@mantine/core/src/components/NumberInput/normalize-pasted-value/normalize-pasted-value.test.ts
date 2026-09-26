import { normalizePastedValue } from './normalize-pasted-value';

const base = { decimalSeparator: '.', allowedDecimalSeparators: ['.', ','] };

describe('@mantine/core/NumberInput/normalize-pasted-value', () => {
  it('leaves values without separators unchanged', () => {
    expect(normalizePastedValue('1234', base)).toBe('1234');
    expect(normalizePastedValue('', base)).toBe('');
    expect(normalizePastedValue('-12', base)).toBe('-12');
  });

  it('treats a repeated separator as grouping when no thousand separator is configured', () => {
    expect(normalizePastedValue('1,234,567', base)).toBe('1234567');
    expect(normalizePastedValue('1.234.567', base)).toBe('1234567');
  });

  it('treats a single allowed separator as decimal when no thousand separator is configured', () => {
    expect(normalizePastedValue('12,5', base)).toBe('12.5');
    expect(normalizePastedValue('12.5', base)).toBe('12.5');
    expect(normalizePastedValue('1,234', base)).toBe('1.234');
  });

  it('treats separators before the decimal separator as grouping', () => {
    expect(normalizePastedValue('1,234.5', base)).toBe('1234.5');
    expect(normalizePastedValue('1.234,5', base)).toBe('1234.5');
    expect(normalizePastedValue('1,234,567.89', base)).toBe('1234567.89');
  });

  it('keeps the configured thousand separator for react-number-format to strip', () => {
    const options = { ...base, thousandSeparator: ',' };
    expect(normalizePastedValue('1,234,567', options)).toBe('1,234,567');
    expect(normalizePastedValue('1,234', options)).toBe('1,234');
    expect(normalizePastedValue('1,234,567.89', options)).toBe('1,234,567.89');
  });

  it('treats a single thousand separator not followed by a full group as decimal', () => {
    const options = { ...base, thousandSeparator: ',' };
    expect(normalizePastedValue('12,5', options)).toBe('12.5');
    expect(normalizePastedValue('12,50', options)).toBe('12.50');
    expect(normalizePastedValue('12,', options)).toBe('12.');
  });

  it('handles european formats', () => {
    const options = {
      decimalSeparator: ',',
      thousandSeparator: '.',
      allowedDecimalSeparators: ['.', ','],
    };
    expect(normalizePastedValue('1.234.567,89', options)).toBe('1.234.567,89');
    expect(normalizePastedValue('10.5', options)).toBe('10,5');
    expect(normalizePastedValue('10.500', options)).toBe('10.500');
    expect(normalizePastedValue('10,5', options)).toBe('10,5');
    expect(normalizePastedValue('1,234,567.89', options)).toBe('1234567,89');
  });

  it('handles a thousand separator that is not an allowed decimal separator', () => {
    const options = { ...base, thousandSeparator: ' ', allowedDecimalSeparators: [','] };
    expect(normalizePastedValue('1 234,5', options)).toBe('1 234.5');
    expect(normalizePastedValue('1 234 567', options)).toBe('1 234 567');
  });

  it('respects wan grouping style', () => {
    const options = { ...base, thousandSeparator: ',', thousandsGroupStyle: 'wan' as const };
    expect(normalizePastedValue('1,2345', options)).toBe('1,2345');
    expect(normalizePastedValue('1,234', options)).toBe('1.234');
  });

  it('ignores multi-character separators', () => {
    expect(normalizePastedValue('12,5', { ...base, allowedDecimalSeparators: [',,'] })).toBe(
      '12,5'
    );
  });
});
