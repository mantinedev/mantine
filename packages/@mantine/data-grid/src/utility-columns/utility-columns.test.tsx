import { act } from 'react';
import { createEvent, fireEvent } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { getRowDragSource } from '../DataGridBody/row-drag-source';
import { getExportColumns, getExportHeaders } from '../export/export-utils';
import { useDataGrid, UseDataGridOptions } from '../hooks';
import {
  normalizeColumnOrder,
  normalizeColumnPinning,
  UTILITY_COLUMN_IDS,
} from './utility-columns';

function createAtom<T>(initial: T): any {
  let value = initial;
  const listeners = new Set<(next: T) => void>();
  return {
    get: () => value,
    set: (next: T | ((prev: T) => T)) => {
      value = typeof next === 'function' ? (next as (prev: T) => T)(value) : next;
      listeners.forEach((listener) => listener(value));
    },
    subscribe: (listener: (next: T) => void) => {
      listeners.add(listener);
      return { unsubscribe: () => listeners.delete(listener) };
    },
  };
}

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Dana', age: 41 },
];

let lastStore: ReturnType<typeof useDataGrid> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & {
  storeOptions: Partial<UseDataGridOptions<any>>;
}) {
  const store = useDataGrid({ data, columns, ...storeOptions });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

describe('@mantine/data-grid/utility-columns', () => {
  describe('normalizeColumnOrder', () => {
    it('prepends missing utility ids in their default order', () => {
      expect(normalizeColumnOrder(['age', 'name'], ['__select__', '__rowNumber__'])).toEqual([
        '__select__',
        '__rowNumber__',
        'age',
        'name',
      ]);
    });

    it('keeps an explicit utility position', () => {
      expect(
        normalizeColumnOrder(
          ['__rowNumber__', '__select__', 'age'],
          ['__select__', '__rowNumber__']
        )
      ).toEqual(['__rowNumber__', '__select__', 'age']);
    });

    it('returns an empty order untouched', () => {
      expect(normalizeColumnOrder([], ['__select__'])).toEqual([]);
    });

    it('moves grouped columns right after the utility block', () => {
      expect(normalizeColumnOrder([], ['__select__'], ['team'])).toEqual(['__select__', 'team']);
      expect(normalizeColumnOrder(['name', 'team', 'age'], ['__select__'], ['age'])).toEqual([
        '__select__',
        'age',
        'name',
        'team',
      ]);
    });
  });

  describe('normalizeColumnPinning', () => {
    it('forces utility ids to the head of start and out of end', () => {
      expect(
        normalizeColumnPinning({ start: ['name'], end: ['__select__'] }, [
          '__select__',
          '__rowNumber__',
        ])
      ).toEqual({ start: ['__select__', '__rowNumber__', 'name'], end: [] });
    });
  });

  it('injects the selection column as a display column with utility meta', () => {
    const { container } = render(<Grid storeOptions={{ withRowSelection: true }} />);
    const leaf = lastStore!.table.getAllLeafColumns();
    expect(leaf[0].id).toBe(UTILITY_COLUMN_IDS.select);
    expect(leaf[0].columnDef.meta?.utility).toBe('select');
    expect(leaf[0].getCanSort()).toBe(false);
    expect(leaf[0].getCanHide()).toBe(false);
    expect(container.querySelector('th[data-utility="select"]')).toBeInTheDocument();
    expect(container.querySelectorAll('td[data-utility="select"]')).toHaveLength(data.length);
  });

  it('sizes utility columns from the size table', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, withRowNumbers: true, size: 'md' }} />
    );
    expect(container.querySelector('th[data-utility="select"]')).toHaveStyle({ width: '32px' });
    expect(container.querySelector('th[data-utility="rowNumber"]')).toHaveStyle({ width: '40px' });
  });

  it('orders utility columns reorder, select, expand, rowNumber', () => {
    render(
      <Grid
        storeOptions={{
          onRowOrderChange: () => {},
          withRowSelection: true,
          withRowExpansion: true,
          withRowNumbers: true,
        }}
      />
    );
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__reorder__',
      '__select__',
      '__expand__',
      '__rowNumber__',
      'name',
      'age',
    ]);
  });

  it('keeps utility columns first when columnOrder omits them', () => {
    render(<Grid storeOptions={{ withRowSelection: true, columnOrder: ['age', 'name'] }} />);
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__select__',
      'age',
      'name',
    ]);
  });

  it('keeps utility columns first after setColumnOrder', () => {
    render(<Grid storeOptions={{ withRowSelection: true, withColumnReorder: true }} />);
    act(() => lastStore!.table.setColumnOrder(['age', 'name']));
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__select__',
      'age',
      'name',
    ]);
  });

  it('pins utility columns at the head of the start side', () => {
    render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          withRowNumbers: true,
          columnPinning: { start: ['name'], end: [] },
        }}
      />
    );
    expect(lastStore!.columnPinning.start).toEqual(['__select__', '__rowNumber__', 'name']);
    expect(lastStore!.table.getColumn('__select__')!.getIsPinned()).toBe('start');
  });

  it('keeps utility columns first when tableOptions.state.columnOrder omits them', () => {
    render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          tableOptions: { state: { columnOrder: ['age', 'name'] } },
        }}
      />
    );
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__select__',
      'age',
      'name',
    ]);
  });

  it('pins utility columns when pinning is controlled through tableOptions.state', () => {
    render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          withColumnPinning: true,
          tableOptions: { state: { columnPinning: { start: ['name'], end: [] } } },
        }}
      />
    );
    expect(lastStore!.table.store.state.columnPinning.start).toEqual(['__select__', 'name']);
    expect(lastStore!.table.getColumn('__select__')!.getIsPinned()).toBe('start');
  });

  it('writes column order changes to an external columnOrder atom', () => {
    const columnOrderAtom = createAtom<string[]>(['__select__', 'name', 'age']);
    render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          withColumnReorder: true,
          tableOptions: { atoms: { columnOrder: columnOrderAtom } },
        }}
      />
    );
    act(() => lastStore!.table.setColumnOrder(['__select__', 'age', 'name']));
    expect(columnOrderAtom.get()).toEqual(['__select__', 'age', 'name']);
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__select__',
      'age',
      'name',
    ]);
  });

  it('writes column pinning changes to an external columnPinning atom', () => {
    const columnPinningAtom = createAtom({ start: ['__select__'], end: [] as string[] });
    render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          withColumnPinning: true,
          tableOptions: { atoms: { columnPinning: columnPinningAtom } },
        }}
      />
    );
    act(() => lastStore!.table.getColumn('age')!.pin('end'));
    expect(columnPinningAtom.get()).toEqual({ start: ['__select__'], end: ['age'] });
    expect(lastStore!.table.getColumn('age')!.getIsPinned()).toBe('end');
  });

  it('numbers data rows continuously across pages', async () => {
    const { container } = render(<Grid storeOptions={{ withRowNumbers: true, pageSize: 2 }} />);
    const numbers = () =>
      Array.from(container.querySelectorAll('td[data-utility="rowNumber"]')).map(
        (el) => el.textContent
      );
    expect(screen.getByText('#')).toBeInTheDocument();
    expect(numbers()).toEqual(['1', '2']);
    act(() => lastStore!.table.nextPage());
    await screen.findByText('Charlie');
    expect(numbers()).toEqual(['3', '4']);
  });

  it('labels the selection controls', () => {
    render(<Grid storeOptions={{ withRowSelection: true }} />);
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox', { name: 'Select row' })).toHaveLength(data.length);
  });

  it('renders a disabled checkbox reflecting the selection of non-selectable rows', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          enableRowSelection: (row) => row.original.name !== 'Bob',
          rowSelection: { '1': true },
        }}
      />
    );
    const bobRow = container.querySelector('tbody tr[data-row-id="1"]')!;
    const control = bobRow.querySelector('input')!;
    expect(control).toHaveAttribute('type', 'checkbox');
    expect(control).toBeDisabled();
    expect(control).toBeChecked();
    expect(container.querySelector('tbody tr[data-row-id="2"] input')).not.toBeChecked();
  });

  it('renders a disabled radio for non-selectable rows in single selection mode', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          enableMultiRowSelection: false,
          enableRowSelection: (row) => row.original.name !== 'Bob',
          rowSelection: { '1': true },
        }}
      />
    );
    const control = container.querySelector('tbody tr[data-row-id="1"] input')!;
    expect(control).toHaveAttribute('type', 'radio');
    expect(control).toBeDisabled();
    expect(control).toBeChecked();
    const other = container.querySelector('tbody tr[data-row-id="0"] input')!;
    expect(other).toHaveAttribute('type', 'radio');
    expect(other).not.toBeDisabled();
  });

  it('labels the expand toggle', async () => {
    render(
      <Grid
        storeOptions={{ withRowExpansion: true }}
        renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
      />
    );
    const toggle = screen.getAllByRole('button', { name: 'Expand row' })[0];
    await userEvent.click(toggle);
    expect(screen.getByText('Details for Alice')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Collapse row' })).toBeInTheDocument();
  });

  it('renders a draggable grip in the reorder column', () => {
    const { container } = render(<Grid storeOptions={{ onRowOrderChange: () => {} }} />);
    const grip = container.querySelector('td[data-utility="reorder"] [draggable="true"]');
    expect(grip).toBeInTheDocument();
    expect(grip).toHaveAttribute('aria-hidden', 'true');
    expect(grip).toHaveAttribute('title', 'Drag to reorder');
    expect(grip).not.toHaveAttribute('role');
    expect(grip).not.toHaveAttribute('tabindex');
  });

  describe('row reorder drag and drop', () => {
    function createDataTransfer(initial: Record<string, string> = {}) {
      const store: Record<string, string> = { ...initial };
      return {
        get types() {
          return Object.keys(store);
        },
        getData: (type: string) => store[type] ?? '',
        setData: (type: string, value: string) => {
          store[type] = value;
        },
        effectAllowed: 'all',
        dropEffect: 'none',
      };
    }

    const getRow = (container: HTMLElement, name: string) =>
      Array.from(container.querySelectorAll<HTMLElement>('tbody tr[data-row-id]')).find((row) =>
        row.textContent?.includes(name)
      )!;
    const getGrip = (row: HTMLElement) => row.querySelector('[draggable="true"]')!;

    it('reorders rows dragged from the same grid', () => {
      const onRowOrderChange = jest.fn();
      const { container } = render(<Grid storeOptions={{ onRowOrderChange }} />);
      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(container, 'Alice')), { dataTransfer });
      fireEvent.dragOver(getRow(container, 'Charlie'), { dataTransfer, clientY: 100 });
      expect(getRow(container, 'Charlie')).toHaveAttribute('data-drop-edge');
      fireEvent.drop(getRow(container, 'Charlie'), { dataTransfer, clientY: 100 });
      expect(onRowOrderChange).toHaveBeenCalledWith([data[1], data[2], data[0], data[3]]);
      expect(getRow(container, 'Charlie')).not.toHaveAttribute('data-drop-edge');
    });

    it('keeps the drop edge while the pointer moves between cells of the target row', () => {
      const { container } = render(<Grid storeOptions={{ onRowOrderChange: () => {} }} />);
      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(container, 'Alice')), { dataTransfer });
      const target = getRow(container, 'Charlie');
      const [firstCell, secondCell] = Array.from(target.querySelectorAll('td'));

      fireEvent.dragEnter(firstCell, { dataTransfer });
      fireEvent.dragOver(firstCell, { dataTransfer, clientY: 100 });
      expect(target).toHaveAttribute('data-drop-edge');

      fireEvent.dragEnter(secondCell, { dataTransfer });
      fireEvent.dragLeave(firstCell, { dataTransfer, relatedTarget: null });
      expect(target).toHaveAttribute('data-drop-edge');

      fireEvent.dragLeave(secondCell, { dataTransfer, relatedTarget: null });
      expect(target).not.toHaveAttribute('data-drop-edge');
    });

    it('excludes pinned rows from reorder', () => {
      const onRowOrderChange = jest.fn();
      const { container } = render(
        <Grid storeOptions={{ onRowOrderChange, rowPinning: { top: ['3'], bottom: ['0'] } }} />
      );
      expect(getGrip(getRow(container, 'Dana'))).toBeNull();
      expect(getGrip(getRow(container, 'Alice'))).toBeNull();

      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(container, 'Bob')), { dataTransfer });
      fireEvent.dragOver(getRow(container, 'Dana'), { dataTransfer, clientY: 100 });
      expect(getRow(container, 'Dana')).not.toHaveAttribute('data-drop-edge');
      fireEvent.drop(getRow(container, 'Dana'), { dataTransfer, clientY: 100 });
      expect(onRowOrderChange).not.toHaveBeenCalled();

      fireEvent.dragStart(getGrip(getRow(container, 'Bob')), { dataTransfer });
      fireEvent.dragOver(getRow(container, 'Charlie'), { dataTransfer, clientY: 100 });
      expect(getRow(container, 'Charlie')).toHaveAttribute('data-drop-edge', 'after');
      fireEvent.drop(getRow(container, 'Charlie'), { dataTransfer, clientY: 100 });
      expect(onRowOrderChange).toHaveBeenCalledWith([data[0], data[2], data[1], data[3]]);
    });

    it('reorders rows pinned in state when row pinning is disabled', () => {
      const onRowOrderChange = jest.fn();
      const { container } = render(
        <Grid
          storeOptions={{
            onRowOrderChange,
            withRowPinning: false,
            rowPinning: { top: ['3'], bottom: [] },
          }}
        />
      );
      expect(getGrip(getRow(container, 'Dana'))).not.toBeNull();
      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(container, 'Dana')), { dataTransfer });
      fireEvent.dragOver(getRow(container, 'Bob'), { dataTransfer, clientY: 100 });
      expect(getRow(container, 'Bob')).toHaveAttribute('data-drop-edge', 'after');
      fireEvent.drop(getRow(container, 'Bob'), { dataTransfer, clientY: 100 });
      expect(onRowOrderChange).toHaveBeenCalledWith([data[0], data[1], data[3], data[2]]);
    });

    it('ignores drags that did not start in this grid', () => {
      const onRowOrderChange = jest.fn();
      const { container } = render(<Grid storeOptions={{ onRowOrderChange }} />);
      const dataTransfer = createDataTransfer({ 'text/plain': '0' });
      const target = getRow(container, 'Charlie');
      const dragOver = fireEvent.dragOver(target, { dataTransfer, clientY: 100 });
      expect(dragOver).toBe(true);
      expect(target).not.toHaveAttribute('data-drop-edge');
      fireEvent.drop(target, { dataTransfer, clientY: 100 });
      expect(onRowOrderChange).not.toHaveBeenCalled();
    });

    it('ignores rows dragged from another grid with the same row ids', () => {
      const firstOrderChange = jest.fn();
      const secondOrderChange = jest.fn();
      const { container } = render(
        <>
          <div data-testid="first">
            <Grid storeOptions={{ onRowOrderChange: firstOrderChange }} />
          </div>
          <div data-testid="second">
            <Grid storeOptions={{ onRowOrderChange: secondOrderChange }} />
          </div>
        </>
      );
      const first = container.querySelector<HTMLElement>('[data-testid="first"]')!;
      const second = container.querySelector<HTMLElement>('[data-testid="second"]')!;
      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(first, 'Alice')), { dataTransfer });
      const target = getRow(second, 'Charlie');
      fireEvent.dragOver(target, { dataTransfer, clientY: 100 });
      expect(target).not.toHaveAttribute('data-drop-edge');
      fireEvent.drop(target, { dataTransfer, clientY: 100 });
      expect(secondOrderChange).not.toHaveBeenCalled();
      expect(firstOrderChange).not.toHaveBeenCalled();
    });

    const dragOverAt = (target: HTMLElement, dataTransfer: object, clientY: number) => {
      const event = createEvent.dragOver(target, { dataTransfer });
      Object.defineProperty(event, 'clientY', { value: clientY });
      jest
        .spyOn(target, 'getBoundingClientRect')
        .mockReturnValue({ top: 0, height: 40, bottom: 40 } as DOMRect);
      return fireEvent(target, event);
    };

    it('does not accept drops that would not change the row order', () => {
      const { container } = render(<Grid storeOptions={{ onRowOrderChange: () => {} }} />);
      const dataTransfer = createDataTransfer();
      const bob = getRow(container, 'Bob');
      fireEvent.dragStart(getGrip(bob), { dataTransfer });

      expect(dragOverAt(bob, dataTransfer, 30)).toBe(true);
      expect(bob).not.toHaveAttribute('data-drop-edge');

      const alice = getRow(container, 'Alice');
      expect(dragOverAt(alice, dataTransfer, 30)).toBe(true);
      expect(alice).not.toHaveAttribute('data-drop-edge');
      expect(dragOverAt(alice, dataTransfer, 10)).toBe(false);
      expect(alice).toHaveAttribute('data-drop-edge', 'before');

      const charlie = getRow(container, 'Charlie');
      expect(dragOverAt(charlie, dataTransfer, 10)).toBe(true);
      expect(charlie).not.toHaveAttribute('data-drop-edge');
      expect(dragOverAt(charlie, dataTransfer, 30)).toBe(false);
      expect(charlie).toHaveAttribute('data-drop-edge', 'after');
    });

    it('clears the drop edge when the pointer moves to a no-op edge', () => {
      const { container } = render(<Grid storeOptions={{ onRowOrderChange: () => {} }} />);
      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(container, 'Alice')), { dataTransfer });
      const bob = getRow(container, 'Bob');
      dragOverAt(bob, dataTransfer, 30);
      expect(bob).toHaveAttribute('data-drop-edge', 'after');
      dragOverAt(bob, dataTransfer, 10);
      expect(bob).not.toHaveAttribute('data-drop-edge');
    });

    it('keeps accepting the drag after the grid re-renders mid-drag', () => {
      const onRowOrderChange = jest.fn();
      const { container } = render(<Grid storeOptions={{ onRowOrderChange }} />);
      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(container, 'Alice')), { dataTransfer });
      act(() => lastStore!.table.setColumnSizing({ name: 220 }));
      fireEvent.drop(getRow(container, 'Charlie'), { dataTransfer, clientY: 100 });
      expect(onRowOrderChange).toHaveBeenCalledWith([data[1], data[2], data[0], data[3]]);
    });

    it('releases the drag when the source row unmounts mid-drag', () => {
      const { container, rerender } = render(
        <Grid storeOptions={{ onRowOrderChange: () => {} }} />
      );
      const dataTransfer = createDataTransfer();
      fireEvent.dragStart(getGrip(getRow(container, 'Dana')), { dataTransfer });
      expect(getRowDragSource(lastStore!.table.store, dataTransfer as any)).toBe('3');
      rerender(<Grid storeOptions={{ data: data.slice(0, 3), onRowOrderChange: () => {} }} />);
      expect(getRowDragSource(lastStore!.table.store, dataTransfer as any)).toBeNull();
    });

    it('stops accepting drops after the drag ends', () => {
      const onRowOrderChange = jest.fn();
      const { container } = render(<Grid storeOptions={{ onRowOrderChange }} />);
      const dataTransfer = createDataTransfer();
      const grip = getGrip(getRow(container, 'Alice'));
      fireEvent.dragStart(grip, { dataTransfer });
      fireEvent.dragEnd(grip, { dataTransfer });
      fireEvent.drop(getRow(container, 'Charlie'), { dataTransfer, clientY: 100 });
      expect(onRowOrderChange).not.toHaveBeenCalled();
    });
  });

  it('renders no grip in virtualized grids where row reorder is unsupported', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(
      <Grid storeOptions={{ onRowOrderChange: () => {} }} virtualize="rows" height={200} />
    );
    expect(container.querySelector('[draggable="true"]')).not.toBeInTheDocument();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('row reorder'));
    warn.mockRestore();
  });

  it('gives utility columns empty tfoot cells', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          columns: [
            { accessorKey: 'name', header: 'Name' },
            { accessorKey: 'age', header: 'Age', aggregationFn: 'sum' },
          ],
        }}
      />
    );
    const rows = container.querySelectorAll('tfoot tr');
    expect(rows[rows.length - 1].querySelectorAll('td')).toHaveLength(3);
    expect(rows[rows.length - 1].querySelector('td[data-utility="select"]')).toBeInTheDocument();
  });

  it('renders utility header cells in the virtual header', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true }} virtualize="rows" height={200} />
    );
    expect(
      container.querySelector('[role="columnheader"][data-utility="select"]')
    ).toBeInTheDocument();
  });

  it('hides utility columns from the column visibility menu', async () => {
    render(
      <Grid storeOptions={{ withRowSelection: true, withColumnVisibility: true }}>
        <DataGrid.Toolbar>
          <DataGrid.ColumnVisibilityToggle />
        </DataGrid.Toolbar>
      </Grid>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Columns' }));
    const menu = await screen.findByRole('menu');
    expect(menu).toHaveTextContent('Name');
    expect(menu).toHaveTextContent('Age');
    expect(menu).not.toHaveTextContent('__select__');
  });

  it('excludes utility columns from export', () => {
    render(<Grid storeOptions={{ withRowSelection: true, withRowNumbers: true }} />);
    expect(getExportHeaders(getExportColumns(lastStore!.table, undefined))).toEqual([
      'Name',
      'Age',
    ]);
    expect(getExportHeaders(getExportColumns(lastStore!.table, 'all'))).toEqual(['Name', 'Age']);
  });

  it('keeps the tree toggle in the first data column', () => {
    const treeData = [{ name: 'Root', age: 1, children: [{ name: 'Leaf', age: 2 }] }];
    const { container } = render(
      <Grid
        storeOptions={{
          data: treeData,
          withRowSelection: true,
          getSubRows: (row: any) => row.children,
        }}
      />
    );
    expect(container.querySelector('td[data-utility="expand"]')).not.toBeInTheDocument();
    const firstDataCell = container.querySelector('tbody tr td:not([data-utility])');
    expect(firstDataCell!.querySelector('button[aria-label="Expand row"]')).toBeInTheDocument();
  });
});
