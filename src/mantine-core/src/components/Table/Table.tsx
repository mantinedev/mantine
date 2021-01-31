import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import useStyles from './Table.styles';

interface TableProps extends DefaultProps, React.HTMLProps<HTMLTableElement> {
  striped?: boolean;
  highlighOnHover?: boolean;
}

export default function Table({
  className,
  children,
  striped = false,
  highlighOnHover = false,
  ...others
}: TableProps) {
  const classes = useStyles();

  return (
    <table
      {...others}
      className={cx(
        classes.table,
        { [classes.striped]: striped, [classes.hover]: highlighOnHover },
        className
      )}
    >
      {children}
    </table>
  );
}

Table.displayName = '@mantine/core/Table';
