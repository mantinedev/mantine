export { ModalsProvider } from './ModalsProvider';
export { useModals } from './use-modals/use-modals';
export {
  openModal,
  closeModal,
  closeAllModals,
  openConfirmModal,
  openContextModal,
  updateModal,
  updateContextModal,
  modals,
} from './events';

export type { ModalsProviderProps } from './ModalsProvider';
export type {
  ContextModalProps,
  MantineModalsOverride,
  MantineModals,
  MantineModal,
} from './context';
