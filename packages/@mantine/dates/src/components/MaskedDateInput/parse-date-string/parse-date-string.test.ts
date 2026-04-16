import { parseDateString } from './parse-date-string';

describe('@mantine/dates/parseDateString', () => {
  it('parses a date-only string', () => {
    expect(parseDateString('2024-03-15')).toEqual({
      day: 15,
      month: 3,
      year: 2024,
      hours: null,
      minutes: null,
      seconds: null,
    });
  });

  it('parses a datetime string', () => {
    expect(parseDateString('2024-03-15 14:30:45')).toEqual({
      day: 15,
      month: 3,
      year: 2024,
      hours: 14,
      minutes: 30,
      seconds: 45,
    });
  });

  it('returns all nulls for an empty string', () => {
    expect(parseDateString('')).toEqual({
      day: null,
      month: null,
      year: null,
      hours: null,
      minutes: null,
      seconds: null,
    });
  });

  it('returns all nulls for null', () => {
    expect(parseDateString(null)).toEqual({
      day: null,
      month: null,
      year: null,
      hours: null,
      minutes: null,
      seconds: null,
    });
  });
});
