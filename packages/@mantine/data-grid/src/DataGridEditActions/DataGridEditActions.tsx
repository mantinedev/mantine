import React, { useRef } from 'react';
import { Button, Paper } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { useEditActionsTop } from './use-edit-actions-top';

interface DataGridEditActionsProps {
  rootRef: React.RefObject<HTMLDivElement | null>;
}

export function DataGridEditActions({ rootRef }: DataGridEditActionsProps) {
  const ctx = useDataGridContext();
  const editing = ctx.store.editing;
  const actionsRef = useRef<HTMLDivElement>(null);
  const top = useEditActionsTop({
    rootRef,
    actionsRef,
    scrollContainerRef: ctx.store.scrollContainerRef,
    rowId: editing?.rowId,
  });

  if (!editing) {
    return null;
  }

  const saving = editing.status === 'saving';

  return (
    <Paper
      shadow="md"
      radius="xl"
      ref={actionsRef}
      data-edit-actions
      data-hidden={top === null || undefined}
      {...ctx.getStyles('editActions', {
        style: top === undefined ? undefined : top === null ? { visibility: 'hidden' } : { top },
      })}
    >
      <Button
        size={ctx.store.controlSize}
        radius="xl"
        loading={saving}
        onClick={() => {
          ctx.table.saveEditing();
        }}
      >
        {ctx.labels.saveRow}
      </Button>
      <Button
        size={ctx.store.controlSize}
        radius="xl"
        variant="subtle"
        onClick={() => ctx.table.cancelEditing()}
      >
        {ctx.labels.cancelRow}
      </Button>
    </Paper>
  );
}
