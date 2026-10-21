import { Pill } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { formatDate } from './payload';
import { isInSeries } from './recurrence';
import type { RecurringEventFormType } from './types';
import { useRecurrenceRule } from './useRecurrenceRule';

export function ExceptionsField({ form }: { form: RecurringEventFormType }) {
  const rule = useRecurrenceRule(form);
  const exceptions = form.useWatchValue('exceptions');

  const addException = (date: string | null) => {
    if (date && !exceptions.includes(date)) {
      form.setFieldValue('exceptions', [...exceptions, date].sort());
    }
  };

  const removeException = (date: string) => {
    form.setFieldValue(
      'exceptions',
      exceptions.filter((item) => item !== date)
    );
  };

  return (
    <div>
      {/* The picker only adds dates: the collected list is shown as pills below */}
      <DatePickerInput
        label="Exceptions"
        placeholder={rule ? 'Pick a date to skip' : 'Complete the schedule first'}
        valueFormat="MMMM D, YYYY"
        disabled={!rule}
        minDate={rule?.start}
        defaultDate={rule?.start}
        excludeDate={(date) => !rule || exceptions.includes(date) || !isInSeries(rule, date)}
        {...form.getInputProps('exceptions')}
        value={null}
        onChange={addException}
      />
      {exceptions.length > 0 && (
        <Pill.Group mt="xs">
          {exceptions.map((date) => (
            <Pill
              key={date}
              withRemoveButton
              removeButtonProps={{ 'aria-label': `Remove ${formatDate(date)}` }}
              onRemove={() => removeException(date)}
            >
              {formatDate(date)}
            </Pill>
          ))}
        </Pill.Group>
      )}
    </div>
  );
}
