import React from 'react';
import { flexRender, Header } from '@tanstack/react-table';
import { factory, Factory, TableTh, TableThProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';

export type DataTableFooterCellProps = TableThProps & {
  header: Header<unknown, unknown>;
};

export type DataTableFooterCellFactory = Factory<{
  props: DataTableFooterCellProps;
  ref: HTMLTableCellElement;
  stylesNames: 'th';
}>;

export const DataTableFooterCell = factory<DataTableFooterCellFactory>((_props, ref) => {
  const props = useProps('DataTableFooterCell', {}, _props);

  const { className, style, classNames, styles, header, ...others } = props;

  const { getStyles } = useDataTableContext();

  return (
    <TableTh
      ref={ref}
      {...getStyles('th', { className, style, classNames, styles, props })}
      colSpan={header.colSpan > 1 ? header.colSpan : undefined}
      {...others}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.footer, header.getContext())}
    </TableTh>
  );
});

DataTableFooterCell.displayName = '@mantine/data-table/DataTableFooterCell';
