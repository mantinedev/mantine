import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import { DateLabelFormat, DateStringValue } from '../../../types';
import { formatDate } from '../../../utils';

interface GetWeekLabelInput {
  weekdays: Date[] | string[];
  locale: string;
  weekLabelFormat: DateLabelFormat;
  renderWeekLabel?: (params: { weekStart: DateStringValue; weekEnd: DateStringValue }) => ReactNode;
}

export function getWeekLabel({
  weekdays,
  locale,
  weekLabelFormat,
  renderWeekLabel,
}: GetWeekLabelInput) {
  if (renderWeekLabel) {
    return renderWeekLabel({
      weekStart: dayjs(weekdays[0]).format('YYYY-MM-DD'),
      weekEnd: dayjs(weekdays[weekdays.length - 1]).format('YYYY-MM-DD'),
    });
  }

  return `${formatDate({
    locale,
    date: weekdays[0],
    format: weekLabelFormat,
  })} – ${formatDate({
    locale,
    date: weekdays[weekdays.length - 1],
    format: weekLabelFormat,
  })}, ${formatDate({ locale, date: weekdays[0], format: 'YYYY' })}`;
}
