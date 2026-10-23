import { DatePickerInput } from '@mantine/dates';
import { isInSeries } from './recurrence';
import type { RecurringEventFormType } from './types';
import { useSeries } from './use-series';

export function ExceptionsInput({ form }: { form: RecurringEventFormType }) {
  const { start, recurrence, complete } = useSeries(form);

  return (
    <DatePickerInput
      type="multiple"
      valueDisplay="pills"
      valueFormat="MMM D, YYYY"
      label="Exceptions"
      placeholder="Pick dates to skip"
      minDate={start?.slice(0, 10)}
      defaultDate={start?.slice(0, 10)}
      excludeDate={(date) => !complete || !start || !isInSeries(start, recurrence, date)}
      {...form.getInputProps('exceptions')}
    />
  );
}
