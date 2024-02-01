import { createSafeContext, GetStylesApi } from '../../core';
import type { ModalRootFactory } from './ModalRoot';

export type ScrollAreaComponent = React.FC<any>;

interface ModalContext {
  fullScreen: boolean | undefined;
  yOffset: string | number | undefined;
  scrollAreaComponent: ScrollAreaComponent | undefined;
  getStyles: GetStylesApi<ModalRootFactory>;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree'
);
