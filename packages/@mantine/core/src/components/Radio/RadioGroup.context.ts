import { createOptionalContext, MantineSize } from '../../core';

interface RadioGroupContextValue {
  size: MantineSize | undefined;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  name: string;
  disabled?: boolean;
}

export const [RadioGroupProvider, useRadioGroupContext] =
  createOptionalContext<RadioGroupContextValue>();
