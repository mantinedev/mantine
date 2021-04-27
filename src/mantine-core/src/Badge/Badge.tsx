import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize, MantineNumberSize } from '@mantine/theme';
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

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
  fullWidth?: boolean;

  /** Section rendered on the left side of label */
  leftSection?: React.ReactNode;

  /** Section rendered on the right side of label */
  rightSection?: React.ReactNode;
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
  leftSection,
  rightSection,
  radius = 'xl',
  ...others
}: ComponentPassThrough<T, BadgeProps>) {
  const classes = useStyles({
    size,
    fullWidth,
    color,
    radius,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <Component
      {...others}
      data-mantine-composable
      className={cx(classes.badge, classes[variant], className)}
    >
      {leftSection && (
        <span data-mantine-badge-left className={classes.leftSection}>
          {leftSection}
        </span>
      )}

      <span className={classes.inner}>{children}</span>

      {rightSection && (
        <span data-mantine-badge-right className={classes.rightSection}>
          {rightSection}
        </span>
      )}
    </Component>
  );
}

Badge.displayName = '@mantine/core/Badge';
