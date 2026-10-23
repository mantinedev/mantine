import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState } from 'react';
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ErrorSummary } from './ErrorSummary';
import { EventFields } from './EventFields';
import { focusField } from './focusField';
import { buildPayload } from './payload';
import { formatOccurrence, getRecurrenceRule, upcomingOccurrences } from './recurrence';
import { RecurrenceFields } from './RecurrenceFields';
import type { RecurringEventPayload, RecurringEventValues } from './types';
import { useDependentFields } from './useDependentFields';
import { getDefaultTimezone, RULES } from './validation';

dayjs.extend(utc);

function describeFirstOccurrence(values: RecurringEventValues) {
  const rule = getRecurrenceRule(values);
  const first = rule ? upcomingOccurrences(rule, values.exceptions, 1)[0] : dayjs.utc(values.start);
  return first ? formatOccurrence(first, values.allDay) : 'No occurrences';
}

interface RecurringEventFormProps {
  onSubmit?: (payload: RecurringEventPayload) => void;
}

export function RecurringEventForm({ onSubmit }: RecurringEventFormProps) {
  const [payload, setPayload] = useState<RecurringEventPayload | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const form = useForm<RecurringEventValues, RecurringEventPayload>({
    name: 'recurring-event',
    initialValues: {
      title: '',
      description: '',
      allDay: false,
      start: null,
      end: null,
      timezone: getDefaultTimezone(),
      location: '',
      repeats: false,
      frequency: 'weekly',
      interval: 1,
      weekdays: [],
      monthlyMode: 'day',
      ends: 'never',
      count: 10,
      until: null,
      exceptions: [],
    },
    validateInputOnBlur: ['title', 'interval', 'count'],
    validate: RULES,
    transformValues: buildPayload,
  });

  const { markEdited } = useDependentFields(form);

  const handleSubmit = (event: RecurringEventPayload) => {
    setShowSummary(false);
    setPayload(event);
    onSubmit?.(event);
    notifications.show({
      title: 'Event created',
      message: `${event.title} · ${describeFirstOccurrence(form.getValues())}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    setShowSummary(true);
    focusField(form, Object.keys(errors)[0]);
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
        <Stack>
          {showSummary && <ErrorSummary form={form} />}
          <EventFields form={form} onEndEdit={() => markEdited('end')} />
          <RecurrenceFields form={form} onWeekdaysEdit={() => markEdited('weekdays')} />
          <Group justify="flex-end">
            {/* preventDefault keeps focus in the field, so its blur error does not shift the button */}
            <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
              Create event
            </Button>
          </Group>
        </Stack>
      </form>

      {payload && (
        <div>
          <Text size="sm" fw={500} mb="xs">
            Event JSON
          </Text>
          <Code block aria-label="Event JSON">
            {JSON.stringify(payload, null, 2)}
          </Code>
        </div>
      )}
    </Stack>
  );
}
