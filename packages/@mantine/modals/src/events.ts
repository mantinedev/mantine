import { createUseExternalEvents } from '@mantine/core';
import {
  MantineModal,
  MantineModals,
  ModalSettings,
  OpenConfirmModal,
  OpenContextModal,
} from './context';

type ModalsEvents = {
  openModal: (payload: ModalSettings) => string;
  closeModal: (id: string) => void;
  closeContextModal: <TKey extends MantineModal>(id: TKey) => void;
  closeAllModals: () => void;
  openConfirmModal: (payload: OpenConfirmModal) => void;
  openContextModal: <TKey extends MantineModal>(
    payload: OpenContextModal<Parameters<MantineModals[TKey]>[0]['innerProps']> & { modal: TKey }
  ) => void;
  updateModal: (payload: { modalId: string } & Partial<ModalSettings>) => void;
  updateContextModal: (payload: { modalId: string } & Partial<OpenContextModal<any>>) => void;
};

export const [useModalsEvents, createEvent] =
  createUseExternalEvents<ModalsEvents>('mantine-modals');

export const openModal: ModalsEvents['openModal'] = (payload) => {
  createEvent('openModal')(payload);
  return payload.modalId!;
};

export const openConfirmModal: ModalsEvents['openConfirmModal'] = (payload) => {
  createEvent('openConfirmModal')(payload);
  return payload.modalId!;
};

export const openContextModal: ModalsEvents['openContextModal'] = <TKey extends MantineModal>(
  payload: OpenContextModal<Parameters<MantineModals[TKey]>[0]['innerProps']> & { modal: TKey }
) => {
  createEvent('openContextModal')(payload);
  return payload.modalId!;
};

export const closeModal = createEvent('closeModal');

export const closeContextModal: ModalsEvents['closeContextModal'] = <TKey extends MantineModal>(
  id: TKey
) => createEvent('closeContextModal')(id);

export const closeAllModals = createEvent('closeAllModals');

export const updateModal = (payload: { modalId: string } & Partial<ModalSettings>) =>
  createEvent('updateModal')(payload);

export const updateContextModal = (payload: { modalId: string } & Partial<OpenContextModal<any>>) =>
  createEvent('updateContextModal')(payload);;

export const modals: {
  open: ModalsEvents['openModal'];
  close: ModalsEvents['closeModal'];
  closeAll: ModalsEvents['closeAllModals'];
  openConfirmModal: ModalsEvents['openConfirmModal'];
  openContextModal: ModalsEvents['openContextModal'];
  updateModal: ModalsEvents['updateModal']
} = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal,
  updateModal
};
