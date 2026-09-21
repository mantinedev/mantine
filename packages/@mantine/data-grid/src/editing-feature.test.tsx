import { act } from 'react';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from './DataGrid';
import { DataGridColumnDef } from './DataGrid.types';
import { DataGridEditingState } from './editing-feature';
import { useDataGrid, UseDataGridOptions } from './hooks/use-data-grid';

interface Person {
  id: string;
  name: string;
  age: number;
}

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'id', header: 'Id', meta: { disableEditing: true } },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data: Person[] = [
  { id: 'a', name: 'Alice', age: 30 },
  { id: 'b', name: 'Bob', age: 25 },
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

const flush = () => act(async () => {});

describe('@mantine/data-grid/editing-feature', () => {
  it('starts with no editing target and exposes the state on the store', () => {
    render(<Grid />);
    expect(lastStore!.editing).toBeNull();
    expect(lastStore!.table.store.state.editing).toBeNull();
  });

  it('does nothing without editingMode', () => {
    render(<Grid storeOptions={{ editingMode: undefined }} />);
    act(() => lastStore!.table.startEditing('a', 'name'));
    expect(lastStore!.editing).toBeNull();
    expect(lastStore!.table.getRow('a').getCanEdit()).toBe(false);
  });

  it('starts, edits and saves a cell', async () => {
    const onEditStart = jest.fn();
    const onEditSave = jest.fn();
    render(<Grid storeOptions={{ onEditStart, onEditSave }} />);

    act(() => lastStore!.table.startEditing('a', 'name'));
    expect(lastStore!.editing).toEqual({ rowId: 'a', columnId: 'name', values: {} });
    expect(onEditStart).toHaveBeenCalledWith({
      row: expect.objectContaining({ id: 'a' }),
      columnId: 'name',
    });

    const row = lastStore!.table.getRow('a');
    const cell = row.getAllCells().find((c) => c.column.id === 'name')!;
    expect(row.getIsEditing()).toBe(true);
    expect(cell.getIsEditing()).toBe(true);
    expect(cell.getEditingValue()).toBe('Alice');

    act(() => cell.setEditingValue('Alicia'));
    expect(lastStore!.editing?.values).toEqual({ name: 'Alicia' });
    expect(lastStore!.table.getRow('a').getAllCells()[1].getEditingValue()).toBe('Alicia');

    act(() => lastStore!.table.saveEditing());
    expect(onEditSave).toHaveBeenCalledWith({
      row: expect.objectContaining({ id: 'a' }),
      newRow: { id: 'a', name: 'Alicia', age: 30 },
      oldRow: data[0],
      changedColumnIds: ['name'],
    });
    expect(lastStore!.editing).toBeNull();
  });

  it('ignores non-editable columns and picks the first editable one when omitted', () => {
    render(<Grid />);
    act(() => lastStore!.table.startEditing('a', 'id'));
    expect(lastStore!.editing).toBeNull();

    act(() => lastStore!.table.startEditing('a'));
    expect(lastStore!.editing).toEqual({ rowId: 'a', columnId: 'name', values: {} });
    const cells = lastStore!.table.getRow('a').getAllCells();
    expect(cells[0].getCanEdit()).toBe(false);
    expect(cells[1].getCanEdit()).toBe(true);
    expect(cells[2].getIsEditing()).toBe(false);
  });

  it('puts every editable cell of the row in edit mode in row mode', () => {
    render(<Grid storeOptions={{ editingMode: 'row' }} />);
    act(() => lastStore!.table.getRow('b').startEditing());
    expect(lastStore!.editing).toEqual({ rowId: 'b', columnId: null, values: {} });
    const cells = lastStore!.table.getRow('b').getAllCells();
    expect(cells.map((c) => c.getIsEditing())).toEqual([false, true, true]);

    act(() => cells[2].setEditingValue(26));
    act(() => lastStore!.table.getRow('b').startEditing('age'));
    expect(lastStore!.editing).toEqual({ rowId: 'b', columnId: null, values: { age: 26 } });
  });

  it('cancels through the row API and calls onEditCancel', () => {
    const onEditCancel = jest.fn();
    const onEditSave = jest.fn();
    render(<Grid storeOptions={{ onEditCancel, onEditSave }} />);
    act(() => lastStore!.table.getRow('a').startEditing('name'));
    act(() => lastStore!.table.getRow('a').getAllCells()[1].setEditingValue('X'));
    act(() => lastStore!.table.getRow('a').cancelEditing());
    expect(lastStore!.editing).toBeNull();
    expect(onEditCancel).toHaveBeenCalledWith({ row: expect.objectContaining({ id: 'a' }) });
    expect(onEditSave).not.toHaveBeenCalled();
  });

  it('keeps the editor open with saving status while an async save is pending', async () => {
    let resolve!: () => void;
    const onEditSave = jest.fn(
      () =>
        new Promise<void>((r) => {
          resolve = r;
        })
    );
    render(<Grid storeOptions={{ onEditSave }} />);
    act(() => lastStore!.table.startEditing('a', 'name'));
    act(() => {
      lastStore!.table.saveEditing();
    });
    expect(lastStore!.editing?.status).toBe('saving');
    expect(lastStore!.table.getRow('a').getIsSaving()).toBe(true);

    act(() => lastStore!.table.saveEditing());
    expect(onEditSave).toHaveBeenCalledTimes(1);

    resolve();
    await flush();
    expect(lastStore!.editing).toBeNull();
  });

  it('keeps drafts and marks the state rejected when the save fails', async () => {
    const error = new Error('nope');
    const onEditSave = jest.fn(() => Promise.reject(error));
    const onEditSaveError = jest.fn();
    render(<Grid storeOptions={{ onEditSave, onEditSaveError }} />);
    act(() => lastStore!.table.startEditing('a', 'name'));
    act(() => lastStore!.table.getRow('a').getAllCells()[1].setEditingValue('Al'));
    act(() => {
      lastStore!.table.saveEditing();
    });
    await flush();

    expect(onEditSaveError).toHaveBeenCalledWith(error, {
      row: expect.objectContaining({ id: 'a' }),
      newRow: { id: 'a', name: 'Al', age: 30 },
    });
    expect(lastStore!.editing).toEqual({
      rowId: 'a',
      columnId: 'name',
      values: { name: 'Al' },
      status: 'rejected',
    });

    act(() => lastStore!.table.getRow('a').getAllCells()[1].setEditingValue('Ali'));
    expect(lastStore!.editing?.status).toBeUndefined();
  });

  it('treats a synchronous throw as a rejected save', () => {
    const onEditSave = jest.fn(() => {
      throw new Error('sync');
    });
    const onEditSaveError = jest.fn();
    render(<Grid storeOptions={{ onEditSave, onEditSaveError }} />);
    act(() => lastStore!.table.startEditing('a', 'name'));
    act(() => lastStore!.table.saveEditing());
    expect(onEditSaveError).toHaveBeenCalled();
    expect(lastStore!.editing?.status).toBe('rejected');
  });

  it('blocks the save while meta.validate returns a message', () => {
    const onEditSave = jest.fn();
    render(
      <Grid
        storeOptions={{
          onEditSave,
          columns: [
            { accessorKey: 'name', header: 'Name' },
            {
              accessorKey: 'age',
              header: 'Age',
              meta: { validate: (value) => (Number(value) < 0 ? 'Must be positive' : null) },
            },
          ],
        }}
      />
    );
    act(() => lastStore!.table.startEditing('a', 'age'));
    const ageCell = () => lastStore!.table.getRow('a').getAllCells()[1];
    expect(ageCell().getEditingError()).toBeUndefined();

    act(() => ageCell().setEditingValue(-1));
    expect(ageCell().getEditingError()).toBe('Must be positive');
    act(() => lastStore!.table.saveEditing());
    expect(onEditSave).not.toHaveBeenCalled();
    expect(lastStore!.editing).not.toBeNull();

    act(() => ageCell().setEditingValue(5));
    act(() => lastStore!.table.saveEditing());
    expect(onEditSave).toHaveBeenCalledWith(
      expect.objectContaining({
        changedColumnIds: ['age'],
        newRow: { id: 'a', name: 'Alice', age: 5 },
      })
    );
  });

  it('writes nested accessorKey paths back into newRow', () => {
    const onEditSave = jest.fn();
    const nested = [{ id: 'n', address: { city: 'Rome' } }];
    function NestedGrid() {
      const store = useDataGrid<any>({
        data: nested,
        columns: [{ accessorKey: 'address.city', header: 'City' }],
        getRowId: (row) => row.id,
        editingMode: 'cell',
        onEditSave,
      });
      lastStore = store as any;
      return <DataGrid store={store} />;
    }
    render(<NestedGrid />);
    act(() => lastStore!.table.startEditing('n'));
    act(() => lastStore!.table.getRow('n').getAllCells()[0].setEditingValue('Oslo'));
    act(() => lastStore!.table.saveEditing());
    expect(onEditSave).toHaveBeenCalledWith(
      expect.objectContaining({
        newRow: { id: 'n', address: { city: 'Oslo' } },
        changedColumnIds: ['address_city'],
      })
    );
    expect(nested[0].address.city).toBe('Rome');
  });

  it('commits the current target before starting another one and refuses while it stays open', async () => {
    const onEditSave = jest.fn();
    const onEditCancel = jest.fn();
    render(
      <Grid
        storeOptions={{
          onEditSave,
          onEditCancel,
          columns: [
            { accessorKey: 'name', header: 'Name' },
            {
              accessorKey: 'age',
              header: 'Age',
              meta: { validate: (value) => (Number(value) < 0 ? 'Must be positive' : null) },
            },
          ],
        }}
      />
    );
    act(() => lastStore!.table.startEditing('a', 'name'));
    act(() => lastStore!.table.getRow('a').getAllCells()[0].setEditingValue('Al'));
    act(() => lastStore!.table.startEditing('b', 'name'));
    expect(onEditSave).toHaveBeenCalledWith(
      expect.objectContaining({ changedColumnIds: ['name'] })
    );
    expect(lastStore!.editing).toEqual({ rowId: 'b', columnId: 'name', values: {} });

    act(() => lastStore!.table.startEditing('b', 'age'));
    act(() => lastStore!.table.getRow('b').getAllCells()[1].setEditingValue(-1));
    act(() => lastStore!.table.startEditing('a', 'name'));
    expect(lastStore!.editing).toEqual({ rowId: 'b', columnId: 'age', values: { age: -1 } });
    expect(onEditCancel).not.toHaveBeenCalled();

    act(() => lastStore!.table.getRow('b').getAllCells()[1].setEditingValue(1));
    onEditSave.mockImplementationOnce(() => new Promise(() => {}));
    act(() => {
      lastStore!.table.saveEditing();
    });
    expect(lastStore!.editing?.status).toBe('saving');
    act(() => lastStore!.table.startEditing('a', 'name'));
    expect(lastStore!.editing?.rowId).toBe('b');
    expect(lastStore!.editing?.status).toBe('saving');
  });

  it('supports controlled state and initialState', () => {
    const onEditingChange = jest.fn();
    const editing: DataGridEditingState = { rowId: 'b', columnId: 'age', values: {} };
    render(<Grid storeOptions={{ editing, onEditingChange }} />);
    expect(lastStore!.table.getRow('b').getIsEditing()).toBe(true);
    act(() => lastStore!.table.cancelEditing());
    expect(onEditingChange).toHaveBeenCalled();
    expect(lastStore!.table.getRow('b').getIsEditing()).toBe(true);

    render(
      <Grid
        storeOptions={{
          tableOptions: { initialState: { editing: { rowId: 'a', columnId: 'name', values: {} } } },
        }}
      />
    );
    expect(lastStore!.editing?.rowId).toBe('a');
  });
});
