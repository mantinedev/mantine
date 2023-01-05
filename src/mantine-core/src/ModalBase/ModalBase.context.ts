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
  id: string;
  getTitleId(): string;
  getBodyId(): string;
  titleMounted: boolean;
  bodyMounted: boolean;
  setTitleMounted(mounted: boolean): void;
  setBodyMounted(mounted: boolean): void;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree'
);
