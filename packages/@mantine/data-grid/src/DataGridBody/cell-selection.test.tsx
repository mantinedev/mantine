import { act } from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
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
    expect(cells[0]).toHaveAttribute('tabindex', '-1');
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
    expect(cells[0]).toHaveAttribute('tabindex', '-1');
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
