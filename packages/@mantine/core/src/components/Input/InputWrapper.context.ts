import { createOptionalContext, GetStylesApi } from '../../core';
import type { InputWrapperFactory } from './InputWrapper/InputWrapper';

interface InputWrapperContextValue {
  offsetTop: boolean;
  offsetBottom: boolean;
  describedBy: string | undefined;
  inputId: string | undefined;
  labelId: string | undefined;
  getStyles: GetStylesApi<InputWrapperFactory> | null;
}

export const [InputWrapperProvider, useInputWrapperContext] =
  createOptionalContext<InputWrapperContextValue>({
    offsetBottom: false,
    offsetTop: false,
    describedBy: undefined,
    getStyles: null,
    inputId: undefined,
    labelId: undefined,
  });
