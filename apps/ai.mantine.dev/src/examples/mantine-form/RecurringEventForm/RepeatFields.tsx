import { NumberInput, Radio, Stack, Text } from '@mantine/core';
import { MonthlyOptions } from './options/MonthlyOptions';
import { WeeklyOptions } from './options/WeeklyOptions';
import type { Frequency, RecurringEventFormType } from './types';
import { INTERVAL_UNITS, REPEAT_OPTIONS } from './validation';

const FREQUENCY_OPTIONS: Partial<
  Record<Frequency, (props: { form: RecurringEventFormType }) => React.ReactNode>
> = {
  weekly: WeeklyOptions,
  monthly: MonthlyOptions,
};

export function RepeatFields({ form }: { form: RecurringEventFormType }) {
  const repeat = form.useWatchValue('repeat');
  const Options = repeat === 'none' ? undefined : FREQUENCY_OPTIONS[repeat];

  return (
    <Stack gap="xs">
      <Radio.Group label="Repeat" {...form.getInputProps('repeat')}>
        <Stack gap="xs" mt="xs">
          {REPEAT_OPTIONS.map((option) => (
            <Radio key={option.value} value={option.value} label={option.label} />
          ))}
        </Stack>
      </Radio.Group>

      {repeat !== 'none' && (
        <NumberInput
          label="Repeat every"
          placeholder="1"
          withAsterisk
          maw={240}
          min={1}
          max={99}
          clampBehavior="strict"
          allowNegative={false}
          allowDecimal={false}
          rightSection={<Text size="sm">{INTERVAL_UNITS[repeat]}</Text>}
          rightSectionWidth={72}
          rightSectionPointerEvents="none"
          {...form.getInputProps('interval')}
        />
      )}

      {Options && <Options form={form} />}
    </Stack>
  );
}
