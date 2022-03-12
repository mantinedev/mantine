import { createContext, useContext } from 'react';
import { MantineNumberSize, MantineTheme, CSSObject } from '@mantine/styles';
import type { MenuStylesNames } from './Menu';

interface MenuContextValue {
  hovered: number;
  radius: MantineNumberSize;
  classNames: Partial<Record<MenuStylesNames, string>>;
  styles:
    | Partial<Record<MenuStylesNames, CSSObject>>
    | ((theme: MantineTheme) => Partial<Record<MenuStylesNames, CSSObject>>);
  onItemHover(index: number): void;
  onItemKeyDown(event: React.KeyboardEvent<HTMLElement>): void;
  onItemClick(): void;
}

export const MenuContext = createContext<MenuContextValue>(null);

export function useMenuContext(component = 'Item') {
  const ctx = useContext(MenuContext);

  if (!ctx) {
    throw new Error(`Menu.${component} component was rendered outside of Menu context`);
  }

  return ctx;
}
