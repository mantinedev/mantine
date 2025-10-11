import { createSafeContext } from '../../core';

interface HoverCardContext {
  openDropdown: () => void;
  closeDropdown: () => void;
  getReferenceProps?: () => any;
  getFloatingProps?: () => any;
  reference?: (node: HTMLElement | null) => void;
  floating?: (node: HTMLElement | null) => void;
}

export const [HoverCardContext, useHoverCardContext] = createSafeContext<HoverCardContext>(
  'HoverCard component was not found in the tree'
);
