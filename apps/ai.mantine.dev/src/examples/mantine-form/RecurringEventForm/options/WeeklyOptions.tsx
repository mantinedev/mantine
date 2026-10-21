import { Checkbox, Group } from '@mantine/core';
import type { RecurringEventFormType } from '../types';
import { WEEKDAY_OPTIONS } from '../validation';

export function WeeklyOptions({ form }: { form: RecurringEventFormType }) {
  return (
    <Checkbox.Group label="Repeat on" withAsterisk {...form.getInputProps('weekdays')}>
      <Group gap="md" mt="xs">
        {WEEKDAY_OPTIONS.map((option) => (
          <Checkbox key={option.value} value={option.value} label={option.label} />
        ))}
      </Group>
    </Checkbox.Group>
  );
}
