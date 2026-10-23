import dayjs from 'dayjs';
import { NumberInput, Radio, Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import type { RecurringEventFormType } from './types';
import { ENDS_OPTIONS } from './validation';

export function EndsFields({ form }: { form: RecurringEventFormType }) {
  const ends = form.useWatchValue('ends');
  const start = form.useWatchValue('start');

  return (
    <Stack gap="xs">
      <Radio.Group label="Ends" {...form.getInputProps('ends')}>
        <Stack gap="xs" mt="xs">
          {ENDS_OPTIONS.map((option) => (
            <Radio key={option.value} value={option.value} label={option.label} />
          ))}
        </Stack>
      </Radio.Group>

      {ends === 'after' && (
        <NumberInput
          label="Occurrences"
          placeholder="Number of occurrences"
          min={1}
          max={500}
          allowDecimal={false}
          allowNegative={false}
          maw={240}
          withAsterisk
          {...form.getInputProps('count')}
        />
      )}

      {ends === 'on' && (
        <MaskedDateInput
          label="End date"
          minDate={start ? dayjs(start).add(1, 'day').format('YYYY-MM-DD') : undefined}
          maw={240}
          withAsterisk
          dayInputLabel="End date day"
          monthInputLabel="End date month"
          yearInputLabel="End date year"
          {...form.getInputProps('until')}
        />
      )}
    </Stack>
  );
}
