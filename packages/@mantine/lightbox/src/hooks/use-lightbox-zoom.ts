import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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

function clampTranslate(state: ZoomState, image: HTMLImageElement | null): ZoomState {
  if (!image) {
    return state;
  }

  const maxX = (image.offsetWidth * (state.scale - 1)) / 2;
  const maxY = (image.offsetHeight * (state.scale - 1)) / 2;

  return {
    ...state,
    translateX: Math.max(-maxX, Math.min(maxX, state.translateX)),
    translateY: Math.max(-maxY, Math.min(maxY, state.translateY)),
  };
}

export function useLightboxZoom({ enabled, maxScale, currentIndex }: UseLightboxZoomInput) {
  const [zoomState, setZoomState] = useState<ZoomState>(INITIAL_ZOOM_STATE);
  const [isDragging, setIsDragging] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const isZoomedRef = useRef(false);
  const didDrag = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const lastPinchDistance = useRef<number | null>(null);
  const lastPointerType = useRef<string>('mouse');
  const lastClickPointerType = useRef<string>('mouse');
  const [isAdjusting, setIsAdjusting] = useState(false);
  const adjustTimeout = useRef<number>(-1);

  useEffect(() => {
    isZoomedRef.current = zoomState.isZoomed;
  }, [zoomState.isZoomed]);

  const beginAdjust = useCallback(() => {
    setIsAdjusting(true);
    window.clearTimeout(adjustTimeout.current);
    adjustTimeout.current = window.setTimeout(() => setIsAdjusting(false), 120);
  }, []);

  const beginAdjustRef = useRef(beginAdjust);

  useEffect(() => {
    beginAdjustRef.current = beginAdjust;
  }, [beginAdjust]);

  useEffect(() => () => window.clearTimeout(adjustTimeout.current), []);

  const resetZoom = useCallback(() => {
    setZoomState(INITIAL_ZOOM_STATE);
    setIsDragging(false);
  }, []);

  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [prevEnabled, setPrevEnabled] = useState(enabled);

  // Reset during render rather than from an effect: the new slide is then painted at scale
  // 1 in the same commit instead of flashing the previous slide's zoom for one frame.
  //
  // Turning zoom off has to clear the state as well – the image loses its handlers, but a
  // lingering `isZoomed` keeps the carousel's `watchDrag` guard rejecting drags, so the
  // lightbox would silently stop being swipeable.
  if (currentIndex !== prevIndex || enabled !== prevEnabled) {
    setPrevIndex(currentIndex);
    setPrevEnabled(enabled);

    if (currentIndex !== prevIndex || !enabled) {
      setZoomState(INITIAL_ZOOM_STATE);
      setIsDragging(false);
    }
  }

  useEffect(() => {
    if (!enabled) {
      lastPinchDistance.current = null;
      didDrag.current = false;
    }
  }, [enabled]);

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

  const zoomAtPoint = useCallback(
    (deltaScale: number, clientX?: number, clientY?: number) => {
      setZoomState((prev) => {
        const nextScale = Math.max(1, Math.min(maxScale, prev.scale + deltaScale));
        if (nextScale === 1) {
          return INITIAL_ZOOM_STATE;
        }

        const image = imageRef.current;
        let translateX = prev.translateX;
        let translateY = prev.translateY;

        if (image && clientX !== undefined && clientY !== undefined) {
          const rect = image.getBoundingClientRect();
          const scaleRatio = nextScale / prev.scale;
          const offsetX = clientX - (rect.left + rect.width / 2) + prev.translateX;
          const offsetY = clientY - (rect.top + rect.height / 2) + prev.translateY;
          translateX = offsetX * (1 - scaleRatio) + prev.translateX * scaleRatio;
          translateY = offsetY * (1 - scaleRatio) + prev.translateY * scaleRatio;
        }

        return clampTranslate({ scale: nextScale, translateX, translateY, isZoomed: true }, image);
      });
    },
    [maxScale]
  );

  const panZoom = useCallback((deltaX: number, deltaY: number) => {
    if (!isZoomedRef.current) {
      return false;
    }
    setZoomState((prev) =>
      clampTranslate(
        { ...prev, translateX: prev.translateX + deltaX, translateY: prev.translateY + deltaY },
        imageRef.current
      )
    );
    return true;
  }, []);

  const zoomAtPointRef = useRef(zoomAtPoint);

  useEffect(() => {
    zoomAtPointRef.current = zoomAtPoint;
  }, [zoomAtPoint]);

  const handleNativeWheel = useRef((event: WheelEvent) => {
    // Horizontal trackpad gestures report deltaY === 0 – zooming on those would both
    // hijack the gesture and pick a direction at random.
    if (event.deltaY === 0) {
      return;
    }

    event.preventDefault();
    beginAdjustRef.current();
    zoomAtPointRef.current(event.deltaY > 0 ? -0.2 : 0.2, event.clientX, event.clientY);
  });

  const setImageRef = useCallback((node: HTMLImageElement | null) => {
    imageRef.current?.removeEventListener('wheel', handleNativeWheel.current);
    imageRef.current = node;
    node?.addEventListener('wheel', handleNativeWheel.current, { passive: false });
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      lastPointerType.current = event.pointerType;

      if (!zoomState.isZoomed || !enabled) {
        return;
      }
      setIsDragging(true);
      didDrag.current = false;
      dragStart.current = { x: event.clientX, y: event.clientY };
      translateStart.current = { x: zoomState.translateX, y: zoomState.translateY };
      const target = event.target as HTMLElement;
      if (typeof target?.setPointerCapture === 'function') {
        target.setPointerCapture(event.pointerId);
      }
    },
    [zoomState.isZoomed, zoomState.translateX, zoomState.translateY, enabled]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!isDragging || !enabled) {
        return;
      }
      const dx = event.clientX - dragStart.current.x;
      const dy = event.clientY - dragStart.current.y;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        didDrag.current = true;
      }
      setZoomState((prev) =>
        clampTranslate(
          {
            ...prev,
            translateX: translateStart.current.x + dx,
            translateY: translateStart.current.y + dy,
          },
          imageRef.current
        )
      );
    },
    [isDragging, enabled]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePointerCancel = useCallback(() => {
    setIsDragging(false);
    didDrag.current = false;
    lastPinchDistance.current = null;
  }, []);

  const handleTouchMove = useCallback(
    (event: React.TouchEvent) => {
      if (!enabled || event.touches.length !== 2) {
        lastPinchDistance.current = null;
        return;
      }
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);

      if (lastPinchDistance.current !== null) {
        beginAdjust();
        const delta = (distance - lastPinchDistance.current) * 0.01;
        zoomAtPoint(
          delta,
          (touch1.clientX + touch2.clientX) / 2,
          (touch1.clientY + touch2.clientY) / 2
        );
      }
      lastPinchDistance.current = distance;
    },
    [enabled, zoomAtPoint, beginAdjust]
  );

  const handleTouchEnd = useCallback(() => {
    lastPinchDistance.current = null;
  }, []);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      if (!enabled || event.detail > 1) {
        return;
      }
      if (didDrag.current) {
        didDrag.current = false;
        return;
      }

      // Touch taps are handled by the carousel (swipe) and by double-tap to zoom –
      // reacting to the synthetic click as well would fight with both. This checks the
      // input that produced the click rather than whether the device supports touch, so
      // a mouse still zooms on a touchscreen laptop. The recorded type is consumed here
      // so a later click without a preceding pointerdown is not treated as a touch.
      const pointerType = lastPointerType.current;
      lastPointerType.current = 'mouse';
      lastClickPointerType.current = pointerType;

      if (pointerType === 'touch') {
        return;
      }

      toggleZoom();
    },
    [enabled, toggleZoom]
  );

  const handleDoubleClick = useCallback(() => {
    if (!enabled || lastClickPointerType.current !== 'touch') {
      return;
    }

    toggleZoom();
  }, [enabled, toggleZoom]);

  const getImageProps = useCallback(
    () => ({
      ref: setImageRef,
      style: {
        transform: `scale(${zoomState.scale}) translate(${zoomState.translateX / zoomState.scale}px, ${zoomState.translateY / zoomState.scale}px)`,
      },
      'data-zoom-enabled': enabled || undefined,
      'data-zoomed': zoomState.isZoomed || undefined,
      'data-dragging': isDragging || isAdjusting || undefined,
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
      onLostPointerCapture: handlePointerUp,
      onClick: handleClick,
      onDoubleClick: handleDoubleClick,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    }),
    [
      zoomState,
      isDragging,
      isAdjusting,
      enabled,
      setImageRef,
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      handlePointerCancel,
      handleClick,
      handleDoubleClick,
      handleTouchMove,
      handleTouchEnd,
    ]
  );

  // Both objects are memoized: the lightbox context is built from them, and returning fresh
  // objects on every render would make that context change identity on every root render,
  // re-rendering every slide, thumbnail and custom render function along with it.
  const publicZoomState = useMemo(
    () => ({ scale: zoomState.scale, isZoomed: zoomState.isZoomed }),
    [zoomState.scale, zoomState.isZoomed]
  );

  return useMemo(
    () => ({
      zoomState: publicZoomState,
      toggleZoom,
      resetZoom,
      panZoom,
      getImageProps,
    }),
    [publicZoomState, toggleZoom, resetZoom, panZoom, getImageProps]
  );
}
