import { createContext } from 'react';
import { ModalProps } from '@mantine/core';

export type ModalSettings = Omit<ModalProps, 'opened' | 'onClose'>;

export type ConfirmLabels = Record<'confirm' | 'cancel', string>;

interface ModalsContextType {
  opened: string | null;
  modals: string[];
  labels: ConfirmLabels;
  open: (modal: string, props?: ModalSettings) => void;
  close: () => void;
}

export const ModalsContext = createContext<ModalsContextType>({
  opened: null,
  labels: { confirm: '', cancel: '' },
  open: () => {},
  close: () => {},
  modals: [],
});
