import React from 'react';
import { DefaultProps } from '@mantine/styles';
import useStyles from './Kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  /** Keyboard key */
  children: React.ReactNode;
}

export function Kbd({ className, children, ...others }: KbdProps) {
  const { classes, cx } = useStyles(null, null, 'kbd');

  return (
    <kbd className={cx(classes.kbd, className)} {...others}>
      {children}
    </kbd>
  );
}

Kbd.displayName = '@mantine/core/Kbd';
