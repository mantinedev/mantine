import dayjs from 'dayjs';
import { DatePickerType, DatePickerValue } from '../types';

interface GetFormattedDate<Type extends DatePickerType = 'default'> {
  type: Type;
  date: DatePickerValue<Type>;
  locale: string;
  format: string;
  labelSeparator: string;
}

export function getFormattedDate<Type extends DatePickerType>({
  type,
  date,
  locale,
  format,
  labelSeparator,
}: GetFormattedDate<Type>) {
  const formatDate = (value: Date) => dayjs(value).locale(locale).format(format);

  if (type === 'default') {
    return date === null ? '' : formatDate(date as Date);
  }

  if (type === 'multiple') {
    return (date as Date[]).map(formatDate).join(', ');
  }

  if (type === 'range') {
    if (date[0] && date[1]) {
      return `${formatDate(date[0])} ${labelSeparator} ${formatDate(date[1])}`;
    }

    if (date[0]) {
      return `${formatDate(date[0])} ${labelSeparator} `;
    }

    return '';
  }

  return '';
}
