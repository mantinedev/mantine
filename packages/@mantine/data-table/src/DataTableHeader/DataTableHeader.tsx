import React from 'react';
import { factory, Factory, TableThead, TableTheadProps, useProps } from '@mantine/core';
import { useDataTableContext } from '../DataTable.context';
import { DataTableHeaderRow } from '../DataTableHeaderRow';

export type DataTableHeaderProps = TableTheadProps;

export type DataTableHeaderFactory = Factory<{
  props: DataTableHeaderProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'thead';
}>;

export const DataTableHeader = factory<DataTableHeaderFactory>(
  (_props, ref) => {
    const props = useProps('DataTableHeader', {}, _props);

    const {
      className,
      style,
      classNames,
      styles,
      ...others
    } = props;

    const { table, getStyles } = useDataTableContext();

    return (
      <TableThead
        ref={ref}
        {...getStyles('thead', { className, style, classNames, styles, props })}
        {...others}
      >
        {table.getHeaderGroups().map((group) => (
          <DataTableHeaderRow key={group.id} group={group} />
        ))}
      </TableThead>
    );
  }
);

DataTableHeader.displayName = '@mantine/data-table/DataTableHeader';
