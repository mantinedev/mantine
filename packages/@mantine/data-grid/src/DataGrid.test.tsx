import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps, DataGridStylesNames, useDataGrid } from './index';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];

const defaultProps: DataGridProps = {
  data,
  columns,
};

function DataGridWithStore({
  storeOptions,
  ...props
}: Omit<DataGridProps, 'store'> & {
  storeOptions: Parameters<typeof useDataGrid>[0];
}) {
  const store = useDataGrid(storeOptions);
  return <DataGrid store={store} {...props} />;
}

describe('@mantine/data-grid/DataGrid', () => {
  tests.itSupportsSystemProps<DataGridProps, DataGridStylesNames>({
    component: DataGrid,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/data-grid/DataGrid',
    stylesApiSelectors: ['root', 'table'],
  });

  it('renders column headers', () => {
    render(<DataGrid {...defaultProps} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders data rows', () => {
    render(<DataGrid {...defaultProps} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('renders correct number of rows', () => {
    const { container } = render(<DataGrid {...defaultProps} />);
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(3);
  });

  it('renders empty table when data is empty', () => {
    const { container } = render(<DataGrid data={[]} columns={columns} />);
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(0);
  });

  it('renders semantic table elements', () => {
    const { container } = render(<DataGrid {...defaultProps} />);
    expect(container.querySelector('table')).toBeInTheDocument();
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
  });

  describe('sorting', () => {
    const sortableColumns = [
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'age', header: 'Age', enableSorting: true },
    ];

    it('sorts ascending on header click when withSorting is true', async () => {
      render(
        <DataGridWithStore storeOptions={{ data, columns: sortableColumns, withSorting: true }} />
      );
      const nameHeader = screen.getByText('Name');
      await userEvent.click(nameHeader);

      const rows = screen.getAllByRole('row');
      const firstDataRow = rows[1];
      expect(firstDataRow).toHaveTextContent('Alice');
    });

    it('sorts descending on second click', async () => {
      render(
        <DataGridWithStore storeOptions={{ data, columns: sortableColumns, withSorting: true }} />
      );
      const nameHeader = screen.getByText('Name');
      await userEvent.click(nameHeader);
      await userEvent.click(nameHeader);

      const rows = screen.getAllByRole('row');
      const firstDataRow = rows[1];
      expect(firstDataRow).toHaveTextContent('Charlie');
    });

    it('sets aria-sort attribute on sorted header', async () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns: sortableColumns, withSorting: true }} />
      );
      const nameHeader = screen.getByText('Name');
      await userEvent.click(nameHeader);

      const sortedTh = container.querySelector('th[aria-sort="ascending"]');
      expect(sortedTh).toBeInTheDocument();

      await userEvent.click(nameHeader);
      const descTh = container.querySelector('th[aria-sort="descending"]');
      expect(descTh).toBeInTheDocument();
    });

    it('does not sort when withSorting is false', async () => {
      const { container } = render(<DataGrid {...defaultProps} />);
      const nameHeader = screen.getByText('Name');
      await userEvent.click(nameHeader);

      const sortedTh = container.querySelector('th[aria-sort]');
      expect(sortedTh).not.toBeInTheDocument();
    });

    it('does not sort columns without enableSorting', async () => {
      const mixedColumns = [
        { accessorKey: 'name', header: 'Name', enableSorting: true },
        { accessorKey: 'age', header: 'Age' },
      ];
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns: mixedColumns, withSorting: true }} />
      );
      const ageHeader = screen.getByText('Age');
      await userEvent.click(ageHeader);

      const sortedTh = container.querySelector('th[aria-sort="ascending"]');
      expect(sortedTh).not.toBeInTheDocument();
    });

    it('exposes sortable headers as focusable buttons', async () => {
      render(
        <DataGridWithStore storeOptions={{ data, columns: sortableColumns, withSorting: true }} />
      );
      const nameButton = screen.getByRole('button', { name: 'Name' });

      await userEvent.tab();
      expect(nameButton).toHaveFocus();
    });

    it('sorts via keyboard when the header button is focused', async () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns: sortableColumns, withSorting: true }} />
      );
      const nameButton = screen.getByRole('button', { name: 'Name' });
      nameButton.focus();

      await userEvent.keyboard('{Enter}');
      expect(container.querySelector('th[aria-sort="ascending"]')).toBeInTheDocument();
      expect(screen.getAllByRole('row')[1]).toHaveTextContent('Alice');

      await userEvent.keyboard('{Enter}');
      expect(container.querySelector('th[aria-sort="descending"]')).toBeInTheDocument();
      expect(screen.getAllByRole('row')[1]).toHaveTextContent('Charlie');
    });
  });

  describe('filtering', () => {
    const filterColumns = [
      { accessorKey: 'name', header: 'Name', enableColumnFilter: true },
      { accessorKey: 'age', header: 'Age', enableColumnFilter: true },
    ];

    it('renders filter inputs when columns have enableColumnFilter', () => {
      render(<DataGridWithStore storeOptions={{ data, columns: filterColumns }} />);
      expect(screen.getByPlaceholderText('Filter name...')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Filter age...')).toBeInTheDocument();
    });

    it('does not render filter inputs when columns lack enableColumnFilter', () => {
      render(<DataGrid {...defaultProps} />);
      expect(screen.queryByPlaceholderText('Filter name...')).not.toBeInTheDocument();
    });

    it('filters rows based on text input', async () => {
      render(<DataGridWithStore storeOptions={{ data, columns: filterColumns }} />);
      const filterInput = screen.getByPlaceholderText('Filter name...');
      await userEvent.type(filterInput, 'Alice');

      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.queryByText('Bob')).not.toBeInTheDocument();
      expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
    });
  });

  describe('pagination', () => {
    const paginationData = Array.from({ length: 15 }, (_, i) => ({
      name: `Person ${i + 1}`,
      age: 20 + i,
    }));

    it('paginates rows when pageSize is set', () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data: paginationData, columns, pageSize: 5 }}>
          <DataGrid.Pagination />
        </DataGridWithStore>
      );
      expect(container.querySelector('.mantine-DataGrid-pagination')).toBeInTheDocument();
      const rows = container.querySelectorAll('tbody tr');
      expect(rows).toHaveLength(5);
    });

    it('does not paginate when pageSize is not set', () => {
      const { container } = render(<DataGrid data={paginationData} columns={columns} />);
      const rows = container.querySelectorAll('tbody tr');
      expect(rows).toHaveLength(paginationData.length);
    });
  });

  describe('row selection', () => {
    it('renders checkboxes when withRowSelection is true', () => {
      render(<DataGridWithStore storeOptions={{ data, columns, withRowSelection: true }} />);
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes.length).toBeGreaterThanOrEqual(4);
    });

    it('selects row on checkbox click', async () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns, withRowSelection: true }} />
      );
      const checkboxes = screen.getAllByRole('checkbox');
      await userEvent.click(checkboxes[1]);

      const selectedRow = container.querySelector('tr[data-selected]');
      expect(selectedRow).toBeInTheDocument();
    });

    it('renders select-all checkbox in header', () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns, withRowSelection: true }} />
      );
      const theadCheckbox = container.querySelector('thead input[type="checkbox"]');
      expect(theadCheckbox).toBeInTheDocument();
    });
  });

  describe('row expansion', () => {
    it('renders expand icon when withRowExpansion is true', () => {
      render(
        <DataGridWithStore
          storeOptions={{ data, columns, withRowExpansion: true }}
          renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
        />
      );
      const expandButtons = screen.getAllByRole('button');
      expect(expandButtons.length).toBeGreaterThanOrEqual(3);
    });

    it('renders expanded content on expand click', async () => {
      render(
        <DataGridWithStore
          storeOptions={{ data, columns, withRowExpansion: true }}
          renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
        />
      );
      const expandButtons = screen.getAllByRole('button');
      await userEvent.click(expandButtons[0]);

      expect(screen.getByText('Details for Alice')).toBeInTheDocument();
    });
  });

  describe('loading and empty state', () => {
    it('renders loading overlay when loading is true', () => {
      const { container } = render(<DataGrid {...defaultProps} loading />);
      expect(container.querySelector('[data-loading]')).toBeInTheDocument();
    });

    it('renders empty state when data is empty and emptyState is provided', () => {
      render(<DataGrid data={[]} columns={columns} emptyState={<div>No data available</div>} />);
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });
  });

  describe('striped and hover', () => {
    it('adds data-striped attribute when striped is true', () => {
      const { container } = render(<DataGrid {...defaultProps} striped />);
      const stripedRows = container.querySelectorAll('tbody tr[data-striped]');
      expect(stripedRows.length).toBeGreaterThan(0);
    });
  });

  describe('row numbers', () => {
    it('renders row numbers when withRowNumbers is true', () => {
      render(<DataGrid {...defaultProps} withRowNumbers />);
      expect(screen.getByText('#')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });

  describe('column visibility', () => {
    it('hides column when columnVisibility is set', () => {
      render(
        <DataGridWithStore
          storeOptions={{
            data,
            columns,
            withColumnVisibility: true,
            columnVisibility: { age: false },
          }}
        />
      );
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.queryByText('Age')).not.toBeInTheDocument();
    });
  });

  describe('TanStack Table v9 regressions', () => {
    it('renders every row when the grid is not paginated', () => {
      const manyRows = Array.from({ length: 25 }, (_, i) => ({ name: `Row ${i}`, age: i }));
      const { container } = render(<DataGrid data={manyRows} columns={columns} />);
      expect(container.querySelectorAll('tbody tr')).toHaveLength(manyRows.length);
    });

    it('expands a row without subRows via renderExpandedRow', async () => {
      render(
        <DataGridWithStore
          storeOptions={{ data, columns, withRowExpansion: true }}
          renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
        />
      );
      await userEvent.click(screen.getAllByRole('button')[0]);
      expect(screen.getByText('Details for Alice')).toBeInTheDocument();
    });

    it('does not render a footer aggregation row unless a column declares aggregationFn', () => {
      const { container } = render(<DataGrid data={data} columns={columns} />);
      expect(container.querySelector('tfoot')).not.toBeInTheDocument();
    });

    it('renders a footer aggregation row for columns that declare aggregationFn', () => {
      const { container } = render(
        <DataGrid
          data={data}
          columns={[
            { accessorKey: 'name', header: 'Name' },
            { accessorKey: 'age', header: 'Age', aggregationFn: 'sum' },
          ]}
        />
      );
      const aggregationCells = container.querySelectorAll('tfoot td[class*="aggregationCell"]');
      expect(aggregationCells).toHaveLength(2);
      expect(container.querySelector('tfoot')).toHaveTextContent('90');
    });

    it('does not enable cell selection by default', () => {
      const { container } = render(<DataGrid data={data} columns={columns} />);
      expect(container.querySelector('td[data-selected]')).not.toBeInTheDocument();
      expect(container.querySelector('tbody td[tabindex]')).not.toBeInTheDocument();
    });

    it('selects a cell on mouse down when withCellSelection is enabled', async () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns, withCellSelection: true }} />
      );
      const cell = container.querySelectorAll('tbody td')[0] as HTMLElement;
      await userEvent.click(cell);

      expect(container.querySelector('td[data-selected]')).toBeInTheDocument();
      expect(container.querySelector('td[data-focused]')).toBeInTheDocument();
    });
  });
});
