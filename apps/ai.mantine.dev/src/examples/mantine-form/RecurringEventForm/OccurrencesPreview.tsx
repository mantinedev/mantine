import { Input, List, Text } from '@mantine/core';
import { formatOccurrence, getOccurrences } from './recurrence';
import type { RecurringEventFormType } from './types';
import { useSeries } from './use-series';

const PREVIEW_SIZE = 5;

function PreviewContent({ form }: { form: RecurringEventFormType }) {
  const { start, allDay, exceptions, recurrence, complete } = useSeries(form);

  if (!start) {
    return <Text size="sm">Set the start to see the occurrences</Text>;
  }

  if (!complete) {
    return <Text size="sm">Complete the recurrence to see the occurrences</Text>;
  }

  const occurrences = getOccurrences(start, recurrence, recurrence ? exceptions : [], PREVIEW_SIZE);

  if (occurrences.length === 0) {
    return <Text size="sm">No occurrences</Text>;
  }

  return (
    <List size="sm" aria-label="Next occurrences">
      {occurrences.map((date) => (
        <List.Item key={date}>{formatOccurrence(date, start, allDay)}</List.Item>
      ))}
    </List>
  );
}

export function OccurrencesPreview({ form }: { form: RecurringEventFormType }) {
  return (
    <div>
      <Input.Label labelElement="div">Next occurrences</Input.Label>
      <PreviewContent form={form} />
    </div>
  );
}
