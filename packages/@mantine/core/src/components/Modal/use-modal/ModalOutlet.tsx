import { ManagedOverlayOutlet, ManagedOverlayOutletConfig } from '../../../core/ManagedOverlay';
import { ModalStackContext } from '../../../core/OverlayStack';
import { Modal, ModalProps } from '../Modal';

export type ManagedModalProps = Partial<Omit<ModalProps, 'opened' | 'onClose' | 'stackId' | 'id'>>;

export const modalOutletConfig: ManagedOverlayOutletConfig = {
  storeKey: 'modal',
  name: 'Modal',
  get component() {
    return Modal;
  },
  stackContext: ModalStackContext,
};

export function ModalOutlet() {
  return <ManagedOverlayOutlet config={modalOutletConfig} />;
}

ModalOutlet.displayName = '@mantine/core/ModalOutlet';
