import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Kbd.styles';

interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  /** Keyboard key */
  children: React.ReactNode;
}

export function Kbd({ className, children, themeOverride, ...others }: KbdProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  return (
    <kbd className={cx(classes.kbd, className)} {...others}>
      {children}
    </kbd>
  );
}

Kbd.displayName = '@mantine/core/Kbd';
