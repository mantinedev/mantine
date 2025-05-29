import type { TimePickerAmPmLabels, TimePickerFormat } from '../TimePicker';
import { getFormattedTime } from './get-formatted-time/get-formatted-time';

export interface TimeValueProps {
  /** Time to format */
  value: string | Date;

  /** Time format @default `'24h'` */
  format?: TimePickerFormat;

  /** AM/PM labels @default `{ am: 'AM', pm: 'PM' }` */
  amPmLabels?: TimePickerAmPmLabels;

  /** Determines whether seconds should be displayed @default false */
  withSeconds?: boolean;
}

export function TimeValue({
  value,
  format = '24h',
  amPmLabels = { am: 'AM', pm: 'PM' },
  withSeconds = false,
}: TimeValueProps) {
  return <>{getFormattedTime({ value, format, amPmLabels, withSeconds })}</>;
}

TimeValue.displayName = '@mantine/dates/TimeValue';
