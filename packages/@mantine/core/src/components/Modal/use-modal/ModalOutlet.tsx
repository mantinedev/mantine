import { ManagedOverlayOutlet, ManagedOverlayOutletConfig } from '../../../core/ManagedOverlay';
import { ModalStackContext } from '../../../core/OverlayStack';
import { Modal, ModalProps } from '../Modal';
import { ModalStack } from '../ModalStack';

export type ManagedModalProps = Partial<Omit<ModalProps, 'opened' | 'onClose' | 'stackId' | 'id'>>;

export const modalOutletConfig: ManagedOverlayOutletConfig = {
  storeKey: 'modal',
  get component() {
    return Modal;
  },
  get stack() {
    return ModalStack;
  },
  stackContext: ModalStackContext,
};

export function ModalOutlet() {
  return <ManagedOverlayOutlet config={modalOutletConfig} />;
}

ModalOutlet.displayName = '@mantine/core/ModalOutlet';
