import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useGridContext } from '../Grid.context';
import useStyles, { ColSpan } from './Col.styles';

export interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Default col span */
  span?: ColSpan;

  /** Column left offset */
  offset?: number;

  /** Default col order */
  order?: React.CSSProperties['order'];

  /** Col order at (min-width: theme.breakpoints.xs) */
  orderXs?: React.CSSProperties['order'];

  /** Col order at (min-width: theme.breakpoints.sm) */
  orderSm?: React.CSSProperties['order'];

  /** Col order at (min-width: theme.breakpoints.md) */
  orderMd?: React.CSSProperties['order'];

  /** Col order at (min-width: theme.breakpoints.lg) */
  orderLg?: React.CSSProperties['order'];

  /** Col order at (min-width: theme.breakpoints.xl) */
  orderXl?: React.CSSProperties['order'];

  /** Column left offset at (min-width: theme.breakpoints.xs) */
  offsetXs?: number;

  /** Column left offset at (min-width: theme.breakpoints.sm) */
  offsetSm?: number;

  /** Column left offset at (min-width: theme.breakpoints.md) */
  offsetMd?: number;

  /** Column left offset at (min-width: theme.breakpoints.lg) */
  offsetLg?: number;

  /** Column left offset at (min-width: theme.breakpoints.xl) */
  offsetXl?: number;

  /** Col span at (min-width: theme.breakpoints.xs) */
  xs?: ColSpan;

  /** Col span at (min-width: theme.breakpoints.sm) */
  sm?: ColSpan;

  /** Col span at (min-width: theme.breakpoints.md) */
  md?: ColSpan;

  /** Col span at (min-width: theme.breakpoints.lg) */
  lg?: ColSpan;

  /** Col span at (min-width: theme.breakpoints.xl) */
  xl?: ColSpan;
}

const defaultProps: Partial<ColProps> = {
  offset: 0,
  offsetXs: 0,
  offsetSm: 0,
  offsetMd: 0,
  offsetLg: 0,
  offsetXl: 0,
};

function isValidSpan(span: ColSpan) {
  if (span === 'auto' || span === 'content') {
    return true;
  }
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

export const Col = forwardRef<HTMLDivElement, ColProps>((props: ColProps, ref) => {
  const {
    children,
    span,
    offset,
    offsetXs,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetXl,
    xs,
    sm,
    md,
    lg,
    xl,
    order,
    orderXs,
    orderSm,
    orderMd,
    orderLg,
    orderXl,
    className,
    id,
    unstyled,
    ...others
  } = useComponentDefaultProps('Grid.Col', defaultProps, props);

  const ctx = useGridContext();

  if (!ctx) {
    throw new Error('[@mantine/core] Grid.Col was used outside of Grid context');
  }

  const colSpan = span || ctx.columns;
  const { classes, cx } = useStyles(
    {
      gutter: ctx.gutter,
      offset,
      offsetXs,
      offsetSm,
      offsetMd,
      offsetLg,
      offsetXl,
      xs,
      sm,
      md,
      lg,
      xl,
      order,
      orderXs,
      orderSm,
      orderMd,
      orderLg,
      orderXl,
      grow: ctx.grow,
      columns: ctx.columns,
      span: colSpan,
    },
    { unstyled, name: 'Col' }
  );

  if (!isValidSpan(colSpan) || colSpan > ctx.columns) {
    return null;
  }

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

Col.displayName = '@mantine/core/Col';
