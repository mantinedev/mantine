import { NumberInput, Text } from '@mantine/core';
import type { Frequency, RecurringEventFormType } from './types';
import { INTERVAL_LIMITS, INTERVAL_UNITS } from './validation';

export function IntervalInput({
  form,
  frequency,
}: {
  form: RecurringEventFormType;
  frequency: Frequency;
}) {
  const interval = form.useWatchValue('interval');
  const [singular, plural] = INTERVAL_UNITS[frequency];

  return (
    <NumberInput
      label="Repeat every"
      placeholder="1"
      min={INTERVAL_LIMITS.min}
      max={INTERVAL_LIMITS.max}
      allowNegative={false}
      allowDecimal={false}
      hideControls
      maw={240}
      rightSection={<Text size="sm">{Number(interval) === 1 ? singular : plural}</Text>}
      rightSectionWidth={72}
      rightSectionPointerEvents="none"
      withAsterisk
      {...form.getInputProps('interval')}
    />
  );
}
