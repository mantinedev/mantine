---
name: mantine-data-grid
description: >
  Build data tables with `@mantine/data-grid` (DataGrid on TanStack Table v9). Use this skill when:
  (1) building an admin list, orders table or any table with sorting, filtering or pagination,
  (2) connecting a grid to an API with server-side sorting, filtering and pagination,
  (3) adding row selection with bulk actions, row actions or inline cell/row editing,
  (4) rendering grouped rows, tree data, pinned or resizable columns, or 10k+ rows with virtualization,
  (5) adding a toolbar, filter controls, export or a custom footer to a grid,
  or (6) any task involving `DataGrid`, `useDataGrid`, `DataGridColumnDef` or `@tanstack/react-table` inside a Mantine app.
---

# Mantine DataGrid Skill

Written for Mantine 10.x. `@mantine/data-grid` is built on TanStack Table **v9** (not v8): see
[Coming from TanStack Table v8](#coming-from-tanstack-table-v8).

## Overview

`DataGrid` renders the table, utility columns (selection, expand, row numbers, drag handle),
toolbar, footer and loading/empty states. `useDataGrid` creates the **store**: it owns the TanStack
table (`store.table`), turns features on from the options you pass and exposes state getters. Filter
inputs, bulk actions and row actions are your own Mantine components wired to the store.

Install `@mantine/data-grid` with its peers `@tanstack/react-table`, `@tanstack/react-virtual` and
`@tanstack/match-sorter-utils`, and import `@mantine/data-grid/styles.css` after `@mantine/core/styles.css`.

## DataGrid or Table

| Need | Use |
|---|---|
| Static, read-only rows that fit on one screen, no interaction | `Table` from `@mantine/core` (`Table.ScrollContainer` for width) |
| Any of: sort, filter, search, paginate, select, edit, resize/pin/hide columns, group, tree, export, 1000+ rows | `DataGrid` |
| Rows that are really cards (avatars, multi-line content, actions) on every screen | A list of `Card`/`Paper` components; `DataGrid` with `listView` only when the same data also needs a table |

`<DataGrid data={data} columns={columns} />` works without a store, but only with defaults. Every
feature (pagination, selection, editing, size, controlled state) is an option of `useDataGrid`, so
create the store as soon as you need one.

## Columns

```tsx
interface Order {
  id: string;
  customer: string;
  status: 'paid' | 'pending' | 'refunded';
  total: number;
  createdAt: string;
}

const columns: DataGridColumnDef<Order>[] = [
  { accessorKey: 'customer', header: 'Customer', enableSorting: true, size: 220 },
  {
    accessorKey: 'status',
    header: 'Status',
    filterFn: 'equals',
    cell: ({ getValue }) => <StatusBadge status={getValue<Order['status']>()} />,
  },
  {
    accessorKey: 'total',
    header: 'Total',
    enableSorting: true,
    meta: { align: 'end' },
    cell: ({ getValue }) => currency.format(getValue<number>()),
  },
  { accessorKey: 'createdAt', header: 'Created', enableSorting: true, sortFn: 'datetime' },
];
```

- Accessor columns (`accessorKey` with dot paths, or `accessorFn` + `id`) can be sorted, filtered, grouped and edited; display columns (`id` only) hold buttons; group columns (`columns: [...]`) build multi-level headers.
- `meta` holds the grid settings: `label` (used by visibility menu, list view, export, group rows; set it when `header` is not a string), `align: 'end'` for numbers (adds tabular figures), `type: 'actions'`, `disableEditing`, `disableExport`, `disableColumnMenu`, `validate`, `editComponent`, `aggregationLabel`, `formatAggregatedValue`.
- `size`, `minSize`, `maxSize` are pixels (defaults 150 / 20 / unlimited). Defaults for all columns: `tableOptions: { defaultColumn: { size: 180 } }`.
- Type columns as `DataGridColumnDef<T>[]` or build them with `createDataGridColumnHelper<T>()`. Untyped arrays defined outside `useDataGrid` widen `accessorKey` to `string` and fail to type-check.

## Core patterns

### Client-side grid: sort, search, paginate

```tsx
function OrdersTable({ orders }: { orders: Order[] }) {
  const store = useDataGrid({
    data: orders,
    columns,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    withColumnVisibility: true,
    pageSize: 25,
  });

  return (
    <DataGrid store={store} highlightOnHover>
      <DataGrid.Toolbar />
      <DataGrid.Footer />
    </DataGrid>
  );
}
```

`DataGrid.Toolbar` without children renders search (`withGlobalFilter`), the columns menu
(`withColumnVisibility`) and the export menu. `DataGrid.Footer` renders status, page size and pages;
rows are paginated as soon as `pageSize` is set, so a paginated grid always needs it (or own controls).

### Controlled state

Each slice has a `<slice>` + `on<Slice>Change` pair on `useDataGrid` (`sorting`, `columnFilters`,
`globalFilter`, `pagination`, `rowSelection`, `expanded`, `grouping`, `columnVisibility`,
`columnOrder`, `columnSizing`, `columnPinning`, `rowPinning`, `cellSelection`, `editing`); passing
either half turns the feature on. Uncontrolled state is read with `store.getSorting()`,
`store.getPagination()` and the other getters. State types come from `@tanstack/react-table`
(`SortingState`, `ColumnFiltersState`, `PaginationState`, `RowSelectionState` = `Record<id, true>`).

### Server-side data

```tsx
const [sorting, setSorting] = useState<SortingState>([]);
const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 25 });
const [debouncedFilters] = useDebouncedValue(columnFilters, 300);
const query = useOrdersQuery({ sorting, columnFilters: debouncedFilters, pagination });
const resetPage = () => setPagination((current) => ({ ...current, pageIndex: 0 }));

const store = useDataGrid({
  data: query.data?.rows ?? EMPTY_ROWS,
  columns,
  getRowId: (row) => row.id,
  manualSorting: true,
  sorting,
  onSortingChange: (updater) => { setSorting(updater); resetPage(); },
  manualFiltering: true,
  columnFilters,
  onColumnFiltersChange: (updater) => { setColumnFilters(updater); resetPage(); },
  manualPagination: true,
  pagination,
  onPaginationChange: setPagination,
  rowCount: query.data?.total ?? 0,
});

<DataGrid store={store} loading={query.isFetching} loadingVariant="bar">
  <DataGrid.Toolbar>
    <OrderFilters store={store} />
  </DataGrid.Toolbar>
  <DataGrid.Footer />
</DataGrid>
```

`EMPTY_ROWS` is a module-level `[]`. `rowCount` drives the footer range and page count; pass
`pageCount` when only the page count is known, or neither for an unknown total (`Page 3` with
previous/next).

### Filtering

The grid stores filters but renders no filter inputs: put Mantine inputs in `DataGrid.Toolbar` (or a
`Popover` from it) bound to `store.getColumnFilterValue(id)` / `store.setColumnFilter(id, value)`
(`''`, `null`, `undefined` remove it; `store.resetColumnFilters()` clears all). Filtering turns on for
columns with `enableColumnFilter: true` or a `filterFn`. `withFaceting: true` adds
`store.getFacetedUniqueValues(id)` (`Select` data) and `store.getFacetedMinMaxValues(id)`
(`RangeSlider` bounds).

### Selection and bulk actions

```tsx
const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
const store = useDataGrid({
  data,
  columns,
  getRowId: (row) => row.id,
  rowSelection,
  onRowSelectionChange: setRowSelection,
  pageSize: 25,
});

<DataGrid store={store}>
  <DataGrid.Toolbar />
  <DataGrid.SelectionBar>
    <Button size={store.getControlSize()} variant="default" onClick={archiveSelected}>
      Archive
    </Button>
  </DataGrid.SelectionBar>
  <DataGrid.Footer />
</DataGrid>
```

`archiveSelected` sends `Object.keys(rowSelection)` to the API, then calls `setRowSelection({})`.
`DataGrid.SelectionBar` replaces the toolbar while rows are selected (`floating` keeps the toolbar and
floats the bar over the rows). Selected row objects: `store.table.getSelectedRowModel().rows`.
`enableMultiRowSelection: false` gives radio selection, `enableRowSelection: (row) => boolean`
disables some rows, `selectOnRowClick` on `DataGrid` selects by clicking the row.

### Row actions

A display column with `meta: { type: 'actions' }` and `cell: ({ row }) => <OrderActions order={row.original} />`
is end-aligned, 80px wide, not sortable, filterable, resizable, editable or exported. Use
`ActionIcon variant="default"` with an `aria-label`, or a kebab `Menu` for more than two actions. Row
navigation goes in `onRowClick` on `DataGrid` (also fired by Enter on a focused row); clicks on
action buttons bubble to the row, so stop propagation in the actions cell when the row is clickable.

### Editing

```tsx
const [data, setData] = useState(initialOrders);
const store = useDataGrid({
  data,
  columns,
  getRowId: (row) => row.id,
  editingMode: 'cell',
  pageSize: 25,
  autoResetPageIndex: false,
  onEditSave: async ({ newRow, changedColumnIds }) => {
    await api.updateOrder(newRow.id, pick(newRow, changedColumnIds));
    setData((current) => current.map((row) => (row.id === newRow.id ? newRow : row)));
  },
  onEditSaveError: (error) => notifications.show({ color: 'red', message: String(error) }),
});
```

`editingMode: 'cell'` edits one cell (double-click, or `editTrigger: 'click'`; Enter or blur saves,
Escape cancels). `editingMode: 'row'` edits a whole row, started by double-click or
`row.startEditing()` from an actions column. A returned promise keeps the editor open until it
settles; a rejection keeps the drafts and calls `onEditSaveError`. `meta.validate` blocks invalid
values, `meta.editComponent` replaces the text input, `getCellStatus` tints `dirty`/`invalid` cells.

### Empty, loading and error states

```tsx
<DataGrid
  store={store}
  loading={query.isFetching}
  loadingVariant="bar"
  emptyState={({ isFiltered, table }) =>
    query.isError ? (
      <ErrorState onRetry={query.refetch} />
    ) : isFiltered ? (
      <NoMatches onClear={() => table.resetColumnFilters()} />
    ) : (
      <NoOrders />
    )
  }
/>
```

`loading` with no rows shows skeleton rows; with rows it shows `loadingVariant`: `overlay` (default,
blocks interaction), `bar` (rows stay usable; use for refetch, pagination and infinite scroll) or
`skeleton`. `emptyState` is not shown while `loading` is set. There is no error prop: render the error
through `emptyState` (data is empty after a failed first load) or above the grid when stale rows stay.

## Rules

Load `mantine-ui` together with this skill (and `mantine-testing` for tests): button variants, text
hierarchy and surfaces come from there.

- **`data` keeps its identity between renders.** Every new array resets the page index (client-side
  pagination), expanded rows and cell selection. Keep it in state, a query cache or `useMemo`; never
  pass `rows.filter(...)` or `query.data?.rows ?? []` inline (use a module-level empty array).
- **Columns are defined once.** Put them at module level or in `useMemo`. `cell`, `header` and
  `aggregatedCell` functions are rendered as React components, so a columns array rebuilt on every
  render remounts every cell (open menus close, inputs lose focus). Values a cell needs from the
  component go through `row.original`, React context, or `store` getters such as
  `store.getControlSize()`, which are stable.
- **Rows have ids.** Pass `getRowId: (row) => row.id` whenever rows have a key. Without it, ids are
  array indexes and selection, pinning, expansion and editing point at the wrong rows after sorting,
  filtering, deleting or changing the server page.
- **Sorting is opt-in per column.** A column is sortable only with `enableSorting: true`;
  `withSorting: true` alone makes no column sortable. `withRowReorder` turns sorting off.
- **The filter function matches the shape of the filter value.** Faceted values are strings, so
  `filterFn: 'equals'` never matches number or boolean cells: convert the value in `onChange` or use
  `weakEquals` for numbers. A `MultiSelect` over a scalar column needs `filterFn: 'arrHas'`;
  `arrIncludesSome` only matches cells whose value is an array (tags).
- **Server-side grids reset the page themselves.** With `manualPagination`, the page index is not
  reset when sorting or filters change: set `pageIndex: 0` in `onSortingChange` and
  `onColumnFiltersChange`. Debounce text filters before they reach the request, not before
  `setColumnFilter` (the input must stay responsive). `withFaceting` sees only the current page:
  load filter options from the API.
- **Editing never changes `data`.** Write `newRow` back in `onEditSave`. The default editor is a text
  input and saves strings: give number, date and enum columns an `editComponent` (`NumberInput`,
  `DateInput`, `Select`). With client pagination, set `autoResetPageIndex: false` so a save does not
  jump to page 1; with tree data, `tableOptions: { autoResetExpanded: false }` so it does not
  collapse the tree.
- **Size belongs to the store.** `size` is a `useDataGrid` option (`xs`–`xl`, default `sm`), not a
  `DataGrid` prop. Buttons and inputs placed in the toolbar, selection bar, footer and cells use
  `size={store.getControlSize()}`.
- **Pinning state has both keys.** `columnPinning` is `{ start: [], end: [] }` and `rowPinning` is
  `{ top: [], bottom: [] }`; `left`/`right` are TanStack v8 names. Utility columns are pinned first
  by the grid; do not list them. Row pinning needs `getRowId`.
- **Code that walks columns skips utility columns.** `table.getAllLeafColumns()` includes the
  selection, expand, row number and drag columns: filter out `column.columnDef.meta?.utility` in
  custom visibility menus, exports and settings panels. Use `getColumnLabel(column)` for labels.
- **Select-all works per page.** With pagination on, the header checkbox selects the current page
  only. Selection keeps ids of rows that were deleted or filtered out: clear it after a bulk action.
- **Virtualization needs `height`.** `virtualize="rows"` (or `"columns"`, `"rows,columns"`) renders
  `div`s with grid roles, a sticky header, and no row pinning, row reorder or cell spanning.
  `onScrollToBottom` fires on every scroll event near the bottom: ignore it while a page is loading.

## Coming from TanStack Table v8

`table.getState()` → `store.table.store.state` or the store getters; `sortingFn` → `sortFn`;
`VisibilityState` → `ColumnVisibilityState`; pinning `left`/`right` → `start`/`end`; there are no
`get*RowModel()` options (all row models are registered). Other TanStack options go through
`tableOptions`. Bound types: `DataGridTable<T>`, `DataGridRow<T>`, `DataGridColumn<T>`,
`DataGridCell<T>`, `DataGridFilterFn<T>`, `DataGridSortFn<T>`.

## References

Read the one that covers your task before building beyond the basic grid above:

- **[`references/patterns.md`](references/patterns.md)** — complete examples: server-side grid with URL state, filter popover with faceted options, operator filters, filter chips, fuzzy search, column visibility/pinning/sizing/reorder with persisted state, column menu, grouping with totals, tree data, row expansion detail panel, row editing with an actions column and custom editors, virtualization and infinite scroll, export, custom toolbar, selection bar and footer, list view on mobile, Styles API and theme defaults
- **[`references/api.md`](references/api.md)** — every `useDataGrid` option and store member by feature, `DataGrid` props, compound components and their props, column `meta`, editing types and table/row/cell editing APIs, filter and export helpers, labels, CSS variables, Styles API selectors

## Looking things up

If the references do not cover what you need, do not guess:

- If the Mantine MCP server (`@mantine/mcp-server`) is connected, use `search_docs` and `get_item_doc`
- Otherwise fetch `https://mantine.dev/llms.txt` and open the DataGrid pages (`https://mantine.dev/data-grid/getting-started/` and the feature pages next to it). TanStack-level APIs (`row.getIsSelected()`, `column.toggleVisibility()`) are documented at `https://tanstack.com/table/latest` (v9)
