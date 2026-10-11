import { DatePickerType, DatesRangeValue, DateValue } from '../../types';
import { toDateString, toDateTimeString } from '../../utils';

export type HiddenDatesInputValue = DatesRangeValue | DateValue | DateValue[];

export interface HiddenDatesInputProps {
  /** Value to serialize, single date, array of dates or dates range */
  value: HiddenDatesInputValue;

  /** Picker type, determines how `value` is serialized */
  type: DatePickerType;

  /** Hidden input `name` attribute */
  name: string | undefined;

  /** Hidden input `form` attribute */
  form: string | undefined;

  /** If set, dates are serialized in `YYYY-MM-DD HH:mm:ss` format instead of `YYYY-MM-DD` @default false */
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
    return value
      .map((date) => formatter(date))
      .filter(Boolean)
      .join(', ');
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
