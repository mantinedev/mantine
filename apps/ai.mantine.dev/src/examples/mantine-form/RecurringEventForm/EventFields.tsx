import { Select, SimpleGrid, Stack, Switch, Textarea, TextInput } from '@mantine/core';
import { EventDateInput } from './EventDateInput';
import type { RecurringEventFormType } from './types';
import { TIMEZONES } from './validation';

export function EventFields({ form }: { form: RecurringEventFormType }) {
  const allDay = form.useWatchValue('allDay');

  return (
    <Stack>
      <TextInput label="Title" placeholder="Title" withAsterisk {...form.getInputProps('title')} />
      <Textarea
        label="Description"
        placeholder="What is the event about"
        autosize
        minRows={2}
        maxRows={6}
        {...form.getInputProps('description')}
      />
      <Stack gap="xs">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <EventDateInput form={form} path="start" label="Start" allDay={allDay} />
          <EventDateInput form={form} path="end" label="End" allDay={allDay} />
        </SimpleGrid>
        <Switch label="All day" {...form.getInputProps('allDay', { type: 'checkbox' })} />
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
    </Stack>
  );
}
