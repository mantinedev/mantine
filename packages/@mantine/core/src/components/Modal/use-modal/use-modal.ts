import {
  ManagedOverlayBaseOptions,
  ManagedOverlayHandle,
  useManagedOverlay,
} from '../../../core/ManagedOverlay';
import { ManagedModalProps, modalOutletConfig } from './ModalOutlet';

export interface UseModalOptions extends ManagedOverlayBaseOptions, ManagedModalProps {}

export type UseModalReturnValue = ManagedOverlayHandle<ManagedModalProps>;

export function useModal(options: UseModalOptions = {}): UseModalReturnValue {
  return useManagedOverlay<ManagedModalProps>(options, modalOutletConfig);
}
