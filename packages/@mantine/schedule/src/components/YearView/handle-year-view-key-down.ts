import { RefObject } from 'react';
import { getLogicalArrowKey } from '../../utils/get-logical-arrow-key/get-logical-arrow-key';

/** Reference to a 3D array of day buttons: [monthIndex][weekIndex][dayIndex] */
export type YearViewControlsRef = RefObject<HTMLButtonElement[][][]>;

type Direction = 'up' | 'down' | 'left' | 'right';

interface DayPosition {
  monthIndex: number;
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

function getControlsSize(controlsRef: YearViewControlsRef): number[][] | null {
  if (!controlsRef.current) {
    return null;
  }
  return Array.from(controlsRef.current, (month) =>
    month ? Array.from(month, (week) => (week ? week.length : 0)) : []
  );
}

function clampDayIndex(dayIndex: number, weekSize: number) {
  return weekSize > 0 ? Math.min(dayIndex, weekSize - 1) : dayIndex;
}

interface GetNextPositionInput {
  direction: Direction;
  monthIndex: number;
  weekIndex: number;
  dayIndex: number;
  size: number[][];
}

function getNextPosition({
  direction,
  monthIndex,
  weekIndex,
  dayIndex,
  size,
}: GetNextPositionInput): DayPosition | null {
  const currentMonthSize = size[monthIndex];
  if (!currentMonthSize) {
    return null;
  }

  switch (direction) {
    case 'up': {
      if (weekIndex === 0) {
        if (monthIndex === 0) {
          return null;
        }
        const prevMonthSize = size[monthIndex - 1];
        if (!prevMonthSize || prevMonthSize.length === 0) {
          return null;
        }

        const lastWeekIndex = prevMonthSize.length - 1;
        const clampedDayIndex = clampDayIndex(dayIndex, prevMonthSize[lastWeekIndex]);
        return {
          monthIndex: monthIndex - 1,
          weekIndex: lastWeekIndex,
          dayIndex: clampedDayIndex,
        };
      }

      const prevWeekSize = currentMonthSize[weekIndex - 1];
      const clampedDayIndex = clampDayIndex(dayIndex, prevWeekSize);
      return {
        monthIndex,
        weekIndex: weekIndex - 1,
        dayIndex: clampedDayIndex,
      };
    }

    case 'down': {
      if (weekIndex === currentMonthSize.length - 1) {
        if (monthIndex === size.length - 1) {
          return null;
        }
        const nextMonthSize = size[monthIndex + 1];
        if (!nextMonthSize || nextMonthSize.length === 0) {
          return null;
        }

        const clampedDayIndex = clampDayIndex(dayIndex, nextMonthSize[0]);
        return {
          monthIndex: monthIndex + 1,
          weekIndex: 0,
          dayIndex: clampedDayIndex,
        };
      }

      const nextWeekSize = currentMonthSize[weekIndex + 1];
      const clampedDayIndex = clampDayIndex(dayIndex, nextWeekSize);
      return {
        monthIndex,
        weekIndex: weekIndex + 1,
        dayIndex: clampedDayIndex,
      };
    }

    case 'left': {
      if (dayIndex <= 0) {
        if (weekIndex === 0) {
          if (monthIndex === 0) {
            return null;
          }
          const prevMonthSize = size[monthIndex - 1];
          if (!prevMonthSize || prevMonthSize.length === 0) {
            return null;
          }
          const lastWeekIndex = prevMonthSize.length - 1;
          return {
            monthIndex: monthIndex - 1,
            weekIndex: lastWeekIndex,
            dayIndex: prevMonthSize[lastWeekIndex] - 1,
          };
        }

        return {
          monthIndex,
          weekIndex: weekIndex - 1,
          dayIndex: currentMonthSize[weekIndex - 1] - 1,
        };
      }

      return {
        monthIndex,
        weekIndex,
        dayIndex: dayIndex - 1,
      };
    }

    case 'right': {
      const currentWeekSize = currentMonthSize[weekIndex];

      if (dayIndex >= currentWeekSize - 1) {
        if (weekIndex === currentMonthSize.length - 1) {
          if (monthIndex === size.length - 1) {
            return null;
          }
          const nextMonthSize = size[monthIndex + 1];
          if (!nextMonthSize || nextMonthSize.length === 0) {
            return null;
          }
          return {
            monthIndex: monthIndex + 1,
            weekIndex: 0,
            dayIndex: 0,
          };
        }

        return {
          monthIndex,
          weekIndex: weekIndex + 1,
          dayIndex: 0,
        };
      }

      return {
        monthIndex,
        weekIndex,
        dayIndex: dayIndex + 1,
      };
    }

    default:
      return null;
  }
}

interface FocusOnNextControlInput {
  controlsRef: YearViewControlsRef;
  direction: Direction;
  monthIndex: number;
  weekIndex: number;
  dayIndex: number;
  size: number[][];
}

function focusOnNextFocusableControl({
  controlsRef,
  direction,
  monthIndex,
  weekIndex,
  dayIndex,
  size,
}: FocusOnNextControlInput): void {
  const nextPosition = getNextPosition({
    direction,
    monthIndex,
    weekIndex,
    dayIndex,
    size,
  });

  if (!nextPosition) {
    return;
  }

  const controlToFocus =
    controlsRef.current?.[nextPosition.monthIndex]?.[nextPosition.weekIndex]?.[
      nextPosition.dayIndex
    ];

  if (
    !controlToFocus ||
    controlToFocus.disabled ||
    controlToFocus.getAttribute('data-hidden') ||
    controlToFocus.getAttribute('data-outside') ||
    controlToFocus.getAttribute('data-day-placeholder')
  ) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      monthIndex: nextPosition.monthIndex,
      weekIndex: nextPosition.weekIndex,
      dayIndex: nextPosition.dayIndex,
      size,
    });
  } else {
    controlToFocus.focus();
  }
}

export interface HandleYearViewKeyDownInput {
  controlsRef: YearViewControlsRef;
  monthIndex: number;
  weekIndex: number;
  dayIndex: number;
  event: React.KeyboardEvent<HTMLButtonElement>;

  /** Text direction, `ArrowLeft` and `ArrowRight` are swapped in `rtl` @default 'ltr' */
  dir?: 'ltr' | 'rtl';
}

export function handleYearViewKeyDown({
  controlsRef,
  monthIndex,
  weekIndex,
  dayIndex,
  event,
  dir,
}: HandleYearViewKeyDownInput): void {
  const direction = getDirection(getLogicalArrowKey(event.key, dir));

  if (direction) {
    event.preventDefault();

    const size = getControlsSize(controlsRef);

    if (!size) {
      return;
    }

    focusOnNextFocusableControl({
      controlsRef,
      direction,
      monthIndex,
      weekIndex,
      dayIndex,
      size,
    });
  }
}
