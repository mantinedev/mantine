import { act } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import type { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid, UseDataGridOptions } from '../hooks';
import { mockVirtualViewport } from '../virtual-test-utils';

interface Person {
  id: string;
  name: string;
  team: string;
  score: number;
}

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'team', header: 'Team', meta: { label: 'Squad' } },
  {
    accessorKey: 'score',
    header: 'Score',
    aggregationFn: 'sum',
    aggregatedCell: ({ getValue }) => `Total ${getValue()}`,
  },
];

const data: Person[] = [
  { id: 'a', name: 'Alice', team: 'Red', score: 1 },
  { id: 'b', name: 'Bob', team: 'Red', score: 2 },
  { id: 'c', name: 'Charlie', team: 'Blue', score: 3 },
];

let lastStore: ReturnType<typeof useDataGrid<Person>> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<Person>>;
}) {
  const store = useDataGrid<Person>({
    data,
    columns,
    getRowId: (row) => row.id,
    withGrouping: true,
    grouping: ['team'],
    ...storeOptions,
  });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

describe('@mantine/data-grid/group-rows', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  it('renders one cell per visible column with the label in the grouping column', () => {
    const { container } = render(<Grid />);
    const groupRow = container.querySelector('tr[data-group-row]')!;
    const cells = groupRow.querySelectorAll('td');
    expect(cells).toHaveLength(3);
    expect(cells[0]).not.toHaveAttribute('colspan');
    expect(cells[0]).toHaveTextContent('Squad: Red (2)');
    expect(cells[0].querySelector('[data-group-value]')).toHaveTextContent('Red');
    expect(cells[1]).toHaveTextContent('');
    expect(cells[2]).toHaveTextContent('Total 3');
    expect(groupRow).toHaveAttribute('aria-expanded', 'false');
    expect(groupRow).toHaveAttribute('data-row-id');
    expect(groupRow).not.toHaveAttribute('data-selected');
  });

  it('counts only data rows in multi-level group labels', () => {
    const { container } = render(<Grid storeOptions={{ grouping: ['team', 'name'] }} />);
    const groupRow = container.querySelector('tr[data-group-row]')!;
    expect(groupRow).toHaveTextContent('Squad: Red (2)');
  });

  it('lets the group label extend over the empty cells up to the first aggregated cell', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          columns: [
            { accessorKey: 'team', header: 'Team', size: 100 },
            { accessorKey: 'name', header: 'Name', size: 120 },
            { accessorKey: 'score', header: 'Score', aggregationFn: 'sum' },
          ],
        }}
      />
    );
    const labelCell = container.querySelector('tr[data-group-row] [data-group-label-cell]')!;
    expect((labelCell as HTMLElement).style.getPropertyValue('--dg-group-label-width')).toBe(
      '220px'
    );
  });

  it('stops the group label at a column with a custom aggregatedCell even when it has no value', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          columns: [
            { accessorKey: 'team', header: 'Team', size: 100 },
            {
              accessorKey: 'name',
              header: 'Name',
              size: 120,
              aggregatedCell: ({ row }) => `${row.subRows.length} people`,
            },
            { accessorKey: 'score', header: 'Score', aggregationFn: 'sum' },
          ],
        }}
      />
    );
    const labelCell = container.querySelector('tr[data-group-row] [data-group-label-cell]')!;
    expect((labelCell as HTMLElement).style.getPropertyValue('--dg-group-label-width')).toBe(
      '100px'
    );
    expect(container.querySelector('tr[data-group-row]')).toHaveTextContent('2 people');
  });

  it('extends the group label past columns without a custom aggregatedCell when defaultColumn is inline', () => {
    const stableColumns: DataGridColumnDef<Person>[] = [
      { accessorKey: 'team', header: 'Team', size: 100 },
      { accessorKey: 'name', header: 'Name', size: 120 },
      { accessorKey: 'score', header: 'Score', aggregationFn: 'sum' },
    ];
    const renderGrid = () => (
      <Grid
        storeOptions={{
          columns: stableColumns,
          tableOptions: { defaultColumn: { minSize: 40 } },
        }}
      />
    );
    const { container, rerender } = render(renderGrid());
    rerender(renderGrid());
    const labelCell = container.querySelector<HTMLElement>(
      'tr[data-group-row] [data-group-label-cell]'
    )!;
    expect(labelCell.style.getPropertyValue('--dg-group-label-width')).toBe('220px');
  });

  it('renders the group label cell attributes in the virtual body', () => {
    const { container } = render(
      <Grid
        virtualize="rows"
        height={300}
        storeOptions={{
          columns: [
            { accessorKey: 'team', header: 'Team', size: 100 },
            { accessorKey: 'name', header: 'Name', size: 120 },
            { accessorKey: 'score', header: 'Score', aggregationFn: 'sum' },
          ],
        }}
      />
    );
    const labelCell = container.querySelector<HTMLElement>(
      '[role="row"][data-group-row] [data-group-label-cell]'
    )!;
    expect(labelCell.style.getPropertyValue('--dg-group-label-width')).toBe('220px');
    expect(labelCell.style.width).toBe('var(--dg-col-0)');
  });

  it('applies a numeric getRowHeight to group rows', () => {
    const { container } = render(<Grid getRowHeight={() => 48} />);
    const groupRow = container.querySelector<HTMLElement>('tr[data-group-row]')!;
    expect(groupRow.style.height).toBe('48px');
  });

  it('applies a numeric getRowHeight to virtual group rows', () => {
    const { container } = render(<Grid virtualize="rows" height={300} getRowHeight={() => 48} />);
    const groupRow = container.querySelector<HTMLElement>('[role="row"][data-group-row]')!;
    expect(groupRow.style.getPropertyValue('--dg-row-height')).toBe('48px');
  });

  it('keeps utility columns in front of the grouped column', () => {
    render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          grouping: undefined,
          tableOptions: { initialState: { grouping: ['team'] } },
        }}
      />
    );
    expect(lastStore!.table.getVisibleLeafColumns().map((column) => column.id)).toEqual([
      '__select__',
      'team',
      'name',
      'score',
    ]);
    act(() => lastStore!.table.setGrouping(['name']));
    expect(lastStore!.table.getVisibleLeafColumns().map((column) => column.id)).toEqual([
      '__select__',
      'name',
      'team',
      'score',
    ]);
  });

  it('falls back to the first visible data cell when the grouping column is hidden', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, groupedColumnMode: 'remove' }} />
    );
    const groupRow = container.querySelector('tr[data-group-row]')!;
    const cells = groupRow.querySelectorAll('td');
    expect(cells[0]).toHaveAttribute('data-utility', 'select');
    expect(cells[1]).toHaveTextContent('Squad: Red (2)');
  });

  it('renders utility cells on group rows and leaves row numbers empty', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, withRowNumbers: true, expanded: true }} />
    );
    const groupRow = container.querySelector('tr[data-group-row]')!;
    const checkbox = groupRow.querySelector('input[type="checkbox"]')!;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('aria-label', 'Select group');
    expect(container.querySelector('tr[data-row-id="a"] input[type="checkbox"]')).toHaveAttribute(
      'aria-label',
      'Select row'
    );
    expect(groupRow.querySelector('td[data-utility="rowNumber"]')).toHaveTextContent('');
    act(() => lastStore!.table.getRow('a', true).toggleSelected(true));
    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
    act(() => lastStore!.table.getRow('b', true).toggleSelected(true));
    expect(checkbox).toBeChecked();
  });

  it('toggles leaf rows from the group checkbox without storing the group id', async () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, expanded: true }} />
    );
    const groupRow = container.querySelector('tr[data-group-row]')!;
    const checkbox = groupRow.querySelector<HTMLInputElement>('input[type="checkbox"]')!;

    await userEvent.click(checkbox);
    expect(lastStore!.rowSelection).toEqual({ a: true, b: true });
    expect(container.querySelectorAll('tbody tr[data-selected]')).toHaveLength(2);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(lastStore!.rowSelection).toEqual({});
    expect(checkbox).not.toBeChecked();
  });

  it('applies a user enableRowSelection predicate to leaf rows only', async () => {
    const enableRowSelection = jest.fn((row: any) => row.original.id !== 'b');
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, expanded: true, enableRowSelection }} />
    );
    const groupRows = container.querySelectorAll('tr[data-group-row]');
    await userEvent.click(groupRows[0].querySelector('input[type="checkbox"]')!);
    expect(lastStore!.rowSelection).toEqual({ a: true });
    expect(enableRowSelection.mock.calls.every(([row]) => !(row as any).getIsGrouped())).toBe(true);
  });

  it('cascades group selection when an enableMultiRowSelection predicate rejects group rows', async () => {
    const enableMultiRowSelection = (row: any) => !row.getIsGrouped() && row.original.id !== 'c';
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, expanded: true, enableMultiRowSelection }} />
    );
    const groupRows = container.querySelectorAll('tr[data-group-row]');
    const redCheckbox = groupRows[0].querySelector<HTMLInputElement>('input[type="checkbox"]')!;
    expect(groupRows[1].querySelector('input[type="checkbox"]')).not.toBeInTheDocument();

    await userEvent.click(redCheckbox);
    expect(lastStore!.rowSelection).toEqual({ a: true, b: true });
    expect(redCheckbox).toBeChecked();

    await userEvent.click(redCheckbox);
    expect(lastStore!.rowSelection).toEqual({});
  });

  it('hides group checkboxes in single selection mode', () => {
    const { container } = render(
      <Grid
        storeOptions={{ withRowSelection: true, expanded: true, enableMultiRowSelection: false }}
      />
    );
    const groupRow = container.querySelector('tr[data-group-row]')!;
    expect(groupRow.querySelector('input')).not.toBeInTheDocument();
    expect(container.querySelectorAll('tbody input[type="radio"]')).toHaveLength(3);
  });

  it('numbers data rows continuously across pages that contain group rows', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowNumbers: true, expanded: true, pageSize: 3 }} />
    );
    const numbers = () =>
      Array.from(container.querySelectorAll('tbody tr:not([data-group-row])')).map(
        (row) => row.querySelector('td[data-utility="rowNumber"]')!.textContent
      );
    expect(numbers()).toEqual(['1', '2']);
    act(() => lastStore!.table.setPageIndex(1));
    expect(numbers()).toEqual(['3']);
  });

  it('numbers data rows continuously across pages when expanded rows are not paginated', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withRowNumbers: true,
          expanded: true,
          pageSize: 1,
          paginateExpandedRows: false,
        }}
      />
    );
    const numbers = () =>
      Array.from(container.querySelectorAll('tbody tr:not([data-group-row])')).map(
        (row) => row.querySelector('td[data-utility="rowNumber"]')!.textContent
      );
    expect(numbers()).toEqual(['1', '2']);
    act(() => lastStore!.table.setPageIndex(1));
    expect(numbers()).toEqual(['3']);
  });

  it('does not render an expand utility toggle on group rows', () => {
    const { container } = render(<Grid storeOptions={{ withRowExpansion: true }} />);
    const groupRow = container.querySelector('tr[data-group-row]')!;
    expect(groupRow.querySelector('td[data-utility="expand"] button')).not.toBeInTheDocument();
  });

  it('toggles the whole row on click, Enter and Space', async () => {
    const { container } = render(<Grid />);
    const groupRow = container.querySelector<HTMLElement>('tr[data-group-row]')!;
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    await userEvent.click(groupRow);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(groupRow).toHaveAttribute('aria-expanded', 'true');
    groupRow.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    await userEvent.keyboard(' ');
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('reflects withTintedGroupRows on the root', () => {
    const { container } = render(<Grid withTintedGroupRows />);
    expect(container.querySelector('.mantine-DataGrid-root')).toHaveAttribute(
      'data-tinted-group-rows'
    );
  });

  it('renders the same group row model in the virtual body', async () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true }} virtualize="rows" height={300} />
    );
    const groupRow = container.querySelector<HTMLElement>('[role="row"][data-group-row]')!;
    const cells = groupRow.querySelectorAll('[role="gridcell"]');
    expect(cells).toHaveLength(4);
    expect(cells[0].querySelector('input[type="checkbox"]')).toBeInTheDocument();
    expect(cells[1]).toHaveTextContent('Squad: Red (2)');
    expect(cells[3]).toHaveTextContent('Total 3');
    expect(groupRow).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(groupRow);
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('does not resolve data cell state for virtual group row cells', async () => {
    const getCellStatus = jest.fn(() => undefined);
    const { container } = render(
      <Grid storeOptions={{ getCellStatus }} virtualize="rows" height={300} />
    );
    expect(container.querySelectorAll('[role="row"][data-group-row]')).toHaveLength(2);
    expect(getCellStatus).not.toHaveBeenCalled();
    await userEvent.click(container.querySelector<HTMLElement>('[role="row"][data-group-row]')!);
    expect(getCellStatus).toHaveBeenCalled();
    expect(getCellStatus.mock.calls.every(([payload]: any[]) => !payload.row.getIsGrouped())).toBe(
      true
    );
  });

  it('renders the group label as a plain element in the row focus model', () => {
    const { container } = render(<Grid />);
    const groupRow = container.querySelector('tr[data-group-row]')!;
    expect(groupRow).toHaveAttribute('tabindex', '0');
    expect(groupRow.querySelector('button')).not.toBeInTheDocument();
  });

  it.each([
    ['table', {}],
    ['virtual', { virtualize: 'rows' as const, height: 300 }],
  ])(
    'makes the group toggle a keyboard reachable button under withCellSelection (%s)',
    async (_, props) => {
      render(<Grid storeOptions={{ withCellSelection: true }} {...props} />);
      const toggle = screen.getByRole('button', { name: 'Squad: Red (2)' });
      expect(toggle).toHaveAttribute('type', 'button');
      expect(toggle).toHaveAttribute('aria-expanded', 'false');

      await userEvent.tab();
      expect(toggle).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      expect(toggle).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('Alice')).toBeInTheDocument();
      await userEvent.keyboard(' ');
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    }
  );
});
