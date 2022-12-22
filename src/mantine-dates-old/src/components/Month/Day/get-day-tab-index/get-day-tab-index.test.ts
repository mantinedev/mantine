import { getDayTabIndex } from './get-day-tab-index';

describe('@mantine/dates/Day/get-day-tab-index', () => {
  it('returns -1 if day is not focusable', () => {
    expect(
      getDayTabIndex({ focusable: false, hasValue: false, selected: false, firstInMonth: false })
    ).toBe(-1);
    expect(
      getDayTabIndex({ focusable: false, hasValue: true, selected: true, firstInMonth: true })
    ).toBe(-1);
  });

  it('returns 0 if day has value and selected', () => {
    expect(
      getDayTabIndex({ focusable: true, hasValue: true, selected: true, firstInMonth: false })
    ).toBe(0);
    expect(
      getDayTabIndex({ focusable: true, hasValue: true, selected: true, firstInMonth: true })
    ).toBe(0);
  });

  it('returns -1 if day has value and not selected', () => {
    expect(
      getDayTabIndex({ focusable: true, hasValue: true, selected: false, firstInMonth: false })
    ).toBe(-1);
    expect(
      getDayTabIndex({ focusable: true, hasValue: true, selected: false, firstInMonth: true })
    ).toBe(-1);
  });

  it('returns 0 if day does not have value but it is first in month', () => {
    expect(
      getDayTabIndex({ focusable: true, hasValue: false, selected: false, firstInMonth: true })
    ).toBe(0);
    expect(
      getDayTabIndex({ focusable: true, hasValue: false, selected: true, firstInMonth: true })
    ).toBe(0);
  });

  it('returns -1 if day does not have value and it is not first in month', () => {
    expect(
      getDayTabIndex({ focusable: true, hasValue: false, selected: false, firstInMonth: false })
    ).toBe(-1);
    expect(
      getDayTabIndex({ focusable: true, hasValue: false, selected: true, firstInMonth: false })
    ).toBe(-1);
  });
});
