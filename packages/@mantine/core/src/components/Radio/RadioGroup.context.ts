import { createOptionalContext, MantineSize } from '../../core';

interface RadioGroupContextValue {
  size: MantineSize | undefined;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const [RadioGroupProvider, useRadioGroupContext] =
  createOptionalContext<RadioGroupContextValue>();
