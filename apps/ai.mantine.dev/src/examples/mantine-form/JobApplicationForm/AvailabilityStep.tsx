import { Group, NumberInput, Radio, Stack, Text, Textarea } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import type { JobApplicationFormType } from './types';
import { NOTES_MAX_LENGTH, WORK_ARRANGEMENT_LABELS } from './values';

export function AvailabilityStep({ form }: { form: JobApplicationFormType }) {
  const notes = form.useWatchValue('notes');

  return (
    <Stack>
      <Group grow align="flex-start">
        <DatePickerInput
          label="Earliest start date"
          placeholder="Pick a date"
          withAsterisk
          minDate={new Date()}
          {...form.getInputProps('startDate')}
        />
        <NumberInput
          label="Expected salary"
          placeholder="Annual salary in USD"
          prefix="$"
          thousandSeparator=","
          allowNegative={false}
          allowDecimal={false}
          max={10_000_000}
          hideControls
          {...form.getInputProps('expectedSalary')}
        />
      </Group>
      <Radio.Group label="Work arrangement" withAsterisk {...form.getInputProps('workArrangement')}>
        <Group mt="xs">
          {Object.entries(WORK_ARRANGEMENT_LABELS).map(([value, label]) => (
            <Radio key={value} value={value} label={label} />
          ))}
        </Group>
      </Radio.Group>
      <Textarea
        label="Notes"
        placeholder="Anything else we should know"
        autosize
        minRows={4}
        maxRows={8}
        maxLength={NOTES_MAX_LENGTH}
        bottomSection={
          <Text size="xs">
            {notes.length}/{NOTES_MAX_LENGTH} characters
          </Text>
        }
        {...form.getInputProps('notes')}
      />
    </Stack>
  );
}
