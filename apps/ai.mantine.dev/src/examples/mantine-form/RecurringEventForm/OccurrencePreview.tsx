import { List, Text } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { formatOccurrence } from './payload';
import { getOccurrences } from './recurrence';
import type { RecurringEventFormType } from './types';
import { useRecurrenceRule } from './useRecurrenceRule';

export function OccurrencePreview({ form }: { form: RecurringEventFormType }) {
  const id = useId();
  const rule = useRecurrenceRule(form);
  const start = form.useWatchValue('start');
  const allDay = form.useWatchValue('allDay');
  const exceptions = form.useWatchValue('exceptions');

  const occurrences = rule
    ? getOccurrences(rule, { exceptions: rule.repeat === 'none' ? [] : exceptions, limit: 5 })
    : [];

  return (
    <div>
      <Text id={id} size="sm" fw={500} mb={4}>
        Next occurrences
      </Text>
      {occurrences.length === 0 ? (
        <Text size="sm">No occurrences</Text>
      ) : (
        <List size="sm" aria-labelledby={id}>
          {occurrences.map((date) => (
            <List.Item key={date}>{formatOccurrence(date, start ?? '', allDay)}</List.Item>
          ))}
        </List>
      )}
    </div>
  );
}
