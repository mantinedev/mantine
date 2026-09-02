import { createSafeContext } from '../../core';

export interface HoverCardContextValue {
  openDropdown: () => void;
  closeDropdown: () => void;
  assignTarget: (node: HTMLElement | null) => void;
  getReferenceProps: (userProps?: Record<string, any>) => Record<string, any>;
  getFloatingProps: (userProps?: Record<string, any>) => Record<string, any>;
  reference: (node: HTMLElement | null) => void;
  floating: (node: HTMLElement | null) => void;
  opened: boolean;
  role: 'dialog' | 'tooltip';
  withRoles: boolean;
  dropdownId: string;
}

export const [HoverCardContext, useHoverCardContext] = createSafeContext<HoverCardContextValue>(
  'HoverCard component was not found in the tree'
);
