import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid, UseDataGridOptions } from '../hooks';

interface Person {
  name: string;
  age: number;
}

const data: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name', enableSorting: true },
  { accessorKey: 'age', header: 'Age', meta: { align: 'end' } },
];

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<Person>> }) {
  const store = useDataGrid<Person>({ data, columns, withSorting: true, ...storeOptions });
  return <DataGrid store={store} {...props} />;
}

describe('@mantine/data-grid/DataGridHeader sort indicators', () => {
  it('reflects the default sort indicator props on the root', () => {
    const { container } = render(<Grid />);
    const root = container.querySelector('.mantine-DataGrid-root')!;
    expect(root).toHaveAttribute('data-sort-indicator', 'hover');
    expect(root).toHaveAttribute('data-sort-indicator-position', 'trailing');
  });

  it('reflects sortIndicator and sortIndicatorPosition on the root', () => {
    const { container } = render(<Grid sortIndicator="always" sortIndicatorPosition="inline" />);
    const root = container.querySelector('.mantine-DataGrid-root')!;
    expect(root).toHaveAttribute('data-sort-indicator', 'always');
    expect(root).toHaveAttribute('data-sort-indicator-position', 'inline');
  });

  it('renders the sort button with a label wrapper and an icon in sortable headers only', () => {
    const { container } = render(<Grid />);
    const sortable = container.querySelector('th[data-sortable]')!;
    expect(sortable).toHaveTextContent('Name');
    const button = sortable.querySelector('button.mantine-DataGrid-headerCell')!;
    expect(button).toBeInTheDocument();
    expect(button.querySelector('.mantine-DataGrid-headerLabel')).toHaveTextContent('Name');
    expect(button.querySelector('.mantine-DataGrid-sortIcon')).toBeInTheDocument();

    const plain = container.querySelector('th[data-align="end"]')!;
    expect(plain.querySelector('button')).not.toBeInTheDocument();
    expect(plain.querySelector('.mantine-DataGrid-headerLabel')).toHaveTextContent('Age');
    expect(plain.querySelector('.mantine-DataGrid-sortIcon')).not.toBeInTheDocument();
    expect(plain.querySelector('[tabindex]')).not.toBeInTheDocument();
  });

  it('switches between the unsorted and sorted icons with the sort direction', async () => {
    const { container } = render(
      <Grid
        sortedIcon={<span data-testid="sorted" />}
        unsortedIcon={<span data-testid="unsorted" />}
      />
    );
    expect(screen.getByTestId('unsorted')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Name' }));
    expect(screen.getByTestId('sorted')).toBeInTheDocument();
    expect(container.querySelector('th[data-sort-asc]')).toHaveAttribute('aria-sort', 'ascending');
    await userEvent.click(screen.getByRole('button', { name: 'Name' }));
    expect(container.querySelector('th[data-sort-desc]')).toHaveAttribute(
      'aria-sort',
      'descending'
    );
  });

  it('renders the same header structure in the virtual header', () => {
    const { container } = render(<Grid virtualize="rows" height={200} />);
    const sortable = container.querySelector('[role="columnheader"][data-sortable]')!;
    expect(sortable.querySelector('button.mantine-DataGrid-headerCell')).toBeInTheDocument();
    expect(sortable.querySelector('.mantine-DataGrid-headerLabel')).toHaveTextContent('Name');
    expect(sortable.querySelector('.mantine-DataGrid-sortIcon')).toBeInTheDocument();

    const plain = container.querySelector('[role="columnheader"][data-align="end"]')!;
    expect(plain.querySelector('button')).not.toBeInTheDocument();
    expect(plain.querySelector('.mantine-DataGrid-headerLabel')).toHaveTextContent('Age');
  });

  it('does not render the column menu unless withColumnMenu is set', () => {
    render(<Grid />);
    expect(screen.queryByRole('button', { name: 'Column menu' })).not.toBeInTheDocument();
  });
});
