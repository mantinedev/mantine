import { getMaskDigitCount } from '../format-phone-number/format-phone-number';
import { getDigits } from '../get-digits/get-digits';
import type { PhoneInputCountryData } from '../phone-data';

interface BuildRawValueOptions {
  canAutoDetect: boolean;
  international: boolean;
  selectedCountry: PhoneInputCountryData | null;
  normalizeNationalPrefix?: boolean;
  forceNationalPrefix?: boolean;
  preferSelectedCountry?: boolean;
}

export function buildRawValue(inputValue: string, options: BuildRawValueOptions): string {
  const {
    canAutoDetect,
    international,
    selectedCountry,
    normalizeNationalPrefix = true,
    forceNationalPrefix = false,
    preferSelectedCountry = false,
  } = options;
  const raw = getDigits(inputValue);
  const digitsOnly = raw.replace(/^\+/, '');
  const stripNationalPrefix = (digits: string) =>
    normalizeNationalPrefix &&
    selectedCountry?.nationalPrefix &&
    digits.startsWith(selectedCountry.nationalPrefix) &&
    (forceNationalPrefix ||
      selectedCountry.nationalPrefix === '0' ||
      digits.length > getMaskDigitCount(selectedCountry.format))
      ? digits.slice(selectedCountry.nationalPrefix.length)
      : digits;

  if (!international && selectedCountry && !(canAutoDetect && raw.startsWith('+'))) {
    return `+${selectedCountry.dialCode}${stripNationalPrefix(digitsOnly)}`;
  }

  if (preferSelectedCountry && selectedCountry && !raw.startsWith('+')) {
    return `+${selectedCountry.dialCode}${stripNationalPrefix(digitsOnly)}`;
  }

  if (canAutoDetect || !selectedCountry) {
    if (selectedCountry?.nationalPrefix) {
      if (raw.startsWith(`+${selectedCountry.dialCode}`)) {
        return `+${selectedCountry.dialCode}${stripNationalPrefix(digitsOnly.slice(selectedCountry.dialCode.length))}`;
      }
      if (!raw.startsWith('+') && digitsOnly.startsWith(selectedCountry.nationalPrefix)) {
        return `+${selectedCountry.dialCode}${stripNationalPrefix(digitsOnly)}`;
      }
    }
    if (
      selectedCountry &&
      !raw.startsWith('+') &&
      digitsOnly.startsWith(selectedCountry.dialCode) &&
      selectedCountry.nationalPrefix === '8' &&
      digitsOnly.length <= getMaskDigitCount(selectedCountry.format)
    ) {
      return `+${selectedCountry.dialCode}${stripNationalPrefix(digitsOnly)}`;
    }
    return raw.startsWith('+') ? raw : `+${raw}`;
  }

  const nationalDigits =
    digitsOnly.startsWith(selectedCountry.dialCode) &&
    (raw.startsWith('+') ||
      selectedCountry.nationalPrefix !== '8' ||
      digitsOnly.length > getMaskDigitCount(selectedCountry.format))
      ? digitsOnly.slice(selectedCountry.dialCode.length)
      : digitsOnly;
  return `+${selectedCountry.dialCode}${stripNationalPrefix(nationalDigits)}`;
}
