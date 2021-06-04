import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme, mergeStyles } from '../../theme';
import useStyles, { sizes } from './Burger.styles';

export const BURGER_SIZES = sizes;

export interface BurgerProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color from theme */
  color?: string;

  /** Predefined burger size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export function Burger({
  className,
  style,
  opened,
  color = 'gray',
  size = 'md',
  themeOverride,
  elementRef,
  classNames,
  styles,
  ...others
}: BurgerProps) {
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  const classes = useStyles({ color, size, theme, reduceMotion }, classNames);
  const _styles = mergeStyles(classes, styles);

  return (
    <button
      type="button"
      className={cx(classes.root, className)}
      ref={elementRef}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      <div
        className={cx(classes.burger, { [classes.opened]: opened })}
        style={{ ..._styles.burger, ...(opened ? _styles.opened : null) }}
      />
    </button>
  );
}

Burger.displayName = '@mantine/core/Burger';
