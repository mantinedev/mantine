import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './Col.styles';

export interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Default col span */
  span?: number;

  /** Total amount of columns, controlled by Grid component */
  columns?: number;

  /** Column left offset */
  offset?: number;

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
  offsetXs = 0,
  offsetSm = 0,
  offsetMd = 0,
  offsetLg = 0,
  offsetXl = 0,
  grow,
  xs,
  sm,
  md,
  lg,
  xl,
  columns,
  className,
  classNames,
  styles,
  id,
  ...others
}: ColProps) {
  const { classes, cx } = useStyles(
    {
      gutter,
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
      grow,
      columns,
      span,
    },
    { classNames, styles, name: 'Col' }
  );

  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  return (
    <Box className={cx(classes.root, className)} {...others}>
      {children}
    </Box>
  );
}

Col.displayName = '@mantine/core/Col';
