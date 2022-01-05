import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Table.styles';

export interface TableProps extends DefaultProps, React.ComponentPropsWithoutRef<'table'> {
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
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      children,
      striped = false,
      highlightOnHover = false,
      captionSide = 'top',
      horizontalSpacing = 'xs',
      verticalSpacing = 7,
      ...others
    }: TableProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { captionSide, verticalSpacing, horizontalSpacing },
      { name: 'Table' }
    );

    return (
      <Box
        {...others}
        component="table"
        ref={ref}
        className={cx(
          classes.root,
          { [classes.striped]: striped, [classes.hover]: highlightOnHover },
          className
        )}
      >
        {children}
      </Box>
    );
  }
);

Table.displayName = '@mantine/core/Table';
