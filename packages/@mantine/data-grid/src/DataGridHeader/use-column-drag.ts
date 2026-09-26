import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDirection } from '@mantine/core';
import { useLatestRef } from '@mantine/hooks';
import type { DataGridStore } from '../hooks';
import { getBoundsRect } from './get-bounds-rect';
import { canReorderColumn, ColumnDropEdge, isReorderTarget, moveColumn } from './move-column';
import type { DataGridHeaderInstance, DataGridHeaderInteractions } from './use-header-interactions';

export interface DataGridDragState {
  columnId: string;
  header: DataGridHeaderInstance;

  /** Initial left position of the drag ghost in viewport pixels, later moves are applied to the ghost element directly */
  x: number;

  /** Initial top position of the drag ghost in viewport pixels, later moves are applied to the ghost element directly */
  y: number;

  vars: Record<string, string>;
}

export interface DataGridDropTarget {
  columnId: string;
  edge: ColumnDropEdge;
  left: number;
  top: number;
  height: number;
}

interface UseColumnDragOptions {
  store: DataGridStore;
  rootRef: React.RefObject<HTMLDivElement | null>;
}

const DRAG_THRESHOLD = 4;
const GHOST_VARIABLES = [
  '--dg-header-height',
  '--dg-cell-padding-x',
  '--dg-font-size',
  '--dg-border-color',
];

interface PendingDrag {
  header: DataGridHeaderInstance;
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
}

interface HeaderCellEntry {
  header: DataGridHeaderInstance;
  element: HTMLElement | null;
  ref: React.RefCallback<HTMLElement>;
}

function isLeafHeader(header: DataGridHeaderInstance) {
  return !header.isPlaceholder && header.column.columns.length === 0;
}

interface ColumnDragResult extends Pick<
  DataGridHeaderInteractions,
  'registerHeaderCell' | 'getReorderHandlers'
> {
  drag: DataGridDragState | null;
  dropTarget: DataGridDropTarget | null;
  ghostRef: React.RefObject<HTMLDivElement | null>;
}

function sameDropTarget(a: DataGridDropTarget | null, b: DataGridDropTarget | null) {
  return (
    a === b ||
    (!!a &&
      !!b &&
      a.columnId === b.columnId &&
      a.edge === b.edge &&
      a.left === b.left &&
      a.top === b.top &&
      a.height === b.height)
  );
}

export function useColumnDrag({ store, rootRef }: UseColumnDragOptions): ColumnDragResult {
  const withColumnReorder = store.withColumnReorder;
  const groupedColumnsFirstRef = useLatestRef(store.groupedColumnsFirst);
  const { dir } = useDirection();
  const tableRef = useLatestRef(store.table);
  const dirRef = useLatestRef(dir);
  const scrollContainerRef = store.scrollContainerRef;

  const cellsRef = useRef(new Map<string, HeaderCellEntry>());

  const pendingRef = useRef<PendingDrag | null>(null);
  const dragRef = useRef<DataGridDragState | null>(null);
  const dropTargetRef = useRef<DataGridDropTarget | null>(null);
  const suppressClickRef = useRef(false);
  const listenersRef = useRef<AbortController | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);

  const [drag, setDrag] = useState<DataGridDragState | null>(null);
  const [dropTarget, setDropTarget] = useState<DataGridDropTarget | null>(null);

  const registerHeaderCell = useCallback(
    (header: DataGridHeaderInstance) => {
      if (!withColumnReorder || !isLeafHeader(header)) {
        return undefined;
      }

      const existing = cellsRef.current.get(header.id);
      if (existing) {
        existing.header = header;
        return existing.ref;
      }

      const entry: HeaderCellEntry = {
        header,
        element: null,
        ref: (element: HTMLElement | null) => {
          if (!element) {
            return undefined;
          }

          entry.element = element;
          return () => {
            if (entry.element === element) {
              entry.element = null;
            }
          };
        },
      };
      cellsRef.current.set(header.id, entry);
      return entry.ref;
    },
    [withColumnReorder]
  );

  const tableOptions = store.table.options;
  useEffect(() => {
    const cells = cellsRef.current;
    if (!withColumnReorder) {
      cells.clear();
      return;
    }

    const headerIds = new Set(
      tableRef.current
        .getHeaderGroups()
        .flatMap((headerGroup) => headerGroup.headers.map((header) => header.id))
    );
    for (const id of cells.keys()) {
      if (!headerIds.has(id)) {
        cells.delete(id);
      }
    }
  }, [
    withColumnReorder,
    tableOptions.columns,
    tableOptions.groupedColumnMode,
    store.columnOrder,
    store.columnPinning,
    store.columnVisibility,
    store.grouping,
  ]);

  const computeDropTarget = useCallback((clientX: number): DataGridDropTarget | null => {
    const current = dragRef.current;
    const rootElement = rootRef.current;
    if (!current || !rootElement) {
      return null;
    }

    const source = tableRef.current.getColumn(current.columnId);
    if (!source) {
      return null;
    }

    let hit: { header: DataGridHeaderInstance; rect: DOMRect } | null = null;
    for (const { header, element } of cellsRef.current.values()) {
      if (!element || !isLeafHeader(header)) {
        continue;
      }

      const rect = element.getBoundingClientRect();
      if (clientX < rect.left || clientX > rect.right) {
        continue;
      }

      if (header.column.getIsPinned()) {
        hit = { header, rect };
        break;
      }

      hit ??= { header, rect };
    }

    if (!hit || !isReorderTarget(source, hit.header.column, groupedColumnsFirstRef.current)) {
      return null;
    }

    const { header, rect } = hit;
    const rtl = dirRef.current === 'rtl';
    const before = clientX < rect.left + rect.width / 2;
    const edge: ColumnDropEdge = before !== rtl ? 'start' : 'end';
    const x = (edge === 'start') !== rtl ? rect.left : rect.right;
    const rootRect = rootElement.getBoundingClientRect();
    const bounds = getBoundsRect(scrollContainerRef, rootRef) ?? rootRect;

    return {
      columnId: header.column.id,
      edge,
      left: x - rootRect.left,
      top: rect.top - rootRect.top,
      height: bounds.bottom - rect.top,
    };
  }, []);

  const finishDrag = useCallback((commit: boolean, waitForPointerUp = false) => {
    const current = dragRef.current;
    dragRef.current = null;
    pendingRef.current = null;
    if (!current) {
      return;
    }

    const target = dropTargetRef.current;
    dropTargetRef.current = null;
    document.body.style.cursor = '';

    if (commit && target) {
      moveColumn(tableRef.current, current.columnId, target.columnId, target.edge);
    }

    suppressClickRef.current = true;
    const clearSuppressionAfterClick = () =>
      setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);

    if (waitForPointerUp) {
      const listeners = new AbortController();
      listenersRef.current = listeners;
      document.addEventListener('pointerup', clearSuppressionAfterClick, {
        once: true,
        capture: true,
        signal: listeners.signal,
      });
    } else {
      clearSuppressionAfterClick();
    }
    setDrag(null);
    setDropTarget(null);
  }, []);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const pending = pendingRef.current;
    if (!pending) {
      return;
    }

    const x = event.clientX - pending.offsetX;
    const y = event.clientY - pending.offsetY;

    if (dragRef.current) {
      if (ghostRef.current) {
        ghostRef.current.style.left = `${x}px`;
        ghostRef.current.style.top = `${y}px`;
      }
    } else {
      if (
        Math.abs(event.clientX - pending.startX) < DRAG_THRESHOLD &&
        Math.abs(event.clientY - pending.startY) < DRAG_THRESHOLD
      ) {
        return;
      }

      const vars: Record<string, string> = {};
      if (rootRef.current) {
        const computed = getComputedStyle(rootRef.current);
        for (const name of GHOST_VARIABLES) {
          const value = computed.getPropertyValue(name).trim();
          if (value) {
            vars[name] = value;
          }
        }
      }

      const next: DataGridDragState = {
        columnId: pending.header.column.id,
        header: pending.header,
        x,
        y,
        vars,
      };
      dragRef.current = next;
      document.body.style.cursor = 'grabbing';
      setDrag(next);
    }

    const target = computeDropTarget(event.clientX);
    if (!sameDropTarget(target, dropTargetRef.current)) {
      dropTargetRef.current = target;
      setDropTarget(target);
    }
  }, []);

  const removeDocumentListeners = useCallback(() => {
    listenersRef.current?.abort();
    listenersRef.current = null;
  }, []);

  const handlePointerUp = useCallback(() => {
    removeDocumentListeners();
    finishDrag(true);
  }, []);

  const handlePointerCancel = useCallback(() => {
    removeDocumentListeners();
    finishDrag(false);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key !== 'Escape' || !dragRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    removeDocumentListeners();
    finishDrag(false, true);
  }, []);

  useEffect(
    () => () => {
      removeDocumentListeners();
      if (dragRef.current) {
        document.body.style.cursor = '';
      }
    },
    []
  );

  useEffect(() => {
    if (!withColumnReorder && (pendingRef.current || dragRef.current)) {
      removeDocumentListeners();
      finishDrag(false);
    }
  }, [withColumnReorder]);

  const getReorderHandlers = useCallback(
    (header: DataGridHeaderInstance): React.HTMLAttributes<HTMLElement> | undefined => {
      if (
        !withColumnReorder ||
        !isLeafHeader(header) ||
        !canReorderColumn(header.column, store.groupedColumnsFirst)
      ) {
        return undefined;
      }

      return {
        onPointerDown: (event: React.PointerEvent<HTMLElement>) => {
          if (event.button !== 0 || pendingRef.current) {
            return;
          }

          removeDocumentListeners();
          suppressClickRef.current = false;

          const rect = event.currentTarget.getBoundingClientRect();
          pendingRef.current = {
            header,
            startX: event.clientX,
            startY: event.clientY,
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top,
          };
          const listeners = new AbortController();
          listenersRef.current = listeners;
          document.addEventListener('pointermove', handlePointerMove, { signal: listeners.signal });
          document.addEventListener('pointerup', handlePointerUp, { signal: listeners.signal });
          document.addEventListener('pointercancel', handlePointerCancel, {
            signal: listeners.signal,
          });
          document.addEventListener('keydown', handleKeyDown, {
            signal: listeners.signal,
            capture: true,
          });
        },
        onClickCapture: (event: React.MouseEvent<HTMLElement>) => {
          if (suppressClickRef.current) {
            suppressClickRef.current = false;
            event.stopPropagation();
            event.preventDefault();
          }
        },
      };
    },
    [withColumnReorder, store.groupedColumnsFirst]
  );

  return { registerHeaderCell, getReorderHandlers, drag, dropTarget, ghostRef };
}
