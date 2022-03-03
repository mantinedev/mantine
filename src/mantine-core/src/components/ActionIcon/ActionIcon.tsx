import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  getSharedColorScheme,
  MantineColor,
  PolymorphicComponentProps,
  PolymorphicRef,
  ClassNames,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { sizes, ActionIconVariant } from './ActionIcon.styles';
import { Loader, LoaderProps } from '../Loader';

export type ActionIconStylesNames = ClassNames<typeof useStyles>;

interface _ActionIconProps extends DefaultProps<ActionIconStylesNames> {
  /** Icon rendered inside button */
  children: React.ReactNode;

  /** Controls appearance */
  variant?: ActionIconVariant;

  /** Button hover, active and icon colors from theme */
  color?: MantineColor;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined icon size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Indicate loading state */
  loading?: boolean;
}

export type ActionIconProps<C> = PolymorphicComponentProps<C, _ActionIconProps>;

type ActionIconComponent = (<C = 'button'>(props: ActionIconProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const ActionIcon: ActionIconComponent = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      className,
      color = 'gray',
      children,
      radius = 'sm',
      size = 'md',
      variant = 'hover',
      disabled,
      loaderProps,
      loading = false,
      component,
      styles,
      classNames,
      ...others
    }: any,
    ref: PolymorphicRef<C>
  ) => {
    const theme = useMantineTheme();
    const { classes, cx } = useStyles(
      { size, radius, color },
      { name: 'ActionIcon', classNames, styles }
    );
    const colors = getSharedColorScheme({ color, theme, variant: 'light' });

    const loader = (
      <Loader color={colors.color} size={theme.fn.size({ size, sizes }) - 12} {...loaderProps} />
    );

    return (
      <Box<any>
        component={component || 'button'}
        className={cx(classes[variant], classes.root, { [classes.loading]: loading }, className)}
        type="button"
        ref={ref}
        disabled={disabled || loading}
        {...others}
      >
        {loading ? loader : children}
      </Box>
    );
  }
);

ActionIcon.displayName = '@mantine/core/ActionIcon';
