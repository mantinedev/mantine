import { DrawerStackContext, OverlayStackProvider } from '../../core/OverlayStack';

export { DrawerStackContext } from '../../core/OverlayStack';

export interface DrawerStackProps {
  children: React.ReactNode;

  /** Maximum number of stacked drawers that remain visible behind the top one, others are hidden @default 5 */
  maxDepth?: number;

  /** If set, stacked drawers are offset and scaled to reveal the drawers behind the top one @default true */
  withStackTransform?: boolean;
}

export function DrawerStack({ children, maxDepth, withStackTransform }: DrawerStackProps) {
  return (
    <OverlayStackProvider
      context={DrawerStackContext}
      kind="drawer"
      maxDepth={maxDepth}
      withStackTransform={withStackTransform}
    >
      {children}
    </OverlayStackProvider>
  );
}

DrawerStack.displayName = '@mantine/core/DrawerStack';
