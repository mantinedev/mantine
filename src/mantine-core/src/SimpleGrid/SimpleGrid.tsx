import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { SimpleGridBreakpoint, SimpleGridStylesParams } from './SimpleGrid.styles';

export interface SimpleGridProps
  extends DefaultProps<never, SimpleGridStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Breakpoints data to change items per row and spacing based on max-width */
  breakpoints?: SimpleGridBreakpoint[];

  /** Default amount of columns, used when none of breakpoints can be applied  */
  cols?: number;

  /** Spacing between columns, used when none of breakpoints can be applied */
  spacing?: MantineNumberSize;

  /** Vertical spacing between columns, used when none of breakpoints can be applied  */
  verticalSpacing?: MantineNumberSize;
}

const defaultProps: Partial<SimpleGridProps> = {
  breakpoints: [],
  cols: 1,
  spacing: 'md',
};

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>((props, ref) => {
  const {
    className,
    breakpoints,
    cols,
    spacing,
    verticalSpacing,
    children,
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('SimpleGrid', defaultProps, props);

  const { classes, cx } = useStyles(
    { breakpoints, cols, spacing, verticalSpacing },
    { name: 'SimpleGrid', unstyled, variant }
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

SimpleGrid.displayName = '@mantine/core/SimpleGrid';
