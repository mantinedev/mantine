import type { PhoneInputCountryData } from '../phone-data';
import { buildRawValue } from './build-raw-value';

const us: PhoneInputCountryData = {
  name: 'United States',
  iso2: 'us',
  dialCode: '1',
  format: '(...) ...-....',
  priority: 0,
  areaCodes: null,
};

describe('buildRawValue', () => {
  describe('with locked country (canAutoDetect=false)', () => {
    it('preserves dial code and extracts national digits', () => {
      const result = buildRawValue('+1 (202) 555', {
        canAutoDetect: false,
        international: true,
        selectedCountry: us,
      });
      expect(result).toBe('+1202555');
    });

    it('prepends dial code when input has no dial code prefix', () => {
      const result = buildRawValue('2025551234', {
        canAutoDetect: false,
        international: true,
        selectedCountry: us,
      });
      expect(result).toBe('+12025551234');
    });

    it('strips foreign dial code and treats all digits as national', () => {
      const result = buildRawValue('+442071234567', {
        canAutoDetect: false,
        international: true,
        selectedCountry: us,
      });
      expect(result).toBe('+1442071234567');
    });
  });

  describe('with auto-detect (canAutoDetect=true)', () => {
    it('preserves raw digits with + prefix when international', () => {
      const result = buildRawValue('+44207', {
        canAutoDetect: true,
        international: true,
        selectedCountry: us,
      });
      expect(result).toBe('+44207');
    });

    it('adds + prefix when missing in international mode', () => {
      const result = buildRawValue('44207', {
        canAutoDetect: true,
        international: true,
        selectedCountry: us,
      });
      expect(result).toBe('+44207');
    });
  });

  describe('with non-international mode', () => {
    it('prepends selected country dial code', () => {
      const result = buildRawValue('2025551234', {
        canAutoDetect: false,
        international: false,
        selectedCountry: us,
      });
      expect(result).toBe('+12025551234');
    });

    it('keeps typed dial code when auto-detect is enabled and input starts with +', () => {
      const result = buildRawValue('+44207', {
        canAutoDetect: true,
        international: false,
        selectedCountry: us,
      });
      expect(result).toBe('+44207');
    });

    it('prepends selected dial code when auto-detect is enabled but input has no +', () => {
      const result = buildRawValue('44207', {
        canAutoDetect: true,
        international: false,
        selectedCountry: us,
      });
      expect(result).toBe('+144207');
    });
  });

  describe('without selected country', () => {
    it('returns +digits', () => {
      const result = buildRawValue('12025551234', {
        canAutoDetect: true,
        international: true,
        selectedCountry: null,
      });
      expect(result).toBe('+12025551234');
    });
  });
});
