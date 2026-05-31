import { use, useEffect } from 'react';
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

  /** Modal title */
  title?: React.ReactNode;

  /** If set, the overlay is rendered @default true */
  withOverlay?: boolean;

  /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
  overlayProps?: ModalOverlayProps;

  /** Modal content */
  children?: React.ReactNode;

  /** If set, the close button is rendered @default true */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: ModalCloseButtonProps;

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
    stackId,
    zIndex,
    onExitTransitionEnd,
    transitionProps,
    ...others
  } = useProps('Modal', defaultProps, _props);
  const ctx = use(ModalStackContext);
  const hasHeader = !!title || withCloseButton;
  const isStackActive = !!(ctx && stackId && ctx.currentId === stackId);
  const hasOtherModals = !!(ctx && stackId && ctx.stack.some((id) => id !== stackId));
  const stackTransitionProps = hasOtherModals
    ? { ...transitionProps, transition: STACK_TRANSITION }
    : transitionProps;
  const stackProps =
    ctx && stackId
      ? {
          closeOnEscape: isStackActive,
          trapFocus: isStackActive,
          zIndex: ctx.getZIndex(stackId),
        }
      : {};

  const overlayVisible =
    withOverlay === false ? false : stackId && ctx ? ctx.currentId === stackId : opened;

  const depthProps =
    ctx && stackId
      ? {
          ...(ctx.withStackTransform
            ? {
                __depth: ctx.getDepth(stackId),
                __visible: ctx.isVisible(stackId),
                __dragProgress: ctx.dragProgress,
                __topRect: ctx.topRect,
                __reportTopRect: (rect: { width: number; height: number }) =>
                  ctx.reportTopRect(stackId, rect),
              }
            : { __visible: ctx.isVisible(stackId) }),
          __instant: !opened && ctx.getDepth(stackId) > 0,
        }
      : {};

  useEffect(() => {
    if (ctx && stackId) {
      if (opened) {
        ctx.addOverlay(stackId, zIndex || getDefaultZIndex('modal'));
      } else {
        ctx.markClosing(stackId);
      }
    }
  }, [opened, stackId, zIndex]);

  const handleExitTransitionEnd = () => {
    if (ctx && stackId) {
      ctx.removeOverlay(stackId);
    }
    onExitTransitionEnd?.();
  };

  return (
    <ModalRoot
      radius={radius}
      opened={opened}
      zIndex={ctx && stackId ? ctx.getZIndex(stackId) : zIndex}
      onExitTransitionEnd={handleExitTransitionEnd}
      transitionProps={stackTransitionProps}
      {...others}
      {...stackProps}
    >
      {withOverlay && (
        <ModalOverlay
          visible={overlayVisible}
          transitionProps={ctx && stackId ? { duration: 0 } : undefined}
          {...(ctx && stackId ? { zIndex: ctx.maxZIndex } : null)}
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
