import { getMaskDigitCount } from '../format-phone-number/format-phone-number';
import { getDigits } from '../get-digits/get-digits';
import type { PhoneInputCountryData } from '../phone-data';

interface BuildRawValueOptions {
  canAutoDetect: boolean;
  international: boolean;
  selectedCountry: PhoneInputCountryData | null;
}

function stripNationalPrefix(nationalDigits: string, country: PhoneInputCountryData): string {
  const { nationalPrefix, format } = country;
  if (
    nationalPrefix &&
    nationalDigits.startsWith(nationalPrefix) &&
    nationalDigits.length > getMaskDigitCount(format)
  ) {
    return nationalDigits.slice(nationalPrefix.length);
  }

  return nationalDigits;
}

export function buildRawValue(inputValue: string, options: BuildRawValueOptions): string {
  const { canAutoDetect, international, selectedCountry } = options;
  const raw = getDigits(inputValue);
  const digitsOnly = raw.replace(/^\+/, '');

  if (!international && selectedCountry && !(canAutoDetect && raw.startsWith('+'))) {
    const nationalDigits = raw.startsWith('+')
      ? digitsOnly
      : stripNationalPrefix(digitsOnly, selectedCountry);
    return `+${selectedCountry.dialCode}${nationalDigits}`;
  }

  if (canAutoDetect || !selectedCountry) {
    return raw.startsWith('+') ? raw : `+${raw}`;
  }

  const nationalDigits = digitsOnly.startsWith(selectedCountry.dialCode)
    ? digitsOnly.slice(selectedCountry.dialCode.length)
    : digitsOnly;
  return `+${selectedCountry.dialCode}${stripNationalPrefix(nationalDigits, selectedCountry)}`;
}
