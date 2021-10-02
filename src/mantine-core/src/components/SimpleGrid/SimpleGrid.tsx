import React, { useMemo } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  useExtractedMargins,
  getSizeValue,
  useMantineTheme,
} from '@mantine/styles';
import useStyles, { SimpleGridBreakpoint } from './SimpleGrid.styles';

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
  spacing = 'md',
  children,
  style,
  ...others
}: SimpleGridProps) {
  const theme = useMantineTheme();
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const sortedBreakpoints = useMemo(
    () =>
      [...breakpoints].sort(
        (a, b) =>
          getSizeValue({ size: b.maxWidth, sizes: theme.breakpoints }) -
          getSizeValue({ size: a.maxWidth, sizes: theme.breakpoints })
      ),
    []
  );
  const { classes, cx } = useStyles(
    { breakpoints: sortedBreakpoints, cols, spacing },
    null,
    'simple-grid'
  );

  return (
    <div className={cx(classes.grid, className)} style={mergedStyles} {...rest}>
      {children}
    </div>
  );
}

SimpleGrid.displayName = '@mantine/core/SimpleGrid';
