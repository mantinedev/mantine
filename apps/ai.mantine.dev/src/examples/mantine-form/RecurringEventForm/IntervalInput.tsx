import { NativeSelect, NumberInput } from '@mantine/core';
import type { RecurringEventFormType } from './types';
import { FREQUENCY_UNITS } from './validation';

export function IntervalInput({ form }: { form: RecurringEventFormType }) {
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
          data={FREQUENCY_UNITS}
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
