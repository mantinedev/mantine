import { ALL_COUNTRIES, PhoneInputCountryData } from '../phone-data';
import { buildRawValue } from './build-raw-value';

const us: PhoneInputCountryData = {
  name: 'United States',
  iso2: 'us',
  dialCode: '1',
  format: '(...) ...-....',
  priority: 0,
  areaCodes: null,
};

const findCountry = (iso2: string) => ALL_COUNTRIES.find((country) => country.iso2 === iso2)!;

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

    it('keeps national digits that happen to start with the selected dial code', () => {
      expect(
        buildRawValue('7011234567', {
          canAutoDetect: false,
          international: true,
          selectedCountry: findCountry('kz'),
        })
      ).toBe('+77011234567');
    });

    it('recognizes an unprefixed complete international number', () => {
      expect(
        buildRawValue('12025551234', {
          canAutoDetect: false,
          international: true,
          selectedCountry: us,
        })
      ).toBe('+12025551234');
    });

    it('recognizes a short unprefixed international number', () => {
      expect(
        buildRawValue('4930123456', {
          canAutoDetect: false,
          international: true,
          selectedCountry: findCountry('de'),
        })
      ).toBe('+4930123456');
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

    it('does not duplicate the dial code in a complete unprefixed number', () => {
      expect(
        buildRawValue('12025551234', {
          canAutoDetect: true,
          international: true,
          selectedCountry: us,
        })
      ).toBe('+12025551234');

      expect(
        buildRawValue('7011234567', {
          canAutoDetect: true,
          international: true,
          selectedCountry: findCountry('kz'),
        })
      ).toBe('+77011234567');

      expect(
        buildRawValue('4930123456', {
          canAutoDetect: true,
          international: true,
          selectedCountry: findCountry('de'),
        })
      ).toBe('+4930123456');
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

  describe('with national trunk prefixes', () => {
    it.each([
      ['ru', '89991234567', '+79991234567'],
      ['kz', '87011234567', '+77011234567'],
      ['gb', '02079460958', '+442079460958'],
      ['de', '030123456', '+4930123456'],
      ['fr', '0612345678', '+33612345678'],
    ])('removes the national prefix for %s', (iso2, input, expected) => {
      const country = findCountry(iso2);

      expect(
        buildRawValue(input, {
          canAutoDetect: false,
          international: true,
          selectedCountry: country,
        })
      ).toBe(expected);
      expect(
        buildRawValue(input, {
          canAutoDetect: false,
          international: false,
          selectedCountry: country,
        })
      ).toBe(expected);
    });

    it('waits for enough digits to distinguish a trunk prefix from a national digit', () => {
      expect(
        buildRawValue('+7 8', {
          canAutoDetect: false,
          international: true,
          selectedCountry: findCountry('ru'),
        })
      ).toBe('+78');

      expect(
        buildRawValue('+7 89991234567', {
          canAutoDetect: false,
          international: true,
          selectedCountry: findCountry('ru'),
        })
      ).toBe('+79991234567');
    });

    it('can strip an ambiguous prefix from a partial number when explicitly requested', () => {
      expect(
        buildRawValue('+7 8', {
          canAutoDetect: false,
          international: true,
          selectedCountry: findCountry('ru'),
          forceNationalPrefix: true,
        })
      ).toBe('+7');
    });

    it('can preserve national prefixes when explicitly requested', () => {
      expect(
        buildRawValue('89991234567', {
          canAutoDetect: false,
          international: false,
          selectedCountry: findCountry('ru'),
          normalizeNationalPrefix: false,
        })
      ).toBe('+789991234567');
    });

    it('normalizes a national number with country auto-detection enabled', () => {
      expect(
        buildRawValue('89991234567', {
          canAutoDetect: true,
          international: true,
          selectedCountry: findCountry('ru'),
        })
      ).toBe('+79991234567');
    });

    it('does not strip national digits from countries without a trunk prefix', () => {
      expect(
        buildRawValue('0612345678', {
          canAutoDetect: false,
          international: true,
          selectedCountry: findCountry('it'),
        })
      ).toBe('+390612345678');
    });

    it('preserves international numbers without a trunk prefix', () => {
      expect(
        buildRawValue('+79991234567', {
          canAutoDetect: false,
          international: true,
          selectedCountry: findCountry('ru'),
        })
      ).toBe('+79991234567');
    });

    it('preserves international numbers beginning with a national prefix digit', () => {
      const country = findCountry('ru');
      const options = { canAutoDetect: false, international: true, selectedCountry: country };

      expect(buildRawValue('+78121234567', options)).toBe('+78121234567');
      expect(buildRawValue(buildRawValue('88001234567', options), options)).toBe('+78001234567');
    });

    it('preserves national digits while editing an already-normalized local number', () => {
      expect(
        buildRawValue('(800) 123-45-68', {
          canAutoDetect: false,
          international: false,
          selectedCountry: findCountry('ru'),
        })
      ).toBe('+78001234568');
    });
  });
});
