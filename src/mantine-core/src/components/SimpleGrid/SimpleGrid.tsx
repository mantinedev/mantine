import React, { Children } from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '../../theme';
import useStyles, { GridBreakpoint } from './SimpleGrid.styles';

interface SimpleGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Breakpoints data to change items per row and spacing based on max-width */
  breakpoints?: GridBreakpoint[];

  /** Default amount of columns, used when none of breakpoints can be applied  */
  cols: number;

  /** Default spacing between columns, used when none of breakpoints can be applied */
  spacing?: MantineNumberSize;
}

export function SimpleGrid({
  className,
  breakpoints = [],
  cols,
  spacing = 'md',
  themeOverride,
  children,
  ...others
}: SimpleGridProps) {
  const theme = useMantineTheme(themeOverride);
  const sortedBreakpoints = [...breakpoints].sort((a, b) => b.maxWidth - a.maxWidth);
  const classes = useStyles(
    { theme, breakpoints: sortedBreakpoints, cols, spacing },
    null,
    'simple-grid'
  );

  const columns = (Children.toArray(children) as React.ReactElement[]).map((column) =>
    React.cloneElement(column, { className: cx(classes.col, column.props.className) })
  );

  return (
    <div className={cx(classes.grid, className)} {...others}>
      {columns}
    </div>
  );
}

SimpleGrid.displayName = '@mantine/core/SimpleGrid';
