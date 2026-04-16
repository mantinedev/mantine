import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Cell, flexRender } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  TextInput,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import classes from '../DataGrid.module.css';

export type DataGridCellStylesNames = 'td' | 'editCell';

export interface DataGridCellProps
  extends BoxProps, CompoundStylesApiProps<DataGridCellFactory>, ElementProps<'td'> {
  /** TanStack cell instance */
  cell: Cell<any, unknown>;
}

export type DataGridCellFactory = Factory<{
  props: DataGridCellProps;
  ref: HTMLTableCellElement;
  stylesNames: DataGridCellStylesNames;
  compound: true;
}>;

export const DataGridCell = factory<DataGridCellFactory>((props) => {
  const { className, style, classNames, styles, cell, ...others } = useProps(
    'DataGridCell',
    null,
    props
  );

  const ctx = useDataGridContext();
  const isPinned = ctx.withColumnPinning ? cell.column.getIsPinned() : false;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const pinnedStyles = isPinned
    ? {
        position: 'sticky' as const,
        left: isPinned === 'left' ? `${cell.column.getStart('left')}px` : undefined,
        right: isPinned === 'right' ? `${cell.column.getAfter('right')}px` : undefined,
        zIndex: 1,
      }
    : undefined;

  const handleCellClick = ctx.onCellClick
    ? (event: React.MouseEvent) => {
        ctx.onCellClick!(cell, event);
      }
    : undefined;

  const canEdit = ctx.withEditing && !(cell.column.columnDef.meta as any)?.disableEditing;

  const handleDoubleClick = useCallback(
    (event: React.MouseEvent) => {
      if (canEdit) {
        event.stopPropagation();
        setEditValue(String(cell.getValue() ?? ''));
        setIsEditing(true);
      }
    },
    [canEdit, cell]
  );

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = useCallback(() => {
    if (ctx.editingMode === 'row' && ctx.onRowEdit) {
      const values: Record<string, unknown> = {};
      cell.row.getAllCells().forEach((c) => {
        values[c.column.id] = c.column.id === cell.column.id ? editValue : c.getValue();
      });
      ctx.onRowEdit({ row: cell.row, values });
    } else if (ctx.onCellEdit) {
      ctx.onCellEdit({ row: cell.row, columnId: cell.column.id, value: editValue });
    }
    setIsEditing(false);
  }, [ctx, cell, editValue]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSave();
      } else if (event.key === 'Escape') {
        handleCancel();
      }
    },
    [handleSave, handleCancel]
  );

  const editComponent =
    (cell.column.columnDef as any).editComponent ??
    (cell.column.columnDef.meta as any)?.editComponent;

  return (
    <Box
      component="td"
      data-pinned-left={isPinned === 'left' || undefined}
      data-pinned-right={isPinned === 'right' || undefined}
      data-editing={isEditing || undefined}
      onClick={handleCellClick}
      onDoubleClick={canEdit ? handleDoubleClick : undefined}
      {...ctx.getStyles('td', { className, classNames, style, styles })}
      style={{ ...pinnedStyles }}
      {...others}
    >
      {isEditing ? (
        <Box {...ctx.getStyles('editCell', { classNames, styles })}>
          {editComponent ? (
            editComponent({
              value: editValue,
              onChange: setEditValue,
              onSave: handleSave,
              onCancel: handleCancel,
              cell,
            })
          ) : (
            <TextInput
              ref={inputRef}
              size="xs"
              value={editValue}
              onChange={(e) => setEditValue(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
            />
          )}
        </Box>
      ) : (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </Box>
  );
});

DataGridCell.classes = classes;
DataGridCell.displayName = '@mantine/data-grid/DataGridCell';
