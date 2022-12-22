import { RefObject } from 'react';
import type { ControlKeydownPayload } from '../types';

type ControlsRef = RefObject<HTMLButtonElement[][][]>;

interface ShiftFocusInput {
  controlsRef: ControlsRef;
  direction: 'down' | 'up' | 'left' | 'right';
  index: number;
  payload: ControlKeydownPayload;
  count?: number;
}

function focusOnNextFocusableControl({
  direction,
  index,
  payload,
  count = 1,
  controlsRef,
}: ShiftFocusInput) {
  const changeRow = ['down', 'up'].includes(direction);

  const rowIndex = changeRow
    ? payload.rowIndex + (direction === 'down' ? count : -count)
    : payload.rowIndex;

  const cellIndex = changeRow
    ? payload.cellIndex
    : payload.cellIndex + (direction === 'right' ? count : -count);

  const controlToFocus = controlsRef.current[index][rowIndex]?.[cellIndex];

  if (!controlToFocus) {
    return;
  }

  if (controlToFocus.disabled) {
    focusOnNextFocusableControl({ direction, index, payload, controlsRef, count: count + 1 });
  } else {
    controlToFocus.focus();
  }
}

interface HandleControlKeydownInput {
  controlsRef: ControlsRef;
  numberOfColumns: number;
  index: number;
  payload: ControlKeydownPayload;
  event: React.KeyboardEvent<HTMLButtonElement>;
  controlsPerRow: number | number[];
}

export function handleControlKeyDown({
  controlsRef,
  index,
  payload,
  event,
  numberOfColumns,
  controlsPerRow,
}: HandleControlKeydownInput) {
  const _controlsPerRow = Array.isArray(controlsPerRow)
    ? controlsPerRow[payload.rowIndex]
    : controlsPerRow;

  switch (event.key) {
    case 'ArrowDown': {
      event.preventDefault();

      const hasRowBelow = payload.rowIndex + 1 < controlsRef.current[index].length;
      if (hasRowBelow) {
        focusOnNextFocusableControl({ direction: 'down', index, payload, controlsRef });
      }
      break;
    }

    case 'ArrowUp': {
      event.preventDefault();

      const hasRowAbove = payload.rowIndex > 0;
      if (hasRowAbove) {
        focusOnNextFocusableControl({ direction: 'up', index, payload, controlsRef });
      }
      break;
    }

    case 'ArrowRight': {
      event.preventDefault();

      if (payload.cellIndex !== _controlsPerRow - 1) {
        focusOnNextFocusableControl({ direction: 'right', index, payload, controlsRef });
      } else if (index + 1 < numberOfColumns) {
        if (controlsRef.current[index + 1][payload.rowIndex]) {
          controlsRef.current[index + 1][payload.rowIndex][0]?.focus();
        }
      }

      break;
    }

    case 'ArrowLeft': {
      event.preventDefault();

      if (payload.cellIndex !== 0) {
        focusOnNextFocusableControl({ direction: 'left', index, payload, controlsRef });
      } else if (index > 0) {
        if (controlsRef.current[index - 1][payload.rowIndex]) {
          controlsRef.current[index - 1][payload.rowIndex][_controlsPerRow - 1].focus();
        }
      }
    }
  }
}
