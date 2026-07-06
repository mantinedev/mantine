import { MS_PER_DAY, MS_PER_HOUR, MS_PER_MINUTE, MS_PER_SECOND } from './get-timer-value';

export interface TimerDurationObject {
  /** Number of days */
  days?: number;

  /** Number of hours */
  hours?: number;

  /** Number of minutes */
  minutes?: number;

  /** Number of seconds */
  seconds?: number;

  /** Number of milliseconds */
  milliseconds?: number;
}

export type TimerDurationInput = TimerDurationObject | Date | string | number;

export function parseDuration(input: TimerDurationInput): number {
  if (typeof input === 'number') {
    return input;
  }

  if (input instanceof Date) {
    return input.getTime() - Date.now();
  }

  if (typeof input === 'string') {
    const time = new Date(input).getTime();
    return Number.isNaN(time) ? 0 : time - Date.now();
  }

  const { days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0 } = input;

  return (
    days * MS_PER_DAY +
    hours * MS_PER_HOUR +
    minutes * MS_PER_MINUTE +
    seconds * MS_PER_SECOND +
    milliseconds
  );
}
