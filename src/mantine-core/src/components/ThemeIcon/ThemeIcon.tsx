import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '../../theme';
import useStyles, { sizes } from './ThemeIcon.styles';

export const THEME_ICON_SIZES = sizes;

export interface ThemeIconProps extends DefaultProps, React.ComponentProps<'div'> {
  /** Icon */
  children: React.ReactNode;

  /** Predefined width and height or number for width and height in px */
  size?: MantineNumberSize;

  /** Predefined border-radius from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Icon color from theme */
  color?: string;

  /** Controls appearance */
  variant?: 'filled' | 'light';
}

export function ThemeIcon({
  className,
  size = 'md',
  radius = 'sm',
  variant = 'filled',
  color,
  children,
  themeOverride,
  ...others
}: ThemeIconProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, radius, color, size }, null, 'theme-icon');

  return (
    <div className={cx(classes.root, classes[variant], className)} {...others}>
      {children}
    </div>
  );
}

ThemeIcon.displayName = '@mantine/core/ThemeIcon';
