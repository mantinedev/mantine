import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import { DateLabelFormat } from '../../../types';
import { formatDate } from '../../../utils';

interface GetWeekLabelInput {
  weekdays: Date[] | string[];
  locale: string;
  weekLabelFormat: DateLabelFormat;
  renderWeekLabel?: (params: { weekStart: Date; weekEnd: Date }) => ReactNode;
}

export function getWeekLabel({
  weekdays,
  locale,
  weekLabelFormat,
  renderWeekLabel,
}: GetWeekLabelInput) {
  if (renderWeekLabel) {
    return renderWeekLabel({
      weekStart: dayjs(weekdays[0]).toDate(),
      weekEnd: dayjs(weekdays[weekdays.length - 1]).toDate(),
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
