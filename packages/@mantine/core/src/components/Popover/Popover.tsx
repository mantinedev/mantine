import { useCallback, useRef, useState } from 'react';
import { useClickOutside, useId } from '@mantine/hooks';
import {
  createVarsResolver,
  ElementProps,
  ExtendComponent,
  Factory,
  getDefaultZIndex,
  getRadius,
  getShadow,
  MantineRadius,
  MantineShadow,
  StylesApiProps,
  useDirection,
  useMantineEnv,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import {
  ArrowPosition,
  FloatingAxesOffsets,
  FloatingPosition,
  FloatingStrategy,
  getFloatingPosition,
} from '../../utils/Floating';
import { Overlay, OverlayProps } from '../Overlay';
import { BasePortalProps, OptionalPortal } from '../Portal';
import { Transition, TransitionOverride } from '../Transition';
import { PopoverContextProvider, PopoverContextValue } from './Popover.context';
import { PopoverMiddlewares, PopoverWidth } from './Popover.types';
import {
  PopoverContextMenu,
  PopoverContextMenuProps,
} from './PopoverContextMenu/PopoverContextMenu';
import { PopoverDropdown, PopoverDropdownProps } from './PopoverDropdown/PopoverDropdown';
import { PopoverTarget, PopoverTargetProps } from './PopoverTarget/PopoverTarget';
import { usePopover } from './use-popover';
import classes from './Popover.module.css';

export type PopoverStylesNames = 'dropdown' | 'arrow' | 'overlay';
export type PopoverCssVariables = {
  dropdown: '--popover-radius' | '--popover-shadow';
};

export interface __PopoverProps {
  /** Dropdown position relative to the target element @default 'bottom' */
  position?: FloatingPosition | undefined;

  /** Offset of the dropdown element @default 8 */
  offset?: number | FloatingAxesOffsets | undefined;

  /** Called when dropdown position changes */
  onPositionChange?: ((position: FloatingPosition) => void) | undefined;

  /** Called when dropdown closes */
  onClose?: (() => void) | undefined;

  /** Called when the popover is dismissed by clicking outside or by pressing escape */
  onDismiss?: (() => void) | undefined;

  /** Called when dropdown opens */
  onOpen?: (() => void) | undefined;

  /** If set, the dropdown is not unmounted from the DOM when hidden. `display: none` styles are added instead. */
  keepMounted?: boolean | undefined;

  /**
   * Controls how the dropdown is hidden when `keepMounted` is set:
   * `'activity'` – hidden with React 19 `Activity` component,
   * `'display-none'` – hidden with `display: none` styles
   * @default 'activity'
   */
  keepMountedMode?: 'activity' | 'display-none' | undefined;

  /** Props passed down to the `Transition` component. Use to configure duration and animation type. @default { duration: 150, transition: 'fade' } */
  transitionProps?: TransitionOverride | undefined;

  /** Called when exit transition ends */
  onExitTransitionEnd?: (() => void) | undefined;

  /** Called when enter transition ends */
  onEnterTransitionEnd?: (() => void) | undefined;

  /** Dropdown width, or `'target'` to make dropdown width the same as target element @default 'max-content' */
  width?: PopoverWidth;

  /** Floating ui middlewares to configure position handling @default { flip: true, shift: true, inline: false } */
  middlewares?: PopoverMiddlewares | undefined;

  /** Determines whether component should have an arrow @default false */
  withArrow?: boolean | undefined;

  /** Determines whether the overlay should be displayed when the dropdown is opened @default false */
  withOverlay?: boolean | undefined;

  /** Props passed down to `Overlay` component */
  overlayProps?: (OverlayProps & ElementProps<'div'>) | undefined;

  /** Arrow size in px @default 7 */
  arrowSize?: number | undefined;

  /** Arrow offset in px @default 5 */
  arrowOffset?: number | undefined;

  /** Arrow `border-radius` in px @default 0 */
  arrowRadius?: number | undefined;

  /** Arrow position */
  arrowPosition?: ArrowPosition | undefined;

  /** Determines whether dropdown should be rendered within the `Portal` @default true */
  withinPortal?: boolean | undefined;

  /** Props to pass down to the `Portal` when `withinPortal` is true */
  portalProps?: BasePortalProps | undefined;

  /** Dropdown `z-index` @default 300 */
  zIndex?: string | number | undefined;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default theme.defaultRadius */
  radius?: MantineRadius | undefined;

  /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
  shadow?: MantineShadow | undefined;

  /** If set, popover dropdown will not be rendered */
  disabled?: boolean | undefined;

  /** Determines whether focus should be automatically returned to control when dropdown closes @default false */
  returnFocus?: boolean | undefined;

  /** Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) @default 'absolute' */
  floatingStrategy?: FloatingStrategy | undefined;

  /** If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen @default true */
  hideDetached?: boolean | undefined;

  /** If `true`, the dropdown picks its side on open (flip runs once, preferring the `position` prop) and then never changes side — scrolling, resizing, and content size changes will not flip the dropdown. The side is recalculated fresh on the next open. Does not affect the `shift` middleware. Set to `false` to keep flip active and allow the dropdown to re-flip on every change. @default true */
  preventPositionChangeWhenVisible?: boolean | undefined;

  /** If set, outside click listeners are registered in the capture phase @default false */
  clickOutsideCapture?: boolean | undefined;
}

export interface PopoverProps extends __PopoverProps, StylesApiProps<PopoverFactory> {
  __staticSelector?: string | undefined;

  /** `Popover.Target` and `Popover.Dropdown` components */
  children?: React.ReactNode;

  /** Initial opened state for uncontrolled component */
  defaultOpened?: boolean | undefined;

  /** Controlled dropdown opened state */
  opened?: boolean | undefined;

  /** Called with current state when dropdown opens or closes */
  onChange?: ((opened: boolean) => void) | undefined;

  /** Determines whether dropdown should be closed on outside clicks @default true */
  closeOnClickOutside?: boolean | undefined;

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[] | undefined;

  /** Determines whether focus should be trapped within dropdown @default false */
  trapFocus?: boolean | undefined;

  /** Determines whether dropdown should be closed when `Escape` key is pressed @default true */
  closeOnEscape?: boolean | undefined;

  /** Id base to create accessibility connections */
  id?: string | undefined;

  /** Determines whether dropdown and target elements should have accessible roles @default true */
  withRoles?: boolean | undefined;
}

export type PopoverFactory = Factory<{
  props: PopoverProps;
  stylesNames: PopoverStylesNames;
  vars: PopoverCssVariables;
}>;

const defaultProps = {
  position: 'bottom',
  offset: 8,
  transitionProps: { transition: 'fade', duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: 'side',
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  withOverlay: false,
  hideDetached: true,
  preventPositionChangeWhenVisible: true,
  clickOutsideEvents: ['mousedown', 'touchstart'],
  clickOutsideCapture: false,
  zIndex: getDefaultZIndex('popover'),
  __staticSelector: 'Popover',
  width: 'max-content',
} satisfies Partial<PopoverProps>;

const varsResolver = createVarsResolver<PopoverFactory>((_, { radius, shadow }) => ({
  dropdown: {
    '--popover-radius': radius === undefined ? undefined : getRadius(radius),
    '--popover-shadow': getShadow(shadow),
  },
}));

export function Popover(_props: PopoverProps) {
  const props = useProps('Popover', defaultProps, _props);
  const {
    children,
    position,
    offset,
    onPositionChange,
    opened,
    transitionProps,
    onExitTransitionEnd,
    onEnterTransitionEnd,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape,
    clickOutsideEvents,
    clickOutsideCapture,
    trapFocus,
    onClose,
    onDismiss,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    keepMountedMode,
    vars,
    floatingStrategy,
    withOverlay,
    overlayProps,
    hideDetached,
    attributes,
    preventPositionChangeWhenVisible,
    ...others
  } = props;

  const getStyles = useStyles<PopoverFactory>({
    name: __staticSelector,
    props,
    classes,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'dropdown',
    vars,
    varsResolver,
  });

  const { resolvedStyles } = useResolvedStylesApi<PopoverFactory>({ classNames, styles, props });

  const arrowRef = useRef<HTMLDivElement | null>(null);
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);
  const [dropdownNode, setDropdownNode] = useState<HTMLElement | null>(null);
  const { dir } = useDirection();
  const env = useMantineEnv();

  const uid = useId(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position),
    offset: typeof offset === 'number' ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
    arrowRef,
    arrowOffset,
    onPositionChange,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
    onDismiss,
    strategy: floatingStrategy,
    disabled,
    preventPositionChangeWhenVisible,
    keepMounted,
  });

  useClickOutside(
    () => {
      if (closeOnClickOutside) {
        popover.onClose();
        onDismiss?.();
      }
    },
    clickOutsideEvents,
    [targetNode, dropdownNode],
    true,
    clickOutsideCapture
  );

  const reference = useCallback(
    (node: HTMLElement) => {
      setTargetNode(node);
      popover.floating.refs.setReference(node);
    },
    [popover.floating.refs.setReference]
  );

  const floating = useCallback(
    (node: HTMLElement) => {
      setDropdownNode(node);
      popover.floating.refs.setFloating(node);
    },
    [popover.floating.refs.setFloating]
  );

  const onExited = useCallback(() => {
    transitionProps?.onExited?.();
    onExitTransitionEnd?.();
    popover.resetLockedPlacement();
  }, [transitionProps?.onExited, onExitTransitionEnd, popover.resetLockedPlacement]);

  const onEntered = useCallback(() => {
    transitionProps?.onEntered?.();
    onEnterTransitionEnd?.();
  }, [transitionProps?.onEntered, onEnterTransitionEnd]);

  return (
    <PopoverContextProvider
      value={{
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: popover.floating?.middlewareData?.arrow?.x,
        arrowY: popover.floating?.middlewareData?.arrow?.y,
        opened: popover.opened,
        arrowRef,
        transitionProps: { ...transitionProps, onExited, onEntered },
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape,
        onDismiss,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => uid,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        keepMountedMode,
        getStyles,
        resolvedStyles,
        floatingStrategy,
        referenceHidden:
          hideDetached && env !== 'test'
            ? popover.floating.middlewareData.hide?.referenceHidden
            : false,
      }}
    >
      {children}
      {withOverlay && (
        <Transition
          transition="fade"
          mounted={popover.opened}
          duration={transitionProps?.duration || 250}
          exitDuration={transitionProps?.exitDuration || 250}
        >
          {(transitionStyles) => (
            <OptionalPortal withinPortal={withinPortal}>
              <Overlay
                {...overlayProps}
                {...getStyles('overlay', {
                  className: overlayProps?.className,
                  style: [transitionStyles, overlayProps?.style],
                })}
              />
            </OptionalPortal>
          )}
        </Transition>
      )}
    </PopoverContextProvider>
  );
}

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.ContextMenu = PopoverContextMenu;
Popover.varsResolver = varsResolver;
Popover.displayName = '@mantine/core/Popover';
Popover.extend = (input: ExtendComponent<PopoverFactory>) => input;
Popover.withProps = (fixedProps: Partial<PopoverProps>) => {
  const Extended = (props: PopoverProps) => <Popover {...fixedProps} {...props} />;
  Extended.extend = Popover.extend;
  Extended.displayName = `WithProps(${Popover.displayName})`;
  return Extended;
};

export namespace Popover {
  export type Props = PopoverProps;
  export type __Props = __PopoverProps;
  export type Factory = PopoverFactory;
  export type StylesNames = PopoverStylesNames;
  export type TargetProps = PopoverTargetProps;
  export type DropdownProps = PopoverDropdownProps;
  export type Width = PopoverWidth;
  export type ContextValue = PopoverContextValue;

  export namespace Target {
    export type Props = PopoverTargetProps;
  }

  export namespace Dropdown {
    export type Props = PopoverDropdownProps;
  }

  export namespace ContextMenu {
    export type Props = PopoverContextMenuProps;
  }
}
