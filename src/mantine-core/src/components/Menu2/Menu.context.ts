import { createSafeContext } from '@mantine/utils';
import { MENU_ERRORS } from './Menu.errors';

interface MenuContext {
  toggleDropdown(): void;
  getItemIndex(node: HTMLButtonElement): number;
  setHovered(index: number): void;
  hovered: number;
}

export const [MenuContextProvider, useMenuContext] = createSafeContext<MenuContext>(
  MENU_ERRORS['menu-context']
);
