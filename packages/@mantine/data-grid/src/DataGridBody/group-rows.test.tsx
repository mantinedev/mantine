import { act } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import type { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
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
    expect(groupRow.querySelector('td[data-utility="rowNumber"]')).toHaveTextContent('');
    act(() => lastStore!.table.getRow('a', true).toggleSelected(true));
    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
    act(() => lastStore!.table.getRow('b', true).toggleSelected(true));
    expect(checkbox).toBeChecked();
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
});
