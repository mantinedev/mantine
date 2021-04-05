import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles from './Drawer.styles';

interface DrawerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  position?: 'top' | 'bottom' | 'left' | 'right';
  size?: MantineNumberSize;
  trapFocus?: boolean;
  lockScroll?: boolean;
}

export function Drawer({
  className,
  themeOverride,
  position,
  size,
  // trapFocus = false,
  // lockScroll = false,
  ...others
}: DrawerProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  return (
    <div className={cx(classes.drawer, className)} {...others}>
      Drawer
    </div>
  );
}

Drawer.displayName = '@mantine/core/Drawer';
