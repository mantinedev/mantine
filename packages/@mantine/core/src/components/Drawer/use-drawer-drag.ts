import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLatestRef, useUncontrolled } from '@mantine/hooks';

export interface UseDrawerDragInput {
  position: 'top' | 'bottom' | 'left' | 'right';
  dir: 'ltr' | 'rtl';
  enabled: boolean;
  onClose: () => void;
  /** ref to the content root; used as the upper boundary when resolving the scrollable container under the pointer */
  scrollRef: React.RefObject<HTMLElement | null>;
  /** fraction of drawer size past which release dismisses @default 0.25 */
  threshold?: number;
  /** velocity (px/ms) past which a flick dismisses regardless of distance @default 0.5 */
  velocityThreshold?: number;
  /** called with 0..1 dismiss progress during drag (for stack coordination) */
  onProgress?: (progress: number) => void;
  /** snap points as fractions in `(0,1]` or absolute sizes (`> 1` or CSS string) along the axis */
  snapPoints?: (number | string)[];
  /** controlled active snap point */
  activeSnapPoint?: number | string;
  /** uncontrolled initial active snap point */
  defaultActiveSnapPoint?: number | string;
  /** called when the active snap point changes */
  onSnapPointChange?: (point: number | string) => void;
}

export interface UseDrawerDragReturn {
  dragging: boolean;
  /** signed px offset along the drag axis (always in the dismiss direction, >= 0 toward dismissal); includes the active snap point rest offset */
  offset: number;
  /** resolved active snap point (when `snapPoints` is provided) */
  activeSnapPoint: number | string | undefined;
  getRootProps: () => { onPointerDown: (event: React.PointerEvent) => void };
  getHandleProps: () => { onPointerDown: (event: React.PointerEvent) => void };
}

type Axis = 'x' | 'y';

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getAxis(position: UseDrawerDragInput['position']): Axis {
  return position === 'top' || position === 'bottom' ? 'y' : 'x';
}

export function resolvePosition(
  position: UseDrawerDragInput['position'],
  dir: UseDrawerDragInput['dir']
): UseDrawerDragInput['position'] {
  if (dir === 'rtl' && position === 'left') {
    return 'right';
  }

  if (dir === 'rtl' && position === 'right') {
    return 'left';
  }

  return position;
}

function getDismissDelta(position: UseDrawerDragInput['position'], deltaX: number, deltaY: number) {
  switch (position) {
    case 'bottom':
      return deltaY;
    case 'top':
      return -deltaY;
    case 'right':
      return deltaX;
    case 'left':
    default:
      return -deltaX;
  }
}

const COMMIT_THRESHOLD = 6;

const INTERACTIVE_TAGS = ['input', 'textarea', 'select', 'button', 'a'];

function isInteractiveOrTextEntry(
  target: HTMLElement | null,
  boundary: HTMLElement | null
): boolean {
  let current: HTMLElement | null = target;

  while (current) {
    const tagName = current.tagName?.toLowerCase();

    if (
      INTERACTIVE_TAGS.includes(tagName) ||
      current.isContentEditable ||
      current.hasAttribute('contenteditable')
    ) {
      return true;
    }

    if (current === boundary) {
      break;
    }

    current = current.parentElement;
  }

  return false;
}

function isScrollAtEdge(
  element: HTMLElement | null,
  position: UseDrawerDragInput['position']
): boolean {
  if (!element) {
    return true;
  }

  switch (position) {
    case 'bottom':
      return element.scrollTop <= 0;
    case 'top':
      return element.scrollTop + element.clientHeight >= element.scrollHeight;
    case 'left':
      return element.scrollLeft + element.clientWidth >= element.scrollWidth;
    case 'right':
    default:
      return element.scrollLeft <= 0;
  }
}

function isScrollableAlongAxis(element: HTMLElement, axis: Axis): boolean {
  const style = window.getComputedStyle(element);
  const overflow = axis === 'y' ? style.overflowY : style.overflowX;

  if (overflow !== 'auto' && overflow !== 'scroll') {
    return false;
  }

  return axis === 'y'
    ? element.scrollHeight > element.clientHeight
    : element.scrollWidth > element.clientWidth;
}

function resolveScrollContainer(
  target: HTMLElement | null,
  boundary: HTMLElement | null,
  axis: Axis
): HTMLElement | null {
  let current: HTMLElement | null = target;

  while (current) {
    if (isScrollableAlongAxis(current, axis)) {
      return current;
    }

    if (current === boundary) {
      break;
    }

    current = current.parentElement;
  }

  return null;
}

function resolveSnapFraction(point: number | string, size: number): number {
  if (typeof point === 'number') {
    return point > 1 ? clamp(size > 0 ? point / size : 0, 0, 1) : clamp(point, 0, 1);
  }

  const parsed = parseFloat(point);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  if (point.trim().endsWith('%')) {
    return clamp(parsed / 100, 0, 1);
  }

  return clamp(size > 0 ? parsed / size : 0, 0, 1);
}

export function useDrawerDrag({
  position,
  dir,
  enabled,
  onClose,
  scrollRef,
  threshold = 0.25,
  velocityThreshold = 0.5,
  onProgress,
  snapPoints,
  activeSnapPoint,
  defaultActiveSnapPoint,
  onSnapPointChange,
}: UseDrawerDragInput): UseDrawerDragReturn {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const [measuredSize, setMeasuredSize] = useState(0);

  const hasSnapPoints = Array.isArray(snapPoints) && snapPoints.length > 0;

  const sortedSnapPoints = hasSnapPoints
    ? [...snapPoints!].sort(
        (a, b) => resolveSnapFraction(a, measuredSize) - resolveSnapFraction(b, measuredSize)
      )
    : [];

  const largestSnapPoint = hasSnapPoints
    ? sortedSnapPoints[sortedSnapPoints.length - 1]
    : undefined;

  const [resolvedActiveSnapPoint, setActiveSnapPoint] = useUncontrolled<number | string>({
    value: activeSnapPoint,
    defaultValue: defaultActiveSnapPoint,
    onChange: onSnapPointChange,
  });

  const effectiveActiveSnapPoint = resolvedActiveSnapPoint ?? largestSnapPoint;

  const activeFraction = hasSnapPoints
    ? resolveSnapFraction(effectiveActiveSnapPoint ?? 1, measuredSize)
    : 1;

  const restOffset = hasSnapPoints ? (1 - activeFraction) * measuredSize : 0;

  const state = useRef({
    active: false,
    committed: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    size: 0,
    restOffset: 0,
    offset: 0,
    lastTime: 0,
    velocity: 0,
  });

  const snapRef = useLatestRef({
    hasSnapPoints,
    sortedSnapPoints,
    restOffset,
    setActiveSnapPoint,
  });

  const cleanupRef = useRef<(() => void) | null>(null);

  const selectionRef = useRef<{ active: boolean; userSelect: string; webkitUserSelect: string }>({
    active: false,
    userSelect: '',
    webkitUserSelect: '',
  });

  const suppressSelection = useCallback(() => {
    if (selectionRef.current.active || typeof document === 'undefined') {
      return;
    }

    const bodyStyle = document.body.style;

    selectionRef.current = {
      active: true,
      userSelect: bodyStyle.userSelect,
      webkitUserSelect: (bodyStyle as any).webkitUserSelect ?? '',
    };

    bodyStyle.userSelect = 'none';

    try {
      (bodyStyle as any).webkitUserSelect = 'none';
    } catch {
      bodyStyle.setProperty('-webkit-user-select', 'none');
    }

    window.getSelection?.()?.removeAllRanges();
  }, []);

  const restoreSelection = useCallback(() => {
    if (!selectionRef.current.active || typeof document === 'undefined') {
      return;
    }

    const bodyStyle = document.body.style;
    bodyStyle.userSelect = selectionRef.current.userSelect;

    try {
      (bodyStyle as any).webkitUserSelect = selectionRef.current.webkitUserSelect;
    } catch {
      bodyStyle.setProperty('-webkit-user-select', selectionRef.current.webkitUserSelect);
    }

    selectionRef.current = { active: false, userSelect: '', webkitUserSelect: '' };
  }, []);

  const resolvedPosition = resolvePosition(position, dir);

  useLayoutEffect(() => {
    if (!hasSnapPoints) {
      return;
    }

    const axis = getAxis(position);
    const rect = scrollRef.current?.getBoundingClientRect();
    const size = (axis === 'y' ? rect?.height : rect?.width) || 0;

    if (size > 0 && size !== measuredSize) {
      setMeasuredSize(size);
    }
  });

  const detach = useCallback(() => {
    state.current.active = false;
    state.current.committed = false;
    cleanupRef.current?.();
    cleanupRef.current = null;
  }, []);

  const finish = useCallback(() => {
    const current = state.current;
    const snap = snapRef.current;
    const size = current.size;

    if (!current.committed) {
      detach();
      return;
    }

    state.current.active = false;
    state.current.committed = false;
    cleanupRef.current?.();
    cleanupRef.current = null;

    setDragging(false);

    if (snap.hasSnapPoints) {
      const projected = current.offset + current.velocity * 100;
      const restOffsets = snap.sortedSnapPoints.map(
        (point) => (1 - resolveSnapFraction(point, size)) * size
      );
      const smallestRest = Math.max(...restOffsets);

      const fastFlick = current.velocity >= velocityThreshold;
      const pastSmallest = size > 0 && projected > smallestRest + threshold * size;

      if (size > 0 && (pastSmallest || (fastFlick && projected > smallestRest))) {
        onProgress?.(1);
        onClose();
        return;
      }

      let nearestIndex = 0;
      let nearestDistance = Infinity;
      restOffsets.forEach((rest, index) => {
        const distance = Math.abs(projected - rest);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      const nearestPoint = snap.sortedSnapPoints[nearestIndex];
      const nearestRest = restOffsets[nearestIndex];

      setOffset(nearestRest);
      onProgress?.(0);
      snap.setActiveSnapPoint(nearestPoint);
      return;
    }

    const shouldClose =
      size > 0 && (current.offset / size >= threshold || current.velocity >= velocityThreshold);

    setOffset(0);
    onProgress?.(0);

    if (shouldClose) {
      onClose();
    }
  }, [onClose, onProgress, threshold, velocityThreshold]);

  const begin = useCallback(
    (event: React.PointerEvent, immediate: boolean) => {
      const axis = getAxis(position);
      const rect = scrollRef.current?.getBoundingClientRect();
      const size = (axis === 'y' ? rect?.height : rect?.width) || 0;
      const baseOffset = snapRef.current.hasSnapPoints ? snapRef.current.restOffset : 0;

      state.current = {
        active: true,
        committed: false,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        size,
        restOffset: baseOffset,
        offset: baseOffset,
        lastTime: event.timeStamp || performance.now(),
        velocity: 0,
      };

      const commit = (now: number) => {
        state.current.committed = true;
        state.current.offset = state.current.restOffset;
        state.current.velocity = 0;
        state.current.lastTime = now;
        suppressSelection();
        setDragging(true);
        setOffset(state.current.restOffset);
      };

      if (immediate) {
        commit(state.current.lastTime);
      }

      const handleMove = (moveEvent: PointerEvent) => {
        if (!state.current.active || moveEvent.pointerId !== state.current.pointerId) {
          return;
        }

        const deltaX = moveEvent.clientX - state.current.startX;
        const deltaY = moveEvent.clientY - state.current.startY;
        const now = moveEvent.timeStamp || performance.now();

        if (!state.current.committed) {
          const dismissAxisMovement = axis === 'y' ? deltaY : deltaX;
          const crossDelta = axis === 'y' ? deltaX : deltaY;
          const dismissDelta = getDismissDelta(resolvedPosition, deltaX, deltaY);

          if (Math.abs(crossDelta) > COMMIT_THRESHOLD) {
            detach();
            return;
          }

          const allowBothDirections = snapRef.current.hasSnapPoints;

          if (
            Math.abs(dismissAxisMovement) > COMMIT_THRESHOLD &&
            Math.abs(dismissAxisMovement) > Math.abs(crossDelta) &&
            (allowBothDirections || dismissDelta > 0)
          ) {
            commit(now);
          } else {
            return;
          }
        }

        const dismissDelta = getDismissDelta(resolvedPosition, deltaX, deltaY);
        const nextOffset = Math.max(0, state.current.restOffset + dismissDelta);

        const elapsed = now - state.current.lastTime;

        if (elapsed > 0) {
          state.current.velocity = (nextOffset - state.current.offset) / elapsed;
        }

        state.current.offset = nextOffset;
        state.current.lastTime = now;

        setOffset(nextOffset);

        if (state.current.size > 0) {
          onProgress?.(clamp((nextOffset - state.current.restOffset) / state.current.size, 0, 1));
        }
      };

      const handleUp = (upEvent: PointerEvent) => {
        if (upEvent.pointerId !== state.current.pointerId) {
          return;
        }

        finish();
      };

      window.addEventListener('pointermove', handleMove);
      window.addEventListener('pointerup', handleUp);
      window.addEventListener('pointercancel', handleUp);

      cleanupRef.current = () => {
        window.removeEventListener('pointermove', handleMove);
        window.removeEventListener('pointerup', handleUp);
        window.removeEventListener('pointercancel', handleUp);
        restoreSelection();
      };
    },
    [
      position,
      resolvedPosition,
      finish,
      detach,
      onProgress,
      scrollRef,
      suppressSelection,
      restoreSelection,
    ]
  );

  const getRootProps = useCallback(
    () => ({
      onPointerDown: (event: React.PointerEvent) => {
        if (!enabled || state.current.active) {
          return;
        }

        if (isInteractiveOrTextEntry(event.target as HTMLElement, scrollRef.current)) {
          return;
        }

        const selection = window.getSelection?.();
        if (selection && !selection.isCollapsed && selection.toString().length > 0) {
          return;
        }

        const axis = getAxis(position);
        const scrollContainer = resolveScrollContainer(
          event.target as HTMLElement,
          scrollRef.current,
          axis
        );

        if (scrollContainer && !isScrollAtEdge(scrollContainer, resolvedPosition)) {
          return;
        }

        begin(event, false);
      },
    }),
    [enabled, begin, position, resolvedPosition, scrollRef]
  );

  const getHandleProps = useCallback(
    () => ({
      onPointerDown: (event: React.PointerEvent) => {
        if (!enabled || state.current.active) {
          return;
        }

        begin(event, true);
      },
    }),
    [enabled, begin]
  );

  useEffect(() => {
    if (!enabled && state.current.active) {
      state.current.active = false;
      state.current.committed = false;
      cleanupRef.current?.();
      cleanupRef.current = null;
      setDragging(false);
      setOffset(hasSnapPoints ? restOffset : 0);
      onProgress?.(0);
    }
  }, [enabled, onProgress, hasSnapPoints, restOffset]);

  useEffect(() => {
    if (!state.current.active && !dragging) {
      setOffset(hasSnapPoints ? restOffset : 0);
    }
  }, [hasSnapPoints, restOffset, dragging]);

  useEffect(
    () => () => {
      cleanupRef.current?.();
      cleanupRef.current = null;
    },
    []
  );

  return {
    dragging,
    offset,
    activeSnapPoint: hasSnapPoints ? effectiveActiveSnapPoint : undefined,
    getRootProps,
    getHandleProps,
  };
}
