import dayjs from 'dayjs';

export function isMonthDisabled(
  month: Date,
  minDate: Date | null | undefined,
  maxDate: Date | null | undefined
) {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && dayjs(month).isBefore(minDate, 'month')) {
    return true;
  }

  if (maxDate && dayjs(month).isAfter(maxDate, 'month')) {
    return true;
  }

  return false;
}
