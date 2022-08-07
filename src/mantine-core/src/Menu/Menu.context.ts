import { MantineNumberSize } from '@mantine/styles';
import { createSafeContext } from '@mantine/utils';
import { MENU_ERRORS } from './Menu.errors';
import { MenuTriggerEvent } from './Menu.types';

interface MenuContext {
  toggleDropdown(): void;
  closeDropdownImmediately(): void;
  closeDropdown(): void;
  openDropdown(): void;
  getItemIndex(node: HTMLButtonElement): number;
  setHovered(index: number): void;
  hovered: number;
  closeOnItemClick: boolean;
  loop: boolean;
  trigger: MenuTriggerEvent;
  radius: MantineNumberSize;
  opened: boolean;
}

export const [MenuContextProvider, useMenuContext] = createSafeContext<MenuContext>(
  MENU_ERRORS.context
);
