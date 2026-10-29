# DataGrid API Reference

## Table of Contents
- [Exports](#exports)
- [useDataGrid options](#usedatagrid-options)
- [Store](#store)
- [DataGrid props](#datagrid-props)
- [Compound components](#compound-components)
- [Column definition and meta](#column-definition-and-meta)
- [Editing](#editing)
- [Filters](#filters)
- [Export and autosize helpers](#export-and-autosize-helpers)
- [State persistence](#state-persistence)
- [Labels](#labels)
- [Styles API and CSS variables](#styles-api-and-css-variables)
- [Useful TanStack APIs](#useful-tanstack-apis)

---

## Exports

From `@mantine/data-grid`:

- Components: `DataGrid` (with `DataGrid.Toolbar`, `.GlobalFilter`, `.ColumnVisibilityToggle`, `.ExportButton`, `.RowCount`, `.SelectionBar`, `.Footer`, `.ColumnMenu`). The same components are exported as `DataGridToolbar`, `DataGridGlobalFilter`, `DataGridColumnVisibilityToggle`, `DataGridExportButton`, `DataGridRowCount`, `DataGridSelectionBar`, `DataGridFooter`, `DataGridColumnMenu`.
- Hooks: `useDataGrid`, `useDataGridState`.
- Column helpers: `createDataGridColumnHelper<T>()`, `getColumnLabel(column)`, `UTILITY_COLUMN_IDS`, `flexRender` (re-exported from TanStack).
- Filters: `fuzzyFilter`, `fuzzySort`, `stringOperators`, `numberOperators`, `booleanOperators`, `createOperatorFilterFn`.
- Export: `exportToCsv`, `formatCsv`, `exportToExcel`, `exportToPrint`, `copyToClipboard`, `autosizeColumns`.
- Labels: `DEFAULT_LABELS`, type `DataGridLabels`.
- TanStack wiring: `dataGridFeatures`, `editingFeature`.
- Types: `DataGridProps`, `DataGridStore<T>`, `UseDataGridOptions<T>`, `DataGridColumnDef<T>`, `DataGridColumnMeta`, `DataGridTable<T>`, `DataGridRow<T>`, `DataGridCell<T>`, `DataGridColumn<T>`, `DataGridFilterFn<T>`, `DataGridSortFn<T>`, `DataGridFeatures`, `DataGridEmptyStatePayload<T>`, `DataGridFacetedValue`, `DataGridControlSize` (`'xs' | 'sm' | 'md'`), `DataGridUtilityColumn`, `DataGridEditComponentProps<T>`, `DataGridEditingMode`, `DataGridEditingState`, `DataGridEditingStatus`, `DataGridCellStatus`, `DataGridEditStartPayload`, `DataGridEditSavePayload`, `DataGridEditSaveErrorPayload`, `DataGridEditCancelPayload`, `DataGridCellStatusPayload`, `FilterOperator`, `OperatorFilterValue`, `ExportCsvOptions`, `ExportExcelOptions`, `ExportPrintOptions`, `ClipboardCopyOptions`, `ExportRowScope`, `ExportColumnScope`, `AutosizeColumnsOptions`, `DataGridExportFormat`, `UseDataGridStateOptions`, `DataGridPersistableState`, plus `*Props`, `*Factory` and `*StylesNames` of every component.

State types (`SortingState`, `ColumnFiltersState`, `PaginationState`, `RowSelectionState`, `ExpandedState`, `GroupingState`, `ColumnPinningState`, `RowPinningState`, `ColumnVisibilityState`, `ColumnOrderState`, `ColumnSizingState`, `CellSelectionState`, `OnChangeFn`, `Updater`) and `constructAggregationFn` are imported from `@tanstack/react-table`.

---

## useDataGrid options

```ts
const store = useDataGrid<TData>(options: UseDataGridOptions<TData>): DataGridStore<TData>;
```

A feature turns on when its `with*` flag is `true`, or when its state, change handler or another
listed option is passed. Set the `with*` flag to `false` to force it off.

**Core**

| Option | Type | Notes |
|---|---|---|
| `data` | `TData[]` | Keep its identity stable between renders |
| `columns` | `DataGridColumnDef<TData>[]` | Module level or `useMemo` |
| `getRowId` | `(row, index, parent?) => string` | Defaults to the index path |
| `size` | `MantineSize` | `'sm'` by default; `onSizeChange` for controlled size |
| `tableOptions` | `Partial<TableOptions<DataGridFeatures, TData>>` | Any TanStack option: `defaultColumn`, `enableMultiSort`, `autoResetExpanded`, `manualGrouping`, `debugTable`… Spread last, overrides grid defaults |

**Sorting** (`withSorting`, inferred from columns with `enableSorting: true`; columns without it stay unsortable)
`sorting`, `onSortingChange`, `manualSorting`, `enableSortingRemoval` (`false` removes the unsorted step), `sortDescFirst`, `enableMultiSort` (Shift + click, default `true`), `maxMultiSortColCount`.

**Column filtering** (`withFiltering`, inferred from columns with `enableColumnFilter: true` or `filterFn`; controlled `columnFilters` alone do not turn it on)
`columnFilters`, `onColumnFiltersChange`, `manualFiltering`, `withFaceting` (enables faceted values for filter controls).

**Global filter** (`withGlobalFilter`, inferred from `globalFilter` / `onGlobalFilterChange`)
`globalFilter`, `onGlobalFilterChange`, `globalFilterFn` (for example `fuzzyFilter`). Exclude a column with `enableGlobalFilter: false` on it.

**Pagination** (on when any of `pagination`, `onPaginationChange`, `pageSize`, `pageCount`, `rowCount` is passed or `manualPagination: true`)
`pagination` (`{ pageIndex, pageSize }`), `onPaginationChange`, `pageSize` (uncontrolled, default `10`), `manualPagination`, `rowCount`, `pageCount`, `autoResetPageIndex` (default `true` for client pagination, `false` with `manualPagination`).

**Row selection** (`withRowSelection`, inferred from `rowSelection` / `onRowSelectionChange`)
`rowSelection` (`Record<rowId, true>`), `onRowSelectionChange`, `enableRowSelection` (`boolean | (row) => boolean`), `enableMultiRowSelection` (`false` = radio), `enableSubRowSelection` (tree data: `false` selects the parent only).

**Row expansion** (`withRowExpansion`, inferred from `expanded` / `onExpandedChange` / `getSubRows`)
`expanded` (`true | Record<rowId, boolean>`), `onExpandedChange`, `getRowCanExpand`, `manualExpanding`.

**Tree data** (on with `getSubRows`)
`getSubRows: (row, index) => TData[] | undefined`, `paginateExpandedRows` (default `true`; `false` paginates top-level rows), `filterFromLeafRows`, `maxLeafRowFilterDepth`.

**Grouping** (`withGrouping`, inferred from `grouping` / `onGroupingChange`)
`grouping` (column ids, outermost first), `onGroupingChange`, `groupedColumnMode` (`'reorder'` default: grouped columns move first; `'remove'`: hidden; `false`: stay in place). Server-side: `tableOptions: { manualGrouping: true }`.

**Columns**
- Visibility: `withColumnVisibility`, `columnVisibility`, `onColumnVisibilityChange`.
- Order (header drag): `withColumnReorder`, `columnOrder`, `onColumnOrderChange`.
- Sizing (resize handles): `withColumnResizing`, `columnSizing`, `onColumnSizingChange`, `columnResizeMode` (`'onEnd'` default, `'onChange'`), `columnResizeDirection` (`'ltr' | 'rtl'`, defaults to `DirectionProvider`).
- Pinning: `withColumnPinning`, `columnPinning` (`{ start: string[], end: string[] }`), `onColumnPinningChange`.

**Row pinning** (`withRowPinning`, inferred from `rowPinning` / `onRowPinningChange` / `enableRowPinning`)
`rowPinning` (`{ top: string[], bottom: string[] }`), `onRowPinningChange`, `enableRowPinning` (`boolean | (row) => boolean`), `keepPinnedRows` (pinned rows stay visible through filtering and pagination, default `true`).

**Row reorder** (`withRowReorder`, inferred from `onRowOrderChange`; not available with tree data or grouping; disables sorting)
`onRowOrderChange: (reorderedData: TData[]) => void`. Pointer only; also unavailable with `virtualize` and list view.

**Cell selection** (`withCellSelection`, inferred from `cellSelection` / `onCellSelectionChange`)
`cellSelection`, `onCellSelectionChange`. Cells become the focus targets. Exclude a column with `enableCellSelection: false`.

**Row numbers**: `withRowNumbers` (numbers continue across pages).

**Editing** (on when `editingMode` is set): see [Editing](#editing).

---

## Store

`DataGridStore<TData>` returned by `useDataGrid`:

| Member | Description |
|---|---|
| `table` | TanStack table instance (`DataGridTable<TData>`); its identity changes between renders |
| `with*` booleans | Resolved feature flags (`withSorting`, `withPagination`, `withRowSelection`, `withTreeData`, `withEditing`…) |
| `getSorting()`, `getColumnFilters()`, `getGlobalFilter()`, `getPagination()`, `getRowSelection()`, `getExpanded()`, `getGrouping()`, `getColumnVisibility()`, `getColumnOrder()`, `getColumnSizing()`, `getColumnPinning()`, `getRowPinning()`, `getCellSelection()`, `getEditing()` | Stable getters of the current state; the same values are also plain fields (`store.sorting`…) |
| `setColumnFilter(id, value)` | Sets one column filter; `''`, `null`, `undefined` remove it; ignored for columns that cannot filter |
| `setColumnFilters(updater)`, `resetColumnFilters()` | Replace or clear all column filters |
| `getColumnFilterValue(id)` | Current filter value of a column (`unknown`, cast it) |
| `setGlobalFilter(value)` | Global search value |
| `getFacetedUniqueValues(id)` | `{ value, label }[]`, stringified, sorted, arrays flattened; empty without `withFaceting` |
| `getFacetedMinMaxValues(id)` | `[min, max]` or `undefined` without `withFaceting` |
| `getSize()`, `setSize(size)` | Grid density |
| `getControlSize()` / `controlSize` | `'xs' | 'sm' | 'md'` for controls rendered inside the grid |
| `editingMode` | `'cell' | 'row' | undefined` |
| `scrollToRow(index)` | Scrolls to a row of `table.getRowModel().rows` (works with virtualization) |
| `scrollToColumn(index)`, `getScrollPosition()`, `scrollContainerRef` | Horizontal scroll helpers and the scroll container element |
| `aggregatedColumnIds`, `groupedColumnsFirst`, `onRowOrderChange` | Internal wiring, read-only |

---

## DataGrid props

`store` or `data` + `columns` (internal store with defaults only). Everything else:

**Frame and rows**: `withTableBorder` (default `true`), `radius`, `borderColor`, `withRowBorders` (`boolean | 'subtle'`, default `true`), `withColumnBorders` (`boolean | 'data'`), `striped` (`boolean | 'odd' | 'even'`), `stripedColor`, `highlightOnHover`, `highlightOnHoverColor`, `tabularNums`, `tableLayout` (`'fixed'` default | `'auto'`), `textOverflow` (`'ellipsis'` default | `'wrap'` | `'clip'`).

**Header**: `stickyHeader`, `stickyHeaderOffset` (number → rem), `sortIndicator` (`'hover'` default | `'always'`), `sortIndicatorPosition` (`'trailing'` default | `'inline'`), `sortedIcon` (must point down, rotated for ascending), `unsortedIcon`, `withColumnMenu`, `columnMenuItems: (column) => ReactNode`.

**Rows**: `onRowClick(row, event)`, `onRowDoubleClick(row, event)`, `onCellClick(cell, event)`, `selectOnRowClick` (click selects, Shift + click range, Ctrl/Cmd + click toggles), `expandOnRowClick`, `renderExpandedRow: ({ row }) => ReactNode`, `withTintedExpandedRows`, `withTintedGroupRows`, `withTreeLines` (default `true`), `withFloatingEditActions` (row editing only).

**States**: `loading`, `loadingVariant` (`'overlay'` default | `'bar'` | `'skeleton'`), `skeletonRowCount` (default `10`, page size with pagination), `loadingOverlayProps`, `emptyState: ReactNode | (payload: DataGridEmptyStatePayload) => ReactNode` with payload `{ rowCount, filteredRowCount, isFiltered, table }` (`rowCount` is the `rowCount` option for server-side grids).

**Scrolling and virtualization**: `height` (scrolls inside the frame; required for row virtualization), `virtualize` (`'rows' | 'columns' | 'rows,columns'`), `virtualScrollConfig` (`{ overscan?, estimateSize?(index) }`, overscan `10`), `virtualColumnConfig` (same shape), `estimateRowHeight`, `getRowHeight: (row) => number | 'auto'` (`'auto'` measures wrapped rows), `onScrollToBottom` (fires within 50px of the bottom, on every scroll event there), `withScrollArea` (default `true`; ignored with `virtualize` and list view), `scrollAreaProps`.

**List view**: `listView` (`true` = `'cards'` | `'flat'`), `renderListItem: ({ row }) => ReactNode`. No editing or row reorder in list view; tree rows are flat.

**Other**: `labels: Partial<DataGridLabels>`, `classNames`, `styles`, `vars`, `unstyled`. No `size` prop: size is a `useDataGrid` option.

---

## Compound components

Children of `DataGrid`. `Toolbar` and `SelectionBar` render above the table, everything else below.

| Component | Props |
|---|---|
| `DataGrid.Toolbar` | `children` replace the default content (global filter with `withGlobalFilter`, column visibility toggle with `withColumnVisibility`, export menu — always). Use `<div style={{ flex: 1 }} />` as a spacer |
| `DataGrid.GlobalFilter` | `placeholder`, `textInputProps` |
| `DataGrid.ColumnVisibilityToggle` | `menuProps`, `children` (button label). Lists hideable data columns |
| `DataGrid.ExportButton` | `formats` (`('csv' \| 'excel' \| 'print' \| 'copy')[]`, one format renders a plain button), `fileName` (default `'data'`), `rows` (`'all'` default \| `'filtered'` \| `'selected'` \| `'page'`), `columns` (`'visible'` default \| `'all'` \| `string[]`), `csvOptions`, `excelOptions`, `printOptions`, `copyOptions`, `menuProps`, `onExport(format)`, `children` (label) |
| `DataGrid.RowCount` | Text such as `18 rows` / `5 of 18 rows` |
| `DataGrid.SelectionBar` | `children` (bulk actions), `floating` (overlays the rows, toolbar stays), `withCloseButton` (default `true`), `closeButtonProps` |
| `DataGrid.Footer` | `statusFormat` (`'compact'` default \| `'long'`), `pagination` (`'pages'` default \| `'arrows'` \| `'none'`), `withPageSize` (default `true`), `pageSizeOptions` (default `[10, 25, 50, 100]`), `selectProps`, `paginationProps`, `children` (replace the default content). Narrow grids switch to a compact layout automatically |
| `DataGrid.ColumnMenu` | `column` (required), `menuProps`, `children` (items after the built-in ones). For custom `header` renderers |

A footer built without `DataGrid.Footer` must set `--dg-footer-height` on its element so a floating
selection bar stays above it.

---

## Column definition and meta

TanStack column options that DataGrid uses: `accessorKey`, `accessorFn`, `id`, `header`, `cell`,
`footer`, `columns` (group), `size`, `minSize`, `maxSize`, `enableSorting`, `sortFn` (built-in name:
`alphanumeric`, `alphanumericCaseSensitive`, `text`, `textCaseSensitive`, `datetime`, `basic`, or a
function `(rowA, rowB, columnId) => number`), `sortDescFirst`, `enableColumnFilter`, `filterFn`,
`enableGlobalFilter`, `enableHiding`, `enableResizing`, `enablePinning`, `enableGrouping`,
`aggregationFn`, `aggregatedCell`, `enableCellSelection`, `spanRows` (`true` or
`({ anchorValue, value, anchorRow, … }) => boolean`), `spanColumns` (`({ row }) => number`,
`Infinity` spans the rest), `enableCellSpanning`.

`meta` (`DataGridColumnMeta`):

| Field | Description |
|---|---|
| `label` | Text label for visibility menu, list view, group rows, export, editor `aria-label`. Falls back to a string `header`, then the id |
| `align` | `'start' \| 'center' \| 'end'`; `end` adds tabular figures |
| `type: 'actions'` | Row actions column: 80px, end-aligned, not sortable, filterable, resizable, exported or editable |
| `disableColumnMenu`, `disableEditing`, `disableExport` | Per-column opt-outs |
| `aggregationLabel`, `formatAggregatedValue(value, rows)` | Totals row label and formatting |
| `validate(value, row)` | Returns an error node or `null`; blocks the save |
| `editComponent(props: DataGridEditComponentProps)` | Custom editor |
| `utility` | Set by the grid on its own columns: `'reorder' \| 'select' \| 'expand' \| 'rowNumber'` |

`UTILITY_COLUMN_IDS`: `{ reorder: '__reorder__', select: '__select__', expand: '__expand__', rowNumber: '__rowNumber__' }`.

---

## Editing

`useDataGrid` options: `editingMode` (`'cell' | 'row'`), `editTrigger` (`'doubleClick'` default |
`'click'`), `onEditStart({ row, columnId })`, `onEditSave({ row, newRow, oldRow, changedColumnIds })`
(may return a promise), `onEditSaveError(error, { row, newRow })`, `onEditCancel({ row })`,
`getCellStatus({ row, columnId, value }) => 'dirty' | 'invalid' | undefined`, `editing`,
`onEditingChange`.

`newRow` has the drafts written through `accessorKey` (dot paths update nested objects); for
`accessorFn` columns the value lands on `newRow[column.id]`.

```ts
interface DataGridEditingState {
  rowId: string;
  columnId: string | null;
  values: Record<string, unknown>;        // changed columns only
  status?: 'saving' | 'rejected';
}

interface DataGridEditComponentProps<TData, TValue> {
  value: unknown;
  onChange: (value: unknown) => void;
  onSave: () => void;
  onCancel: () => void;
  error: ReactNode | undefined;
  cell: DataGridCell<TData, TValue>;
}
```

APIs added by `editingFeature`:

- Table: `startEditing(rowId, columnId?)`, `saveEditing()`, `cancelEditing()`, `setEditing(updater)`
- Row: `getCanEdit()`, `getIsEditing()`, `getIsSaving()`, `startEditing(columnId?)`, `saveEditing()`, `cancelEditing()`
- Column: `getCanEdit()`
- Cell: `getCanEdit()`, `getIsEditing()`, `getEditingValue()`, `setEditingValue(value)`, `getEditingError()`

Starting to edit another row or cell saves the current one first; if it cannot be saved, the new one
does not open. Keys: Enter/F2 on a focused row or cell start editing, Enter saves, Escape cancels, Tab
moves between editors in row mode, blur saves in cell mode, outside click saves in row mode. Custom
editors decide which keys call `onSave` / `onCancel`.

---

## Filters

- Built-in `filterFn` names (TanStack v9): `includesString`, `includesStringSensitive`, `equalsString`, `equalsStringSensitive`, `startsWith`, `endsWith`, `equals` (`===`), `weakEquals` (`==`), `inNumberRange` (`[min, max]`), `inDateRange`, `between`, `betweenInclusive`, `empty`, `notEmpty`, `arrHas` (scalar cell equals one of the filter values), `arrIncludes`, `arrIncludesSome`, `arrIncludesAll` (cell value is an array).
- Custom: `filterFn: (row, columnId, filterValue) => boolean`, typed `DataGridFilterFn<T>`.
- `createOperatorFilterFn(operators)` builds a `filterFn` that reads `{ operator, value }` (`OperatorFilterValue`). Operator sets: `stringOperators` (`contains`, `equals`, `startsWith`, `endsWith`, `isEmpty`, `isNotEmpty`), `numberOperators` (`eq`, `neq`, `gt`, `lt`, `gte`, `lte`), `booleanOperators` (`isTrue`, `isFalse`). Each item is `{ label, value, filterFn, valueless? }`; `valueless` operators ignore the input value. An empty value is treated as no filter.
- `fuzzyFilter` as `globalFilterFn` (or a column `filterFn`), `fuzzySort` as the column `sortFn` to sort by match rank.

---

## Export and autosize helpers

All take the TanStack table (`store.table`):

```ts
exportToCsv(table, { fileName?, delimiter?, includeHeaders?, rows?, columns?, valueFormatter?(value, columnId) });
formatCsv(table, options?): string;
exportToExcel(table, { fileName?, sheetName?, includeHeaders?, rows?, columns?, valueFormatter? }); // .xls (SpreadsheetML)
exportToPrint(table, { title?, rows?, columns?, valueFormatter? });
copyToClipboard(table, { rows?, columns?, includeHeaders?, valueFormatter? }): Promise<void>; // TSV, 'selected' falls back to the page
autosizeColumns(table, containerElement, { columnIds?, includeHeaders?, minWidth?, maxWidth? });
```

`rows`: `'all' | 'filtered' | 'selected' | 'page'`; `columns`: `'visible' | 'all' | string[]`.
Utility columns, actions columns and `meta.disableExport` columns are never exported.
`autosizeColumns` measures rendered cells; pass the DataGrid root element (`ref`) as the container.

---

## State persistence

```ts
useDataGridState({
  store,
  stateStorageKey: 'orders-grid',
  persistedState: ['sorting', 'columnVisibility', 'columnOrder', 'columnSizing', 'columnPinning', 'size'],
});
```

Restores the listed slices from `localStorage` on mount and writes changes (debounced). Keys:
`sorting`, `columnFilters`, `globalFilter`, `pagination`, `columnSizing`, `columnPinning`,
`columnVisibility`, `columnOrder`, `rowSelection`, `expanded`, `grouping`, `rowPinning`, `size`. For
URL params or server storage, use controlled state instead.

---

## Labels

`labels` on `DataGrid` (all optional, `{token}` placeholders): `globalFilterPlaceholder`,
`columnVisibilityLabel`, `rowNumber`, `selectAll`, `selectRow`, `selectGroup`, `expandRow`,
`collapseRow`, `columnMenu`, `columnMenuSortAsc`, `columnMenuSortDesc`, `columnMenuClearSort`,
`columnMenuPinLeft`, `columnMenuPinRight`, `columnMenuUnpin`, `columnMenuHide`, `columnMenuGroupBy`,
`columnMenuUngroup`, `columnMenuResetSize`, `columnMenuMoveLeft`, `columnMenuMoveRight`,
`dragToReorder`, `pageSize` (`{count} / page`), `pageSizeLabel`, `footerRange`
(`{from}–{to} of {total}`), `footerRangeLong`, `footerRows`, `footerSelected`, `footerPage`
(`Page {page} of {total}`), `footerPageUnknownTotal`, `paginationPrevious`, `paginationNext`,
`exportLabel`, `exportCsv`, `exportExcel`, `exportPrint`, `exportCopy`, `rowCount` (`{count} rows`),
`rowCountFiltered` (`{filtered} of {count} rows`), `selectionBarSelected`, `selectionBarClear`,
`aggregationSum`, `aggregationCount`, `aggregationMean`, `aggregationMin`, `aggregationMax`,
`aggregationMedian`, `aggregationUnique`, `aggregationUniqueCount`, `aggregationExtent`, `saveRow`,
`cancelRow`. Defaults: `DEFAULT_LABELS`.

---

## Styles API and CSS variables

Selectors: `root`, `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`, `headerCell`, `headerLabel`,
`sortIcon`, `resizeHandle`, `resizeGuide`, `columnMenu`, `dragHandle`, `dropIndicator`, `dragGhost`,
`toolbar`, `globalFilter`, `columnVisibilityToggle`, `exportButton`, `rowCount`, `selectionBar`,
`selectionBarCount`, `selectionBarClose`, `footer`, `footerStatus`, `footerPageSize`,
`footerPagination`, `loadingOverlay`, `loadingBar`, `skeleton`, `emptyState`, `selectionCheckbox`,
`selectAllCheckbox`, `expandIcon`, `expandedRow`, `rowNumber`, `editCell`, `editActions`,
`groupHeader`, `groupToggle`, `aggregationCell`, `aggregationLabel`, `aggregationValue`, `treeIndent`,
`treeToggle`, `treeLabel`, `listView`, `listItem`, `scrollContainer`, `virtualScrollContainer`,
`virtualGrid`, `virtualGridHeader`, `virtualRow`, `virtualCell`.

Row and cell data attributes for CSS: `data-selected`, `data-striped`, `data-pinned`,
`data-expanded`, `data-group-row`, `data-editing`, `data-align`, `data-utility`, `data-sortable`.

CSS variables on `root`: `--dg-font-size`, `--dg-row-height`, `--dg-header-height`,
`--dg-cell-padding-x`, `--dg-cell-padding-y`, `--dg-control-size`, `--dg-icon-size`,
`--dg-footer-height`, `--dg-radius`, `--dg-border-color`, `--dg-row-border-color`,
`--dg-striped-color`, `--dg-hover-color`, `--dg-selected-color`, `--dg-dirty-color`,
`--dg-invalid-color`.

Theme defaults: `createTheme({ components: { DataGrid: DataGrid.extend({ defaultProps, classNames }) } })`.

---

## Useful TanStack APIs

Through `store.table` (`DataGridTable<T>`):

- Rows: `getRowModel().rows`, `getSelectedRowModel().rows`, `getFilteredRowModel().rows`, `getRowCount()`, `getRow(id)`, `toggleAllRowsExpanded(value?)`, `getIsAllRowsExpanded()`, `resetRowSelection()`.
- Pages: `firstPage()`, `previousPage()`, `nextPage()`, `lastPage()`, `setPageIndex(n)`, `setPageSize(n)`, `getCanPreviousPage()`, `getCanNextPage()`, `getPageCount()`.
- Columns: `getColumn(id)`, `getAllLeafColumns()`, `toggleAllColumnsVisible(value)`, `resetColumnFilters()`, `resetGlobalFilter()`, `resetSorting()`.
- Cell selection: `getSelectedCellIds()`, `getSelectedCellCount()`, `getSelectedCellRangesData()` (`[range][row][column]`).
- State: `table.store.state.<slice>`, or `table.atoms.<slice>.get()`.
- Row: `row.id`, `row.original`, `row.getIsSelected()`, `row.toggleSelected()`, `row.getIsExpanded()`, `row.toggleExpanded()`, `row.getCanExpand()`, `row.pin('top' | 'bottom' | false)`, `row.getIsPinned()`, `row.depth`, `row.getIsGrouped()`.
- Column: `column.getIsVisible()`, `column.toggleVisibility(value?)`, `column.getCanHide()`, `column.getIsSorted()`, `column.toggleSorting(desc?)`, `column.pin('start' | 'end' | false)`, `column.getIsPinned()`, `column.getFilterValue()`, `column.setFilterValue(value)`.
