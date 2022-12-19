import dayjs from 'dayjs';

export function isYearDisabled(year: Date, minDate: Date, maxDate: Date) {
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
