import { useId } from 'react';
import { Stack, Surface, Text } from '@mantine/core';
import { formatOccurrence, getOccurrences, toRecurrenceRule } from './recurrence';
import type { RecurringEventFormType } from './types';
import { PREVIEW_LIMIT } from './validation';
import classes from './OccurrencePreview.module.css';

interface OccurrencePreviewProps {
  form: RecurringEventFormType;
}

export function OccurrencePreview({ form }: OccurrencePreviewProps) {
  const titleId = useId();
  const startDate = form.useWatchValue('startDate');
  const startTime = form.useWatchValue('startTime');
  const allDay = form.useWatchValue('allDay');
  const recurrence = form.useWatchValue('recurrence');
  const exceptions = form.useWatchValue('exceptions');

  const rule = toRecurrenceRule(startDate, recurrence);
  const occurrences = rule ? getOccurrences(rule, exceptions, PREVIEW_LIMIT) : [];
  const time = allDay || !startTime ? null : startTime;

  return (
    <Surface withBorder p="md">
      <Text id={titleId} size="sm" fw={500} mb="xs">
        Next occurrences
      </Text>
      {occurrences.length === 0 ? (
        <Text size="sm">No occurrences</Text>
      ) : (
        <Stack gap="xs" component="ol" aria-labelledby={titleId} className={classes.list}>
          {occurrences.map((date) => (
            <Text key={date} component="li" size="sm">
              {formatOccurrence(date, time)}
            </Text>
          ))}
        </Stack>
      )}
    </Surface>
  );
}
