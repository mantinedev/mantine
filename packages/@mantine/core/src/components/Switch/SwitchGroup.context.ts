import { createContext, use } from 'react';
import { MantineSize } from '../../core';

interface SwitchGroupContextValue {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: MantineSize | (string & {}) | undefined;
  isDisabled?: (value: string) => boolean;
}

const SwitchGroupContext = createContext<SwitchGroupContextValue | null>(null);
export const SwitchGroupProvider = SwitchGroupContext.Provider;
export const useSwitchGroupContext = () => use(SwitchGroupContext);
