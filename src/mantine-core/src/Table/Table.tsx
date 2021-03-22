import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Table.styles';

interface TableProps extends DefaultProps, React.ComponentPropsWithoutRef<'table'> {
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
  themeOverride,
  captionSide = 'top',
  ...others
}: TableProps) {
  const classes = useStyles({ captionSide, theme: useMantineTheme(themeOverride) });

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
