import dayjs from 'dayjs';
import { ReactNode } from 'react';
import { DateLabelFormat, DateStringValue } from '../../../types';
import { formatDate } from '../../../utils';

interface GetWeekLabelInput {
  weekdays: Date[] | string[];
  locale: string;
  weekLabelFormat: DateLabelFormat;
  renderWeekLabel?: (params: { weekStart: DateStringValue; weekEnd: DateStringValue }) => ReactNode;
}

function formatIncludesYear(format: DateLabelFormat) {
  return typeof format === 'string' && /Y/.test(format.replace(/\[[^\]]*\]/g, ''));
}

export function getWeekLabel({
  weekdays,
  locale,
  weekLabelFormat,
  renderWeekLabel,
}: GetWeekLabelInput) {
  const weekStart = weekdays[0];
  const weekEnd = weekdays[weekdays.length - 1];

  if (renderWeekLabel) {
    return renderWeekLabel({
      weekStart: dayjs(weekStart).format('YYYY-MM-DD'),
      weekEnd: dayjs(weekEnd).format('YYYY-MM-DD'),
    });
  }

  const start = formatDate({ locale, date: weekStart, format: weekLabelFormat });
  const end = formatDate({ locale, date: weekEnd, format: weekLabelFormat });

  if (formatIncludesYear(weekLabelFormat)) {
    return `${start} – ${end}`;
  }

  const startYear = formatDate({ locale, date: weekStart, format: 'YYYY' });
  const endYear = formatDate({ locale, date: weekEnd, format: 'YYYY' });

  if (startYear !== endYear) {
    return `${start}, ${startYear} – ${end}, ${endYear}`;
  }

  return `${start} – ${end}, ${startYear}`;
}
