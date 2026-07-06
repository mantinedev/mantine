import { getTimerValue } from './get-timer-value';

const TOKEN_REGEXP = /DD|HH|mm|ss|SSS|SS|D|H|m|s|S/g;

function pad(value: number, length: number): string {
  return String(value).padStart(length, '0');
}

export function formatTimerValue(totalMs: number, format: string): string {
  const value = getTimerValue(totalMs);

  return format.replace(TOKEN_REGEXP, (token) => {
    switch (token) {
      case 'DD':
        return pad(value.days, 2);
      case 'D':
        return String(value.days);
      case 'HH':
        return pad(value.hours, 2);
      case 'H':
        return String(value.hours);
      case 'mm':
        return pad(value.minutes, 2);
      case 'm':
        return String(value.minutes);
      case 'ss':
        return pad(value.seconds, 2);
      case 's':
        return String(value.seconds);
      case 'SSS':
        return pad(value.milliseconds, 3);
      case 'SS':
        return pad(Math.floor(value.milliseconds / 10), 2);
      case 'S':
        return String(value.milliseconds);
      default:
        return token;
    }
  });
}
