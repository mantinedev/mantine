import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  useMantineDefaultProps,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
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
  variant: 'hover',
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
    <Box
      component="button"
      type="button"
      className={cx(classes.root, { [classes.loading]: loading }, className)}
      ref={ref}
      disabled={disabled || loading}
      {...others}
    >
      {loading ? loader : children}
    </Box>
  );
});

_ActionIcon.displayName = '@mantine/core/ActionIcon';

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(_ActionIcon);
