import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  useMantineDefaultProps,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { UnstyledButton } from '../UnstyledButton';
import useStyles, { sizes, ActionIconVariant, ActionIconStylesParams } from './ActionIcon.styles';
import { Loader, LoaderProps } from '../Loader';

export type ActionIconStylesNames = Selectors<typeof useStyles>;

export interface ActionIconProps
  extends DefaultProps<ActionIconStylesNames, ActionIconStylesParams> {
  /** Icon */
  children?: React.ReactNode;

  /** Controls appearance */
  variant?: ActionIconVariant;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined icon size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Props spread to Loader component */
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
  loading: false,
};

export const _ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => {
  const {
    className,
    color,
    children,
    radius,
    size,
    variant,
    disabled,
    loaderProps,
    loading,
    styles,
    classNames,
    ...others
  } = useMantineDefaultProps('ActionIcon', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { size, radius, color, variant },
    { name: 'ActionIcon', classNames, styles }
  );
  const colors = theme.fn.variant({ color, variant: 'light' });

  const loader = (
    <Loader color={colors.color} size={theme.fn.size({ size, sizes }) - 12} {...loaderProps} />
  );

  return (
    <UnstyledButton
      className={cx(classes.root, className)}
      ref={ref}
      disabled={disabled || loading}
      data-disabled={disabled ? true : undefined}
      data-loading={loading ? true : undefined}
      {...others}
    >
      {loading ? loader : children}
    </UnstyledButton>
  );
});

_ActionIcon.displayName = '@mantine/core/ActionIcon';

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(_ActionIcon);
