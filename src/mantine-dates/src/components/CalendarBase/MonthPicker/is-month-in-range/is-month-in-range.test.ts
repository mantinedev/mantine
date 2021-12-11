import { isMonthInRange } from './is-month-in-range';

describe('@mantine/dates/MonthPicker/is-month-in-range', () => {
  it('detects that month is in range when minDate and maxDate are not defined', () => {
    expect(isMonthInRange({ date: new Date(2021, 1) })).toBe(true);
  });

  it('detects that month is in range when minDate is defined', () => {
    expect(isMonthInRange({ date: new Date(2021, 1), minDate: new Date(2020, 1) })).toBe(true);
  });

  it('detects that month is in range when maxDate is defined', () => {
    expect(isMonthInRange({ date: new Date(2021, 1), maxDate: new Date(2022, 1) })).toBe(true);
  });

  it('detects that month is in range when both minDate and maxDate are defined', () => {
    expect(
      isMonthInRange({
        date: new Date(2021, 1),
        minDate: new Date(2020, 1),
        maxDate: new Date(2022, 1),
      })
    ).toBe(true);
  });

  it('detects that month is out of range based on minDate', () => {
    expect(isMonthInRange({ date: new Date(2021, 1), minDate: new Date(2022, 1) })).toBe(false);
  });

  it('detects that month is out of range based on maxDate', () => {
    expect(isMonthInRange({ date: new Date(2023, 1), maxDate: new Date(2022, 1) })).toBe(false);
  });

  it('handles edge cases correctly', () => {
    expect(isMonthInRange({ date: new Date(2021, 1, 1), minDate: new Date(2021, 1, 13) })).toBe(
      true
    );
    expect(isMonthInRange({ date: new Date(2021, 0, 1), minDate: new Date(2021, 1, 13) })).toBe(
      false
    );

    expect(isMonthInRange({ date: new Date(2021, 1, 1), maxDate: new Date(2022, 1, 13) })).toBe(
      true
    );
    expect(isMonthInRange({ date: new Date(2021, 2, 1), maxDate: new Date(2022, 1, 13) })).toBe(
      true
    );
  });
});
