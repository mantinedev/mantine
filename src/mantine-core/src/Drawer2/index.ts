import type {
  ModalBaseBodyProps,
  ModalBaseCloseButtonProps,
  ModalBaseHeaderProps,
  ModalBaseOverlayProps,
  ModalBaseStylesNames,
  ModalBaseTitleProps,
} from '../ModalBase';

export { Drawer } from './Drawer';
export type { DrawerProps } from './Drawer';
export type { DrawerContentProps } from './DrawerContent/DrawerContent';
export type DrawerStylesNames = ModalBaseStylesNames;

export type DrawerBodyProps = ModalBaseBodyProps;
export type DrawerCloseButtonProps = ModalBaseCloseButtonProps;
export type DrawerHeaderProps = ModalBaseHeaderProps;
export type DrawerOverlayProps = ModalBaseOverlayProps;
export type DrawerTitleProps = ModalBaseTitleProps;
