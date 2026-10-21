import { MaskedDateInput } from '@mantine/dates';
import type { RecurringEventFormType } from './types';
import { DEFAULT_END_TIME, DEFAULT_START_TIME } from './validation';

interface EventDateInputProps {
  form: RecurringEventFormType;
  path: 'start' | 'end';
  label: string;
  allDay: boolean;
}

/** Names of the parts of a MaskedDateInput for screen readers: "Start day", "Start hours" */
export function getDateFieldLabels(label: string) {
  return {
    dayInputLabel: `${label} day`,
    monthInputLabel: `${label} month`,
    yearInputLabel: `${label} year`,
    hoursInputLabel: `${label} hours`,
    minutesInputLabel: `${label} minutes`,
  };
}

export function EventDateInput({ form, path, label, allDay }: EventDateInputProps) {
  const inputProps = form.getInputProps(path);
  const fieldLabels = getDateFieldLabels(label);

  if (!allDay) {
    return (
      <MaskedDateInput
        key="date-time"
        label={label}
        withTime
        withAsterisk
        {...fieldLabels}
        {...inputProps}
      />
    );
  }

  const value: string | null = inputProps.value;
  const time = value?.slice(11) || (path === 'start' ? DEFAULT_START_TIME : DEFAULT_END_TIME);

  // The value keeps its time while only the date is shown, so turning All day off restores it
  return (
    <MaskedDateInput
      key="date"
      label={label}
      withAsterisk
      {...fieldLabels}
      {...inputProps}
      value={value ? value.slice(0, 10) : null}
      onChange={(date) => inputProps.onChange(date ? `${date} ${time}` : null)}
    />
  );
}
