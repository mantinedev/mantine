import { act } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { mockVirtualViewport } from './virtual-test-utils';
import { DataGrid, DataGridProps, DataGridStore, DataGridStylesNames, useDataGrid } from './index';

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

function DataGridToggleStore({ withStore }: { withStore: boolean }) {
  const store = useDataGrid({ data, columns });
  return withStore ? <DataGrid store={store} /> : <DataGrid data={data} columns={columns} />;
}

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
    size: false,
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

    it('renders no filter inputs for filterable columns', () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns: filterColumns }} />
      );
      expect(container.querySelector('thead input')).not.toBeInTheDocument();
    });

    it('filters rows from the column filter state', () => {
      let store: DataGridStore | null = null;
      function Grid() {
        store = useDataGrid<any>({ data, columns: filterColumns });
        return <DataGrid store={store} />;
      }
      render(<Grid />);
      act(() => store!.setColumnFilter('name', 'Alice'));

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
          <DataGrid.Footer />
        </DataGridWithStore>
      );
      expect(container.querySelector('.mantine-DataGrid-footer')).toBeInTheDocument();
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

    it('renders the empty state in one full-width body cell', () => {
      const { container } = render(
        <DataGrid data={[]} columns={columns} emptyState={<div>No data available</div>} />
      );
      const cell = container.querySelector('tbody tr[data-empty-row] > td') as HTMLElement;
      expect(cell).toHaveAttribute('colspan', '2');
      expect(cell).toHaveClass('mantine-DataGrid-emptyState');
      expect(container.querySelectorAll('tbody tr')).toHaveLength(1);
    });

    it('calls the emptyState function with the row counts and filter state', () => {
      const emptyState = jest.fn(() => <div>Nothing matches</div>);
      let store: DataGridStore | null = null;
      function Grid() {
        store = useDataGrid<any>({
          data,
          columns: [
            { accessorKey: 'name', header: 'Name', enableColumnFilter: true },
            { accessorKey: 'age', header: 'Age' },
          ],
        });
        return <DataGrid store={store} emptyState={emptyState} />;
      }
      render(<Grid />);
      expect(emptyState).not.toHaveBeenCalled();

      act(() => store!.setColumnFilter('name', 'Zed'));
      expect(screen.getByText('Nothing matches')).toBeInTheDocument();
      expect(emptyState).toHaveBeenLastCalledWith(
        expect.objectContaining({
          rowCount: 3,
          filteredRowCount: 0,
          isFiltered: true,
          table: store!.table,
        })
      );
    });

    it('does not render the empty state while loading', () => {
      render(
        <DataGrid data={[]} columns={columns} loading emptyState={<div>No data available</div>} />
      );
      expect(screen.queryByText('No data available')).not.toBeInTheDocument();
    });
  });

  describe('striped and hover', () => {
    it('adds data-striped attribute when striped is true', () => {
      const { container } = render(<DataGrid {...defaultProps} striped />);
      const stripedRows = container.querySelectorAll('tbody tr[data-striped]');
      expect(stripedRows.length).toBeGreaterThan(0);
    });

    it('skips expansion panels in the stripe index', async () => {
      const { container } = render(
        <DataGridWithStore
          storeOptions={{ data, columns, withRowExpansion: true }}
          striped
          renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
        />
      );
      await userEvent.click(screen.getAllByRole('button')[0]);
      const rows = Array.from(container.querySelectorAll('tbody tr'));
      expect(rows).toHaveLength(4);
      expect(rows[0]).toHaveAttribute('data-striped');
      expect(rows[1]).toHaveAttribute('data-expanded-row');
      expect(rows[1]).not.toHaveAttribute('data-striped');
      expect(rows[2]).not.toHaveAttribute('data-striped');
      expect(rows[3]).toHaveAttribute('data-striped');
    });
  });

  describe('row numbers', () => {
    it('renders row numbers when withRowNumbers is set on the store', () => {
      render(<DataGridWithStore storeOptions={{ data, columns, withRowNumbers: true }} />);
      expect(screen.getByText('#')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('renders row numbers in an injected utility column that is not on DataGrid props', () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns, withRowNumbers: true }} />
      );
      const header = container.querySelector('thead th[data-utility="rowNumber"]');
      expect(header).toHaveTextContent('#');
      expect(container.querySelectorAll('tbody td[data-utility="rowNumber"]')).toHaveLength(3);
      expect(
        container.querySelector('tbody td[data-utility="rowNumber"] .mantine-DataGrid-rowNumber')
      ).toHaveTextContent('1');
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

  describe('size', () => {
    it('emits data-size sm and the size-resolved variables by default', () => {
      const { container } = render(<DataGrid {...defaultProps} />);
      const root = container.querySelector('.mantine-DataGrid-root') as HTMLElement;
      expect(root).toHaveAttribute('data-size', 'sm');
      expect(root.style.getPropertyValue('--dg-row-height')).toBe('var(--dg-row-height-sm)');
      expect(root.style.getPropertyValue('--dg-font-size')).toBe('var(--dg-font-size-sm)');
      expect(root.style.getPropertyValue('--dg-header-height')).toBe('var(--dg-header-height-sm)');
      expect(root.style.getPropertyValue('--dg-cell-padding-x')).toBe(
        'var(--dg-cell-padding-x-sm)'
      );
      expect(root.style.getPropertyValue('--dg-cell-padding-y')).toBe(
        'var(--dg-cell-padding-y-sm)'
      );
      expect(root.style.getPropertyValue('--dg-control-size')).toBe('var(--dg-control-size-sm)');
      expect(root.style.getPropertyValue('--dg-icon-size')).toBe('var(--dg-icon-size-sm)');
    });

    it('follows the store size', () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns, size: 'lg' }} />
      );
      const root = container.querySelector('.mantine-DataGrid-root') as HTMLElement;
      expect(root).toHaveAttribute('data-size', 'lg');
      expect(root.style.getPropertyValue('--dg-row-height')).toBe('var(--dg-row-height-lg)');
    });

    it('does not emit data-density', () => {
      const { container } = render(<DataGrid {...defaultProps} />);
      expect(container.querySelector('[data-density]')).not.toBeInTheDocument();
    });
  });

  describe('frame and separators', () => {
    const root = (container: HTMLElement) =>
      container.querySelector('.mantine-DataGrid-root') as HTMLElement;

    it('is framed with the default radius by default', () => {
      const { container } = render(<DataGrid {...defaultProps} />);
      expect(root(container)).toHaveAttribute('data-with-table-border');
      expect(root(container).style.getPropertyValue('--dg-radius')).toBe(
        'var(--mantine-radius-default)'
      );
    });

    it('drops the frame with withTableBorder false and resolves radius', () => {
      const { container } = render(
        <DataGrid {...defaultProps} withTableBorder={false} radius="lg" />
      );
      expect(root(container)).not.toHaveAttribute('data-with-table-border');
      expect(root(container).style.getPropertyValue('--dg-radius')).toBe(
        'var(--mantine-radius-lg)'
      );
    });

    it('draws row borders by default and supports subtle and none', () => {
      const { container, rerender } = render(<DataGrid {...defaultProps} />);
      expect(root(container)).toHaveAttribute('data-with-row-borders');
      expect(root(container)).not.toHaveAttribute('data-row-borders');

      rerender(
        <>
          <DataGrid {...defaultProps} withRowBorders="subtle" />
        </>
      );
      expect(root(container)).toHaveAttribute('data-with-row-borders');
      expect(root(container)).toHaveAttribute('data-row-borders', 'subtle');

      rerender(
        <>
          <DataGrid {...defaultProps} withRowBorders={false} />
        </>
      );
      expect(root(container)).not.toHaveAttribute('data-with-row-borders');
    });

    it('stripes odd rows by default and even rows on request', () => {
      const { container, rerender } = render(<DataGrid {...defaultProps} striped />);
      let rows = container.querySelectorAll('tbody tr');
      expect(rows[0]).toHaveAttribute('data-striped');
      expect(rows[1]).not.toHaveAttribute('data-striped');
      expect(rows[2]).toHaveAttribute('data-striped');

      rerender(
        <>
          <DataGrid {...defaultProps} striped="even" />
        </>
      );
      rows = container.querySelectorAll('tbody tr');
      expect(rows[0]).not.toHaveAttribute('data-striped');
      expect(rows[1]).toHaveAttribute('data-striped');

      rerender(
        <>
          <DataGrid {...defaultProps} />
        </>
      );
      expect(container.querySelector('tbody tr[data-striped]')).not.toBeInTheDocument();
    });

    it('resolves stripedColor and highlightOnHoverColor into variables', () => {
      const { container } = render(
        <DataGrid
          {...defaultProps}
          stripedColor="red"
          highlightOnHoverColor="blue"
          borderColor="green"
        />
      );
      expect(root(container).style.getPropertyValue('--dg-striped-color')).toBe(
        'var(--mantine-color-red-filled)'
      );
      expect(root(container).style.getPropertyValue('--dg-hover-color')).toBe(
        'var(--mantine-color-blue-filled)'
      );
      expect(root(container).style.getPropertyValue('--dg-border-color')).toBe(
        'var(--mantine-color-green-filled)'
      );
    });

    it('reflects column borders on the root', () => {
      const { container, rerender } = render(<DataGrid {...defaultProps} withColumnBorders />);
      expect(root(container)).toHaveAttribute('data-column-borders', 'all');
      rerender(
        <>
          <DataGrid {...defaultProps} withColumnBorders="data" />
        </>
      );
      expect(root(container)).toHaveAttribute('data-column-borders', 'data');
      rerender(
        <>
          <DataGrid {...defaultProps} />
        </>
      );
      expect(root(container)).not.toHaveAttribute('data-column-borders');
    });

    it('drives hover highlight from the root instead of per-row attributes', () => {
      const { container } = render(<DataGrid {...defaultProps} highlightOnHover />);
      expect(root(container)).toHaveAttribute('data-highlight-on-hover');
      expect(container.querySelector('tr[data-hover]')).not.toBeInTheDocument();
    });

    it('is static by default', () => {
      const { container } = render(<DataGrid {...defaultProps} />);
      expect(root(container)).not.toHaveAttribute('data-highlight-on-hover');
    });

    it('reflects tabularNums on the root', () => {
      const { container } = render(<DataGrid {...defaultProps} tabularNums />);
      expect(root(container)).toHaveAttribute('data-tabular-nums');
    });
  });

  describe('height', () => {
    it('does not constrain the scroll container without height', () => {
      const { container } = render(<DataGrid {...defaultProps} />);
      const scrollArea = container.querySelector(
        '.mantine-DataGrid-scrollContainer'
      ) as HTMLElement;
      expect(scrollArea.style.height).toBe('');
      expect(container.querySelector('.mantine-ScrollArea-viewport')).toHaveAttribute(
        'data-scrollbars',
        'x'
      );
    });

    it('sizes the ScrollArea and enables vertical scrolling when height is set', () => {
      const { container } = render(<DataGrid {...defaultProps} height={300} stickyHeader />);
      const scrollArea = container.querySelector(
        '.mantine-DataGrid-scrollContainer'
      ) as HTMLElement;
      expect(scrollArea.style.height).toBe('calc(18.75rem * var(--mantine-scale))');
      expect(container.querySelector('.mantine-ScrollArea-viewport')).toHaveAttribute(
        'data-scrollbars',
        'xy'
      );
      expect(container.querySelector('.mantine-DataGrid-root')).toHaveAttribute(
        'data-sticky-header'
      );
    });

    it('keeps the height when scrollAreaProps carry their own style and className', () => {
      const { container } = render(
        <DataGrid
          {...defaultProps}
          height={300}
          scrollAreaProps={{ className: 'custom-scroll-area', style: { background: 'red' } }}
        />
      );
      const scrollArea = container.querySelector(
        '.mantine-DataGrid-scrollContainer'
      ) as HTMLElement;
      expect(scrollArea.style.height).toBe('calc(18.75rem * var(--mantine-scale))');
      expect(scrollArea.style.background).toBe('red');
      expect(scrollArea).toHaveClass('custom-scroll-area');
    });

    it('sizes the plain scroll container when height is set without ScrollArea', () => {
      const { container } = render(
        <DataGrid {...defaultProps} height="20rem" withScrollArea={false} />
      );
      const wrapper = container.querySelector('table')!.parentElement as HTMLElement;
      expect(wrapper.style.height).toBe('20rem');
      expect(wrapper.style.overflow).toBe('auto');
    });
  });

  describe('virtual body last row', () => {
    let restoreViewport: () => void;

    beforeEach(() => {
      restoreViewport = mockVirtualViewport();
    });

    afterEach(() => {
      restoreViewport();
    });

    it('marks the last data row so its rule is dropped', () => {
      const { container } = render(<DataGrid {...defaultProps} virtualize="rows" height={300} />);
      const wrappers = container.querySelectorAll('[data-index]');
      expect(wrappers).toHaveLength(3);
      expect(wrappers[0]).not.toHaveAttribute('data-last-row');
      expect(wrappers[2]).toHaveAttribute('data-last-row');
    });

    it('marks the last row of the column-virtualized body', () => {
      const { container } = render(
        <DataGrid {...defaultProps} virtualize="columns" height={300} />
      );
      const wrappers = container.querySelectorAll('[data-last-row]');
      expect(wrappers).toHaveLength(1);
      expect(wrappers[0]).toHaveTextContent('Charlie');
    });
  });

  it('renders data and columns when the store prop is removed at runtime', () => {
    const { rerender } = render(<DataGridToggleStore withStore />);
    expect(screen.getByText('Alice')).toBeInTheDocument();

    rerender(
      <>
        <DataGridToggleStore withStore={false} />
      </>
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });
});
