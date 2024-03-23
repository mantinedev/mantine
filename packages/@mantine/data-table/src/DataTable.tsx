import React, { useRef } from 'react';
import { flexRender, RowData, Table as TableDefinition } from '@tanstack/react-table';
import {
  factory,
  Factory,
  MantineComponentStaticProperties,
  Table,
  TableCssVariables,
  TableProps,
  TableStylesNames,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableThead,
  TableTr,
  useProps,
  useStyles,
} from '@mantine/core';
import { mergeRefs, useIntersection } from '@mantine/hooks';
import { DataTableProvider } from './DataTable.context';
import classes from './DataTable.module.css';

export type DataTableStylesNames = TableStylesNames;

export type DataTableCssVariables = TableCssVariables;

export type DataTableProps<TData extends RowData = RowData> = Omit<TableProps, 'data'> & {
  table: TableDefinition<TData>;
};

export type DataTableFactory = Factory<{
  props: DataTableProps;
  ref: HTMLTableElement;
  stylesNames: DataTableStylesNames;
  vars: DataTableCssVariables;
}>;

const defaultProps: Partial<DataTableProps> = {};

type DataTableComponent = (<TData extends RowData>(
  props: DataTableProps<TData> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => React.ReactElement) & {
  displayName?: string;
} & MantineComponentStaticProperties<DataTableFactory>;

export const DataTable: DataTableComponent = factory<DataTableFactory>(
  (_props, ref) => {
    const props = useProps('DataTable', defaultProps, _props);

    const {
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      table,
      ...others
    } = props;

    const getStyles = useStyles<DataTableFactory>({
      name: 'DataTable',
      props,
      classes,
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: 'table',
      vars,
    });

    const tableRef = useRef(null);

    const theadIntersection = useIntersection({
      root: tableRef.current,
      rootMargin: '-1px 0px 0px 0px',
      threshold: 1,
    });

    return (
      <DataTableProvider
        value={{
          table,
          getStyles,
        }}
      >
        <Table
          ref={mergeRefs(ref, tableRef)}
          {...getStyles('table')}
          {...others}
        >
          <TableThead
            ref={theadIntersection.ref}
            {...getStyles('thead')}
            mod={{
              stuck: props.stickyHeader && theadIntersection.entry?.isIntersecting,
            }}
          >
            {table.getHeaderGroups().map((group) => (
              <TableTr
                key={group.id}
                {...getStyles('tr')}
              >
                {group.headers.map((header) => (
                  <TableTh
                    key={header.id}
                    {...getStyles('th')}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableTh>
                ))}
              </TableTr>
            ))}
          </TableThead>
          <TableTbody
            {...getStyles('tbody')}
          >
            {table.getRowModel().rows.map((row) => (
              <TableTr
                key={row.id}
                {...getStyles('tr')}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableTd
                    key={cell.id}
                    {...getStyles('td')}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableTd>
                ))}
              </TableTr>
            ))}
          </TableTbody>
          <TableTfoot
            {...getStyles('tfoot')}
          >
            {table.getFooterGroups().map((group) => (
              <TableTr
                key={group.id}
                {...getStyles('tr')}
              >
                {group.headers.map((header) => (
                  <TableTh
                    key={header.id}
                    {...getStyles('th')}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                  </TableTh>
                ))}
              </TableTr>
            ))}
          </TableTfoot>
        </Table>
      </DataTableProvider>
    );
  }
) as any;

DataTable.displayName = '@mantine/data-table/DataTable';
DataTable.classes = classes;
