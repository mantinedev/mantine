import { ManagedOverlayOutlet, ManagedOverlayOutletConfig } from '../../../core/ManagedOverlay';
import { DrawerStackContext } from '../../../core/OverlayStack';
import { Drawer, DrawerProps } from '../Drawer';

export type ManagedDrawerProps = Partial<
  Omit<DrawerProps, 'opened' | 'onClose' | 'stackId' | 'id'>
>;

export const drawerOutletConfig: ManagedOverlayOutletConfig = {
  storeKey: 'drawer',
  name: 'Drawer',
  get component() {
    return Drawer;
  },
  stackContext: DrawerStackContext,
};

export function DrawerOutlet() {
  return <ManagedOverlayOutlet config={drawerOutletConfig} />;
}

DrawerOutlet.displayName = '@mantine/core/DrawerOutlet';
