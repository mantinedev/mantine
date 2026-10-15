import { useCallback, useEffect, useEffectEvent, useRef } from 'react';

export interface UseResizeGestureInput {
  /** Whether a resize gesture is in progress */
  active: boolean;

  /** Cursor applied to `document.body` while the gesture is active */
  cursor?: string;

  /** Called on every `pointermove` while the gesture is active */
  onMove: (event: PointerEvent) => void;

  /** Called on `pointerup`, commits the resize */
  onCommit: () => void;

  /** Called when the gesture ends: after commit, on `pointercancel` and on Escape */
  onEnd: () => void;
}

/**
 * Document listeners shared by resize hooks. The gesture ends on `pointerup` (commit),
 * `pointercancel` or Escape (both cancel without commit). `wasResizing` stays `true` until
 * the frame after the pointer is released, so the click that follows the gesture can be ignored.
 */
export function useResizeGesture({
  active,
  cursor,
  onMove,
  onCommit,
  onEnd,
}: UseResizeGestureInput) {
  const justResizedRef = useRef(false);
  const releaseCleanupRef = useRef<(() => void) | null>(null);
  const stableOnMove = useEffectEvent(onMove);
  const stableOnCommit = useEffectEvent(onCommit);
  const stableOnEnd = useEffectEvent(onEnd);

  const markJustResized = useCallback(() => {
    justResizedRef.current = true;
    requestAnimationFrame(() => {
      justResizedRef.current = false;
    });
  }, []);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const savedUserSelect = document.body.style.userSelect;
    const savedCursor = document.body.style.cursor;
    document.body.style.userSelect = 'none';
    if (cursor) {
      document.body.style.cursor = cursor;
    }

    const handlePointerMove = (event: PointerEvent) => stableOnMove(event);

    const handlePointerUp = () => {
      stableOnCommit();
      stableOnEnd();
      markJustResized();
    };

    const handlePointerCancel = () => {
      stableOnEnd();
      markJustResized();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      event.preventDefault();
      justResizedRef.current = true;
      stableOnEnd();

      const handleRelease = () => {
        releaseCleanupRef.current?.();
        markJustResized();
      };

      releaseCleanupRef.current?.();
      document.addEventListener('pointerup', handleRelease, true);
      document.addEventListener('pointercancel', handleRelease, true);
      releaseCleanupRef.current = () => {
        document.removeEventListener('pointerup', handleRelease, true);
        document.removeEventListener('pointercancel', handleRelease, true);
        releaseCleanupRef.current = null;
      };
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerCancel);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.userSelect = savedUserSelect;
      document.body.style.cursor = savedCursor;
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerCancel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active, cursor]);

  useEffect(
    () => () => {
      releaseCleanupRef.current?.();
    },
    []
  );

  return useCallback(() => justResizedRef.current, []);
}
