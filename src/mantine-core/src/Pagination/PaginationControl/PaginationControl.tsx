/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Selectors, DefaultProps } from '@mantine/styles';
import { UnstyledButton } from '../../UnstyledButton';
import { usePaginationContext } from '../Pagination.context';
import useStyles from './PaginationControl.styles';

export type PaginationControlStylesNames = Selectors<typeof useStyles>;

export interface PaginationControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Determines whether control should have active styles */
  active?: boolean;

  /** Determines whether control should have padding, true by default */
  withPadding?: boolean;
}

const defaultProps: Partial<PaginationControlProps> = {
  withPadding: true,
};

export const PaginationControl = forwardRef<HTMLButtonElement, PaginationControlProps>(
  (props, ref) => {
    const { active, className, disabled, withPadding, ...others } = useComponentDefaultProps(
      'PaginationControl',
      defaultProps,
      props
    );

    const ctx = usePaginationContext();
    const { classes, cx } = useStyles(
      { color: ctx.color, radius: ctx.radius, withPadding },
      ctx.stylesApi
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
