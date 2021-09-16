import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  useMantineTheme,
  mergeStyles,
  MantineColor,
} from '../../theme';
import useStyles, { sizes } from './Burger.styles';

export const BURGER_SIZES = sizes;

export type BurgerStylesNames = Exclude<keyof ReturnType<typeof useStyles>, 'opened'>;

export interface BurgerProps
  extends DefaultProps<BurgerStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
  color?: MantineColor;

  /** Predefined burger size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export function Burger({
  className,
  style,
  opened,
  color,
  size = 'md',
  themeOverride,
  elementRef,
  classNames,
  styles,
  ...others
}: BurgerProps) {
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  const _color = color || (theme.colorScheme === 'dark' ? theme.white : theme.black);
  const classes = useStyles({ color: _color, size, theme, reduceMotion }, classNames, 'burger');
  const _styles = mergeStyles(classes, styles);

  return (
    <button
      type="button"
      className={cx(classes.root, className)}
      ref={elementRef}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      <div className={cx(classes.burger, { [classes.opened]: opened })} style={_styles.burger} />
    </button>
  );
}

Burger.displayName = '@mantine/core/Burger';
