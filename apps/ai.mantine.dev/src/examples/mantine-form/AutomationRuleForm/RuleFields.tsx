import { Select, SimpleGrid, Stack, Textarea, TextInput } from '@mantine/core';
import { EVENTS, STATUSES } from './constants';
import type { RuleFormType } from './types';

export function RuleFields({ form }: { form: RuleFormType }) {
  const event = form.useWatchValue('trigger.event');

  return (
    <Stack gap="md">
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />

      <Textarea
        label="Description"
        placeholder="What this rule is for"
        autosize
        minRows={2}
        maxRows={6}
        {...form.getInputProps('description')}
      />

      <Stack gap="xs">
        <Select
          label="Event"
          placeholder="Pick an event"
          data={EVENTS}
          withAsterisk
          {...form.getInputProps('trigger.event')}
        />
        {event === 'status_changed' && (
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Select
              label="From status"
              placeholder="Any status"
              data={STATUSES}
              clearable
              {...form.getInputProps('trigger.fromStatus')}
            />
            <Select
              label="To status"
              placeholder="Any status"
              data={STATUSES}
              clearable
              {...form.getInputProps('trigger.toStatus')}
            />
          </SimpleGrid>
        )}
      </Stack>
    </Stack>
  );
}
