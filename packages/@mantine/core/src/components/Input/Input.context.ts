import { createContext } from 'react';
import { MantineSize } from '../../core';

interface InputContextValue {
  size: MantineSize | (string & {});
}

export const InputContext = createContext<InputContextValue>({ size: 'sm' });
