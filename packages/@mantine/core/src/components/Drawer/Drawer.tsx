import { factory, Factory, getDefaultZIndex, useProps } from '../../core';
import { DrawerStackContext, useOverlayStackEntry } from '../../core/OverlayStack';
import { DrawerBody } from './DrawerBody';
import { DrawerCloseButton, DrawerCloseButtonProps } from './DrawerCloseButton';
import { DrawerContent } from './DrawerContent';
import { DrawerFooter } from './DrawerFooter';
import { DrawerHeader } from './DrawerHeader';
import { DrawerOverlay, DrawerOverlayProps } from './DrawerOverlay';
import {
  DrawerRoot,
  DrawerRootCssVariables,
  DrawerRootProps,
  DrawerRootStylesNames,
} from './DrawerRoot';
import { DrawerStack } from './DrawerStack';
import { DrawerTitle } from './DrawerTitle';
import { DrawerOutlet } from './use-drawer/DrawerOutlet';
import classes from './Drawer.module.css';

export type DrawerStylesNames = DrawerRootStylesNames;
export type DrawerCssVariables = DrawerRootCssVariables;

export interface DrawerProps extends DrawerRootProps {
  /** Drawer title @category appearance */
  title?: React.ReactNode;

  /** If set, the overlay is displayed @default true @category appearance */
  withOverlay?: boolean;

  /** Props passed down to the `Overlay` component, can be used to configure opacity, `background-color`, styles and other properties */
  overlayProps?: DrawerOverlayProps;

  /** Drawer content @category appearance */
  children?: React.ReactNode;

  /** If set, the close button is displayed @default true @category appearance */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: DrawerCloseButtonProps;

  /** Id of the drawer in the `Drawer.Stack`, generated automatically if not set */
  stackId?: string;
}

export type DrawerFactory = Factory<{
  props: DrawerProps;
  ref: HTMLDivElement;
  stylesNames: DrawerStylesNames;
  vars: DrawerCssVariables;
  staticComponents: {
    Root: typeof DrawerRoot;
    Overlay: typeof DrawerOverlay;
    Content: typeof DrawerContent;
    Body: typeof DrawerBody;
    Header: typeof DrawerHeader;
    Footer: typeof DrawerFooter;
    Title: typeof DrawerTitle;
    CloseButton: typeof DrawerCloseButton;
    Stack: typeof DrawerStack;
    Outlet: typeof DrawerOutlet;
  };
}>;

const defaultProps = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex('modal'),
  withOverlay: true,
  withCloseButton: true,
} satisfies Partial<DrawerProps>;

export const Drawer = factory<DrawerFactory>((_props) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    opened,
    onClose,
    closeOnEscape,
    stackId,
    zIndex,
    onExitTransitionEnd,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    ...others
  } = useProps('Drawer', defaultProps, _props);

  const hasHeader = !!title || withCloseButton;
  const stackEntry = useOverlayStackEntry(DrawerStackContext, {
    stackId,
    opened,
    onClose,
    zIndex,
    closeOnEscape,
    withOverlay,
    onExitTransitionEnd,
  });

  return (
    <DrawerRoot opened={opened} onClose={onClose} {...others} {...stackEntry.rootProps}>
      {withOverlay && <DrawerOverlay {...stackEntry.overlayProps} {...overlayProps} />}
      <DrawerContent
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        {...stackEntry.contentProps}
        __onDragProgress={stackEntry.reportDrag}
      >
        {hasHeader && (
          <DrawerHeader>
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {withCloseButton && <DrawerCloseButton {...closeButtonProps} />}
          </DrawerHeader>
        )}

        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
});

Drawer.classes = classes;
Drawer.displayName = '@mantine/core/Drawer';
Drawer.Root = DrawerRoot;
Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.Body = DrawerBody;
Drawer.Header = DrawerHeader;
Drawer.Footer = DrawerFooter;
Drawer.Title = DrawerTitle;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Stack = DrawerStack;
Drawer.Outlet = DrawerOutlet;
