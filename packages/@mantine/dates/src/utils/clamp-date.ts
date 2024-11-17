import dayjs from 'dayjs';

export function clampDate(minDate: Date | undefined, maxDate: Date | undefined, date: Date) {
  if (!minDate && !maxDate) {
    return date;
  }

  if (minDate && dayjs(date).isBefore(minDate)) {
    return minDate;
  }

  if (maxDate && dayjs(date).isAfter(maxDate)) {
    return maxDate;
  }

  return date;
}
