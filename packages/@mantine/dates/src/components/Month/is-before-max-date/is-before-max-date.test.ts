import { isBeforeMaxDate } from './is-before-max-date';

describe('@mantine/dates/is-before-max-date', () => {
  it('correctly detects dates that are before given maxDate', () => {
    expect(isBeforeMaxDate(new Date(2022, 3, 15), new Date(2022, 3, 12))).toBe(false);
    expect(isBeforeMaxDate(new Date(2022, 4, 15), new Date(2022, 3, 12))).toBe(false);
    expect(isBeforeMaxDate(new Date(2023, 3, 15), new Date(2022, 3, 12))).toBe(false);
  });

  it('correctly detects dates that are after given maxDate', () => {
    expect(isBeforeMaxDate(new Date(2022, 3, 15), new Date(2024, 3, 17))).toBe(true);
    expect(isBeforeMaxDate(new Date(2021, 4, 15), new Date(2022, 3, 17))).toBe(true);
    expect(isBeforeMaxDate(new Date(2020, 3, 15), new Date(2022, 3, 12))).toBe(true);
  });

  it('considers date to be before maxDate if maxDate is not provided', () => {
    expect(isBeforeMaxDate(new Date())).toBe(true);
  });

  it('considers date that is the same as maxDate to be before maxDate', () => {
    expect(isBeforeMaxDate(new Date(2022, 3, 15), new Date(2022, 3, 15))).toBe(true);
  });
});
