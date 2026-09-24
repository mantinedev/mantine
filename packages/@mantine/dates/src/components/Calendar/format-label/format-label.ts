import dayjs from 'dayjs';
import type { DateLabelFormat, DateStringValue } from '../../../types';

export type DecadeLabelFormat =
  | string
  | ((startOfDecade: DateStringValue, endOfDecade: DateStringValue) => React.ReactNode);

export function formatLabel(
  format: DateLabelFormat,
  date: DateStringValue,
  locale: string
): React.ReactNode {
  return typeof format === 'function' ? format(date) : dayjs(date).locale(locale).format(format);
}

export function formatDecadeLabel(
  format: DecadeLabelFormat,
  start: DateStringValue,
  end: DateStringValue,
  locale: string
): React.ReactNode {
  if (typeof format === 'function') {
    return format(start, end);
  }

  return `${dayjs(start).locale(locale).format(format)} – ${dayjs(end).locale(locale).format(format)}`;
}
