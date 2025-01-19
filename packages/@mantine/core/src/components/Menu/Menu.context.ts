import { createSafeContext, GetStylesApi } from '../../core';
import type { MenuFactory } from './Menu';

interface MenuContext {
  toggleDropdown: () => void;
  closeDropdownImmediately: () => void;
  closeDropdown: () => void;
  openDropdown: () => void;
  getItemIndex: (node: HTMLButtonElement) => number | null;
  setHovered: (index: number | null) => void;
  hovered: number | null;
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

export const [MenuContextProvider, useMenuContext] = createSafeContext<MenuContext>(
  'Menu component was not found in the tree'
);
