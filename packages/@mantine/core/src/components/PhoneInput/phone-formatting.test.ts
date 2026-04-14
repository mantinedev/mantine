import { ALL_COUNTRIES, PhoneInputCountryData } from './phone-data';
import {
  filterCountries,
  formatPhoneNumber,
  getCountries,
  getDigits,
  guessCountry,
} from './phone-formatting';

const findCountry = (iso2: string): PhoneInputCountryData =>
  ALL_COUNTRIES.find((c) => c.iso2 === iso2)!;

describe('@mantine/core/PhoneInput/phone-formatting', () => {
  describe('getDigits', () => {
    it('strips formatting characters', () => {
      expect(getDigits('+1 (202) 555-1234')).toBe('+12025551234');
    });

    it('preserves leading +', () => {
      expect(getDigits('+44')).toBe('+44');
    });

    it('returns digits without + when input has no +', () => {
      expect(getDigits('12025551234')).toBe('12025551234');
    });

    it('returns empty string for empty input', () => {
      expect(getDigits('')).toBe('');
    });

    it('strips all non-digit characters', () => {
      expect(getDigits('abc-def')).toBe('');
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
  });

  describe('guessCountry', () => {
    it('detects US from +1202', () => {
      const result = guessCountry('+1202', ALL_COUNTRIES);
      expect(result?.iso2).toBe('us');
    });

    it('detects UK from +44207', () => {
      const result = guessCountry('+44207', ALL_COUNTRIES);
      expect(result?.iso2).toBe('gb');
    });

    it('resolves +1 to US (priority 0) not Canada (priority 1)', () => {
      const result = guessCountry('+1', ALL_COUNTRIES);
      expect(result?.iso2).toBe('us');
    });

    it('resolves +7 to Russia (priority 0) not Kazakhstan (priority 1)', () => {
      const result = guessCountry('+7', ALL_COUNTRIES);
      expect(result?.iso2).toBe('ru');
    });

    it('matches longest dial code: +375 is Belarus not +3', () => {
      const result = guessCountry('+375291234567', ALL_COUNTRIES);
      expect(result?.iso2).toBe('by');
    });

    it('detects Canada when area code matches', () => {
      const result = guessCountry('+1416', ALL_COUNTRIES);
      expect(result?.iso2).toBe('ca');
    });

    it('detects Kazakhstan when area code matches', () => {
      const result = guessCountry('+7312', ALL_COUNTRIES);
      expect(result?.iso2).toBe('kz');
    });

    it('falls back to defaultCountry when no match', () => {
      const result = guessCountry('+999999', ALL_COUNTRIES, 'us');
      expect(result?.iso2).toBe('us');
    });

    it('returns undefined when no match and no defaultCountry', () => {
      const result = guessCountry('+999999', ALL_COUNTRIES);
      expect(result).toBeUndefined();
    });

    it('returns defaultCountry for empty input', () => {
      const result = guessCountry('', ALL_COUNTRIES, 'gb');
      expect(result?.iso2).toBe('gb');
    });

    it('returns undefined for empty input without defaultCountry', () => {
      const result = guessCountry('', ALL_COUNTRIES);
      expect(result).toBeUndefined();
    });
  });

  describe('getCountries', () => {
    it('filters with onlyCountries', () => {
      const { countries } = getCountries(ALL_COUNTRIES, { onlyCountries: ['us', 'gb'] });
      expect(countries).toHaveLength(2);
      expect(countries.map((c) => c.iso2).sort()).toEqual(['gb', 'us']);
    });

    it('removes with excludeCountries', () => {
      const { countries } = getCountries(ALL_COUNTRIES, { excludeCountries: ['us'] });
      expect(countries.find((c) => c.iso2 === 'us')).toBeUndefined();
      expect(countries.length).toBe(ALL_COUNTRIES.length - 1);
    });

    it('returns preferredList in specified order', () => {
      const { preferredList } = getCountries(ALL_COUNTRIES, {
        preferredCountries: ['gb', 'de', 'us'],
      });
      expect(preferredList).toHaveLength(3);
      expect(preferredList[0].iso2).toBe('gb');
      expect(preferredList[1].iso2).toBe('de');
      expect(preferredList[2].iso2).toBe('us');
    });

    it('handles case-insensitive ISO2 codes', () => {
      const { countries } = getCountries(ALL_COUNTRIES, { onlyCountries: ['US', 'GB'] });
      expect(countries).toHaveLength(2);
    });

    it('combines onlyCountries and excludeCountries', () => {
      const { countries } = getCountries(ALL_COUNTRIES, {
        onlyCountries: ['us', 'gb', 'de'],
        excludeCountries: ['de'],
      });
      expect(countries).toHaveLength(2);
      expect(countries.find((c) => c.iso2 === 'de')).toBeUndefined();
    });

    it('returns empty preferredList when not specified', () => {
      const { preferredList } = getCountries(ALL_COUNTRIES, {});
      expect(preferredList).toHaveLength(0);
    });

    it('ignores preferred countries not in filtered list', () => {
      const { preferredList } = getCountries(ALL_COUNTRIES, {
        onlyCountries: ['us'],
        preferredCountries: ['us', 'gb'],
      });
      expect(preferredList).toHaveLength(1);
      expect(preferredList[0].iso2).toBe('us');
    });
  });

  describe('filterCountries', () => {
    const subset = ['us', 'gb', 'de', 'fr', 'in'].map(findCountry);

    it('filters by name substring', () => {
      const result = filterCountries(subset, 'united');
      expect(result).toHaveLength(2);
      expect(result.map((c) => c.iso2).sort()).toEqual(['gb', 'us']);
    });

    it('filters by dial code prefix', () => {
      const result = filterCountries(subset, '44');
      expect(result).toHaveLength(1);
      expect(result[0].iso2).toBe('gb');
    });

    it('filters by ISO2 exact match', () => {
      const result = filterCountries(subset, 'de');
      expect(result).toHaveLength(1);
      expect(result[0].iso2).toBe('de');
    });

    it('is case insensitive for name search', () => {
      const result = filterCountries(subset, 'GERMANY');
      expect(result).toHaveLength(1);
      expect(result[0].iso2).toBe('de');
    });

    it('is case insensitive for ISO2 match', () => {
      const result = filterCountries(subset, 'US');
      expect(result).toHaveLength(1);
      expect(result[0].iso2).toBe('us');
    });

    it('returns all countries for empty search', () => {
      const result = filterCountries(subset, '');
      expect(result).toHaveLength(subset.length);
    });

    it('returns empty array when nothing matches', () => {
      const result = filterCountries(subset, 'zzzzz');
      expect(result).toHaveLength(0);
    });

    it('matches dial code as prefix', () => {
      const result = filterCountries(ALL_COUNTRIES, '44');
      const isos = result.map((c) => c.iso2);
      expect(isos).toContain('gb');
    });
  });
});
