import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
  useExtractedMargins,
} from '@mantine/styles';
import useStyles, { ThemeIconVariant } from './ThemeIcon.styles';

export interface ThemeIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
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

export const ThemeIcon = forwardRef<HTMLDivElement, ThemeIconProps>(
  (
    {
      className,
      size = 'md',
      radius = 'sm',
      variant = 'filled',
      color,
      children,
      gradient = { from: 'blue', to: 'cyan', deg: 45 },
      style,
      sx,
      ...others
    }: ThemeIconProps,
    ref
  ) => {
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
      { sx, name: 'ThemeIcon' }
    );

    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

ThemeIcon.displayName = '@mantine/core/ThemeIcon';
