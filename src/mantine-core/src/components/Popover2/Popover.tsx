import React from 'react';
import { Placement } from '@floating-ui/react-dom-interactions';
import { getFloatingPosition } from '@mantine/utils';
import {
  useMantineTheme,
  ClassNames,
  Styles,
  StylesApiProvider,
  MantineNumberSize,
  MantineShadow,
  getDefaultZIndex,
} from '@mantine/styles';
import { useClickOutside } from '@mantine/hooks';
import { MantineTransition } from '../Transition';
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

export interface PopoverProps {
  /** Popover.Target and Popover.Dropdown components */
  children: React.ReactNode;

  /** Dropdown position relative to target */
  position?: Placement;

  /** Space between target element and dropdown in px */
  offset?: number;

  /** Called when dropdown position changes */
  onPositionChange?(position: Placement): void;

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];

  /** Controls dropdown opened state */
  opened: boolean;

  /** Called when dropdown closes */
  onClose?(): void;

  /** One of premade transitions ot transition object */
  transition?: MantineTransition;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Dropdown width, or 'target' to make Popover width the same as target element */
  width?: PopoverWidth;

  /** Floating ui middlewares to configure position handling */
  middlewares?: PopoverMiddlewares;

  /** Determines whether component should have an arrow */
  withArrow?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Arrow offset in px */
  arrowOffset?: number;

  /** Determines whether dropdown should be closed on outside clicks, default to true */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[];

  /** Determines whether focus should be trapped within dropdown, default to false */
  trapFocus?: boolean;

  /** Determines whether dropdown should be rendered within Portal, defaults to false */
  withinPortal?: boolean;

  /** Dropdown z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Key of theme.shadow or any other valid css box-shadow value */
  shadow?: MantineShadow;

  /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
  closeOnEscape?: boolean;

  unstyled?: boolean;
  classNames?: ClassNames<PopoverStylesNames>;
  styles?: Styles<PopoverStylesNames, PopoverStylesParams>;
}

export function Popover({
  children,
  position = 'bottom',
  offset = 8,
  onPositionChange,
  positionDependencies = [],
  opened,
  transition = 'fade',
  transitionDuration = 150,
  width,
  middlewares = { flip: true, shift: true },
  withArrow,
  arrowSize = 7,
  arrowOffset = 5,
  unstyled,
  classNames,
  styles,
  closeOnClickOutside = true,
  withinPortal = false,
  closeOnEscape = true,
  clickOutsideEvents = ['mousedown', 'touchstart'],
  trapFocus,
  onClose,
  zIndex = getDefaultZIndex('popover'),
  radius,
  shadow,
}: PopoverProps) {
  const theme = useMantineTheme();
  const { x, y, reference, floating, placement, refs } = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(theme.dir, position),
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    onPositionChange,
    positionDependencies,
    opened,
  });

  useClickOutside(() => closeOnClickOutside && onClose?.(), clickOutsideEvents, [
    refs.floating.current,
    refs.reference.current as any,
  ]);

  return (
    <StylesApiProvider classNames={classNames} styles={styles} unstyled={unstyled}>
      <PopoverContextProvider
        value={{
          reference,
          floating,
          x,
          y,
          opened,
          transition,
          transitionDuration,
          width,
          withArrow,
          arrowSize,
          arrowOffset,
          placement,
          trapFocus,
          withinPortal,
          zIndex,
          radius,
          shadow,
          closeOnEscape,
          onClose,
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
