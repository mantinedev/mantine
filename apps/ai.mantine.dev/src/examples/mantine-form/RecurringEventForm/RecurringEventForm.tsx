import { useState } from 'react';
import { Button, Code, Group, Stack, Textarea, TextInput, Title } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { OccurrencePreview } from './OccurrencePreview';
import { toEventPayload } from './payload';
import { formatOccurrence, getOccurrences, toRecurrenceRule } from './recurrence';
import { RecurrenceFields } from './RecurrenceFields';
import { ScheduleFields } from './ScheduleFields';
import type { EventPayload, RecurringEventValues } from './types';
import { useDependentFields } from './useDependentFields';
import { getDefaultTimezone, rules } from './validation';

interface RecurringEventFormProps {
  onSubmit?: (event: EventPayload) => void;
}

export function RecurringEventForm({ onSubmit }: RecurringEventFormProps) {
  const [submitted, setSubmitted] = useState<EventPayload | null>(null);

  const form = useForm<RecurringEventValues, EventPayload>({
    name: 'recurring-event',
    initialValues: {
      title: '',
      description: '',
      allDay: false,
      startDate: null,
      startTime: '',
      endDate: null,
      endTime: '',
      timezone: getDefaultTimezone(),
      location: '',
      recurrence: {
        repeat: 'none',
        interval: 1,
        weekdays: [],
        monthlyOn: 'dayOfMonth',
        ends: 'never',
        count: 10,
        until: null,
      },
      exceptions: [],
    },
    validate: rules,
    transformValues: toEventPayload,
  });

  useDependentFields(form);

  const handleSubmit = (event: EventPayload) => {
    const values = form.getValues();
    const rule = toRecurrenceRule(values.startDate, values.recurrence);
    const [first] = rule ? getOccurrences(rule, values.exceptions, 1) : [];
    const when = first
      ? formatOccurrence(first, values.allDay ? null : values.startTime)
      : 'No occurrences';

    notifications.show({ title: 'Event created', message: `${event.title} · ${when}` });
    setSubmitted(event);
    onSubmit?.(event);
  };

  // Radio and checkbox groups put data-path on their wrapper: focus the first input inside
  const handleErrors = (errors: FormErrors) => {
    const node = form.getInputNode(Object.keys(errors)[0]);
    (node?.querySelector('input') ?? node)?.focus();
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
        <Stack>
          <Title order={4}>Event</Title>
          <TextInput
            label="Title"
            placeholder="Title"
            withAsterisk
            {...form.getInputProps('title')}
          />
          <Textarea
            label="Description"
            placeholder="What the event is about"
            autosize
            minRows={3}
            maxRows={8}
            {...form.getInputProps('description')}
          />
          <ScheduleFields form={form} />
          <TextInput
            label="Location"
            placeholder="Room, address or meeting link"
            {...form.getInputProps('location')}
          />

          <Title order={4} mt="md">
            Recurrence
          </Title>
          <RecurrenceFields form={form} />
          <OccurrencePreview form={form} />

          <Group justify="flex-end">
            <Button type="submit">Create event</Button>
          </Group>
        </Stack>
      </form>

      {submitted && (
        <Code block aria-label="Submitted event">
          {JSON.stringify(submitted, null, 2)}
        </Code>
      )}
    </Stack>
  );
}
