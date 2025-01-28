import { dateStringParser } from './date-string-parser';

describe('@mantine/dates/date-string-parser', () => {
  it('detects valid date', () => {
    expect(dateStringParser('01/25/2023')).toStrictEqual('2023-01-25');
    expect(dateStringParser('01.05.2020')).toStrictEqual('2020-01-05');
  });

  it('detects invalid date', () => {
    expect(dateStringParser(null)).toBe(null);
    expect(dateStringParser('')).toBe(null);
    expect(dateStringParser('test')).toBe(null);
  });
});
