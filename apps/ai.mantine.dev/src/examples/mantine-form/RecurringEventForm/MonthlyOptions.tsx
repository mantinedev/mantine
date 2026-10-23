import { Radio, Stack } from '@mantine/core';
import { describeMonthlyRule, getMonthlyRule } from './recurrence';
import type { MonthlyBy, RecurringEventFormType } from './types';

const FALLBACK_LABELS: Record<MonthlyBy, string> = {
  dayOfMonth: 'The same day of the month',
  weekdayOfMonth: 'The same weekday of the month',
};

export function MonthlyOptions({ form }: { form: RecurringEventFormType }) {
  const start = form.useWatchValue('start');
  const label = (by: MonthlyBy) =>
    start ? describeMonthlyRule(getMonthlyRule(start, by)) : FALLBACK_LABELS[by];

  return (
    <Radio.Group label="Repeat on" {...form.getInputProps('monthlyBy')}>
      <Stack gap="xs" mt="xs">
        <Radio value="dayOfMonth" label={label('dayOfMonth')} />
        <Radio value="weekdayOfMonth" label={label('weekdayOfMonth')} />
      </Stack>
    </Radio.Group>
  );
}
