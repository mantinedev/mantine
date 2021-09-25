import React from 'react';
import { DefaultProps } from '@mantine/styles';
import useStyles from './Table.styles';

export interface TableProps extends DefaultProps, React.ComponentPropsWithoutRef<'table'> {
  /** If true every odd row of table will have gray background color */
  striped?: boolean;

  /** If true row will have hover color */
  highlightOnHover?: boolean;

  /** Table caption position */
  captionSide?: 'top' | 'bottom';
}

export function Table({
  className,
  children,
  striped = false,
  highlightOnHover = false,
  captionSide = 'top',
  ...others
}: TableProps) {
  const { classes, cx } = useStyles({ captionSide }, null, 'table');

  return (
    <table
      {...others}
      className={cx(
        classes.table,
        { [classes.striped]: striped, [classes.hover]: highlightOnHover },
        className
      )}
    >
      {children}
    </table>
  );
}

Table.displayName = '@mantine/core/Table';
