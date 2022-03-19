import { MantineNumberSize, MantineTheme, CSSObject } from '@mantine/styles';
import { createUseContext } from '../../utils';
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

export const [MenuProvider, useMenuContext] = createUseContext<MenuContextValue>(null);
