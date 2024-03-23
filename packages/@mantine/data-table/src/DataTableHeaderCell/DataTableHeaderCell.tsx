import React from 'react';
import { flexRender, Header } from '@tanstack/react-table';
import { factory, Factory, TableTh, TableThProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';
import {
  DataTableIconSortAsc,
  DataTableIconSortDesc,
  DataTableIconSortSelector,
} from '../DataTable.icons';

export type DataTableHeaderCellStylesNames = 'th' | 'columnHeader' | 'columnTitle';

export type DataTableHeaderCellProps = TableThProps & {
  header: Header<unknown, unknown>;
};

export type DataTableHeaderCellFactory = Factory<{
  props: DataTableHeaderCellProps;
  ref: HTMLTableCellElement;
  stylesNames: DataTableHeaderCellStylesNames;
}>;

const sorterRender = (header: Header<unknown, unknown>): React.ReactNode | React.ReactElement => {
  switch (header.column.getIsSorted()) {
    case 'asc':
      return <DataTableIconSortAsc />;
    case 'desc':
      return <DataTableIconSortDesc />;
    default:
      return header.column.getCanSort() ? <DataTableIconSortSelector /> : null;
  }
};

export const DataTableHeaderCell = factory<DataTableHeaderCellFactory>((_props, ref) => {
  const props = useProps('DataTableHeaderCell', {}, _props);

  const { className, style, classNames, styles, mod, header, ...others } = props;

  const { table, getStyles } = useDataTableContext();
  const stylesApi = { classNames, styles };

  const canSort = table.options.enableSorting && header.column.getCanSort();

  return (
    <TableTh
      ref={ref}
      {...getStyles('th', { className, style, ...stylesApi, props })}
      colSpan={header.colSpan > 1 ? header.colSpan : undefined}
      mod={[
        {
          'has-sorter': canSort,
        },
        mod,
      ]}
      onClick={header.column.getToggleSortingHandler()}
      {...others}
    >
      {header.isPlaceholder ? null : (
        <div {...getStyles('columnHeader', stylesApi)}>
          <div {...getStyles('columnTitle', stylesApi)}>
            {flexRender(header.column.columnDef.header, header.getContext())}
          </div>
          {canSort && sorterRender(header)}
        </div>
      )}
    </TableTh>
  );
});

DataTableHeaderCell.displayName = '@mantine/data-table/DataTableHeaderCell';
