import { act } from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
import { mockVirtualViewport } from '../virtual-test-utils';

interface Person {
  id: string;
  name: string;
  age: number;
}

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  {
    accessorKey: 'age',
    header: 'Age',
    meta: { validate: (value) => (Number(value) < 0 ? 'Must be positive' : null) },
  },
  { accessorKey: 'id', header: 'Id', meta: { disableEditing: true } },
];

const data: Person[] = [
  { id: 'a', name: 'Alice', age: 30 },
  { id: 'b', name: 'Bob', age: 25 },
  { id: 'c', name: 'Charlie', age: 35 },
];

let lastStore: ReturnType<typeof useDataGrid<Person>> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<Person>>;
}) {
  const store = useDataGrid<Person>({
    data,
    columns,
    getRowId: (row) => row.id,
    editingMode: 'cell',
    ...storeOptions,
  });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

const root = (container: HTMLElement) => container.querySelector('.mantine-DataGrid-root')!;
const rowsOf = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>('tbody tr[data-row-id]'));
const cellsOf = (container: HTMLElement, rowIndex: number) =>
  Array.from(rowsOf(container)[rowIndex].querySelectorAll<HTMLElement>('td'));
const virtualRowsOf = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>('[role="row"][data-row-id]'));
const editorsOf = (element: HTMLElement) =>
  Array.from(element.querySelectorAll<HTMLInputElement>('.mantine-DataGrid-editCell input'));
const flush = () => act(async () => {});

describe('@mantine/data-grid/editing', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  describe('root attributes', () => {
    it('reflects the editing mode on the root', () => {
      const { container, rerender } = render(<Grid />);
      expect(root(container)).toHaveAttribute('data-editing-mode', 'cell');
      rerender(<Grid storeOptions={{ editingMode: 'row' }} />);
      expect(root(container)).toHaveAttribute('data-editing-mode', 'row');
      rerender(<Grid storeOptions={{ editingMode: undefined }} />);
      expect(root(container)).not.toHaveAttribute('data-editing-mode');
    });
  });

  describe('cell editing in the table body', () => {
    it('starts on double click, renders the default editor and focuses it', () => {
      const { container } = render(<Grid />);
      const cell = cellsOf(container, 0)[0];
      fireEvent.doubleClick(cell);
      expect(cell).toHaveAttribute('data-editing');
      expect(rowsOf(container)[0]).toHaveAttribute('data-editing');
      const editor = editorsOf(cell)[0];
      expect(editor).toHaveValue('Alice');
      expect(editor).toHaveFocus();
      expect(lastStore!.editing).toEqual({ rowId: 'a', columnId: 'name', values: {} });
      expect(cellsOf(container, 0)[1]).not.toHaveAttribute('data-editing');
    });

    it('starts on single click with editTrigger: click', () => {
      const { container } = render(<Grid storeOptions={{ editTrigger: 'click' }} />);
      fireEvent.click(cellsOf(container, 0)[0]);
      expect(cellsOf(container, 0)[0]).toHaveAttribute('data-editing');
    });

    it('never starts on disabled, utility or actions cells', () => {
      const { container } = render(
        <Grid
          storeOptions={{
            withRowSelection: true,
            columns: [...columns, { id: 'actions', meta: { type: 'actions' }, cell: () => 'act' }],
          }}
        />
      );
      const cells = cellsOf(container, 0);
      fireEvent.doubleClick(cells[0]);
      expect(cells[0]).toHaveAttribute('data-utility', 'select');
      expect(lastStore!.editing).toBeNull();
      fireEvent.doubleClick(cells[3]);
      expect(lastStore!.editing).toBeNull();
      fireEvent.doubleClick(cells[4]);
      expect(cells[4]).toHaveAttribute('data-actions');
      expect(lastStore!.editing).toBeNull();
    });

    it('saves on Enter with the typed draft', () => {
      const onEditSave = jest.fn();
      const { container } = render(<Grid storeOptions={{ onEditSave }} />);
      fireEvent.doubleClick(cellsOf(container, 0)[0]);
      const editor = editorsOf(cellsOf(container, 0)[0])[0];
      fireEvent.change(editor, { target: { value: 'Alicia' } });
      expect(lastStore!.editing?.values).toEqual({ name: 'Alicia' });
      fireEvent.keyDown(editor, { key: 'Enter' });
      expect(onEditSave).toHaveBeenCalledWith(
        expect.objectContaining({ newRow: { id: 'a', name: 'Alicia', age: 30 } })
      );
      expect(lastStore!.editing).toBeNull();
      expect(cellsOf(container, 0)[0]).not.toHaveAttribute('data-editing');
      expect(editorsOf(cellsOf(container, 0)[0])).toHaveLength(0);
    });

    it('cancels on Escape and commits on blur', () => {
      const onEditSave = jest.fn();
      const onEditCancel = jest.fn();
      const { container } = render(<Grid storeOptions={{ onEditSave, onEditCancel }} />);
      fireEvent.doubleClick(cellsOf(container, 0)[0]);
      fireEvent.keyDown(editorsOf(cellsOf(container, 0)[0])[0], { key: 'Escape' });
      expect(onEditCancel).toHaveBeenCalled();
      expect(lastStore!.editing).toBeNull();

      fireEvent.doubleClick(cellsOf(container, 1)[1]);
      fireEvent.blur(editorsOf(cellsOf(container, 1)[1])[0]);
      expect(onEditSave).toHaveBeenCalledWith(expect.objectContaining({ oldRow: data[1] }));
      expect(lastStore!.editing).toBeNull();
    });

    it('marks an invalid draft, shows the message and blocks the save', () => {
      const onEditSave = jest.fn();
      const { container } = render(<Grid storeOptions={{ onEditSave }} />);
      fireEvent.doubleClick(cellsOf(container, 0)[1]);
      const cell = () => cellsOf(container, 0)[1];
      const editor = () => editorsOf(cell())[0];
      expect(cell()).not.toHaveAttribute('data-invalid');

      fireEvent.change(editor(), { target: { value: '-4' } });
      expect(cell()).toHaveAttribute('data-invalid');
      expect(cell()).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByText('Must be positive')).toBeInTheDocument();
      fireEvent.keyDown(editor(), { key: 'Enter' });
      expect(onEditSave).not.toHaveBeenCalled();
      expect(cell()).toHaveAttribute('data-editing');

      fireEvent.change(editor(), { target: { value: '4' } });
      expect(cell()).not.toHaveAttribute('data-invalid');
      fireEvent.keyDown(editor(), { key: 'Enter' });
      expect(onEditSave).toHaveBeenCalledWith(
        expect.objectContaining({ newRow: { id: 'a', name: 'Alice', age: '4' } })
      );
    });

    it('marks the row saving while the promise is pending and invalid after a rejection', async () => {
      let reject!: (error: unknown) => void;
      const onEditSave = jest.fn(
        () =>
          new Promise<void>((_, r) => {
            reject = r;
          })
      );
      const onEditSaveError = jest.fn();
      const { container } = render(<Grid storeOptions={{ onEditSave, onEditSaveError }} />);
      fireEvent.doubleClick(cellsOf(container, 0)[0]);
      fireEvent.change(editorsOf(cellsOf(container, 0)[0])[0], { target: { value: 'Al' } });
      fireEvent.keyDown(editorsOf(cellsOf(container, 0)[0])[0], { key: 'Enter' });

      expect(rowsOf(container)[0]).toHaveAttribute('data-saving');
      expect(rowsOf(container)[0]).toHaveAttribute('aria-busy', 'true');
      expect(editorsOf(cellsOf(container, 0)[0])[0]).toBeDisabled();
      expect(cellsOf(container, 0)[0]).not.toHaveAttribute('data-saving');

      reject(new Error('nope'));
      await flush();
      expect(onEditSaveError).toHaveBeenCalled();
      expect(rowsOf(container)[0]).not.toHaveAttribute('data-saving');
      expect(cellsOf(container, 0)[0]).toHaveAttribute('data-editing');
      expect(cellsOf(container, 0)[0]).toHaveAttribute('data-invalid');
      expect(editorsOf(cellsOf(container, 0)[0])[0]).toHaveValue('Al');

      fireEvent.change(editorsOf(cellsOf(container, 0)[0])[0], { target: { value: 'Ali' } });
      expect(cellsOf(container, 0)[0]).not.toHaveAttribute('data-invalid');
    });

    it('renders a custom editComponent with the full payload', () => {
      const editComponent = jest.fn(({ value, onChange }: any) => (
        <input data-custom value={String(value)} onChange={(e) => onChange(e.target.value)} />
      ));
      const { container } = render(
        <Grid
          storeOptions={{
            columns: [{ accessorKey: 'name', header: 'Name', meta: { editComponent } }],
          }}
        />
      );
      fireEvent.doubleClick(cellsOf(container, 0)[0]);
      expect(editComponent).toHaveBeenLastCalledWith(
        expect.objectContaining({
          value: 'Alice',
          onChange: expect.any(Function),
          onSave: expect.any(Function),
          onCancel: expect.any(Function),
          error: undefined,
          cell: expect.objectContaining({ id: 'a_name' }),
        })
      );
      const custom = container.querySelector<HTMLInputElement>('[data-custom]')!;
      expect(custom).toHaveFocus();
      fireEvent.change(custom, { target: { value: 'Z' } });
      expect(lastStore!.editing?.values).toEqual({ name: 'Z' });
    });

    it('commits a custom editComponent when focus leaves the editor', () => {
      const onEditSave = jest.fn();
      const editComponent = ({ value, onChange }: any) => (
        <>
          <input data-custom value={String(value)} onChange={(e) => onChange(e.target.value)} />
          <button type="button" data-custom-button>
            Pick
          </button>
        </>
      );
      const { container } = render(
        <Grid
          storeOptions={{
            onEditSave,
            columns: [{ accessorKey: 'name', header: 'Name', meta: { editComponent } }],
          }}
        />
      );
      fireEvent.doubleClick(cellsOf(container, 0)[0]);
      const custom = container.querySelector<HTMLInputElement>('[data-custom]')!;
      fireEvent.change(custom, { target: { value: 'Z' } });

      fireEvent.blur(custom, {
        relatedTarget: container.querySelector('[data-custom-button]'),
      });
      expect(onEditSave).not.toHaveBeenCalled();
      expect(lastStore!.editing).not.toBeNull();

      fireEvent.blur(custom, { relatedTarget: cellsOf(container, 1)[0] });
      expect(onEditSave).toHaveBeenCalledWith(
        expect.objectContaining({ newRow: { ...data[0], name: 'Z' } })
      );
      expect(lastStore!.editing).toBeNull();
    });
  });

  describe('row editing in the table body', () => {
    it('renders an editor in every editable cell and focuses the originating one', () => {
      const { container } = render(<Grid storeOptions={{ editingMode: 'row' }} />);
      fireEvent.doubleClick(cellsOf(container, 0)[1]);
      const cells = cellsOf(container, 0);
      expect(cells[0]).toHaveAttribute('data-editing');
      expect(cells[1]).toHaveAttribute('data-editing');
      expect(cells[2]).not.toHaveAttribute('data-editing');
      expect(editorsOf(rowsOf(container)[0])).toHaveLength(2);
      expect(editorsOf(cells[1])[0]).toHaveFocus();
    });

    it('focuses the first editable cell when started from the API', () => {
      const { container } = render(<Grid storeOptions={{ editingMode: 'row' }} />);
      act(() => lastStore!.table.startEditing('b'));
      expect(editorsOf(cellsOf(container, 1)[0])[0]).toHaveFocus();
    });

    it('walks the editors with Tab and wraps around', () => {
      const { container } = render(<Grid storeOptions={{ editingMode: 'row' }} />);
      act(() => lastStore!.table.startEditing('a'));
      const [first, second] = editorsOf(rowsOf(container)[0]);
      expect(first).toHaveFocus();
      fireEvent.keyDown(first, { key: 'Tab' });
      expect(second).toHaveFocus();
      fireEvent.keyDown(second, { key: 'Tab' });
      expect(first).toHaveFocus();
      fireEvent.keyDown(first, { key: 'Tab', shiftKey: true });
      expect(second).toHaveFocus();
    });

    it('commits on outside click but not on clicks inside the row or a portal', () => {
      const onEditSave = jest.fn();
      const { container } = render(<Grid storeOptions={{ editingMode: 'row', onEditSave }} />);
      act(() => lastStore!.table.startEditing('a'));
      fireEvent.mouseDown(cellsOf(container, 0)[2]);
      expect(onEditSave).not.toHaveBeenCalled();

      const portal = document.createElement('div');
      portal.setAttribute('data-portal', 'true');
      document.body.appendChild(portal);
      fireEvent.mouseDown(portal);
      expect(onEditSave).not.toHaveBeenCalled();
      portal.remove();

      fireEvent.mouseDown(cellsOf(container, 1)[0]);
      expect(onEditSave).toHaveBeenCalledTimes(1);
      expect(lastStore!.editing).toBeNull();
    });

    it('does not commit on blur of a single editor', () => {
      const onEditSave = jest.fn();
      const { container } = render(<Grid storeOptions={{ editingMode: 'row', onEditSave }} />);
      act(() => lastStore!.table.startEditing('a'));
      fireEvent.blur(editorsOf(rowsOf(container)[0])[0]);
      expect(onEditSave).not.toHaveBeenCalled();
      expect(lastStore!.editing?.rowId).toBe('a');
    });

    it('follows the actions column contract', () => {
      const onEditSave = jest.fn();
      const { container } = render(
        <Grid
          storeOptions={{
            editingMode: 'row',
            onEditSave,
            columns: [
              ...columns,
              {
                id: 'actions',
                meta: { type: 'actions' },
                cell: ({ row }) =>
                  row.getIsEditing() ? (
                    <>
                      <button type="button" onClick={() => row.saveEditing()}>
                        Save
                      </button>
                      <button type="button" onClick={() => row.cancelEditing()}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button type="button" onClick={() => row.startEditing()}>
                      Edit
                    </button>
                  ),
              },
            ],
          }}
        />
      );
      fireEvent.click(screen.getAllByRole('button', { name: 'Edit' })[1]);
      expect(rowsOf(container)[1]).toHaveAttribute('data-editing');
      expect(editorsOf(rowsOf(container)[1])).toHaveLength(2);
      expect(cellsOf(container, 1)[3]).not.toHaveAttribute('data-editing');
      expect(screen.getAllByRole('button', { name: 'Edit' })).toHaveLength(2);

      const [firstEditor, secondEditor] = editorsOf(rowsOf(container)[1]);
      secondEditor.focus();
      fireEvent.keyDown(secondEditor, { key: 'Tab' });
      expect(firstEditor).toHaveFocus();

      fireEvent.change(firstEditor, { target: { value: 'Bobby' } });
      fireEvent.mouseDown(screen.getByRole('button', { name: 'Save' }));
      fireEvent.click(screen.getByRole('button', { name: 'Save' }));
      expect(onEditSave).toHaveBeenCalledTimes(1);
      expect(onEditSave).toHaveBeenCalledWith(
        expect.objectContaining({ newRow: { id: 'b', name: 'Bobby', age: 25 } })
      );
      expect(lastStore!.editing).toBeNull();
    });

    it('renders the floating edit actions in row mode only', () => {
      const onEditSave = jest.fn();
      const onEditCancel = jest.fn();
      const { container, rerender } = render(
        <Grid
          storeOptions={{ editingMode: 'row', onEditSave, onEditCancel }}
          withFloatingEditActions
          labels={{ saveRow: 'Keep', cancelRow: 'Drop' }}
        />
      );
      expect(container.querySelector('.mantine-DataGrid-editActions')).not.toBeInTheDocument();
      act(() => lastStore!.table.startEditing('a'));
      const actions = container.querySelector('.mantine-DataGrid-editActions')!;
      expect(actions).toBeInTheDocument();
      fireEvent.mouseDown(screen.getByRole('button', { name: 'Drop' }));
      expect(onEditSave).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole('button', { name: 'Drop' }));
      expect(onEditCancel).toHaveBeenCalled();
      expect(container.querySelector('.mantine-DataGrid-editActions')).not.toBeInTheDocument();

      act(() => lastStore!.table.startEditing('a'));
      fireEvent.click(screen.getByRole('button', { name: 'Keep' }));
      expect(onEditSave).toHaveBeenCalledTimes(1);

      rerender(<Grid storeOptions={{ editingMode: 'cell', onEditSave }} withFloatingEditActions />);
      act(() => lastStore!.table.startEditing('a', 'name'));
      expect(container.querySelector('.mantine-DataGrid-editActions')).not.toBeInTheDocument();
    });
  });

  describe('keyboard', () => {
    it('starts editing with Enter and F2 on a focused row instead of the row click behaviour', () => {
      const onRowClick = jest.fn();
      const { container } = render(<Grid onRowClick={onRowClick} />);
      const row = rowsOf(container)[0];
      row.focus();
      fireEvent.keyDown(row, { key: 'Enter' });
      expect(onRowClick).not.toHaveBeenCalled();
      expect(lastStore!.editing).toEqual({ rowId: 'a', columnId: 'name', values: {} });
      expect(editorsOf(cellsOf(container, 0)[0])[0]).toHaveFocus();

      act(() => lastStore!.table.cancelEditing());
      rowsOf(container)[1].focus();
      fireEvent.keyDown(rowsOf(container)[1], { key: 'F2' });
      expect(lastStore!.editing?.rowId).toBe('b');
    });

    it('leaves Enter to the row click behaviour when the row is not editable', () => {
      const onRowClick = jest.fn();
      const { container } = render(
        <Grid
          onRowClick={onRowClick}
          storeOptions={{
            columns: [{ accessorKey: 'name', header: 'Name', meta: { disableEditing: true } }],
          }}
        />
      );
      fireEvent.keyDown(rowsOf(container)[0], { key: 'Enter' });
      expect(onRowClick).toHaveBeenCalled();
      expect(lastStore!.editing).toBeNull();
    });

    it('still toggles group rows with Enter', () => {
      const { container } = render(
        <Grid storeOptions={{ withGrouping: true, grouping: ['age'] }} />
      );
      const groupRow = container.querySelector<HTMLElement>('tr[data-group-row]')!;
      fireEvent.keyDown(groupRow, { key: 'Enter' });
      expect(groupRow).toHaveAttribute('aria-expanded', 'true');
      expect(lastStore!.editing).toBeNull();
    });

    it('starts editing the focused cell under cell selection', () => {
      const { container } = render(<Grid storeOptions={{ withCellSelection: true }} />);
      const cell = cellsOf(container, 1)[1];
      fireEvent.mouseDown(cell);
      fireEvent.keyDown(cell, { key: 'Enter' });
      expect(lastStore!.editing).toEqual({ rowId: 'b', columnId: 'age', values: {} });
      expect(editorsOf(cellsOf(container, 1)[1])[0]).toHaveFocus();
    });

    it('returns focus to the row or the cell when editing ends', () => {
      const { container, rerender } = render(<Grid />);
      const row = rowsOf(container)[1];
      row.focus();
      fireEvent.keyDown(row, { key: 'Enter' });
      expect(editorsOf(cellsOf(container, 1)[0])[0]).toHaveFocus();
      fireEvent.keyDown(editorsOf(cellsOf(container, 1)[0])[0], { key: 'Escape' });
      expect(rowsOf(container)[1]).toHaveFocus();

      rerender(<Grid storeOptions={{ withCellSelection: true }} />);
      const cell = cellsOf(container, 0)[1];
      fireEvent.mouseDown(cell);
      fireEvent.keyDown(cell, { key: 'F2' });
      expect(editorsOf(cellsOf(container, 0)[1])[0]).toHaveFocus();
      fireEvent.keyDown(editorsOf(cellsOf(container, 0)[1])[0], { key: 'Enter' });
      expect(cellsOf(container, 0)[1]).toHaveFocus();
    });

    it('never starts editing in the list view', () => {
      const onRowClick = jest.fn();
      const { container } = render(<Grid listView onRowClick={onRowClick} />);
      const item = container.querySelector<HTMLElement>('[data-row-id]')!;
      fireEvent.keyDown(item, { key: 'Enter' });
      expect(onRowClick).toHaveBeenCalled();
      expect(lastStore!.editing).toBeNull();
      act(() => lastStore!.table.startEditing('a', 'name'));
      expect(container.querySelector('.mantine-DataGrid-editCell')).not.toBeInTheDocument();
    });
  });

  describe('cell status', () => {
    const getCellStatus = ({ columnId, value }: any) =>
      columnId === 'age' && Number(value) > 30
        ? 'invalid'
        : columnId === 'name'
          ? 'dirty'
          : undefined;

    it('reflects getCellStatus on table body cells', () => {
      const { container } = render(<Grid storeOptions={{ getCellStatus }} />);
      expect(cellsOf(container, 0)[0]).toHaveAttribute('data-dirty');
      expect(cellsOf(container, 0)[1]).not.toHaveAttribute('data-invalid');
      expect(cellsOf(container, 2)[1]).toHaveAttribute('data-invalid');
      expect(cellsOf(container, 2)[2]).not.toHaveAttribute('data-dirty');
    });

    it('reflects getCellStatus on virtual body cells', () => {
      const { container } = render(
        <Grid storeOptions={{ getCellStatus }} virtualize="rows" height={300} />
      );
      const cells = virtualRowsOf(container)[2].querySelectorAll('[role="gridcell"]');
      expect(cells[0]).toHaveAttribute('data-dirty');
      expect(cells[1]).toHaveAttribute('data-invalid');
    });
  });

  describe('virtual body parity', () => {
    it('edits cells on double click with the same attributes and editor', () => {
      const onEditSave = jest.fn();
      const { container } = render(
        <Grid storeOptions={{ onEditSave }} virtualize="rows" height={300} />
      );
      const row = virtualRowsOf(container)[0];
      const cell = row.querySelectorAll<HTMLElement>('[role="gridcell"]')[0];
      fireEvent.doubleClick(cell);
      expect(cell).toHaveAttribute('data-editing');
      expect(row).toHaveAttribute('data-editing');
      const editor = editorsOf(cell)[0];
      expect(editor).toHaveFocus();
      fireEvent.change(editor, { target: { value: 'Alicia' } });
      fireEvent.keyDown(editor, { key: 'Enter' });
      expect(onEditSave).toHaveBeenCalledWith(
        expect.objectContaining({ newRow: { id: 'a', name: 'Alicia', age: 30 } })
      );
    });

    it('edits rows with saving and invalid attributes', async () => {
      const onEditSave = jest.fn(() => Promise.reject(new Error('x')));
      const { container } = render(
        <Grid
          storeOptions={{ editingMode: 'row', onEditSave, onEditSaveError: () => {} }}
          virtualize="rows"
          height={300}
        />
      );
      act(() => lastStore!.table.startEditing('b'));
      const row = () => virtualRowsOf(container)[1];
      expect(row()).toHaveAttribute('data-editing');
      expect(editorsOf(row())).toHaveLength(2);
      expect(editorsOf(row())[0]).toHaveFocus();
      act(() => {
        lastStore!.table.saveEditing();
      });
      expect(row()).toHaveAttribute('data-saving');
      expect(row()).toHaveAttribute('aria-busy', 'true');
      await flush();
      expect(row()).not.toHaveAttribute('data-saving');
      expect(row().querySelectorAll('[role="gridcell"]')[0]).toHaveAttribute('data-invalid');
    });

    it('starts editing with Enter on a focused virtual row', () => {
      const { container } = render(<Grid virtualize="rows" height={300} />);
      fireEvent.keyDown(virtualRowsOf(container)[0], { key: 'Enter' });
      expect(lastStore!.editing?.rowId).toBe('a');
    });
  });
});
