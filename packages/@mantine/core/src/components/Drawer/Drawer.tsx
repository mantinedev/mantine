import { useEffect } from 'react';
import { factory, Factory, getDefaultZIndex, useProps } from '../../core';
import { ModalBaseCloseButtonProps, ModalBaseOverlayProps } from '../ModalBase';
import { DrawerBody } from './DrawerBody';
import { DrawerCloseButton } from './DrawerCloseButton';
import { DrawerContent } from './DrawerContent';
import { DrawerHeader } from './DrawerHeader';
import { DrawerOverlay } from './DrawerOverlay';
import {
  DrawerRoot,
  DrawerRootCssVariables,
  DrawerRootProps,
  DrawerRootStylesNames,
} from './DrawerRoot';
import { DrawerStack, useDrawerStackContext } from './DrawerStack';
import { DrawerTitle } from './DrawerTitle';
import classes from './Drawer.module.css';

export type DrawerStylesNames = DrawerRootStylesNames;
export type DrawerCssVariables = DrawerRootCssVariables;

export interface DrawerProps extends DrawerRootProps {
  /** Drawer title */
  title?: React.ReactNode;

  /** Determines whether the overlay should be rendered, `true` by default */
  withOverlay?: boolean;

  /** Props passed down to the `Overlay` component, can be used to configure opacity, `background-color`, styles and other properties */
  overlayProps?: ModalBaseOverlayProps;

  /** Drawer content */
  children?: React.ReactNode;

  /** Determines whether the close button should be rendered, `true` by default */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: ModalBaseCloseButtonProps;

  /** Id of the drawer in the `Drawer.Stack` */
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
    Title: typeof DrawerTitle;
    CloseButton: typeof DrawerCloseButton;
    Stack: typeof DrawerStack;
  };
}>;

const defaultProps: Partial<DrawerProps> = {
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
};

export const Drawer = factory<DrawerFactory>((_props, ref) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    opened,
    stackId,
    zIndex,
    ...others
  } = useProps('Drawer', defaultProps, _props);

  const ctx = useDrawerStackContext();
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
    <DrawerRoot
      ref={ref}
      opened={opened}
      zIndex={ctx && stackId ? ctx.getZIndex(stackId) : zIndex}
      {...others}
      {...stackProps}
    >
      {withOverlay && (
        <DrawerOverlay
          visible={overlayVisible}
          transitionProps={ctx && stackId ? { duration: 0 } : undefined}
          {...overlayProps}
        />
      )}
      <DrawerContent __hidden={ctx && stackId && opened ? stackId !== ctx.currentId : false}>
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
Drawer.Title = DrawerTitle;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Stack = DrawerStack;
