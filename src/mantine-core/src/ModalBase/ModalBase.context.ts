import { createSafeContext } from '@mantine/utils';
import { TransitionProps } from '../Transition';

interface ModalBaseContext {
  __staticSelector: string;
  opened: boolean;
  onClose(): void;
  closeOnClickOutside: boolean;
  transitionProps: Partial<Omit<TransitionProps, 'mounted'>>;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree'
);
