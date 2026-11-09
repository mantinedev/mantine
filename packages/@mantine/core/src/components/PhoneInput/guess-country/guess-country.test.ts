import { ALL_COUNTRIES } from '../phone-data';
import { guessCountry, matchesAreaCode } from './guess-country';

describe('matchesAreaCode', () => {
  const canada = ALL_COUNTRIES.find((c) => c.iso2 === 'ca')!;
  const uk = ALL_COUNTRIES.find((c) => c.iso2 === 'gb')!;

  it('matches when national digits start with one of the area codes', () => {
    expect(matchesAreaCode(canada, '+1204555')).toBe(true);
  });

  it('does not match when national digits use a different area code', () => {
    expect(matchesAreaCode(canada, '+1202555')).toBe(false);
  });

  it('does not match when dial code differs', () => {
    expect(matchesAreaCode(canada, '+44204')).toBe(false);
  });

  it('returns false for countries without area codes', () => {
    expect(matchesAreaCode(uk, '+44207')).toBe(false);
  });
});

describe('guessCountry', () => {
  it('detects US from +1202', () => {
    const result = guessCountry('+1202', ALL_COUNTRIES);
    expect(result?.iso2).toBe('us');
  });

  it('detects UK from +44207', () => {
    const result = guessCountry('+44207', ALL_COUNTRIES);
    expect(result?.iso2).toBe('gb');
  });

  it('resolves +1 to US by priority over Canada', () => {
    const result = guessCountry('+1', ALL_COUNTRIES);
    expect(result?.iso2).toBe('us');
  });

  it('resolves +7 to Russia by priority over Kazakhstan', () => {
    const result = guessCountry('+7', ALL_COUNTRIES);
    expect(result?.iso2).toBe('ru');
  });

  it('matches longest dial code: +375 is Belarus not +3', () => {
    const result = guessCountry('+375', ALL_COUNTRIES);
    expect(result?.iso2).toBe('by');
  });

  it('detects Canada when area code matches', () => {
    const result = guessCountry('+1204', ALL_COUNTRIES);
    expect(result?.iso2).toBe('ca');
  });

  it('detects Kazakhstan when area code matches', () => {
    const result = guessCountry('+7312', ALL_COUNTRIES);
    expect(result?.iso2).toBe('kz');
  });

  it('falls back to defaultCountry when no match', () => {
    const result = guessCountry('+999999', ALL_COUNTRIES, 'us');
    expect(result?.iso2).toBe('us');
  });

  it('returns undefined when no match and no defaultCountry', () => {
    const result = guessCountry('+999999', ALL_COUNTRIES);
    expect(result).toBeUndefined();
  });

  it('returns defaultCountry for empty input', () => {
    const result = guessCountry('', ALL_COUNTRIES, 'gb');
    expect(result?.iso2).toBe('gb');
  });

  it('returns undefined for empty input without defaultCountry', () => {
    const result = guessCountry('', ALL_COUNTRIES);
    expect(result).toBeUndefined();
  });
});
