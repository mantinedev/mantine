import { getTimezoneOffset } from './get-timezone-offset';

const testDate = new Date(2022, 3, 11, 20, 45, 13);

describe('@mantine/dates/get-timezone-offset', () => {
  it('test environment timezone should be "America/New_York"', () => {
    expect(testDate.getTimezoneOffset()).toBe(240);
  });

  it('should return correct timezone offset', () => {
    expect(getTimezoneOffset(testDate, 'UTC')).toEqual(240);
    expect(getTimezoneOffset(testDate, 'America/New_York')).toEqual(0);
    expect(getTimezoneOffset(testDate, 'America/Los_Angeles')).toEqual(-180);
    expect(getTimezoneOffset(testDate, 'Europe/Vienna')).toEqual(360);
  });
});
