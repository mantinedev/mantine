import { act } from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from './DataGrid';
import { DataGridStore, useDataGrid, UseDataGridOptions } from './hooks/use-data-grid';
import { mockVirtualViewport } from './virtual-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name', size: 100 },
  { accessorKey: 'team', header: 'Team', size: 120 },
  { accessorKey: 'score', header: 'Score', size: 80 },
  { accessorKey: 'status', header: 'Status', size: 90 },
];

const data = [
  { id: 'a', name: 'Alice', team: 'Red', score: 1, status: 'ok' },
  { id: 'b', name: 'Bob', team: 'Blue', score: 2, status: 'ok' },
];

let lastStore: DataGridStore<any> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<any>> }) {
  const store = useDataGrid({
    data,
    columns,
    getRowId: (row: any) => row.id,
    withColumnPinning: true,
    columnPinning: { start: ['name', 'team'], end: ['score', 'status'] },
    ...storeOptions,
  });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

const pinnedOffset = (element: Element | null) =>
  (element as HTMLElement).style.getPropertyValue('--dg-pinned-offset');

describe('@mantine/data-grid/pinned-columns', () => {
  it('emits logical pinned attributes and one offset variable per header cell', () => {
    const { container } = render(<Grid />);
    const [name, team, score, status] = Array.from(container.querySelectorAll('thead th'));

    expect(name).toHaveAttribute('data-pinned', 'start');
    expect(name).not.toHaveAttribute('data-pinned-edge');
    expect(pinnedOffset(name)).toBe('0px');

    expect(team).toHaveAttribute('data-pinned', 'start');
    expect(team).toHaveAttribute('data-pinned-edge');
    expect(pinnedOffset(team)).toBe('100px');

    expect(score).toHaveAttribute('data-pinned', 'end');
    expect(score).toHaveAttribute('data-pinned-edge');
    expect(pinnedOffset(score)).toBe('90px');

    expect(status).toHaveAttribute('data-pinned', 'end');
    expect(status).not.toHaveAttribute('data-pinned-edge');
    expect(pinnedOffset(status)).toBe('0px');
  });

  it('emits the same attributes on body cells and no inline sticky styles', () => {
    const { container } = render(<Grid />);
    const cells = Array.from(container.querySelectorAll('tbody tr:first-child td'));
    expect(cells.map((cell) => cell.getAttribute('data-pinned'))).toEqual([
      'start',
      'start',
      'end',
      'end',
    ]);
    expect(cells.map((cell) => cell.hasAttribute('data-pinned-edge'))).toEqual([
      false,
      true,
      true,
      false,
    ]);
    expect(pinnedOffset(cells[1])).toBe('100px');
    expect((cells[1] as HTMLElement).style.position).toBe('');
    expect((cells[1] as HTMLElement).style.left).toBe('');
    expect(container.querySelector('[data-pinned-left]')).not.toBeInTheDocument();
    expect(container.querySelector('[data-pinned-right]')).not.toBeInTheDocument();
  });

  it('emits root data-column-pinning only when column pinning is enabled', () => {
    const { container, rerender } = render(<Grid />);
    expect(container.querySelector('[data-column-pinning]')).toBeInTheDocument();

    rerender(<Grid storeOptions={{ withColumnPinning: false, columnPinning: undefined }} />);
    expect(container.querySelector('[data-column-pinning]')).not.toBeInTheDocument();
    expect(container.querySelector('[data-pinned]')).not.toBeInTheDocument();
  });

  it('computes the edge from the visible pinned columns', () => {
    const { container } = render(
      <Grid storeOptions={{ columnVisibility: { team: false, score: false } }} />
    );
    const [name, status] = Array.from(container.querySelectorAll('thead th'));
    expect(name).toHaveAttribute('data-pinned-edge');
    expect(status).toHaveAttribute('data-pinned-edge');
    expect(pinnedOffset(status)).toBe('0px');
  });

  it('marks group row cells and expansion panel utility cells', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withGrouping: true,
          grouping: ['team'],
          expanded: true,
          columnPinning: { start: ['name'], end: [] },
        }}
      />
    );
    const groupCells = container
      .querySelector('tr[data-group-row]')!
      .querySelectorAll('td[data-pinned="start"]');
    expect(groupCells).toHaveLength(2);
    expect(groupCells[0]).toHaveAttribute('data-utility', 'expand');
    expect(groupCells[0]).not.toHaveAttribute('data-pinned-edge');
    expect(groupCells[1]).toHaveAttribute('data-pinned-edge');
  });

  it('marks expansion panel utility cells', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withRowExpansion: true,
          withRowSelection: true,
          expanded: { a: true },
          columnPinning: { start: [], end: [] },
        }}
        renderExpandedRow={() => <div>panel</div>}
      />
    );
    const panelCells = container.querySelectorAll('tr[data-expanded-row] td[data-utility]');
    expect(panelCells).toHaveLength(2);
    expect(panelCells[0]).toHaveAttribute('data-pinned', 'start');
    expect(panelCells[1]).toHaveAttribute('data-pinned', 'start');
    expect(panelCells[1]).toHaveAttribute('data-pinned-edge');
    expect(pinnedOffset(panelCells[1])).not.toBe('');
  });

  it('pins a header group only when every leaf it spans shares the side', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          columns: [
            {
              id: 'person',
              header: 'Person',
              columns: [
                { accessorKey: 'name', header: 'Name', size: 100 },
                { accessorKey: 'team', header: 'Team', size: 120 },
              ],
            },
            { accessorKey: 'score', header: 'Score', size: 80 },
          ],
          columnPinning: { start: ['name'], end: [] },
        }}
      />
    );
    const group = container.querySelector('th[data-header-group]')!;
    expect(group).toHaveTextContent('Person');
    expect(group).not.toHaveAttribute('data-pinned');
    expect(
      container.querySelector('thead tr:last-child th[data-pinned="start"]')
    ).toHaveTextContent('Name');
  });

  it('writes overflow state on the root from the scroll viewport', () => {
    const proto = Element.prototype;
    const original = {
      scrollWidth: Object.getOwnPropertyDescriptor(proto, 'scrollWidth'),
      clientWidth: Object.getOwnPropertyDescriptor(proto, 'clientWidth'),
    };
    Object.defineProperty(proto, 'scrollWidth', { configurable: true, get: () => 1000 });
    Object.defineProperty(proto, 'clientWidth', { configurable: true, get: () => 400 });

    try {
      const { container } = render(<Grid />);
      const root = container.querySelector('[data-column-pinning]')!;
      const viewport = lastStore!.scrollContainerRef.current!;
      expect(viewport).toHaveAttribute('data-scrollarea-viewport');

      expect(root).not.toHaveAttribute('data-overflow-start');
      expect(root).toHaveAttribute('data-overflow-end');

      viewport.scrollLeft = 100;
      act(() => {
        fireEvent.scroll(viewport);
      });
      expect(root).toHaveAttribute('data-overflow-start');
      expect(root).toHaveAttribute('data-overflow-end');

      viewport.scrollLeft = 600;
      act(() => {
        fireEvent.scroll(viewport);
      });
      expect(root).toHaveAttribute('data-overflow-start');
      expect(root).not.toHaveAttribute('data-overflow-end');
    } finally {
      Object.defineProperty(proto, 'scrollWidth', original.scrollWidth!);
      Object.defineProperty(proto, 'clientWidth', original.clientWidth!);
    }
  });

  describe('virtual body', () => {
    let restoreViewport: () => void;

    beforeEach(() => {
      restoreViewport = mockVirtualViewport();
    });

    afterEach(() => {
      restoreViewport();
    });

    it('emits the same attributes on virtual header and body cells', () => {
      const { container } = render(<Grid virtualize="rows" height={200} />);
      const headers = Array.from(container.querySelectorAll('[role="columnheader"]'));
      expect(headers.map((cell) => cell.getAttribute('data-pinned'))).toEqual([
        'start',
        'start',
        'end',
        'end',
      ]);
      expect(headers[1]).toHaveAttribute('data-pinned-edge');
      expect(pinnedOffset(headers[1])).toBe('100px');
      expect((headers[1] as HTMLElement).style.position).toBe('');

      const cells = Array.from(
        container.querySelectorAll('[role="row"][data-row-id] [role="gridcell"]')
      ).slice(0, 4);
      expect(cells.map((cell) => cell.getAttribute('data-pinned'))).toEqual([
        'start',
        'start',
        'end',
        'end',
      ]);
      expect(cells[2]).toHaveAttribute('data-pinned-edge');
      expect(pinnedOffset(cells[2])).toBe('90px');
      expect(container.querySelector('[data-pinned-left]')).not.toBeInTheDocument();
    });

    it('renders pinned columns in pin-region order with matching widths', () => {
      const { container } = render(
        <Grid
          virtualize="rows"
          height={200}
          storeOptions={{ columnPinning: { start: ['status'], end: ['name'] } }}
        />
      );
      const headers = Array.from(container.querySelectorAll('[role="columnheader"]'));
      expect(headers.map((cell) => cell.textContent)).toEqual(['Status', 'Team', 'Score', 'Name']);
      expect(headers[0]).toHaveAttribute('data-pinned', 'start');
      expect(headers[3]).toHaveAttribute('data-pinned', 'end');

      const grid = container.querySelector('[role="grid"]') as HTMLElement;
      expect(grid.style.getPropertyValue('--dg-col-0')).toBe('90px');
      expect(grid.style.getPropertyValue('--dg-col-3')).toBe('100px');

      const cells = Array.from(
        container.querySelectorAll('[role="row"][data-row-id] [role="gridcell"]')
      ).slice(0, 4);
      expect(cells.map((cell) => cell.textContent)).toEqual(['ok', 'Red', '1', 'Alice']);
      expect(cells[0]).toHaveAttribute('data-pinned', 'start');
      expect(cells[0]).toHaveAttribute('data-pinned-edge');
      expect(cells[3]).toHaveAttribute('data-pinned', 'end');
    });
  });
});
