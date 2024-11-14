import { useEffect } from 'react';
import { factory, Factory, getDefaultZIndex, useProps } from '../../core';
import { ModalBaseCloseButtonProps, ModalBaseOverlayProps } from '../ModalBase';
import { ModalBody } from './ModalBody';
import { ModalCloseButton } from './ModalCloseButton';
import { ModalContent } from './ModalContent';
import { ModalHeader } from './ModalHeader';
import { ModalOverlay } from './ModalOverlay';
import {
  ModalRoot,
  ModalRootCssVariables,
  ModalRootProps,
  ModalRootStylesNames,
} from './ModalRoot';
import { ModalStack, useModalStackContext } from './ModalStack';
import { ModalTitle } from './ModalTitle';
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

  /** Id of the modal in the `Modal.Stack` */
  stackId?: string;
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
    Stack: typeof ModalStack;
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
  transitionProps: { duration: 200, transition: 'fade-down' },
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
    opened,
    stackId,
    zIndex,
    ...others
  } = useProps('Modal', defaultProps, _props);
  const ctx = useModalStackContext();
  const hasHeader = !!title || withCloseButton;
  const stackProps =
    ctx && stackId
      ? {
          closeOnEscape: ctx.currentId === stackId,
          trapFocus: ctx.currentId === stackId,
          zIndex: ctx.getZIndex(stackId),
        }
      : {};

  const overlayVisible =
    withOverlay === false ? false : stackId && ctx ? ctx.currentId === stackId : opened;

  useEffect(() => {
    if (ctx && stackId) {
      opened
        ? ctx.addModal(stackId, zIndex || getDefaultZIndex('modal'))
        : ctx.removeModal(stackId);
    }
  }, [opened, stackId, zIndex]);

  return (
    <ModalRoot
      ref={ref}
      radius={radius}
      opened={opened}
      zIndex={ctx && stackId ? ctx.getZIndex(stackId) : zIndex}
      {...others}
      {...stackProps}
    >
      {withOverlay && (
        <ModalOverlay
          visible={overlayVisible}
          transitionProps={ctx && stackId ? { duration: 0 } : undefined}
          {...overlayProps}
        />
      )}
      <ModalContent
        radius={radius}
        __hidden={ctx && stackId && opened ? stackId !== ctx.currentId : false}
      >
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
Modal.Stack = ModalStack;
