import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles, { heights } from './Badge.styles';

export const BADGE_SIZES = heights;

interface BadgeProps extends DefaultProps {
  /** Badge color from theme */
  color?: string;

  /** Controls badge background, color and border styles */
  variant?: 'light' | 'filled' | 'outline';

  /** Defines badge height and font-size */
  size?: MantineSize;

  /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
  fullWidth?: boolean;
}

export function Badge<T extends React.ElementType = 'div'>({
  component: Component = 'div',
  className,
  color,
  variant = 'light',
  fullWidth,
  children,
  themeOverride,
  size = 'md',
  ...others
}: ComponentPassThrough<T, BadgeProps>) {
  const classes = useStyles({
    size,
    fullWidth,
    variant,
    color,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <Component
      {...others}
      data-mantine-composable
      className={cx(classes.badge, classes[variant], className)}
    >
      {children}
    </Component>
  );
}

Badge.displayName = '@mantine/core/Badge';
