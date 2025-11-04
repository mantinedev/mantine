import { isAfterMinDate } from './is-after-min-date';

describe('@mantine/dates/is-after-min-date', () => {
  it('correctly detects dates that are after given minDate', () => {
    expect(isAfterMinDate('2022-04-15', '2022-04-12')).toBe(true);
    expect(isAfterMinDate('2022-05-15', '2022-04-12')).toBe(true);
    expect(isAfterMinDate('2023-04-15', '2022-04-12')).toBe(true);
  });

  it('correctly detects dates that are before given minDate', () => {
    expect(isAfterMinDate('2022-04-15', '2024-04-17')).toBe(false);
    expect(isAfterMinDate('2021-05-15', '2022-04-17')).toBe(false);
    expect(isAfterMinDate('2020-04-15', '2022-04-12')).toBe(false);
  });

  it('considers date to be after minDate if minDate is not provided', () => {
    expect(isAfterMinDate(new Date().toISOString().split('T')[0], undefined)).toBe(true);
  });

  it('considers date that is the same as minDate to be after minDate', () => {
    expect(isAfterMinDate('2022-04-15', '2022-04-15')).toBe(true);
  });
});
