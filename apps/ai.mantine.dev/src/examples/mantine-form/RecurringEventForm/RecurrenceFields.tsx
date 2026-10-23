import { Fieldset, Stack, Switch } from '@mantine/core';
import { EndsFields } from './EndsFields';
import { ExceptionsField } from './ExceptionsField';
import { IntervalInput } from './IntervalInput';
import { OccurrencePreview } from './OccurrencePreview';
import { MonthlyOptions } from './options/MonthlyOptions';
import { WeeklyOptions } from './options/WeeklyOptions';
import type { RecurringEventFormType } from './types';
import { useRecurrenceRule } from './useRecurrenceRule';

interface RecurrenceFieldsProps {
  form: RecurringEventFormType;
  onWeekdaysEdit: () => void;
}

export function RecurrenceFields({ form, onWeekdaysEdit }: RecurrenceFieldsProps) {
  const repeats = form.useWatchValue('repeats');
  const frequency = form.useWatchValue('frequency');
  const rule = useRecurrenceRule(form);

  return (
    <Fieldset legend="Recurrence">
      <Stack>
        <Stack gap="xs">
          <Switch label="Repeat" {...form.getInputProps('repeats', { type: 'checkbox' })} />
          {repeats && <IntervalInput form={form} />}
          {repeats && frequency === 'weekly' && (
            <WeeklyOptions form={form} onEdit={onWeekdaysEdit} />
          )}
          {repeats && frequency === 'monthly' && <MonthlyOptions form={form} />}
        </Stack>

        {repeats && (
          <>
            <EndsFields form={form} />
            <ExceptionsField form={form} rule={rule} />
            <OccurrencePreview form={form} rule={rule} />
          </>
        )}
      </Stack>
    </Fieldset>
  );
}
