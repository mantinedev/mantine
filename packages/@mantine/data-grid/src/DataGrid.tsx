import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Cell, Column, Row, RowData } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  genericFactory,
  getRadius,
  getSize,
  getThemeColor,
  LoadingOverlay,
  LoadingOverlayProps,
  MantineColor,
  MantineRadius,
  rem,
  ScrollArea,
  ScrollAreaProps,
  StylesApiProps,
  useController,
  useProps,
  useStyles,
} from '@mantine/core';
import { useLatestRef, useMergedRef } from '@mantine/hooks';
import { DataGridProvider } from './DataGrid.context';
import { DataGridColumnDef, DataGridEmptyStatePayload } from './DataGrid.types';
import {
  DataGridBody,
  DataGridBodyFactory,
  DataGridListView,
  DataGridVirtualBody,
  DataGridVirtualBodyFactory,
} from './DataGridBody';
import { DataGridColumnMenu, DataGridColumnMenuFactory } from './DataGridColumnMenu';
import { DataGridEditActions } from './DataGridEditActions/DataGridEditActions';
import { DataGridFooter, DataGridFooterFactory } from './DataGridFooter';
import { DataGridHeader, DataGridHeaderFactory } from './DataGridHeader';
import { DataGridHeaderOverlays } from './DataGridHeader/DataGridHeaderOverlays';
import { useHeaderInteractions } from './DataGridHeader/use-header-interactions';
import { DataGridSelectionBar, DataGridSelectionBarFactory } from './DataGridSelectionBar';
import { DataGridTfoot, DataGridTfootFactory } from './DataGridTfoot';
import {
  DataGridColumnVisibilityToggle,
  DataGridColumnVisibilityToggleFactory,
  DataGridExportButton,
  DataGridExportButtonFactory,
  DataGridGlobalFilter,
  DataGridGlobalFilterFactory,
  DataGridRowCount,
  DataGridRowCountFactory,
  DataGridToolbar,
  DataGridToolbarFactory,
} from './DataGridToolbar';
import { getSelectedCount } from './get-selected-count';
import { DataGridStore, useDataGrid, UseDataGridOptions } from './hooks';
import { useOverflowState } from './hooks/use-overflow-state';
import { useTheadHeight } from './hooks/use-thead-height';
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
  | 'listItem'
  | 'headerLabel'
  | 'resizeGuide'
  | 'dropIndicator'
  | 'dragGhost'
  | 'footer'
  | 'footerStatus'
  | 'footerPageSize'
  | 'footerPagination'
  | 'exportButton'
  | 'rowCount'
  | 'selectionBar'
  | 'selectionBarCount'
  | 'selectionBarClose'
  | 'treeLabel'
  | 'aggregationLabel'
  | 'aggregationValue'
  | 'loadingBar'
  | 'skeleton'
  | 'editActions';

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
    | '--dg-footer-height'
    | '--dg-dirty-color'
    | '--dg-invalid-color';
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

  /** Controls when the unsorted arrow is visible: `'hover'` reveals it on header hover, `'always'` keeps it visible, @default 'hover' @category appearance */
  sortIndicator?: 'hover' | 'always';

  /** Controls where the sort arrow sits: `'trailing'` at the far edge of the header, `'inline'` next to the label, @default 'trailing' @category appearance */
  sortIndicatorPosition?: 'trailing' | 'inline';

  /** Determines whether a column menu button is rendered in column headers, @default false @category appearance */
  withColumnMenu?: boolean;

  /** Additional items rendered at the end of every column menu, separated by a divider @category appearance */
  columnMenuItems?: (column: Column<DataGridFeatures, TData, unknown>) => React.ReactNode;

  /** Puts the grid in the loading state: skeleton rows on first load, then the `loadingVariant` over existing rows, @default false @category behavior */
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

  /** Content rendered in one full-width body cell when no rows are displayed and the grid is not loading, a function receives the row counts, filter state and table @category appearance */
  emptyState?: React.ReactNode | ((payload: DataGridEmptyStatePayload<TData>) => React.ReactNode);

  /** Enable virtualization for large datasets */
  virtualize?: 'rows' | 'columns' | 'rows,columns';

  /** Fixed height of the scroll container, the grid scrolls inside its frame and `stickyHeader` / pinned rows stick within it; required when `virtualize` includes rows @category appearance */
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

  /** When true, clicking a row toggles its selection, @default false @category behavior */
  selectOnRowClick?: boolean;

  /** Makes the header stick to the top of the grid's scroll container, set `height` so the grid scrolls inside its frame, @default false @category appearance */
  stickyHeader?: boolean;

  /** Offset from the top of the scroll container at which the sticky header sticks, numbers are converted to rem @category appearance */
  stickyHeaderOffset?: number | string;

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

  /** Renders rows as a vertical list instead of a table, `true` = `'cards'`, @default false @category appearance */
  listView?: boolean | 'cards' | 'flat';

  /** Custom render function for list view items. Receives the row and should return a card/item element @category appearance */
  renderListItem?: (props: { row: Row<DataGridFeatures, TData> }) => React.ReactNode;

  /** Table layout algorithm, @default 'fixed' @category appearance */
  tableLayout?: 'fixed' | 'auto';

  /** Controls text overflow in body cells, @default 'ellipsis' @category appearance */
  textOverflow?: 'ellipsis' | 'wrap' | 'clip';

  /** Paints group rows with the striped color, @default false @category appearance */
  withTintedGroupRows?: boolean;

  /** Draws guide lines between tree rows, `false` keeps the indent and chevron only, @default true @category appearance */
  withTreeLines?: boolean;

  /** Paints expanded rows and their panels with the striped color and drops the rule between them, @default false @category appearance */
  withTintedExpandedRows?: boolean;

  /** What `loading` renders over existing rows: an overlay, a 2px progress bar under the header, or skeleton rows in place of the rows, @default 'overlay' @category appearance */
  loadingVariant?: 'overlay' | 'bar' | 'skeleton';

  /** Number of skeleton rows rendered while loading without pagination, with pagination the page size is used, @default 10 @category appearance */
  skeletonRowCount?: number;

  /** Props passed down to the `LoadingOverlay` component rendered by the `'overlay'` loading variant @category appearance */
  loadingOverlayProps?: LoadingOverlayProps;

  /** Renders a floating Save / Cancel pill next to the row being edited, row editing mode only, @default false @category appearance */
  withFloatingEditActions?: boolean;
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
    Tfoot: typeof DataGridTfoot;
    Footer: typeof DataGridFooter;
    Toolbar: typeof DataGridToolbar;
    GlobalFilter: typeof DataGridGlobalFilter;
    ColumnVisibilityToggle: typeof DataGridColumnVisibilityToggle;
    ExportButton: typeof DataGridExportButton;
    RowCount: typeof DataGridRowCount;
    SelectionBar: typeof DataGridSelectionBar;
    ColumnMenu: typeof DataGridColumnMenu;
  };
}>;

const defaultProps = {} satisfies Partial<DataGridProps>;

const EMPTY_STORE_OPTIONS: UseDataGridOptions<any> = { data: [], columns: [] };

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
        '--dg-footer-height': undefined,
        '--dg-dirty-color': undefined,
        '--dg-invalid-color': undefined,
      },
    };
  }
);

export const DataGrid = genericFactory<DataGridFactory>(((
  _props: DataGridProps<any>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
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
    sortIndicator = 'hover',
    sortIndicatorPosition = 'trailing',
    withColumnMenu = false,
    columnMenuItems,
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
    selectOnRowClick,
    stickyHeader,
    stickyHeaderOffset,
    labels: labelsProp,
    getRowHeight,
    estimateRowHeight,
    withScrollArea = true,
    scrollAreaProps,
    listView,
    renderListItem,
    tableLayout = 'fixed',
    textOverflow = 'ellipsis',
    withTintedGroupRows,
    withTreeLines = true,
    withTintedExpandedRows,
    loadingVariant = 'overlay',
    skeletonRowCount = 10,
    loadingOverlayProps,
    withFloatingEditActions,
    ...others
  } = props;

  const getStyles = useStyles<DataGridFactory>({
    name: 'DataGrid',
    props,
    className,
    style: [
      style,
      stickyHeader && stickyHeaderOffset !== undefined
        ? ({ '--dg-sticky-header-offset': rem(stickyHeaderOffset) } as React.CSSProperties)
        : undefined,
    ],
    classes,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'root',
    vars,
    varsResolver,
  });

  const store = useController(
    useDataGrid,
    storeProp,
    storeProp ? EMPTY_STORE_OPTIONS : { data: data ?? [], columns: columns ?? [] }
  );
  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  const rootRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(ref, rootRef);
  const theadRef = useTheadHeight(rootRef);
  const headerInteractions = useHeaderInteractions({
    store,
    withColumnReorder: store.withColumnReorder,
    withColumnResizing: store.withColumnResizing,
    rootRef,
  });
  const listViewMode = listView === true ? 'cards' : listView || false;
  const hasColumnFooter = store.table
    .getFooterGroups()
    .some((group) => group.headers.some((header) => header.column.columnDef.footer !== undefined));
  const hasAggregation = store.aggregatedColumnIds.length > 0;
  const hasTfoot = hasColumnFooter || hasAggregation;
  const overflow = useOverflowState(store.withColumnPinning);
  const scrollContainerRef = store.scrollContainerRef;
  const viewportRef = useMergedRef(scrollContainerRef, overflow.ref);
  const withRowVirtualization = virtualize === 'rows' || virtualize === 'rows,columns';
  const withColumnVirtualization = virtualize === 'columns' || virtualize === 'rows,columns';

  const withVirtualization = withRowVirtualization || withColumnVirtualization;
  const withRowPinning = withVirtualization ? false : store.withRowPinning;
  const isLoading = !!loading;
  const bodyEmpty = withRowPinning
    ? store.table.getTopRows().length === 0 &&
      store.table.getCenterRows().length === 0 &&
      store.table.getBottomRows().length === 0
    : store.table.getRowModel().rows.length === 0;
  const withSkeletonRows =
    isLoading && !listViewMode && (bodyEmpty || loadingVariant === 'skeleton');
  const withLoadingOverlay = isLoading && !withSkeletonRows && loadingVariant !== 'bar';
  const withLoadingBar = isLoading && !withSkeletonRows && loadingVariant === 'bar';
  if (process.env.NODE_ENV !== 'production' && withVirtualization && store.withRowPinning) {
    // eslint-disable-next-line no-console
    console.warn(
      '[@mantine/data-grid] row pinning is not supported with `virtualize`, remove `withRowPinning` or `rowPinning` from useDataGrid'
    );
  }
  const indexRows = withRowPinning ? store.table.getCenterRows() : store.table.getRowModel().rows;
  const pageIndex = store.pagination?.pageIndex ?? 0;
  const pageSize = store.pagination?.pageSize ?? 0;
  const rowNumbers = useMemo(() => {
    const numbers = new Map<string, number>();
    let current = store.withPagination ? pageIndex * pageSize : 0;
    for (const row of indexRows) {
      if (!row.getIsGrouped()) {
        current += 1;
        numbers.set(row.id, current);
      }
    }
    return numbers;
  }, [indexRows, store.withPagination, pageIndex, pageSize]);
  const getRowNumber = useCallback(
    (row: Row<DataGridFeatures, any>) => rowNumbers.get(row.id),
    [rowNumbers]
  );

  const childArray = React.Children.toArray(children);
  const isToolbar = (child: React.ReactNode) =>
    React.isValidElement(child) && child.type === DataGridToolbar;
  const isSelectionBar = (child: React.ReactNode) =>
    React.isValidElement(child) && child.type === DataGridSelectionBar;
  const toolbarChildren = childArray.filter(isToolbar);
  const selectionBarChild = childArray.find(isSelectionBar) as
    | React.ReactElement<{ floating?: boolean }>
    | undefined;
  const otherChildren = childArray.filter((child) => !isToolbar(child) && !isSelectionBar(child));
  const selectedCount = getSelectedCount(store.rowSelection);
  const selectionBarVisible = selectionBarChild !== undefined && selectedCount > 0;
  const floatingSelectionBar = selectionBarVisible && !!selectionBarChild.props.floating;
  const toolbarHidden = selectionBarVisible && !floatingSelectionBar;

  const tableRef = useLatestRef(store.table);
  const editingRowId = store.editingMode === 'row' ? store.editing?.rowId : undefined;
  useEffect(() => {
    if (!editingRowId) {
      return undefined;
    }

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest('[data-editing][data-row-id], [data-edit-actions], [data-portal]')
      ) {
        return;
      }
      tableRef.current.saveEditing();
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [editingRowId]);

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
        withRowPinning,
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
        editTrigger: store.table.options.editTrigger ?? 'doubleClick',
        selectOnRowClick: selectOnRowClick ?? false,
        listView: listViewMode,
        renderListItem,
        getRowHeight,
        estimateRowHeight,
        sortIndicator,
        sortIndicatorPosition,
        withColumnMenu,
        columnMenuItems,
        headerInteractions: headerInteractions.interactions,
        toolbarHidden,
        withTintedGroupRows: withTintedGroupRows ?? false,
        withTreeLines,
        withTintedExpandedRows: withTintedExpandedRows ?? false,
        theadRef,
        loading: isLoading,
        loadingVariant,
        skeletonRowCount,
        withSkeletonRows,
      }}
    >
      <Box
        ref={mergedRef}
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
            'sort-indicator': sortIndicator,
            'sort-indicator-position': sortIndicatorPosition,
            'cell-selection': store.withCellSelection,
            'tinted-group-rows': withTintedGroupRows,
            'tree-lines': store.withTreeData && withTreeLines,
            'tinted-expanded-rows': withTintedExpandedRows,
            'list-view': listViewMode || undefined,
            'column-pinning': store.withColumnPinning,
            'overflow-start': overflow.state.start,
            'overflow-end': overflow.state.end,
            'loading-variant': isLoading ? loadingVariant : undefined,
          },
          mod,
        ]}
        data-size={store.size}
        data-selection-bar-visible={selectionBarVisible || undefined}
        data-editing-mode={store.editingMode}
        {...others}
      >
        {selectionBarVisible && !floatingSelectionBar && selectionBarChild}
        {toolbarChildren}
        <div style={{ position: 'relative' }}>
          {listViewMode ? (
            <DataGridListView />
          ) : withRowVirtualization || withColumnVirtualization ? (
            <>
              <DataGridVirtualBody
                height={height}
                virtualScrollConfig={virtualScrollConfig}
                virtualColumnConfig={virtualColumnConfig}
                ref={viewportRef}
                scrollContainerRef={scrollContainerRef}
                onScroll={onScrollToBottom ? handleScroll : undefined}
              />
              {hasTfoot && (
                <table {...getStyles('table')}>
                  <DataGridTfoot />
                </table>
              )}
            </>
          ) : onScrollToBottom && height ? (
            <div
              ref={viewportRef}
              onScroll={handleScroll}
              {...getStyles('virtualScrollContainer', {
                style: { height: rem(height), overflow: 'auto' },
              })}
            >
              <table aria-busy={isLoading || undefined} {...getStyles('table')}>
                <DataGridHeader />
                <DataGridBody />
                {hasTfoot && <DataGridTfoot />}
              </table>
            </div>
          ) : withScrollArea ? (
            <ScrollArea
              scrollbarSize={4}
              viewportRef={viewportRef}
              offsetScrollbars="x"
              scrollbars={height ? 'xy' : 'x'}
              {...scrollAreaProps}
              {...getStyles('scrollContainer', {
                className: scrollAreaProps?.className,
                style: [height ? { height: rem(height) } : undefined, scrollAreaProps?.style],
              })}
            >
              <table aria-busy={isLoading || undefined} {...getStyles('table')}>
                <DataGridHeader />
                <DataGridBody />
                {hasTfoot && <DataGridTfoot />}
              </table>
            </ScrollArea>
          ) : (
            <div
              ref={viewportRef}
              style={height ? { overflow: 'auto', height: rem(height) } : { overflowX: 'auto' }}
            >
              <table aria-busy={isLoading || undefined} {...getStyles('table')}>
                <DataGridHeader />
                <DataGridBody />
                {hasTfoot && <DataGridTfoot />}
              </table>
            </div>
          )}
          {withLoadingOverlay && (
            <LoadingOverlay
              visible
              {...loadingOverlayProps}
              overlayProps={{
                blur: 2,
                backgroundOpacity: 0.6,
                ...loadingOverlayProps?.overlayProps,
              }}
              loaderProps={{ size: store.controlSize, ...loadingOverlayProps?.loaderProps }}
              {...getStyles('loadingOverlay', {
                className: loadingOverlayProps?.className,
                style: [{ top: 'var(--dg-thead-height, 0px)' }, loadingOverlayProps?.style],
              })}
            />
          )}
          {withLoadingBar && <div aria-hidden {...getStyles('loadingBar')} />}
        </div>
        {otherChildren}
        {floatingSelectionBar && selectionBarChild}
        {withFloatingEditActions && store.editingMode === 'row' && !listViewMode && (
          <DataGridEditActions rootRef={rootRef} />
        )}
        <DataGridHeaderOverlays
          drag={headerInteractions.drag}
          dropTarget={headerInteractions.dropTarget}
          guide={headerInteractions.guide}
        />
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
DataGrid.Tfoot = DataGridTfoot;
DataGrid.Footer = DataGridFooter;
DataGrid.Toolbar = DataGridToolbar;
DataGrid.GlobalFilter = DataGridGlobalFilter;
DataGrid.ColumnVisibilityToggle = DataGridColumnVisibilityToggle;
DataGrid.ExportButton = DataGridExportButton;
DataGrid.RowCount = DataGridRowCount;
DataGrid.SelectionBar = DataGridSelectionBar;
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

  export namespace Tfoot {
    export type Props = import('./DataGridTfoot').DataGridTfootProps;
    export type Factory = DataGridTfootFactory;
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

  export namespace ColumnMenu {
    export type Props = import('./DataGridColumnMenu').DataGridColumnMenuProps;
    export type Factory = DataGridColumnMenuFactory;
  }

  export namespace ExportButton {
    export type Props = import('./DataGridToolbar').DataGridExportButtonProps;
    export type Factory = DataGridExportButtonFactory;
  }

  export namespace RowCount {
    export type Props = import('./DataGridToolbar').DataGridRowCountProps;
    export type Factory = DataGridRowCountFactory;
  }

  export namespace SelectionBar {
    export type Props = import('./DataGridSelectionBar').DataGridSelectionBarProps;
    export type Factory = DataGridSelectionBarFactory;
  }
}
