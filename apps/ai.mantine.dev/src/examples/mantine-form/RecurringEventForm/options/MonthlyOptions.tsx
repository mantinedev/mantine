import dayjs from 'dayjs';
import { Radio, Stack } from '@mantine/core';
import { formatWeekdayOfMonth } from '../payload';
import type { RecurringEventFormType } from '../types';

export function MonthlyOptions({ form }: { form: RecurringEventFormType }) {
  const start = form.useWatchValue('start');

  return (
    <Radio.Group label="Repeat on" {...form.getInputProps('monthlyMode')}>
      <Stack gap="xs" mt="xs">
        <Radio
          value="dayOfMonth"
          label={start ? `Day ${dayjs(start).date()} of the month` : 'The same day of the month'}
        />
        <Radio
          value="weekdayOfMonth"
          label={start ? `The ${formatWeekdayOfMonth(start)}` : 'The same weekday of the month'}
        />
      </Stack>
    </Radio.Group>
  );
}
