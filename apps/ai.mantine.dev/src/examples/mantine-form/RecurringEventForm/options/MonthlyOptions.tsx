import { Group, Radio } from '@mantine/core';
import { describeDayOfMonth, describeWeekdayOfMonth } from '../recurrence';
import type { RecurringEventFormType } from '../types';

interface MonthlyOptionsProps {
  form: RecurringEventFormType;
}

export function MonthlyOptions({ form }: MonthlyOptionsProps) {
  const startDate = form.useWatchValue('startDate');

  return (
    <Radio.Group label="Repeat on" {...form.getInputProps('recurrence.monthlyOn')}>
      <Group mt="xs">
        <Radio
          value="dayOfMonth"
          label={startDate ? describeDayOfMonth(startDate) : 'On the same day of the month'}
        />
        <Radio
          value="weekdayOfMonth"
          label={startDate ? describeWeekdayOfMonth(startDate) : 'On the same weekday of the month'}
        />
      </Group>
    </Radio.Group>
  );
}
