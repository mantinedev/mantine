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

const defaultProps: Partial<MenuDividerProps> = {};

export const MenuDivider = factory<MenuDividerFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'MenuDivider',
    defaultProps,
    props
  );
  const ctx = useMenuContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('divider', { className, style, styles, classNames })}
      {...others}
    />
  );
});

MenuDivider.classes = classes;
MenuDivider.displayName = '@mantine/core/MenuDivider';
