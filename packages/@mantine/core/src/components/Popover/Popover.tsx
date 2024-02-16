import React, { useCallback, useRef, useState } from 'react';
import { useClickOutside, useId } from '@mantine/hooks';
import {
  createVarsResolver,
  ExtendComponent,
  Factory,
  getDefaultZIndex,
  getRadius,
  getShadow,
  MantineRadius,
  MantineShadow,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import {
  ArrowPosition,
  FloatingAxesOffsets,
  FloatingPosition,
  getFloatingPosition,
} from '../Floating';
import { PortalProps } from '../Portal';
import { TransitionOverride } from '../Transition';
import { PopoverContextProvider } from './Popover.context';
import { PopoverMiddlewares, PopoverWidth } from './Popover.types';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';
import { usePopover } from './use-popover';
import classes from './Popover.module.css';

export type PopoverStylesNames = 'dropdown' | 'arrow';
export type PopoverCssVariables = {
  dropdown: '--popover-radius' | '--popover-shadow';
};

export interface __PopoverProps {
  /** Dropdown position relative to the target element, `'bottom'` by default */
  position?: FloatingPosition;

  /** Offset of the dropdown element, `8` by default */
  offset?: number | FloatingAxesOffsets;

  /** Called when dropdown position changes */
  onPositionChange?: (position: FloatingPosition) => void;

  /** `useEffect` dependencies to force update dropdown position, `[]` by default */
  positionDependencies?: any[];

  /** Called when dropdown closes */
  onClose?: () => void;

  /** Called when dropdown opens */
  onOpen?: () => void;

  /** If set dropdown will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead */
  keepMounted?: boolean;

  /** Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;

  /** Dropdown width, or `'target'` to make dropdown width the same as target element, `'max-content'` by default */
  width?: PopoverWidth;

  /** Floating ui middlewares to configure position handling, `{ flip: true, shift: true, inline: false }` by default */
  middlewares?: PopoverMiddlewares;

  /** Determines whether component should have an arrow, `false` by default */
  withArrow?: boolean;

  /** Arrow size in px, `7` by default */
  arrowSize?: number;

  /** Arrow offset in px, `5` by default */
  arrowOffset?: number;

  /** Arrow `border-radius` in px, `0` by default */
  arrowRadius?: number;

  /** Arrow position */
  arrowPosition?: ArrowPosition;

  /** Determines whether dropdown should be rendered within the `Portal`, `true` by default */
  withinPortal?: boolean;

  /** Props to pass down to the `Portal` when `withinPortal` is true */
  portalProps?: Omit<PortalProps, 'children'>;

  /** Dropdown `z-index`, `300` by default */
  zIndex?: string | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
  shadow?: MantineShadow;

  /** If set, popover dropdown will not be rendered */
  disabled?: boolean;

  /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
  returnFocus?: boolean;
}

export interface PopoverProps extends __PopoverProps, StylesApiProps<PopoverFactory> {
  __staticSelector?: string;

  /** `Popover.Target` and `Popover.Dropdown` components */
  children?: React.ReactNode;

  /** Initial opened state for uncontrolled component */
  defaultOpened?: boolean;

  /** Controlled dropdown opened state */
  opened?: boolean;

  /** Called with current state when dropdown opens or closes */
  onChange?: (opened: boolean) => void;

  /** Determines whether dropdown should be closed on outside clicks, `true` by default */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[];

  /** Determines whether focus should be trapped within dropdown, `false` by default */
  trapFocus?: boolean;

  /** Determines whether dropdown should be closed when `Escape` key is pressed, `true` by default */
  closeOnEscape?: boolean;

  /** id base to create accessibility connections */
  id?: string;

  /** Determines whether dropdown and target elements should have accessible roles, `true` by default */
  withRoles?: boolean;
}

export type PopoverFactory = Factory<{
  props: PopoverProps;
  stylesNames: PopoverStylesNames;
  vars: PopoverCssVariables;
}>;

const defaultProps: Partial<PopoverProps> = {
  position: 'bottom',
  offset: 8,
  positionDependencies: [],
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
  clickOutsideEvents: ['mousedown', 'touchstart'],
  zIndex: getDefaultZIndex('popover'),
  __staticSelector: 'Popover',
  width: 'max-content',
};

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
    positionDependencies,
    opened,
    transitionProps,
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
    trapFocus,
    onClose,
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
    vars,
    ...others
  } = props;

  const getStyles = useStyles<PopoverFactory>({
    name: __staticSelector!,
    props,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'dropdown',
    vars,
    varsResolver,
  });

  const arrowRef = useRef<HTMLDivElement | null>(null);
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);
  const [dropdownNode, setDropdownNode] = useState<HTMLElement | null>(null);
  const { dir } = useDirection();

  const uid = useId(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position!),
    offset: typeof offset === 'number' ? offset + (withArrow ? arrowSize! / 2 : 0) : offset!,
    arrowRef,
    arrowOffset: arrowOffset!,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
  });

  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [
    targetNode,
    dropdownNode,
  ]);

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

  return (
    <PopoverContextProvider
      value={{
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x!,
        y: popover.floating.y!,
        arrowX: popover.floating?.middlewareData?.arrow?.x,
        arrowY: popover.floating?.middlewareData?.arrow?.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize: arrowSize!,
        arrowOffset: arrowOffset!,
        arrowRadius: arrowRadius!,
        arrowPosition: arrowPosition!,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector: __staticSelector!,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        getStyles,
      }}
    >
      {children}
    </PopoverContextProvider>
  );
}

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = '@mantine/core/Popover';
Popover.extend = (input: ExtendComponent<PopoverFactory>) => input;
