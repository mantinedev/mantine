import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Popover.styles';

interface PopoverProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Disable closing by click outside */
  noClickOutside?: boolean;

  /** Disable focus trap */
  noFocusTrap?: boolean;
}

export function Popover({ className, themeOverride, children }: PopoverProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  return (
    <div className={cx(classes.popover, className)}>
      <div className={classes.arrow} />
      <div className={classes.body}>{children}</div>
    </div>
  );
}

Popover.displayName = '@mantine/core/Popover';
