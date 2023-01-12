import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { TableStylesParams } from './Table.styles';

export interface TableProps
  extends DefaultProps<never, TableStylesParams>,
    React.ComponentPropsWithoutRef<'table'> {
  variant?: string;

  /** If true every odd row of table will have gray background color */
  striped?: boolean;

  /** If true row will have hover color */
  highlightOnHover?: boolean;

  /** Table caption position */
  captionSide?: 'top' | 'bottom';

  /** Horizontal cells spacing from theme.spacing or any valid CSS value */
  horizontalSpacing?: MantineNumberSize;

  /** Vertical cells spacing from theme.spacing or any valid CSS value */
  verticalSpacing?: MantineNumberSize;

  /** Sets font size of all text inside table */
  fontSize?: MantineNumberSize;

  /** Add border to table */
  withBorder?: boolean;

  /** Add border to columns */
  withColumnBorders?: boolean;
}

const defaultProps: Partial<TableProps> = {
  striped: false,
  highlightOnHover: false,
  captionSide: 'top',
  horizontalSpacing: 'xs',
  fontSize: 'sm',
  verticalSpacing: 7,
  withBorder: false,
  withColumnBorders: false,
};

export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const {
    className,
    children,
    striped,
    highlightOnHover,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    fontSize,
    unstyled,
    withBorder,
    withColumnBorders,
    variant,
    ...others
  } = useComponentDefaultProps('Table', defaultProps, props);

  const { classes, cx } = useStyles(
    { captionSide, verticalSpacing, horizontalSpacing, fontSize, withBorder, withColumnBorders },
    { unstyled, name: 'Table', variant }
  );

  return (
    <Box
      {...others}
      component="table"
      ref={ref}
      className={cx(classes.root, className)}
      data-striped={striped || undefined}
      data-hover={highlightOnHover || undefined}
    >
      {children}
    </Box>
  );
});

Table.displayName = '@mantine/core/Table';
