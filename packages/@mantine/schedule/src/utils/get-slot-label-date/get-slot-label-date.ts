import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';
import { parseTimeString } from '../parse-time-string/parse-time-string';

function isAtTime(value: dayjs.Dayjs, time: string) {
  const { hours, minutes, seconds } = parseTimeString(time);
  return value.hour() === hours && value.minute() === minutes && value.second() === seconds;
}

export function getSlotLabelDate(date: AnyDateValue, time: string) {
  const slotDate = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${time}`);

  if (isAtTime(slotDate, time)) {
    return slotDate;
  }

  return dayjs(`${dayjs(date).subtract(1, 'day').format('YYYY-MM-DD')} ${time}`);
}
