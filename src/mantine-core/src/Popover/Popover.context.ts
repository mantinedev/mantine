import { ReferenceType } from '@floating-ui/react';
import { createSafeContext } from '@mantine/utils';
import { MantineNumberSize, MantineShadow, ClassNames, Styles } from '@mantine/styles';
import { FloatingPosition, ArrowPosition } from '../Floating';
import { MantineTransition } from '../Transition';
import { POPOVER_ERRORS } from './Popover.errors';
import { PopoverWidth, PopoverStylesNames, PopoverStylesParams } from './Popover.types';

interface PopoverContext {
  x: number;
  y: number;
  arrowX: number;
  arrowY: number;
  arrowRef: React.RefObject<HTMLDivElement>;
  opened: boolean;
  transition: MantineTransition;
  transitionDuration: number;
  exitTransitionDuration: number;
  reference: (node: ReferenceType) => void;
  floating: (node: HTMLElement) => void;
  width?: PopoverWidth;
  withArrow: boolean;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  trapFocus: boolean;
  placement: FloatingPosition;
  withinPortal: boolean;
  closeOnEscape: boolean;
  zIndex: React.CSSProperties['zIndex'];
  radius?: MantineNumberSize;
  shadow?: MantineShadow;
  onClose?(): void;
  getDropdownId(): string;
  getTargetId(): string;
  controlled: boolean;
  onToggle(): void;
  withRoles: boolean;
  targetProps: Record<string, any>;
  disabled: boolean;
  returnFocus: boolean;
  classNames: ClassNames<PopoverStylesNames>;
  styles: Styles<PopoverStylesNames, PopoverStylesParams>;
  unstyled: boolean;
  __staticSelector: string;
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(
  POPOVER_ERRORS.context
);
