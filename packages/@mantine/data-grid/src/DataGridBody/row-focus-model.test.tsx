import { act } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
import { mockVirtualViewport } from '../virtual-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = [
  { id: 'a', name: 'Alice', age: 30 },
  { id: 'b', name: 'Bob', age: 25 },
  { id: 'c', name: 'Charlie', age: 35 },
  { id: 'd', name: 'Dana', age: 41 },
];

let lastStore: ReturnType<typeof useDataGrid> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<any>>;
}) {
  const store = useDataGrid({ data, columns, getRowId: (row: any) => row.id, ...storeOptions });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

const rowsOf = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>('tbody tr[data-row-id]'));
const virtualRowsOf = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>('[role="row"][data-row-id]'));
const listItemsOf = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>('[data-row-id]'));

describe('@mantine/data-grid/row-focus-model', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  describe('data-selected', () => {
    it('reflects row selection without withRowSelection in the table body', () => {
      const { container } = render(
        <Grid storeOptions={{ tableOptions: { enableRowSelection: true } }} />
      );
      act(() => lastStore!.table.setRowSelection({ b: true }));
      expect(rowsOf(container)[1]).toHaveAttribute('data-selected');
      expect(rowsOf(container)[0]).not.toHaveAttribute('data-selected');
    });

    it('reflects row selection in the virtual body', () => {
      const { container } = render(
        <Grid
          storeOptions={{ tableOptions: { enableRowSelection: true } }}
          virtualize="rows"
          height={300}
        />
      );
      act(() => lastStore!.table.setRowSelection({ b: true }));
      expect(virtualRowsOf(container)[1]).toHaveAttribute('data-selected');
    });

    it('reflects row selection in the list view', () => {
      const { container } = render(
        <Grid storeOptions={{ tableOptions: { enableRowSelection: true } }} listView />
      );
      act(() => lastStore!.table.setRowSelection({ b: true }));
      expect(listItemsOf(container)[1]).toHaveAttribute('data-selected');
    });

    it('never marks group rows as selected', () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true, grouping: ['age'], expanded: true }} />
      );
      act(() => lastStore!.table.toggleAllRowsSelected(true));
      expect(container.querySelector('tr[data-group-row][data-selected]')).not.toBeInTheDocument();
      expect(container.querySelectorAll('tr[data-selected]').length).toBeGreaterThan(0);
    });

    it('defaults the selected fill to the theme selected color', () => {
      const { container } = render(<Grid />);
      const root = container.querySelector('.mantine-DataGrid-root') as HTMLElement;
      expect(root.style.getPropertyValue('--dg-selected-color')).toBe('');
    });
  });

  describe('row focus model', () => {
    it('gives the first row tabindex 0 and the rest -1', () => {
      const { container } = render(<Grid />);
      const rows = rowsOf(container);
      expect(rows[0]).toHaveAttribute('tabindex', '0');
      expect(rows[1]).toHaveAttribute('tabindex', '-1');
      expect(container.querySelector('tbody td[tabindex]')).not.toBeInTheDocument();
    });

    it('moves focus with arrows, Home and End', async () => {
      const { container } = render(<Grid />);
      const rows = rowsOf(container);
      rows[0].focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(rows[1]).toHaveFocus();
      await userEvent.keyboard('{End}');
      expect(rows[3]).toHaveFocus();
      await userEvent.keyboard('{ArrowUp}');
      expect(rows[2]).toHaveFocus();
      await userEvent.keyboard('{Home}');
      expect(rows[0]).toHaveFocus();
      await userEvent.keyboard('{Escape}');
      expect(rows[0]).not.toHaveFocus();
    });

    it('calls onRowClick and toggles expansion on Enter', async () => {
      const onRowClick = jest.fn();
      const { container } = render(
        <Grid
          storeOptions={{ withRowExpansion: true }}
          onRowClick={onRowClick}
          renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
        />
      );
      rowsOf(container)[0].focus();
      await userEvent.keyboard('{Enter}');
      expect(onRowClick).toHaveBeenCalledTimes(1);
      expect(onRowClick.mock.calls[0][0].id).toBe('a');
      expect(screen.getByText('Details for Alice')).toBeInTheDocument();
    });

    it('toggles and extends selection with Space and Shift+Space under selectOnRowClick', async () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true }} selectOnRowClick />
      );
      const rows = rowsOf(container);
      rows[0].focus();
      await userEvent.keyboard(' ');
      expect(lastStore!.rowSelection).toEqual({ a: true });
      await userEvent.keyboard('{ArrowDown}{ArrowDown}');
      await userEvent.keyboard('{Shift>} {/Shift}');
      expect(lastStore!.rowSelection).toEqual({ a: true, b: true, c: true });
      await userEvent.keyboard(' ');
      expect(lastStore!.rowSelection).toEqual({ a: true, b: true });
    });

    it('ignores Space without selectOnRowClick', async () => {
      const { container } = render(<Grid storeOptions={{ withRowSelection: true }} />);
      rowsOf(container)[0].focus();
      await userEvent.keyboard(' ');
      expect(lastStore!.rowSelection).toEqual({});
    });

    it('does not handle keys from controls inside the row', async () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true }} selectOnRowClick />
      );
      const checkbox = container.querySelector('tbody input[type="checkbox"]') as HTMLElement;
      checkbox.focus();
      await userEvent.keyboard(' ');
      expect(lastStore!.rowSelection).toEqual({ a: true });
    });

    it('drops the row focus model under withCellSelection', () => {
      const { container } = render(<Grid storeOptions={{ withCellSelection: true }} />);
      expect(container.querySelector('tbody tr[tabindex]')).not.toBeInTheDocument();
      expect(container.querySelectorAll('tbody td[tabindex]').length).toBeGreaterThan(0);
      expect(container.querySelector('.mantine-DataGrid-root')).toHaveAttribute(
        'data-cell-selection'
      );
    });

    it('uses the same focus model and keys in the virtual body', async () => {
      const onRowClick = jest.fn();
      const { container } = render(
        <Grid
          storeOptions={{ withRowSelection: true }}
          selectOnRowClick
          onRowClick={onRowClick}
          virtualize="rows"
          height={300}
        />
      );
      const rows = virtualRowsOf(container);
      expect(rows[0]).toHaveAttribute('tabindex', '0');
      expect(rows[1]).toHaveAttribute('tabindex', '-1');
      expect(container.querySelector('[role="gridcell"][tabindex]')).not.toBeInTheDocument();
      rows[0].focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(rows[1]).toHaveFocus();
      await userEvent.keyboard(' ');
      expect(lastStore!.rowSelection).toEqual({ b: true });
      await userEvent.keyboard('{Enter}');
      expect(onRowClick).toHaveBeenCalledTimes(1);
      await userEvent.click(rows[2]);
      expect(lastStore!.rowSelection).toEqual({ c: true });
    });

    it('uses the row focus model in the list view', async () => {
      const { container } = render(<Grid storeOptions={{ withRowSelection: true }} listView />);
      const items = listItemsOf(container);
      expect(items[0]).toHaveAttribute('tabindex', '0');
      expect(items[1]).toHaveAttribute('tabindex', '-1');
      items[0].focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(items[1]).toHaveFocus();
    });
  });
});
