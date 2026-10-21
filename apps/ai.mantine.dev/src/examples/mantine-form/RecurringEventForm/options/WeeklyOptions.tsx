import { Checkbox, Group } from '@mantine/core';
import type { RecurringEventFormType } from '../types';
import { WEEKDAY_OPTIONS } from '../validation';

interface WeeklyOptionsProps {
  form: RecurringEventFormType;
}

export function WeeklyOptions({ form }: WeeklyOptionsProps) {
  return (
    <Checkbox.Group label="Repeat on" withAsterisk {...form.getInputProps('recurrence.weekdays')}>
      <Group mt="xs">
        {WEEKDAY_OPTIONS.map((day) => (
          <Checkbox key={day.value} value={day.value} label={day.label} />
        ))}
      </Group>
    </Checkbox.Group>
  );
}
