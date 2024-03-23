import React from 'react';
import { factory, Factory, TableTfoot, TableTfootProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';
import { DataTableFooterRow } from '../DataTableFooterRow';

export type DataTableFooterProps = TableTfootProps;

export type DataTableFooterFactory = Factory<{
  props: DataTableFooterProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'tfoot';
}>;

export const DataTableFooter = factory<DataTableFooterFactory>((_props, ref) => {
  const props = useProps('DataTableFooter', {}, _props);

  const { className, style, classNames, styles, ...others } = props;

  const { table, getStyles } = useDataTableContext();

  return (
    <TableTfoot
      ref={ref}
      {...getStyles('tfoot', { className, style, classNames, styles, props })}
      {...others}
    >
      {table.getFooterGroups().map((group) => (
        <DataTableFooterRow key={group.id} group={group} />
      ))}
    </TableTfoot>
  );
});

DataTableFooter.displayName = '@mantine/data-table/DataTableFooter';
