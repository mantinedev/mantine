import type { ReactNode } from 'react';
import {
  assignPrototypeAPIs,
  assignTableAPIs,
  makeStateUpdater,
  setStateSlice,
  type Cell,
  type Column,
  type OnChangeFn,
  type Row,
  type RowData,
  type TableFeature,
  type TableFeatures,
  type Updater,
} from '@tanstack/react-table';
import type { DataGridColumnMeta } from './DataGrid.types';

export type DataGridEditingMode = 'cell' | 'row';

export type DataGridEditingStatus = 'saving' | 'rejected';

export type DataGridCellStatus = 'dirty' | 'invalid' | undefined;

export interface DataGridEditingState {
  /** Id of the row being edited */
  rowId: string;

  /** Edited column in cell mode; in row mode the column whose editor received focus, `null` when editing started from an actions button or the keyboard */
  columnId: string | null;

  /** Draft values keyed by column id, only the columns that were changed */
  values: Record<string, unknown>;

  /** `'saving'` while an async `onEditSave` is pending, `'rejected'` after it failed, cleared by the next value change */
  status?: DataGridEditingStatus;
}

export interface DataGridEditStartPayload<TFeatures extends TableFeatures, TData extends RowData> {
  /** Row that entered edit mode */
  row: Row<TFeatures, TData>;

  /** Column that received focus, `null` when editing started from an actions button or the keyboard in row mode */
  columnId: string | null;
}

export interface DataGridEditSavePayload<TFeatures extends TableFeatures, TData extends RowData> {
  /** Row being saved */
  row: Row<TFeatures, TData>;

  /** Row data with the drafts written back through each column's `accessorKey` */
  newRow: TData;

  /** Row data before the edit, `row.original` */
  oldRow: TData;

  /** Ids of the columns whose draft differs from the current value */
  changedColumnIds: string[];
}

export interface DataGridEditSaveErrorPayload<
  TFeatures extends TableFeatures,
  TData extends RowData,
> {
  /** Row whose save failed */
  row: Row<TFeatures, TData>;

  /** Row data that was passed to `onEditSave` */
  newRow: TData;
}

export interface DataGridEditCancelPayload<TFeatures extends TableFeatures, TData extends RowData> {
  /** Row whose drafts were discarded */
  row: Row<TFeatures, TData>;
}

export interface DataGridCellStatusPayload<TFeatures extends TableFeatures, TData extends RowData> {
  /** Row of the cell */
  row: Row<TFeatures, TData>;

  /** Column id of the cell */
  columnId: string;

  /** Current cell value */
  value: unknown;
}

export interface TableState_DataGridEditing {
  editing: DataGridEditingState | null;
}

export interface TableOptions_DataGridEditing<
  TFeatures extends TableFeatures,
  TData extends RowData,
> {
  /** Editing mode, enables inline editing when set */
  editingMode?: DataGridEditingMode;

  /** Pointer gesture that starts editing a cell, @default 'doubleClick' */
  editTrigger?: 'click' | 'doubleClick';

  /** Called with an updater when the editing state changes, pair with `state.editing` for controlled editing */
  onEditingChange?: OnChangeFn<DataGridEditingState | null>;

  /** Called when a row or cell enters edit mode */
  onEditStart?: (payload: DataGridEditStartPayload<TFeatures, TData>) => void;

  /** Called on commit with the updated row; return a promise to keep the editor open until it settles, reject to keep it open with the drafts */
  onEditSave?: (payload: DataGridEditSavePayload<TFeatures, TData>) => void | Promise<void>;

  /** Called when `onEditSave` throws or rejects */
  onEditSaveError?: (
    error: unknown,
    payload: DataGridEditSaveErrorPayload<TFeatures, TData>
  ) => void;

  /** Called when editing is cancelled */
  onEditCancel?: (payload: DataGridEditCancelPayload<TFeatures, TData>) => void;

  /** Returns the status tint of a body cell: `'dirty'` or `'invalid'` */
  getCellStatus?: (payload: DataGridCellStatusPayload<TFeatures, TData>) => DataGridCellStatus;
}

export interface Table_DataGridEditing {
  /** Starts editing the given row, in cell mode the column is required and defaults to the first editable one */
  startEditing: (rowId: string, columnId?: string) => void;

  /** Validates the drafts and commits them through `onEditSave`, returns the pending promise for async saves */
  saveEditing: () => void | Promise<void>;

  /** Leaves edit mode and drops the drafts */
  cancelEditing: () => void;

  /** Updates the editing state with a next state or updater function */
  setEditing: (updater: Updater<DataGridEditingState | null>) => void;
}

export interface Row_DataGridEditing {
  /** Whether the row is a data row with at least one editable visible cell */
  getCanEdit: () => boolean;

  /** Whether the row is the editing target */
  getIsEditing: () => boolean;

  /** Whether an async save of this row is pending */
  getIsSaving: () => boolean;

  /** Starts editing this row, optionally at the given column */
  startEditing: (columnId?: string) => void;

  /** Commits the drafts of this row when it is the editing target */
  saveEditing: () => void | Promise<void>;

  /** Cancels editing of this row when it is the editing target */
  cancelEditing: () => void;
}

export interface Column_DataGridEditing {
  /** Whether cells of this column can enter edit mode */
  getCanEdit: () => boolean;
}

export interface Cell_DataGridEditing {
  /** Whether the cell can enter edit mode */
  getCanEdit: () => boolean;

  /** Whether the cell renders an editor */
  getIsEditing: () => boolean;

  /** Draft value when the cell was changed, the cell value otherwise */
  getEditingValue: () => unknown;

  /** Updates the draft value of the cell, clears a rejected save status */
  setEditingValue: (value: unknown) => void;

  /** Result of `meta.validate` for the current draft, `undefined` when valid or not editing */
  getEditingError: () => ReactNode | undefined;
}

declare module '@tanstack/table-core' {
  interface Plugins {
    editingFeature: TableFeature;
  }

  interface TableState_FeatureMap {
    editingFeature: TableState_DataGridEditing;
  }

  interface TableOptions_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
    editingFeature: TableOptions_DataGridEditing<TFeatures, TData>;
  }

  interface Table_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
    editingFeature: Table_DataGridEditing;
  }

  interface Row_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
    editingFeature: Row_DataGridEditing;
  }

  interface Column_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
    editingFeature: Column_DataGridEditing;
  }

  interface Cell_FeatureMap {
    editingFeature: Cell_DataGridEditing;
  }
}

type AnyTable = any;
type AnyRow = Row<any, any>;
type AnyCell = Cell<any, any, unknown>;
type AnyColumn = Column<any, any, unknown>;

interface EditingInstanceData {
  _editingSaveId: number;
}

const readEditing = (table: AnyTable): DataGridEditingState | null =>
  table.atoms.editing?.get() ?? null;

const readOptions = (table: AnyTable): TableOptions_DataGridEditing<any, any> => table.options;

function setEditing(table: AnyTable, updater: Updater<DataGridEditingState | null>) {
  setStateSlice(table, 'editing', updater);
}

const readMeta = (column: AnyColumn): DataGridColumnMeta | undefined => column.columnDef.meta;

function column_getCanEdit(column: AnyColumn): boolean {
  const meta = readMeta(column);
  return (
    readOptions(column.table).editingMode !== undefined &&
    column.accessorFn !== undefined &&
    !meta?.utility &&
    meta?.type !== 'actions' &&
    !meta?.disableEditing
  );
}

function cell_getCanEdit(cell: AnyCell): boolean {
  return (
    cell.column.getCanEdit() &&
    !cell.row.getIsGrouped() &&
    !cell.getIsPlaceholder() &&
    !cell.getIsAggregated()
  );
}

function row_getCanEdit(row: AnyRow): boolean {
  return (
    readOptions(row.table).editingMode !== undefined &&
    !row.getIsGrouped() &&
    row.getVisibleCells().some((cell) => cell.getCanEdit())
  );
}

function row_getIsEditing(row: AnyRow): boolean {
  return readEditing(row.table)?.rowId === row.id;
}

function row_getIsSaving(row: AnyRow): boolean {
  const editing = readEditing(row.table);
  return editing?.rowId === row.id && editing.status === 'saving';
}

function cell_getIsEditing(cell: AnyCell): boolean {
  const editing = readEditing(cell.table);
  if (!editing || editing.rowId !== cell.row.id || !cell.getCanEdit()) {
    return false;
  }

  return readOptions(cell.table).editingMode === 'row' || editing.columnId === cell.column.id;
}

function cell_getEditingValue(cell: AnyCell): unknown {
  const editing = readEditing(cell.table);
  if (editing?.rowId === cell.row.id && Object.hasOwn(editing.values, cell.column.id)) {
    return editing.values[cell.column.id];
  }

  return cell.getValue();
}

function cell_setEditingValue(cell: AnyCell, value: unknown) {
  setEditing(cell.table, (old) => {
    if (!old || old.rowId !== cell.row.id) {
      return old;
    }

    const { status, ...rest } = old;
    return {
      ...rest,
      ...(status === 'saving' && { status }),
      values: { ...old.values, [cell.column.id]: value },
    };
  });
}

function isEmptyError(error: unknown) {
  return error === null || error === undefined || error === false || error === '';
}

function cell_getEditingError(cell: AnyCell): ReactNode | undefined {
  const validate = readMeta(cell.column)?.validate;
  if (!validate || !cell.getIsEditing()) {
    return undefined;
  }

  const error = validate(cell.getEditingValue(), cell.row);
  return isEmptyError(error) ? undefined : error;
}

function getEditorCells(row: AnyRow): AnyCell[] {
  return row.getVisibleCells().filter((cell) => cell.getIsEditing());
}

function getFirstEditableColumnId(row: AnyRow): string | undefined {
  return row.getVisibleCells().find((cell) => cell.getCanEdit())?.column.id;
}

function getAccessorPath(column: AnyColumn): string[] {
  const accessorKey = (column.columnDef as { accessorKey?: string | number }).accessorKey;
  if (accessorKey === undefined) {
    return [column.id];
  }

  return typeof accessorKey === 'number' ? [String(accessorKey)] : accessorKey.split('.');
}

function setAtPath(target: any, path: string[], value: unknown) {
  const [head, ...rest] = path;
  if (rest.length === 0) {
    target[head] = value;
    return;
  }

  const next = target[head];
  target[head] = Array.isArray(next) ? [...next] : { ...(next ?? {}) };
  setAtPath(target[head], rest, value);
}

function table_startEditing(table: AnyTable, rowId: string, columnId?: string) {
  const mode = readOptions(table).editingMode;
  if (!mode) {
    return;
  }

  const row: AnyRow = table.getRow(rowId, true);
  if (!row.getCanEdit()) {
    return;
  }

  const column = columnId ? table.getColumn(columnId) : undefined;
  const requestedEditable = column?.getCanEdit() ?? false;
  let targetColumnId: string | null = requestedEditable ? column!.id : null;

  if (mode === 'cell') {
    if (columnId && !requestedEditable) {
      return;
    }
    targetColumnId ??= getFirstEditableColumnId(row) ?? null;
  }

  const current = readEditing(table);
  if (current) {
    if (
      current.rowId === rowId &&
      (mode === 'row' || current.columnId === targetColumnId) &&
      current.status !== 'rejected'
    ) {
      return;
    }
    if (!commitEditing(table).closed) {
      return;
    }
  }

  setEditing(table, { rowId, columnId: targetColumnId, values: {} });
  readOptions(table).onEditStart?.({ row, columnId: targetColumnId });
}

interface CommitResult {
  closed: boolean;
  promise?: Promise<void>;
}

function commitEditing(table: AnyTable): CommitResult {
  const editing = readEditing(table);
  if (!editing || editing.status === 'saving') {
    return { closed: false };
  }

  const row: AnyRow = table.getRow(editing.rowId, true);
  if (getEditorCells(row).some((cell) => cell.getEditingError() !== undefined)) {
    return { closed: false };
  }

  const oldRow = row.original;
  const newRow = Array.isArray(oldRow) ? [...oldRow] : { ...oldRow };
  const changedColumnIds: string[] = [];
  for (const columnId of Object.keys(editing.values)) {
    const column = table.getColumn(columnId);
    if (!column || Object.is(editing.values[columnId], row.getValue(columnId))) {
      continue;
    }
    changedColumnIds.push(columnId);
    setAtPath(newRow, getAccessorPath(column), editing.values[columnId]);
  }

  const options = readOptions(table);
  const instance = table as EditingInstanceData;
  const saveId = ++instance._editingSaveId;
  const finish = () => {
    if (instance._editingSaveId !== saveId) {
      return;
    }
    setEditing(table, (old) => (old?.rowId === editing.rowId ? null : old));
  };
  const reject = (error: unknown) => {
    options.onEditSaveError?.(error, { row, newRow });
    if (instance._editingSaveId !== saveId) {
      return;
    }
    setEditing(table, (old) =>
      old?.rowId === editing.rowId ? { ...old, status: 'rejected' } : old
    );
  };

  let result: void | Promise<void>;
  try {
    result = options.onEditSave?.({ row, newRow, oldRow, changedColumnIds });
  } catch (error) {
    reject(error);
    return { closed: false };
  }

  if (result && typeof (result as Promise<void>).then === 'function') {
    setEditing(table, (old) => (old?.rowId === editing.rowId ? { ...old, status: 'saving' } : old));
    return { closed: false, promise: (result as Promise<void>).then(finish, reject) };
  }

  finish();
  return { closed: true };
}

function table_saveEditing(table: AnyTable): void | Promise<void> {
  return commitEditing(table).promise;
}

function table_cancelEditing(table: AnyTable) {
  const editing = readEditing(table);
  if (!editing) {
    return;
  }

  const instance = table as EditingInstanceData;
  instance._editingSaveId += 1;
  const row: AnyRow = table.getRow(editing.rowId, true);
  setEditing(table, null);
  readOptions(table).onEditCancel?.({ row });
}

/**
 * Grid-registered TanStack feature that owns the inline editing state and the
 * table / row / cell editing APIs. One editing target per table; drafts live
 * in `editing.values` until `saveEditing` commits them through `onEditSave`.
 */
export const editingFeature: TableFeature = {
  getInitialState: (initialState) => ({ editing: null, ...initialState }) as any,

  getDefaultTableOptions: (table) =>
    ({ onEditingChange: makeStateUpdater('editing', table as any) }) as any,

  initTableInstanceData: (table) => {
    (table as unknown as EditingInstanceData)._editingSaveId = 0;
  },

  constructTableAPIs: (table) => {
    assignTableAPIs('editingFeature' as any, table, {
      table_startEditing: {
        fn: (rowId: string, columnId?: string) => table_startEditing(table, rowId, columnId),
      },
      table_saveEditing: { fn: () => table_saveEditing(table) },
      table_cancelEditing: { fn: () => table_cancelEditing(table) },
      table_setEditing: {
        fn: (updater: Updater<DataGridEditingState | null>) => setEditing(table, updater),
      },
    });
  },

  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs('editingFeature' as any, prototype, table, {
      column_getCanEdit: { fn: (column: AnyColumn) => column_getCanEdit(column) },
    });
  },

  assignRowPrototype: (prototype, table) => {
    assignPrototypeAPIs('editingFeature' as any, prototype, table, {
      row_getCanEdit: { fn: (row: AnyRow) => row_getCanEdit(row) },
      row_getIsEditing: { fn: (row: AnyRow) => row_getIsEditing(row) },
      row_getIsSaving: { fn: (row: AnyRow) => row_getIsSaving(row) },
      row_startEditing: {
        fn: (row: AnyRow, columnId?: string) => table_startEditing(row.table, row.id, columnId),
      },
      row_saveEditing: {
        fn: (row: AnyRow) => (row.getIsEditing() ? table_saveEditing(row.table) : undefined),
      },
      row_cancelEditing: {
        fn: (row: AnyRow) => {
          if (row.getIsEditing()) {
            table_cancelEditing(row.table);
          }
        },
      },
    });
  },

  assignCellPrototype: (prototype, table) => {
    assignPrototypeAPIs('editingFeature' as any, prototype, table, {
      cell_getCanEdit: { fn: (cell: AnyCell) => cell_getCanEdit(cell) },
      cell_getIsEditing: { fn: (cell: AnyCell) => cell_getIsEditing(cell) },
      cell_getEditingValue: { fn: (cell: AnyCell) => cell_getEditingValue(cell) },
      cell_setEditingValue: {
        fn: (cell: AnyCell, value: unknown) => cell_setEditingValue(cell, value),
      },
      cell_getEditingError: { fn: (cell: AnyCell) => cell_getEditingError(cell) },
    });
  },
};
