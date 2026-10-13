import { ManagedOverlayOutlet, ManagedOverlayOutletConfig } from '../../../core/ManagedOverlay';
import { DrawerStackContext } from '../../../core/OverlayStack';
import { Drawer, DrawerProps } from '../Drawer';
import { DrawerStack } from '../DrawerStack';

export type ManagedDrawerProps = Partial<
  Omit<DrawerProps, 'opened' | 'onClose' | 'stackId' | 'id'>
>;

export const drawerOutletConfig: ManagedOverlayOutletConfig = {
  storeKey: 'drawer',
  get component() {
    return Drawer;
  },
  get stack() {
    return DrawerStack;
  },
  stackContext: DrawerStackContext,
};

export function DrawerOutlet() {
  return <ManagedOverlayOutlet config={drawerOutletConfig} />;
}

DrawerOutlet.displayName = '@mantine/core/DrawerOutlet';
