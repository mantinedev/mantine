import { getWeekNumber } from './get-week-number';

describe('@mantine/dates/get-week-number', () => {
  it('should return the correct ISO week number for a given week', () => {
    const week = [
      new Date('2023-01-02'), // Monday
      new Date('2023-01-03'), // Tuesday
      new Date('2023-01-04'), // Wednesday
      new Date('2023-01-05'), // Thursday
      new Date('2023-01-06'), // Friday
      new Date('2023-01-07'), // Saturday
      new Date('2023-01-08'), // Sunday
    ];
    expect(getWeekNumber(week)).toBe(1);
  });

  it('should return the correct ISO week number when the week spans two years', () => {
    const week = [
      new Date('2022-12-26'), // Monday
      new Date('2022-12-27'), // Tuesday
      new Date('2022-12-28'), // Wednesday
      new Date('2022-12-29'), // Thursday
      new Date('2022-12-30'), // Friday
      new Date('2022-12-31'), // Saturday
      new Date('2023-01-01'), // Sunday
    ];
    expect(getWeekNumber(week)).toBe(52);
  });

  it('should return the correct ISO week number for a week in the middle of the year', () => {
    const week = [
      new Date('2023-06-12'), // Monday
      new Date('2023-06-13'), // Tuesday
      new Date('2023-06-14'), // Wednesday
      new Date('2023-06-15'), // Thursday
      new Date('2023-06-16'), // Friday
      new Date('2023-06-17'), // Saturday
      new Date('2023-06-18'), // Sunday
    ];
    expect(getWeekNumber(week)).toBe(24);
  });
});
