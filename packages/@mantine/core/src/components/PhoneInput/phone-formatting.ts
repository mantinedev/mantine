import type { PhoneInputCountryData } from './phone-data';

export function getDigits(value: string): string {
  if (!value) {
    return '';
  }

  const hasPlus = value[0] === '+';
  const digits = value.replace(/\D/g, '');
  return hasPlus ? `+${digits}` : digits;
}

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

export function guessCountry(
  inputValue: string,
  countries: PhoneInputCountryData[],
  defaultCountry?: string
): PhoneInputCountryData | undefined {
  const digits = inputValue.replace(/\D/g, '');

  if (!digits) {
    if (defaultCountry) {
      const lower = defaultCountry.toLowerCase();
      return countries.find((c) => c.iso2 === lower);
    }
    return undefined;
  }

  for (let len = Math.min(4, digits.length); len > 0; len--) {
    const prefix = digits.slice(0, len);
    const matching = countries.filter((c) => c.dialCode === prefix);

    if (matching.length === 0) {
      continue;
    }

    const remainingDigits = digits.slice(len);

    const areaMatch = matching.find(
      (c) => c.areaCodes && c.areaCodes.some((ac) => remainingDigits.startsWith(ac))
    );

    if (areaMatch) {
      return areaMatch;
    }

    matching.sort((a, b) => a.priority - b.priority);
    return matching[0];
  }

  if (defaultCountry) {
    const lower = defaultCountry.toLowerCase();
    return countries.find((c) => c.iso2 === lower);
  }

  return undefined;
}

export function getCountries(
  allCountries: PhoneInputCountryData[],
  options: {
    onlyCountries?: string[];
    excludeCountries?: string[];
    preferredCountries?: string[];
  }
): { countries: PhoneInputCountryData[]; preferredList: PhoneInputCountryData[] } {
  let filtered = allCountries;

  if (options.onlyCountries && options.onlyCountries.length > 0) {
    const onlyLower = options.onlyCountries.map((c) => c.toLowerCase());
    const only = new Set(onlyLower);
    const orderMap = new Map(onlyLower.map((iso, i) => [iso, i]));
    filtered = filtered
      .filter((c) => only.has(c.iso2.toLowerCase()))
      .sort(
        (a, b) =>
          (orderMap.get(a.iso2.toLowerCase()) ?? 0) - (orderMap.get(b.iso2.toLowerCase()) ?? 0)
      );
  }

  if (options.excludeCountries && options.excludeCountries.length > 0) {
    const exclude = new Set(options.excludeCountries.map((c) => c.toLowerCase()));
    filtered = filtered.filter((c) => !exclude.has(c.iso2.toLowerCase()));
  }

  let preferredList: PhoneInputCountryData[] = [];

  if (options.preferredCountries && options.preferredCountries.length > 0) {
    const preferred = options.preferredCountries.map((c) => c.toLowerCase());
    preferredList = preferred
      .map((iso) => filtered.find((c) => c.iso2.toLowerCase() === iso))
      .filter((c): c is PhoneInputCountryData => c !== undefined);
  }

  return { countries: filtered, preferredList };
}

export function filterCountries(
  countries: PhoneInputCountryData[],
  search: string
): PhoneInputCountryData[] {
  if (!search) {
    return countries;
  }

  const term = search.toLowerCase().trim().replace(/^\+/, '');

  return countries.filter((c) => {
    if (c.name.toLowerCase().includes(term)) {
      return true;
    }

    if (c.dialCode.includes(term)) {
      return true;
    }

    if (c.iso2.toLowerCase() === term) {
      return true;
    }

    return false;
  });
}
