import { ALL_COUNTRIES, type PhoneInputCountryData } from '../phone-data';
import { buildRawValue } from './build-raw-value';

const us: PhoneInputCountryData = {
  name: 'United States',
  iso2: 'us',
  dialCode: '1',
  format: '(...) ...-....',
  priority: 0,
  areaCodes: null,
};

const getCountry = (iso2: string) => ALL_COUNTRIES.find((country) => country.iso2 === iso2)!;
const ru = getCountry('ru');
const gb = getCountry('gb');
const italy = getCountry('it');

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

  describe('national trunk prefix', () => {
    const locked = (selectedCountry: PhoneInputCountryData, international: boolean) => ({
      canAutoDetect: false,
      international,
      selectedCountry,
    });

    it('strips trunk prefix typed after the dial code in international mode', () => {
      expect(buildRawValue('+7 (899) 912-34-567', locked(ru, true))).toBe('+79991234567');
    });

    it('strips trunk prefix from pasted national number in international mode', () => {
      expect(buildRawValue('8 (999) 123-45-67', locked(ru, true))).toBe('+79991234567');
    });

    it('strips trunk prefix in non-international mode', () => {
      expect(buildRawValue('89991234567', locked(ru, false))).toBe('+79991234567');
      expect(buildRawValue('8 (999) 123-45-67', locked(ru, false))).toBe('+79991234567');
    });

    it('keeps national number without trunk prefix unchanged', () => {
      expect(buildRawValue('9991234567', locked(ru, false))).toBe('+79991234567');
      expect(buildRawValue('+7 9991234567', locked(ru, true))).toBe('+79991234567');
    });

    it('keeps number with explicit dial code unchanged', () => {
      expect(buildRawValue('+79991234567', locked(ru, true))).toBe('+79991234567');
      expect(
        buildRawValue('+79991234567', {
          canAutoDetect: true,
          international: false,
          selectedCountry: ru,
        })
      ).toBe('+79991234567');
    });

    it('does not strip trunk prefix while the number still fits the mask', () => {
      expect(buildRawValue('+7 899', locked(ru, true))).toBe('+7899');
      expect(buildRawValue('8121234567', locked(ru, false))).toBe('+78121234567');
    });

    it('strips 0 trunk prefix for United Kingdom', () => {
      expect(buildRawValue('020 7946 0958', locked(gb, false))).toBe('+442079460958');
      expect(buildRawValue('+44 020 7946 0958', locked(gb, true))).toBe('+442079460958');
    });

    it('keeps leading 0 for countries without trunk prefix', () => {
      expect(buildRawValue('06 1234 5678', locked(italy, false))).toBe('+390612345678');
      expect(buildRawValue('+39 06 1234 5678', locked(italy, true))).toBe('+390612345678');
    });
  });
});
