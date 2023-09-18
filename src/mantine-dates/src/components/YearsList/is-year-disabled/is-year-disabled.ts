import dayjs from 'dayjs';

export function isYearDisabled(
  year: Date,
  minDate: Date | null | undefined,
  maxDate: Date | null | undefined
) {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && dayjs(year).isBefore(minDate, 'year')) {
    return true;
  }

  if (maxDate && dayjs(year).isAfter(maxDate, 'year')) {
    return true;
  }

  return false;
}
