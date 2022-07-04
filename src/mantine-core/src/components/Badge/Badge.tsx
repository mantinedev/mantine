import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
  Selectors,
  PolymorphicComponentProps,
  PolymorphicRef,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Badge.styles';

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';
export type BadgeStylesNames = Selectors<typeof useStyles>;

interface _BadgeProps extends DefaultProps<BadgeStylesNames> {
  /** Badge color from theme */
  color?: MantineColor;

  /** Controls badge background, color and border styles */
  variant?: BadgeVariant;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;

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

  /** Badge label */
  children?: React.ReactNode;
}

export type BadgeProps<C> = PolymorphicComponentProps<C, _BadgeProps>;

type BadgeComponent = (<C = 'div'>(props: BadgeProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<BadgeProps<any>> = {
  variant: 'light',
  size: 'md',
  radius: 'xl',
  gradient: { from: 'blue', to: 'cyan', deg: 45 },
};

export const Badge: BadgeComponent = forwardRef(
  (props: BadgeProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const {
      component,
      className,
      color,
      variant,
      fullWidth,
      children,
      size,
      leftSection,
      rightSection,
      radius,
      gradient,
      classNames,
      styles,
      ...others
    } = useMantineDefaultProps('Badge', defaultProps, props);

    const { classes, cx } = useStyles(
      {
        size,
        fullWidth,
        color,
        radius,
        gradientFrom: gradient.from,
        gradientTo: gradient.to,
        gradientDeg: gradient.deg,
      },
      { classNames, styles, name: 'Badge' }
    );

    return (
      <Box
        component={component || 'div'}
        className={cx(classes[variant], classes.root, className)}
        ref={ref}
        {...others}
      >
        {leftSection && <span className={classes.leftSection}>{leftSection}</span>}
        <span className={classes.inner}>{children}</span>
        {rightSection && <span className={classes.rightSection}>{rightSection}</span>}
      </Box>
    );
  }
) as any;

Badge.displayName = '@mantine/core/Badge';
