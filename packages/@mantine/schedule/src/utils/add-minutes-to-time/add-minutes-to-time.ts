import { parseTimeString } from '../parse-time-string/parse-time-string';
import { toTimeString } from '../to-time-string/to-time-string';

export function addMinutesToTime(time: string, minutes: number) {
  const parsed = parseTimeString(time);
  const total = parsed.hours * 3600 + parsed.minutes * 60 + parsed.seconds + minutes * 60;

  return toTimeString({
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  });
}
