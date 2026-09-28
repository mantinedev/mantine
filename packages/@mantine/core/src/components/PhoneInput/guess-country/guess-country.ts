import type { PhoneInputCountryData } from '../phone-data';

export function matchesAreaCode(country: PhoneInputCountryData, inputValue: string): boolean {
  if (!country.areaCodes) {
    return false;
  }

  const digits = inputValue.replace(/\D/g, '');
  if (!digits.startsWith(country.dialCode)) {
    return false;
  }

  const nationalDigits = digits.slice(country.dialCode.length);
  return country.areaCodes.some((areaCode) => nationalDigits.startsWith(areaCode));
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

    const areaMatch = matching.find((c) => matchesAreaCode(c, digits));

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
