import { toDateString, toDateTimeString } from './to-date-string';

describe('@mantine/dates/to-date-string', () => {
  it('converts string to date string', () => {
    expect(toDateString('2021-09-13')).toBe('2021-09-13');
    expect(toDateString('2021-09-13T00:00:00.000')).toBe('2021-09-13');
    expect(toDateString('2021-09-13 12:30:55')).toBe('2021-09-13');
    expect(toDateString('Mon Sep 13 2021')).toBe('2021-09-13');
    expect(toDateString('09/13/2021')).toBe('2021-09-13');
  });

  it('converts number to date string', () => {
    expect(toDateString(1631520000000)).toBe('2021-09-13');
  });

  it('converts Date to date string', () => {
    expect(toDateString(new Date('2021-09-13 12:00'))).toBe('2021-09-13');
  });
});

describe('@mantine/dates/to-date-time-string', () => {
  it('converts string to date-time string', () => {
    expect(toDateTimeString('2021-09-13')).toBe('2021-09-13 00:00:00');
    expect(toDateTimeString('2021-09-13T12:30:55')).toBe('2021-09-13 12:30:55');
    expect(toDateTimeString('2021-09-13 12:30:55')).toBe('2021-09-13 12:30:55');
    expect(toDateTimeString('Mon Sep 13 2021')).toBe('2021-09-13 00:00:00');
    expect(toDateTimeString('09/13/2021')).toBe('2021-09-13 00:00:00');
  });

  it('converts Date to date-time string', () => {
    expect(toDateTimeString(new Date('2021-09-13 12:30'))).toBe('2021-09-13 12:30:00');
  });
});
