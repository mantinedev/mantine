import React from 'react';
import { DefaultProps, MantineNumberSize, MantineGradient, MantineColor } from '@mantine/tss';
import useStyles, { sizes, ThemeIconVariant } from './ThemeIcon.styles';

export const THEME_ICON_SIZES = sizes;

export interface ThemeIconProps extends DefaultProps, React.ComponentProps<'div'> {
  /** Icon */
  children: React.ReactNode;

  /** Predefined width and height or number for width and height in px */
  size?: MantineNumberSize;

  /** Predefined border-radius from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Icon color from theme */
  color?: MantineColor;

  /** Controls appearance */
  variant?: ThemeIconVariant;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;
}

export function ThemeIcon({
  className,
  size = 'md',
  radius = 'sm',
  variant = 'filled',
  color,
  children,
  gradient = { from: 'blue', to: 'cyan', deg: 45 },
  ...others
}: ThemeIconProps) {
  const { classes, cx } = useStyles(
    {
      variant,
      radius,
      color,
      size,
      gradientFrom: gradient.from,
      gradientTo: gradient.to,
      gradientDeg: gradient.deg,
    },
    null,
    'theme-icon'
  );

  return (
    <div className={cx(classes.root, className)} {...others}>
      {children}
    </div>
  );
}

ThemeIcon.displayName = '@mantine/core/ThemeIcon';
