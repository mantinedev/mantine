import React, { useEffect, useRef } from 'react';
import { RowData, Table as TableDefinition } from '@tanstack/react-table';
import {
  createVarsResolver,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  MantineComponentStaticProperties,
  StylesApiProps,
  Table,
  TableProps,
  TableStylesNames,
  useProps,
  useStyles,
} from '@mantine/core';
import { mergeRefs, useIntersection } from '@mantine/hooks';
import { DataTableProvider } from './DataTable.context';
import { DataTableBody } from './DataTableBody';
import { DataTableFooter } from './DataTableFooter';
import { DataTableHeader } from './DataTableHeader';
import classes from './DataTable.module.css';

export type DataTableStylesNames = TableStylesNames | 'columnHeader' | 'columnTitle';

export type DataTableCssVariables = {
  table: '--table-highlight-on-select-color';
};

export type DataTableProps<TData extends RowData = RowData> = Omit<TableProps, 'data'> &
  StylesApiProps<DataTableFactory> & {
    table: TableDefinition<TData>;

    /** Determines whether table rows background should change to `highlightOnSelectColor` when selected, `true` by default */
    highlightOnSelect?: boolean;

    /** Background color of table rows when selected, key of `theme.colors` or any valid CSS color, `primary-light` by default */
    highlightOnSelectColor?: MantineColor;

    /** Called when reaching bottom */
    onScrollToBottom?: () => void;
  };

export type DataTableFactory = Factory<{
  props: DataTableProps;
  ref: HTMLTableElement;
  stylesNames: DataTableStylesNames;
  vars: DataTableCssVariables;
}>;

const defaultProps: Partial<DataTableProps> = {
  highlightOnSelect: true,
};

const varsResolver = createVarsResolver<DataTableFactory>(
  (theme, { highlightOnSelect, highlightOnSelectColor }) => ({
    table: {
      '--table-highlight-on-select-color':
        highlightOnSelect && highlightOnSelectColor
          ? getThemeColor(highlightOnSelectColor, theme)
          : undefined,
    },
  })
);

type DataTableComponent = (<TData extends RowData>(
  props: DataTableProps<TData> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => React.ReactElement) & {
  displayName?: string;
} & MantineComponentStaticProperties<DataTableFactory>;

export const DataTable: DataTableComponent = factory<DataTableFactory>((_props, ref) => {
  const props = useProps('DataTable', defaultProps, _props);

  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    table,
    highlightOnSelect,
    highlightOnSelectColor,
    onScrollToBottom,
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
    varsResolver,
  });

  const tableRef = useRef(null);

  const headerIntersection = useIntersection({
    root: tableRef.current,
    rootMargin: '-1px 0px 0px 0px',
    threshold: 1,
  });

  const footerIntersection = useIntersection({
    root: null,
  });

  useEffect(() => {
    footerIntersection.entry?.isIntersecting && onScrollToBottom?.();
  }, [footerIntersection.entry?.isIntersecting]);

  return (
    <DataTableProvider
      value={{
        table,
        getStyles,
        highlightOnSelect,
      }}
    >
      <Table ref={mergeRefs(ref, tableRef)} {...getStyles('table')} {...others}>
        <DataTableHeader
          ref={headerIntersection.ref}
          mod={{
            stuck: props.stickyHeader && headerIntersection.entry?.isIntersecting,
          }}
        />
        <DataTableBody />
        <DataTableFooter ref={footerIntersection.ref} />
      </Table>
    </DataTableProvider>
  );
}) as any;

DataTable.displayName = '@mantine/data-table/DataTable';
DataTable.classes = classes;
