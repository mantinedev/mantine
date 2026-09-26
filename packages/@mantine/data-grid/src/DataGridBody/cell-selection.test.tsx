import { act } from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks';
import { mockVirtualViewport } from '../virtual-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = [
  { id: 'a', name: 'Alice', age: 30 },
  { id: 'b', name: 'Bob', age: 30 },
  { id: 'c', name: 'Charlie', age: 35 },
];

let lastStore: ReturnType<typeof useDataGrid> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<any>>;
}) {
  const store = useDataGrid({
    data,
    columns,
    getRowId: (row: any) => row.id,
    withCellSelection: true,
    ...storeOptions,
  });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

describe('@mantine/data-grid/cell-selection', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  it('marks the root and makes cells the focus targets in the table body', () => {
    const { container } = render(<Grid />);
    expect(container.querySelector('.mantine-DataGrid-root')).toHaveAttribute(
      'data-cell-selection'
    );
    const cells = container.querySelectorAll<HTMLElement>('tbody td');
    expect(cells[0]).toHaveAttribute('tabindex', '0');
    expect(cells[1]).toHaveAttribute('tabindex', '-1');
    fireEvent.mouseDown(cells[0]);
    expect(cells[0]).toHaveAttribute('data-selected');
    expect(cells[0]).toHaveAttribute('data-focused');
    expect(cells[0]).toHaveAttribute('tabindex', '0');
    expect(cells[0]).toHaveAttribute('data-edge-top');
    expect(cells[0]).toHaveAttribute('data-edge-bottom');
    expect(cells[0]).toHaveAttribute('data-edge-left');
    expect(cells[0]).toHaveAttribute('data-edge-right');
    expect(cells[0]).toHaveFocus();
  });

  it('exposes the first cell as the tab stop until a cell is focused', () => {
    const { container } = render(<Grid />);
    const cells = () => Array.from(container.querySelectorAll<HTMLElement>('tbody td'));
    expect(cells().filter((cell) => cell.tabIndex === 0)).toEqual([cells()[0]]);

    act(() => cells()[0].focus());
    expect(cells()[0]).toHaveAttribute('data-focused');
    expect(lastStore!.table.getFocusedCell()?.id).toBe('a_name');

    fireEvent.keyDown(cells()[0], { key: 'ArrowDown' });
    expect(cells()[2]).toHaveFocus();
    expect(cells().filter((cell) => cell.tabIndex === 0)).toEqual([cells()[2]]);

    act(() => lastStore!.table.resetCellSelection());
    expect(cells().filter((cell) => cell.tabIndex === 0)).toEqual([cells()[0]]);
  });

  it('exposes the first rendered virtual cell as the tab stop until a cell is focused', () => {
    const { container } = render(<Grid virtualize="rows" height={300} />);
    const cells = Array.from(container.querySelectorAll<HTMLElement>('[role="gridcell"]'));
    expect(cells.filter((cell) => cell.tabIndex === 0)).toEqual([cells[0]]);
    act(() => cells[0].focus());
    expect(cells[0]).toHaveAttribute('data-focused');
  });

  it('moves the tab stop to the current page when the focused cell is on another page', () => {
    const { container } = render(<Grid storeOptions={{ pageSize: 2 }} />);
    const cells = () => Array.from(container.querySelectorAll<HTMLElement>('tbody td'));
    act(() => cells()[0].focus());
    expect(lastStore!.table.getFocusedCell()?.id).toBe('a_name');

    act(() => lastStore!.table.nextPage());
    expect(cells()[0]).toHaveTextContent('Charlie');
    expect(cells().filter((cell) => cell.tabIndex === 0)).toEqual([cells()[0]]);
  });

  it('does not take focus from outside the grid when the focused cell mounts again', () => {
    const { container } = render(
      <>
        <button type="button">outside</button>
        <Grid storeOptions={{ pageSize: 2 }} />
      </>
    );
    const cells = () => Array.from(container.querySelectorAll<HTMLElement>('tbody td'));
    act(() => cells()[0].focus());
    act(() => lastStore!.table.nextPage());
    const outside = container.querySelector('button')!;
    act(() => outside.focus());

    act(() => lastStore!.table.previousPage());
    expect(cells()[0]).toHaveTextContent('Alice');
    expect(document.activeElement).toBe(outside);
  });

  it('keeps a Shift+click range when the entry cell receives focus from the press', () => {
    const { container } = render(<Grid storeOptions={{ pageSize: 2 }} />);
    const cells = () => Array.from(container.querySelectorAll<HTMLElement>('tbody td'));
    fireEvent.mouseDown(cells()[1]);
    act(() => cells()[1].focus());
    expect(lastStore!.table.getFocusedCell()?.id).toBe('a_age');

    act(() => lastStore!.table.nextPage());
    const entry = cells()[0];
    expect(entry.tabIndex).toBe(0);
    fireEvent.mouseDown(entry, { shiftKey: true });
    act(() => entry.focus());
    expect(lastStore!.table.store.state.cellSelection).toEqual([
      { anchorRowId: 'a', anchorColumnId: 'age', focusRowId: 'c', focusColumnId: 'name' },
    ]);
  });

  it('collapses the selection to the entry cell on keyboard focus', () => {
    const { container } = render(<Grid storeOptions={{ pageSize: 2 }} />);
    const cells = () => Array.from(container.querySelectorAll<HTMLElement>('tbody td'));
    fireEvent.mouseDown(cells()[1]);
    act(() => cells()[1].focus());

    act(() => lastStore!.table.nextPage());
    act(() => cells()[0].focus());
    expect(lastStore!.table.getFocusedCell()?.id).toBe('c_name');
    expect(lastStore!.table.store.state.cellSelection).toHaveLength(1);
  });

  it('moves the tab stop when the focused column is hidden', () => {
    const { container } = render(<Grid />);
    const cells = () => Array.from(container.querySelectorAll<HTMLElement>('tbody td'));
    act(() => lastStore!.table.setFocusedCell('a', 'age'));
    expect(cells().filter((cell) => cell.tabIndex === 0)).toEqual([cells()[1]]);

    act(() => lastStore!.table.setColumnVisibility({ age: false }));
    expect(cells().filter((cell) => cell.tabIndex === 0)).toEqual([cells()[0]]);
  });

  it('moves the tab stop when the focused row is collapsed into its parent', () => {
    const treeData = [
      { id: 'p', name: 'Parent', age: 50, children: [{ id: 'c', name: 'Child', age: 20 }] },
      { id: 'q', name: 'Other', age: 40 },
    ];
    const { container } = render(
      <Grid storeOptions={{ data: treeData, getSubRows: (row: any) => row.children }} />
    );
    const tabStops = () =>
      Array.from(container.querySelectorAll<HTMLElement>('tbody td')).filter(
        (cell) => cell.tabIndex === 0
      );
    act(() => lastStore!.table.setExpanded({ p: true }));
    act(() => lastStore!.table.setFocusedCell('c', 'name'));
    expect(tabStops()[0].closest('[data-row-id]')).toHaveAttribute('data-row-id', 'c');

    act(() => lastStore!.table.setExpanded({}));
    expect(container.querySelector('[data-row-id="c"]')).toBeNull();
    expect(tabStops()).toHaveLength(1);
    expect(tabStops()[0].closest('[data-row-id]')).toHaveAttribute('data-row-id', 'p');
  });

  it('moves the virtual tab stop when the focused row leaves the rendered window', () => {
    const manyRows = Array.from({ length: 200 }, (_, index) => ({
      id: `r${index}`,
      name: `Name ${index}`,
      age: index,
    }));
    const { container } = render(
      <Grid storeOptions={{ data: manyRows }} virtualize="rows" height={300} />
    );
    const tabStops = () =>
      Array.from(container.querySelectorAll<HTMLElement>('[role="gridcell"]')).filter(
        (cell) => cell.tabIndex === 0
      );
    act(() => tabStops()[0].focus());
    expect(lastStore!.table.getFocusedCell()?.id).toBe('r0_name');

    const scrollContainer = container.querySelector<HTMLElement>('[data-dg-scroll]')!;
    scrollContainer.scrollTop = 4000;
    act(() => {
      scrollContainer.dispatchEvent(new Event('scroll'));
    });
    expect(container.querySelector('[data-row-id="r0"]')).toBeNull();
    expect(tabStops()).toHaveLength(1);
    expect(tabStops()[0].closest('[data-row-id]')).not.toHaveAttribute('data-row-id', 'r0');
  });

  it('skips group rows when choosing the tab stop', () => {
    const { container } = render(<Grid storeOptions={{ grouping: ['age'], expanded: true }} />);
    const tabStops = Array.from(container.querySelectorAll<HTMLElement>('tbody td')).filter(
      (cell) => cell.tabIndex === 0
    );
    expect(tabStops).toHaveLength(1);
    expect(tabStops[0].closest('tr')).toHaveAttribute('data-row-id', 'a');
  });

  it('draws range edges only on the outer cells', () => {
    const { container } = render(<Grid />);
    act(() =>
      lastStore!.table.selectCellRange({
        anchorRowId: 'a',
        anchorColumnId: 'name',
        focusRowId: 'b',
        focusColumnId: 'age',
      })
    );
    const rows = container.querySelectorAll('tbody tr');
    const [a1, a2] = Array.from(rows[0].querySelectorAll('td'));
    const [b1] = Array.from(rows[1].querySelectorAll('td'));
    expect(a1).toHaveAttribute('data-edge-top');
    expect(a1).toHaveAttribute('data-edge-left');
    expect(a1).not.toHaveAttribute('data-edge-right');
    expect(a1).not.toHaveAttribute('data-edge-bottom');
    expect(a2).toHaveAttribute('data-edge-right');
    expect(b1).toHaveAttribute('data-edge-bottom');
  });

  it('emits the same attributes and handlers in the virtual body', () => {
    const { container } = render(<Grid virtualize="rows" height={300} />);
    const cells = container.querySelectorAll<HTMLElement>('[role="gridcell"]');
    expect(cells[0]).toHaveAttribute('tabindex', '0');
    expect(cells[1]).toHaveAttribute('tabindex', '-1');
    fireEvent.mouseDown(cells[0]);
    expect(cells[0]).toHaveAttribute('data-selected');
    expect(cells[0]).toHaveAttribute('data-focused');
    expect(cells[0]).toHaveAttribute('tabindex', '0');
    expect(cells[0]).toHaveAttribute('data-edge-top');
    expect(cells[0]).toHaveFocus();
    fireEvent.keyDown(cells[0], { key: 'ArrowRight' });
    expect(cells[1]).toHaveAttribute('data-focused');
  });

  it('excludes group cells from ranges', () => {
    render(<Grid storeOptions={{ grouping: ['age'], expanded: true }} />);
    const rows = lastStore!.table.getRowModel().rows;
    const groupRow = rows.find((row) => row.getIsGrouped())!;
    const leafRow = rows.find((row) => !row.getIsGrouped())!;
    expect(groupRow.getVisibleCells()[0].getCanSelect()).toBe(false);
    expect(leafRow.getVisibleCells()[0].getCanSelect()).toBe(true);
  });
});
