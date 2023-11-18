import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import timezonePlugin from 'dayjs/plugin/timezone.js';

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

export function getTimezoneOffset(date: Date, timezone?: string) {
  if (timezone) {
    return dayjs(date).tz(timezone).utcOffset() + date.getTimezoneOffset();
  }
  return 0;
}
