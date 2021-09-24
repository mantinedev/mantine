import React from 'react';
import clsx from 'clsx';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  getSizeValue,
  MANTINE_SIZES,
} from '@mantine/styles';

export interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
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
  style,
  columns,
  className,
  id,
  ...others
}: ColProps) {
  const breakpointValues = { xs, sm, md, lg, xl };
  const theme = useMantineTheme();
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  let styles: React.CSSProperties = {};
  styles = {
    ...style,
    boxSizing: 'border-box',
    flexGrow: grow ? 1 : 0,
    maxWidth: grow ? 'unset' : null,
    padding: spacing / 2,
  };

  if (isValidSpan(offset)) {
    styles.marginLeft = `${100 / (columns / offset)}%`;
  }

  let sizeClassObj = {
    [`${id}-col-${span}`]: span !== undefined,
  };

  MANTINE_SIZES.forEach((size) => {
    const propSize = breakpointValues[size];
    if (!isValidSpan(propSize) || propSize > columns) {
      return null;
    }
    sizeClassObj = {
      ...sizeClassObj,
      [`${id}-col-${size}-${propSize}`]: propSize !== undefined,
    };
    return true;
  });

  return (
    <div style={styles} className={clsx('mantine-col', className, sizeClassObj)} {...others}>
      {children}
    </div>
  );
}

Col.displayName = '@mantine/core/Col';
