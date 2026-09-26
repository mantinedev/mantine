import React, { useEffect } from 'react';
import { useLatestRef } from '@mantine/hooks';
import { EDITING_ROW_SELECTOR, ownsElement } from './grid-dom';
import type { DataGridStore } from './use-data-grid.types';

interface UseRowEditOutsideClickOptions {
  table: DataGridStore['table'];
  editingRowId: string | undefined;
  rootRef: React.RefObject<HTMLElement | null>;
  scrollContainerRef: React.RefObject<HTMLElement | null>;
}

function isOwnScrollbar(target: Element, scrollContainer: HTMLElement | null) {
  if (!scrollContainer) {
    return false;
  }
  if (target === scrollContainer) {
    return true;
  }
  const scrollbar = target.closest('[data-mantine-scrollbar]');
  return !!scrollbar && scrollbar.parentElement === scrollContainer.parentElement;
}

function isInsideEditing(
  target: Element,
  editingRowId: string,
  root: HTMLElement | null,
  scrollContainer: HTMLElement | null
) {
  if (target.closest('[data-portal]') || isOwnScrollbar(target, scrollContainer)) {
    return true;
  }

  const row = target.closest(EDITING_ROW_SELECTOR);
  if (
    row &&
    scrollContainer &&
    row.getAttribute('data-row-id') === editingRowId &&
    ownsElement(scrollContainer, row)
  ) {
    return true;
  }

  const actions = target.closest('[data-edit-actions]');
  return (
    !!actions && !!root && root.contains(actions) && !(scrollContainer?.contains(actions) ?? false)
  );
}

export function useRowEditOutsideClick({
  table,
  editingRowId,
  rootRef,
  scrollContainerRef,
}: UseRowEditOutsideClickOptions) {
  const tableRef = useLatestRef(table);

  useEffect(() => {
    if (!editingRowId) {
      return undefined;
    }

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        isInsideEditing(target, editingRowId, rootRef.current, scrollContainerRef.current)
      ) {
        return;
      }
      tableRef.current.saveEditing();
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [editingRowId]);
}
