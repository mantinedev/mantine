import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  useExtractedMargins,
  useMantineTheme,
} from '@mantine/styles';
import { getSortedBreakpoints } from './get-sorted-breakpoints/get-sorted-breakpoints';
import useStyles, { SimpleGridBreakpoint } from './SimpleGrid.styles';

export interface SimpleGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Breakpoints data to change items per row and spacing based on max-width */
  breakpoints?: SimpleGridBreakpoint[];

  /** Default amount of columns, used when none of breakpoints can be applied  */
  cols?: number;

  /** Default spacing between columns, used when none of breakpoints can be applied */
  spacing?: MantineNumberSize;
}

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  (
    {
      className,
      breakpoints = [],
      cols = 1,
      spacing = 'md',
      children,
      style,
      sx,
      ...others
    }: SimpleGridProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const sortedBreakpoints = getSortedBreakpoints(theme, breakpoints);
    const { classes, cx } = useStyles(
      { breakpoints: sortedBreakpoints, cols, spacing },
      { sx, name: 'SimpleGrid' }
    );

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

SimpleGrid.displayName = '@mantine/core/SimpleGrid';
