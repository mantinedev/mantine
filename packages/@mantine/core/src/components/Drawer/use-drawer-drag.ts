import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { clamp, useLatestRef } from '@mantine/hooks';
import { ownsGesture, isScrollAtEdge, resolveScrollContainer } from './get-drawer-gesture-target';
import { resolveSnapFraction, SNAP_PROJECTION_MS } from './get-drawer-snap';
import { getAxis, resolvePosition } from './use-drawer-transform';

export interface UseDrawerDragInput {
  position: 'top' | 'bottom' | 'left' | 'right';
  dir: 'ltr' | 'rtl';
  enabled: boolean;
  /** drawer opened state; the uncontrolled active snap point resets to its default every time it becomes `true` */
  opened?: boolean;
  onClose: () => void | Promise<boolean>;
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

const VELOCITY_RELEASE_WINDOW = 100;

function isPrimaryPointer(event: React.PointerEvent) {
  return event.button === 0 && event.isPrimary !== false;
}

export function useDrawerDrag({
  position,
  dir,
  enabled,
  opened,
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

  const [uncontrolledSnapPoint, setUncontrolledSnapPoint] = useState(defaultActiveSnapPoint);
  const [previousOpened, setPreviousOpened] = useState(opened);

  if (opened !== previousOpened) {
    setPreviousOpened(opened);

    if (opened) {
      setUncontrolledSnapPoint(defaultActiveSnapPoint);
    }
  }

  const isSnapPointControlled = activeSnapPoint !== undefined;
  const resolvedActiveSnapPoint = isSnapPointControlled ? activeSnapPoint : uncontrolledSnapPoint;

  const setActiveSnapPoint = (point: number | string) => {
    if (!isSnapPointControlled) {
      setUncontrolledSnapPoint(point);
    }

    onSnapPointChange?.(point);
  };

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
    activeSnapPoint: effectiveActiveSnapPoint,
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

  const measure = useCallback(() => {
    const rect = scrollRef.current?.getBoundingClientRect();
    const size = (getAxis(position) === 'y' ? rect?.height : rect?.width) || 0;

    if (size > 0) {
      setMeasuredSize(size);
    }
  }, [position, scrollRef]);

  useLayoutEffect(() => {
    if (hasSnapPoints) {
      measure();
    }
  });

  useEffect(() => {
    if (!hasSnapPoints) {
      return undefined;
    }

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [hasSnapPoints, measure]);

  const detach = useCallback(() => {
    state.current.active = false;
    state.current.committed = false;
    cleanupRef.current?.();
    cleanupRef.current = null;
  }, []);

  const cancel = useCallback(() => {
    const committed = state.current.committed;
    const restOffset = state.current.restOffset;
    detach();

    if (committed) {
      setDragging(false);
      setOffset(restOffset);
      onProgress?.(0);
    }
  }, [detach, onProgress]);

  const finish = useCallback(
    (releaseTime: number) => {
      const current = state.current;
      const snap = snapRef.current;
      const size = current.size;

      if (!current.committed) {
        detach();
        return;
      }

      detach();
      setDragging(false);

      if (releaseTime - current.lastTime > VELOCITY_RELEASE_WINDOW) {
        current.velocity = 0;
      }

      if (snap.hasSnapPoints) {
        const projected = current.offset + current.velocity * SNAP_PROJECTION_MS;
        const restOffsets = snap.sortedSnapPoints.map(
          (point) => (1 - resolveSnapFraction(point, size)) * size
        );
        const smallestRest = Math.max(...restOffsets);

        const fastFlick = current.velocity >= velocityThreshold;
        const pastSmallest = size > 0 && projected > smallestRest + threshold * size;

        if (size > 0 && (pastSmallest || (fastFlick && projected > smallestRest))) {
          onProgress?.(1);
          const closing = onClose();

          if (closing) {
            closing.then((closed) => {
              if (!closed) {
                setOffset(current.restOffset);
                onProgress?.(0);
              }
            });
          }

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

        if (nearestPoint !== snap.activeSnapPoint) {
          snap.setActiveSnapPoint(nearestPoint);
        }

        return;
      }

      const shouldClose =
        size > 0 && (current.offset / size >= threshold || current.velocity >= velocityThreshold);

      setOffset(0);
      onProgress?.(0);

      if (shouldClose) {
        onClose();
      }
    },
    [detach, onClose, onProgress, threshold, velocityThreshold]
  );

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
        const dismissDelta = getDismissDelta(resolvedPosition, deltaX, deltaY);

        if (!state.current.committed) {
          const dismissAxisMovement = axis === 'y' ? deltaY : deltaX;
          const crossDelta = axis === 'y' ? deltaX : deltaY;

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

        finish(upEvent.timeStamp || performance.now());
      };

      const handleCancel = (cancelEvent: PointerEvent) => {
        if (cancelEvent.pointerId === state.current.pointerId) {
          cancel();
        }
      };

      window.addEventListener('pointermove', handleMove);
      window.addEventListener('pointerup', handleUp);
      window.addEventListener('pointercancel', handleCancel);

      cleanupRef.current = () => {
        window.removeEventListener('pointermove', handleMove);
        window.removeEventListener('pointerup', handleUp);
        window.removeEventListener('pointercancel', handleCancel);
        restoreSelection();
      };
    },
    [
      position,
      resolvedPosition,
      finish,
      cancel,
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
        const axis = getAxis(position);

        if (
          !enabled ||
          state.current.active ||
          !isPrimaryPointer(event) ||
          event.defaultPrevented ||
          ownsGesture(event.target as HTMLElement, scrollRef.current, axis)
        ) {
          return;
        }

        const selection = window.getSelection?.();
        if (selection && !selection.isCollapsed && selection.toString().length > 0) {
          return;
        }

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
        if (!enabled || state.current.active || !isPrimaryPointer(event)) {
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

  useLayoutEffect(() => {
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
