import { Dayjs } from 'dayjs';

interface IsDateValid {
  date: Date;
  dayjs: (d: Date) => Dayjs;
  maxDate: Date;
  minDate: Date;
}

export function isDateValid({ date, dayjs, maxDate, minDate }: IsDateValid) {
  if (date == null) {
    return false;
  }

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  if (maxDate && dayjs(date).isAfter(maxDate, 'date')) {
    return false;
  }

  if (minDate && dayjs(date).isBefore(minDate, 'date')) {
    return false;
  }

  return true;
}
