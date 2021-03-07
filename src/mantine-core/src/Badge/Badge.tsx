import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import useStyles, { BadgeVariant } from './Badge.styles';

interface BadgeProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  color?: string;
  variant?: BadgeVariant;

  /** Sets badge width to 100% of parent element */
  fullWidth?: boolean;
}

export function Badge({
  className,
  color,
  variant = 'badge',
  fullWidth,
  children,
  themeOverride,
  ...others
}: BadgeProps) {
  const classes = useStyles({ fullWidth, variant, color, theme: useMantineTheme(themeOverride) });

  return (
    <div {...others} data-mantine-composable className={cx(classes.badge, className)}>
      {children}
    </div>
  );
}

Badge.displayName = '@mantine/core/Badge';
