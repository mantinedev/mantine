import { factory, Factory, TableTbody, TableTbodyProps, useProps } from '@mantine/core';
import React from 'react';
import { useDataTableContext } from '../DataTable.context';
import { DataTableBodyRow } from '../DataTableBodyRow';

export type DataTableBodyProps = TableTbodyProps;

export type DataTableBodyFactory = Factory<{
  props: DataTableBodyProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'tbody';
}>;

export const DataTableBody = factory<DataTableBodyFactory>(
  (_props, ref) => {
    const props = useProps('DataTableBody', {}, _props);

    const {
      className,
      style,
      classNames,
      styles,
      ...others
    } = props;

    const { table, getStyles } = useDataTableContext();

    return (
      <TableTbody
        ref={ref}
        {...getStyles('tbody', { className, style, classNames, styles, props })}
        {...others}
      >
        {table.getRowModel().rows.map((row) => (
          <DataTableBodyRow key={row.id} row={row} />
        ))}
      </TableTbody>
    );
  }
);

DataTableBody.displayName = '@mantine/data-table/DataTableBody';
