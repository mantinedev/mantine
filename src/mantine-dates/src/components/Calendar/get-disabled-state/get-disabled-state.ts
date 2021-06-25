import dayjs from 'dayjs';

interface GetDisabledState {
  /** Current selected month */
  month: Date;

  /** Min and max possible dates */
  minDate: Date;
  maxDate: Date;
}

export function getDisabledState({ maxDate, minDate, month }: GetDisabledState) {
  const nextDisabled = maxDate instanceof Date && dayjs(month).endOf('month').isAfter(maxDate);
  const previousDisabled =
    minDate instanceof Date && dayjs(month).startOf('month').isBefore(minDate);

  return { nextDisabled, previousDisabled };
}
