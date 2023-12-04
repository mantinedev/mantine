import { dateStringParser } from './date-string-parser';

describe('@mantine/dates/date-string-parser', () => {
  it('detects valid date', () => {
    expect(dateStringParser('01/25/2023')).toStrictEqual(new Date(2023, 0, 25));
    expect(dateStringParser('01.05.2020')).toStrictEqual(new Date(2020, 0, 5));
  });

  it('detects invalid date', () => {
    expect(dateStringParser(null)).toBe(null);
    expect(dateStringParser('')).toBe(null);
    expect(dateStringParser('test')).toBe(null);
  });
});
