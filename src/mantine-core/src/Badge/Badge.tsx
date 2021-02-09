import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineColor } from '@mantine/theme';
import useStyles, { BadgeVariant } from './Badge.styles';

interface BadgeProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  color?: MantineColor;
  variant?: BadgeVariant;
}

export default function Badge({
  className,
  color,
  variant = 'badge',
  children,
  ...others
}: BadgeProps) {
  const classes = useStyles({ variant, color, theme: useMantineTheme() });

  return (
    <div {...others} data-mantine-composable className={cx(classes.badge, className)}>
      {children}
    </div>
  );
}

Badge.displayName = '@mantine/core/Badge';
