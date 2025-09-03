export { ModalsProvider } from './ModalsProvider.js';
export { useModals } from './use-modals/use-modals.js';
export {
  openModal,
  closeModal,
  closeAllModals,
  openConfirmModal,
  openContextModal,
  updateModal,
  updateContextModal,
  modals,
} from './events.js';

export type { ModalsProviderProps } from './ModalsProvider';
export type {
  ContextModalProps,
  MantineModalsOverride,
  MantineModals,
  MantineModal,
} from './context.js';
