import dayjs from 'dayjs';
import { NumberInput, Radio, Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { getDateFieldLabels } from './EventDateInput';
import type { RecurringEventFormType } from './types';
import { SERIES_END_OPTIONS } from './validation';

export function SeriesEndFields({ form }: { form: RecurringEventFormType }) {
  const ends = form.useWatchValue('ends');
  const start = form.useWatchValue('start');

  return (
    <Stack gap="xs">
      <Radio.Group label="Ends" {...form.getInputProps('ends')}>
        <Stack gap="xs" mt="xs">
          {SERIES_END_OPTIONS.map((option) => (
            <Radio key={option.value} value={option.value} label={option.label} />
          ))}
        </Stack>
      </Radio.Group>

      {ends === 'after' && (
        <NumberInput
          label="Occurrences"
          placeholder="Number of occurrences"
          withAsterisk
          maw={240}
          min={1}
          max={500}
          clampBehavior="strict"
          allowNegative={false}
          allowDecimal={false}
          {...form.getInputProps('count')}
        />
      )}

      {ends === 'on' && (
        <MaskedDateInput
          label="Ends on"
          withAsterisk
          maw={240}
          minDate={start ? dayjs(start).add(1, 'day').format('YYYY-MM-DD') : undefined}
          {...getDateFieldLabels('Ends on')}
          {...form.getInputProps('until')}
        />
      )}
    </Stack>
  );
}
