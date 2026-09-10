import dayjs from 'dayjs';
import { DateStringValue, DayOfWeek } from '../../../types';
import { DateFormatter } from '../../../utils';
import { getEndOfWeek } from '../../Month/get-end-of-week/get-end-of-week';
import { getStartOfWeek } from '../../Month/get-start-of-week/get-start-of-week';

export function getWeekFormatter(firstDayOfWeek: DayOfWeek): DateFormatter {
  return ({ type, date, locale, format, labelSeparator }) => {
    const formatDate = (value: DateStringValue | Date) =>
      dayjs(value).locale(locale).format(format);

    const toValidString = (value: DateStringValue | Date) => {
      const parsed = dayjs(value);
      return parsed.isValid() ? parsed.format('YYYY-MM-DD') : null;
    };

    const start = (value: DateStringValue | Date) => {
      const asDateString = toValidString(value);
      return asDateString ? formatDate(getStartOfWeek(asDateString, firstDayOfWeek)) : '';
    };

    const end = (value: DateStringValue | Date) => {
      const asDateString = toValidString(value);
      return asDateString
        ? formatDate(getEndOfWeek(asDateString, firstDayOfWeek) as DateStringValue)
        : '';
    };

    const span = (value: DateStringValue | Date) => {
      const asDateString = toValidString(value);
      return asDateString ? `${start(asDateString)} ${labelSeparator} ${end(asDateString)}` : '';
    };

    if (type === 'default') {
      return date === null ? '' : span(date as DateStringValue);
    }

    if (type === 'multiple') {
      return (date as DateStringValue[]).map(span).join(', ');
    }

    if (type === 'range' && Array.isArray(date)) {
      if (date[0] && date[1]) {
        return `${start(date[0])} ${labelSeparator} ${end(date[1])}`;
      }

      if (date[0]) {
        return `${start(date[0])} ${labelSeparator} `;
      }

      return '';
    }

    return '';
  };
}
