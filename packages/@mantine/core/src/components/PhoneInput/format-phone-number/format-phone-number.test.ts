import { ALL_COUNTRIES, PhoneInputCountryData } from '../phone-data';
import { clampToMask, formatPhoneNumber, getMaskDigitCount } from './format-phone-number';

const findCountry = (iso2: string): PhoneInputCountryData =>
  ALL_COUNTRIES.find((c) => c.iso2 === iso2)!;

describe('getMaskDigitCount', () => {
  it('counts dots in US format', () => {
    expect(getMaskDigitCount('(...) ...-....')).toBe(10);
  });

  it('counts dots in UK format', () => {
    expect(getMaskDigitCount('.... ......')).toBe(10);
  });

  it('returns 0 for format without dots', () => {
    expect(getMaskDigitCount('')).toBe(0);
  });
});

describe('formatPhoneNumber', () => {
  it('formats US number correctly', () => {
    const us = findCountry('us');
    expect(formatPhoneNumber('+12025551234', us)).toBe('+1 (202) 555-1234');
  });

  it('formats UK number correctly', () => {
    const gb = findCountry('gb');
    expect(formatPhoneNumber('+442071234567', gb)).toBe('+44 2071 234567');
  });

  it('handles partial input shorter than mask', () => {
    const us = findCountry('us');
    expect(formatPhoneNumber('+1202', us)).toBe('+1 (202');
  });

  it('returns empty string for empty input', () => {
    const us = findCountry('us');
    expect(formatPhoneNumber('', us)).toBe('');
  });

  it('formats number with default mask when country has no explicit format', () => {
    const af = findCountry('af');
    expect(af.format).toContain('...');
    const result = formatPhoneNumber('+93701234567', af);
    expect(result).toBe('+93 701 234 567');
  });

  it('formats Germany number correctly', () => {
    const de = findCountry('de');
    expect(formatPhoneNumber('+493012345678', de)).toBe('+49 3012 345678');
  });

  it('formats Brazil number correctly', () => {
    const br = findCountry('br');
    expect(formatPhoneNumber('+5511987654321', br)).toBe('+55 (11) 987654321');
  });

  it('clamps digits to mask length and ignores extra digits', () => {
    const us = findCountry('us');
    expect(formatPhoneNumber('+112345678901', us)).toBe('+1 (123) 456-7890');
  });

  it('returns raw digits with + when dial code does not match', () => {
    const us = findCountry('us');
    expect(formatPhoneNumber('+44207', us)).toBe('+44207');
  });
});

describe('clampToMask', () => {
  it('clamps national digits to mask length', () => {
    const us = findCountry('us');
    expect(clampToMask('+112345678901', us)).toBe('+11234567890');
  });

  it('returns empty string for empty input', () => {
    const us = findCountry('us');
    expect(clampToMask('', us)).toBe('');
  });

  it('returns raw digits with + when dial code does not match', () => {
    const us = findCountry('us');
    expect(clampToMask('+44207', us)).toBe('+44207');
  });

  it('returns +digits when country is null', () => {
    expect(clampToMask('+12025551234', null)).toBe('+12025551234');
  });

  it('preserves dial code and clamps national part', () => {
    const gb = findCountry('gb');
    expect(clampToMask('+442071234567890', gb)).toBe('+442071234567');
  });
});
