import { RefObject } from 'react';
import { getLogicalArrowKey } from '../get-logical-arrow-key/get-logical-arrow-key';

/** Reference to a 2D array of slot buttons: [resourceIndex][slotIndex] */
export type ResourcesGridControlsRef = RefObject<HTMLButtonElement[][]>;

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

function getControlsSize(controlsRef: ResourcesGridControlsRef): number[] | null {
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
  controlsRef: ResourcesGridControlsRef;
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
}: FocusOnNextControlInput): HTMLButtonElement | null {
  const nextPosition = getNextPosition({ direction, resourceIndex, slotIndex, size });

  if (!nextPosition) {
    return null;
  }

  const controlToFocus =
    controlsRef.current?.[nextPosition.resourceIndex]?.[nextPosition.slotIndex];

  if (!controlToFocus) {
    return null;
  }

  if (controlToFocus.disabled || controlToFocus.getAttribute('data-hidden')) {
    return focusOnNextFocusableControl({
      controlsRef,
      direction,
      resourceIndex: nextPosition.resourceIndex,
      slotIndex: nextPosition.slotIndex,
      size,
    });
  }

  controlToFocus.focus();
  return controlToFocus;
}

export interface HandleResourcesGridKeyDownInput {
  controlsRef: ResourcesGridControlsRef;
  resourceIndex: number;
  slotIndex: number;
  event: React.KeyboardEvent<HTMLButtonElement>;

  /** Text direction, `ArrowLeft` and `ArrowRight` are swapped in `rtl` @default 'ltr' */
  dir?: 'ltr' | 'rtl';
}

export function handleResourcesGridKeyDown({
  controlsRef,
  resourceIndex,
  slotIndex,
  event,
  dir,
}: HandleResourcesGridKeyDownInput): HTMLButtonElement | null {
  const direction = getDirection(getLogicalArrowKey(event.key, dir));

  if (!direction) {
    return null;
  }

  event.preventDefault();

  const size = getControlsSize(controlsRef);

  if (!size) {
    return null;
  }

  return focusOnNextFocusableControl({ controlsRef, direction, resourceIndex, slotIndex, size });
}
