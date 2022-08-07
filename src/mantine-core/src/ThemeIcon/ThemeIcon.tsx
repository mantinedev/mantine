import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { ThemeIconVariant, ThemeIconStylesParams } from './ThemeIcon.styles';

export interface ThemeIconProps
  extends DefaultProps<never, ThemeIconStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
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

const defaultProps: Partial<ThemeIconProps> = {
  size: 'md',
  variant: 'filled',
  gradient: { from: 'blue', to: 'cyan', deg: 45 },
};

export const ThemeIcon = forwardRef<HTMLDivElement, ThemeIconProps>((props, ref) => {
  const { className, size, radius, variant, color, children, gradient, unstyled, ...others } =
    useComponentDefaultProps('ThemeIcon', defaultProps, props);

  const { classes, cx } = useStyles(
    { variant, radius, color, size, gradient },
    { name: 'ThemeIcon', unstyled }
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

ThemeIcon.displayName = '@mantine/core/ThemeIcon';
