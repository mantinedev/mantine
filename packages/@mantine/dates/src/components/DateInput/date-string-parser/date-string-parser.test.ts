import { dateStringParser } from './date-string-parser';

describe('@mantine/dates/date-string-parser', () => {
  it('detects valid date', () => {
    expect(dateStringParser('01/25/2023')).toStrictEqual('2023-01-25');
    expect(dateStringParser('01.05.2020')).toStrictEqual('2020-01-05');
  });

  it('does not shift date strings to the previous day in negative UTC offsets', () => {
    expect(dateStringParser('2022-04-11')).toStrictEqual('2022-04-11');
    expect(dateStringParser('2022-04-11 12:30:00')).toStrictEqual('2022-04-11');
    expect(dateStringParser('2022-04-11T12:30')).toStrictEqual('2022-04-11');
  });

  it('rejects date strings with out of range month and day', () => {
    expect(dateStringParser('2022-13-01')).toBe(null);
    expect(dateStringParser('2022-00-01')).toBe(null);
    expect(dateStringParser('2022-01-32')).toBe(null);
    expect(dateStringParser('2022-02-30')).toBe(null);
  });

  it('rejects date strings with out of range time', () => {
    expect(dateStringParser('2022-04-11 12:60:00', true)).toBe(null);
    expect(dateStringParser('2022-04-11 12:30:60', true)).toBe(null);
  });

  it('preserves time part if withTime is set', () => {
    expect(dateStringParser('2022-04-11 12:30:00', true)).toStrictEqual('2022-04-11 12:30:00');
    expect(dateStringParser('2022-04-11', true)).toStrictEqual('2022-04-11 00:00:00');
  });

  it('detects invalid date', () => {
    expect(dateStringParser(null)).toBe(null);
    expect(dateStringParser('')).toBe(null);
    expect(dateStringParser('test')).toBe(null);
  });
});
