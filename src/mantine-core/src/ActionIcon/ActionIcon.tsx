import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  useComponentDefaultProps,
  MantineGradient,
  Variants,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { UnstyledButton } from '../UnstyledButton';
import useStyles, { ActionIconStylesParams } from './ActionIcon.styles';
import { Loader, LoaderProps } from '../Loader';

export type ActionIconStylesNames = Selectors<typeof useStyles>;

export interface ActionIconProps
  extends DefaultProps<ActionIconStylesNames, ActionIconStylesParams> {
  __staticSelector?: string;

  /** Icon */
  children?: React.ReactNode;

  /** Controls appearance, subtle by default */
  variant?: Variants<
    'subtle' | 'filled' | 'outline' | 'light' | 'default' | 'transparent' | 'gradient'
  >;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Gradient input, only used when variant="gradient", theme.defaultGradient by default */
  gradient?: MantineGradient;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Predefined button size or any valid CSS value to set width and height */
  size?: MantineNumberSize;

  /** Props added to Loader component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Indicates loading state */
  loading?: boolean;

  /** Indicates disabled state */
  disabled?: boolean;
}

const defaultProps: Partial<ActionIconProps> = {
  color: 'gray',
  size: 'md',
  variant: 'subtle',
};

export const _ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => {
  const {
    className,
    color,
    children,
    radius,
    size,
    variant,
    gradient,
    disabled,
    loaderProps,
    loading,
    unstyled,
    __staticSelector,
    ...others
  } = useComponentDefaultProps('ActionIcon', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { radius, color, gradient },
    { name: ['ActionIcon', __staticSelector], unstyled, size, variant }
  );

  const loader = (
    <Loader
      color={theme.fn.variant({ color, variant }).color}
      size="100%"
      data-action-icon-loader
      {...loaderProps}
    />
  );

  return (
    <UnstyledButton
      className={cx(classes.root, className)}
      ref={ref}
      disabled={disabled}
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      unstyled={unstyled}
      {...others}
    >
      {loading ? loader : children}
    </UnstyledButton>
  );
});

_ActionIcon.displayName = '@mantine/core/ActionIcon';

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(_ActionIcon);
