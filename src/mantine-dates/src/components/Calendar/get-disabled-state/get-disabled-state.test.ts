import dayjs from 'dayjs';
import { getDisabledState } from './get-disabled-state';

describe('@mantine/dates/Calendar/get-disabled-state', () => {
  it('returns correct disabled state for minDate', () => {
    const disabled = getDisabledState({ month: new Date(), minDate: new Date(), maxDate: null });
    const notDisabled = getDisabledState({
      month: new Date(),
      minDate: dayjs(new Date()).subtract(10, 'years').toDate(),
      maxDate: null,
    });

    expect(disabled.nextDisabled).toBe(false);
    expect(disabled.previousDisabled).toBe(true);
    expect(notDisabled.previousDisabled).toBe(false);
    expect(notDisabled.nextDisabled).toBe(false);
  });

  it('returns correct disabled state for maxDate', () => {
    const disabled = getDisabledState({
      month: new Date(),
      minDate: null,
      maxDate: new Date(),
      amountOfMonths: 1,
    });
    const notDisabled = getDisabledState({
      month: new Date(),
      minDate: null,
      maxDate: dayjs(new Date()).add(10, 'years').toDate(),
      amountOfMonths: 1,
    });

    expect(disabled.nextDisabled).toBe(true);
    expect(disabled.previousDisabled).toBe(false);
    expect(notDisabled.previousDisabled).toBe(false);
    expect(notDisabled.nextDisabled).toBe(false);
  });

  it('returns correct disabled state for maxDate with multiple months', () => {
    const disabled = getDisabledState({
      month: new Date(),
      minDate: null,
      maxDate: dayjs(new Date()).add(1, 'months').toDate(),
      amountOfMonths: 2,
    });
    const notDisabled = getDisabledState({
      month: new Date(),
      minDate: null,
      maxDate: dayjs(new Date()).add(2, 'months').toDate(),
      amountOfMonths: 2,
    });

    expect(disabled.nextDisabled).toBe(true);
    expect(disabled.previousDisabled).toBe(false);
    expect(notDisabled.previousDisabled).toBe(false);
    expect(notDisabled.nextDisabled).toBe(false);
  });

  it('returns correct disabled state when both minDate and maxDate props are not set', () => {
    const result = getDisabledState({ month: new Date(), minDate: null, maxDate: null });
    expect(result.nextDisabled).toBe(false);
    expect(result.previousDisabled).toBe(false);
  });
});
