import { ReferenceType } from '@floating-ui/react-dom-interactions';
import { createSafeContext } from '@mantine/utils';
import { POPOVER_ERRORS } from './Popover.errors';

interface PopoverContext {
  reference: (node: ReferenceType) => void;
  floating: (node: HTMLElement) => void;
  x: number;
  y: number;
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(
  POPOVER_ERRORS.context
);
