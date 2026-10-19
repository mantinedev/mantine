import dayjs from 'dayjs';
import { Group, NumberInput, Radio, Stack, Text, Textarea } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import type { JobApplicationFormType, WorkMode } from './types';
import { NOTES_MAX_LENGTH, WORK_MODE_LABELS } from './values';

export function AvailabilityStep({ form }: { form: JobApplicationFormType }) {
  const notes = form.useWatchValue('notes');

  return (
    <Stack>
      <Group grow align="flex-start">
        <DatePickerInput
          label="Earliest start date"
          placeholder="Pick a date"
          withAsterisk
          minDate={dayjs().format('YYYY-MM-DD')}
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

      <Radio.Group label="Work arrangement" withAsterisk {...form.getInputProps('workMode')}>
        <Group mt="xs">
          {(Object.keys(WORK_MODE_LABELS) as WorkMode[]).map((mode) => (
            <Radio key={mode} value={mode} label={WORK_MODE_LABELS[mode]} />
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
          <Text size="xs" ml="auto" px="sm">
            {notes.length} / {NOTES_MAX_LENGTH}
          </Text>
        }
        {...form.getInputProps('notes')}
      />
    </Stack>
  );
}
