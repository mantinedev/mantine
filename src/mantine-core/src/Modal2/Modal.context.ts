import { createSafeContext } from '@mantine/utils';

export type ScrollAreaComponent = React.FC<{
  maxHeight: React.CSSProperties['maxHeight'];
  children: React.ReactNode;
}>;

interface ModalContext {
  yOffset: string | number;
  scrollAreaComponent: ScrollAreaComponent;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree'
);
