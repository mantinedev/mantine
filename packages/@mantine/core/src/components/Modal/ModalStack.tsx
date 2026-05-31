import { OverlayStackProvider } from '../OverlayStack/OverlayStack';

export { OverlayStackContext as ModalStackContext } from '../OverlayStack/OverlayStack.context';

export interface ModalStackProps {
  children: React.ReactNode;

  /** Maximum number of stacked modals that remain visible behind the top one, others are hidden @default 5 */
  maxDepth?: number;

  /** If set, stacked modals are offset and scaled to reveal the modals behind the top one @default true */
  withStackTransform?: boolean;
}

export function ModalStack({ children, maxDepth, withStackTransform }: ModalStackProps) {
  return (
    <OverlayStackProvider maxDepth={maxDepth} withStackTransform={withStackTransform}>
      {children}
    </OverlayStackProvider>
  );
}

ModalStack.displayName = '@mantine/core/ModalStack';
