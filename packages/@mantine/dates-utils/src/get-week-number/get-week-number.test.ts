import { getWeekNumber } from './get-week-number';

describe('@mantine/dates/get-week-number', () => {
  it('should return the correct ISO week number for a given week', () => {
    const week = [
      '2023-01-02', // Monday
      '2023-01-03', // Tuesday
      '2023-01-04', // Wednesday
      '2023-01-05', // Thursday
      '2023-01-06', // Friday
      '2023-01-07', // Saturday
      '2023-01-08', // Sunday
    ];
    expect(getWeekNumber(week)).toBe(1);
  });

  it('should return the correct ISO week number when the week spans two years', () => {
    const week = [
      '2022-12-26', // Monday
      '2022-12-27', // Tuesday
      '2022-12-28', // Wednesday
      '2022-12-29', // Thursday
      '2022-12-30', // Friday
      '2022-12-31', // Saturday
      '2023-01-01', // Sunday
    ];
    expect(getWeekNumber(week)).toBe(52);
  });

  it('should return the correct ISO week number for a week in the middle of the year', () => {
    const week = [
      '2023-06-12', // Monday
      '2023-06-13', // Tuesday
      '2023-06-14', // Wednesday
      '2023-06-15', // Thursday
      '2023-06-16', // Friday
      '2023-06-17', // Saturday
      '2023-06-18', // Sunday
    ];
    expect(getWeekNumber(week)).toBe(24);
  });
});
