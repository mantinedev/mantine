import { createSafeContext } from '../../core';

interface HoverCardContext {
  openDropdown: () => void;
  closeDropdown: () => void;
}

export const [HoverCardContextProvider, useHoverCardContext] = createSafeContext<HoverCardContext>(
  'HoverCard component was not found in the tree'
);
