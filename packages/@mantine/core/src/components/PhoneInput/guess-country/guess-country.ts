import { PhoneInputCountryData } from '../phone-data';

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
