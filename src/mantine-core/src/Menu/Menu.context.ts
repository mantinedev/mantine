import { MantineNumberSize, ClassNames, Styles } from '@mantine/styles';
import { createSafeContext } from '@mantine/utils';
import { MENU_ERRORS } from './Menu.errors';
import { MenuTriggerEvent } from './Menu.types';
import type { MenuStylesNames } from './Menu';

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
  classNames: ClassNames<MenuStylesNames>;
  styles: Styles<MenuStylesNames>;
  unstyled: boolean;
  variant?: string;
}

export const [MenuContextProvider, useMenuContext] = createSafeContext<MenuContext>(
  MENU_ERRORS.context
);
