import React from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import {
  ModalBase,
  ModalBaseDefaultProps,
  ModalBaseOverlayProps,
  ModalBaseCloseButtonProps,
} from '../ModalBase';
import { DrawerRoot, DrawerRootProps } from './DrawerRoot/DrawerRoot';
import { DrawerContent } from './DrawerContent/DrawerContent';

export interface DrawerProps extends Omit<DrawerRootProps, 'title'> {
  /** Modal title */
  title?: React.ReactNode;

  /** Determines whether overlay should be rendered, true by default */
  withOverlay?: boolean;

  /** Props added to Overlay component, use configure opacity, background color, styles and other properties */
  overlayProps?: ModalBaseOverlayProps;

  /** Modal content */
  children?: React.ReactNode;

  /** Determines whether close button should be rendered, true by default */
  withCloseButton?: boolean;

  /** Props added to close button */
  closeButtonProps?: ModalBaseCloseButtonProps;
}

const defaultProps: Partial<DrawerProps> = {
  ...ModalBaseDefaultProps,
  withOverlay: true,
  withCloseButton: true,
};

export function Drawer(props: DrawerProps) {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    ...others
  } = useComponentDefaultProps('Drawer', defaultProps, props);

  const hasHeader = !!title || withCloseButton;

  return (
    <DrawerRoot {...others}>
      {withOverlay && <ModalBase.Overlay {...overlayProps} />}
      <DrawerContent>
        {hasHeader && (
          <ModalBase.Header>
            {title && <ModalBase.Title>{title}</ModalBase.Title>}
            {withCloseButton && <ModalBase.CloseButton {...closeButtonProps} />}
          </ModalBase.Header>
        )}

        <ModalBase.Body>{children}</ModalBase.Body>
      </DrawerContent>
    </DrawerRoot>
  );
}

Drawer.Root = DrawerRoot;
Drawer.CloseButton = ModalBase.CloseButton;
Drawer.Overlay = ModalBase.Overlay;
Drawer.Content = DrawerContent;
Drawer.Header = ModalBase.Header;
Drawer.Title = ModalBase.Title;
Drawer.Body = ModalBase.Body;
Drawer.NativeScrollArea = ModalBase.NativeScrollArea;
