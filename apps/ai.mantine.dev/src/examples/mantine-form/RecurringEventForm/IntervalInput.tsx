import { NativeSelect, NumberInput } from '@mantine/core';
import type { RecurringEventFormType } from './types';
import { FREQUENCY_UNITS } from './validation';

export function IntervalInput({ form }: { form: RecurringEventFormType }) {
  const interval = form.useWatchValue('interval');
  const units = FREQUENCY_UNITS.map((unit) => ({
    value: unit.value,
    label: Number(interval) === 1 ? unit.singular : unit.plural,
  }));

  return (
    <NumberInput
      label="Repeat every"
      placeholder="1"
      min={1}
      max={99}
      allowDecimal={false}
      allowNegative={false}
      hideControls
      maw={240}
      withAsterisk
      rightSection={
        <NativeSelect
          data={units}
          aria-label="Frequency"
          variant="unstyled"
          rightSectionWidth={28}
          {...form.getInputProps('frequency', { withError: false })}
        />
      }
      rightSectionWidth={92}
      {...form.getInputProps('interval')}
    />
  );
}
