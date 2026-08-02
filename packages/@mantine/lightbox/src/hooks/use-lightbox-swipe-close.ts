import { useCallback, useRef } from 'react';

interface UseLightboxSwipeCloseInput {
  enabled: boolean;
  onClose: () => void;
  isZoomed: boolean;
}

const SWIPE_THRESHOLD = 100;

export function useLightboxSwipeClose({ enabled, onClose, isZoomed }: UseLightboxSwipeCloseInput) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent) => {
      if (!enabled || isZoomed) {
        return;
      }
      if (event.touches.length !== 1) {
        touchStart.current = null;
        return;
      }
      touchStart.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    },
    [enabled, isZoomed]
  );

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent) => {
      if (!enabled || isZoomed || !touchStart.current || event.changedTouches.length !== 1) {
        touchStart.current = null;
        return;
      }

      const deltaY = event.changedTouches[0].clientY - touchStart.current.y;
      const deltaX = Math.abs(event.changedTouches[0].clientX - touchStart.current.x);

      if (deltaY > SWIPE_THRESHOLD && deltaX < deltaY) {
        onClose();
      }

      touchStart.current = null;
    },
    [enabled, isZoomed, onClose]
  );

  return { handleTouchStart, handleTouchEnd };
}
