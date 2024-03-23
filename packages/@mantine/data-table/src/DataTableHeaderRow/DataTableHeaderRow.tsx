import React from 'react';
import { HeaderGroup } from '@tanstack/react-table';
import { factory, Factory, TableTr, TableTrProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';
import { DataTableHeaderCell } from '../DataTableHeaderCell';

export type DataTableHeaderRowProps = TableTrProps & {
  group: HeaderGroup<unknown>;
};

export type DataTableHeaderRowFactory = Factory<{
  props: DataTableHeaderRowProps;
  ref: HTMLTableRowElement;
  stylesNames: 'tr';
}>;

export const DataTableHeaderRow = factory<DataTableHeaderRowFactory>((_props, ref) => {
  const props = useProps('DataTableHeaderRow', {}, _props);

  const { className, style, classNames, styles, group, ...others } = props;

  const { getStyles } = useDataTableContext();

  return (
    <TableTr
      ref={ref}
      {...getStyles('tr', { className, style, classNames, styles, props })}
      {...others}
    >
      {group.headers.map((header) => (
        <DataTableHeaderCell key={header.id} header={header} />
      ))}
    </TableTr>
  );
});

DataTableHeaderRow.displayName = '@mantine/data-table/DataTableHeaderRow';
