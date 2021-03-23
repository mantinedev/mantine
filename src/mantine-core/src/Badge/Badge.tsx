import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles, { BadgeVariant } from './Badge.styles';

interface BadgeProps extends DefaultProps {
  /** Badge color from theme */
  color?: string;

  /** Controls badge background, color and border styles */
  variant?: BadgeVariant;

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
  ...others
}: ComponentPassThrough<T, BadgeProps>) {
  const classes = useStyles({ fullWidth, variant, color, theme: useMantineTheme(themeOverride) });

  return (
    <Component {...others} data-mantine-composable className={cx(classes.badge, className)}>
      {children}
    </Component>
  );
}

Badge.displayName = '@mantine/core/Badge';
