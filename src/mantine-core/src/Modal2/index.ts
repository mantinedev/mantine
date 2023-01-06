import type {
  ModalBaseBodyProps,
  ModalBaseCloseButtonProps,
  ModalBaseHeaderProps,
  ModalBaseOverlayProps,
  ModalBaseStylesNames,
  ModalBaseTitleProps,
} from '../ModalBase';

export { Modal } from './Modal';
export type { ModalProps } from './Modal';
export type { ModalContentProps } from './ModalContent/ModalContent';
export type ModalStylesNames = ModalBaseStylesNames;

export type ModalBodyProps = ModalBaseBodyProps;
export type ModalCloseButtonProps = ModalBaseCloseButtonProps;
export type ModalHeaderProps = ModalBaseHeaderProps;
export type ModalOverlayProps = ModalBaseOverlayProps;
export type ModalTitleProps = ModalBaseTitleProps;
