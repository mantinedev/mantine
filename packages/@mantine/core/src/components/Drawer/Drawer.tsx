import { use, useCallback, useEffect, useId } from 'react';
import { factory, Factory, getDefaultZIndex, useProps } from '../../core';
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
import { DrawerStack, DrawerStackContext } from './DrawerStack';
import { DrawerTitle } from './DrawerTitle';
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
    trapFocus,
    stackId,
    zIndex,
    onExitTransitionEnd,
    ...others
  } = useProps('Drawer', defaultProps, _props);

  const ctx = use(DrawerStackContext);
  const autoStackId = useId();
  const resolvedStackId = stackId || autoStackId;
  const hasHeader = !!title || withCloseButton;
  const isStackTop = !!ctx && ctx.currentId === resolvedStackId;
  const isStackActive = !!ctx && ctx.activeId === resolvedStackId;
  const hasOtherDrawers = !!ctx && ctx.stack.some((id) => id !== resolvedStackId);
  const stackProps = ctx
    ? {
        closeOnEscape: isStackActive && closeOnEscape,
        trapFocus: isStackActive && trapFocus,
        zIndex: ctx.getZIndex(resolvedStackId),
        __handledEscapeEvents: ctx.handledEscapeEvents,
      }
    : {};

  const overlayVisible = withOverlay === false ? false : hasOtherDrawers ? isStackTop : opened;

  const reportDrag = ctx?.reportDrag;
  const handleDragProgress = useCallback(
    (progress: number) => {
      reportDrag?.(resolvedStackId, progress);
    },
    [reportDrag, resolvedStackId]
  );

  const reportTopRect = ctx?.reportTopRect;
  const handleReportTopRect = useCallback(
    (rect: { width: number; height: number }) => {
      reportTopRect?.(resolvedStackId, rect);
    },
    [reportTopRect, resolvedStackId]
  );

  const depthProps = ctx
    ? {
        ...(ctx.withStackTransform
          ? {
              __depth: ctx.getDepth(resolvedStackId),
              __visible: ctx.isVisible(resolvedStackId),
              __dragProgress: ctx.dragProgress,
              __topRect: ctx.topRect,
              __reportTopRect: handleReportTopRect,
            }
          : { __visible: ctx.isVisible(resolvedStackId) }),
        __onDragProgress: handleDragProgress,
        __active: isStackActive,
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
    <DrawerRoot
      opened={opened}
      onClose={onClose}
      zIndex={ctx ? ctx.getZIndex(resolvedStackId) : zIndex}
      onExitTransitionEnd={handleExitTransitionEnd}
      closeOnEscape={closeOnEscape}
      trapFocus={trapFocus}
      {...others}
      {...stackProps}
    >
      {withOverlay && (
        <DrawerOverlay
          visible={overlayVisible}
          transitionProps={hasOtherDrawers ? { duration: 0 } : undefined}
          {...(ctx ? { zIndex: ctx.maxZIndex } : null)}
          {...overlayProps}
        />
      )}
      <DrawerContent {...depthProps}>
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
