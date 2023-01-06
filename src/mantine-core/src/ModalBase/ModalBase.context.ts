import { ClassNames, MantineNumberSize, Styles } from '@mantine/styles';
import { createSafeContext } from '@mantine/utils';
import { TransitionOverride } from '../Transition';
import type { ModalBaseStylesNames } from './ModalBase';

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
  trapFocus: boolean;
  closeOnEscape: boolean;
  stylesApi: {
    name: string;
    size: MantineNumberSize;
    variant: string;
    classNames: ClassNames<ModalBaseStylesNames>;
    styles: Styles<ModalBaseStylesNames>;
  };
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree'
);
