import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../theme';
import useStyles from './Kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  /** Keyboard key */
  children: React.ReactNode;
}

export function Kbd({ className, children, ...others }: KbdProps) {
  const theme = useMantineTheme();
  const classes = useStyles({ theme }, null, 'kbd');

  return (
    <kbd className={cx(classes.kbd, className)} {...others}>
      {children}
    </kbd>
  );
}

Kbd.displayName = '@mantine/core/Kbd';
