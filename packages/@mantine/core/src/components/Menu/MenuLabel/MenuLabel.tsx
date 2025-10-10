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

export type MenuLabelStylesNames = 'label';

export interface MenuLabelProps
  extends BoxProps,
    CompoundStylesApiProps<MenuLabelFactory>,
    ElementProps<'div'> {}

export type MenuLabelFactory = Factory<{
  props: MenuLabelProps;
  ref: HTMLDivElement;
  stylesNames: MenuLabelStylesNames;
  compound: true;
}>;

export const MenuLabel = factory<MenuLabelFactory>((props) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'MenuLabel',
    null,
    props
  );
  const ctx = useMenuContext();

  return <Box {...ctx.getStyles('label', { className, style, styles, classNames })} {...others} />;
});

MenuLabel.classes = classes;
MenuLabel.displayName = '@mantine/core/MenuLabel';
