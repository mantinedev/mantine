import { act } from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks';
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

    it('selects only the target on Shift+click when the anchor is outside the row model', async () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true, pageSize: 2 }} selectOnRowClick />
      );
      await userEvent.click(rowsOf(container)[0]);
      expect(lastStore!.rowSelection).toEqual({ a: true });
      act(() => lastStore!.table.setPageIndex(1));
      const rows = rowsOf(container);
      expect(rows[1]).toHaveAttribute('data-row-id', 'd');
      fireEvent.click(rows[1], { shiftKey: true });
      expect(lastStore!.rowSelection).toEqual({ a: true, d: true });
    });

    it('selects only the target on Shift+click and Shift+Space in single selection mode', async () => {
      const { container } = render(
        <Grid
          storeOptions={{ withRowSelection: true, enableMultiRowSelection: false }}
          selectOnRowClick
        />
      );
      await userEvent.click(rowsOf(container)[0]);
      expect(lastStore!.rowSelection).toEqual({ a: true });
      fireEvent.click(rowsOf(container)[2], { shiftKey: true });
      expect(lastStore!.rowSelection).toEqual({ c: true });
      rowsOf(container)[3].focus();
      await userEvent.keyboard('{Shift>} {/Shift}');
      expect(lastStore!.rowSelection).toEqual({ d: true });
    });

    it('extends the range from the last clicked row in display order', async () => {
      const { container } = render(
        <Grid
          storeOptions={{
            withRowSelection: true,
            columns: [
              { accessorKey: 'name', header: 'Name' },
              { accessorKey: 'age', header: 'Age', enableSorting: true },
            ],
            sorting: [{ id: 'age', desc: true }],
          }}
          selectOnRowClick
        />
      );
      const rowById = (id: string) =>
        container.querySelector<HTMLElement>(`tr[data-row-id="${id}"]`)!;
      expect(rowsOf(container).map((row) => row.dataset.rowId)).toEqual(['d', 'c', 'a', 'b']);
      fireEvent.click(rowById('d'), { ctrlKey: true });
      fireEvent.click(rowById('a'), { ctrlKey: true });
      fireEvent.click(rowById('b'), { shiftKey: true });
      expect(lastStore!.rowSelection).toEqual({ a: true, b: true, d: true });
    });

    it('extends the range over pinned rows in display order', async () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true, withRowPinning: true }} selectOnRowClick />
      );
      act(() => lastStore!.table.getRow('d').pin('top'));
      const rowById = (id: string) =>
        container.querySelector<HTMLElement>(`tr[data-row-id="${id}"]`)!;
      fireEvent.click(rowById('d'));
      fireEvent.click(rowById('b'), { shiftKey: true });
      expect(lastStore!.rowSelection).toEqual({ a: true, b: true, d: true });
    });

    describe('selection checkbox anchor', () => {
      const checkboxOf = (container: HTMLElement, id: string) =>
        container.querySelector<HTMLInputElement>(`tr[data-row-id="${id}"] input`)!;
      const rowById = (container: HTMLElement, id: string) =>
        container.querySelector<HTMLElement>(`tr[data-row-id="${id}"]`)!;

      it('uses a checkbox toggle as the anchor of a later row Shift+click', () => {
        const { container } = render(
          <Grid storeOptions={{ withRowSelection: true }} selectOnRowClick />
        );
        fireEvent.click(rowById(container, 'd'));
        fireEvent.click(checkboxOf(container, 'b'));
        expect(lastStore!.rowSelection).toEqual({ b: true, d: true });
        fireEvent.click(rowById(container, 'a'), { shiftKey: true });
        expect(lastStore!.rowSelection).toEqual({ a: true, b: true, d: true });
      });

      it('ranges a checkbox Shift+click over display order with pinned rows', () => {
        const { container } = render(
          <Grid storeOptions={{ withRowSelection: true, withRowPinning: true }} />
        );
        act(() => lastStore!.table.getRow('d').pin('top'));
        fireEvent.click(checkboxOf(container, 'd'));
        fireEvent.click(checkboxOf(container, 'b'), { shiftKey: true });
        expect(lastStore!.rowSelection).toEqual({ a: true, b: true, d: true });
      });

      it('deselects the range when the Shift+clicked checkbox is unchecked', () => {
        const { container } = render(<Grid storeOptions={{ withRowSelection: true }} />);
        fireEvent.click(checkboxOf(container, 'a'));
        fireEvent.click(checkboxOf(container, 'd'), { shiftKey: true });
        expect(lastStore!.rowSelection).toEqual({ a: true, b: true, c: true, d: true });
        fireEvent.click(checkboxOf(container, 'b'));
        fireEvent.click(checkboxOf(container, 'c'), { shiftKey: true });
        expect(lastStore!.rowSelection).toEqual({ a: true, d: true });
      });

      it('does not range on a checkbox Shift+click in single selection mode', () => {
        const { container } = render(
          <Grid storeOptions={{ withRowSelection: true, enableMultiRowSelection: false }} />
        );
        fireEvent.click(checkboxOf(container, 'a'));
        fireEvent.click(checkboxOf(container, 'c'), { shiftKey: true });
        expect(lastStore!.rowSelection).toEqual({ c: true });
      });

      it('clears the anchor on select all', () => {
        const { container } = render(
          <Grid storeOptions={{ withRowSelection: true }} selectOnRowClick />
        );
        fireEvent.click(checkboxOf(container, 'a'));
        const selectAll = container.querySelector<HTMLInputElement>('thead input')!;
        fireEvent.click(selectAll);
        fireEvent.click(selectAll);
        expect(lastStore!.rowSelection).toEqual({});
        fireEvent.click(checkboxOf(container, 'd'), { shiftKey: true });
        expect(lastStore!.rowSelection).toEqual({ d: true });
      });
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

    describe('nested grid in an expanded panel', () => {
      const innerData = [
        { id: 'x', name: 'Xavier', age: 1 },
        { id: 'y', name: 'Yara', age: 2 },
      ];

      function InnerGrid(props: Partial<DataGridProps<any>>) {
        const store = useDataGrid({ data: innerData, columns, getRowId: (row: any) => row.id });
        return <DataGrid store={store} {...props} />;
      }

      const layouts: [string, Partial<DataGridProps<any>>][] = [
        ['table', {}],
        ['virtual', { virtualize: 'rows', height: 300 }],
        ['list view', { listView: true }],
      ];

      it.each(layouts)('skips the nested grid rows in the %s body', async (_, props) => {
        const { container } = render(
          <Grid
            storeOptions={{ withRowExpansion: true }}
            renderExpandedRow={() => <InnerGrid {...props} />}
            {...props}
          />
        );
        act(() => lastStore!.table.setExpanded({ a: true }));
        const rowById = (id: string) =>
          container.querySelector<HTMLElement>(`[data-row-id="${id}"]`)!;
        const nestedRow = rowById('x');
        expect(nestedRow).toBeInTheDocument();

        rowById('a').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(rowById('b')).toHaveFocus();
        await userEvent.keyboard('{End}');
        expect(rowById('d')).toHaveFocus();

        nestedRow.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(rowById('y')).toHaveFocus();
        await userEvent.keyboard('{ArrowDown}');
        expect(rowById('y')).toHaveFocus();
      });
    });
  });
});
