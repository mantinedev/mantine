import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles from './Burger.styles';

interface BurgerProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  color?: string;
  size?: MantineNumberSize;
  opened: boolean;
}

export function Burger({
  className,
  opened,
  color = 'gray',
  size = 'md',
  themeOverride,
  ...others
}: BurgerProps) {
  const classes = useStyles({
    color,
    size,
    theme: useMantineTheme(themeOverride),
    reduceMotion: useReducedMotion(),
  });

  return (
    <button type="button" className={cx(classes.wrapper, className)} {...others}>
      <div className={cx(classes.burger, { [classes.opened]: opened })} />
    </button>
  );
}

Burger.displayName = '@mantine/core/Burger';
