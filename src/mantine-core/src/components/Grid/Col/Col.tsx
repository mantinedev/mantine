import React from 'react';
import { DefaultProps, MantineNumberSize, MantineMargin } from '@mantine/styles';
import useStyles from './Col.styles';

export interface ColProps
  extends Omit<DefaultProps, MantineMargin>,
    React.ComponentPropsWithoutRef<'div'> {
  span: number;
  columns?: number;
  offset?: number;
  gutter?: MantineNumberSize;
  grow?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export function isValidSpan(span: number) {
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

export const getColumnWidth = (colSpan: number, columns: number) => `${100 / (columns / colSpan)}%`;

export function Col({
  children,
  span,
  gutter,
  offset = 0,
  grow,
  xs,
  sm,
  md,
  lg,
  xl,
  columns,
  className,
  id,
  ...others
}: ColProps) {
  const { classes, cx } = useStyles(
    { gutter, offset, xs, sm, md, lg, xl, grow, columns, span },
    null,
    'grid'
  );

  if (!isValidSpan(span) || span > columns) {
    return null;
  }
  return (
    <div className={cx(classes.col, className)} {...others}>
      {children}
    </div>
  );
}

Col.displayName = '@mantine/core/Col';
