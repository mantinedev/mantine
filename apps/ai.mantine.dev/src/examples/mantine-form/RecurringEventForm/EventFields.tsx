import { Select, SimpleGrid, Stack, Switch, Textarea, TextInput, Title } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import type { RecurringEventFormType } from './types';
import { TIMEZONES } from './validation';

function segmentLabels(label: string) {
  return {
    dayInputLabel: `${label} day`,
    monthInputLabel: `${label} month`,
    yearInputLabel: `${label} year`,
    hoursInputLabel: `${label} hours`,
    minutesInputLabel: `${label} minutes`,
  };
}

export function EventFields({ form }: { form: RecurringEventFormType }) {
  const allDay = form.useWatchValue('allDay');

  return (
    <Stack>
      <Title order={3} c="var(--mantine-color-bright)">
        Event
      </Title>

      <TextInput label="Title" placeholder="Title" withAsterisk {...form.getInputProps('title')} />

      <Stack gap="xs">
        <Switch label="All day" {...form.getInputProps('allDay', { type: 'checkbox' })} />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <MaskedDateInput
            label="Start"
            withTime={!allDay}
            withAsterisk
            {...segmentLabels('Start')}
            {...form.getInputProps('start')}
          />
          <MaskedDateInput
            label="End"
            withTime={!allDay}
            withAsterisk
            {...segmentLabels('End')}
            {...form.getInputProps('end')}
          />
        </SimpleGrid>
      </Stack>

      <Select
        label="Timezone"
        placeholder="Pick a timezone"
        data={TIMEZONES}
        allowDeselect={false}
        withAsterisk
        {...form.getInputProps('timezone')}
      />

      <TextInput
        label="Location"
        placeholder="Room, address or link"
        {...form.getInputProps('location')}
      />

      <Textarea
        label="Description"
        placeholder="What the event is about"
        autosize
        minRows={3}
        maxRows={8}
        {...form.getInputProps('description')}
      />
    </Stack>
  );
}
