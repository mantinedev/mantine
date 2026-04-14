import { ALL_COUNTRIES } from '../phone-data';
import { filterCountries, getCountries } from './get-countries';

describe('getCountries', () => {
  it('filters with onlyCountries', () => {
    const { countries } = getCountries(ALL_COUNTRIES, { onlyCountries: ['us', 'gb'] });
    expect(countries).toHaveLength(2);
    expect(countries.map((c) => c.iso2)).toContain('us');
    expect(countries.map((c) => c.iso2)).toContain('gb');
  });

  it('preserves onlyCountries order', () => {
    const { countries } = getCountries(ALL_COUNTRIES, { onlyCountries: ['gb', 'us', 'de'] });
    expect(countries[0].iso2).toBe('gb');
    expect(countries[1].iso2).toBe('us');
    expect(countries[2].iso2).toBe('de');
  });

  it('removes with excludeCountries', () => {
    const { countries } = getCountries(ALL_COUNTRIES, {
      onlyCountries: ['us', 'gb', 'de'],
      excludeCountries: ['de'],
    });
    expect(countries).toHaveLength(2);
    expect(countries.map((c) => c.iso2)).not.toContain('de');
  });

  it('returns preferredList in specified order', () => {
    const { preferredList } = getCountries(ALL_COUNTRIES, {
      preferredCountries: ['gb', 'de', 'us'],
    });
    expect(preferredList).toHaveLength(3);
    expect(preferredList[0].iso2).toBe('gb');
    expect(preferredList[1].iso2).toBe('de');
    expect(preferredList[2].iso2).toBe('us');
  });

  it('handles case-insensitive ISO2 codes', () => {
    const { countries } = getCountries(ALL_COUNTRIES, { onlyCountries: ['US', 'GB'] });
    expect(countries).toHaveLength(2);
  });

  it('returns empty preferredList when not specified', () => {
    const { preferredList } = getCountries(ALL_COUNTRIES, {});
    expect(preferredList).toHaveLength(0);
  });

  it('ignores preferred countries not in filtered list', () => {
    const { preferredList } = getCountries(ALL_COUNTRIES, {
      onlyCountries: ['us'],
      preferredCountries: ['gb'],
    });
    expect(preferredList).toHaveLength(0);
  });
});

describe('filterCountries', () => {
  it('filters by name substring', () => {
    const result = filterCountries(ALL_COUNTRIES, 'united');
    const isos = result.map((c) => c.iso2);
    expect(isos).toContain('us');
    expect(isos).toContain('gb');
  });

  it('filters by dial code substring', () => {
    const result = filterCountries(ALL_COUNTRIES, '44');
    const isos = result.map((c) => c.iso2);
    expect(isos).toContain('gb');
  });

  it('filters by ISO2 exact match', () => {
    const result = filterCountries(ALL_COUNTRIES, 'de');
    const isos = result.map((c) => c.iso2);
    expect(isos).toContain('de');
  });

  it('is case insensitive for name search', () => {
    const result = filterCountries(ALL_COUNTRIES, 'GERMANY');
    expect(result.map((c) => c.iso2)).toContain('de');
  });

  it('is case insensitive for ISO2 match', () => {
    const result = filterCountries(ALL_COUNTRIES, 'DE');
    expect(result.map((c) => c.iso2)).toContain('de');
  });

  it('returns all countries for empty search', () => {
    const result = filterCountries(ALL_COUNTRIES, '');
    expect(result).toHaveLength(ALL_COUNTRIES.length);
  });

  it('returns empty array when nothing matches', () => {
    const result = filterCountries(ALL_COUNTRIES, 'xyznonexistent');
    expect(result).toHaveLength(0);
  });

  it('strips leading + from search term for dial code matching', () => {
    const result = filterCountries(ALL_COUNTRIES, '+1');
    const isos = result.map((c) => c.iso2);
    expect(isos).toContain('us');
    expect(isos).toContain('ca');
  });

  it('matches dial code substring in the middle', () => {
    const result = filterCountries(ALL_COUNTRIES, '76');
    const isos = result.map((c) => c.iso2);
    expect(isos).toContain('ad');
  });
});
