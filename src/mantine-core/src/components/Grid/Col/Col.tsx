import React from 'react';
import { DefaultProps, MantineNumberSize, MantineMargin } from '@mantine/styles';
import useStyles from './Col.styles';

export interface ColProps
  extends Omit<DefaultProps, MantineMargin>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Default col span */
  span: number;

  /** Total amount of columns, controlled by Grid component */
  columns?: number;

  /** Column left offset */
  offset?: number;

  /** Space between columns from theme, or number to set value in px, controlled by Grid component */
  gutter?: MantineNumberSize;

  /** sets flex-grow to 1 if true, controlled by Grid component */
  grow?: boolean;

  /** Col span at (min-width: theme.breakpoints.xs) */
  xs?: number;

  /** Col span at (min-width: theme.breakpoints.sm) */
  sm?: number;

  /** Col span at (min-width: theme.breakpoints.md) */
  md?: number;

  /** Col span at (min-width: theme.breakpoints.lg) */
  lg?: number;

  /** Col span at (min-width: theme.breakpoints.xl) */
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
  sx,
  ...others
}: ColProps) {
  const { classes, cx } = useStyles(
    { gutter, offset, xs, sm, md, lg, xl, grow, columns, span },
    { sx, name: 'Col' }
  );

  if (!isValidSpan(span) || span > columns) {
    return null;
  }
  return (
    <div className={cx(classes.root, className)} {...others}>
      {children}
    </div>
  );
}

Col.displayName = '@mantine/core/Col';
