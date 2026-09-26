import React, { useCallback, useEffect, useRef } from 'react';
import { Cell } from '@tanstack/react-table';
import { TextInput, Tooltip } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { getColumnLabel } from '../get-column-label';
import type { DataGridFeatures } from '../table-features';

type GridCell = Cell<DataGridFeatures, any, unknown>;

const FOCUSABLE_SELECTOR = 'input, textarea, select, button, [tabindex]:not([tabindex="-1"])';

const stopPropagation = (event: React.SyntheticEvent) => event.stopPropagation();

function focusElement(element: HTMLElement | null | undefined) {
  if (!element) {
    return;
  }

  element.focus();
  if (element instanceof HTMLInputElement) {
    element.select();
  }
}

function getRowEditorFocusables(rowElement: HTMLElement) {
  return Array.from(rowElement.querySelectorAll<HTMLElement>('[data-editing]')).flatMap((cell) =>
    Array.from(cell.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (element) => !(element as HTMLInputElement | HTMLButtonElement).disabled
    )
  );
}

interface CellEditingAttributes {
  'data-editing': true | undefined;
  'data-dirty': true | undefined;
  'data-invalid': true | undefined;
  'aria-invalid': true | undefined;
}

interface CellEditingHandlers {
  onClick: ((event: React.MouseEvent) => void) | undefined;
  onDoubleClick: ((event: React.MouseEvent) => void) | undefined;
  onKeyDown: ((event: React.KeyboardEvent) => void) | undefined;
}

export function useCellEditing<T extends HTMLElement>(
  cell: GridCell,
  elementRef: React.RefObject<T | null>
) {
  const ctx = useDataGridContext();
  const { row, column } = cell;
  const meta = column.columnDef.meta;
  const editing = ctx.store.editing;
  const canEdit = ctx.withEditing && cell.getCanEdit();
  const isEditing = canEdit && cell.getIsEditing();
  const isSaving = isEditing && row.getIsSaving();
  const error = isEditing ? cell.getEditingError() : undefined;
  const invalid = error !== undefined || (isEditing && editing?.status === 'rejected');
  const status =
    meta?.utility || meta?.type === 'actions'
      ? undefined
      : ctx.table.options.getCellStatus?.({ row, columnId: column.id, value: cell.getValue() });

  const isFocusTarget =
    isEditing &&
    (ctx.editingMode === 'cell' ||
      (editing?.columnId && ctx.table.getColumn(editing.columnId)?.getCanEdit()
        ? editing.columnId === column.id
        : row.getVisibleCells().find((c) => c.getCanEdit())?.id === cell.id));

  const editCellRef = useRef<HTMLDivElement>(null);
  const wasEditingRef = useRef(false);
  const focusMovedRef = useRef(false);

  useEffect(() => {
    if (isEditing && isFocusTarget) {
      focusElement(editCellRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR));
    }
  }, [isEditing, isFocusTarget]);

  useEffect(() => {
    if (wasEditingRef.current && !isEditing && !focusMovedRef.current) {
      const element = elementRef.current;
      const active = document.activeElement;
      if (element && (!active || active === document.body || element.contains(active))) {
        const target = element.hasAttribute('tabindex')
          ? element
          : element.closest<HTMLElement>('[data-row-id][tabindex]');
        target?.focus();
      }
    }
    wasEditingRef.current = isEditing;
    focusMovedRef.current = false;
  }, [isEditing]);

  const start = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation();
      row.startEditing(column.id);
    },
    [row, column.id]
  );

  const handlers: CellEditingHandlers = {
    onClick: canEdit && !isEditing && ctx.editTrigger === 'click' ? start : undefined,
    onDoubleClick: canEdit && !isEditing && ctx.editTrigger === 'doubleClick' ? start : undefined,
    onKeyDown:
      canEdit && !isEditing
        ? (event) => {
            if (event.target !== event.currentTarget) {
              return;
            }
            if (event.key === 'Enter' || event.key === 'F2') {
              event.preventDefault();
              row.startEditing(column.id);
            }
          }
        : undefined,
  };

  const attributes: CellEditingAttributes = {
    'data-editing': isEditing || undefined,
    'data-dirty': status === 'dirty' || undefined,
    'data-invalid': invalid || status === 'invalid' || undefined,
    'aria-invalid': invalid || undefined,
  };

  const handleEditorKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab' && ctx.editingMode === 'row') {
      const rowElement = event.currentTarget.closest<HTMLElement>('[data-row-id]');
      const focusables = rowElement ? getRowEditorFocusables(rowElement) : [];
      const index = focusables.indexOf(document.activeElement as HTMLElement);
      if (index !== -1) {
        event.preventDefault();
        const step = event.shiftKey ? -1 : 1;
        focusElement(focusables[(index + step + focusables.length) % focusables.length]);
      }
    } else if (!event.defaultPrevented) {
      if (event.key === 'Enter') {
        event.preventDefault();
        row.saveEditing();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        row.cancelEditing();
      }
    }

    event.stopPropagation();
  };

  const onChange = (value: unknown) => cell.setEditingValue(value);
  const onSave = () => {
    row.saveEditing();
  };
  const handleEditorBlur =
    ctx.editingMode === 'cell'
      ? (event: React.FocusEvent<HTMLDivElement>) => {
          const next = event.relatedTarget;
          if (
            next instanceof Node &&
            (event.currentTarget.contains(next) ||
              (next instanceof Element && next.closest('[data-portal]')))
          ) {
            return;
          }
          focusMovedRef.current = next instanceof Element;
          onSave();
        }
      : undefined;
  const onCancel = () => row.cancelEditing();
  const resetFocusMoved = () => {
    focusMovedRef.current = false;
  };
  const value = isEditing ? cell.getEditingValue() : undefined;

  const editor = isEditing ? (
    <div
      ref={editCellRef}
      onKeyDown={handleEditorKeyDown}
      onBlur={handleEditorBlur}
      onFocus={resetFocusMoved}
      onMouseDown={stopPropagation}
      onClick={stopPropagation}
      onDoubleClick={stopPropagation}
      {...ctx.getStyles('editCell')}
    >
      {meta?.editComponent ? (
        meta.editComponent({ value, onChange, onSave, onCancel, error, cell })
      ) : (
        <Tooltip
          label={error}
          disabled={error === undefined}
          opened={error !== undefined}
          position="bottom-start"
        >
          <TextInput
            variant="unstyled"
            data-editor
            aria-label={getColumnLabel(column)}
            value={String(value ?? '')}
            onChange={(event) => onChange(event.currentTarget.value)}
            disabled={isSaving}
            error={error !== undefined}
          />
        </Tooltip>
      )}
    </div>
  ) : null;

  return { attributes, handlers, editor };
}
