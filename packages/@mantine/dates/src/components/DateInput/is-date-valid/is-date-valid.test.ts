import { isDateValid } from './is-date-valid';

describe('@mantine/dates/is-date-valid', () => {
  it('detects invalid date', () => {
    expect(
      isDateValid({
        date: new Date('Invalid date'),
        maxDate: new Date(2025, 3, 11),
        minDate: new Date(2022, 3, 11),
      })
    ).toBe(false);
  });

  it('detects valid date when minDate/maxDate are not provided', () => {
    expect(isDateValid({ date: new Date(2023, 3, 11), maxDate: null, minDate: undefined })).toBe(
      true
    );
  });

  it('detects date that is before given minDate', () => {
    expect(
      isDateValid({
        date: new Date(2023, 3, 11),
        maxDate: undefined,
        minDate: new Date(2025, 3, 11),
      })
    ).toBe(false);
  });

  it('detects date that is after given maxDate', () => {
    expect(
      isDateValid({
        date: new Date(2028, 3, 11),
        maxDate: new Date(2025, 3, 11),
        minDate: undefined,
      })
    ).toBe(false);
  });
});
