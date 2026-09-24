import { isYearDisabled } from './is-year-disabled';

describe('@mantine/dates/is-year-disabled', () => {
  it('detects that date is disabled if it is before minDate', () => {
    expect(isYearDisabled({ year: '2022-02-03', minDate: '2023-03-03', maxDate: undefined })).toBe(
      true
    );
    expect(isYearDisabled({ year: '2022-02-03', minDate: '2022-02-03', maxDate: undefined })).toBe(
      false
    );
    expect(isYearDisabled({ year: '2022-02-03', minDate: '2021-03-03', maxDate: undefined })).toBe(
      false
    );
  });

  it('detects that date is disabled if it is after maxDate', () => {
    expect(isYearDisabled({ year: '2022-02-03', minDate: undefined, maxDate: '2021-03-03' })).toBe(
      true
    );
    expect(isYearDisabled({ year: '2022-02-03', minDate: undefined, maxDate: '2022-02-02' })).toBe(
      false
    );
    expect(isYearDisabled({ year: '2022-02-03', minDate: undefined, maxDate: '2024-02-02' })).toBe(
      false
    );
  });

  it('correctly detects valid dates within minDate and maxDate boundaries', () => {
    expect(
      isYearDisabled({ year: '2022-02-03', minDate: '2020-02-03', maxDate: '2023-03-03' })
    ).toBe(false);
    expect(
      isYearDisabled({ year: '2019-02-03', minDate: '2020-02-03', maxDate: '2023-03-03' })
    ).toBe(true);
    expect(
      isYearDisabled({ year: '2024-02-03', minDate: '2020-02-03', maxDate: '2023-03-03' })
    ).toBe(true);
  });
});
