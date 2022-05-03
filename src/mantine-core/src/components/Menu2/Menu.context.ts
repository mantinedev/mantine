import { createSafeContext } from '@mantine/utils';
import { MENU_ERRORS } from './Menu.errors';

interface MenuContext {
  toggleDropdown(): void;
}

export const [MenuContextProvider, useMenuContext] = createSafeContext<MenuContext>(
  MENU_ERRORS['menu-context']
);
