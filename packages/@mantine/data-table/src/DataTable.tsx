import React, { useRef } from 'react';
import { RowData, Table as TableDefinition } from '@tanstack/react-table';
import {
  factory,
  Factory,
  MantineComponentStaticProperties,
  Table,
  TableCssVariables,
  TableProps,
  TableStylesNames,
  useProps,
  useStyles,
} from '@mantine/core';
import { mergeRefs, useIntersection } from '@mantine/hooks';
import { DataTableProvider } from './DataTable.context';
import { DataTableHeader } from './DataTableHeader';
import classes from './DataTable.module.css';
import { DataTableBody } from './DataTableBody';
import { DataTableFooter } from './DataTableFooter';

export type DataTableStylesNames = TableStylesNames
  | 'columnHeader'
  | 'columnTitle';

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

    const headerIntersection = useIntersection({
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
          <DataTableHeader
            ref={headerIntersection.ref}
            mod={{
              stuck: props.stickyHeader && headerIntersection.entry?.isIntersecting,
            }}
          />
          <DataTableBody />
          <DataTableFooter />
        </Table>
      </DataTableProvider>
    );
  }
) as any;

DataTable.displayName = '@mantine/data-table/DataTable';
DataTable.classes = classes;
