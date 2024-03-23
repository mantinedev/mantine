import React from 'react';
import { HeaderGroup } from '@tanstack/react-table';
import { factory, Factory, TableTr, TableTrProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';
import { DataTableFooterCell } from '../DataTableFooterCell';

export type DataTableFooterRowProps = TableTrProps & {
  group: HeaderGroup<unknown>;
};

export type DataTableFooterRowFactory = Factory<{
  props: DataTableFooterRowProps;
  ref: HTMLTableRowElement;
  stylesNames: 'tr';
}>;

export const DataTableFooterRow = factory<DataTableFooterRowFactory>((_props, ref) => {
  const props = useProps('DataTableFooterRow', {}, _props);

  const { className, style, classNames, styles, group, ...others } = props;

  const { getStyles } = useDataTableContext();

  return (
    <TableTr
      ref={ref}
      {...getStyles('tr', { className, style, classNames, styles, props })}
      {...others}
    >
      {group.headers.map((header) => (
        <DataTableFooterCell key={header.id} header={header} />
      ))}
    </TableTr>
  );
});

DataTableFooterRow.displayName = '@mantine/data-table/DataTableFooterRow';
