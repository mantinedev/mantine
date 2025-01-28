import { isDateValid } from './is-date-valid';

describe('@mantine/dates/is-date-valid', () => {
  it('detects invalid date', () => {
    expect(
      isDateValid({
        date: 'Invalid date',
        maxDate: '2025-04-11',
        minDate: '2022-04-11',
      })
    ).toBe(false);
  });

  it('detects valid date when minDate/maxDate are not provided', () => {
    expect(isDateValid({ date: '2023-04-11', maxDate: null, minDate: undefined })).toBe(true);
  });

  it('detects date that is before given minDate', () => {
    expect(
      isDateValid({
        date: '2023-04-11',
        maxDate: undefined,
        minDate: '2025-04-11',
      })
    ).toBe(false);
  });

  it('detects date that is after given maxDate', () => {
    expect(
      isDateValid({
        date: '2028-04-11',
        maxDate: '2025-04-11',
        minDate: undefined,
      })
    ).toBe(false);
  });
});
