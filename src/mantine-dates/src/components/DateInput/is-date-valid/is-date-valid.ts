import dayjs from 'dayjs';

interface IsDateValid {
  date: Date;
  maxDate: Date | null | undefined;
  minDate: Date | null | undefined;
}

export function isDateValid({ date, maxDate, minDate }: IsDateValid) {
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
