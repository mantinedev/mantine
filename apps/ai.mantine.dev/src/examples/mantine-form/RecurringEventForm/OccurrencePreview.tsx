import { useId } from 'react';
import { List, Text } from '@mantine/core';
import { formatOccurrence, upcomingOccurrences, type RecurrenceRule } from './recurrence';
import type { RecurringEventFormType } from './types';

const PREVIEW_SIZE = 5;

interface OccurrencePreviewProps {
  form: RecurringEventFormType;
  rule: RecurrenceRule | null;
}

export function OccurrencePreview({ form, rule }: OccurrencePreviewProps) {
  const labelId = useId();
  const exceptions = form.useWatchValue('exceptions');
  const allDay = form.useWatchValue('allDay');
  const dates = rule ? upcomingOccurrences(rule, exceptions, PREVIEW_SIZE) : [];

  return (
    <div>
      <Text id={labelId} size="sm" fw={500} mb={4}>
        Next occurrences
      </Text>
      {dates.length === 0 ? (
        <Text size="sm">No occurrences</Text>
      ) : (
        <List size="sm" aria-labelledby={labelId}>
          {dates.map((date) => (
            <List.Item key={date.valueOf()}>{formatOccurrence(date, allDay)}</List.Item>
          ))}
        </List>
      )}
    </div>
  );
}
