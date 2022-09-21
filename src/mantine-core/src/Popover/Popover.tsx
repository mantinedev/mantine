/* eslint-disable react/no-unused-prop-types */

import React, { useRef } from 'react';
import { useId, useClickOutside } from '@mantine/hooks';
import {
  useMantineTheme,
  ClassNames,
  Styles,
  StylesApiProvider,
  MantineNumberSize,
  MantineShadow,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@mantine/styles';
import { MantineTransition } from '../Transition';
import { getFloatingPosition, FloatingPosition } from '../Floating';
import { usePopover } from './use-popover';
import { PopoverContextProvider } from './Popover.context';
import {
  PopoverWidth,
  PopoverMiddlewares,
  PopoverStylesNames,
  PopoverStylesParams,
} from './Popover.types';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';

export interface PopoverBaseProps {
  /** Dropdown position relative to target */
  position?: FloatingPosition;

  /** Space between target element and dropdown in px */
  offset?: number;

  /** Called when dropdown position changes */
  onPositionChange?(position: FloatingPosition): void;

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[];

  /** Called when dropdown closes */
  onClose?(): void;

  /** Called when dropdown opens */
  onOpen?(): void;

  /** One of premade transitions ot transition object */
  transition?: MantineTransition;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Dropdown width, or 'target' to make dropdown width the same as target element */
  width?: PopoverWidth;

  /** Floating ui middlewares to configure position handling */
  middlewares?: PopoverMiddlewares;

  /** Determines whether component should have an arrow */
  withArrow?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Arrow offset in px */
  arrowOffset?: number;

  /** Determines whether dropdown should be rendered within Portal, defaults to false */
  withinPortal?: boolean;

  /** Dropdown z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Key of theme.shadow or any other valid css box-shadow value */
  shadow?: MantineShadow;
}

export interface PopoverProps extends PopoverBaseProps {
  /** Popover.Target and Popover.Dropdown components */
  children: React.ReactNode;

  /** Initial opened state for uncontrolled component */
  defaultOpened?: boolean;

  /** Controls dropdown opened state */
  opened?: boolean;

  /** Called with current state when dropdown opens or closes */
  onChange?(opened: boolean): void;

  /** Determines whether dropdown should be closed on outside clicks, default to true */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[];

  /** Determines whether focus should be trapped within dropdown, default to false */
  trapFocus?: boolean;

  /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
  closeOnEscape?: boolean;

  /** id base to create accessibility connections */
  id?: string;

  /** Determines whether dropdown and target element should have accessible roles, defaults to true */
  withRoles?: boolean;

  unstyled?: boolean;
  classNames?: ClassNames<PopoverStylesNames>;
  styles?: Styles<PopoverStylesNames, PopoverStylesParams>;
  __staticSelector?: string;
}

const defaultProps: Partial<PopoverProps> = {
  position: 'bottom',
  offset: 8,
  positionDependencies: [],
  transition: 'fade',
  transitionDuration: 150,
  middlewares: { flip: true, shift: true },
  arrowSize: 7,
  arrowOffset: 5,
  closeOnClickOutside: true,
  withinPortal: false,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  clickOutsideEvents: ['mousedown', 'touchstart'],
  zIndex: getDefaultZIndex('popover'),
  __staticSelector: 'Popover',
};

export function Popover(props: PopoverProps) {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const {
    children,
    position,
    offset,
    onPositionChange,
    positionDependencies,
    opened,
    transition,
    transitionDuration,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
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
    exitTransitionDuration,
    __staticSelector,
    withRoles,
    ...others
  } = useComponentDefaultProps('Popover', defaultProps, props);

  const uid = useId(id);
  const theme = useMantineTheme();
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(theme.dir, position),
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    arrowRef,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
  });

  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [
    popover.floating.refs.floating.current,
    popover.floating.refs.reference.current as any,
  ]);

  return (
    <StylesApiProvider
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      staticSelector={__staticSelector}
    >
      <PopoverContextProvider
        value={{
          controlled: popover.controlled,
          reference: popover.floating.reference,
          floating: popover.floating.floating,
          x: popover.floating.x,
          y: popover.floating.y,
          arrowX: popover.floating?.middlewareData?.arrow?.x,
          arrowY: popover.floating?.middlewareData?.arrow?.y,
          opened: popover.opened,
          arrowRef,
          transition,
          transitionDuration,
          exitTransitionDuration,
          width,
          withArrow,
          arrowSize,
          arrowOffset,
          placement: popover.floating.placement,
          trapFocus,
          withinPortal,
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
        }}
      >
        {children}
      </PopoverContextProvider>
    </StylesApiProvider>
  );
}

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = '@mantine/core/Popover';
