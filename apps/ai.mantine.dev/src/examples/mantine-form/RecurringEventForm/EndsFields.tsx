import { NumberInput, Radio, Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import type { RecurringEventFormType } from './types';
import { COUNT_LIMITS, ENDS_OPTIONS } from './validation';

export function EndsFields({ form }: { form: RecurringEventFormType }) {
  const ends = form.useWatchValue('ends');

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
          placeholder="10"
          min={COUNT_LIMITS.min}
          max={COUNT_LIMITS.max}
          allowNegative={false}
          allowDecimal={false}
          maw={240}
          withAsterisk
          {...form.getInputProps('count')}
        />
      )}

      {ends === 'on' && (
        <MaskedDateInput
          label="End date"
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
