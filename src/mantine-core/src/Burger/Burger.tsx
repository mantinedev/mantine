import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './Burger.styles';

export const BURGER_SIZES = sizes;

interface BurgerProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
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
  opened,
  color = 'gray',
  size = 'md',
  themeOverride,
  elementRef,
  ...others
}: BurgerProps) {
  const classes = useStyles({
    color,
    size,
    theme: useMantineTheme(themeOverride),
    reduceMotion: useReducedMotion(),
  });

  return (
    <button type="button" className={cx(classes.wrapper, className)} ref={elementRef} {...others}>
      <div className={cx(classes.burger, { [classes.opened]: opened })} />
    </button>
  );
}

Burger.displayName = '@mantine/core/Burger';
