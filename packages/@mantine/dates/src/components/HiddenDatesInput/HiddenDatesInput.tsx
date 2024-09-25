import dayjs from 'dayjs';
import { DatePickerType, DatesRangeValue, DateValue } from '../../types';
import { shiftTimezone } from '../../utils';
import { useDatesContext } from '../DatesProvider';

export type HiddenDatesInputValue = DatesRangeValue | DateValue | DateValue[];

export interface HiddenDatesInputProps {
  value: HiddenDatesInputValue;
  type: DatePickerType;
  name: string | undefined;
  form: string | undefined;
}

function formatValue(value: HiddenDatesInputValue, type: DatePickerType) {
  const ctx = useDatesContext();
  const locale = ctx.getLocale();
  dayjs.locale(locale);
  const formatDateWithTimezoneAndLocale = (date: Date) => {
    const shiftedDate = shiftTimezone('add', date, ctx.getTimezone());
    return dayjs(shiftedDate).format();
  };

  if (type === 'range' && Array.isArray(value)) {
    const [startDate, endDate] = value;
    if (!startDate) {
      return '';
    }

    if (!endDate) {
      return `${formatDateWithTimezoneAndLocale(startDate)} –`;
    }

    return `${formatDateWithTimezoneAndLocale(startDate)} – ${formatDateWithTimezoneAndLocale(endDate)}`;
  }

  if (type === 'multiple' && Array.isArray(value)) {
    return value
      .map((date) => date && formatDateWithTimezoneAndLocale(date))
      .filter(Boolean)
      .join(', ');
  }

  if (!Array.isArray(value) && value) {
    return formatDateWithTimezoneAndLocale(value);
  }

  return '';
}

export function HiddenDatesInput({ value, type, name, form }: HiddenDatesInputProps) {
  return <input type="hidden" value={formatValue(value, type)} name={name} form={form} />;
}

HiddenDatesInput.displayName = '@mantine/dates/HiddenDatesInput';
