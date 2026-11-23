import { RefObject, useEffect, useRef } from 'react';
import { focusControl } from '../../utils/handle-control-key-down/handle-control-key-down';

interface PendingControlFocus {
  direction: 'up' | 'down' | 'left' | 'right';
  levelIndex: number | 'last';
  rowIndex: number | 'last';
  cellIndex: number | 'last';
}

interface UsePendingControlFocusInput {
  controlsRef: RefObject<HTMLButtonElement[][][]>;

  /** Value that changes when the displayed period changes, focus is applied only after it has changed */
  period: string;
}

function resolveIndex(index: number | 'last', length: number) {
  return index === 'last' ? length - 1 : Math.min(index, length - 1);
}

export function usePendingControlFocus({ controlsRef, period }: UsePendingControlFocusInput) {
  const pending = useRef<(PendingControlFocus & { period: string }) | null>(null);

  useEffect(() => {
    const request = pending.current;
    pending.current = null;

    if (!request || request.period === period || !controlsRef.current) {
      return;
    }

    const levelIndex = resolveIndex(request.levelIndex, controlsRef.current.length);
    const rows = controlsRef.current[levelIndex] || [];
    let rowIndex = resolveIndex(request.rowIndex, rows.length);

    if (
      request.rowIndex === 'last' &&
      typeof request.cellIndex === 'number' &&
      rowIndex > 0 &&
      request.cellIndex >= (rows[rowIndex] || []).length
    ) {
      rowIndex -= 1;
    }

    const cells = rows[rowIndex] || [];
    const cellIndex = resolveIndex(request.cellIndex, cells.length);

    focusControl({
      controlsRef,
      direction: request.direction,
      levelIndex,
      rowIndex,
      cellIndex,
    });
  });

  return (request: PendingControlFocus) => {
    pending.current = { ...request, period };
  };
}
