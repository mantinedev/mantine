import { MantineNumberSize } from '@mantine/styles';
import { createSafeContext } from '@mantine/utils';
import { TransitionOverride } from '../Transition';

interface ModalBaseContext {
  __staticSelector: string;
  opened: boolean;
  onClose(): void;
  closeOnClickOutside: boolean;
  transitionProps: TransitionOverride;
  zIndex: number;
  padding: MantineNumberSize;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree'
);
