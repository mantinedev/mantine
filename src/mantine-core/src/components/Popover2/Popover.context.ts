import { Placement, ReferenceType } from '@floating-ui/react-dom-interactions';
import { createSafeContext } from '@mantine/utils';
import { MantineTransition } from '../Transition';
import { POPOVER_ERRORS } from './Popover.errors';
import { PopoverWidth } from './Popover.types';

interface PopoverContext {
  x: number;
  y: number;
  opened: boolean;
  transition: MantineTransition;
  transitionDuration: number;
  reference: (node: ReferenceType) => void;
  floating: (node: HTMLElement) => void;
  width?: PopoverWidth;
  withArrow: boolean;
  arrowSize: number;
  arrowOffset: number;
  trapFocus: boolean;
  placement: Placement;
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(
  POPOVER_ERRORS.context
);
