import { createUseExternalEvents } from '@mantine/utils';
import { ModalSettings, OpenConfirmModal, OpenContextModal } from './context';

type ModalsEvents = {
  openModal(payload: ModalSettings): void;
  closeModal(id: string): void;
  closeAllModals(): void;
  openConfirmModal(payload: OpenConfirmModal): void;
  openContextModal(payload: OpenContextModal & { modal: string }): void;
};

export const [useModalsEvents, createEvent] =
  createUseExternalEvents<ModalsEvents>('mantine-modals');

export const openModal = createEvent('openModal');
export const closeModal = createEvent('closeModal');
export const closeAllModals = createEvent('closeAllModals');
export const openConfirmModal = createEvent('openConfirmModal');
export const openContextModal = createEvent('openContextModal');
