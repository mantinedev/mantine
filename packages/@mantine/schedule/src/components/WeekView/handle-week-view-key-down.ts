import { RefObject } from 'react';

/** Reference to a 2D array of slot buttons: [dayIndex][slotIndex] */
export type WeekViewControlsRef = RefObject<HTMLButtonElement[][]>;

type Direction = 'up' | 'down' | 'left' | 'right';

interface SlotPosition {
  dayIndex: number;
  slotIndex: number;
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

function getControlsSize(controlsRef: WeekViewControlsRef): number[] | null {
  if (!controlsRef.current) {
    return null;
  }
  return controlsRef.current.map((day) => (day ? day.length : 0));
}

interface GetNextPositionInput {
  direction: Direction;
  dayIndex: number;
  slotIndex: number;
  size: number[];
}

function getNextPosition({
  direction,
  dayIndex,
  slotIndex,
  size,
}: GetNextPositionInput): SlotPosition | null {
  const currentDaySize = size[dayIndex];
  if (!currentDaySize) {
    return null;
  }

  switch (direction) {
    case 'up': {
      if (slotIndex === 0) {
        return null;
      }
      return {
        dayIndex,
        slotIndex: slotIndex - 1,
      };
    }

    case 'down': {
      if (slotIndex === currentDaySize - 1) {
        return null;
      }
      return {
        dayIndex,
        slotIndex: slotIndex + 1,
      };
    }

    case 'left': {
      if (dayIndex === 0) {
        return null;
      }
      const prevDaySize = size[dayIndex - 1];
      const clampedSlotIndex = Math.min(slotIndex, prevDaySize - 1);
      return {
        dayIndex: dayIndex - 1,
        slotIndex: clampedSlotIndex,
      };
    }

    case 'right': {
      if (dayIndex === size.length - 1) {
        return null;
      }
      const nextDaySize = size[dayIndex + 1];
      const clampedSlotIndex = Math.min(slotIndex, nextDaySize - 1);
      return {
        dayIndex: dayIndex + 1,
        slotIndex: clampedSlotIndex,
      };
    }

    default:
      return null;
  }
}

interface FocusOnNextControlInput {
  controlsRef: WeekViewControlsRef;
  direction: Direction;
  dayIndex: number;
  slotIndex: number;
  size: number[];
}

function focusOnNextFocusableControl({
  controlsRef,
  direction,
  dayIndex,
  slotIndex,
  size,
}: FocusOnNextControlInput): void {
  const nextPosition = getNextPosition({
    direction,
    dayIndex,
    slotIndex,
    size,
  });

  if (!nextPosition) {
    return;
  }

  const controlToFocus = controlsRef.current?.[nextPosition.dayIndex]?.[nextPosition.slotIndex];

  if (!controlToFocus) {
    return;
  }

  if (controlToFocus.disabled || controlToFocus.getAttribute('data-hidden')) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      dayIndex: nextPosition.dayIndex,
      slotIndex: nextPosition.slotIndex,
      size,
    });
  } else {
    controlToFocus.focus();
  }
}

export interface HandleWeekViewKeyDownInput {
  controlsRef: WeekViewControlsRef;
  dayIndex: number;
  slotIndex: number;
  event: React.KeyboardEvent<HTMLButtonElement>;
}

export function handleWeekViewKeyDown({
  controlsRef,
  dayIndex,
  slotIndex,
  event,
}: HandleWeekViewKeyDownInput): void {
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
      dayIndex,
      slotIndex,
      size,
    });
  }
}
