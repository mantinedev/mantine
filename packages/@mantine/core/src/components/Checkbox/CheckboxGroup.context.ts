import { createContext, useContext } from 'react';
import { MantineSize } from '../../core';

interface CheckboxGroupContextValue {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  size: MantineSize | (string & {}) | undefined;
  isDisabled?: (value: string) => boolean;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);
export const CheckboxGroupProvider = CheckboxGroupContext.Provider;
export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext);
