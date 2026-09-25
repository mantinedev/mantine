import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { Header } from '@tanstack/react-table';
import { useDirection } from '@mantine/core';
import { useIsomorphicEffect, useLatestRef } from '@mantine/hooks';
import { autosizeColumns } from '../column-autosize/autosize-columns';
import type { DataGridStore } from '../hooks/use-data-grid';
import type { DataGridFeatures } from '../table-features';
import { ColumnDropEdge, isReorderTarget, moveColumn } from './move-column';

export type DataGridHeaderInstance = Header<DataGridFeatures, any, unknown>;

function getClampedResizeDelta(header: DataGridHeaderInstance, delta: number) {
  let minSize = 0;
  let maxSize = 0;
  for (const column of header.column.getLeafColumns()) {
    minSize += column.columnDef.minSize ?? 20;
    maxSize += column.columnDef.maxSize ?? Number.MAX_SAFE_INTEGER;
  }
  const size = header.getSize();
  return Math.min(Math.max(delta, minSize - size), maxSize - size);
}

export interface DataGridDragState {
  columnId: string;
  header: DataGridHeaderInstance;
  x: number;
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

export interface DataGridResizeGuide {
  left: number;
  top: number;
  height: number;
}

export interface DataGridHeaderInteractions {
  /** Callback ref that registers a header cell element for drop-target hit testing */
  registerHeaderCell: (header: DataGridHeaderInstance) => (element: HTMLElement | null) => void;

  /** Id of the column currently dragged, `null` when no drag is in progress */
  draggingColumnId: string | null;

  /** Pointer handlers that start a column drag from a leaf data header, `undefined` when the header cannot be dragged */
  getReorderHandlers: (
    header: DataGridHeaderInstance
  ) => React.HTMLAttributes<HTMLElement> | undefined;

  /** Handlers for the resize handle of a header */
  getResizeHandleProps: (header: DataGridHeaderInstance) => React.HTMLAttributes<HTMLDivElement>;
}

export interface UseHeaderInteractionsOptions {
  store: DataGridStore;
  withColumnReorder: boolean;
  withColumnResizing: boolean;
  rootRef: React.RefObject<HTMLDivElement | null>;
}

export interface UseHeaderInteractionsResult {
  interactions: DataGridHeaderInteractions;
  drag: DataGridDragState | null;
  dropTarget: DataGridDropTarget | null;
  guide: DataGridResizeGuide | null;
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

interface ResizingHeader {
  header: DataGridHeaderInstance;
  element: HTMLElement | null;
}

function isLeafHeader(header: DataGridHeaderInstance) {
  return !header.isPlaceholder && header.column.columns.length === 0;
}

export function useHeaderInteractions({
  store,
  withColumnReorder,
  withColumnResizing,
  rootRef,
}: UseHeaderInteractionsOptions): UseHeaderInteractionsResult {
  const { dir } = useDirection();
  const table = store.table;

  const tableRef = useLatestRef(table);
  const dirRef = useLatestRef(dir);
  const scrollContainerRef = store.scrollContainerRef;

  const elementsRef = useRef(new Map<string, HTMLElement>());
  const headersRef = useRef(new Map<string, DataGridHeaderInstance>());
  const refCallbacksRef = useRef(new Map<string, (element: HTMLElement | null) => void>());

  const pendingRef = useRef<PendingDrag | null>(null);
  const dragRef = useRef<DataGridDragState | null>(null);
  const dropTargetRef = useRef<DataGridDropTarget | null>(null);
  const suppressClickRef = useRef(false);
  const resizingRef = useRef<ResizingHeader | null>(null);

  const [drag, setDrag] = useState<DataGridDragState | null>(null);
  const [dropTarget, setDropTarget] = useState<DataGridDropTarget | null>(null);
  const [guide, setGuide] = useState<DataGridResizeGuide | null>(null);

  const registerHeaderCell = useCallback((header: DataGridHeaderInstance) => {
    headersRef.current.set(header.id, header);
    let callback = refCallbacksRef.current.get(header.id);
    if (!callback) {
      callback = (element: HTMLElement | null) => {
        if (element) {
          elementsRef.current.set(header.id, element);
        } else {
          elementsRef.current.delete(header.id);
          headersRef.current.delete(header.id);
          refCallbacksRef.current.delete(header.id);
        }
      };
      refCallbacksRef.current.set(header.id, callback);
    }
    return callback;
  }, []);

  const getBoundsRect = useCallback(() => {
    const bounds = scrollContainerRef.current ?? rootRef.current;
    return bounds ? bounds.getBoundingClientRect() : null;
  }, []);

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

    for (const [id, element] of elementsRef.current) {
      const header = headersRef.current.get(id);
      if (!header || !isLeafHeader(header)) {
        continue;
      }

      const rect = element.getBoundingClientRect();
      if (clientX < rect.left || clientX > rect.right) {
        continue;
      }

      if (!isReorderTarget(source, header.column)) {
        return null;
      }

      const rtl = dirRef.current === 'rtl';
      const before = clientX < rect.left + rect.width / 2;
      const edge: ColumnDropEdge = before !== rtl ? 'start' : 'end';
      const x = (edge === 'start') !== rtl ? rect.left : rect.right;
      const rootRect = rootElement.getBoundingClientRect();
      const bounds = getBoundsRect() ?? rootRect;

      return {
        columnId: header.column.id,
        edge,
        left: x - rootRect.left,
        top: rect.top - rootRect.top,
        height: bounds.bottom - rect.top,
      };
    }

    return null;
  }, []);

  const finishDrag = useCallback(() => {
    const current = dragRef.current;
    dragRef.current = null;
    pendingRef.current = null;
    if (!current) {
      return;
    }

    const target = dropTargetRef.current;
    dropTargetRef.current = null;
    document.body.style.cursor = '';

    if (target) {
      moveColumn(tableRef.current, current.columnId, target.columnId, target.edge);
    }

    suppressClickRef.current = true;
    setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
    setDrag(null);
    setDropTarget(null);
  }, []);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const pending = pendingRef.current;
    if (!pending) {
      return;
    }

    if (!dragRef.current) {
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

      dragRef.current = {
        columnId: pending.header.column.id,
        header: pending.header,
        x: event.clientX - pending.offsetX,
        y: event.clientY - pending.offsetY,
        vars,
      };
      document.body.style.cursor = 'grabbing';
    }

    const next: DataGridDragState = {
      ...dragRef.current,
      x: event.clientX - pending.offsetX,
      y: event.clientY - pending.offsetY,
    };
    dragRef.current = next;
    setDrag(next);

    const target = computeDropTarget(event.clientX);
    dropTargetRef.current = target;
    setDropTarget(target);
  }, []);

  const handlePointerUp = useCallback(() => {
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
    document.removeEventListener('pointercancel', handlePointerUp);
    finishDrag();
  }, []);

  useEffect(
    () => () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
      if (dragRef.current) {
        document.body.style.cursor = '';
      }
    },
    []
  );

  const getReorderHandlers = useCallback(
    (header: DataGridHeaderInstance): React.HTMLAttributes<HTMLElement> | undefined => {
      if (!withColumnReorder || !isLeafHeader(header) || header.column.columnDef.meta?.utility) {
        return undefined;
      }

      return {
        onPointerDown: (event: React.PointerEvent<HTMLElement>) => {
          if (event.button !== 0 || pendingRef.current) {
            return;
          }

          const rect = event.currentTarget.getBoundingClientRect();
          pendingRef.current = {
            header,
            startX: event.clientX,
            startY: event.clientY,
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top,
          };
          document.addEventListener('pointermove', handlePointerMove);
          document.addEventListener('pointerup', handlePointerUp);
          document.addEventListener('pointercancel', handlePointerUp);
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
    [withColumnReorder]
  );

  const getResizeHandleProps = useCallback(
    (header: DataGridHeaderInstance): React.HTMLAttributes<HTMLDivElement> => {
      const start = (
        event: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
      ) => {
        event.stopPropagation();
        resizingRef.current = { header, element: event.currentTarget.parentElement };
        header.getResizeHandler()(event);
      };

      return {
        onPointerDown: start,
        onTouchStart: start,
        onClick: (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation(),
        onDoubleClick: (event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
          const container = rootRef.current;
          if (!container) {
            return;
          }
          autosizeColumns(tableRef.current, container, {
            columnIds: header.getLeafHeaders().map((leaf) => leaf.column.id),
          });
        },
      };
    },
    []
  );

  const columnResizing = table.store.state.columnResizing;
  const resizingColumnId = withColumnResizing ? columnResizing?.isResizingColumn || false : false;
  const deltaOffset = columnResizing?.deltaOffset ?? 0;
  const resizeMode = table.options.columnResizeMode ?? 'onEnd';
  const resizeDirection = table.options.columnResizeDirection ?? 'ltr';

  useIsomorphicEffect(() => {
    const rootElement = rootRef.current;
    const resizing = resizingRef.current;
    if (!resizingColumnId || !rootElement || !resizing?.element) {
      resizingRef.current = null;
      setGuide((current) => (current === null ? current : null));
      return;
    }

    const rect = resizing.element.getBoundingClientRect();
    const edge = dir === 'rtl' ? rect.left : rect.right;
    const pointerDelta =
      getClampedResizeDelta(resizing.header, deltaOffset) * (resizeDirection === 'rtl' ? -1 : 1);
    const x = resizeMode === 'onEnd' ? edge + pointerDelta : edge;
    const rootRect = rootElement.getBoundingClientRect();
    const bounds = getBoundsRect() ?? rootRect;
    setGuide({ left: x - rootRect.left, top: bounds.top - rootRect.top, height: bounds.height });
  }, [resizingColumnId, deltaOffset, resizeMode, resizeDirection, dir]);

  return {
    interactions: {
      registerHeaderCell,
      draggingColumnId: drag?.columnId ?? null,
      getReorderHandlers,
      getResizeHandleProps,
    },
    drag,
    dropTarget,
    guide,
  };
}
