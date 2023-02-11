/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import {
  useComponentDefaultProps,
  Selectors,
  DefaultProps,
  MantineNumberSize,
  MantineColor,
} from '@mantine/styles';
import { UnstyledButton } from '../../UnstyledButton';
import useStyles from './PaginationControl.styles';

export type PaginationControlStylesNames = Selectors<typeof useStyles>;

export interface PaginationControlProps
  extends DefaultProps<PaginationControlStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  variant?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Controls control min-width and height */
  size?: MantineNumberSize;

  /** Key of theme.colors, active control background-color, theme.primaryColor by default */
  color?: MantineColor;

  /** Determines whether control should have active styles */
  active?: boolean;

  /** Determines whether control should have padding, true by default */
  withPadding?: boolean;
}

const defaultProps: Partial<PaginationControlProps> = {
  size: 'md',
  withPadding: true,
};

export const PaginationControl = forwardRef<HTMLButtonElement, PaginationControlProps>(
  (props, ref) => {
    const {
      active,
      classNames,
      styles,
      unstyled,
      variant,
      size,
      radius,
      className,
      color,
      disabled,
      withPadding,
      ...others
    } = useComponentDefaultProps('PaginationControl', defaultProps, props);

    const { classes, cx } = useStyles(
      { color, radius, withPadding },
      {
        name: 'Pagination',
        classNames,
        styles,
        unstyled,
        variant,
        size,
      }
    );

    return (
      <UnstyledButton
        {...others}
        disabled={disabled}
        data-active={active || undefined}
        data-disabled={disabled || undefined}
        ref={ref}
        className={cx(classes.control, className)}
      />
    );
  }
);

PaginationControl.displayName = '@mantine/core/PaginationControl';
