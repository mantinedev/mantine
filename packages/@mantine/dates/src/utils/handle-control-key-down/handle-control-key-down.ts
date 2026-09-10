import { RefObject } from 'react';

type ControlsRef = RefObject<HTMLButtonElement[][][]>;
type Direction = 'up' | 'down' | 'left' | 'right';
type Edge = 'previous' | 'next';

export interface ControlEdgeCrossPayload {
  /** Grid edge that was crossed */
  edge: Edge;

  /** Arrow direction that caused the crossing */
  direction: Direction;

  /** Cell index of the control that had focus */
  cellIndex: number;
}

type NextIndexInput = Omit<ShiftFocusInput, 'controlsRef'>;

function getNextIndex({ direction, levelIndex, rowIndex, cellIndex, size }: NextIndexInput) {
  switch (direction) {
    case 'up':
      if (levelIndex === 0 && rowIndex === 0) {
        return null;
      }
      if (rowIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex:
            cellIndex <= size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1
              ? size[levelIndex - 1].length - 1
              : size[levelIndex - 1].length - 2,
          cellIndex,
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex - 1,
        cellIndex,
      };

    case 'down':
      if (rowIndex === size[levelIndex].length - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex,
        };
      }
      if (
        rowIndex === size[levelIndex].length - 2 &&
        cellIndex >= size[levelIndex][size[levelIndex].length - 1]
      ) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex,
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex + 1,
        cellIndex,
      };

    case 'left':
      if (levelIndex === 0 && rowIndex === 0 && cellIndex === 0) {
        return null;
      }
      if (rowIndex === 0 && cellIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: size[levelIndex - 1].length - 1,
          cellIndex: size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1,
        };
      }
      if (cellIndex === 0) {
        return {
          levelIndex,
          rowIndex: rowIndex - 1,
          cellIndex: size[levelIndex][rowIndex - 1] - 1,
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex - 1,
      };

    case 'right':
      if (
        rowIndex === size[levelIndex].length - 1 &&
        cellIndex === size[levelIndex][rowIndex] - 1
      ) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex: 0,
        };
      }
      if (cellIndex === size[levelIndex][rowIndex] - 1) {
        return {
          levelIndex,
          rowIndex: rowIndex + 1,
          cellIndex: 0,
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex + 1,
      };

    default:
      return { levelIndex, rowIndex, cellIndex };
  }
}

interface ShiftFocusInput {
  controlsRef: ControlsRef;
  direction: Direction;
  levelIndex: number;
  rowIndex: number;
  cellIndex: number;
  size: number[][];
}

function isControlFocusable(control: HTMLButtonElement) {
  return (
    !control.disabled &&
    !control.getAttribute('data-hidden') &&
    !control.getAttribute('data-outside')
  );
}

function focusOnNextFocusableControl({
  controlsRef,
  direction,
  levelIndex,
  rowIndex,
  cellIndex,
  size,
}: ShiftFocusInput): Edge | null {
  const nextIndex = getNextIndex({ direction, size, rowIndex, cellIndex, levelIndex });

  if (!nextIndex) {
    return 'previous';
  }

  if (nextIndex.levelIndex >= size.length) {
    return 'next';
  }

  const controlToFocus =
    controlsRef.current?.[nextIndex.levelIndex]?.[nextIndex.rowIndex]?.[nextIndex.cellIndex];

  if (!controlToFocus) {
    return null;
  }

  if (!isControlFocusable(controlToFocus)) {
    return focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex: nextIndex.levelIndex,
      cellIndex: nextIndex.cellIndex,
      rowIndex: nextIndex.rowIndex,
      size,
    });
  }

  controlToFocus.focus();
  return null;
}

interface FocusControlInput {
  controlsRef: ControlsRef;
  direction: Direction;
  levelIndex: number;
  rowIndex: number;
  cellIndex: number;
}

/** Focuses control at the given position or the next focusable control in the given direction */
export function focusControl({
  controlsRef,
  direction,
  levelIndex,
  rowIndex,
  cellIndex,
}: FocusControlInput) {
  const size = getControlsSize(controlsRef);
  const control = controlsRef.current?.[levelIndex]?.[rowIndex]?.[cellIndex];

  if (!size || !control) {
    return;
  }

  if (isControlFocusable(control)) {
    control.focus();
    return;
  }

  focusOnNextFocusableControl({ controlsRef, direction, levelIndex, rowIndex, cellIndex, size });
}

function getDirection(key: KeyboardEvent['key']): Direction {
  switch (key) {
    case 'ArrowDown':
      return 'down';
    case 'ArrowUp':
      return 'up';
    case 'ArrowRight':
      return 'right';
    case 'ArrowLeft':
      return 'left';
    default:
      return null!;
  }
}

function getControlsSize(controlsRef: ControlsRef) {
  return controlsRef.current?.map((column) => column.map((row) => row.length));
}

interface HandleControlKeyDownInput {
  controlsRef: ControlsRef;
  levelIndex: number;
  rowIndex: number;
  cellIndex: number;
  event: React.KeyboardEvent<HTMLButtonElement>;

  /** Called when arrow navigation runs off the first or the last grid */
  onEdgeCross?: (payload: ControlEdgeCrossPayload) => void;
}

export function handleControlKeyDown({
  controlsRef,
  levelIndex,
  rowIndex,
  cellIndex,
  event,
  onEdgeCross,
}: HandleControlKeyDownInput) {
  const direction = getDirection(event.key);

  if (direction) {
    event.preventDefault();

    const size = getControlsSize(controlsRef)!;

    const edge = focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex,
      rowIndex,
      cellIndex,
      size,
    });

    if (edge) {
      onEdgeCross?.({ edge, direction, cellIndex });
    }
  }
}
