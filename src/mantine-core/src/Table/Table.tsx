import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Table.styles.less';

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
