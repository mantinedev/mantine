import dayjs from 'dayjs';

interface GetDisabledState {
  /** Current selected month */
  month: Date;

  /** Min and max possible dates */
  minDate: Date;
  maxDate: Date;

  /** Amount of rendered months */
  amountOfMonths?: number;
}

export function getDisabledState({ maxDate, minDate, month, amountOfMonths }: GetDisabledState) {
  const nextDisabled =
    maxDate instanceof Date &&
    dayjs(month)
      .add(amountOfMonths - 1, 'month')
      .endOf('month')
      .isAfter(dayjs(maxDate).endOf('day').subtract(1, 'minute'));
  const previousDisabled =
    minDate instanceof Date &&
    dayjs(month).startOf('month').isBefore(dayjs(minDate).startOf('day').add(1, 'minute'));

  return { nextDisabled, previousDisabled };
}
