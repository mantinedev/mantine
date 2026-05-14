import { ParsedTime } from '../parse-time-string/parse-time-string';

export function toTimeString({ hours, minutes, seconds }: ParsedTime) {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
