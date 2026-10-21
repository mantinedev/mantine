import type { ComponentType } from 'react';
import { Group, NumberInput, Radio, Text } from '@mantine/core';
import { ExceptionsField } from './ExceptionsField';
import { MonthlyOptions } from './options/MonthlyOptions';
import { WeeklyOptions } from './options/WeeklyOptions';
import { SeriesEndFields } from './SeriesEndFields';
import type { RecurringEventFormType, Repeat } from './types';
import { INTERVAL_UNITS, REPEAT_OPTIONS } from './validation';

interface RecurrenceFieldsProps {
  form: RecurringEventFormType;
}

const REPEAT_OPTION_FIELDS: Partial<Record<Repeat, ComponentType<RecurrenceFieldsProps>>> = {
  weekly: WeeklyOptions,
  monthly: MonthlyOptions,
};

export function RecurrenceFields({ form }: RecurrenceFieldsProps) {
  const repeat = form.useWatchValue('recurrence.repeat');
  const interval = form.useWatchValue('recurrence.interval');
  const OptionFields = REPEAT_OPTION_FIELDS[repeat];

  return (
    <>
      <Radio.Group label="Repeat" {...form.getInputProps('recurrence.repeat')}>
        <Group mt="xs">
          {REPEAT_OPTIONS.map((option) => (
            <Radio key={option.value} value={option.value} label={option.label} />
          ))}
        </Group>
      </Radio.Group>

      {repeat !== 'none' && (
        <>
          <NumberInput
            label="Repeat every"
            placeholder="Interval"
            min={1}
            max={99}
            clampBehavior="none"
            allowNegative={false}
            allowDecimal={false}
            rightSection={<Text size="sm">{INTERVAL_UNITS[repeat][interval === 1 ? 0 : 1]}</Text>}
            rightSectionWidth={72}
            hideControls
            maw={240}
            withAsterisk
            {...form.getInputProps('recurrence.interval')}
          />
          {OptionFields && <OptionFields form={form} />}
          <SeriesEndFields form={form} />
          <ExceptionsField form={form} />
        </>
      )}
    </>
  );
}
