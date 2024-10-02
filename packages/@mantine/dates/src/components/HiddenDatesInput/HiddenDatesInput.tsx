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
  const formatDateWithTimezone = (date: Date) => {
    return shiftTimezone('remove', date, ctx.getTimezone()).toISOString();
  };

  if (type === 'range' && Array.isArray(value)) {
    const [startDate, endDate] = value;
    if (!startDate) {
      return '';
    }

    if (!endDate) {
      return `${formatDateWithTimezone(startDate)} –`;
    }

    return `${formatDateWithTimezone(startDate)} – ${formatDateWithTimezone(endDate)}`;
  }

  if (type === 'multiple' && Array.isArray(value)) {
    return value
      .map((date) => date && formatDateWithTimezone(date))
      .filter(Boolean)
      .join(', ');
  }

  if (!Array.isArray(value) && value) {
    return formatDateWithTimezone(value);
  }

  return '';
}

export function HiddenDatesInput({ value, type, name, form }: HiddenDatesInputProps) {
  return <input type="hidden" value={formatValue(value, type)} name={name} form={form} />;
}

HiddenDatesInput.displayName = '@mantine/dates/HiddenDatesInput';
