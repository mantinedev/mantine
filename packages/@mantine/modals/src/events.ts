import { createUseExternalEvents } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { ModalsContextProps } from './context';

type ModalsEvents = Omit<ModalsContextProps, 'modals' | 'modalProps'>;

export const [useModalsEvents, createEvent] =
  createUseExternalEvents<ModalsEvents>('mantine-modals');

export const openModal: ModalsEvents['openModal'] = (payload) => {
  const id = payload.modalId || randomId();
  createEvent('openModal')({ ...payload, modalId: id });
  return id;
};

export const openConfirmModal: ModalsEvents['openConfirmModal'] = (payload) => {
  const id = payload.modalId || randomId();
  createEvent('openConfirmModal')({ ...payload, modalId: id });
  return id;
};

export const openContextModal: ModalsEvents['openContextModal'] = (payload) => {
  const id = payload.modalId || randomId();
  createEvent('openContextModal')({ ...payload, modalId: id });
  return id;
};

export const closeModal: ModalsEvents['closeModal'] = createEvent('closeModal');

export const closeContextModal: ModalsEvents['closeContextModal'] = (id) =>
  createEvent('closeContextModal')(id);

export const closeAllModals: ModalsEvents['closeAllModals'] = createEvent('closeAllModals');

export const updateModal: ModalsEvents['updateModal'] = (payload) =>
  createEvent('updateModal')(payload);

export const updateContextModal: ModalsEvents['updateContextModal'] = (payload) =>
  createEvent('updateContextModal')(payload);

export const modals: {
  open: ModalsEvents['openModal'];
  openConfirmModal: ModalsEvents['openConfirmModal'];
  openContextModal: ModalsEvents['openContextModal'];
  close: ModalsEvents['closeModal'];
  closeContext: ModalsEvents['closeContextModal'];
  closeAll: ModalsEvents['closeAllModals'];
  updateModal: ModalsEvents['updateModal'];
  updateContextModal: ModalsEvents['updateContextModal'];
} = {
  open: openModal,
  openConfirmModal,
  openContextModal,
  close: closeModal,
  closeContext: closeContextModal,
  closeAll: closeAllModals,
  updateModal,
  updateContextModal,
};
