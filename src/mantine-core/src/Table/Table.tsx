import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { TableStylesParams } from './Table.styles';

export interface TableProps
  extends DefaultProps<never, TableStylesParams>,
    React.ComponentPropsWithoutRef<'table'> {
  /** If true every odd row of table will have gray background color */
  striped?: boolean;

  /** If true row will have hover color */
  highlightOnHover?: boolean;

  /** Table caption position */
  captionSide?: 'top' | 'bottom';

  /** Horizontal cells spacing from theme.spacing or number to set value in px */
  horizontalSpacing?: MantineNumberSize;

  /** Vertical cells spacing from theme.spacing or number to set value in px */
  verticalSpacing?: MantineNumberSize;

  /** Sets font size of all text inside table */
  fontSize?: MantineNumberSize;
}

const defaultProps: Partial<TableProps> = {
  striped: false,
  highlightOnHover: false,
  captionSide: 'top',
  horizontalSpacing: 'xs',
  fontSize: 'sm',
  verticalSpacing: 7,
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
    ...others
  } = useComponentDefaultProps('Table', defaultProps, props);

  const { classes, cx } = useStyles(
    { captionSide, verticalSpacing, horizontalSpacing, fontSize },
    { unstyled, name: 'Table' }
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
