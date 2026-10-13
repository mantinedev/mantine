import {
  ManagedOverlayBaseOptions,
  ManagedOverlayHandle,
  useManagedOverlay,
} from '../../../core/ManagedOverlay';
import { ManagedDrawerProps, drawerOutletConfig } from './DrawerOutlet';

export interface UseDrawerOptions extends ManagedOverlayBaseOptions, ManagedDrawerProps {}

export type UseDrawerReturnValue = ManagedOverlayHandle<ManagedDrawerProps>;

export function useDrawer(options: UseDrawerOptions = {}): UseDrawerReturnValue {
  return useManagedOverlay<ManagedDrawerProps>(options, drawerOutletConfig);
}
