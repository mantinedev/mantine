import { use, useEffect, useId } from 'react';
import { factory, Factory, getDefaultZIndex, useProps } from '../../core';
import { ModalBody, type ModalBodyProps } from './ModalBody';
import { ModalCloseButton, type ModalCloseButtonProps } from './ModalCloseButton';
import { ModalContent, type ModalContentProps } from './ModalContent';
import { ModalFooter, type ModalFooterProps } from './ModalFooter';
import { ModalHeader, type ModalHeaderProps } from './ModalHeader';
import { ModalOverlay, type ModalOverlayProps } from './ModalOverlay';
import {
  ModalRoot,
  ModalRootCssVariables,
  ModalRootProps,
  ModalRootStylesNames,
} from './ModalRoot';
import { ModalStack, ModalStackContext, type ModalStackProps } from './ModalStack';
import { ModalTitle, type ModalTitleProps } from './ModalTitle';
import classes from './Modal.module.css';
export type ModalStylesNames = ModalRootStylesNames;
export type ModalCssVariables = ModalRootCssVariables;

export interface ModalProps extends ModalRootProps {
  __staticSelector?: string;

  /** Modal title @category appearance */
  title?: React.ReactNode;

  /** If set, the overlay is rendered @default true @category appearance */
  withOverlay?: boolean;

  /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
  overlayProps?: ModalOverlayProps;

  /** Modal content @category appearance */
  children?: React.ReactNode;

  /** If set, the close button is rendered @default true @category appearance */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: ModalCloseButtonProps;

  /** Id of the modal in the `Modal.Stack`, generated automatically if not set */
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
    Footer: typeof ModalFooter;
    Title: typeof ModalTitle;
    CloseButton: typeof ModalCloseButton;
    Stack: typeof ModalStack;
  };
}>;

const STACK_TRANSITION = {
  in: { opacity: 1, transform: 'translateY(0)' },
  out: { opacity: 0, transform: 'translateY(50px)' },
  transitionProperty: 'opacity, transform',
};

const defaultProps = {
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
} satisfies Partial<ModalProps>;

export const Modal = factory<ModalFactory>((_props) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius,
    opened,
    onClose,
    closeOnEscape,
    trapFocus,
    stackId,
    zIndex,
    onExitTransitionEnd,
    transitionProps,
    ...others
  } = useProps('Modal', defaultProps, _props);
  const ctx = use(ModalStackContext);
  const autoStackId = useId();
  const resolvedStackId = stackId || autoStackId;
  const hasHeader = !!title || withCloseButton;
  const isStackTop = !!ctx && ctx.currentId === resolvedStackId;
  const isStackActive = !!ctx && ctx.activeId === resolvedStackId;
  const hasOtherModals = !!ctx && ctx.stack.some((id) => id !== resolvedStackId);
  const stackTransitionProps = hasOtherModals
    ? { ...transitionProps, transition: STACK_TRANSITION }
    : transitionProps;
  const stackProps = ctx
    ? {
        closeOnEscape: isStackActive && closeOnEscape,
        trapFocus: isStackActive && trapFocus,
        zIndex: ctx.getZIndex(resolvedStackId),
        __handledEscapeEvents: ctx.handledEscapeEvents,
      }
    : {};

  const overlayVisible = withOverlay === false ? false : hasOtherModals ? isStackTop : opened;

  const depthProps = ctx
    ? {
        ...(ctx.withStackTransform
          ? {
              __depth: ctx.getDepth(resolvedStackId),
              __visible: ctx.isVisible(resolvedStackId),
              __dragProgress: ctx.dragProgress,
              __topRect: ctx.topRect,
              __reportTopRect: (rect: { width: number; height: number }) =>
                ctx.reportTopRect(resolvedStackId, rect),
            }
          : { __visible: ctx.isVisible(resolvedStackId) }),
        __instant: !opened && ctx.getDepth(resolvedStackId) > 0,
      }
    : {};

  const addOverlay = ctx?.addOverlay;
  const markClosing = ctx?.markClosing;
  const removeOverlay = ctx?.removeOverlay;
  const registerCloseHandler = ctx?.registerCloseHandler;

  useEffect(() => {
    if (opened) {
      addOverlay?.(resolvedStackId, zIndex || getDefaultZIndex('modal'));
    } else {
      markClosing?.(resolvedStackId);
    }
  }, [opened, resolvedStackId, zIndex, addOverlay, markClosing]);

  useEffect(() => {
    if (!removeOverlay) {
      return undefined;
    }

    return () => removeOverlay(resolvedStackId);
  }, [removeOverlay, resolvedStackId]);

  useEffect(() => {
    if (!registerCloseHandler) {
      return undefined;
    }

    return registerCloseHandler(resolvedStackId, onClose);
  }, [registerCloseHandler, resolvedStackId, onClose]);

  const handleExitTransitionEnd = () => {
    removeOverlay?.(resolvedStackId);
    onExitTransitionEnd?.();
  };

  return (
    <ModalRoot
      radius={radius}
      opened={opened}
      onClose={onClose}
      zIndex={ctx ? ctx.getZIndex(resolvedStackId) : zIndex}
      onExitTransitionEnd={handleExitTransitionEnd}
      transitionProps={stackTransitionProps}
      closeOnEscape={closeOnEscape}
      trapFocus={trapFocus}
      {...others}
      {...stackProps}
    >
      {withOverlay && (
        <ModalOverlay
          visible={overlayVisible}
          transitionProps={hasOtherModals ? { duration: 0 } : undefined}
          {...(ctx ? { zIndex: ctx.maxZIndex } : null)}
          {...overlayProps}
        />
      )}
      <ModalContent radius={radius} {...depthProps}>
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
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Stack = ModalStack;

export namespace Modal {
  export type Props = ModalProps;
  export type StylesNames = ModalStylesNames;
  export type CssVariables = ModalCssVariables;
  export type Factory = ModalFactory;

  export namespace Root {
    export type Props = ModalRootProps;
  }

  export namespace Body {
    export type Props = ModalBodyProps;
  }

  export namespace CloseButton {
    export type Props = ModalCloseButtonProps;
  }

  export namespace Content {
    export type Props = ModalContentProps;
  }

  export namespace Header {
    export type Props = ModalHeaderProps;
  }

  export namespace Footer {
    export type Props = ModalFooterProps;
  }

  export namespace Overlay {
    export type Props = ModalOverlayProps;
  }

  export namespace Title {
    export type Props = ModalTitleProps;
  }

  export namespace Stack {
    export type Props = ModalStackProps;
  }
}
