import { DatePickerType, DatePickerValue } from '../types';

interface GetFormattedDate<Type extends DatePickerType = 'default'> {
  type: Type;
  date: DatePickerValue<Type>;
  formatter: (d: Date) => string;
  labelSeparator: string;
}

export function getFormattedDate<Type extends DatePickerType>({
  type,
  date,
  formatter,
  labelSeparator,
}: GetFormattedDate<Type>) {
  if (type === 'default') {
    return date === null ? '' : formatter(date as Date);
  }

  if (type === 'multiple') {
    return (date as Date[]).map(formatter).join(', ');
  }

  if (type === 'range') {
    if (date[0] && date[1]) {
      return `${formatter(date[0])} ${labelSeparator} ${formatter(date[1])}`;
    }

    if (date[0]) {
      return `${formatter(date[0])} ${labelSeparator} `;
    }

    return '';
  }

  return '';
}
