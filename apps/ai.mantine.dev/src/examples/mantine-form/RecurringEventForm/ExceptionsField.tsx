import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';
import { isInSeries, type RecurrenceRule } from './recurrence';
import type { RecurringEventFormType } from './types';
import { DATE_FORMAT } from './validation';

interface ExceptionsFieldProps {
  form: RecurringEventFormType;
  rule: RecurrenceRule | null;
}

export function ExceptionsField({ form, rule }: ExceptionsFieldProps) {
  return (
    <DatePickerInput
      type="multiple"
      valueDisplay="pills"
      label="Exceptions"
      placeholder="Pick dates to skip"
      valueFormat={DATE_FORMAT}
      minDate={rule?.start.slice(0, 10)}
      maxDate={rule?.ends === 'on' ? (rule.until ?? undefined) : undefined}
      excludeDate={(date) => !!rule && !isInSeries(rule, dayjs(date).format('YYYY-MM-DD'))}
      {...form.getInputProps('exceptions')}
    />
  );
}
