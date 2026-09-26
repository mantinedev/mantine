import { act } from 'react';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from './DataGrid';
import { useDataGrid, UseDataGridOptions } from './hooks';

const columns = [
  { accessorKey: 'name', header: 'Name', size: 100 },
  { accessorKey: 'team', header: 'Team', size: 120 },
  { accessorKey: 'score', header: 'Score', size: 80 },
];

const data = [
  { id: 'a', name: 'Alice', team: 'Red', score: 1 },
  { id: 'b', name: 'Bob', team: 'Blue', score: 2 },
];

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<any>> }) {
  const store = useDataGrid({
    data,
    columns,
    getRowId: (row: any) => row.id,
    ...storeOptions,
  });
  return <DataGrid store={store} {...props} />;
}

const headerWidths = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('thead tr:last-child th')).map(
    (th) => (th as HTMLElement).style.width
  );

describe('@mantine/data-grid/table-layout', () => {
  it('lets the last data column fill the remaining width in fixed layout', () => {
    const { container } = render(<Grid />);
    expect(headerWidths(container)).toEqual(['100px', '120px', '']);
    expect(container.querySelector('table')!.style.minWidth).toBe('300px');
  });

  it('keeps utility column widths and fills the last data column before them', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          columns: [
            ...columns,
            {
              id: 'actions',
              header: 'Actions',
              size: 60,
              meta: { utility: 'rowNumber' as const },
              cell: () => null,
            },
          ],
        }}
      />
    );
    const widths = headerWidths(container);
    expect(widths[widths.length - 1]).toBe('60px');
    expect(widths[widths.length - 2]).toBe('');
  });

  it('does not set a fill column or min width in auto layout', () => {
    const { container } = render(<Grid tableLayout="auto" />);
    expect(headerWidths(container)).toEqual(['', '', '']);
    expect(container.querySelector('table')!.style.minWidth).toBe('');
  });

  it('leaves the fill column width unset in the colgroup with header groups', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          columns: [
            {
              id: 'group',
              header: 'Group',
              columns: [
                { accessorKey: 'name', header: 'Name', size: 100 },
                { accessorKey: 'team', header: 'Team', size: 120 },
              ],
            },
            { accessorKey: 'score', header: 'Score', size: 80 },
          ],
        }}
      />
    );
    const cols = Array.from(container.querySelectorAll('col')).map((col) => col.style.width);
    expect(cols).toEqual(['100px', '120px', '']);
    const topRow = Array.from(container.querySelectorAll('thead tr:first-child th')).map(
      (th) => (th as HTMLElement).style.width
    );
    expect(topRow).toEqual(['220px', '']);
  });

  it('reserves horizontal scrollbar space only while the content overflows', () => {
    const proto = Element.prototype;
    const original = {
      scrollWidth: Object.getOwnPropertyDescriptor(proto, 'scrollWidth'),
      clientWidth: Object.getOwnPropertyDescriptor(proto, 'clientWidth'),
    };
    let scrollWidth = 400;
    const observers: ResizeObserverCallback[] = [];
    const originalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class {
      constructor(callback: ResizeObserverCallback) {
        observers.push(callback);
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;
    Object.defineProperty(proto, 'scrollWidth', { configurable: true, get: () => scrollWidth });
    Object.defineProperty(proto, 'clientWidth', { configurable: true, get: () => 400 });

    try {
      const { container } = render(<Grid />);
      const viewport = container.querySelector('[data-dg-scroll]')!;
      expect(viewport).not.toHaveAttribute('data-offset-scrollbars');

      scrollWidth = 600;
      act(() => {
        observers.forEach((callback) => callback([], {} as ResizeObserver));
      });
      expect(viewport).toHaveAttribute('data-offset-scrollbars', 'x');

      scrollWidth = 400;
      act(() => {
        observers.forEach((callback) => callback([], {} as ResizeObserver));
      });
      expect(viewport).not.toHaveAttribute('data-offset-scrollbars');
    } finally {
      window.ResizeObserver = originalResizeObserver;
      Object.defineProperty(proto, 'scrollWidth', original.scrollWidth!);
      Object.defineProperty(proto, 'clientWidth', original.clientWidth!);
    }
  });
});
