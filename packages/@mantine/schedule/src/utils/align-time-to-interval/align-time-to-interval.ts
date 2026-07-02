import { clampIntervalMinutes } from '../clamp-interval-minutes/clamp-interval-minutes';
import { parseTimeString } from '../parse-time-string/parse-time-string';
import { toTimeString } from '../to-time-string/to-time-string';

/**
 * Floors a time down to the nearest interval boundary anchored at the start of the day (`00:00:00`).
 *
 * This keeps the time grid aligned to the clock: a 2-hour interval always lands on even hours
 * (`00:00`, `02:00`, …) and a 4-hour interval on `00:00`, `04:00`, … regardless of the provided
 * start time. For example `align('07:00:00', 120)` returns `'06:00:00'`.
 */
export function alignTimeToInterval(time: string, intervalMinutes: number): string {
  const intervalSeconds = clampIntervalMinutes(intervalMinutes) * 60;
  const { hours, minutes, seconds } = parseTimeString(time);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const floored = Math.floor(totalSeconds / intervalSeconds) * intervalSeconds;

  return toTimeString({
    hours: Math.floor(floored / 3600),
    minutes: Math.floor((floored % 3600) / 60),
    seconds: floored % 60,
  });
}
