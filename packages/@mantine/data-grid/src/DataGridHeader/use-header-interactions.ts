import React from 'react';
import { Header } from '@tanstack/react-table';
import type { DataGridStore } from '../hooks';
import type { DataGridFeatures } from '../table-features';
import { useColumnDrag } from './use-column-drag';
import { useResizeGuide } from './use-resize-guide';

export type DataGridHeaderInstance = Header<DataGridFeatures, any, unknown>;

export interface DataGridHeaderInteractions {
  /** Returns a stable callback ref that registers a leaf header cell element for drop-target hit testing, `undefined` when column reorder is disabled or the header is not a leaf */
  registerHeaderCell: (
    header: DataGridHeaderInstance
  ) => React.RefCallback<HTMLElement> | undefined;

  /** Id of the column currently dragged, `null` when no drag is in progress */
  draggingColumnId: string | null;

  /** Pointer handlers that start a column drag from a leaf data header, `undefined` when the header cannot be dragged */
  getReorderHandlers: (
    header: DataGridHeaderInstance
  ) => React.HTMLAttributes<HTMLElement> | undefined;

  /** Handlers for the resize handle of a header */
  getResizeHandleProps: (header: DataGridHeaderInstance) => React.HTMLAttributes<HTMLDivElement>;
}

interface UseHeaderInteractionsOptions {
  store: DataGridStore;
  rootRef: React.RefObject<HTMLDivElement | null>;
}

export function useHeaderInteractions({ store, rootRef }: UseHeaderInteractionsOptions) {
  const columnDrag = useColumnDrag({ store, rootRef });
  const resizeGuide = useResizeGuide({ store, rootRef });
  const interactions: DataGridHeaderInteractions = {
    registerHeaderCell: columnDrag.registerHeaderCell,
    draggingColumnId: columnDrag.drag?.columnId ?? null,
    getReorderHandlers: columnDrag.getReorderHandlers,
    getResizeHandleProps: resizeGuide.getResizeHandleProps,
  };

  return {
    interactions,
    drag: columnDrag.drag,
    dropTarget: columnDrag.dropTarget,
    ghostRef: columnDrag.ghostRef,
    guide: resizeGuide.guide,
  };
}
