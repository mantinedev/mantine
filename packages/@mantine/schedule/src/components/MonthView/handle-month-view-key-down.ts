import { RefObject } from 'react';

/** Reference to a 2D array of day buttons: [weekIndex][dayIndex] */
export type MonthViewControlsRef = RefObject<HTMLButtonElement[][]>;

type Direction = 'up' | 'down' | 'left' | 'right';

interface DayPosition {
  weekIndex: number;
  dayIndex: number;
}

function getDirection(key: KeyboardEvent['key']): Direction | null {
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

function getControlsSize(controlsRef: MonthViewControlsRef): number[] | null {
  if (!controlsRef.current) {
    return null;
  }
  return controlsRef.current.map((week) => (week ? week.length : 0));
}

interface GetNextPositionInput {
  direction: Direction;
  weekIndex: number;
  dayIndex: number;
  size: number[];
}

function getNextPosition({
  direction,
  weekIndex,
  dayIndex,
  size,
}: GetNextPositionInput): DayPosition | null {
  const currentWeekSize = size[weekIndex];
  if (!currentWeekSize) {
    return null;
  }

  switch (direction) {
    case 'up': {
      if (weekIndex === 0) {
        return null;
      }

      const prevWeekSize = size[weekIndex - 1];
      const clampedDayIndex = Math.min(dayIndex, prevWeekSize - 1);
      return {
        weekIndex: weekIndex - 1,
        dayIndex: clampedDayIndex,
      };
    }

    case 'down': {
      if (weekIndex === size.length - 1) {
        return null;
      }

      const nextWeekSize = size[weekIndex + 1];
      const clampedDayIndex = Math.min(dayIndex, nextWeekSize - 1);
      return {
        weekIndex: weekIndex + 1,
        dayIndex: clampedDayIndex,
      };
    }

    case 'left': {
      if (dayIndex === 0) {
        if (weekIndex === 0) {
          return null;
        }

        return {
          weekIndex: weekIndex - 1,
          dayIndex: size[weekIndex - 1] - 1,
        };
      }

      return {
        weekIndex,
        dayIndex: dayIndex - 1,
      };
    }

    case 'right': {
      if (dayIndex === currentWeekSize - 1) {
        if (weekIndex === size.length - 1) {
          return null;
        }

        return {
          weekIndex: weekIndex + 1,
          dayIndex: 0,
        };
      }

      return {
        weekIndex,
        dayIndex: dayIndex + 1,
      };
    }

    default:
      return null;
  }
}

interface FocusOnNextControlInput {
  controlsRef: MonthViewControlsRef;
  direction: Direction;
  weekIndex: number;
  dayIndex: number;
  size: number[];
}

function focusOnNextFocusableControl({
  controlsRef,
  direction,
  weekIndex,
  dayIndex,
  size,
}: FocusOnNextControlInput): void {
  const nextPosition = getNextPosition({
    direction,
    weekIndex,
    dayIndex,
    size,
  });

  if (!nextPosition) {
    return;
  }

  const controlToFocus = controlsRef.current?.[nextPosition.weekIndex]?.[nextPosition.dayIndex];

  if (!controlToFocus) {
    return;
  }

  if (
    controlToFocus.disabled ||
    controlToFocus.getAttribute('data-hidden') ||
    controlToFocus.getAttribute('data-day-placeholder')
  ) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      weekIndex: nextPosition.weekIndex,
      dayIndex: nextPosition.dayIndex,
      size,
    });
  } else {
    controlToFocus.focus();
  }
}

export interface HandleMonthViewKeyDownInput {
  controlsRef: MonthViewControlsRef;
  weekIndex: number;
  dayIndex: number;
  event: React.KeyboardEvent<HTMLButtonElement>;
}

export function handleMonthViewKeyDown({
  controlsRef,
  weekIndex,
  dayIndex,
  event,
}: HandleMonthViewKeyDownInput): void {
  const direction = getDirection(event.key);

  if (direction) {
    event.preventDefault();

    const size = getControlsSize(controlsRef);

    if (!size) {
      return;
    }

    focusOnNextFocusableControl({
      controlsRef,
      direction,
      weekIndex,
      dayIndex,
      size,
    });
  }
}
