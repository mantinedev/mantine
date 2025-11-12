import { createContext, ReactNode } from 'react';
import { DataAttributes, ModalProps } from '@mantine/core';
import type { ConfirmModalProps } from './ConfirmModal';

export type ModalSettings = Partial<Omit<ModalProps, 'opened'>> & { modalId?: string };

export type ConfirmLabels = Record<'confirm' | 'cancel', ReactNode>;

export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {}

export type ContextModalInnerProps<
  TKey extends MantineModal,
  P = Parameters<MantineModals[TKey]>[0]['innerProps'],
> = keyof NonNullable<P> extends never ? { innerProps?: never } : { innerProps: P };

export type OpenContextModal<TKey extends MantineModal = string> = ModalSettings &
  ContextModalInnerProps<TKey>;

export interface ContextModalProps<T extends Record<string, any> = {}> {
  context: ModalsContextProps;
  innerProps: T;
  id: string;
}

export type ModalState =
  | { id: string; props: ModalSettings; type: 'content' }
  | { id: string; props: OpenConfirmModal; type: 'confirm' }
  | { id: string; props: OpenContextModal; type: 'context'; ctx: string };

export interface ModalsContextProps {
  modalProps: ModalSettings;
  modals: ModalState[];
  openModal: (props: ModalSettings) => string;
  openConfirmModal: (props: OpenConfirmModal) => string;
  openContextModal: <TKey extends MantineModal>(
    props: { modalKey: TKey } & OpenContextModal<TKey> & DataAttributes
  ) => string;
  closeModal: (modalId: string, canceled?: boolean) => void;
  closeContextModal: <TKey extends MantineModal>(modalKey: TKey, canceled?: boolean) => void;
  closeAllModals: () => void;
  updateModal: (props: { modalId: string } & Partial<OpenConfirmModal>) => void;
  updateContextModal: <TKey extends MantineModal>(
    props: { modalKey: TKey } & Partial<OpenContextModal<TKey>>
  ) => void;
}

export interface MantineModalsOverride {}

export type MantineModals = MantineModalsOverride extends {
  modals: infer CustomModals;
}
  ? CustomModals
  : Record<string, React.FC<ContextModalProps<any>>>;

export type MantineModal = keyof MantineModals;

export const ModalsContext = createContext<ModalsContextProps>(null as any);
ModalsContext.displayName = '@mantine/modals/ModalsContext';
