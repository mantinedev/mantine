import { render, screen } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from './DataGrid';
import { DataGridEmptyStatePayload } from './DataGrid.types';
import { useDataGrid, UseDataGridOptions } from './hooks/use-data-grid';
import { DEFAULT_LABELS } from './labels';
import { mockVirtualViewport } from './virtual-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'score', header: 'Score', meta: { align: 'end' as const } },
];

const data = [
  { id: 'a', name: 'Alice', score: 1 },
  { id: 'b', name: 'Bob', score: 2 },
  { id: 'c', name: 'Charlie', score: 3 },
];

function Grid({
  rows = data,
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & {
  rows?: typeof data;
  storeOptions?: Partial<UseDataGridOptions<any>>;
}) {
  const store = useDataGrid({
    data: rows,
    columns,
    getRowId: (row: any) => row.id,
    ...storeOptions,
  });
  return <DataGrid store={store} {...props} />;
}

const rootOf = (container: HTMLElement) => container.querySelector('[data-size]') as HTMLElement;

describe('@mantine/data-grid/states/empty-state', () => {
  it('renders nothing for an empty grid without emptyState and has no label', () => {
    const { container } = render(<Grid rows={[]} />);
    expect(container.querySelector('tbody tr')).not.toBeInTheDocument();
    expect('emptyStateText' in DEFAULT_LABELS).toBe(false);
  });

  it('renders the node form in one bare full-width cell', () => {
    const { container } = render(<Grid rows={[]} emptyState={<div>Nothing here</div>} />);
    const row = container.querySelector('tbody tr')!;
    const cell = row.querySelector('td')!;
    expect(row).toHaveAttribute('data-empty-row');
    expect(row).not.toHaveAttribute('tabindex');
    expect(row).not.toHaveAttribute('data-row-id');
    expect(cell).toHaveAttribute('colspan', '2');
    expect(cell).toHaveClass('mantine-DataGrid-emptyState');
    expect(cell).toHaveTextContent('Nothing here');
    expect(row.querySelectorAll('td')).toHaveLength(1);
  });

  it('calls the function form with the payload', () => {
    const emptyState = jest.fn((payload: DataGridEmptyStatePayload) => (
      <div>
        {payload.isFiltered ? 'filtered' : 'plain'} {payload.filteredRowCount}/{payload.rowCount}
      </div>
    ));
    const { unmount } = render(
      <Grid
        emptyState={emptyState}
        storeOptions={{ withFiltering: true, columnFilters: [{ id: 'name', value: 'zzz' }] }}
      />
    );
    expect(screen.getByText('filtered 0/3')).toBeInTheDocument();
    expect(emptyState.mock.calls[0][0].table.getCoreRowModel().rows).toHaveLength(3);
    unmount();

    render(<Grid rows={[]} emptyState={emptyState} />);
    expect(screen.getByText('plain 0/0')).toBeInTheDocument();
  });

  it('is hidden while loading', () => {
    const { container } = render(<Grid rows={[]} loading emptyState={<div>Nothing here</div>} />);
    expect(screen.queryByText('Nothing here')).not.toBeInTheDocument();
    expect(container.querySelectorAll('tbody tr[data-skeleton-row]').length).toBeGreaterThan(0);
  });

  it('counts pinned rows as rows', () => {
    const { container } = render(
      <Grid
        emptyState={<div>Nothing here</div>}
        storeOptions={{
          withRowPinning: true,
          keepPinnedRows: true,
          rowPinning: { top: ['a'], bottom: [] },
          withFiltering: true,
          columnFilters: [{ id: 'name', value: 'zzz' }],
        }}
      />
    );
    expect(
      container.querySelector('tbody[data-pinned="top"] tr[data-row-id="a"]')
    ).toBeInTheDocument();
    expect(screen.queryByText('Nothing here')).not.toBeInTheDocument();
  });
});

describe('@mantine/data-grid/states/loading', () => {
  it('reflects the variant on the root only while loading', () => {
    const { container, rerender } = render(<Grid loading loadingVariant="bar" />);
    const root = rootOf(container);
    expect(root).toHaveAttribute('data-loading');
    expect(root).toHaveAttribute('data-loading-variant', 'bar');
    expect(container.querySelector('table')).toHaveAttribute('aria-busy', 'true');

    rerender(
      <>
        <Grid loadingVariant="bar" />
      </>
    );
    expect(root).not.toHaveAttribute('data-loading');
    expect(root).not.toHaveAttribute('data-loading-variant');
    expect(container.querySelector('table')).not.toHaveAttribute('aria-busy');
  });

  it('renders the overlay above the body over existing rows by default', () => {
    const { container } = render(<Grid loading />);
    expect(rootOf(container)).toHaveAttribute('data-loading-variant', 'overlay');
    const overlay = container.querySelector('.mantine-DataGrid-loadingOverlay') as HTMLElement;
    expect(overlay).toBeInTheDocument();
    expect(overlay.style.top).toBe('var(--dg-thead-height, 0px)');
    expect(overlay.parentElement).toContainElement(container.querySelector('table'));
    expect(container.querySelectorAll('tbody tr[data-row-id]')).toHaveLength(3);
    expect(container.querySelector('.mantine-DataGrid-loadingBar')).not.toBeInTheDocument();
  });

  it('passes loadingOverlayProps through', () => {
    const { container } = render(
      <Grid loading loadingOverlayProps={{ overlayProps: { blur: 0 }, zIndex: 7 }} />
    );
    const overlay = container.querySelector('.mantine-DataGrid-loadingOverlay') as HTMLElement;
    expect(overlay.style.getPropertyValue('--lo-z-index')).toBe('7');
  });

  it('renders the bar variant with rows kept interactive', () => {
    const { container } = render(<Grid loading loadingVariant="bar" />);
    expect(container.querySelector('.mantine-DataGrid-loadingBar')).toBeInTheDocument();
    expect(container.querySelector('.mantine-DataGrid-loadingOverlay')).not.toBeInTheDocument();
    expect(container.querySelectorAll('tbody tr[data-row-id]')).toHaveLength(3);
  });

  it('renders skeleton rows on first load regardless of the variant', () => {
    const { container } = render(<Grid rows={[]} loading loadingVariant="bar" />);
    const rows = container.querySelectorAll('tbody tr[data-skeleton-row]');
    expect(rows).toHaveLength(10);
    expect(rows[0]).toHaveAttribute('aria-hidden', 'true');
    expect(rows[0]).not.toHaveAttribute('tabindex');
    expect(container.querySelector('.mantine-DataGrid-loadingBar')).not.toBeInTheDocument();
    expect(container.querySelector('.mantine-DataGrid-loadingOverlay')).not.toBeInTheDocument();
  });

  it('replaces existing rows under the skeleton variant', () => {
    const { container } = render(<Grid loading loadingVariant="skeleton" skeletonRowCount={4} />);
    expect(container.querySelectorAll('tbody tr[data-row-id]')).toHaveLength(0);
    expect(container.querySelectorAll('tbody tr[data-skeleton-row]')).toHaveLength(4);
  });

  it('uses the page size as the skeleton count under pagination', () => {
    const { container } = render(<Grid rows={[]} loading storeOptions={{ pageSize: 7 }} />);
    expect(container.querySelectorAll('tbody tr[data-skeleton-row]')).toHaveLength(7);
  });

  it('draws one skeleton bar per data cell with the width formula', () => {
    const { container } = render(
      <Grid rows={[]} loading skeletonRowCount={2} storeOptions={{ withRowSelection: true }} />
    );
    const rows = Array.from(container.querySelectorAll('tbody tr[data-skeleton-row]'));
    const cells = Array.from(rows[1].querySelectorAll('td'));
    expect(cells).toHaveLength(3);
    expect(cells[0]).toHaveAttribute('data-utility', 'select');
    expect(cells[0].querySelector('.mantine-DataGrid-skeleton')).not.toBeInTheDocument();
    expect(cells[2]).toHaveAttribute('data-align', 'end');

    const bar = cells[1].querySelector('.mantine-DataGrid-skeleton') as HTMLElement;
    expect(bar).toHaveClass('mantine-Skeleton-root');
    expect(bar.style.getPropertyValue('--skeleton-width')).toBe(
      `${40 + ((1 * 37 + 1 * 53) % 50)}%`
    );
    expect(bar.style.getPropertyValue('--skeleton-height')).toBe('calc(var(--dg-font-size) - 1px)');
  });

  it('keeps pinned attributes on skeleton cells', () => {
    const { container } = render(
      <Grid
        loading
        loadingVariant="skeleton"
        skeletonRowCount={1}
        storeOptions={{ withColumnPinning: true, columnPinning: { start: ['name'], end: [] } }}
      />
    );
    const cells = container.querySelectorAll('tbody tr[data-skeleton-row] td');
    expect(cells[0]).toHaveAttribute('data-pinned', 'start');
    expect(cells[0]).toHaveAttribute('data-pinned-edge');
    expect(cells[1]).not.toHaveAttribute('data-pinned');
  });

  it('falls back to the overlay in list view, which has no skeleton rows', () => {
    const { container, rerender } = render(<Grid rows={[]} listView loading />);
    expect(container.querySelector('.mantine-DataGrid-loadingOverlay')).toBeInTheDocument();
    expect(container.querySelector('[data-skeleton-row]')).not.toBeInTheDocument();

    rerender(
      <>
        <Grid listView loading loadingVariant="skeleton" />
      </>
    );
    expect(container.querySelector('.mantine-DataGrid-loadingOverlay')).toBeInTheDocument();
    expect(container.querySelectorAll('.mantine-DataGrid-listItem')).toHaveLength(3);

    rerender(
      <>
        <Grid listView loading loadingVariant="bar" />
      </>
    );
    expect(container.querySelector('.mantine-DataGrid-loadingBar')).toBeInTheDocument();
    expect(container.querySelector('.mantine-DataGrid-loadingOverlay')).not.toBeInTheDocument();
  });

  describe('virtual body', () => {
    let restoreViewport: () => void;

    beforeEach(() => {
      restoreViewport = mockVirtualViewport();
    });

    afterEach(() => {
      restoreViewport();
    });

    it('renders the empty state in one spanning virtual cell', () => {
      const { container } = render(
        <Grid rows={[]} virtualize="rows" height={200} emptyState={<div>Nothing here</div>} />
      );
      const row = container.querySelector('[role="row"][data-empty-row]')!;
      const cell = row.querySelector('[role="gridcell"]')!;
      expect(cell).toHaveAttribute('aria-colspan', '2');
      expect(cell).toHaveClass('mantine-DataGrid-emptyState');
      expect(cell).toHaveTextContent('Nothing here');
    });

    it('renders skeleton rows and aria-busy on the grid', () => {
      const { container } = render(
        <Grid
          virtualize="rows"
          height={200}
          loading
          loadingVariant="skeleton"
          skeletonRowCount={3}
          storeOptions={{ withColumnPinning: true, columnPinning: { start: ['name'], end: [] } }}
        />
      );
      expect(container.querySelector('[role="grid"]')).toHaveAttribute('aria-busy', 'true');
      const rows = container.querySelectorAll('[role="row"][data-skeleton-row]');
      expect(rows).toHaveLength(3);
      expect(rows[0]).toHaveAttribute('aria-hidden', 'true');
      expect(rows[0].querySelectorAll('.mantine-DataGrid-skeleton')).toHaveLength(2);
      expect(rows[0].querySelector('[role="gridcell"]')).toHaveAttribute('data-pinned', 'start');
      expect(container.querySelectorAll('[role="row"][data-row-id]')).toHaveLength(0);
    });

    it('renders the overlay and bar variants over virtual rows', () => {
      const { container, rerender } = render(<Grid virtualize="rows" height={200} loading />);
      expect(container.querySelector('.mantine-DataGrid-loadingOverlay')).toBeInTheDocument();
      expect(container.querySelectorAll('[role="row"][data-row-id]')).toHaveLength(3);

      rerender(
        <>
          <Grid virtualize="rows" height={200} loading loadingVariant="bar" />
        </>
      );
      expect(container.querySelector('.mantine-DataGrid-loadingBar')).toBeInTheDocument();
      expect(rootOf(container)).toHaveAttribute('data-loading-variant', 'bar');
    });
  });
});
