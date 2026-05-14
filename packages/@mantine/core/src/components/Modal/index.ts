import type { ModalCssVariables, ModalFactory, ModalProps, ModalStylesNames } from './Modal';
import type { ModalContextValue } from './Modal.context';
import type { ModalBodyProps } from './ModalBody';
import type { ModalCloseButtonProps } from './ModalCloseButton';
import type { ModalContentProps } from './ModalContent';
import type { ModalHeaderProps } from './ModalHeader';
import type { ModalOverlayProps } from './ModalOverlay';
import type { ModalRootProps } from './ModalRoot';
import type { ModalStackProps } from './ModalStack';
import type { ModalTitleProps } from './ModalTitle';

export { Modal } from './Modal';
export { ModalRoot } from './ModalRoot';
export { ModalBody } from './ModalBody';
export { ModalCloseButton } from './ModalCloseButton';
export { ModalContent } from './ModalContent';
export { ModalHeader } from './ModalHeader';
export { ModalOverlay } from './ModalOverlay';
export { ModalTitle } from './ModalTitle';
export { ModalStack, ModalStackContext } from './ModalStack';
export { useModalsStack, useDrawersStack } from './use-modals-stack';
export { useModalContext } from './Modal.context';

export type {
  ModalProps,
  ModalStylesNames,
  ModalCssVariables,
  ModalFactory,
  ModalRootProps,
  ModalBodyProps,
  ModalCloseButtonProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalOverlayProps,
  ModalTitleProps,
  ModalStackProps,
  ModalContextValue,
};
