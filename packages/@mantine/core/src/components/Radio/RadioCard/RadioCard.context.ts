import { createOptionalContext } from '../../../core';

export interface RadioCardContextValue {
  checked: boolean;
}

export const [RadioCardProvider, useRadioCardContext] =
  createOptionalContext<RadioCardContextValue>();
