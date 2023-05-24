import dayjs from 'dayjs';

export function isMonthDisabled(month: Date, minDate: Date, maxDate: Date) {
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
