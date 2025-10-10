import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useMenuContext } from '../Menu.context';
import classes from '../Menu.module.css';

export type MenuDividerStylesNames = 'divider';

export interface MenuDividerProps
  extends BoxProps,
    CompoundStylesApiProps<MenuDividerFactory>,
    ElementProps<'div'> {}

export type MenuDividerFactory = Factory<{
  props: MenuDividerProps;
  ref: HTMLDivElement;
  stylesNames: MenuDividerStylesNames;
  compound: true;
}>;

export const MenuDivider = factory<MenuDividerFactory>((props) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'MenuDivider',
    null,
    props
  );
  const ctx = useMenuContext();

  return (
    <Box {...ctx.getStyles('divider', { className, style, styles, classNames })} {...others} />
  );
});

MenuDivider.classes = classes;
MenuDivider.displayName = '@mantine/core/MenuDivider';
