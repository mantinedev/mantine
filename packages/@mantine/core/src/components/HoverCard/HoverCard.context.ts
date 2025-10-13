import { createSafeContext } from '../../core';

export interface HoverCardContextValue {
  openDropdown: () => void;
  closeDropdown: () => void;
  getReferenceProps?: () => any;
  getFloatingProps?: () => any;
  reference?: (node: HTMLElement | null) => void;
  floating?: (node: HTMLElement | null) => void;
}

export const [HoverCardContext, useHoverCardContext] = createSafeContext<HoverCardContextValue>(
  'HoverCard component was not found in the tree'
);
