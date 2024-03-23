import React from 'react';
import { Row } from '@tanstack/react-table';
import { factory, Factory, TableTr, TableTrProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';
import { DataTableBodyCell } from '../DataTableBodyCell';

export type DataTableBodyRowProps = TableTrProps & {
  row: Row<unknown>;
};

export type DataTableBodyRowFactory = Factory<{
  props: DataTableBodyRowProps;
  ref: HTMLTableRowElement;
  stylesNames: 'tbody';
}>;

export const DataTableBodyRow = factory<DataTableBodyRowFactory>(
  (_props, ref) => {
    const props = useProps('DataTableBodyRow', {}, _props);

    const {
      className,
      style,
      classNames,
      styles,
      row,
      ...others
    } = props;

    const { getStyles } = useDataTableContext();

    return (
      <TableTr
        ref={ref}
        {...getStyles('tr', { className, style, classNames, styles, props })}
        {...others}
      >
        {row.getVisibleCells().map((cell) => (
          <DataTableBodyCell key={cell.id} cell={cell} />
        ))}
      </TableTr>
    );
  }
);

DataTableBodyRow.displayName = '@mantine/data-table/DataTableBodyRow';
