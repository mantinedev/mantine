import { createContext } from 'react';
import { ModalProps } from '@mantine/core';

export type ModalSettings = Omit<ModalProps, 'opened' | 'onClose'>;

interface ModalsContextType {
  opened: string | null;
  modals: string[];
  open: (modal: string, props?: ModalSettings) => void;
  close: () => void;
}

export const ModalsContext = createContext<ModalsContextType>({
  opened: null,
  open: () => {},
  close: () => {},
  modals: [],
});
