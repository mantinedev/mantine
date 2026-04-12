import { RefObject } from 'react';

export type ResourcesWeekViewControlsRef = RefObject<HTMLButtonElement[][]>;

type Direction = 'up' | 'down' | 'left' | 'right';

interface SlotPosition {
  resourceIndex: number;
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

function getControlsSize(controlsRef: ResourcesWeekViewControlsRef): number[] | null {
  if (!controlsRef.current) {
    return null;
  }
  return controlsRef.current.map((resource) => (resource ? resource.length : 0));
}

interface GetNextPositionInput {
  direction: Direction;
  resourceIndex: number;
  slotIndex: number;
  size: number[];
}

function getNextPosition({
  direction,
  resourceIndex,
  slotIndex,
  size,
}: GetNextPositionInput): SlotPosition | null {
  const currentSize = size[resourceIndex];
  if (!currentSize) {
    return null;
  }

  switch (direction) {
    case 'left': {
      if (slotIndex === 0) {
        return null;
      }
      return { resourceIndex, slotIndex: slotIndex - 1 };
    }

    case 'right': {
      if (slotIndex === currentSize - 1) {
        return null;
      }
      return { resourceIndex, slotIndex: slotIndex + 1 };
    }

    case 'up': {
      if (resourceIndex === 0) {
        return null;
      }
      const prevSize = size[resourceIndex - 1];
      return {
        resourceIndex: resourceIndex - 1,
        slotIndex: Math.min(slotIndex, prevSize - 1),
      };
    }

    case 'down': {
      if (resourceIndex === size.length - 1) {
        return null;
      }
      const nextSize = size[resourceIndex + 1];
      return {
        resourceIndex: resourceIndex + 1,
        slotIndex: Math.min(slotIndex, nextSize - 1),
      };
    }

    default:
      return null;
  }
}

interface FocusOnNextControlInput {
  controlsRef: ResourcesWeekViewControlsRef;
  direction: Direction;
  resourceIndex: number;
  slotIndex: number;
  size: number[];
}

function focusOnNextFocusableControl({
  controlsRef,
  direction,
  resourceIndex,
  slotIndex,
  size,
}: FocusOnNextControlInput): void {
  const nextPosition = getNextPosition({ direction, resourceIndex, slotIndex, size });

  if (!nextPosition) {
    return;
  }

  const controlToFocus =
    controlsRef.current?.[nextPosition.resourceIndex]?.[nextPosition.slotIndex];

  if (!controlToFocus) {
    return;
  }

  if (controlToFocus.disabled || controlToFocus.getAttribute('data-hidden')) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      resourceIndex: nextPosition.resourceIndex,
      slotIndex: nextPosition.slotIndex,
      size,
    });
  } else {
    controlToFocus.focus();
  }
}

export interface HandleResourcesWeekViewKeyDownInput {
  controlsRef: ResourcesWeekViewControlsRef;
  resourceIndex: number;
  slotIndex: number;
  event: React.KeyboardEvent<HTMLButtonElement>;
}

export function handleResourcesWeekViewKeyDown({
  controlsRef,
  resourceIndex,
  slotIndex,
  event,
}: HandleResourcesWeekViewKeyDownInput): void {
  const direction = getDirection(event.key);

  if (direction) {
    event.preventDefault();

    const size = getControlsSize(controlsRef);

    if (!size) {
      return;
    }

    focusOnNextFocusableControl({ controlsRef, direction, resourceIndex, slotIndex, size });
  }
}
