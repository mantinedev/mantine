import { createSafeContext, GetStylesApi } from '../../core';
import type { MenuFactory } from './Menu';

export interface MenuContextValue {
  toggleDropdown: () => void;
  closeDropdownImmediately: () => void;
  closeDropdown: () => void;
  openDropdown: () => void;
  getItemIndex: (node: HTMLButtonElement) => number | null;
  closeOnItemClick: boolean | undefined;
  loop: boolean | undefined;
  trigger: 'click' | 'hover' | 'click-hover' | undefined;
  opened: boolean;
  unstyled: boolean | undefined;
  getStyles: GetStylesApi<MenuFactory>;
  menuItemTabIndex: -1 | 0 | undefined;
  openedViaClick: boolean;
  setOpenedViaClick: (value: boolean) => void;
  withInitialFocusPlaceholder: boolean | undefined;
}

export const [MenuContextProvider, useMenuContext] = createSafeContext<MenuContextValue>(
  'Menu component was not found in the tree'
);
