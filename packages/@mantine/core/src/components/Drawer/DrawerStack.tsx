import { OverlayStackProvider } from '../OverlayStack/OverlayStack';

export { OverlayStackContext as DrawerStackContext } from '../OverlayStack/OverlayStack.context';

export interface DrawerStackProps {
  children: React.ReactNode;

  /** Maximum number of stacked drawers that remain visible behind the top one, others are hidden @default 5 */
  maxDepth?: number;

  /** If set, stacked drawers are offset and scaled to reveal the drawers behind the top one @default true */
  withStackTransform?: boolean;
}

export function DrawerStack({ children, maxDepth, withStackTransform }: DrawerStackProps) {
  return (
    <OverlayStackProvider maxDepth={maxDepth} withStackTransform={withStackTransform}>
      {children}
    </OverlayStackProvider>
  );
}

DrawerStack.displayName = '@mantine/core/DrawerStack';
