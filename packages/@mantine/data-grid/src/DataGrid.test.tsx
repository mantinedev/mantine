import { act, createRef, Ref } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { dataGridFeatures } from './table-features';
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
  it('does not build row models for the internal store when a store is passed', () => {
    const rowModelKeys = [
      'sortedRowModel',
      'filteredRowModel',
      'paginatedRowModel',
      'expandedRowModel',
      'groupedRowModel',
    ] as const;
    const builtFor = new Set<unknown>();
    const spies = rowModelKeys.map((key) => {
      const original = dataGridFeatures[key] as (table: any) => unknown;
      return jest.spyOn(dataGridFeatures, key).mockImplementation(((table: any) => {
        builtFor.add(table.store);
        return original(table);
      }) as any);
    });

    let store: DataGridStore | null = null;
    function Grid() {
      store = useDataGrid({ data, columns });
      return <DataGrid store={store} />;
    }

    try {
      const { rerender } = render(<Grid />);
      rerender(<Grid />);
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(Array.from(builtFor)).toEqual([store!.table.store]);
    } finally {
      spies.forEach((spy) => spy.mockRestore());
    }
  });

  tests.itSupportsSystemProps<DataGridProps, DataGridStylesNames>({
    component: DataGrid,
    props: defaultProps,
    varsResolver: true,
    size: false,
    displayName: '@mantine/data-grid/DataGrid',
    stylesApiSelectors: ['root', 'table'],
  });

  it('applies styles api inline styles to th and td', () => {
    const { container } = render(
      <DataGrid {...defaultProps} styles={{ th: { fontWeight: 700 }, td: { color: 'red' } }} />
    );
    const th = container.querySelector('thead th') as HTMLElement;
    const td = container.querySelector('tbody td') as HTMLElement;
    expect(th.style.fontWeight).toBe('700');
    expect(th.style.width).toBe('150px');
    expect(td.style.color).toBe('red');
  });

  it('renders column headers and data rows', () => {
    const { container } = render(<DataGrid {...defaultProps} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
    expect(container.querySelectorAll('tbody tr')).toHaveLength(3);
  });

  it('renders empty table when data is empty', () => {
    const { container } = render(<DataGrid data={[]} columns={columns} />);
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(0);
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

    it('moves to the last page when data shrinks below the current page', () => {
      let store: DataGridStore<any> | null = null;
      function Grid({ rows }: { rows: typeof paginationData }) {
        store = useDataGrid({ data: rows, columns, pageSize: 5, autoResetPageIndex: false });
        return <DataGrid store={store} />;
      }

      const { container, rerender } = render(<Grid rows={paginationData} />);
      act(() => store!.table.setPageIndex(2));
      expect(container.querySelector('tbody tr td')).toHaveTextContent('Person 11');

      rerender(<Grid rows={paginationData.slice(0, 10)} />);
      expect(store!.pagination.pageIndex).toBe(1);
      expect(container.querySelector('tbody tr td')).toHaveTextContent('Person 6');

      rerender(<Grid rows={[]} />);
      expect(store!.pagination.pageIndex).toBe(1);
    });
  });

  describe('row selection', () => {
    it('selects row on checkbox click', async () => {
      const { container } = render(
        <DataGridWithStore storeOptions={{ data, columns, withRowSelection: true }} />
      );
      const checkboxes = screen.getAllByRole('checkbox');
      await userEvent.click(checkboxes[1]);

      const selectedRow = container.querySelector('tr[data-selected]');
      expect(selectedRow).toBeInTheDocument();
    });

    it.each([undefined, 2])(
      'shows a checked, not indeterminate, header checkbox when all rows are selected (pageSize: %s)',
      async (pageSize) => {
        const { container } = render(
          <DataGridWithStore storeOptions={{ data, columns, withRowSelection: true, pageSize }} />
        );
        const header = container.querySelector<HTMLInputElement>('thead input[type="checkbox"]')!;
        await userEvent.click(container.querySelector('tbody input[type="checkbox"]')!);
        expect(header.indeterminate).toBe(true);

        await userEvent.click(header);
        expect(header.checked).toBe(true);
        expect(header.indeterminate).toBe(false);
      }
    );

    it('renders a disabled checkbox for rows that cannot be selected', () => {
      const { container } = render(
        <DataGridWithStore
          storeOptions={{
            data,
            columns,
            withRowSelection: true,
            tableOptions: { enableRowSelection: (row: any) => row.original.age > 26 },
          }}
        />
      );
      const checkboxes = container.querySelectorAll<HTMLInputElement>(
        'tbody input[type="checkbox"]'
      );
      expect(Array.from(checkboxes).map((checkbox) => checkbox.disabled)).toEqual([
        false,
        true,
        false,
      ]);
    });
  });

  describe('row expansion', () => {
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
    it('continues row numbers on the next page', () => {
      const { container } = render(
        <DataGridWithStore
          storeOptions={{
            data,
            columns,
            withRowNumbers: true,
            pagination: { pageIndex: 1, pageSize: 2 },
            onPaginationChange: () => {},
          }}
        />
      );
      const cells = container.querySelectorAll('tbody td[data-utility="rowNumber"]');
      expect(Array.from(cells).map((cell) => cell.textContent)).toEqual(['3']);
    });

    it('does not count pinned rows on earlier pages', () => {
      const { container } = render(
        <DataGridWithStore
          storeOptions={{
            data,
            columns,
            withRowNumbers: true,
            rowPinning: { top: ['0'], bottom: [] },
            onRowPinningChange: () => {},
            pagination: { pageIndex: 1, pageSize: 2 },
            onPaginationChange: () => {},
          }}
        />
      );
      const numbers = Array.from(
        container.querySelectorAll('tbody:not([data-pinned]) td[data-utility="rowNumber"]')
      ).map((cell) => cell.textContent);
      expect(numbers).toEqual(['2']);
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

    it('updates body cells when column visibility and order change after mount', () => {
      let store: DataGridStore<any> | null = null;
      function Grid() {
        store = useDataGrid({ data, columns, withColumnVisibility: true });
        return <DataGrid store={store} />;
      }

      const { container } = render(<Grid />);
      const firstRowCells = () =>
        Array.from(container.querySelectorAll('tbody tr:first-child td')).map(
          (cell) => cell.textContent
        );
      expect(firstRowCells()).toEqual(['Alice', '30']);

      act(() => store!.table.setColumnOrder(['age', 'name']));
      expect(firstRowCells()).toEqual(['30', 'Alice']);

      act(() => store!.table.setColumnVisibility({ name: false }));
      expect(firstRowCells()).toEqual(['30']);
    });
  });

  describe('TanStack Table v9 regressions', () => {
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

      rerender(<DataGrid {...defaultProps} withRowBorders="subtle" />);
      expect(root(container)).toHaveAttribute('data-with-row-borders');
      expect(root(container)).toHaveAttribute('data-row-borders', 'subtle');

      rerender(<DataGrid {...defaultProps} withRowBorders={false} />);
      expect(root(container)).not.toHaveAttribute('data-with-row-borders');
    });

    it('stripes odd rows by default and even rows on request', () => {
      const { container, rerender } = render(<DataGrid {...defaultProps} striped />);
      let rows = container.querySelectorAll('tbody tr');
      expect(rows[0]).toHaveAttribute('data-striped');
      expect(rows[1]).not.toHaveAttribute('data-striped');
      expect(rows[2]).toHaveAttribute('data-striped');

      rerender(<DataGrid {...defaultProps} striped="even" />);
      rows = container.querySelectorAll('tbody tr');
      expect(rows[0]).not.toHaveAttribute('data-striped');
      expect(rows[1]).toHaveAttribute('data-striped');

      rerender(<DataGrid {...defaultProps} />);
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
      rerender(<DataGrid {...defaultProps} withColumnBorders="data" />);
      expect(root(container)).toHaveAttribute('data-column-borders', 'data');
      rerender(<DataGrid {...defaultProps} />);
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
    it('keeps the ScrollArea and its props for onScrollToBottom without virtualization', () => {
      const onScrollToBottom = jest.fn();
      const onViewportScroll = jest.fn();
      const { container } = render(
        <DataGrid
          {...defaultProps}
          height={300}
          onScrollToBottom={onScrollToBottom}
          scrollAreaProps={{
            className: 'custom-area',
            viewportProps: { onScroll: onViewportScroll },
          }}
        />
      );
      const scrollArea = container.querySelector(
        '.mantine-DataGrid-scrollContainer'
      ) as HTMLElement;
      expect(scrollArea).toHaveClass('mantine-ScrollArea-root');
      expect(scrollArea).toHaveClass('custom-area');
      const scrollContainer = container.querySelector('[data-dg-scroll]') as HTMLElement;
      expect(scrollContainer).toHaveClass('mantine-ScrollArea-viewport');
      expect(scrollContainer.querySelector('table')).toBeInTheDocument();

      Object.defineProperty(scrollContainer, 'scrollHeight', { configurable: true, value: 1000 });
      Object.defineProperty(scrollContainer, 'clientHeight', { configurable: true, value: 300 });
      scrollContainer.scrollTop = 100;
      act(() => {
        scrollContainer.dispatchEvent(new Event('scroll'));
      });
      expect(onScrollToBottom).not.toHaveBeenCalled();
      expect(onViewportScroll).toHaveBeenCalledTimes(1);

      scrollContainer.scrollTop = 700;
      act(() => {
        scrollContainer.dispatchEvent(new Event('scroll'));
      });
      expect(onScrollToBottom).toHaveBeenCalledTimes(1);
      expect(onViewportScroll).toHaveBeenCalledTimes(2);
    });

    it('uses a plain scroll container for onScrollToBottom when withScrollArea is false', () => {
      const onScrollToBottom = jest.fn();
      const { container } = render(
        <DataGrid
          {...defaultProps}
          height={300}
          withScrollArea={false}
          onScrollToBottom={onScrollToBottom}
        />
      );
      const scrollContainer = container.querySelector('[data-dg-scroll]') as HTMLElement;
      expect(scrollContainer).toHaveClass('mantine-DataGrid-scrollContainer');
      expect(scrollContainer).not.toHaveClass('mantine-ScrollArea-viewport');
      expect(scrollContainer.style.overflow).toBe('auto');

      Object.defineProperty(scrollContainer, 'scrollHeight', { configurable: true, value: 1000 });
      Object.defineProperty(scrollContainer, 'clientHeight', { configurable: true, value: 300 });
      scrollContainer.scrollTop = 700;
      act(() => {
        scrollContainer.dispatchEvent(new Event('scroll'));
      });
      expect(onScrollToBottom).toHaveBeenCalledTimes(1);
    });

    it.each([true, false])(
      'does not call onScrollToBottom on horizontal scroll without height (withScrollArea=%s)',
      (withScrollArea) => {
        const onScrollToBottom = jest.fn();
        const { container } = render(
          <DataGrid
            {...defaultProps}
            withScrollArea={withScrollArea}
            onScrollToBottom={onScrollToBottom}
          />
        );
        const scrollContainer = container.querySelector('[data-dg-scroll]') as HTMLElement;
        Object.defineProperty(scrollContainer, 'scrollHeight', { configurable: true, value: 200 });
        Object.defineProperty(scrollContainer, 'clientHeight', { configurable: true, value: 200 });
        scrollContainer.scrollLeft = 120;
        act(() => {
          scrollContainer.dispatchEvent(new Event('scroll'));
        });
        expect(onScrollToBottom).not.toHaveBeenCalled();
      }
    );

    it('ignores horizontal scroll events while already at the bottom', () => {
      const onScrollToBottom = jest.fn();
      const { container } = render(
        <DataGrid {...defaultProps} height={300} onScrollToBottom={onScrollToBottom} />
      );
      const scrollContainer = container.querySelector('[data-dg-scroll]') as HTMLElement;
      Object.defineProperty(scrollContainer, 'scrollHeight', { configurable: true, value: 1000 });
      Object.defineProperty(scrollContainer, 'clientHeight', { configurable: true, value: 300 });
      scrollContainer.scrollTop = 700;
      act(() => {
        scrollContainer.dispatchEvent(new Event('scroll'));
      });
      expect(onScrollToBottom).toHaveBeenCalledTimes(1);

      scrollContainer.scrollLeft = 50;
      act(() => {
        scrollContainer.dispatchEvent(new Event('scroll'));
      });
      expect(onScrollToBottom).toHaveBeenCalledTimes(1);
    });

    it('applies the scrollContainer Styles API selector without ScrollArea', () => {
      const { container } = render(
        <DataGrid
          {...defaultProps}
          withScrollArea={false}
          styles={{ scrollContainer: { outline: '1px solid red' } }}
        />
      );
      const wrapper = container.querySelector('table')!.parentElement as HTMLElement;
      expect(wrapper).toHaveClass('mantine-DataGrid-scrollContainer');
      expect(wrapper.style.overflowX).toBe('auto');
      expect(wrapper.style.outline).toBe('1px solid red');
    });

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

    it('merges scrollAreaProps.viewportRef with the grid scroll container ref', () => {
      const viewportRef = createRef<HTMLDivElement>();
      let store: DataGridStore | null = null;
      function Grid() {
        store = useDataGrid({ data, columns });
        return <DataGrid store={store} scrollAreaProps={{ viewportRef }} />;
      }

      const { container } = render(<Grid />);
      const viewport = container.querySelector('.mantine-ScrollArea-viewport');
      expect(viewport).toBeInstanceOf(HTMLDivElement);
      expect(viewportRef.current).toBe(viewport);
      expect(store!.scrollContainerRef.current).toBe(viewport);
    });

    it('re-attaches an inline scrollAreaProps.viewportRef without re-observing overflow', () => {
      const calls: (HTMLDivElement | null)[] = [];
      function Grid({ tick }: { tick: number }) {
        const store = useDataGrid({ data, columns, withColumnPinning: true });
        return (
          <DataGrid
            store={store}
            data-tick={tick}
            scrollAreaProps={{
              viewportRef: (node: HTMLDivElement | null) => {
                calls.push(node);
              },
            }}
          />
        );
      }

      const observe = jest.fn();
      const originalResizeObserver = window.ResizeObserver;
      window.ResizeObserver = class {
        observe = observe;
        unobserve() {}
        disconnect() {}
      } as any;

      try {
        const { rerender, container } = render(<Grid tick={0} />);
        const observeCalls = observe.mock.calls.length;
        rerender(<Grid tick={1} />);
        rerender(<Grid tick={2} />);
        const viewport = container.querySelector('.mantine-ScrollArea-viewport');
        expect(calls).toEqual([viewport, null, viewport, null, viewport]);
        expect(observe.mock.calls.length).toBe(observeCalls);
      } finally {
        window.ResizeObserver = originalResizeObserver;
      }
    });

    it('moves the viewport node to a new scrollAreaProps.viewportRef object', () => {
      const refA = createRef<HTMLDivElement>();
      const refB = createRef<HTMLDivElement>();
      function Grid({ viewportRef }: { viewportRef: Ref<HTMLDivElement> }) {
        const store = useDataGrid({ data, columns });
        return <DataGrid store={store} scrollAreaProps={{ viewportRef }} />;
      }

      const { rerender, container } = render(<Grid viewportRef={refA} />);
      const viewport = container.querySelector('.mantine-ScrollArea-viewport');
      expect(refA.current).toBe(viewport);
      rerender(<Grid viewportRef={refB} />);
      expect(refA.current).toBeNull();
      expect(refB.current).toBe(viewport);
    });

    it('moves the viewport node to a new scrollAreaProps.viewportRef callback and runs the old cleanup', () => {
      const events: string[] = [];
      const makeRef = (name: string) => (node: HTMLDivElement | null) => {
        events.push(`${name}:${node ? 'node' : 'null'}`);
        return () => {
          events.push(`${name}:cleanup`);
        };
      };
      const refA = makeRef('a');
      const refB = makeRef('b');
      function Grid({ viewportRef }: { viewportRef: Ref<HTMLDivElement> }) {
        const store = useDataGrid({ data, columns });
        return <DataGrid store={store} scrollAreaProps={{ viewportRef }} />;
      }

      const { rerender, unmount } = render(<Grid viewportRef={refA} />);
      expect(events).toEqual(['a:node']);
      rerender(<Grid viewportRef={refB} />);
      expect(events).toEqual(['a:node', 'a:cleanup', 'b:node']);
      rerender(<Grid viewportRef={refB} />);
      expect(events).toEqual(['a:node', 'a:cleanup', 'b:node']);
      unmount();
      expect(events).toEqual(['a:node', 'a:cleanup', 'b:node', 'b:cleanup']);
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

    rerender(<DataGridToggleStore withStore={false} />);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });
});
