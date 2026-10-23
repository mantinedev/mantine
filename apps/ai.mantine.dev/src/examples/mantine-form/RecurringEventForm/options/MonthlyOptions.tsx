import { Radio, Stack } from '@mantine/core';
import { describeMonthlyOn, getMonthlyOn } from '../recurrence';
import type { MonthlyMode, RecurringEventFormType } from '../types';

const FALLBACK_LABELS: Record<MonthlyMode, string> = {
  day: 'On the same day of the month',
  weekday: 'On the same weekday of the month',
};

const MODES: MonthlyMode[] = ['day', 'weekday'];

export function MonthlyOptions({ form }: { form: RecurringEventFormType }) {
  const start = form.useWatchValue('start');

  return (
    <Radio.Group label="Repeat on" {...form.getInputProps('monthlyMode')}>
      <Stack gap="xs" mt="xs">
        {MODES.map((mode) => (
          <Radio
            key={mode}
            value={mode}
            label={start ? describeMonthlyOn(getMonthlyOn(start, mode)) : FALLBACK_LABELS[mode]}
          />
        ))}
      </Stack>
    </Radio.Group>
  );
}
