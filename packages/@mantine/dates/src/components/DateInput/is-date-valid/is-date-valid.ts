import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

interface IsDateValid {
  date: DateStringValue | Date;
  maxDate: DateStringValue | Date | null | undefined;
  minDate: DateStringValue | Date | null | undefined;
}

export function isDateValid({ date, maxDate, minDate }: IsDateValid) {
  if (date == null) {
    return false;
  }

  if (Number.isNaN(new Date(date).getTime())) {
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
