import { createOptionalContext } from '../../../core';

export interface CheckboxCardContextValue {
  checked: boolean;
}

export const [CheckboxCardProvider, useCheckboxCardContext] =
  createOptionalContext<CheckboxCardContextValue>();
