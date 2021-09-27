import React, { Children, useMemo } from 'react';
import { DefaultProps, MantineNumberSize, useExtractedMargins } from '@mantine/styles';
import useStyles from './SimpleGrid.styles';

export interface SimpleGridBreakpoint {
  maxWidth: number;
  cols: number;
  spacing?: MantineNumberSize;
}

export interface SimpleGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Breakpoints data to change items per row and spacing based on max-width */
  breakpoints?: SimpleGridBreakpoint[];

  /** Default amount of columns, used when none of breakpoints can be applied  */
  cols: number;

  /** Default spacing between columns, used when none of breakpoints can be applied */
  spacing?: MantineNumberSize;
}

export function SimpleGrid({
  className,
  breakpoints = [],
  cols,
  id,
  spacing = 'md',
  children,
  style,
  ...others
}: SimpleGridProps) {
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const sortedBreakpoints = useMemo(
    () => [...breakpoints].sort((a, b) => b.maxWidth - a.maxWidth),
    []
  );
  const { classes, cx } = useStyles(
    { breakpoints: sortedBreakpoints, cols, spacing },
    null,
    'simple-grid'
  );

  const columns = (Children.toArray(children) as React.ReactElement[]).map((column) =>
    React.cloneElement(column, { className: cx(classes.col, column.props.className) })
  );

  return (
    <div className={cx(classes.grid, className)} id={id} style={mergedStyles} {...rest}>
      {columns}
    </div>
  );
}

SimpleGrid.displayName = '@mantine/core/SimpleGrid';
