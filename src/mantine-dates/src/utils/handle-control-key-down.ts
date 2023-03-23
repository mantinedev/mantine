import { RefObject } from 'react';

type ControlsRefs = RefObject<HTMLButtonElement[][][]>;
type Direction = 'up' | 'down' | 'left' | 'right';

function getControlsSize(controlsRef: ControlsRefs) {
  return controlsRef.current.map((column) => column.map((row) => row.length));
}

type NextIndexInput = Omit<ShiftFocusInput, 'controlsRefs'>;

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
  controlsRefs: ControlsRefs;
  direction: Direction;
  levelIndex: number;
  rowIndex: number;
  cellIndex: number;
  size: number[][];
}

function focusOnNextFocusableControl({
  controlsRefs,
  direction,
  levelIndex,
  rowIndex,
  cellIndex,
  size,
}: ShiftFocusInput) {
  const nextIndex = getNextIndex({ direction, size, rowIndex, cellIndex, levelIndex });

  if (!nextIndex) {
    return;
  }

  const controlToFocus =
    controlsRefs.current[nextIndex.levelIndex]?.[nextIndex.rowIndex]?.[nextIndex.cellIndex];

  if (!controlToFocus) {
    return;
  }

  if (controlToFocus.disabled || controlToFocus.getAttribute('data-hidden')) {
    focusOnNextFocusableControl({
      controlsRefs,
      direction,
      levelIndex: nextIndex.levelIndex,
      cellIndex: nextIndex.cellIndex,
      rowIndex: nextIndex.rowIndex,
      size,
    });
  } else {
    controlToFocus.focus();
  }
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
      return null;
  }
}
interface HandleControlKeyDownInput {
  controlsRefs: ControlsRefs;
  levelIndex: number;
  rowIndex: number;
  cellIndex: number;
  event: React.KeyboardEvent<HTMLButtonElement>;
}

export function handleControlKeyDown({
  controlsRefs,
  levelIndex,
  rowIndex,
  cellIndex,
  event,
}: HandleControlKeyDownInput) {
  const direction = getDirection(event.key);

  if (direction) {
    const size = getControlsSize(controlsRefs);

    focusOnNextFocusableControl({
      controlsRefs,
      direction,
      levelIndex,
      rowIndex,
      cellIndex,
      size,
    });
  }
}
