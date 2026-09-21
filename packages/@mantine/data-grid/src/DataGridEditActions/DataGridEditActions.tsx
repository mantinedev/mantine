import React, { useLayoutEffect, useState } from 'react';
import { Button, Paper } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';

interface DataGridEditActionsProps {
  rootRef: React.RefObject<HTMLDivElement | null>;
}

function findEditingRow(root: HTMLElement, rowId: string) {
  return Array.from(root.querySelectorAll<HTMLElement>('[data-editing][data-row-id]')).find(
    (element) => element.getAttribute('data-row-id') === rowId
  );
}

/** Floating Save / Cancel pill rendered next to the editing row under `withFloatingEditActions` */
export function DataGridEditActions({ rootRef }: DataGridEditActionsProps) {
  const ctx = useDataGridContext();
  const editing = ctx.store.editing;
  const rowId = editing?.rowId;
  const [top, setTop] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!rowId) {
      return undefined;
    }

    const measure = () => {
      const root = rootRef.current;
      const row = root ? findEditingRow(root, rowId) : undefined;
      if (!root || !row) {
        return;
      }

      const rootRect = root.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      setTop(rowRect.top - rootRect.top + rowRect.height / 2);
    };

    measure();
    window.addEventListener('scroll', measure, true);
    window.addEventListener('resize', measure);
    const observer =
      typeof ResizeObserver === 'undefined' || !rootRef.current
        ? null
        : new ResizeObserver(measure);
    observer?.observe(rootRef.current!);

    return () => {
      window.removeEventListener('scroll', measure, true);
      window.removeEventListener('resize', measure);
      observer?.disconnect();
    };
  }, [rowId]);

  if (!editing) {
    return null;
  }

  const saving = editing.status === 'saving';

  return (
    <Paper
      shadow="md"
      radius="xl"
      data-edit-actions
      {...ctx.getStyles('editActions', { style: top === null ? undefined : { top } })}
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
