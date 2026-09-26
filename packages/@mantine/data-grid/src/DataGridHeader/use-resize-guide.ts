import React, { useCallback, useRef, useState } from 'react';
import type { columnResizingState } from '@tanstack/react-table';
import { useDirection } from '@mantine/core';
import { useIsomorphicEffect, useLatestRef } from '@mantine/hooks';
import { autosizeColumns } from '../column-autosize/autosize-columns';
import { getLeafHeaders } from '../get-leaf-headers';
import type { DataGridStore } from '../hooks';
import { GRID_ELEMENT_SELECTOR } from '../hooks/grid-dom';
import { getBoundsRect } from './get-bounds-rect';
import type { DataGridHeaderInstance } from './use-header-interactions';

export interface DataGridResizeGuide {
  left: number;
  top: number;
  height: number;
}

interface UseResizeGuideOptions {
  store: DataGridStore;
  rootRef: React.RefObject<HTMLDivElement | null>;
}

interface ResizingHeader {
  header: DataGridHeaderInstance;
  element: HTMLElement | null;
}

function getResizedHeaderSize(
  table: DataGridStore['table'],
  header: DataGridHeaderInstance,
  resizing: columnResizingState
) {
  const defaults = table.getDefaultColumnDef();
  const leafIds = new Set(getLeafHeaders(header).map((leaf) => leaf.column.id));
  const deltaOffset = resizing.deltaOffset ?? 0;
  const deltaPercentage = resizing.deltaPercentage ?? 0;
  const entriesCount = resizing.columnSizingStart.length;
  let size = 0;

  for (const [columnId, startSize] of resizing.columnSizingStart) {
    if (!leafIds.has(columnId)) {
      continue;
    }

    const columnDef = table.getColumn(columnId)?.columnDef;
    const nextSize =
      Math.round(
        Math.max(
          startSize > 0 ? startSize + startSize * deltaPercentage : deltaOffset / entriesCount,
          0
        ) * 100
      ) / 100;

    size += Math.min(
      Math.max(columnDef?.minSize ?? defaults.minSize ?? 0, nextSize),
      columnDef?.maxSize ?? defaults.maxSize ?? Infinity
    );
  }

  return size;
}

export function useResizeGuide({ store, rootRef }: UseResizeGuideOptions) {
  const { dir } = useDirection();
  const table = store.table;
  const tableRef = useLatestRef(table);
  const scrollContainerRef = store.scrollContainerRef;
  const resizingRef = useRef<ResizingHeader | null>(null);
  const [guide, setGuide] = useState<DataGridResizeGuide | null>(null);

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
        onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => {
          if (event.pointerType === 'touch') {
            event.stopPropagation();
            return;
          }
          start(event);
        },
        onTouchStart: start,
        onClick: (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation(),
        onDoubleClick: (event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
          const container =
            event.currentTarget.closest<HTMLElement>(GRID_ELEMENT_SELECTOR) ?? rootRef.current;
          if (!container) {
            return;
          }
          autosizeColumns(tableRef.current, container, {
            columnIds: getLeafHeaders(header).map((leaf) => leaf.column.id),
          });
        },
      };
    },
    []
  );

  const columnResizing = table.store.state.columnResizing;
  const resizingColumnId = store.withColumnResizing
    ? columnResizing?.isResizingColumn || false
    : false;
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
    let x = edge;
    if (resizeMode === 'onEnd' && columnResizing) {
      const resizedSize = getResizedHeaderSize(table, resizing.header, columnResizing);
      x += (resizedSize - (columnResizing.startSize ?? 0)) * (resizeDirection === 'rtl' ? -1 : 1);
    }
    const rootRect = rootElement.getBoundingClientRect();
    const bounds = getBoundsRect(scrollContainerRef, rootRef) ?? rootRect;
    setGuide({ left: x - rootRect.left, top: bounds.top - rootRect.top, height: bounds.height });
  }, [resizingColumnId, deltaOffset, resizeMode, resizeDirection, dir]);

  return { getResizeHandleProps, guide };
}
