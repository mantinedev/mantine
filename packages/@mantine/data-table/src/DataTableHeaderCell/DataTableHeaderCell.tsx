import React from 'react';
import { flexRender, Header } from '@tanstack/react-table';
import { factory, Factory, TableTh, TableThProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';

export type DataTableHeaderCellProps = TableThProps & {
  header: Header<unknown, unknown>;
};

export type DataTableHeaderCellFactory = Factory<{
  props: DataTableHeaderCellProps;
  ref: HTMLTableCellElement;
  stylesNames: 'th';
}>;

export const DataTableHeaderCell = factory<DataTableHeaderCellFactory>(
  (_props, ref) => {
    const props = useProps('DataTableHeaderCell', {}, _props);

    const {
      className,
      style,
      classNames,
      styles,
      header,
      ...others
    } = props;

    const { getStyles } = useDataTableContext();

    return (
      <TableTh
        ref={ref}
        {...getStyles('th', { className, style, classNames, styles, props })}
        colSpan={header.colSpan}
        {...others}
      >
        {header.isPlaceholder
          ? null
          : flexRender(
            header.column.columnDef.header,
            header.getContext()
          )}
      </TableTh>
    );
  }
);

DataTableHeaderCell.displayName = '@mantine/data-table/DataTableHeaderCell';
