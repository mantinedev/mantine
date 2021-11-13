import { createContext } from 'react';
import { ModalProps } from '@mantine/core';
import type { ConfirmModalProps } from './ConfirmModal';

export type ModalSettings = Omit<ModalProps, 'opened' | 'onClose'>;

export type ConfirmLabels = Record<'confirm' | 'cancel', string>;

export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {}

export interface ModalsContextType {
  modals: any[];
  openModal: (props: ModalSettings) => string;
  openConfirmModal: (props: OpenConfirmModal) => string;
  closeModal: (id: string) => void;
  closeAll: () => void;
}

// export interface ModalState {
//   id: string;
//   props: ModalSettings;
//   type: 'content' | 'confirm';
// }

export type ModalState =
  | { id: string; props: ModalSettings; type: 'content' }
  | { id: string; props: OpenConfirmModal; type: 'confirm' };

export const ModalsContext = createContext<ModalsContextType>({
  modals: [],
  openModal: () => null,
  openConfirmModal: () => null,
  closeAll: () => {},
  closeModal: () => {},
});
