import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, Stack, Surface, Text } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { formatDate, isOccurrence, toRecurrenceRule } from './recurrence';
import type { RecurringEventFormType } from './types';
import classes from './ExceptionsField.module.css';

interface ExceptionsFieldProps {
  form: RecurringEventFormType;
}

export function ExceptionsField({ form }: ExceptionsFieldProps) {
  const startDate = form.useWatchValue('startDate');
  const recurrence = form.useWatchValue('recurrence');
  const exceptions = form.useWatchValue('exceptions');
  const rule = toRecurrenceRule(startDate, recurrence);

  const addException = (date: string | null) => {
    if (!date) {
      return;
    }
    if (exceptions.includes(date)) {
      form.setFieldError('exceptions', `${formatDate(date)} is already skipped`);
      return;
    }
    form.setFieldValue('exceptions', [...exceptions, date].sort());
  };

  return (
    <Stack gap="xs">
      {/* The picker only adds dates: its own value stays empty, the list below holds the field */}
      <DatePickerInput
        {...form.getInputProps('exceptions')}
        label="Exceptions"
        placeholder={rule ? 'Pick a date to skip' : 'Complete the repeat rule to skip dates'}
        valueFormat="MMMM D, YYYY"
        value={null}
        onChange={addException}
        disabled={!rule}
        minDate={rule?.start}
        maxDate={rule?.until ?? undefined}
        excludeDate={(date) => !rule || !isOccurrence(rule, date)}
      />

      {exceptions.length > 0 && (
        <Stack gap="xs" component="ul" aria-label="Skipped dates" className={classes.list}>
          {exceptions.map((date, index) => (
            <Surface key={date} component="li" withBorder p="sm">
              <Group justify="space-between" wrap="nowrap" gap="sm">
                <Text size="sm">{formatDate(date)}</Text>
                <ActionIcon
                  variant="default"
                  size="lg"
                  aria-label={`Remove ${formatDate(date)}`}
                  onClick={() => form.removeListItem('exceptions', index)}
                >
                  <IconTrash size={18} color="var(--mantine-color-red-text)" />
                </ActionIcon>
              </Group>
            </Surface>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
