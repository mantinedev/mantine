import { createContext } from 'react';

export interface MenuRadioGroupContextValue {
  value: string | null;
  onChange: (value: string) => void;
}

export const MenuRadioGroupContext = createContext<MenuRadioGroupContextValue | null>(null);
