import { isAfterMinDate } from './is-after-min-date';

describe('@mantine/dates/is-after-min-date', () => {
  it('correctly detects dates that are after given minDate', () => {
    expect(isAfterMinDate(new Date(2022, 3, 15), new Date(2022, 3, 12))).toBe(true);
    expect(isAfterMinDate(new Date(2022, 4, 15), new Date(2022, 3, 12))).toBe(true);
    expect(isAfterMinDate(new Date(2023, 3, 15), new Date(2022, 3, 12))).toBe(true);
  });

  it('correctly detects dates that are before given minDate', () => {
    expect(isAfterMinDate(new Date(2022, 3, 15), new Date(2024, 3, 17))).toBe(false);
    expect(isAfterMinDate(new Date(2021, 4, 15), new Date(2022, 3, 17))).toBe(false);
    expect(isAfterMinDate(new Date(2020, 3, 15), new Date(2022, 3, 12))).toBe(false);
  });

  it('considers date to be after minDate if minDate is not provided', () => {
    expect(isAfterMinDate(new Date())).toBe(true);
  });

  it('considers date that is the same as minDate to be after minDate', () => {
    expect(isAfterMinDate(new Date(2022, 3, 15), new Date(2022, 3, 15))).toBe(true);
  });
});
