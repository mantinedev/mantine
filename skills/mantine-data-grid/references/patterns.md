# DataGrid Patterns

Every pattern assumes the imports from `@mantine/core`, `@mantine/hooks`, `@mantine/data-grid` and
the state types from `@tanstack/react-table`, and a row type with an `id: string`.

## Table of Contents
- [Server-side grid](#server-side-grid)
- [Filter popover with faceted options](#filter-popover-with-faceted-options)
- [Operator filters](#operator-filters)
- [Active filter chips](#active-filter-chips)
- [Fuzzy search](#fuzzy-search)
- [Column visibility, order, sizing and pinning with saved layout](#column-visibility-order-sizing-and-pinning-with-saved-layout)
- [Custom header with column menu](#custom-header-with-column-menu)
- [Row actions menu](#row-actions-menu)
- [Selection bar with bulk actions](#selection-bar-with-bulk-actions)
- [Row editing with custom editors](#row-editing-with-custom-editors)
- [Detail panel (row expansion)](#detail-panel-row-expansion)
- [Grouping with totals](#grouping-with-totals)
- [Tree data](#tree-data)
- [Virtualization and infinite scroll](#virtualization-and-infinite-scroll)
- [Export](#export)
- [Custom toolbar and footer](#custom-toolbar-and-footer)
- [List view on small screens](#list-view-on-small-screens)
- [Styles API, CSS variables and theme defaults](#styles-api-css-variables-and-theme-defaults)

---

## Server-side grid

The API sorts, filters and paginates. The grid gets one page of rows plus the total count.

```tsx
interface Customer {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  mrr: number;
}

interface CustomersResponse {
  rows: Customer[];
  total: number;
}

const columns: DataGridColumnDef<Customer>[] = [
  { accessorKey: 'name', header: 'Name', enableSorting: true, enableColumnFilter: true },
  { accessorKey: 'email', header: 'Email', size: 240 },
  { accessorKey: 'plan', header: 'Plan', enableColumnFilter: true },
  { accessorKey: 'mrr', header: 'MRR', enableSorting: true, meta: { align: 'end' } },
];

const PLANS = ['free', 'pro', 'enterprise'];
const EMPTY: CustomersResponse = { rows: [], total: 0 };

function CustomersGrid() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 25 });
  const [debouncedFilters] = useDebouncedValue(columnFilters, 300);
  const [response, setResponse] = useState<CustomersResponse>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetchCustomers({ sorting, columnFilters: debouncedFilters, pagination, signal: controller.signal })
      .then((result) => {
        setResponse(result);
        setError(null);
      })
      .catch((reason) => {
        if (!controller.signal.aborted) {
          setError(String(reason));
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [sorting, debouncedFilters, pagination]);

  const resetPage = () => setPagination((current) => ({ ...current, pageIndex: 0 }));

  const store = useDataGrid({
    data: response.rows,
    columns,
    getRowId: (row) => row.id,
    manualSorting: true,
    sorting,
    onSortingChange: (updater) => {
      setSorting(updater);
      resetPage();
    },
    manualFiltering: true,
    columnFilters,
    onColumnFiltersChange: (updater) => {
      setColumnFilters(updater);
      resetPage();
    },
    manualPagination: true,
    pagination,
    onPaginationChange: setPagination,
    rowCount: response.total,
  });

  return (
    <DataGrid
      store={store}
      loading={loading}
      loadingVariant="bar"
      emptyState={({ isFiltered }) => (
        <Stack align="center" gap={4} py="xl">
          <Text fw={500}>{error ? 'Could not load customers' : isFiltered ? 'No customers match the filters' : 'No customers yet'}</Text>
          {error && <Text size="sm">{error}</Text>}
        </Stack>
      )}
    >
      <DataGrid.Toolbar>
        <TextInput
          size={store.getControlSize()}
          placeholder="Search by name"
          value={(store.getColumnFilterValue('name') as string) ?? ''}
          onChange={(event) => store.setColumnFilter('name', event.currentTarget.value)}
        />
        <Select
          size={store.getControlSize()}
          placeholder="Any plan"
          clearable
          data={PLANS}
          value={(store.getColumnFilterValue('plan') as string) ?? null}
          onChange={(value) => store.setColumnFilter('plan', value)}
        />
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}
```

- `response.rows` keeps its identity until the next response, so the grid does not reset on every render.
- The debounce sits between the state and the request; the input itself updates immediately.
- Filter options come from the API or constants: `withFaceting` would only see the current page.
- With a query library, pass `query.data?.rows ?? EMPTY.rows` and `loading={query.isFetching}`.
- To keep the state in the URL, derive `sorting`, `columnFilters` and `pagination` from search params and write them back in the change handlers; resolve updaters with `typeof updater === 'function' ? updater(current) : updater`.

---

## Filter popover with faceted options

Client-side data, a **Filters** button with a count, one control per filterable column.

```tsx
const columns: DataGridColumnDef<Employee>[] = [
  { accessorKey: 'name', header: 'Name', enableColumnFilter: true },
  { accessorKey: 'department', header: 'Department', filterFn: 'arrHas' },
  { accessorKey: 'status', header: 'Status', filterFn: 'equals' },
  { accessorKey: 'salary', header: 'Salary', filterFn: 'inNumberRange', meta: { align: 'end' } },
];

function EmployeesGrid({ employees }: { employees: Employee[] }) {
  const store = useDataGrid({ data: employees, columns, getRowId: (row) => row.id, withFaceting: true, pageSize: 25 });
  const activeCount = store.getColumnFilters().length;
  const [min, max] = store.getFacetedMinMaxValues('salary') ?? [0, 0];

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Popover position="bottom-start" shadow="md">
          <Popover.Target>
            <Button
              size={store.getControlSize()}
              variant="default"
              rightSection={activeCount > 0 ? <Badge size="xs" circle>{activeCount}</Badge> : null}
            >
              Filters
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="sm" w={260}>
              <TextInput
                label="Name"
                placeholder="Contains"
                value={(store.getColumnFilterValue('name') as string) ?? ''}
                onChange={(event) => store.setColumnFilter('name', event.currentTarget.value)}
              />
              <MultiSelect
                label="Department"
                placeholder="Any"
                data={store.getFacetedUniqueValues('department')}
                value={(store.getColumnFilterValue('department') as string[]) ?? []}
                onChange={(value) => store.setColumnFilter('department', value.length ? value : undefined)}
              />
              <Select
                label="Status"
                placeholder="Any"
                clearable
                data={store.getFacetedUniqueValues('status')}
                value={(store.getColumnFilterValue('status') as string) ?? null}
                onChange={(value) => store.setColumnFilter('status', value)}
              />
              <RangeSlider
                min={min}
                max={max}
                step={1000}
                value={(store.getColumnFilterValue('salary') as [number, number]) ?? [min, max]}
                onChange={(value) => store.setColumnFilter('salary', value)}
              />
              <Group justify="flex-end">
                <Button size="xs" variant="default" disabled={activeCount === 0} onClick={() => store.resetColumnFilters()}>
                  Clear all
                </Button>
              </Group>
            </Stack>
          </Popover.Dropdown>
        </Popover>
        <DataGrid.RowCount />
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}
```

- `getFacetedUniqueValues` returns strings. `equals` (`===`) works for string columns; for a number
  column convert the picked value back (`Number(value)`) or use `weakEquals`.
- `arrHas` matches a scalar cell against several picked values. `arrIncludesSome` /
  `arrIncludesAll` are for cells whose value is an array (tags).
- A filter popover whose `Popover.Target` sits in a sticky or fixed header needs
  `floatingStrategy="fixed"`.

---

## Operator filters

`{ operator, value }` filters, for "Salary ≥ 50 000" or "Name starts with".

```tsx
const STRING_OPERATORS = stringOperators.map(({ value, label }) => ({ value, label }));

const columns: DataGridColumnDef<Employee>[] = [
  { accessorKey: 'name', header: 'Name', filterFn: createOperatorFilterFn(stringOperators) },
  { accessorKey: 'salary', header: 'Salary', filterFn: createOperatorFilterFn(numberOperators), meta: { align: 'end' } },
];

function NameFilter({ store }: { store: DataGridStore<Employee> }) {
  const filter = store.getColumnFilterValue('name') as OperatorFilterValue | undefined;
  const [operator, setOperator] = useState(filter?.operator ?? 'contains');
  const valueless = stringOperators.find((item) => item.value === operator)?.valueless;

  const apply = (nextOperator: string, value: unknown) => {
    const nextValueless = stringOperators.find((item) => item.value === nextOperator)?.valueless;
    store.setColumnFilter('name', nextValueless || value ? { operator: nextOperator, value } : undefined);
  };

  return (
    <Group gap={4} wrap="nowrap">
      <Select
        size={store.getControlSize()}
        w={140}
        allowDeselect={false}
        data={STRING_OPERATORS}
        value={operator}
        onChange={(next) => {
          if (next) {
            setOperator(next);
            apply(next, filter?.value);
          }
        }}
      />
      <TextInput
        size={store.getControlSize()}
        placeholder="Name"
        disabled={valueless}
        value={typeof filter?.value === 'string' ? filter.value : ''}
        onChange={(event) => apply(operator, event.currentTarget.value)}
      />
    </Group>
  );
}
```

Custom operators: pass your own `FilterOperator[]` (`{ label, value, filterFn, valueless? }`) to
`createOperatorFilterFn`. On a server-side grid send `{ operator, value }` to the API as is.

---

## Active filter chips

```tsx
<DataGrid.Toolbar>
  <FiltersPopover store={store} />
  {store.getColumnFilters().map((filter) => {
    const column = store.table.getColumn(filter.id);
    return column ? (
      <Pill
        key={filter.id}
        size={store.getControlSize()}
        withRemoveButton
        onRemove={() => store.setColumnFilter(filter.id, undefined)}
      >
        {getColumnLabel(column)}: {formatFilterValue(filter.value)}
      </Pill>
    ) : null;
  })}
  {store.getColumnFilters().length > 0 && (
    <Button size={store.getControlSize()} variant="default" onClick={() => store.resetColumnFilters()}>
      Clear all
    </Button>
  )}
</DataGrid.Toolbar>
```

`formatFilterValue` turns arrays, ranges and `{ operator, value }` objects into readable text.

---

## Fuzzy search

```tsx
const columns: DataGridColumnDef<Contact>[] = [
  { accessorKey: 'name', header: 'Name', enableSorting: true, sortFn: fuzzySort },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'id', header: 'ID', enableGlobalFilter: false },
];

const store = useDataGrid({ data: contacts, columns, getRowId: (row) => row.id, withGlobalFilter: true, globalFilterFn: fuzzyFilter });

<DataGrid store={store}>
  <DataGrid.Toolbar>
    <DataGrid.GlobalFilter placeholder="Search contacts" />
  </DataGrid.Toolbar>
</DataGrid>
```

`DataGrid.GlobalFilter` (or any input bound to `store.getGlobalFilter()` /
`store.setGlobalFilter()`) drives the search. `enableGlobalFilter: false` excludes ids and other
columns users never search by.

---

## Column visibility, order, sizing and pinning with saved layout

```tsx
const columns: DataGridColumnDef<Order>[] = [
  { accessorKey: 'number', header: 'Order', size: 120, enableHiding: false, enableSorting: true },
  { accessorKey: 'customer', header: 'Customer', size: 220, minSize: 140, enableSorting: true },
  { accessorKey: 'email', header: 'Email', size: 240 },
  { accessorKey: 'status', header: 'Status', size: 120 },
  { accessorKey: 'total', header: 'Total', size: 120, enableSorting: true, meta: { align: 'end' } },
  { id: 'actions', meta: { type: 'actions' }, cell: ({ row }) => <OrderActions order={row.original} /> },
];

function OrdersGrid({ orders }: { orders: Order[] }) {
  const store = useDataGrid({
    data: orders,
    columns,
    getRowId: (row) => row.id,
    withColumnVisibility: true,
    withColumnReorder: true,
    withColumnResizing: true,
    withColumnPinning: true,
    tableOptions: { initialState: { columnPinning: { start: ['number'], end: ['actions'] } } },
    pageSize: 25,
  });

  useDataGridState({
    store,
    stateStorageKey: 'orders-grid-layout',
    persistedState: ['columnVisibility', 'columnOrder', 'columnSizing', 'columnPinning', 'sorting', 'size'],
  });

  return (
    <DataGrid store={store} withColumnMenu height={600} stickyHeader>
      <DataGrid.Toolbar />
      <DataGrid.Footer />
    </DataGrid>
  );
}
```

- `withColumnMenu` adds a kebab menu to each data column with the items its features allow: sort,
  pin left/right/unpin, hide, group, move left/right (keyboard reorder), reset size. Add items with
  `columnMenuItems={(column) => <Menu.Item>…</Menu.Item>}`, hide it per column with
  `meta.disableColumnMenu`.
- Initial state without controlling it: `tableOptions.initialState`. Controlled pinning:
  `columnPinning` + `onColumnPinningChange`, always with both `start` and `end`.
- `enableHiding: false` keeps a column out of the visibility menu; `enableResizing: false` locks its
  width. Double-click a resize handle to fit content; `autosizeColumns(store.table, rootElement)` does
  it from code.
- A column moves only within its pin region and header group; utility columns stay first.
- Layout persisted to the server instead of `localStorage`: control the slices and save them in the
  change handlers (debounced).

---

## Custom header with column menu

```tsx
{
  accessorKey: 'customer',
  header: ({ column }) => (
    <Group justify="space-between" wrap="nowrap" gap={4}>
      <Text size="sm" fw={500} truncate>Customer</Text>
      <DataGrid.ColumnMenu column={column}>
        <Menu.Item onClick={() => openCustomerSettings()}>Display settings</Menu.Item>
      </DataGrid.ColumnMenu>
    </Group>
  ),
  meta: { label: 'Customer' },
}
```

A non-string `header` needs `meta.label`: the visibility menu, export and list view use it.

---

## Row actions menu

```tsx
function OrderActions({ order }: { order: Order }) {
  const store = useOrdersStore();

  return (
    <Box onClick={(event) => event.stopPropagation()}>
      <Menu position="bottom-end">
        <Menu.Target>
          <ActionIcon variant="default" size={store.getControlSize()} aria-label={`Actions for order ${order.number}`}>
            <IconDots size={14} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => openOrder(order.id)}>Open</Menu.Item>
          <Menu.Item onClick={() => duplicateOrder(order.id)}>Duplicate</Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red" onClick={() => confirmDelete(order)}>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
}

const columns: DataGridColumnDef<Order>[] = [
  ...dataColumns,
  { id: 'actions', meta: { type: 'actions' }, size: 56, cell: ({ row }) => <OrderActions order={row.original} /> },
];
```

`useOrdersStore()` stands for your own React context that provides the store, so `columns` stays
module-level. Clicks in a cell bubble to the row, and React events from the portalled menu bubble
through the React tree too: when the grid has `onRowClick`, `selectOnRowClick` or
`expandOnRowClick`, wrap the actions in an element with `onClick={(event) => event.stopPropagation()}`.

---

## Selection bar with bulk actions

```tsx
function InvoicesGrid({ invoices, onChange }: { invoices: Invoice[]; onChange: () => void }) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const store = useDataGrid({
    data: invoices,
    columns,
    getRowId: (row) => row.id,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: (row) => row.original.status !== 'void',
    withGlobalFilter: true,
    pageSize: 25,
  });

  const runBulk = async (action: (ids: string[]) => Promise<void>) => {
    await action(Object.keys(rowSelection));
    setRowSelection({});
    onChange();
  };

  return (
    <DataGrid store={store} selectOnRowClick>
      <DataGrid.Toolbar />
      <DataGrid.SelectionBar floating>
        <Button size={store.getControlSize()} variant="default" onClick={() => runBulk(api.markPaid)}>
          Mark as paid
        </Button>
        <Button size={store.getControlSize()} variant="default" onClick={() => runBulk(api.voidInvoices)}>
          Void
        </Button>
      </DataGrid.SelectionBar>
      <DataGrid.Footer />
    </DataGrid>
  );
}
```

- Selected rows of the loaded data: `store.table.getSelectedRowModel().rows.map((row) => row.original)`.
  On a server-side grid, `rowSelection` keys are the only record of rows on other pages.
- Single selection: `enableMultiRowSelection: false` (radios, no select-all).
- Tree data selects children with the parent; `enableSubRowSelection: false` selects the parent only.
  In a grouped grid the group checkbox toggles its rows; group rows are never in `rowSelection`.

---

## Row editing with custom editors

```tsx
const STATUSES = ['active', 'paused', 'archived'];

function NumberEditor({ value, onChange, onSave, onCancel, error, cell }: DataGridEditComponentProps<Product>) {
  return (
    <NumberInput
      variant="unstyled"
      autoFocus
      value={value as number}
      onChange={(next) => onChange(typeof next === 'number' ? next : null)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') onSave();
        if (event.key === 'Escape') onCancel();
      }}
      error={error}
      disabled={cell.row.getIsSaving()}
      aria-label={getColumnLabel(cell.column)}
    />
  );
}

function StatusEditor({ value, onChange, onSave, error, cell }: DataGridEditComponentProps<Product>) {
  return (
    <Select
      variant="unstyled"
      data={STATUSES}
      value={value as string}
      onChange={(next) => {
        onChange(next);
        onSave();
      }}
      error={error}
      aria-label={getColumnLabel(cell.column)}
    />
  );
}

const columns: DataGridColumnDef<Product>[] = [
  { accessorKey: 'sku', header: 'SKU', meta: { disableEditing: true } },
  { accessorKey: 'name', header: 'Name', meta: { validate: (value) => (String(value).trim() ? null : 'Name is required') } },
  {
    accessorKey: 'price',
    header: 'Price',
    meta: {
      align: 'end',
      editComponent: NumberEditor,
      validate: (value) => (typeof value === 'number' && value >= 0 ? null : 'Enter a price'),
    },
  },
  { accessorKey: 'status', header: 'Status', meta: { editComponent: StatusEditor } },
  {
    id: 'actions',
    meta: { type: 'actions' },
    size: 80,
    cell: ({ row }) =>
      row.getIsEditing() ? (
        <Group gap={4} justify="flex-end" wrap="nowrap">
          <ActionIcon variant="default" aria-label="Save" loading={row.getIsSaving()} onClick={() => row.saveEditing()}>
            <IconCheck size={14} />
          </ActionIcon>
          <ActionIcon variant="default" aria-label="Cancel" onClick={() => row.cancelEditing()}>
            <IconX size={14} />
          </ActionIcon>
        </Group>
      ) : (
        <ActionIcon variant="default" aria-label="Edit" onClick={() => row.startEditing()}>
          <IconPencil size={14} />
        </ActionIcon>
      ),
  },
];

function ProductsGrid({ initialProducts }: { initialProducts: Product[] }) {
  const [products, setProducts] = useState(initialProducts);
  const [changed, setChanged] = useState<Set<string>>(() => new Set());

  const store = useDataGrid({
    data: products,
    columns,
    getRowId: (row) => row.id,
    editingMode: 'row',
    pageSize: 25,
    autoResetPageIndex: false,
    onEditSave: async ({ row, newRow, changedColumnIds }) => {
      await api.updateProduct(newRow.id, Object.fromEntries(changedColumnIds.map((id) => [id, newRow[id as keyof Product]])));
      setProducts((current) => current.map((item) => (item.id === newRow.id ? newRow : item)));
      setChanged((current) => new Set([...current, ...changedColumnIds.map((id) => `${row.id}:${id}`)]));
    },
    onEditSaveError: (error) => notifications.show({ color: 'red', title: 'Could not save', message: String(error) }),
    getCellStatus: ({ row, columnId }) => (changed.has(`${row.id}:${columnId}`) ? 'dirty' : undefined),
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Footer />
    </DataGrid>
  );
}
```

- Editor components are module-level functions, not inline arrows, so they keep state while typing.
- Cell mode (`editingMode: 'cell'`) needs no actions column: double-click (or `editTrigger: 'click'`),
  Enter or blur saves. `withFloatingEditActions` renders Save/Cancel next to the edited row instead of
  an actions column (row mode only).
- `onEditSave` throwing or rejecting keeps the editor open with the drafts.
- For forms with many fields, dependent fields or file inputs, open a `Modal` from `onRowDoubleClick`
  or an actions button instead of inline editing.

---

## Detail panel (row expansion)

```tsx
const store = useDataGrid({
  data: orders,
  columns,
  getRowId: (row) => row.id,
  withRowExpansion: true,
  getRowCanExpand: (row) => row.original.items.length > 0,
});

<DataGrid
  store={store}
  expandOnRowClick
  renderExpandedRow={({ row }) => <OrderItems items={row.original.items} />}
/>
```

Expand all: `store.table.toggleAllRowsExpanded(true)`. Controlled: `expanded` + `onExpandedChange`.
`withTintedExpandedRows` paints the row and its panel. Detail content that loads data should fetch in
its own component (it mounts when the row expands).

---

## Grouping with totals

```tsx
const columns: DataGridColumnDef<Sale>[] = [
  { accessorKey: 'region', header: 'Region' },
  { accessorKey: 'rep', header: 'Rep' },
  {
    accessorKey: 'amount',
    header: 'Amount',
    aggregationFn: 'sum',
    aggregatedCell: ({ getValue }) => currency.format(getValue() as number),
    cell: ({ getValue }) => currency.format(getValue<number>()),
    meta: { align: 'end', aggregationLabel: 'Revenue', formatAggregatedValue: (value) => currency.format(Number(value)) },
  },
  {
    accessorKey: 'deals',
    header: 'Deals',
    aggregationFn: 'count',
    meta: { align: 'end' },
  },
];

function SalesGrid({ sales }: { sales: Sale[] }) {
  const [grouping, setGrouping] = useState<GroupingState>(['region']);
  const store = useDataGrid({ data: sales, columns, getRowId: (row) => row.id, grouping, onGroupingChange: setGrouping });

  return (
    <DataGrid store={store} withColumnMenu withTintedGroupRows>
      <DataGrid.Toolbar>
        <Button size={store.getControlSize()} variant="default" onClick={() => store.table.toggleAllRowsExpanded()}>
          {store.table.getIsAllRowsExpanded() ? 'Collapse all' : 'Expand all'}
        </Button>
      </DataGrid.Toolbar>
    </DataGrid>
  );
}
```

- Group rows show `Region: EMEA (12)` in the grouping column and `aggregatedCell` in aggregated
  columns. Every column with `aggregationFn` also gets a cell in the totals row in the table footer
  (filtered rows across all pages), labelled by `meta.aggregationLabel`.
- Built-in aggregations: `sum`, `min`, `max`, `extent`, `mean`, `median`, `unique`, `uniqueCount`,
  `count`, `first`, `last`. Custom: `constructAggregationFn({ aggregate: ({ rows, getValue }) => … })`
  from `@tanstack/react-table`.
- `groupedColumnMode: 'remove'` hides grouped columns; `false` leaves them in place.
- Server-side grouping: `tableOptions: { manualGrouping: true }` and grouped rows from the API.

---

## Tree data

```tsx
interface FileNode {
  id: string;
  name: string;
  kind: 'folder' | 'file';
  size?: number;
  children?: FileNode[];
}

const columns: DataGridColumnDef<FileNode>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row, getValue }) => (
      <Group gap={6} wrap="nowrap">
        {row.original.kind === 'folder' ? <IconFolder size={16} /> : <IconFile size={16} />}
        {getValue<string>()}
      </Group>
    ),
  },
  { accessorKey: 'size', header: 'Size', meta: { align: 'end' }, cell: ({ getValue }) => formatBytes(getValue<number | undefined>()) },
];

const store = useDataGrid({
  data: tree,
  columns,
  getRowId: (row) => row.id,
  getSubRows: (row) => row.children,
  withGlobalFilter: true,
  filterFromLeafRows: true,
  tableOptions: { autoResetExpanded: false, initialState: { expanded: { root: true } } },
});
```

- The tree (indent, chevron, guide lines) renders in the first visible data column; put the name
  column first. `withTreeLines={false}` keeps indent and chevron only.
- `filterFromLeafRows` keeps the parents of matching leaves. `paginateExpandedRows: false`
  paginates top-level rows only. `withRowExpansion` and `renderExpandedRow` are ignored for trees.
- Lazy children: mark rows as expandable with `getRowCanExpand: (row) => row.original.hasChildren`,
  load children in `onExpandedChange` (controlled `expanded`), merge them into `data` and keep
  `autoResetExpanded: false` so the merge does not collapse the tree.

---

## Virtualization and infinite scroll

```tsx
function LogsGrid({ logs }: { logs: LogEntry[] }) {
  return (
    <DataGrid
      data={logs}
      columns={columns}
      virtualize="rows"
      height={600}
      textOverflow="ellipsis"
    />
  );
}
```

`logs` is state or memoized; `columns` is module-level with explicit `size`s. Many columns:
`virtualize="columns"` or `"rows,columns"`. Rows of different heights: `getRowHeight` (`'auto'` for
wrapped content) or `estimateRowHeight`. Scroll to a row: `store.scrollToRow(index)`.

Infinite scroll (works with and without `virtualize`):

```tsx
function EventsGrid() {
  const [rows, setRows] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) {
      return;
    }
    loadingRef.current = true;
    setLoading(true);
    const page = await api.events({ offset: rows.length, limit: 100 });
    setRows((current) => [...current, ...page.rows]);
    setHasMore(page.hasMore);
    loadingRef.current = false;
    setLoading(false);
  }, [rows.length, hasMore]);

  useEffect(() => {
    loadMore();
  }, []);

  const store = useDataGrid({ data: rows, columns, getRowId: (row) => row.id });

  return <DataGrid store={store} virtualize="rows" height={600} loading={loading} loadingVariant="bar" onScrollToBottom={loadMore} />;
}
```

`onScrollToBottom` fires on every scroll event within 50px of the bottom; the ref guard prevents
parallel requests. Not available with `virtualize`: row pinning, row reorder, cell spanning,
`withScrollArea`.

---

## Export

```tsx
<DataGrid.Toolbar>
  <DataGrid.ExportButton
    fileName="orders"
    formats={['csv', 'excel', 'copy']}
    rows="filtered"
    csvOptions={{ valueFormatter: (value, columnId) => (columnId === 'total' ? Number(value).toFixed(2) : String(value ?? '')) }}
  />
  <DataGrid.ExportButton formats={['csv']} rows="selected" fileName="selected-orders">
    Export selected
  </DataGrid.ExportButton>
</DataGrid.Toolbar>
```

From your own button or menu: `exportToCsv(store.table, { fileName: 'orders', rows: 'filtered' })`,
`exportToExcel`, `exportToPrint`, `copyToClipboard`. Exports read cell values (accessor results), not
rendered `cell` content: format values with `valueFormatter`. Utility columns, actions columns and
`meta.disableExport` columns are skipped. A server-side grid exports the loaded page only; full
exports come from the API.

---

## Custom toolbar and footer

```tsx
<DataGrid store={store}>
  <DataGrid.Toolbar>
    <DataGrid.GlobalFilter />
    <DataGrid.RowCount />
    <div style={{ flex: 1 }} />
    <Button size={store.getControlSize()} leftSection={<IconPlus size={14} />} onClick={openCreate}>
      New order
    </Button>
    <DataGrid.ColumnVisibilityToggle />
    <DataGrid.ExportButton fileName="orders" formats={['csv', 'excel']} />
  </DataGrid.Toolbar>
  <DataGrid.Footer statusFormat="long" pagination="arrows" pageSizeOptions={[25, 50, 100]} />
</DataGrid>
```

The primary action is the only filled button; other toolbar buttons are `variant="default"`.

Fully custom footer content:

```tsx
const { pageIndex, pageSize } = store.getPagination();
const total = store.table.getRowCount();

<DataGrid.Footer>
  <Text size="sm">
    {total === 0 ? 0 : pageIndex * pageSize + 1}–{Math.min((pageIndex + 1) * pageSize, total)} of {total}
  </Text>
  <Group gap="xs" ml="auto">
    <Button size={store.getControlSize()} variant="default" disabled={!store.table.getCanPreviousPage()} onClick={() => store.table.previousPage()}>
      Previous
    </Button>
    <Button size={store.getControlSize()} variant="default" disabled={!store.table.getCanNextPage()} onClick={() => store.table.nextPage()}>
      Next
    </Button>
  </Group>
</DataGrid.Footer>
```

Translate built-in texts with `labels` on `DataGrid` (`footerRange`, `rowCountFiltered`,
`selectionBarSelected`, …).

---

## List view on small screens

```tsx
function OrdersGrid({ orders }: { orders: Order[] }) {
  const isMobile = useMediaQuery('(max-width: 48em)');
  const store = useDataGrid({ data: orders, columns, getRowId: (row) => row.id, withRowSelection: true, pageSize: 20 });

  return (
    <DataGrid
      store={store}
      listView={isMobile ? 'cards' : false}
      renderListItem={({ row }) => (
        <Group justify="space-between" wrap="nowrap">
          <div>
            <Text fw={500}>{row.original.customer}</Text>
            <Text size="sm">#{row.original.number}</Text>
          </div>
          <Text fw={500}>{currency.format(row.original.total)}</Text>
        </Group>
      )}
    >
      <DataGrid.Toolbar />
      <DataGrid.Footer />
    </DataGrid>
  );
}
```

Without `renderListItem`, each item shows label/value pairs of the visible columns. List view has no
editing or row reorder; `listView="flat"` renders divided items instead of cards.

---

## Styles API, CSS variables and theme defaults

```tsx
<DataGrid
  store={store}
  classNames={{ tr: classes.row, td: classes.cell }}
  vars={() => ({ root: { '--dg-row-height': rem(44), '--dg-cell-padding-x': rem(16) } })}
/>
```

```css
.row[data-selected] {
  --dg-selected-color: var(--mantine-color-default-hover);
}

.cell[data-align='end'] {
  font-variant-numeric: tabular-nums;
}
```

- Size-dependent variables (`--dg-row-height`, `--dg-font-size`, `--dg-cell-padding-*`,
  `--dg-header-height`, `--dg-control-size`, `--dg-icon-size`) are set inline from `size`: override
  them with `vars`, not a stylesheet. Colors (`--dg-selected-color`, `--dg-hover-color`,
  `--dg-striped-color`, `--dg-row-border-color`, `--dg-dirty-color`, `--dg-invalid-color`) can also
  come from CSS or the `stripedColor`, `highlightOnHoverColor`, `borderColor` props.
- Rows of a grid with pinned columns have an opaque body background; on a tinted surface override
  the row background through `classNames`.
- App-wide defaults:

```tsx
const theme = createTheme({
  components: {
    DataGrid: DataGrid.extend({
      defaultProps: { withRowBorders: 'subtle', highlightOnHover: true },
    }),
  },
});
```
