import { useState } from 'react';
import { Button, Code, Divider, Group, Input, Stack } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { EventFields } from './EventFields';
import { toPayload } from './payload';
import { formatOccurrence, getOccurrences } from './recurrence';
import { RecurrenceFields } from './RecurrenceFields';
import type { RecurringEventPayload, RecurringEventValues } from './types';
import { useEventDefaults } from './use-event-defaults';
import { FORM_NAME, getInitialValues, RULES } from './validation';

interface RecurringEventFormProps {
  onSubmit?: (payload: RecurringEventPayload) => void;
}

function getFirstOccurrence(values: RecurringEventValues, payload: RecurringEventPayload) {
  const [first] = getOccurrences(values.start!, payload.recurrence, payload.exceptions, 1);
  return first ? formatOccurrence(first, values.start!, values.allDay) : 'No occurrences';
}

export function RecurringEventForm({ onSubmit }: RecurringEventFormProps) {
  const [submitted, setSubmitted] = useState<RecurringEventPayload | null>(null);

  const form = useForm<RecurringEventValues, RecurringEventPayload>({
    name: FORM_NAME,
    initialValues: getInitialValues(),
    validate: RULES,
    transformValues: toPayload,
  });

  useEventDefaults(form);

  const handleSubmit = (payload: RecurringEventPayload) => {
    setSubmitted(payload);
    onSubmit?.(payload);
    notifications.show({
      title: 'Event created',
      message: `${payload.title} · ${getFirstOccurrence(form.getValues(), payload)}`,
    });
  };

  // Radio groups, chips and masked date inputs carry data-path on a wrapper: focus the input inside
  const handleErrors = (errors: FormErrors) => {
    const node = form.getInputNode(Object.keys(errors)[0]);
    const focusable = node?.matches('input, button, textarea')
      ? node
      : node?.querySelector('input');
    focusable?.focus();
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
        <Stack gap="xl">
          <EventFields form={form} />
          <Divider />
          <RecurrenceFields form={form} />
          <Group justify="flex-end">
            <Button type="submit">Create event</Button>
          </Group>
        </Stack>
      </form>

      {submitted && (
        <div>
          <Input.Label labelElement="div">Submitted event</Input.Label>
          <Code block aria-label="Submitted event">
            {JSON.stringify(submitted, null, 2)}
          </Code>
        </div>
      )}
    </Stack>
  );
}
