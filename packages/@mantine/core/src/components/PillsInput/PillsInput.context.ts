import { createContext } from 'react';
import { MantineSize } from '../../core';
import { InputVariant } from '../Input';

export interface PillsInputContextValue {
  fieldRef: React.RefObject<HTMLInputElement | null>;
  size: MantineSize | (string & {});
  disabled: boolean | undefined;
  hasError: boolean | undefined;
  variant: InputVariant | (string & {}) | undefined;
}

export const PillsInputContext = createContext<PillsInputContextValue | null>(null);
