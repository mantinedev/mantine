import { PhoneInputCountryData } from '../phone-data';

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
