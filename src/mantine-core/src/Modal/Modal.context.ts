import { MantineNumberSize } from '@mantine/styles';
import { createSafeContext } from '@mantine/utils';

export type ScrollAreaComponent = React.FC<{
  mah: React.CSSProperties['maxHeight'];
  children: React.ReactNode;
}>;

interface ModalContext {
  yOffset: string | number;
  radius: MantineNumberSize;
  scrollAreaComponent: ScrollAreaComponent;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree'
);
