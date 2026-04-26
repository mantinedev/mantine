import React, { useCallback, useRef, useState } from 'react';
import {
  Cell,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  ColumnSizingState,
  ExpandedState,
  GroupingState,
  OnChangeFn,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  TableOptions,
  VisibilityState,
} from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  getThemeColor,
  LoadingOverlay,
  MantineColor,
  MantineSpacing,
  rem,
  ScrollArea,
  ScrollAreaProps,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { DataGridProvider, type DataGridDensity } from './DataGrid.context';
import {
  DataGridBody,
  DataGridBodyFactory,
  DataGridVirtualBody,
  DataGridVirtualBodyFactory,
} from './DataGridBody';
import { DataGridFooter, DataGridFooterFactory } from './DataGridFooter';
import { DataGridHeader, DataGridHeaderFactory } from './DataGridHeader';
import { DataGridPagination, DataGridPaginationFactory } from './DataGridPagination';
import { DataGridStatusBar, DataGridStatusBarFactory } from './DataGridStatusBar';
import {
  DataGridColumnVisibilityToggle,
  DataGridColumnVisibilityToggleFactory,
  DataGridDensityToggle,
  DataGridDensityToggleFactory,
  DataGridGlobalFilter,
  DataGridGlobalFilterFactory,
  DataGridToolbar,
  DataGridToolbarFactory,
} from './DataGridToolbar';
import { DataGridColumnDef } from './DataGrid.types';
import { useDataGrid } from './hooks';
import { DEFAULT_LOCALIZATION, DataGridLocalization } from './localization';
import classes from './DataGrid.module.css';

export type DataGridStylesNames =
  | 'root'
  | 'table'
  | 'thead'
  | 'tbody'
  | 'tfoot'
  | 'tr'
  | 'th'
  | 'td'
  | 'headerCell'
  | 'sortIcon'
  | 'resizeHandle'
  | 'toolbar'
  | 'globalFilter'
  | 'columnVisibilityToggle'
  | 'densityToggle'
  | 'pagination'
  | 'loadingOverlay'
  | 'selectionCheckbox'
  | 'selectAllCheckbox'
  | 'expandIcon'
  | 'expandedRow'
  | 'rowNumber'
  | 'emptyState'
  | 'editCell'
  | 'groupHeader'
  | 'groupToggle'
  | 'aggregationCell'
  | 'statusBar'
  | 'statusBarInfo'
  | 'scrollContainer'
  | 'virtualScrollContainer'
  | 'virtualGrid'
  | 'virtualGridHeader'
  | 'virtualRow'
  | 'virtualCell';

export type DataGridCssVariables = {
  root:
    | '--dg-row-height'
    | '--dg-header-height'
    | '--dg-border-color'
    | '--dg-stripe-color'
    | '--dg-hover-color'
    | '--dg-selected-color'
    | '--dg-pinned-shadow'
    | '--dg-font-size'
    | '--dg-spacing';
};

export interface DataGridProps<TData = any>
  extends BoxProps, StylesApiProps<DataGridFactory>, ElementProps<'div', 'children'> {
  /** Data array to display in the grid */
  data: TData[];

  /** Column definitions */
  columns: DataGridColumnDef<TData>[];

  /** Function to derive stable row ID from data, required for selection/editing/expansion */
  getRowId?: (row: TData, index: number, parent?: Row<TData>) => string;

  /** Border color, key of `theme.colors` or any valid CSS color */
  borderColor?: MantineColor;

  /** Cell spacing, key of `theme.spacing` or any valid CSS value */
  spacing?: MantineSpacing;

  /** Row height in px */
  rowHeight?: number | string;

  /** Header row height in px */
  headerHeight?: number | string;

  /** Grid content */
  children?: React.ReactNode;

  /** Enable sorting, @default false */
  withSorting?: boolean;

  /** Custom icon displayed in sortable column headers when the column is sorted */
  sortedIcon?: React.ReactNode;

  /** Custom icon displayed in sortable column headers when the column is not sorted */
  unsortedIcon?: React.ReactNode;

  /** Controlled sorting state */
  sorting?: SortingState;

  /** Callback when sorting changes */
  onSortingChange?: OnChangeFn<SortingState>;

  /** When true, sorting is handled externally (server-side) */
  manualSorting?: boolean;

  /** Enable column filtering, @default false */
  withFiltering?: boolean;

  /** Controlled column filters state */
  columnFilters?: ColumnFiltersState;

  /** Callback when column filters change */
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;

  /** When true, filtering is handled externally (server-side) */
  manualFiltering?: boolean;

  /** Enable global filter, @default false */
  withGlobalFilter?: boolean;

  /** Controlled global filter value */
  globalFilter?: any;

  /** Callback when global filter changes */
  onGlobalFilterChange?: OnChangeFn<any>;

  /** Enable pagination, @default false */
  withPagination?: boolean;

  /** Controlled pagination state */
  pagination?: PaginationState;

  /** Callback when pagination changes */
  onPaginationChange?: OnChangeFn<PaginationState>;

  /** When true, pagination is handled externally (server-side) */
  manualPagination?: boolean;

  /** Total row count for server-side pagination */
  rowCount?: number;

  /** Default page size, @default 10 */
  pageSize?: number;

  /** Options for the page size selector */
  pageSizeOptions?: number[];

  /** Show loading overlay, @default false */
  loading?: boolean;

  /** Enable column resizing, @default false */
  withColumnResizing?: boolean;

  /** Column resize mode, @default 'onEnd' */
  columnResizeMode?: ColumnResizeMode;

  /** Controlled column sizing state */
  columnSizing?: ColumnSizingState;

  /** Callback when column sizing changes */
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>;

  /** Enable column pinning, @default false */
  withColumnPinning?: boolean;

  /** Controlled column pinning state */
  columnPinning?: ColumnPinningState;

  /** Callback when column pinning changes */
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;

  /** Enable column visibility toggle, @default false */
  withColumnVisibility?: boolean;

  /** Controlled column visibility state */
  columnVisibility?: VisibilityState;

  /** Callback when column visibility changes */
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;

  /** Enable column reorder via drag and drop, @default false */
  withColumnReorder?: boolean;

  /** Controlled column order state */
  columnOrder?: ColumnOrderState;

  /** Callback when column order changes */
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;

  /** Enable row selection with checkboxes, @default false */
  withRowSelection?: boolean;

  /** Controlled row selection state */
  rowSelection?: RowSelectionState;

  /** Callback when row selection changes */
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;

  /** Enable row expansion, @default false */
  withRowExpansion?: boolean;

  /** Render function for expanded row content */
  renderExpandedRow?: (props: { row: Row<any> }) => React.ReactNode;

  /** When true, clicking a row toggles its expansion, @default false */
  expandOnRowClick?: boolean;

  /** Controlled expanded state */
  expanded?: ExpandedState;

  /** Callback when expanded state changes */
  onExpandedChange?: OnChangeFn<ExpandedState>;

  /** Add striped rows styling, @default false */
  striped?: boolean;

  /** Add hover highlight on rows, @default false */
  highlightOnHover?: boolean;

  /** Show row numbers column, @default false */
  withRowNumbers?: boolean;

  /** Callback when a row is clicked */
  onRowClick?: (row: Row<any>, event: React.MouseEvent) => void;

  /** Callback when a row is double-clicked */
  onRowDoubleClick?: (row: Row<any>, event: React.MouseEvent) => void;

  /** Callback when a cell is clicked */
  onCellClick?: (cell: Cell<any, unknown>, event: React.MouseEvent) => void;

  /** Content to display when data is empty */
  emptyState?: React.ReactNode;

  /** Enable row virtualization for large datasets, @default false */
  withVirtualization?: boolean;

  /** Fixed height for the scrollable container, required when `withVirtualization` is true */
  height?: number | string;

  /** Configuration for virtual scroll behavior */
  virtualScrollConfig?: {
    overscan?: number;
    estimateSize?: (index: number) => number;
  };

  /** Callback fired when scroll reaches the bottom of the grid */
  onScrollToBottom?: () => void;

  /** Enable row grouping, @default false */
  withGrouping?: boolean;

  /** Controlled grouping state */
  grouping?: GroupingState;

  /** Callback when grouping changes */
  onGroupingChange?: OnChangeFn<GroupingState>;

  /** Enable inline cell/row editing, @default false */
  withEditing?: boolean;

  /** Editing mode, @default 'cell' */
  editingMode?: 'cell' | 'row';

  /** Callback when a cell value is edited */
  onCellEdit?: (props: { row: Row<any>; columnId: string; value: unknown }) => void;

  /** Callback when a row is edited */
  onRowEdit?: (props: { row: Row<any>; values: Record<string, unknown> }) => void;

  /** Make the header sticky when scrolling, @default false */
  stickyHeader?: boolean;

  /** Grid density, @default 'default' */
  density?: DataGridDensity;

  /** Callback when density changes */
  onDensityChange?: (density: DataGridDensity) => void;

  /** Localization overrides */
  localization?: Partial<DataGridLocalization>;

  /** Use ScrollArea component for horizontal scrolling, @default true */
  withScrollArea?: boolean;

  /** Props passed to the ScrollArea component, applicable only when `withScrollArea` is true */
  scrollAreaProps?: ScrollAreaProps;

  /** Additional TanStack Table options, escape hatch for advanced features */
  tableOptions?: Partial<TableOptions<TData>>;
}

export type DataGridFactory = Factory<{
  props: DataGridProps;
  ref: HTMLDivElement;
  stylesNames: DataGridStylesNames;
  vars: DataGridCssVariables;
  staticComponents: {
    Header: typeof DataGridHeader;
    Body: typeof DataGridBody;
    VirtualBody: typeof DataGridVirtualBody;
    Footer: typeof DataGridFooter;
    Toolbar: typeof DataGridToolbar;
    GlobalFilter: typeof DataGridGlobalFilter;
    ColumnVisibilityToggle: typeof DataGridColumnVisibilityToggle;
    DensityToggle: typeof DataGridDensityToggle;
    Pagination: typeof DataGridPagination;
    StatusBar: typeof DataGridStatusBar;
  };
}>;

const defaultProps = {} satisfies Partial<DataGridProps>;

const varsResolver = createVarsResolver<DataGridFactory>(
  (theme, { borderColor, spacing, rowHeight, headerHeight }) => ({
    root: {
      '--dg-row-height': rowHeight ? rem(rowHeight) : undefined,
      '--dg-header-height': headerHeight ? rem(headerHeight) : undefined,
      '--dg-border-color': borderColor ? getThemeColor(borderColor, theme) : undefined,
      '--dg-stripe-color': undefined,
      '--dg-hover-color': undefined,
      '--dg-selected-color': undefined,
      '--dg-pinned-shadow': undefined,
      '--dg-font-size': undefined,
      '--dg-spacing': getSpacing(spacing),
    },
  })
);

export const DataGrid = factory<DataGridFactory>((_props) => {
  const props = useProps('DataGrid', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    columns,
    getRowId,
    borderColor,
    spacing,
    rowHeight,
    headerHeight,
    children,
    mod,
    attributes,
    withSorting,
    sortedIcon,
    unsortedIcon,
    sorting,
    onSortingChange,
    manualSorting,
    withFiltering,
    columnFilters,
    onColumnFiltersChange,
    manualFiltering,
    withGlobalFilter,
    globalFilter,
    onGlobalFilterChange,
    withPagination,
    pagination,
    onPaginationChange,
    manualPagination,
    rowCount,
    pageSize,
    pageSizeOptions,
    loading,
    withColumnResizing,
    columnResizeMode,
    columnSizing,
    onColumnSizingChange,
    withColumnPinning,
    columnPinning,
    onColumnPinningChange,
    withColumnVisibility,
    columnVisibility,
    onColumnVisibilityChange,
    withColumnReorder,
    columnOrder,
    onColumnOrderChange,
    withRowSelection,
    rowSelection,
    onRowSelectionChange,
    withRowExpansion,
    renderExpandedRow,
    expandOnRowClick,
    expanded,
    onExpandedChange,
    striped,
    highlightOnHover,
    withRowNumbers,
    onRowClick,
    onRowDoubleClick,
    onCellClick,
    emptyState,
    withVirtualization,
    height,
    virtualScrollConfig,
    onScrollToBottom,
    withGrouping,
    grouping,
    onGroupingChange,
    withEditing,
    editingMode,
    onCellEdit,
    onRowEdit,
    stickyHeader,
    density: densityProp,
    onDensityChange: onDensityChangeProp,
    localization: localizationProp,
    withScrollArea = true,
    scrollAreaProps,
    tableOptions,
    ...others
  } = props;

  const getStyles = useStyles<DataGridFactory>({
    name: 'DataGrid',
    props,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'root',
    vars,
    varsResolver,
  });

  const [densityState, setDensityState] = useState<DataGridDensity>(densityProp ?? 'default');
  const density = densityProp ?? densityState;
  const onDensityChange = onDensityChangeProp ?? setDensityState;
  const localization = { ...DEFAULT_LOCALIZATION, ...localizationProp };

  const table = useDataGrid({
    data,
    columns,
    getRowId,
    withSorting,
    sorting,
    onSortingChange,
    manualSorting,
    withFiltering,
    columnFilters,
    onColumnFiltersChange,
    manualFiltering,
    withGlobalFilter,
    globalFilter,
    onGlobalFilterChange,
    withPagination,
    pagination,
    onPaginationChange,
    manualPagination,
    rowCount,
    pageSize,
    withColumnResizing,
    columnResizeMode,
    columnSizing,
    onColumnSizingChange,
    withColumnPinning,
    columnPinning,
    onColumnPinningChange,
    withColumnVisibility,
    columnVisibility,
    onColumnVisibilityChange,
    withColumnReorder,
    columnOrder,
    onColumnOrderChange,
    withRowSelection,
    rowSelection,
    onRowSelectionChange,
    withRowExpansion,
    expanded,
    onExpandedChange,
    withGrouping,
    grouping,
    onGroupingChange,
    tableOptions,
  });

  const hasFooter = columns.some((col) => col.footer !== undefined);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!onScrollToBottom) {
      return;
    }

    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const threshold = 50;
    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollHeight - scrollTop - clientHeight <= threshold) {
      onScrollToBottom();
    }
  }, [onScrollToBottom]);

  return (
    <DataGridProvider
      value={{
        getStyles,
        table,
        withSorting: withSorting ?? false,
        sortedIcon,
        unsortedIcon,
        withFiltering: withFiltering ?? false,
        withGlobalFilter: withGlobalFilter ?? false,
        withPagination: withPagination ?? false,
        withColumnResizing: withColumnResizing ?? false,
        withColumnPinning: withColumnPinning ?? false,
        withColumnVisibility: withColumnVisibility ?? false,
        withColumnReorder: withColumnReorder ?? false,
        withRowSelection: withRowSelection ?? false,
        withRowExpansion: withRowExpansion ?? false,
        striped: striped ?? false,
        highlightOnHover: highlightOnHover ?? false,
        withRowNumbers: withRowNumbers ?? false,
        withVirtualization: withVirtualization ?? false,
        withGrouping: withGrouping ?? false,
        withEditing: withEditing ?? false,
        stickyHeader: stickyHeader ?? false,
        expandOnRowClick: expandOnRowClick ?? false,
        editingMode: editingMode ?? 'cell',
        density,
        onDensityChange,
        localization,
        renderExpandedRow,
        emptyState,
        onRowClick,
        onRowDoubleClick,
        onCellClick,
        onCellEdit,
        onRowEdit,
      }}
    >
      <Box
        {...getStyles('root')}
        mod={[
          {
            loading,
            virtualized: withVirtualization || undefined,
            'sticky-header': stickyHeader || undefined,
          },
          mod,
        ]}
        data-virtualized={withVirtualization || undefined}
        data-density={density}
        {...others}
      >
        {children || (
          <>
            {withGlobalFilter && (
              <DataGridToolbar>
                <DataGridGlobalFilter />
              </DataGridToolbar>
            )}
            {withVirtualization ? (
              <>
                <DataGridVirtualBody
                  height={height}
                  virtualScrollConfig={virtualScrollConfig}
                  scrollContainerRef={scrollContainerRef}
                  onScroll={onScrollToBottom ? handleScroll : undefined}
                />
                {hasFooter && (
                  <Box component="table" {...getStyles('table')}>
                    <DataGridFooter />
                  </Box>
                )}
              </>
            ) : onScrollToBottom && height ? (
              <Box
                ref={scrollContainerRef}
                onScroll={handleScroll}
                {...getStyles('virtualScrollContainer')}
                style={{ height: rem(height), overflow: 'auto' }}
              >
                <Box component="table" {...getStyles('table')}>
                  <DataGridHeader />
                  <DataGridBody />
                  {hasFooter && <DataGridFooter />}
                </Box>
              </Box>
            ) : withScrollArea ? (
              <ScrollArea
                offsetScrollbars="x"
                scrollbars="x"
                {...getStyles('scrollContainer')}
                {...scrollAreaProps}
              >
                <Box component="table" {...getStyles('table')}>
                  <DataGridHeader />
                  <DataGridBody />
                  {hasFooter && <DataGridFooter />}
                </Box>
              </ScrollArea>
            ) : (
              <Box style={{ overflowX: 'auto' }}>
                <Box component="table" {...getStyles('table')}>
                  <DataGridHeader />
                  <DataGridBody />
                  {hasFooter && <DataGridFooter />}
                </Box>
              </Box>
            )}
            {withPagination && <DataGridPagination pageSizeOptions={pageSizeOptions} />}
          </>
        )}
        {loading && <LoadingOverlay visible {...getStyles('loadingOverlay')} />}
      </Box>
    </DataGridProvider>
  );
});

DataGrid.classes = classes;
DataGrid.varsResolver = varsResolver;
DataGrid.displayName = '@mantine/data-grid/DataGrid';
DataGrid.Header = DataGridHeader;
DataGrid.Body = DataGridBody;
DataGrid.VirtualBody = DataGridVirtualBody;
DataGrid.Footer = DataGridFooter;
DataGrid.Toolbar = DataGridToolbar;
DataGrid.GlobalFilter = DataGridGlobalFilter;
DataGrid.ColumnVisibilityToggle = DataGridColumnVisibilityToggle;
DataGrid.DensityToggle = DataGridDensityToggle;
DataGrid.Pagination = DataGridPagination;
DataGrid.StatusBar = DataGridStatusBar;

export namespace DataGrid {
  export type Props = DataGridProps;
  export type StylesNames = DataGridStylesNames;
  export type CssVariables = DataGridCssVariables;

  export namespace Header {
    export type Props = import('./DataGridHeader').DataGridHeaderProps;
    export type Factory = DataGridHeaderFactory;
  }

  export namespace Body {
    export type Props = import('./DataGridBody').DataGridBodyProps;
    export type Factory = DataGridBodyFactory;
  }

  export namespace VirtualBody {
    export type Props = import('./DataGridBody').DataGridVirtualBodyProps;
    export type Factory = DataGridVirtualBodyFactory;
  }

  export namespace Footer {
    export type Props = import('./DataGridFooter').DataGridFooterProps;
    export type Factory = DataGridFooterFactory;
  }

  export namespace Toolbar {
    export type Props = import('./DataGridToolbar').DataGridToolbarProps;
    export type Factory = DataGridToolbarFactory;
  }

  export namespace GlobalFilter {
    export type Props = import('./DataGridToolbar').DataGridGlobalFilterProps;
    export type Factory = DataGridGlobalFilterFactory;
  }

  export namespace ColumnVisibilityToggle {
    export type Props = import('./DataGridToolbar').DataGridColumnVisibilityToggleProps;
    export type Factory = DataGridColumnVisibilityToggleFactory;
  }

  export namespace DensityToggle {
    export type Props = import('./DataGridToolbar').DataGridDensityToggleProps;
    export type Factory = DataGridDensityToggleFactory;
  }

  export namespace Pagination {
    export type Props = import('./DataGridPagination').DataGridPaginationProps;
    export type Factory = DataGridPaginationFactory;
  }

  export namespace StatusBar {
    export type Props = import('./DataGridStatusBar').DataGridStatusBarProps;
    export type Factory = DataGridStatusBarFactory;
  }
}
