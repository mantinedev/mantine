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
import { ExpandChevron } from '../icons';
import classes from '../DataGrid.module.css';

export type DataGridCellStylesNames = 'td' | 'editCell' | 'treeIndent' | 'treeToggle';

export interface DataGridCellProps
  extends BoxProps, CompoundStylesApiProps<DataGridCellFactory>, ElementProps<'td'> {
  /** TanStack cell instance */
  cell: Cell<any, unknown>;

  /** Tree data info, present only on the first data cell when tree data is active */
  treeData?: { row: Row<any> };
}

export type DataGridCellFactory = Factory<{
  props: DataGridCellProps;
  ref: HTMLTableCellElement;
  stylesNames: DataGridCellStylesNames;
  compound: true;
}>;

export const DataGridCell = factory<DataGridCellFactory>((props) => {
  const { className, style, classNames, styles, cell, treeData, ...others } = useProps(
    'DataGridCell',
    null,
    props
  );

  const ctx = useDataGridContext();
  const isPinned = ctx.withColumnPinning ? cell.column.getIsPinned() : false;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState<unknown>('');
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
  const editComponent = cell.column.columnDef.meta?.editComponent;

  const handleDoubleClick = useCallback(
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
            />
          )}
        </Box>
      ) : treeData ? (
        <Box
          {...ctx.getStyles('treeIndent', { classNames, styles })}
          style={{ paddingLeft: treeData.row.depth * 20 }}
        >
          {ctx.withRowExpansion && treeData.row.getCanExpand() ? (
            <Box
              component="button"
              type="button"
              aria-expanded={treeData.row.getIsExpanded()}
              aria-label={treeData.row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                treeData.row.toggleExpanded();
              }}
              {...ctx.getStyles('treeToggle', { classNames, styles })}
            >
              <ExpandChevron expanded={treeData.row.getIsExpanded()} />
            </Box>
          ) : null}
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Box>
      ) : (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </Box>
  );
});

DataGridCell.classes = classes;
DataGridCell.displayName = '@mantine/data-grid/DataGridCell';
