import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Checkbox } from '../Checkbox';
import { Group } from '../Group';
import { Loader } from '../Loader';
import { NativeSelect } from '../NativeSelect';
import { Pagination } from '../Pagination';
import { Table, TableProps } from '../Table';
import { Text } from '../Text';
import classes from './DataTable.module.css';
import {
  DefaultSortAscIcon,
  DefaultSortDescIcon,
  DefaultSortUnsortedIcon,
} from './DataTableSortIcons';

export type DataTableStylesNames =
  | 'root'
  | 'table'
  | 'thead'
  | 'tbody'
  | 'tr'
  | 'th'
  | 'td'
  | 'sortIcon'
  | 'loadingOverlay'
  | 'emptyState'
  | 'footer'
  | 'pagination'
  | 'recordsInfo'
  | 'pageSizeSelect'
  | 'pageSizeSelectInput'
  | 'selectionCheckbox'
  | 'virtualScrollContainer';

export interface DataTableProps<TData>
  extends BoxProps,
    StylesApiProps<DataTableFactory<TData>>,
    ElementProps<'div'> {
  /** Column definitions */
  columns: ColumnDef<TData, any>[];

  /** Data to display */
  data: TData[];

  /** Table props passed to the underlying Table component */
  tableProps?: TableProps;

  /** If true, the table will be in a loading state */
  loading?: boolean;

  /** Custom loader to display when loading is true */
  loader?: React.ReactNode;

  /** Content to display when there is no data */
  emptyState?: React.ReactNode;

  /** If true, virtualization will be enabled */
  withVirtualization?: boolean;

  /** Height of the virtualized container */
  virtualHeight?: number | string;

  /** Estimated row height for virtualization */
  estimateRowHeight?: number;

  /** Sorting state for controlled sorting */
  sorting?: SortingState;

  /** Callback when sorting state changes */
  onSortingChange?: OnChangeFn<SortingState>;

  /** Pagination state for controlled pagination */
  pagination?: PaginationState;

  /** Callback when pagination state changes */
  onPaginationChange?: OnChangeFn<PaginationState>;

  /** Row selection state for controlled selection */
  rowSelection?: RowSelectionState;

  /** Callback when row selection state changes */
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;

  /** If true, row selection is enabled */
  withRowSelection?: boolean;

  /** If true, a checkbox will be added to the header to select all rows */
  withSelectAll?: boolean;

  /** Total number of items for manual pagination */
  totalRecords?: number;

  /** If true, manual pagination is enabled */
  manualPagination?: boolean;

  /** If true, manual sorting is enabled */
  manualSorting?: boolean;

  /** Custom sort ascending icon */
  sortAscIcon?: React.ReactNode;

  /** Custom sort descending icon */
  sortDescIcon?: React.ReactNode;

  /** Custom sort unsorted icon */
  sortUnsortedIcon?: React.ReactNode;

  /** Callback fired when a row is clicked */
  onRowClick?: (row: Row<TData>, event: React.MouseEvent<HTMLTableRowElement>) => void;

  /** Callback fired when a row is double-clicked */
  onRowDoubleClick?: (row: Row<TData>, event: React.MouseEvent<HTMLTableRowElement>) => void;

  /** If set, rows will have hover highlight, key of `theme.colors` or any valid CSS color */
  highlightOnHover?: boolean;

  /** If set, every odd/even row background changes, similar to Mantine Table @default false */
  striped?: boolean | 'odd' | 'even';

  /** Column visibility state for controlled column visibility */
  columnVisibility?: VisibilityState;

  /** Callback when column visibility changes */
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;

  /** Page size options for the page size selector @default [10, 25, 50] */
  pageSizeOptions?: number[];

  /** If true, shows page size selector in the footer @default false */
  withPageSizeSelector?: boolean;

  /** Tooltip or label for the page size selector @default "Rows per page:" */
  pageSizeLabel?: React.ReactNode;

  /** If true, shows "Showing X-Y of Z records" text in the footer @default false */
  withRecordsInfo?: boolean;

  /** Custom records info text formatter */
  recordsInfoText?: (params: { from: number; to: number; total: number }) => React.ReactNode;
}

export type DataTableFactory<TData> = Factory<{
  props: DataTableProps<TData>;
  ref: HTMLDivElement;
  stylesNames: DataTableStylesNames;
  vars: DataTableCssVariables;
}>;

export type DataTableCssVariables = {
  root: '--datatable-height' | '--datatable-row-height';
};

const defaultProps = {
  estimateRowHeight: 40,
  virtualHeight: 400,
  pageSizeOptions: [10, 25, 50],
  pageSizeLabel: 'Rows per page:',
} satisfies Partial<DataTableProps<any>>;

const varsResolver = createVarsResolver<DataTableFactory<any>>(
  (_, { virtualHeight, estimateRowHeight }) => ({
    root: {
      '--datatable-height': typeof virtualHeight === 'number' ? rem(virtualHeight) : virtualHeight,
      '--datatable-row-height': rem(estimateRowHeight),
    },
  })
);

export const DataTable = factory<DataTableFactory<any>>((_props, ref) => {
  const props = useProps('DataTable', defaultProps as any, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    columns,
    data,
    tableProps,
    loading,
    loader,
    emptyState,
    withVirtualization,
    virtualHeight,
    estimateRowHeight,
    sorting: controlledSorting,
    onSortingChange,
    pagination: controlledPagination,
    onPaginationChange,
    rowSelection: controlledRowSelection,
    onRowSelectionChange,
    withRowSelection,
    withSelectAll,
    totalRecords,
    manualPagination,
    manualSorting,
    sortAscIcon,
    sortDescIcon,
    sortUnsortedIcon,
    onRowClick,
    onRowDoubleClick,
    highlightOnHover,
    striped,
    columnVisibility: controlledColumnVisibility,
    onColumnVisibilityChange,
    pageSizeOptions,
    withPageSizeSelector,
    pageSizeLabel,
    withRecordsInfo,
    recordsInfoText,
    mod,
    ...others
  } = props;

  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalPagination, setInternalPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [internalRowSelection, setInternalRowSelection] = useState<RowSelectionState>({});
  const [internalColumnVisibility, setInternalColumnVisibility] = useState<VisibilityState>({});

  const sorting = controlledSorting ?? internalSorting;
  const pagination = controlledPagination ?? internalPagination;
  const rowSelection = controlledRowSelection ?? internalRowSelection;
  const columnVisibility = controlledColumnVisibility ?? internalColumnVisibility;

  const finalColumns = useMemo(() => {
    if (!withRowSelection) {
      return columns;
    }

    const selectionColumn: ColumnDef<any> = {
      id: 'selection',
      header: ({ table }) =>
        withSelectAll ? (
          <Checkbox
            className={classes.selectionCheckbox}
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={table.getIsSomePageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        ) : null,
      cell: ({ row }) => (
        <Checkbox
          className={classes.selectionCheckbox}
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      size: 40,
      enableSorting: false,
      enableHiding: false,
    };

    return [selectionColumn, ...columns];
  }, [columns, withRowSelection, withSelectAll]);

  // When virtualization is enabled, disable client-side pagination so all rows
  // are available for the virtualizer. Pagination + virtualization are mutually
  // exclusive - virtualization replaces pagination as the performance strategy.
  const usePagination = !withVirtualization && !manualPagination;

  const table = useReactTable({
    data,
    columns: finalColumns,
    state: {
      sorting,
      ...(withVirtualization ? {} : { pagination }),
      rowSelection,
      columnVisibility,
    },
    onSortingChange: onSortingChange ?? setInternalSorting,
    onPaginationChange: onPaginationChange ?? setInternalPagination,
    onRowSelectionChange: onRowSelectionChange ?? setInternalRowSelection,
    onColumnVisibilityChange: onColumnVisibilityChange ?? setInternalColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: manualSorting ? undefined : getSortedRowModel(),
    getPaginationRowModel: usePagination ? getPaginationRowModel() : undefined,
    manualPagination: manualPagination || withVirtualization,
    manualSorting,
    pageCount: totalRecords ? Math.ceil(totalRecords / pagination.pageSize) : undefined,
  });

  const { rows } = table.getRowModel();

  const parentRef = React.useRef<HTMLDivElement>(null);

  // Virtualizer is always called (React hooks must not be conditional) but
  // operates on 0 items when virtualization is disabled, making it a no-op.
  const virtualizer = useVirtualizer({
    count: withVirtualization ? rows.length : 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateRowHeight!,
    overscan: 5,
  });

  const getStyles = useStyles<DataTableFactory<any>>({
    name: 'DataTable',
    props,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const getSortIcon = (sorted: false | 'asc' | 'desc') => {
    if (sorted === 'asc') {
      return sortAscIcon ?? <DefaultSortAscIcon />;
    }
    if (sorted === 'desc') {
      return sortDescIcon ?? <DefaultSortDescIcon />;
    }
    return sortUnsortedIcon ?? <DefaultSortUnsortedIcon />;
  };

  const getColumnWidth = (size: number, columnDef: ColumnDef<any, any>) =>
    columnDef.size !== undefined ? size : undefined;

  const renderRow = (row: Row<any>) => (
    <Table.Tr
      key={row.id}
      {...getStyles('tr')}
      onClick={onRowClick ? (e) => onRowClick(row, e) : undefined}
      onDoubleClick={onRowDoubleClick ? (e) => onRowDoubleClick(row, e) : undefined}
      mod={{ clickable: !!(onRowClick || onRowDoubleClick) }}
    >
      {row.getVisibleCells().map((cell) => {
        const width = getColumnWidth(cell.column.getSize(), cell.column.columnDef);
        return (
          <Table.Td key={cell.id} {...getStyles('td', { style: { width } })}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Table.Td>
        );
      })}
    </Table.Tr>
  );

  // Merge Table-level props: highlightOnHover, striped
  const mergedTableProps: TableProps = {
    ...tableProps,
    highlightOnHover: highlightOnHover ?? tableProps?.highlightOnHover,
    striped: striped ?? tableProps?.striped,
  };

  const renderHeader = () => (
    <Table.Thead {...getStyles('thead')}>
      {table.getHeaderGroups().map((headerGroup) => (
        <Table.Tr key={headerGroup.id} {...getStyles('tr')}>
          {headerGroup.headers.map((header) => {
            const isSortable = header.column.getCanSort();
            const sorted = header.column.getIsSorted();
            const width = getColumnWidth(header.getSize(), header.column.columnDef);

            return (
              <Table.Th
                key={header.id}
                {...getStyles('th', { style: { width } })}
                onClick={isSortable ? header.column.getToggleSortingHandler() : undefined}
                mod={{ sortable: isSortable }}
                aria-sort={
                  isSortable
                    ? sorted === 'asc'
                      ? 'ascending'
                      : sorted === 'desc'
                        ? 'descending'
                        : 'none'
                    : undefined
                }
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
                {isSortable && (
                  <Box
                    component="span"
                    {...getStyles('sortIcon')}
                    mod={{ sorted: !!sorted, direction: sorted || undefined }}
                  >
                    {getSortIcon(sorted)}
                  </Box>
                )}
              </Table.Th>
            );
          })}
        </Table.Tr>
      ))}
    </Table.Thead>
  );

  const renderBody = () => {
    if (withVirtualization) {
      const virtualRows = virtualizer.getVirtualItems();
      const totalSize = virtualizer.getTotalSize();
      const paddingTop = virtualRows.length > 0 ? virtualRows[0]?.start || 0 : 0;
      const paddingBottom =
        virtualRows.length > 0 ? totalSize - (virtualRows[virtualRows.length - 1]?.end || 0) : 0;

      return (
        <Table.Tbody {...getStyles('tbody')}>
          {paddingTop > 0 && (
            <tr style={{ height: paddingTop, border: 0, padding: 0 }}>
              <td style={{ padding: 0, border: 0 }} />
            </tr>
          )}
          {virtualRows.map((virtualRow) => renderRow(rows[virtualRow.index]))}
          {paddingBottom > 0 && (
            <tr style={{ height: paddingBottom, border: 0, padding: 0 }}>
              <td style={{ padding: 0, border: 0 }} />
            </tr>
          )}
        </Table.Tbody>
      );
    }

    return <Table.Tbody {...getStyles('tbody')}>{rows.map(renderRow)}</Table.Tbody>;
  };

  const pageCount =
    manualPagination && totalRecords
      ? Math.ceil(totalRecords / pagination.pageSize)
      : table.getPageCount();

  // Never show pagination when virtualization is enabled
  const showPagination = !withVirtualization && data.length > 0 && pageCount > 1;

  // Records info calculation
  const totalRows = totalRecords ?? data.length;
  const from = withVirtualization ? 1 : pagination.pageIndex * pagination.pageSize + 1;
  const to = withVirtualization
    ? totalRows
    : Math.min((pagination.pageIndex + 1) * pagination.pageSize, totalRows);

  const defaultRecordsInfo = `Showing ${from}–${to} of ${totalRows} records`;

  const showFooter =
    showPagination ||
    (withRecordsInfo && data.length > 0) ||
    (withPageSizeSelector && !withVirtualization);

  return (
    <Box
      ref={ref}
      {...getStyles('root')}
      mod={[{ virtualized: withVirtualization }, mod]}
      {...others}
    >
      {loading && <Box {...getStyles('loadingOverlay')}>{loader || <Loader size="sm" />}</Box>}

      <Box ref={parentRef} {...getStyles('virtualScrollContainer')}>
        <Table {...mergedTableProps} {...getStyles('table')}>
          {renderHeader()}
          {data.length > 0 ? (
            renderBody()
          ) : (
            <Table.Tbody>
              <Table.Tr>
                <Table.Td colSpan={finalColumns.length}>
                  <Box {...getStyles('emptyState')}>{emptyState || 'No data found'}</Box>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          )}
        </Table>
      </Box>

      {showFooter && (
        <Group {...getStyles('footer')} justify="space-between">
          <Group gap="sm">
            {withRecordsInfo && data.length > 0 && (
              <Text {...getStyles('recordsInfo')} size="sm" c="dimmed">
                {recordsInfoText
                  ? recordsInfoText({ from, to, total: totalRows })
                  : defaultRecordsInfo}
              </Text>
            )}
          </Group>

          <Group gap="sm">
            {withPageSizeSelector && !withVirtualization && (
              <Group gap="xs" {...getStyles('pageSizeSelect')}>
                <Text size="sm" c="dimmed">
                  {pageSizeLabel}
                </Text>
                <NativeSelect
                  size="xs"
                  value={pagination.pageSize.toString()}
                  onChange={(event) => {
                    const newSize = Number(event.currentTarget.value);
                    table.setPageSize(newSize);
                    table.setPageIndex(0);
                  }}
                  data={pageSizeOptions!.map((size: number) => ({
                    value: size.toString(),
                    label: size.toString(),
                  }))}
                  {...getStyles('pageSizeSelectInput')}
                />
              </Group>
            )}

            {showPagination && (
              <Pagination
                {...getStyles('pagination')}
                total={pageCount}
                value={pagination.pageIndex + 1}
                onChange={(page) => table.setPageIndex(page - 1)}
                size="sm"
              />
            )}
          </Group>
        </Group>
      )}
    </Box>
  );
});

DataTable.displayName = '@mantine/core/DataTable';
DataTable.classes = classes;
