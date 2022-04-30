import React from 'react';
import { Placement } from '@floating-ui/react-dom-interactions';
import { getFloatingPosition } from '@mantine/utils';
import { useMantineTheme } from '@mantine/styles';
import { MantineTransition } from '../Transition';
import { usePopover } from './use-popover';
import { PopoverContextProvider } from './Popover.context';
import { PopoverWidth, PopoverMiddlewares } from './Popover.types';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';

interface PopoverProps {
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
}: PopoverProps) {
  const theme = useMantineTheme();
  const { x, y, reference, floating, placement } = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(theme.dir, position),
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    onPositionChange,
    positionDependencies,
    opened,
  });

  return (
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
      }}
    >
      {children}
    </PopoverContextProvider>
  );
}

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = '@mantine/core/Popover';
