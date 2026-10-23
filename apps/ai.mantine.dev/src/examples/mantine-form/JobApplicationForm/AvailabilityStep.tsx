import { NumberInput, Radio, Stack, Text, Textarea } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import type { JobApplicationFormType } from './types';
import { NOTES_LIMIT, WORK_MODES } from './validation';

export function AvailabilityStep({ form }: { form: JobApplicationFormType }) {
  const notes = form.useWatchValue('notes');

  return (
    <Stack>
      <DatePickerInput
        label="Earliest start date"
        placeholder="Pick a date"
        valueFormat="MMMM D, YYYY"
        minDate={new Date()}
        withAsterisk
        maw={320}
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
        maw={320}
        {...form.getInputProps('salary')}
      />
      <Radio.Group label="Work arrangement" withAsterisk {...form.getInputProps('workMode')}>
        <Stack gap="xs" mt="xs">
          {WORK_MODES.map((mode) => (
            <Radio key={mode.value} value={mode.value} label={mode.label} />
          ))}
        </Stack>
      </Radio.Group>
      <Textarea
        label="Notes"
        placeholder="Anything else we should know"
        autosize
        minRows={3}
        maxRows={8}
        maxLength={NOTES_LIMIT}
        bottomSection={
          <Text size="xs" ta="right" c={notes.length >= NOTES_LIMIT ? 'red' : undefined}>
            {notes.length}/{NOTES_LIMIT}
          </Text>
        }
        {...form.getInputProps('notes')}
      />
    </Stack>
  );
}
