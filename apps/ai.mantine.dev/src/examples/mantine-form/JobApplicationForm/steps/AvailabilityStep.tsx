import { Group, NumberInput, Radio, SimpleGrid, Stack, Text, Textarea } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { NOTES_MAX_LENGTH, WORK_ARRANGEMENTS } from '../constants';
import type { JobApplicationFormType } from '../types';

export function AvailabilityStep({ form }: { form: JobApplicationFormType }) {
  const notes = form.useWatchValue('notes');

  return (
    <Stack gap="md" mt="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <DatePickerInput
          label="Earliest start date"
          placeholder="Pick a date"
          withAsterisk
          minDate={new Date()}
          valueFormat="MMMM D, YYYY"
          {...form.getInputProps('startDate')}
        />
        <NumberInput
          label="Expected salary"
          placeholder="Annual salary in USD"
          prefix="$"
          thousandSeparator=","
          allowNegative={false}
          allowDecimal={false}
          hideControls
          {...form.getInputProps('salary')}
        />
      </SimpleGrid>
      <Radio.Group label="Work arrangement" withAsterisk {...form.getInputProps('workArrangement')}>
        <Group mt="xs">
          {WORK_ARRANGEMENTS.map((option) => (
            <Radio key={option.value} value={option.value} label={option.label} />
          ))}
        </Group>
      </Radio.Group>
      <Textarea
        label="Notes"
        placeholder="Anything else we should know"
        autosize
        minRows={3}
        maxRows={8}
        maxLength={NOTES_MAX_LENGTH}
        bottomSection={
          <Text size="xs" ta="right" c={notes.length >= NOTES_MAX_LENGTH ? 'red' : undefined}>
            {notes.length}/{NOTES_MAX_LENGTH}
          </Text>
        }
        {...form.getInputProps('notes')}
      />
    </Stack>
  );
}
