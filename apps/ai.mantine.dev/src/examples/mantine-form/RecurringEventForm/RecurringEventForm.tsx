import { useState } from 'react';
import { Button, Code, Fieldset, Group, Stack, Text } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ErrorSummary } from './ErrorSummary';
import { EventFields } from './EventFields';
import { ExceptionsField } from './ExceptionsField';
import { OccurrencePreview } from './OccurrencePreview';
import { formatOccurrence, toPayload } from './payload';
import { getOccurrences, getRule } from './recurrence';
import { RepeatFields } from './RepeatFields';
import { SeriesEndFields } from './SeriesEndFields';
import type { RecurringEventPayload, RecurringEventValues } from './types';
import { useDependentFields } from './useDependentFields';
import { getInitialValues, recurringEventRules } from './validation';

function getFirstOccurrence(values: RecurringEventValues) {
  const rule = getRule(values);
  const [first] = rule
    ? getOccurrences(rule, {
        exceptions: rule.repeat === 'none' ? [] : values.exceptions,
        limit: 1,
      })
    : [];
  return first ? formatOccurrence(first, values.start ?? '', values.allDay) : 'No occurrences';
}

interface RecurringEventFormProps {
  onSubmit?: (payload: RecurringEventPayload) => void;
}

export function RecurringEventForm({ onSubmit }: RecurringEventFormProps) {
  const [submitted, setSubmitted] = useState<RecurringEventPayload | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const form = useForm<RecurringEventValues, RecurringEventPayload>({
    name: 'recurring-event',
    initialValues: getInitialValues(),
    validate: recurringEventRules,
    transformValues: toPayload,
  });

  useDependentFields(form);
  const repeat = form.useWatchValue('repeat');

  // Radio and checkbox groups and the masked date inputs put data-path on a wrapper
  const focusField = (path: string) => {
    const node = form.getInputNode(path);
    (node?.querySelector('input') ?? node)?.focus();
  };

  const handleSubmit = (payload: RecurringEventPayload) => {
    setShowSummary(false);
    setSubmitted(payload);
    notifications.show({
      title: 'Event created',
      message: `${payload.title} · ${getFirstOccurrence(form.getValues())}`,
    });
    onSubmit?.(payload);
  };

  const handleErrors = (errors: FormErrors) => {
    setShowSummary(true);
    focusField(Object.keys(errors)[0]);
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
        <Stack>
          {showSummary && <ErrorSummary form={form} onFocusField={focusField} />}

          <Fieldset legend="Event" radius="md">
            <EventFields form={form} />
          </Fieldset>

          <Fieldset legend="Recurrence" radius="md">
            <Stack>
              <RepeatFields form={form} />
              {repeat !== 'none' && <SeriesEndFields form={form} />}
              {repeat !== 'none' && <ExceptionsField form={form} />}
              <OccurrencePreview form={form} />
            </Stack>
          </Fieldset>

          <Group justify="flex-end">
            <Button type="submit">Create event</Button>
          </Group>
        </Stack>
      </form>

      {submitted && (
        <div>
          <Text size="sm" fw={500} mb={4}>
            Submitted event
          </Text>
          <Code block aria-label="Submitted event">
            {JSON.stringify(submitted, null, 2)}
          </Code>
        </div>
      )}
    </Stack>
  );
}
