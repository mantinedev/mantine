import { act } from 'react';
import { render } from '@mantine-tests/core';
import { DataGrid } from '../DataGrid';
import { DataGridStore, useDataGrid } from '../hooks';
import { getRowScroller } from '../hooks/row-scroller';
import { mockVirtualViewport } from '../virtual-test-utils';
import { getVirtualColumnOffset, getVirtualMiddleWidth } from './virtual-columns-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = Array.from({ length: 20 }, (_, index) => ({ name: `Person ${index}`, age: index }));

let store: DataGridStore<any> | null = null;

function Grid(props: { virtualize?: 'rows' | 'columns' }) {
  store = useDataGrid({ data, columns });
  return <DataGrid store={store} height={300} getRowHeight={() => 60} {...props} />;
}

describe('@mantine/data-grid/virtual-body', () => {
  let restoreViewport: () => void;
  let scrollTo: jest.Mock;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
    scrollTo = jest.fn();
    HTMLElement.prototype.scrollTo = scrollTo;
  });

  afterEach(() => {
    restoreViewport();
    delete (HTMLElement.prototype as any).scrollTo;
    store = null;
  });

  it('marks its scroll container with data-dg-scroll', () => {
    const { container } = render(<Grid virtualize="rows" />);
    const scrollContainer = container.querySelector('[data-dg-scroll]');
    expect(scrollContainer).toBe(store!.scrollContainerRef.current);
    expect(scrollContainer!.querySelector('[role="grid"]')).not.toBeNull();
  });

  it('keeps the scroll container scrollable when unstyled', () => {
    function UnstyledGrid() {
      store = useDataGrid({ data, columns });
      return <DataGrid store={store} height={300} virtualize="rows" unstyled />;
    }

    render(<UnstyledGrid />);
    expect(store!.scrollContainerRef.current).toHaveStyle({ overflow: 'auto' });
  });

  it('scrolls to a row through the row virtualizer', () => {
    render(<Grid virtualize="rows" />);
    const scrollContainer = store!.scrollContainerRef.current!;
    Object.defineProperty(scrollContainer, 'scrollHeight', { configurable: true, value: 1200 });
    Object.defineProperty(scrollContainer, 'clientHeight', { configurable: true, value: 300 });
    store!.scrollToRow(12);
    expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ top: 12 * 60 }));
  });

  it('does not register the row scroller without row virtualization', () => {
    render(<Grid virtualize="columns" />);
    expect(getRowScroller(store!.table.store)).toBeUndefined();
  });

  it('clears the row scroller on unmount', () => {
    const { unmount } = render(<Grid virtualize="rows" />);
    const currentStore = store!;
    expect(getRowScroller(currentStore.table.store)).toBeInstanceOf(Function);
    unmount();
    expect(getRowScroller(currentStore.table.store)).toBeUndefined();
  });

  describe('cell spanning warning', () => {
    const spanColumns = [
      { accessorKey: 'name', header: 'Name', spanRows: true },
      { accessorKey: 'age', header: 'Age' },
    ];

    function SpanGrid(props: { virtualize?: 'rows'; enableCellSpanning?: boolean }) {
      const spanStore = useDataGrid({
        data,
        columns: spanColumns,
        tableOptions: { enableCellSpanning: props.enableCellSpanning },
      });
      return <DataGrid store={spanStore} height={300} virtualize={props.virtualize} />;
    }

    const isSpanWarning = (args: unknown[]) =>
      typeof args[0] === 'string' && args[0].includes('cell spanning is not supported');

    it('warns when a spanning column is rendered with virtualize', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      render(<SpanGrid virtualize="rows" />);
      expect(warn.mock.calls.some(isSpanWarning)).toBe(true);
      warn.mockRestore();
    });

    it('warns once per configuration across re-renders', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      const { rerender } = render(<SpanGrid virtualize="rows" />);
      rerender(<SpanGrid virtualize="rows" />);
      rerender(<SpanGrid virtualize="rows" />);
      expect(warn.mock.calls.filter(isSpanWarning)).toHaveLength(1);
      warn.mockRestore();
    });

    it('warns once about row pinning and row reorder under virtualize', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      function PinnedReorderGrid() {
        const pinnedStore = useDataGrid({
          data,
          columns,
          withRowPinning: true,
          onRowOrderChange: () => {},
        });
        return <DataGrid store={pinnedStore} height={300} virtualize="rows" />;
      }
      const { rerender } = render(<PinnedReorderGrid />);
      rerender(<PinnedReorderGrid />);
      const messages = warn.mock.calls.map((args) => String(args[0]));
      expect(messages.filter((m) => m.includes('row pinning is not supported'))).toHaveLength(1);
      expect(messages.filter((m) => m.includes('row reorder is not supported'))).toHaveLength(1);
      warn.mockRestore();
    });

    it('does not warn without virtualize or with cell spanning disabled', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      render(<SpanGrid />);
      render(<SpanGrid virtualize="rows" enableCellSpanning={false} />);
      expect(warn.mock.calls.some(isSpanWarning)).toBe(false);
      warn.mockRestore();
    });
  });

  describe('column virtualizer measurements', () => {
    const wideColumns = Array.from({ length: 6 }, (_, index) => ({
      id: `c${index}`,
      header: `Column ${index}`,
      accessorFn: () => `${index}`,
      size: 100,
    }));

    let wideStore: DataGridStore<any> | null = null;

    function WideGrid() {
      wideStore = useDataGrid({ data: data.slice(0, 2), columns: wideColumns });
      return <DataGrid store={wideStore} height={300} virtualize="columns" />;
    }

    const headerOffset = (container: HTMLElement, label: string) => {
      const cell = Array.from(
        container.querySelectorAll<HTMLElement>('[role="columnheader"]')
      ).find((element) => element.textContent === label)!;
      return getVirtualColumnOffset(cell);
    };

    const middleWidth = (container: HTMLElement) =>
      `${getVirtualMiddleWidth(
        container.querySelector<HTMLElement>('[data-virtual-thead] [role="row"]')!
      )}px`;

    it('repositions columns after a column is resized', () => {
      const { container } = render(<WideGrid />);
      expect(headerOffset(container, 'Column 1')).toBe(100);
      expect(middleWidth(container)).toBe('600px');
      act(() => wideStore!.table.setColumnSizing({ c0: 250 }));
      expect(headerOffset(container, 'Column 1')).toBe(250);
      expect(headerOffset(container, 'Column 2')).toBe(350);
      expect(middleWidth(container)).toBe('750px');
    });

    it('repositions columns after the column order changes', () => {
      const { container } = render(<WideGrid />);
      act(() => wideStore!.table.setColumnSizing({ c0: 250 }));
      act(() => wideStore!.table.setColumnOrder(['c1', 'c0', 'c2', 'c3', 'c4', 'c5']));
      expect(headerOffset(container, 'Column 1')).toBe(0);
      expect(headerOffset(container, 'Column 0')).toBe(100);
      expect(headerOffset(container, 'Column 2')).toBe(350);
      expect(middleWidth(container)).toBe('750px');
    });

    it('updates the leading pad after a start-pinned column is resized', () => {
      const manyColumns = Array.from({ length: 20 }, (_, index) => ({
        id: `c${index}`,
        header: `Column ${index}`,
        accessorFn: () => `${index}`,
        size: 100,
      }));
      let pinnedStore: DataGridStore<any> | null = null;
      function PinnedGrid() {
        pinnedStore = useDataGrid({
          data: data.slice(0, 2),
          columns: manyColumns,
          withColumnPinning: true,
          columnPinning: { start: ['c0'], end: [] },
        });
        return <DataGrid store={pinnedStore} height={300} virtualize="columns" />;
      }

      const { container } = render(<PinnedGrid />);
      const headerRow = () =>
        container.querySelector<HTMLElement>('[data-virtual-thead] [role="row"]')!;
      const leadingPad = () => {
        const pinned = headerRow().querySelector('[data-pinned]')!;
        const next = pinned.nextElementSibling as HTMLElement;
        return next.hasAttribute('data-column-pad') ? parseFloat(next.style.width) : 0;
      };

      expect(leadingPad()).toBe(0);
      act(() => pinnedStore!.table.setColumnSizing({ c0: 250 }));
      expect(leadingPad()).toBe(0);
      expect(headerOffset(container, 'Column 1')).toBe(0);
    });

    it('renders skeleton cells only for the virtualized column window', () => {
      const manyColumns = Array.from({ length: 60 }, (_, index) => ({
        id: `c${index}`,
        header: `Column ${index}`,
        accessorFn: () => `${index}`,
        size: 100,
      }));
      function LoadingGrid() {
        const loadingStore = useDataGrid({ data: [], columns: manyColumns });
        return <DataGrid store={loadingStore} height={300} virtualize="columns" loading />;
      }

      const { container } = render(<LoadingGrid />);
      const skeletonRow = container.querySelector('[data-skeleton-row]')!;
      const cells = skeletonRow.querySelectorAll('[role="gridcell"]');
      const headerCells = container.querySelectorAll(
        '[data-virtual-thead] [role="row"]:last-child [role="columnheader"]'
      );
      expect(cells.length).toBeGreaterThan(0);
      expect(cells.length).toBeLessThan(manyColumns.length);
      expect(cells.length).toBe(headerCells.length);
    });

    it('keeps virtualized middle columns in the row flow so they give the row its height', () => {
      const { container } = render(<WideGrid />);
      const rows = container.querySelectorAll<HTMLElement>('[role="row"]');
      expect(rows.length).toBeGreaterThan(1);
      rows.forEach((row) => {
        Array.from(row.children).forEach((item) => {
          expect((item as HTMLElement).style.position).not.toBe('absolute');
        });
      });
    });

    it('renders virtualized cells as direct children of the row', () => {
      const { container } = render(<WideGrid />);
      container
        .querySelectorAll<HTMLElement>('[role="columnheader"], [role="gridcell"]')
        .forEach((cell) => {
          expect(cell.parentElement).toHaveAttribute('role', 'row');
        });
    });
  });

  describe('row heights', () => {
    const renderedRows = (container: HTMLElement) =>
      Array.from(container.querySelectorAll<HTMLElement>('[role="row"][data-row-id]'));

    it('renders rows at the numeric getRowHeight used for the estimate', () => {
      const { container } = render(<Grid virtualize="rows" />);
      const rows = renderedRows(container);
      expect(rows.length).toBeGreaterThan(0);
      rows.forEach((row) => {
        expect(row.style.getPropertyValue('--dg-row-height')).toBe('60px');
        expect(row).not.toHaveAttribute('data-auto-height');
      });
      expect(container.querySelector<HTMLElement>('[data-index="1"]')!.style.transform).toBe(
        'translateY(60px)'
      );
    });

    it('does not force a height on auto rows', () => {
      function AutoGrid() {
        store = useDataGrid({ data, columns });
        return (
          <DataGrid store={store} height={300} virtualize="rows" getRowHeight={() => 'auto'} />
        );
      }

      const { container } = render(<AutoGrid />);
      renderedRows(container).forEach((row) => {
        expect(row.style.getPropertyValue('--dg-row-height')).toBe('');
        expect(row).toHaveAttribute('data-auto-height');
      });
    });

    it('measures rendered rows when estimateRowHeight is set', () => {
      const rect = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
        height: 32,
        width: 800,
        top: 0,
        left: 0,
        bottom: 32,
        right: 800,
      } as DOMRect);

      function EstimatedGrid() {
        store = useDataGrid({ data, columns });
        return <DataGrid store={store} height={300} virtualize="rows" estimateRowHeight={100} />;
      }

      const { container } = render(<EstimatedGrid />);
      expect(container.querySelector<HTMLElement>('[data-index="1"]')!.style.transform).toBe(
        'translateY(32px)'
      );
      rect.mockRestore();
    });

    it('re-estimates per-row heights by row id after the rows are sorted', () => {
      function SortedGrid() {
        store = useDataGrid({
          data,
          columns: [columns[0], { ...columns[1], enableSorting: true }],
          withSorting: true,
        });
        return (
          <DataGrid
            store={store}
            height={300}
            virtualize="rows"
            getRowHeight={(row) => (row.original.age === 0 ? 100 : 40)}
          />
        );
      }

      const { container } = render(<SortedGrid />);
      const offset = (index: number) =>
        container.querySelector<HTMLElement>(`[data-index="${index}"]`)!.style.transform;
      expect(offset(1)).toBe('translateY(100px)');

      act(() => store!.table.setSorting([{ id: 'age', desc: true }]));
      expect(offset(1)).toBe('translateY(40px)');
      expect(offset(2)).toBe('translateY(80px)');
    });

    it('re-estimates rows when getRowHeight changes at runtime', () => {
      function HeightGrid({ height }: { height: number }) {
        store = useDataGrid({ data, columns });
        return (
          <DataGrid store={store} height={300} virtualize="rows" getRowHeight={() => height} />
        );
      }

      const { container, rerender } = render(<HeightGrid height={60} />);
      const offset = () =>
        container.querySelector<HTMLElement>('[data-index="1"]')!.style.transform;
      expect(offset()).toBe('translateY(60px)');
      rerender(<HeightGrid height={50} />);
      expect(offset()).toBe('translateY(50px)');
    });

    it('drops measured heights when rows stop being measured', () => {
      const rect = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
        height: 80,
        width: 800,
        top: 0,
        left: 0,
        bottom: 80,
        right: 800,
      } as DOMRect);
      const getRowHeight = (row: any) => (row.original.auto ? ('auto' as const) : 40);

      function AutoToggleGrid({ auto }: { auto: boolean }) {
        store = useDataGrid({ data: data.map((item) => ({ ...item, auto })), columns });
        return (
          <DataGrid store={store} height={300} virtualize="rows" getRowHeight={getRowHeight} />
        );
      }

      const { container, rerender } = render(<AutoToggleGrid auto />);
      const offset = () =>
        container.querySelector<HTMLElement>('[data-index="1"]')!.style.transform;
      expect(offset()).toBe('translateY(80px)');
      rerender(<AutoToggleGrid auto={false} />);
      expect(offset()).toBe('translateY(40px)');
      rect.mockRestore();
    });

    it('keeps measuring rows after the auto rows scroll out of view', () => {
      const rect = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
        height: 80,
        width: 800,
        top: 0,
        left: 0,
        bottom: 80,
        right: 800,
      } as DOMRect);
      const manyRows = Array.from({ length: 200 }, (_, index) => ({
        name: `P${index}`,
        age: index,
      }));
      const getRowHeight = (row: any) => (row.index === 0 ? ('auto' as const) : 40);
      function MixedGrid() {
        store = useDataGrid({ data: manyRows, columns });
        return (
          <DataGrid store={store} height={300} virtualize="rows" getRowHeight={getRowHeight} />
        );
      }

      const { container } = render(<MixedGrid />);
      const offset = (index: number) =>
        container.querySelector<HTMLElement>(`[data-index="${index}"]`)!.style.transform;
      expect(offset(1)).toBe('translateY(80px)');
      const scrollContainer = store!.scrollContainerRef.current!;
      act(() => {
        scrollContainer.scrollTop = 6000;
        scrollContainer.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        scrollContainer.scrollTop = 0;
        scrollContainer.dispatchEvent(new Event('scroll'));
      });
      expect(offset(1)).toBe('translateY(80px)');
      rect.mockRestore();
    });

    it('moves the tab stop to the first row in the viewport when row 0 is scrolled away', () => {
      const { container } = render(<Grid virtualize="rows" />);
      const scrollContainer = store!.scrollContainerRef.current!;
      expect(renderedRows(container)[0]).toHaveAttribute('data-row-index', '0');

      act(() => {
        scrollContainer.scrollTop = 900;
        scrollContainer.dispatchEvent(new Event('scroll'));
      });

      const rows = renderedRows(container);
      expect(rows[0]).toHaveAttribute('data-row-index', '5');
      expect(rows[0]).toHaveAttribute('tabindex', '-1');
      const tabStops = container.querySelectorAll('[role="row"][tabindex="0"]');
      expect(tabStops).toHaveLength(1);
      expect(tabStops[0]).toHaveAttribute('data-row-index', '15');
    });
  });

  it('re-measures rows when the grid size changes', () => {
    function SizedGrid({ size }: { size: 'xs' | 'lg' }) {
      store = useDataGrid({ data, columns, size });
      return <DataGrid store={store} height={300} virtualize="rows" />;
    }

    const { container, rerender } = render(<SizedGrid size="xs" />);
    const secondRowOffset = () =>
      container.querySelector<HTMLElement>('[data-index="1"]')!.style.transform;
    const before = secondRowOffset();
    rerender(<SizedGrid size="lg" />);
    expect(secondRowOffset()).not.toBe(before);
  });
});
