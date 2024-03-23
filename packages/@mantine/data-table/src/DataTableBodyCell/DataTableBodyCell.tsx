import React from 'react';
import { Cell, flexRender } from '@tanstack/react-table';
import { factory, Factory, TableTd, TableTdProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';

export type DataTableBodyCellProps = TableTdProps & {
  cell: Cell<unknown, unknown>;
};

export type DataTableBodyCellFactory = Factory<{
  props: DataTableBodyCellProps;
  ref: HTMLTableCellElement;
  stylesNames: 'td';
}>;

export const DataTableBodyCell = factory<DataTableBodyCellFactory>((_props, ref) => {
  const props = useProps('DataTableBodyCell', {}, _props);

  const { className, style, classNames, styles, cell, ...others } = props;

  const { getStyles } = useDataTableContext();

  return (
    <TableTd
      ref={ref}
      {...getStyles('td', { className, style, classNames, styles, props })}
      {...others}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableTd>
  );
});

DataTableBodyCell.displayName = '@mantine/data-table/DataTableBodyCell';
