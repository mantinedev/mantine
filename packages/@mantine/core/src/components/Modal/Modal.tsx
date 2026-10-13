import { factory, Factory, getDefaultZIndex, useProps } from '../../core';
import { ModalStackContext, useOverlayStackEntry } from '../../core/OverlayStack';
import { ModalBody, ModalBodyProps } from './ModalBody';
import { ModalCloseButton, ModalCloseButtonProps } from './ModalCloseButton';
import { ModalContent, ModalContentProps } from './ModalContent';
import { ModalFooter, ModalFooterProps } from './ModalFooter';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
import { ModalOverlay, ModalOverlayProps } from './ModalOverlay';
import {
  ModalRoot,
  ModalRootCssVariables,
  ModalRootProps,
  ModalRootStylesNames,
} from './ModalRoot';
import { ModalStack, ModalStackProps } from './ModalStack';
import { ModalTitle, ModalTitleProps } from './ModalTitle';
import { ModalOutlet } from './use-modal/ModalOutlet';
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
    Outlet: typeof ModalOutlet;
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
    stackId,
    zIndex,
    onExitTransitionEnd,
    transitionProps,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    ...others
  } = useProps('Modal', defaultProps, _props);
  const hasHeader = !!title || withCloseButton;
  const stackEntry = useOverlayStackEntry(ModalStackContext, {
    stackId,
    opened,
    onClose,
    zIndex,
    closeOnEscape,
    withOverlay,
    onExitTransitionEnd,
  });
  const stackTransitionProps = stackEntry.hasSameKindSiblings
    ? { ...transitionProps, transition: STACK_TRANSITION }
    : transitionProps;

  return (
    <ModalRoot
      radius={radius}
      opened={opened}
      onClose={onClose}
      transitionProps={stackTransitionProps}
      {...others}
      {...stackEntry.rootProps}
    >
      {withOverlay && <ModalOverlay {...stackEntry.overlayProps} {...overlayProps} />}
      <ModalContent
        radius={radius}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        {...stackEntry.contentProps}
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
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Stack = ModalStack;
Modal.Outlet = ModalOutlet;

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
