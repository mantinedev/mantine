import dayjs from 'dayjs';
import { Group, NumberInput, Radio } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { DATE_FORMAT } from './recurrence';
import type { RecurringEventFormType } from './types';
import { SERIES_END_OPTIONS } from './validation';

interface SeriesEndFieldsProps {
  form: RecurringEventFormType;
}

export function SeriesEndFields({ form }: SeriesEndFieldsProps) {
  const ends = form.useWatchValue('recurrence.ends');
  const startDate = form.useWatchValue('startDate');

  return (
    <>
      <Radio.Group label="Ends" {...form.getInputProps('recurrence.ends')}>
        <Group mt="xs">
          {SERIES_END_OPTIONS.map((option) => (
            <Radio key={option.value} value={option.value} label={option.label} />
          ))}
        </Group>
      </Radio.Group>

      {ends === 'after' && (
        <NumberInput
          label="Occurrences"
          placeholder="Number of occurrences"
          min={1}
          max={500}
          clampBehavior="none"
          allowNegative={false}
          allowDecimal={false}
          maw={240}
          withAsterisk
          {...form.getInputProps('recurrence.count')}
        />
      )}

      {ends === 'on' && (
        <DatePickerInput
          label="Series end date"
          placeholder="Pick a date"
          valueFormat="MMMM D, YYYY"
          minDate={startDate ? dayjs(startDate).add(1, 'day').format(DATE_FORMAT) : undefined}
          withAsterisk
          {...form.getInputProps('recurrence.until')}
        />
      )}
    </>
  );
}
