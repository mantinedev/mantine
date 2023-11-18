import { isMonthDisabled } from './is-month-disabled';

describe('@mantine/dates/is-month-disabled', () => {
  it('detects that date is disabled if it is before minDate', () => {
    expect(isMonthDisabled(new Date(2022, 1, 3), new Date(2023, 2, 3), null)).toBe(true);
    expect(isMonthDisabled(new Date(2022, 1, 3), new Date(2022, 1, 3), null)).toBe(false);
    expect(isMonthDisabled(new Date(2022, 1, 3), new Date(2021, 2, 3), null)).toBe(false);
  });

  it('detects that date is disabled if it is after maxDate', () => {
    expect(isMonthDisabled(new Date(2022, 1, 3), null, new Date(2021, 2, 3))).toBe(true);
    expect(isMonthDisabled(new Date(2022, 1, 3), null, new Date(2022, 1, 2))).toBe(false);
    expect(isMonthDisabled(new Date(2022, 1, 3), null, new Date(2024, 1, 2))).toBe(false);
  });

  it('correctly detects valid dates withing minDate and maxDate boundaries', () => {
    expect(isMonthDisabled(new Date(2022, 1, 3), new Date(2020, 1, 3), new Date(2023, 2, 3))).toBe(
      false
    );

    expect(isMonthDisabled(new Date(2019, 1, 3), new Date(2020, 1, 3), new Date(2023, 2, 3))).toBe(
      true
    );

    expect(isMonthDisabled(new Date(2024, 1, 3), new Date(2020, 1, 3), new Date(2023, 2, 3))).toBe(
      true
    );
  });
});
