import { getDigits } from '../get-digits/get-digits';
import type { PhoneInputCountryData } from '../phone-data';

interface BuildRawValueOptions {
  canAutoDetect: boolean;
  international: boolean;
  selectedCountry: PhoneInputCountryData | null;
}

export function buildRawValue(inputValue: string, options: BuildRawValueOptions): string {
  const { canAutoDetect, international, selectedCountry } = options;
  const raw = getDigits(inputValue);
  const digitsOnly = raw.replace(/^\+/, '');

  if (!international && selectedCountry && !(canAutoDetect && raw.startsWith('+'))) {
    return `+${selectedCountry.dialCode}${digitsOnly}`;
  }

  if (canAutoDetect || !selectedCountry) {
    return raw.startsWith('+') ? raw : `+${raw}`;
  }

  const nationalDigits = digitsOnly.startsWith(selectedCountry.dialCode)
    ? digitsOnly.slice(selectedCountry.dialCode.length)
    : digitsOnly;
  return `+${selectedCountry.dialCode}${nationalDigits}`;
}
