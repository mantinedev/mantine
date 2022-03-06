import { createContext } from 'react';
import { ModalProps } from '@mantine/core';
import type { ConfirmModalProps } from './ConfirmModal';

export type ModalSettings = Partial<Omit<ModalProps, 'opened'>>;

export type ConfirmLabels = Record<'confirm' | 'cancel', string>;

export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {}
export interface OpenContextModal<CustomProps extends Record<string, unknown> = {}>
  extends ModalSettings {
  innerProps: CustomProps;
}

export interface ContextModalProps<T extends Record<string, unknown> = {}> {
  context: ModalsContext;
  innerProps: T;
  id: string;
}

export type ModalState =
  | { id: string; props: ModalSettings; type: 'content' }
  | { id: string; props: OpenConfirmModal; type: 'confirm' }
  | { id: string; props: OpenContextModal; type: 'context'; ctx: string };

export interface ModalsContext {
  modals: ModalState[];
  openModal: (props: ModalSettings) => string;
  openConfirmModal: (props: OpenConfirmModal) => string;
  openContextModal: <CustomProps extends Record<string, unknown>>(
    modal: string,
    props: OpenContextModal<CustomProps>
  ) => string;
  closeModal: (id: string, canceled?: boolean) => void;
  closeAll: () => void;
}

export const modalsContext = createContext<ModalsContext>({
  modals: [],
  openModal: () => null,
  openConfirmModal: () => null,
  openContextModal: () => null,
  closeAll: () => {},
  closeModal: () => {},
});
