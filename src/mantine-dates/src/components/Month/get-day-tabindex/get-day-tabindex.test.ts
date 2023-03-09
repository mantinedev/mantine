import { getDayTabIndex } from './get-day-tabindex';

describe('@mantine/dates/get-day-tabindex', () => {
  it('returns 0 when date is selected', () => {
    expect(
      getDayTabIndex({
        date: new Date(2020, 0, 1),
        isSelected: true,
        month: new Date(2020, 0, 1),
        hasSelectedDayInMonth: true,
      })
    ).toBe(0);
  });

  it('returns 0 when date is today and no date is selected', () => {
    expect(
      getDayTabIndex({
        date: new Date(),
        isSelected: false,
        month: new Date(),
        hasSelectedDayInMonth: false,
      })
    ).toBe(0);
  });

  it('returns 0 when date is first date in month, month does not include today and no date is selected', () => {
    expect(
      getDayTabIndex({
        date: new Date(2020, 0, 1),
        isSelected: false,
        month: new Date(2020, 0, 1),
        hasSelectedDayInMonth: false,
      })
    ).toBe(0);
  });

  it('returns -1 when another date in month is selected', () => {
    expect(
      getDayTabIndex({
        date: new Date(2020, 0, 2),
        isSelected: false,
        month: new Date(2022, 0, 2),
        hasSelectedDayInMonth: true,
      })
    ).toBe(-1);
  });

  it('returns -1 when another date in month is today', () => {
    expect(
      getDayTabIndex({
        date: new Date(2020, 0, 2),
        isSelected: false,
        month: new Date(2020, 0, 2),
        hasSelectedDayInMonth: false,
      })
    ).toBe(-1);
  });

  it('returns -1 when date is not selected, not today and not first date in month', () => {
    expect(
      getDayTabIndex({
        date: new Date(2020, 0, 2),
        isSelected: false,
        month: new Date(2020, 0, 2),
        hasSelectedDayInMonth: false,
      })
    ).toBe(-1);
  });
});
