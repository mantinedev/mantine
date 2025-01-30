import { DatePickerType, DatesRangeValue, DateValue } from '../../types';
import { toDateString, toDateTimeString } from '../../utils';

export type HiddenDatesInputValue = DatesRangeValue | DateValue | DateValue[];

export interface HiddenDatesInputProps {
  value: HiddenDatesInputValue;
  type: DatePickerType;
  name: string | undefined;
  form: string | undefined;
  withTime?: boolean;
}

interface FormatValueInput {
  value: HiddenDatesInputValue;
  type: DatePickerType;
  withTime: boolean;
}

function formatValue({ value, type, withTime }: FormatValueInput) {
  const formatter = withTime ? toDateTimeString : toDateString;

  if (type === 'range' && Array.isArray(value)) {
    const startDate = formatter(value[0]);
    const endDate = formatter(value[1]);

    if (!startDate) {
      return '';
    }

    if (!endDate) {
      return `${startDate} –`;
    }

    return `${startDate} – ${endDate}`;
  }

  if (type === 'multiple' && Array.isArray(value)) {
    return value.filter(Boolean).join(', ');
  }

  if (!Array.isArray(value) && value) {
    return formatter(value)!;
  }

  return '';
}

export function HiddenDatesInput({
  value,
  type,
  name,
  form,
  withTime = false,
}: HiddenDatesInputProps) {
  return (
    <input type="hidden" value={formatValue({ value, type, withTime })} name={name} form={form} />
  );
}

HiddenDatesInput.displayName = '@mantine/dates/HiddenDatesInput';
