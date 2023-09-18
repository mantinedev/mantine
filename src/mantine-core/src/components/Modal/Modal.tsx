import React from 'react';
import { factory, useProps, Factory, getDefaultZIndex } from '../../core';
import { ModalBaseOverlayProps, ModalBaseCloseButtonProps } from '../ModalBase';
import {
  ModalRoot,
  ModalRootProps,
  ModalRootCssVariables,
  ModalRootStylesNames,
} from './ModalRoot';
import { ModalBody } from './ModalBody';
import { ModalCloseButton } from './ModalCloseButton';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './ModalContent';
import { ModalTitle } from './ModalTitle';
import { ModalHeader } from './ModalHeader';
import classes from './Modal.module.css';

export type ModalStylesNames = ModalRootStylesNames;
export type ModalCssVariables = ModalRootCssVariables;

export interface ModalProps extends ModalRootProps {
  __staticSelector?: string;

  /** Modal title */
  title?: React.ReactNode;

  /** Determines whether the overlay should be rendered, `true` by default */
  withOverlay?: boolean;

  /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
  overlayProps?: ModalBaseOverlayProps;

  /** Modal content */
  children?: React.ReactNode;

  /** Determines whether the close button should be rendered, `true` by default */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: ModalBaseCloseButtonProps;
}

export type ModalFactory = Factory<{
  props: ModalProps;
  ref: HTMLDivElement;
  stylesNames: ModalStylesNames;
  vars: ModalCssVariables;
  staticComponents: {
    Root: typeof ModalRoot;
    Overlay: typeof ModalOverlay;
    Content: typeof ModalContent;
    Body: typeof ModalBody;
    Header: typeof ModalHeader;
    Title: typeof ModalTitle;
    CloseButton: typeof ModalCloseButton;
  };
}>;

const defaultProps: Partial<ModalProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex('modal'),
  transitionProps: { duration: 200, transition: 'pop' },
  withOverlay: true,
  withCloseButton: true,
};

export const Modal = factory<ModalFactory>((_props, ref) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius,
    ...others
  } = useProps('Modal', defaultProps, _props);

  const hasHeader = !!title || withCloseButton;

  return (
    <ModalRoot ref={ref} radius={radius} {...others}>
      {withOverlay && <ModalOverlay {...overlayProps} />}
      <ModalContent radius={radius}>
        {hasHeader && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {withCloseButton && <ModalCloseButton {...closeButtonProps} />}
          </ModalHeader>
        )}

        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalRoot>
  );
});

Modal.classes = classes;
Modal.displayName = '@mantine/core/Modal';
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
