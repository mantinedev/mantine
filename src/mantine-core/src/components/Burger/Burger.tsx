import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  ClassNames,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Burger.styles';

export type BurgerStylesNames = Exclude<ClassNames<typeof useStyles>, 'opened'>;

export interface BurgerProps
  extends DefaultProps<BurgerStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
  color?: MantineColor;

  /** Predefined burger size or number to set width and height in px */
  size?: MantineNumberSize;
}

const defaultProps: Partial<BurgerProps> = {
  size: 'md',
};

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>((props: BurgerProps, ref) => {
  const {
    className,
    opened,
    color,
    size = 'md',
    classNames,
    styles,
    ...others
  } = useMantineDefaultProps('Burger', defaultProps, props);
  const theme = useMantineTheme();
  const _color = color || (theme.colorScheme === 'dark' ? theme.white : theme.black);
  const { classes, cx } = useStyles(
    { color: _color, size },
    { classNames, styles, name: 'Burger' }
  );

  return (
    <Box
      component="button"
      type="button"
      className={cx(classes.root, className)}
      ref={ref}
      {...others}
    >
      <div className={cx(classes.burger, { [classes.opened]: opened })} />
    </Box>
  );
});

Burger.displayName = '@mantine/core/Burger';
