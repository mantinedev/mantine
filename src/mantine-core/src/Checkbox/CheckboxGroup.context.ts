import { MantineSize } from '@mantine/styles';
import { createContext, useContext } from 'react';

interface CheckboxGroupContextValue {
  value: string[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  size: MantineSize;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue>(null);
export const CheckboxGroupProvider = CheckboxGroupContext.Provider;
export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext);
