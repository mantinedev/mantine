import React, { useCallback, useMemo } from 'react';
import { Cell, Row, RowData } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  genericFactory,
  Factory,
  getRadius,
  getSize,
  getThemeColor,
  LoadingOverlay,
  MantineColor,
  MantineRadius,
  rem,
  ScrollArea,
  ScrollAreaProps,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { DataGridProvider } from './DataGrid.context';
import { DataGridColumnDef } from './DataGrid.types';
import {
  DataGridBody,
  DataGridBodyFactory,
  DataGridListView,
  DataGridVirtualBody,
  DataGridVirtualBodyFactory,
} from './DataGridBody';
import { DataGridColumnMenu, DataGridColumnMenuFactory } from './DataGridColumnMenu';
import { DataGridFooter, DataGridFooterFactory } from './DataGridFooter';
import { DataGridHeader, DataGridHeaderFactory } from './DataGridHeader';
import { DataGridPagination, DataGridPaginationFactory } from './DataGridPagination';
import { DataGridStatusBar, DataGridStatusBarFactory } from './DataGridStatusBar';
import {
  DataGridColumnVisibilityToggle,
  DataGridColumnVisibilityToggleFactory,
  DataGridGlobalFilter,
  DataGridGlobalFilterFactory,
  DataGridToolbar,
  DataGridToolbarFactory,
} from './DataGridToolbar';
import { DataGridStore, useDataGrid } from './hooks';
import { DEFAULT_LABELS, DataGridLabels } from './labels';
import type { DataGridFeatures } from './table-features';
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
  | 'virtualCell'
  | 'treeIndent'
  | 'treeToggle'
  | 'columnMenu'
  | 'dragHandle'
  | 'listView'
  | 'listItem';

export type DataGridCssVariables = {
  root:
    | '--dg-font-size'
    | '--dg-row-height'
    | '--dg-header-height'
    | '--dg-cell-padding-x'
    | '--dg-cell-padding-y'
    | '--dg-control-size'
    | '--dg-icon-size'
    | '--dg-radius'
    | '--dg-border-color'
    | '--dg-row-border-color'
    | '--dg-striped-color'
    | '--dg-hover-color'
    | '--dg-selected-color'
    | '--dg-pinned-shadow';
};

export interface DataGridProps<TData extends RowData = any>
  extends BoxProps, StylesApiProps<DataGridFactory>, ElementProps<'div', 'children'> {
  /** DataGrid store, can be used to control grid state. If not provided, an internal store is created from `data` and `columns` @category state */
  store?: DataGridStore<TData>;

  /** Data array, required when `store` is not provided @category appearance */
  data?: TData[];

  /** Column definitions, required when `store` is not provided @category appearance */
  columns?: DataGridColumnDef<TData>[];

  /** Determines whether the grid should have a 1px border, @default true @category appearance */
  withTableBorder?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set border-radius of the frame, `theme.defaultRadius` by default @category appearance */
  radius?: MantineRadius;

  /** Determines whether rows are separated by a rule, `'subtle'` uses a lighter rule color, @default true @category appearance */
  withRowBorders?: boolean | 'subtle';

  /** Determines whether columns are separated by a rule, `'data'` draws rules between data columns only, @default false @category appearance */
  withColumnBorders?: boolean | 'data';

  /** Border color, key of `theme.colors` or any valid CSS color @category appearance */
  borderColor?: MantineColor;

  /** Background color of striped rows, key of `theme.colors` or any valid CSS color @category appearance */
  stripedColor?: MantineColor;

  /** Background color of hovered rows, key of `theme.colors` or any valid CSS color @category appearance */
  highlightOnHoverColor?: MantineColor;

  /** Determines whether numbers in cells should use tabular figures, @default false @category appearance */
  tabularNums?: boolean;

  /** Grid content @category appearance */
  children?: React.ReactNode;

  /** Custom icon displayed in sortable column headers when the column is sorted @category appearance */
  sortedIcon?: React.ReactNode;

  /** Custom icon displayed in sortable column headers when the column is not sorted @category appearance */
  unsortedIcon?: React.ReactNode;

  /** Show loading overlay, @default false @category behavior */
  loading?: boolean;

  /** Adds striped rows styling, `true` stripes odd rows, @default false @category appearance */
  striped?: boolean | 'odd' | 'even';

  /** Add hover highlight on rows, @default false @category appearance */
  highlightOnHover?: boolean;

  /** Callback when a row is clicked @category behavior */
  onRowClick?: (row: Row<DataGridFeatures, TData>, event: React.MouseEvent) => void;

  /** Callback when a row is double-clicked @category behavior */
  onRowDoubleClick?: (row: Row<DataGridFeatures, TData>, event: React.MouseEvent) => void;

  /** Callback when a cell is clicked @category behavior */
  onCellClick?: (cell: Cell<DataGridFeatures, TData, unknown>, event: React.MouseEvent) => void;

  /** Content to display when data is empty @category appearance */
  emptyState?: React.ReactNode;

  /** Enable virtualization for large datasets */
  virtualize?: 'rows' | 'columns' | 'rows,columns';

  /** Fixed height for the scrollable container, required when `virtualize` includes rows @category appearance */
  height?: number | string;

  /** Configuration for virtual scroll behavior */
  virtualScrollConfig?: {
    overscan?: number;
    estimateSize?: (index: number) => number;
  };

  /** Configuration for virtual column scroll behavior */
  virtualColumnConfig?: {
    overscan?: number;
    estimateSize?: (index: number) => number;
  };

  /** Callback fired when scroll reaches the bottom of the grid @category behavior */
  onScrollToBottom?: () => void;

  /** Render function for expanded row content @category appearance */
  renderExpandedRow?: (props: { row: Row<DataGridFeatures, TData> }) => React.ReactNode;

  /** When true, clicking a row toggles its expansion, @default false @category behavior */
  expandOnRowClick?: boolean;

  /** Callback when a cell value is edited @category state */
  onCellEdit?: (props: {
    row: Row<DataGridFeatures, TData>;
    columnId: string;
    value: unknown;
  }) => void;

  /** Callback when a row is edited @category state */
  onRowEdit?: (props: {
    row: Row<DataGridFeatures, TData>;
    values: Record<string, unknown>;
  }) => void;

  /** How editing is triggered: 'click' for single click, 'doubleClick' for double click, @default 'doubleClick' @category behavior */
  editTrigger?: 'click' | 'doubleClick';

  /** Async row update handler. On edit save, called with (newRow, oldRow). If it rejects, the edit is reverted. @category behavior */
  processRowUpdate?: (newRow: TData, oldRow: TData) => Promise<TData>;

  /** Called when processRowUpdate rejects @category behavior */
  onProcessRowUpdateError?: (error: unknown) => void;

  /** When true, clicking a row toggles its selection, @default false @category behavior */
  selectOnRowClick?: boolean;

  /** When true, renders filter inputs in a dedicated row below column headers, @default false @category appearance */
  headerFilters?: boolean;

  /** Make the header sticky when scrolling, @default false @category appearance */
  stickyHeader?: boolean;

  /** Labels overrides @category appearance */
  labels?: Partial<DataGridLabels>;

  /** Return height for a specific row, or 'auto' for content-measured height @category appearance */
  getRowHeight?: (row: Row<DataGridFeatures, TData>) => number | 'auto';

  /** Estimated row height in px for the virtual body before measurement, defaults to the row height of the current `size` */
  estimateRowHeight?: number;

  /** Use ScrollArea component for horizontal scrolling, @default true */
  withScrollArea?: boolean;

  /** Props passed to the ScrollArea component, applicable only when `withScrollArea` is true */
  scrollAreaProps?: ScrollAreaProps;

  /** When true, renders rows as vertical cards instead of a table, @default false @category appearance */
  listView?: boolean;

  /** Custom render function for list view items. Receives the row and should return a card/item element @category appearance */
  renderListItem?: (props: { row: Row<DataGridFeatures, TData> }) => React.ReactNode;

  /** Table layout algorithm, @default 'fixed' @category appearance */
  tableLayout?: 'fixed' | 'auto';

  /** Controls text overflow in body cells, @default 'ellipsis' @category appearance */
  textOverflow?: 'ellipsis' | 'wrap' | 'clip';
}

export type DataGridFactory = Factory<{
  props: DataGridProps;
  ref: HTMLDivElement;
  stylesNames: DataGridStylesNames;
  vars: DataGridCssVariables;
  signature: <TData extends RowData = any>(props: DataGridProps<TData>) => React.JSX.Element;
  staticComponents: {
    Header: typeof DataGridHeader;
    Body: typeof DataGridBody;
    VirtualBody: typeof DataGridVirtualBody;
    Footer: typeof DataGridFooter;
    Toolbar: typeof DataGridToolbar;
    GlobalFilter: typeof DataGridGlobalFilter;
    ColumnVisibilityToggle: typeof DataGridColumnVisibilityToggle;
    Pagination: typeof DataGridPagination;
    StatusBar: typeof DataGridStatusBar;
    ColumnMenu: typeof DataGridColumnMenu;
  };
}>;

const defaultProps = {} satisfies Partial<DataGridProps>;

const varsResolver = createVarsResolver<DataGridFactory>(
  (theme, { borderColor, stripedColor, highlightOnHoverColor, radius, store }) => {
    const size = store?.size ?? 'sm';

    return {
      root: {
        '--dg-font-size': getSize(size, 'dg-font-size'),
        '--dg-row-height': getSize(size, 'dg-row-height'),
        '--dg-header-height': getSize(size, 'dg-header-height'),
        '--dg-cell-padding-x': getSize(size, 'dg-cell-padding-x'),
        '--dg-cell-padding-y': getSize(size, 'dg-cell-padding-y'),
        '--dg-control-size': getSize(size, 'dg-control-size'),
        '--dg-icon-size': getSize(size, 'dg-icon-size'),
        '--dg-radius': getRadius(radius),
        '--dg-border-color': borderColor ? getThemeColor(borderColor, theme) : undefined,
        '--dg-row-border-color': undefined,
        '--dg-striped-color': stripedColor ? getThemeColor(stripedColor, theme) : undefined,
        '--dg-hover-color': highlightOnHoverColor
          ? getThemeColor(highlightOnHoverColor, theme)
          : undefined,
        '--dg-selected-color': undefined,
        '--dg-pinned-shadow': undefined,
      },
    };
  }
);

export const DataGrid = genericFactory<DataGridFactory>(((_props: DataGridProps<any>) => {
  const props = useProps('DataGrid', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    store: storeProp,
    data,
    columns,
    withTableBorder = true,
    radius,
    withRowBorders = true,
    withColumnBorders,
    borderColor,
    stripedColor,
    highlightOnHoverColor,
    tabularNums,
    children,
    mod,
    attributes,
    sortedIcon,
    unsortedIcon,
    loading,
    striped,
    highlightOnHover,
    onRowClick,
    onRowDoubleClick,
    onCellClick,
    emptyState,
    virtualize,
    height,
    virtualScrollConfig,
    virtualColumnConfig,
    onScrollToBottom,
    renderExpandedRow,
    expandOnRowClick,
    onCellEdit,
    onRowEdit,
    editTrigger,
    processRowUpdate,
    onProcessRowUpdateError,
    selectOnRowClick,
    headerFilters,
    stickyHeader,
    labels: labelsProp,
    getRowHeight,
    estimateRowHeight,
    withScrollArea = true,
    scrollAreaProps,
    listView,
    renderListItem,
    tableLayout = 'fixed',
    textOverflow = 'ellipsis',
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

  const internalStore = useDataGrid({
    data: data ?? [],
    columns: columns ?? [],
  });

  const store = storeProp ?? internalStore;
  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  const hasColumnFooter = store.table
    .getFooterGroups()
    .some((group) => group.headers.some((header) => header.column.columnDef.footer !== undefined));
  const hasAggregation = store.aggregatedColumnIds.length > 0;
  const hasFooter = hasColumnFooter || hasAggregation;
  const scrollContainerRef = store.scrollContainerRef;
  const withRowVirtualization = virtualize === 'rows' || virtualize === 'rows,columns';
  const withColumnVirtualization = virtualize === 'columns' || virtualize === 'rows,columns';

  const rowModel = store.table.getRowModel();
  const pageIndex = store.pagination?.pageIndex ?? 0;
  const pageSize = store.pagination?.pageSize ?? 0;
  const rowNumbers = useMemo(() => {
    const numbers = new Map<string, number>();
    let current = store.withPagination ? pageIndex * pageSize : 0;
    for (const row of rowModel.rows) {
      if (!row.getIsGrouped()) {
        current += 1;
        numbers.set(row.id, current);
      }
    }
    return numbers;
  }, [rowModel, store.withPagination, pageIndex, pageSize]);
  const getRowNumber = useCallback(
    (row: Row<DataGridFeatures, any>) => rowNumbers.get(row.id),
    [rowNumbers]
  );

  const withVirtualization = withRowVirtualization || withColumnVirtualization;
  if (process.env.NODE_ENV !== 'production' && withVirtualization && store.withRowReorder) {
    // eslint-disable-next-line no-console
    console.warn(
      '[@mantine/data-grid] row reorder is not supported with `virtualize`, remove `onRowOrderChange` or `withRowReorder` from useDataGrid'
    );
  }

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
        store,
        table: store.table,
        withSorting: store.withSorting,
        sortedIcon,
        unsortedIcon,
        withFiltering: store.withFiltering,
        withGlobalFilter: store.withGlobalFilter,
        withPagination: store.withPagination,
        withColumnResizing: store.withColumnResizing,
        withColumnPinning: store.withColumnPinning,
        withColumnVisibility: store.withColumnVisibility,
        withColumnReorder: store.withColumnReorder,
        withRowSelection: store.withRowSelection,
        withRowExpansion: store.withRowExpansion,
        striped: striped === true ? 'odd' : striped || false,
        withRowNumbers: store.withRowNumbers,
        getRowNumber,
        withVirtualization: withRowVirtualization,
        withColumnVirtualization,
        withGrouping: store.withGrouping,
        withRowPinning: withRowVirtualization ? false : store.withRowPinning,
        withEditing: store.withEditing,
        withFaceting: store.withFaceting,
        withTreeData: store.withTreeData,
        withRowReorder:
          withRowVirtualization || withColumnVirtualization ? false : store.withRowReorder,
        withCellSelection: store.withCellSelection,
        aggregatedColumnIds: store.aggregatedColumnIds,
        onRowOrderChange:
          withRowVirtualization || withColumnVirtualization ? undefined : store.onRowOrderChange,
        tableLayout,
        stickyHeader: stickyHeader ?? false,
        expandOnRowClick: expandOnRowClick ?? false,
        editingMode: store.editingMode,
        labels,
        renderExpandedRow,
        emptyState,
        onRowClick,
        onRowDoubleClick,
        onCellClick,
        onCellEdit,
        onRowEdit,
        editTrigger: editTrigger ?? 'doubleClick',
        processRowUpdate,
        onProcessRowUpdateError,
        selectOnRowClick: selectOnRowClick ?? false,
        headerFilters: headerFilters ?? false,
        listView: listView ?? false,
        renderListItem,
        getRowHeight,
        estimateRowHeight,
      }}
    >
      <Box
        {...getStyles('root')}
        mod={[
          {
            loading,
            virtualized: withRowVirtualization || withColumnVirtualization || undefined,
            'with-table-border': withTableBorder,
            'with-row-borders': !!withRowBorders,
            'row-borders': withRowBorders === 'subtle' ? 'subtle' : undefined,
            'column-borders':
              withColumnBorders === 'data' ? 'data' : withColumnBorders ? 'all' : undefined,
            'highlight-on-hover': highlightOnHover,
            'tabular-nums': tabularNums,
            'sticky-header': stickyHeader || undefined,
            'table-layout': tableLayout === 'auto' ? 'auto' : undefined,
            'text-overflow': textOverflow !== 'ellipsis' ? textOverflow : undefined,
          },
          mod,
        ]}
        data-size={store.size}
        {...others}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === DataGridToolbar ? child : null
        )}
        {listView ? (
          <DataGridListView />
        ) : (
          <>
            {withRowVirtualization || withColumnVirtualization ? (
              <>
                <DataGridVirtualBody
                  height={height}
                  virtualScrollConfig={virtualScrollConfig}
                  virtualColumnConfig={virtualColumnConfig}
                  scrollContainerRef={scrollContainerRef}
                  onScroll={onScrollToBottom ? handleScroll : undefined}
                />
                {hasFooter && (
                  <table {...getStyles('table')}>
                    <DataGridFooter />
                  </table>
                )}
              </>
            ) : onScrollToBottom && height ? (
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                {...getStyles('virtualScrollContainer')}
                style={{ height: rem(height), overflow: 'auto' }}
              >
                <table {...getStyles('table')}>
                  <DataGridHeader />
                  <DataGridBody />
                  {hasFooter && <DataGridFooter />}
                </table>
              </div>
            ) : withScrollArea ? (
              <ScrollArea
                scrollbarSize={4}
                ref={scrollContainerRef}
                offsetScrollbars="x"
                scrollbars="x"
                {...getStyles('scrollContainer')}
                {...scrollAreaProps}
              >
                <table {...getStyles('table')}>
                  <DataGridHeader />
                  <DataGridBody />
                  {hasFooter && <DataGridFooter />}
                </table>
              </ScrollArea>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table {...getStyles('table')}>
                  <DataGridHeader />
                  <DataGridBody />
                  {hasFooter && <DataGridFooter />}
                </table>
              </div>
            )}
          </>
        )}
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === DataGridToolbar ? null : child
        )}
        {loading && <LoadingOverlay visible {...getStyles('loadingOverlay')} />}
      </Box>
    </DataGridProvider>
  );
}) as any);

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
DataGrid.Pagination = DataGridPagination;
DataGrid.StatusBar = DataGridStatusBar;
DataGrid.ColumnMenu = DataGridColumnMenu;

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

  export namespace Pagination {
    export type Props = import('./DataGridPagination').DataGridPaginationProps;
    export type Factory = DataGridPaginationFactory;
  }

  export namespace StatusBar {
    export type Props = import('./DataGridStatusBar').DataGridStatusBarProps;
    export type Factory = DataGridStatusBarFactory;
  }

  export namespace ColumnMenu {
    export type Props = import('./DataGridColumnMenu').DataGridColumnMenuProps;
    export type Factory = DataGridColumnMenuFactory;
  }
}
