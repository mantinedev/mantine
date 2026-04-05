import { useCallback, useEffect, useRef, useState } from 'react';

interface UseLightboxZoomInput {
  enabled: boolean;
  maxScale: number;
  currentIndex: number;
}

interface ZoomState {
  scale: number;
  translateX: number;
  translateY: number;
  isZoomed: boolean;
}

const INITIAL_ZOOM_STATE: ZoomState = {
  scale: 1,
  translateX: 0,
  translateY: 0,
  isZoomed: false,
};

export function useLightboxZoom({ enabled, maxScale, currentIndex }: UseLightboxZoomInput) {
  const [zoomState, setZoomState] = useState<ZoomState>(INITIAL_ZOOM_STATE);
  const imageRef = useRef<HTMLImageElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const lastPinchDistance = useRef<number | null>(null);

  const resetZoom = useCallback(() => {
    setZoomState(INITIAL_ZOOM_STATE);
  }, []);

  useEffect(() => {
    resetZoom();
  }, [currentIndex, resetZoom]);

  const toggleZoom = useCallback(() => {
    if (!enabled) {
      return;
    }
    setZoomState((prev) =>
      prev.isZoomed
        ? INITIAL_ZOOM_STATE
        : { scale: Math.min(2, maxScale), translateX: 0, translateY: 0, isZoomed: true }
    );
  }, [enabled, maxScale]);

  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (!enabled) {
        return;
      }
      event.preventDefault();
      setZoomState((prev) => {
        const delta = event.deltaY > 0 ? -0.2 : 0.2;
        const nextScale = Math.max(1, Math.min(maxScale, prev.scale + delta));
        if (nextScale === 1) {
          return INITIAL_ZOOM_STATE;
        }
        return { ...prev, scale: nextScale, isZoomed: true };
      });
    },
    [enabled, maxScale]
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (!zoomState.isZoomed || !enabled) {
        return;
      }
      isDragging.current = true;
      dragStart.current = { x: event.clientX, y: event.clientY };
      translateStart.current = { x: zoomState.translateX, y: zoomState.translateY };
      (event.target as HTMLElement)?.setPointerCapture(event.pointerId);
    },
    [zoomState.isZoomed, zoomState.translateX, zoomState.translateY, enabled]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!isDragging.current || !enabled) {
        return;
      }
      const dx = event.clientX - dragStart.current.x;
      const dy = event.clientY - dragStart.current.y;
      setZoomState((prev) => ({
        ...prev,
        translateX: translateStart.current.x + dx,
        translateY: translateStart.current.y + dy,
      }));
    },
    [enabled]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (event: React.TouchEvent) => {
      if (!enabled || event.touches.length !== 2) {
        lastPinchDistance.current = null;
        return;
      }
      event.preventDefault();
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);

      if (lastPinchDistance.current !== null) {
        const delta = (distance - lastPinchDistance.current) * 0.01;
        setZoomState((prev) => {
          const nextScale = Math.max(1, Math.min(maxScale, prev.scale + delta));
          if (nextScale === 1) {
            return INITIAL_ZOOM_STATE;
          }
          return { ...prev, scale: nextScale, isZoomed: true };
        });
      }
      lastPinchDistance.current = distance;
    },
    [enabled, maxScale]
  );

  const handleTouchEnd = useCallback(() => {
    lastPinchDistance.current = null;
  }, []);

  const getImageProps = useCallback(
    () => ({
      ref: imageRef,
      style: {
        transform: `scale(${zoomState.scale}) translate(${zoomState.translateX / zoomState.scale}px, ${zoomState.translateY / zoomState.scale}px)`,
      },
      'data-zoomed': zoomState.isZoomed || undefined,
      onWheel: handleWheel,
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onDoubleClick: toggleZoom,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    }),
    [
      zoomState,
      handleWheel,
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      toggleZoom,
      handleTouchMove,
      handleTouchEnd,
    ]
  );

  return {
    zoomState: { scale: zoomState.scale, isZoomed: zoomState.isZoomed },
    toggleZoom,
    resetZoom,
    getImageProps,
  };
}
