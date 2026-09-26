import { render } from '@mantine-tests/core';
import { DataGrid } from '../DataGrid';
import { mockVirtualViewport } from '../virtual-test-utils';
import { getRowScroller, registerRowScroller } from './row-scroller';
import { DataGridStore, useDataGrid } from '.';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = Array.from({ length: 20 }, (_, index) => ({ name: `Person ${index}`, age: index }));

let store: DataGridStore<any> | null = null;

function Grid(props: { virtualize?: 'rows' }) {
  store = useDataGrid({ data, columns });
  return <DataGrid store={store} height={200} {...props} />;
}

const pinnedColumns = [
  { accessorKey: 'name', header: 'Name', size: 100 },
  { accessorKey: 'age', header: 'Age', size: 100 },
  { accessorKey: 'city', header: 'City', size: 120 },
];

function PinnedGrid(props: { virtualize?: 'rows'; withColumnPinning?: boolean }) {
  const { withColumnPinning = true, ...others } = props;
  store = useDataGrid({
    data: data.map((item) => ({ ...item, city: 'Paris' })),
    columns: pinnedColumns,
    withColumnPinning,
    tableOptions: { initialState: { columnPinning: { start: ['city'], end: [] } } },
  });
  return <DataGrid store={store} height={200} {...others} />;
}

function PinnedRowsGrid() {
  store = useDataGrid({ data, columns, rowPinning: { top: ['5'], bottom: [] } });
  return <DataGrid store={store} height={200} />;
}

function NestedGrid() {
  const inner = useDataGrid({ data, columns });
  return <DataGrid store={inner} />;
}

function OuterGrid() {
  store = useDataGrid({
    data,
    columns,
    withRowExpansion: true,
    tableOptions: { initialState: { expanded: { '0': true } } },
  });
  return <DataGrid store={store} height={200} renderExpandedRow={() => <NestedGrid />} />;
}

describe('@mantine/data-grid/use-data-grid scroll', () => {
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

  it('resolves scrollToRow index against the row model when rows are pinned', () => {
    render(<PinnedRowsGrid />);
    const container = store!.scrollContainerRef.current!;
    const target = container.querySelector<HTMLElement>('tr[data-row-id="2"]')!;
    const other = container.querySelector<HTMLElement>('tr[data-row-index="2"]')!;
    expect(other).not.toBe(target);
    jest.spyOn(target, 'getBoundingClientRect').mockReturnValue({ top: 700 } as DOMRect);
    jest.spyOn(other, 'getBoundingClientRect').mockReturnValue({ top: 500 } as DOMRect);
    store!.scrollToRow(2);
    expect(scrollTo).toHaveBeenCalledWith({ top: 700, behavior: 'smooth' });
  });

  it('scrolls to a column in the table body', () => {
    render(<Grid />);
    store!.scrollToColumn(1);
    expect(scrollTo).toHaveBeenCalledWith({ left: 0, behavior: 'smooth' });
  });

  it('scrolls to a column in the virtualized body', () => {
    render(<Grid virtualize="rows" />);
    expect(store!.scrollContainerRef.current?.querySelector('thead')).toBeNull();
    store!.scrollToColumn(1);
    expect(scrollTo).toHaveBeenCalledWith({ left: 0, behavior: 'smooth' });
  });

  it('keeps the target column clear of start-pinned columns', () => {
    render(<PinnedGrid />);
    const container = store!.scrollContainerRef.current!;
    const headers = container.querySelectorAll('thead > tr:last-child > th');
    expect(headers[2]).toHaveTextContent('Age');
    jest.spyOn(headers[2], 'getBoundingClientRect').mockReturnValue({ left: 400 } as DOMRect);
    store!.scrollToColumn(2);
    expect(scrollTo).toHaveBeenCalledWith({ left: 280, behavior: 'smooth' });
  });

  it('does not scroll to a pinned column', () => {
    render(<PinnedGrid />);
    scrollTo.mockClear();
    store!.scrollToColumn(0);
    expect(scrollTo).not.toHaveBeenCalled();
  });

  it('ignores pinning state when the column pinning feature is disabled', () => {
    render(<PinnedGrid withColumnPinning={false} />);
    const container = store!.scrollContainerRef.current!;
    const headers = container.querySelectorAll('thead > tr:last-child > th');
    expect(headers[0]).not.toHaveAttribute('data-pinned');
    jest.spyOn(headers[0], 'getBoundingClientRect').mockReturnValue({ left: 50 } as DOMRect);
    jest.spyOn(headers[2], 'getBoundingClientRect').mockReturnValue({ left: 400 } as DOMRect);
    scrollTo.mockClear();
    store!.scrollToColumn(0);
    expect(scrollTo).toHaveBeenCalledWith({ left: 50, behavior: 'smooth' });
    store!.scrollToColumn(2);
    expect(scrollTo).toHaveBeenLastCalledWith({ left: 400, behavior: 'smooth' });
  });

  it('uses the pinned column order for the offset of a header that is not rendered', () => {
    render(<PinnedGrid virtualize="rows" />);
    const container = store!.scrollContainerRef.current!;
    container
      .querySelectorAll('[role="columnheader"]')
      .forEach((cell) => cell.removeAttribute('aria-colindex'));
    scrollTo.mockClear();
    store!.scrollToColumn(2);
    expect(scrollTo).toHaveBeenCalledWith({ left: 100, behavior: 'smooth' });
  });

  it('ignores rows of a grid nested in an expanded row', () => {
    render(<OuterGrid />);
    const container = store!.scrollContainerRef.current!;
    const rows = container.querySelectorAll('[data-row-index="1"]');
    expect(rows).toHaveLength(2);
    jest.spyOn(container, 'getBoundingClientRect').mockReturnValue({ top: 0 } as DOMRect);
    rows.forEach((row) => {
      const nested = row.closest('[data-dg-scroll]') !== container;
      jest
        .spyOn(row, 'getBoundingClientRect')
        .mockReturnValue({ top: nested ? 500 : 96 } as DOMRect);
    });
    store!.scrollToRow(1);
    expect(scrollTo).toHaveBeenCalledWith({ top: 96, behavior: 'smooth' });
  });

  it('delegates row scrolling to the virtualized body row scroller', () => {
    render(<Grid virtualize="rows" />);
    expect(getRowScroller(store!.table.store)).toBeInstanceOf(Function);
    const scroller = jest.fn();
    const unregister = registerRowScroller(store!.table.store, scroller);
    store!.scrollToRow(12);
    unregister();
    expect(scroller).toHaveBeenCalledWith(12);
    expect(scrollTo).not.toHaveBeenCalledWith(expect.objectContaining({ behavior: 'smooth' }));
  });

  it('scrolls to a rendered row in the table body', () => {
    render(<Grid />);
    expect(getRowScroller(store!.table.store)).toBeUndefined();
    const container = store!.scrollContainerRef.current!;
    jest.spyOn(container, 'getBoundingClientRect').mockReturnValue({ top: 0 } as DOMRect);
    const row = container.querySelector('[data-row-index="2"]')!;
    jest.spyOn(row, 'getBoundingClientRect').mockReturnValue({ top: 96 } as DOMRect);
    store!.scrollToRow(2);
    expect(scrollTo).toHaveBeenCalledWith({ top: 96, behavior: 'smooth' });
  });
});
