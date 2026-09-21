import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from './DataGrid';
import { useDataGrid, UseDataGridOptions } from './hooks/use-data-grid';
import { mockVirtualViewport } from './virtual-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'team', header: 'Team' },
];

const data = [
  { id: 'a', name: 'Alice', team: 'Red' },
  { id: 'b', name: 'Bob', team: 'Red' },
  { id: 'c', name: 'Charlie', team: 'Blue' },
  { id: 'd', name: 'Dana', team: 'Blue' },
];

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<any>> }) {
  const store = useDataGrid({ data, columns, getRowId: (row: any) => row.id, ...storeOptions });
  return <DataGrid store={store} {...props} />;
}

const rootOf = (container: HTMLElement) => container.querySelector('[data-size]') as HTMLElement;

describe('@mantine/data-grid/sticky-header', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport(300);
  });

  afterEach(() => {
    restoreViewport();
  });

  it('writes stickyHeaderOffset as a private root variable', () => {
    const { container, rerender } = render(<Grid stickyHeader stickyHeaderOffset={48} />);
    const root = rootOf(container);
    expect(root).toHaveAttribute('data-sticky-header');
    expect(root.style.getPropertyValue('--dg-sticky-header-offset')).toBe(
      'calc(3rem * var(--mantine-scale))'
    );

    rerender(
      <>
        <Grid stickyHeader stickyHeaderOffset="var(--app-header)" />
      </>
    );
    expect(root.style.getPropertyValue('--dg-sticky-header-offset')).toBe('var(--app-header)');

    rerender(
      <>
        <Grid />
      </>
    );
    expect(root).not.toHaveAttribute('data-sticky-header');
    expect(root.style.getPropertyValue('--dg-sticky-header-offset')).toBe('');
  });

  it('writes the measured thead height on the root in the table body', () => {
    const { container } = render(<Grid />);
    expect(rootOf(container).style.getPropertyValue('--dg-thead-height')).toBe('300px');
  });

  it('writes the measured header height on the root in the virtual body', () => {
    const { container } = render(<Grid virtualize="rows" height={200} />);
    expect(rootOf(container).style.getPropertyValue('--dg-thead-height')).toBe('300px');
    expect(container.querySelector('[role="rowgroup"][data-virtual-thead]')).toBeInTheDocument();
  });
});

describe('@mantine/data-grid/pinned-rows', () => {
  const pinned = { withRowPinning: true, rowPinning: { top: ['a'], bottom: ['d'] } };

  it('renders three tbodies with data-pinned mirrored on rows', () => {
    const { container } = render(<Grid striped storeOptions={pinned} />);
    const tbodies = Array.from(container.querySelectorAll('tbody'));
    expect(tbodies.map((tbody) => tbody.getAttribute('data-pinned'))).toEqual([
      'top',
      null,
      'bottom',
    ]);

    const rows = Array.from(container.querySelectorAll('tbody tr[data-row-id]'));
    expect(rows.map((row) => row.getAttribute('data-row-id'))).toEqual(['a', 'b', 'c', 'd']);
    expect(rows.map((row) => row.getAttribute('data-pinned'))).toEqual([
      'top',
      null,
      null,
      'bottom',
    ]);
    expect(container.querySelector('[data-pinned-top]')).not.toBeInTheDocument();
    expect(container.querySelector('[data-pinned-bottom]')).not.toBeInTheDocument();
  });

  it('never stripes pinned rows and keeps the center stripe index', () => {
    const { container } = render(<Grid striped storeOptions={pinned} />);
    const rows = Array.from(container.querySelectorAll('tbody tr[data-row-id]'));
    expect(rows.map((row) => row.hasAttribute('data-striped'))).toEqual([
      false,
      true,
      false,
      false,
    ]);
  });

  it('forces row pinning off under any virtualize value with a warning', () => {
    const restoreViewport = mockVirtualViewport();
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    try {
      const { container } = render(
        <Grid virtualize="columns" height={200} storeOptions={pinned} />
      );
      expect(container.querySelector('[data-pinned="top"]')).not.toBeInTheDocument();
      expect(container.querySelectorAll('[role="row"][data-row-id]')).toHaveLength(4);
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('row pinning'));
    } finally {
      warn.mockRestore();
      restoreViewport();
    }
  });
});
