import React, { useLayoutEffect, useRef, useState } from 'react';
import { Button, Paper } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';

interface DataGridEditActionsProps {
  rootRef: React.RefObject<HTMLDivElement | null>;
}

const ACTIONS_OFFSET = 4;

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
  const actionsRef = useRef<HTMLDivElement>(null);

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
      const actionsHeight = actionsRef.current?.offsetHeight ?? 0;
      const below = rowRect.bottom - rootRect.top + ACTIONS_OFFSET;
      const fitsBelow = rowRect.bottom + ACTIONS_OFFSET + actionsHeight <= rootRect.bottom;
      setTop(fitsBelow ? below : rowRect.top - rootRect.top - ACTIONS_OFFSET - actionsHeight);
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
      ref={actionsRef}
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
