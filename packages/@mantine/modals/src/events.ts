import { createUseExternalEvents } from '@mantine/core';
import {
  MantineModal,
  MantineModals,
  ModalSettings,
  OpenConfirmModal,
  OpenContextModal,
} from './context';

type ModalsEvents = {
  openModal: (payload: ModalSettings) => void;
  closeModal: (id: string) => void;
  closeContextModal: <TKey extends MantineModal>(id: TKey) => void;
  closeAllModals: () => void;
  openConfirmModal: (payload: OpenConfirmModal) => void;
  openContextModal: <TKey extends MantineModal>(
    payload: OpenContextModal<Parameters<MantineModals[TKey]>[0]['innerProps']> & { modal: TKey }
  ) => void;
};

export const [useModalsEvents, createEvent] =
  createUseExternalEvents<ModalsEvents>('mantine-modals');

export const openModal = createEvent('openModal');
export const closeModal = createEvent('closeModal');
export const closeContextModal: ModalsEvents['closeContextModal'] = <TKey extends MantineModal>(
  id: TKey
) => createEvent('closeContextModal')(id);
export const closeAllModals = createEvent('closeAllModals');
export const openConfirmModal = createEvent('openConfirmModal');
export const openContextModal: ModalsEvents['openContextModal'] = <TKey extends MantineModal>(
  payload: OpenContextModal<Parameters<MantineModals[TKey]>[0]['innerProps']> & { modal: TKey }
) => createEvent('openContextModal')(payload);

export const modals: {
  open: ModalsEvents['openModal'];
  close: ModalsEvents['closeModal'];
  closeAll: ModalsEvents['closeAllModals'];
  openConfirmModal: ModalsEvents['openConfirmModal'];
  openContextModal: ModalsEvents['openContextModal'];
} = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal,
};
