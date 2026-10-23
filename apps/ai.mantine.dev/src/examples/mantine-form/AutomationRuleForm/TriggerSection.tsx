import { Select, SimpleGrid, Stack } from '@mantine/core';
import { STATUSES, TRIGGER_EVENTS } from './constants';
import { FormSection } from './FormSection';
import type { RuleFormType } from './types';

export function TriggerSection({ form }: { form: RuleFormType }) {
  const event = form.useWatchValue('trigger.event');

  return (
    <FormSection title="When" description="The event that starts the rule.">
      <Stack gap="xs">
        <Select
          label="Event"
          placeholder="Pick an event"
          data={TRIGGER_EVENTS}
          withAsterisk
          {...form.getInputProps('trigger.event')}
        />
        {event === 'status_changed' && (
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
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
    </FormSection>
  );
}
