import { Chip, Group, Input } from '@mantine/core';
import { WEEKDAYS } from '../recurrence';
import type { RecurringEventFormType } from '../types';
import { FORM_NAME } from '../validation';
import classes from './WeekdaysInput.module.css';

export function WeekdaysInput({ form }: { form: RecurringEventFormType }) {
  return (
    <Input.Wrapper label="Repeat on" labelElement="div" withAsterisk error={form.errors.weekdays}>
      <Chip.Group multiple {...form.getInputProps('weekdays', { withError: false })}>
        {/* Chip.Group renders no element, the group carries data-path so submit can focus the first chip */}
        <Group gap="xs" className={classes.chips} data-path={`${FORM_NAME}-weekdays`}>
          {WEEKDAYS.map((weekday) => (
            <Chip key={weekday.value} value={weekday.value} aria-label={weekday.name}>
              {weekday.label}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
    </Input.Wrapper>
  );
}
