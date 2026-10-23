import { Chip, Group, Input } from '@mantine/core';
import type { RecurringEventFormType, Weekday } from '../types';
import { WEEKDAY_OPTIONS } from '../validation';
import classes from './WeeklyOptions.module.css';

interface WeeklyOptionsProps {
  form: RecurringEventFormType;
  onEdit: () => void;
}

export function WeeklyOptions({ form, onEdit }: WeeklyOptionsProps) {
  // The wrapper takes the error and data-path, so the field can be focused on submit
  const { value, onChange, ...wrapperProps } = form.getInputProps('weekdays', {
    withFocus: false,
  });

  return (
    <Input.Wrapper label="Repeat on" withAsterisk {...wrapperProps}>
      <Chip.Group
        multiple
        value={value}
        onChange={(weekdays) => {
          onEdit();
          onChange(weekdays as Weekday[]);
        }}
      >
        <Group gap="xs" className={classes.chips}>
          {WEEKDAY_OPTIONS.map((option) => (
            <Chip key={option.value} value={option.value}>
              {option.label}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
    </Input.Wrapper>
  );
}
