import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Cell, flexRender, Row } from '@tanstack/react-table';
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
import { getPinnedStyles } from '../get-pinned-styles';
import type { DataGridFeatures } from '../table-features';
import { TreeCellContent } from './DataGridTreeCell';
import { useCellSelection } from './use-cell-selection';
import classes from '../DataGrid.module.css';

export type DataGridCellStylesNames = 'td' | 'editCell' | 'treeIndent' | 'treeToggle' | 'treeLabel';

export interface DataGridCellProps
  extends BoxProps, CompoundStylesApiProps<DataGridCellFactory>, ElementProps<'td'> {
  /** TanStack cell instance */
  cell: Cell<DataGridFeatures, any, unknown>;

  /** Tree data info, present only on the first data cell when tree data is active */
  treeData?: { row: Row<DataGridFeatures, any> };

  /** Number of columns this cell should span */
  colSpan?: number;

  /** Number of rows this cell should span */
  rowSpan?: number;

  /** Visual column index used for keyboard navigation */
  colIndex?: number;
}

export type DataGridCellFactory = Factory<{
  props: DataGridCellProps;
  ref: HTMLTableCellElement;
  stylesNames: DataGridCellStylesNames;
  compound: true;
}>;

export const DataGridCell = factory<DataGridCellFactory>((props) => {
  const {
    className,
    style,
    classNames,
    styles,
    cell,
    treeData,
    colSpan,
    rowSpan,
    colIndex,
    ...others
  } = useProps('DataGridCell', null, props);

  const ctx = useDataGridContext();
  const meta = cell.column.columnDef.meta;
  const utility = meta?.utility;
  const isPinned = ctx.withColumnPinning ? cell.column.getIsPinned() : false;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState<unknown>('');
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const pinnedStyles = ctx.withColumnPinning ? getPinnedStyles(cell.column) : undefined;

  const cellSelection = useCellSelection<HTMLTableCellElement>(cell);

  const canEdit = ctx.withEditing && !utility && !cell.column.columnDef.meta?.disableEditing;
  const editComponent = cell.column.columnDef.meta?.editComponent;

  const startEditing = useCallback(
    (event: React.MouseEvent) => {
      if (canEdit) {
        event.stopPropagation();
        setEditValue(editComponent ? cell.getValue() : String(cell.getValue() ?? ''));
        setIsEditing(true);
      }
    },
    [canEdit, cell, editComponent]
  );

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = useCallback(() => {
    if (isSaving) {
      return;
    }

    const doSave = () => {
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
    };

    if (ctx.processRowUpdate) {
      const oldRow = cell.row.original;
      const newRow = { ...oldRow, [cell.column.id]: editValue };
      setIsSaving(true);
      ctx
        .processRowUpdate(newRow, oldRow)
        .then(() => {
          doSave();
        })
        .catch((error: unknown) => {
          ctx.onProcessRowUpdateError?.(error);
          setIsEditing(false);
        })
        .finally(() => {
          setIsSaving(false);
        });
    } else {
      doSave();
    }
  }, [ctx, cell, editValue, isSaving]);

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

  const composedClick = useCallback(
    (event: React.MouseEvent) => {
      if (ctx.onCellClick) {
        ctx.onCellClick(cell, event);
      }
      if (canEdit && ctx.editTrigger === 'click') {
        startEditing(event);
      }
    },
    [ctx.onCellClick, cell, canEdit, ctx.editTrigger, startEditing]
  );

  return (
    <Box
      component="td"
      colSpan={colSpan}
      rowSpan={rowSpan}
      data-col-index={colIndex}
      data-utility={utility}
      data-align={meta?.align}
      data-actions={meta?.type === 'actions' || undefined}
      data-pinned-left={isPinned === 'start' || undefined}
      data-pinned-right={isPinned === 'end' || undefined}
      data-editing={isEditing || undefined}
      data-saving={isSaving || undefined}
      ref={cellSelection.ref}
      {...cellSelection.props}
      onClick={
        ctx.onCellClick || (canEdit && ctx.editTrigger === 'click') ? composedClick : undefined
      }
      onDoubleClick={canEdit && ctx.editTrigger === 'doubleClick' ? startEditing : undefined}
      {...ctx.getStyles('td', { className, classNames, style, styles })}
      style={{ ...pinnedStyles }}
      {...others}
    >
      {isEditing ? (
        <div {...ctx.getStyles('editCell', { classNames, styles })}>
          {editComponent ? (
            editComponent({
              value: editValue,
              onChange: (v) => setEditValue(v),
              onSave: handleSave,
              onCancel: handleCancel,
              cell,
            })
          ) : (
            <TextInput
              ref={inputRef}
              size="xs"
              value={String(editValue ?? '')}
              onChange={(e) => setEditValue(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              disabled={isSaving}
            />
          )}
        </div>
      ) : treeData ? (
        <TreeCellContent row={treeData.row} classNames={classNames} styles={styles}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TreeCellContent>
      ) : (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </Box>
  );
});

DataGridCell.classes = classes;
DataGridCell.displayName = '@mantine/data-grid/DataGridCell';
