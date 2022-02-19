import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useMantineDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { SimpleGridBreakpoint } from './SimpleGrid.styles';

export interface SimpleGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Breakpoints data to change items per row and spacing based on max-width */
  breakpoints?: SimpleGridBreakpoint[];

  /** Default amount of columns, used when none of breakpoints can be applied  */
  cols?: number;

  /** Default spacing between columns, used when none of breakpoints can be applied */
  spacing?: MantineNumberSize;
}

const defaultProps: Partial<SimpleGridProps> = {
  breakpoints: [],
  cols: 1,
  spacing: 'md',
};

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  (props: SimpleGridProps, ref) => {
    const { className, breakpoints, cols, spacing, children, classNames, styles, ...others } =
      useMantineDefaultProps('SimpleGrid', defaultProps, props);

    const { classes, cx } = useStyles(
      { breakpoints, cols, spacing },
      { classNames, styles, name: 'SimpleGrid' }
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

SimpleGrid.displayName = '@mantine/core/SimpleGrid';
