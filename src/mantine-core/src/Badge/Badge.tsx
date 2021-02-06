import React from 'react';
import cx from 'clsx';
import { DefaultProps, OpenColorTheme } from '@mantine/types';
import useStyles, { BadgeVariant } from './Badge.styles';

interface BadgeProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  color?: OpenColorTheme;
  variant?: BadgeVariant;
}

export default function Badge({
  className,
  color = 'gray',
  variant = 'badge',
  children,
  ...others
}: BadgeProps) {
  const classes = useStyles({ variant, color });

  return (
    <div {...others} data-composable className={cx(classes.badge, className)}>
      {children}
    </div>
  );
}

Badge.displayName = '@mantine/core/Badge';
