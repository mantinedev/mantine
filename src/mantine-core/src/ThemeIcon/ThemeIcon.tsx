import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
  useComponentDefaultProps,
  Variants,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { ThemeIconStylesParams } from './ThemeIcon.styles';

export type ThemeIconVariant = Variants<'filled' | 'light' | 'gradient' | 'outline' | 'default'>;

export interface ThemeIconProps
  extends DefaultProps<never, ThemeIconStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Icon */
  children: React.ReactNode;

  /** Width and height of theme icon */
  size?: MantineNumberSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
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
};

export const ThemeIcon = forwardRef<HTMLDivElement, ThemeIconProps>((props, ref) => {
  const { className, size, radius, variant, color, children, gradient, unstyled, ...others } =
    useComponentDefaultProps('ThemeIcon', defaultProps, props);

  const { classes, cx } = useStyles(
    { variant, radius, color, gradient },
    { name: 'ThemeIcon', unstyled, variant, size }
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

ThemeIcon.displayName = '@mantine/core/ThemeIcon';
