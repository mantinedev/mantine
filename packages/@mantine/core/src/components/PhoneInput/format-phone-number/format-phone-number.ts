import { PhoneInputCountryData } from '../phone-data';

export function getMaskDigitCount(format: string): number {
  let count = 0;
  for (let i = 0; i < format.length; i++) {
    if (format[i] === '.') {
      count++;
    }
  }
  return count;
}

export function formatPhoneNumber(rawValue: string, country: PhoneInputCountryData): string {
  if (!rawValue) {
    return '';
  }

  const digits = rawValue.replace(/\D/g, '');
  if (!digits) {
    return '';
  }

  const { dialCode, format } = country;

  if (!digits.startsWith(dialCode)) {
    return `+${digits}`;
  }

  const nationalDigits = digits.slice(dialCode.length);
  const maxDigits = getMaskDigitCount(format);
  const clampedDigits = nationalDigits.slice(0, maxDigits);

  let result = '';
  let digitIndex = 0;

  for (let i = 0; i < format.length; i++) {
    if (digitIndex >= clampedDigits.length) {
      break;
    }

    if (format[i] === '.') {
      result += clampedDigits[digitIndex];
      digitIndex++;
    } else {
      result += format[i];
    }
  }

  return `+${dialCode} ${result}`;
}

export function clampToMask(rawValue: string, country: PhoneInputCountryData | null): string {
  const digits = rawValue.replace(/\D/g, '');
  if (!digits) {
    return '';
  }
  if (!country) {
    return `+${digits}`;
  }
  const { dialCode, format } = country;
  const maxNational = getMaskDigitCount(format);
  if (digits.startsWith(dialCode)) {
    const clamped = digits.slice(dialCode.length).slice(0, maxNational);
    return `+${dialCode}${clamped}`;
  }
  return `+${digits}`;
}
