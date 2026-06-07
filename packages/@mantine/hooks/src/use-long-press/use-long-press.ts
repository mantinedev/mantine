import React, { useEffect, useMemo, useRef } from 'react';

export type UseLongPressEvent = 'mouse' | 'touch';

export interface UseLongPressOptions {
  /** Time in milliseconds to trigger the long press, default is 400ms */
  threshold?: number;

  /** Input types that can trigger the long press, `['mouse', 'touch']` by default */
  events?: UseLongPressEvent[];

  /** If set, the long press is canceled when the pointer moves further than the given distance in px from the start position. `true` uses a 10px threshold, a number sets a custom threshold. `false` by default */
  cancelOnMove?: boolean | number;

  /** Callback triggered when the long press starts */
  onStart?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press finishes */
  onFinish?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press is canceled */
  onCancel?: (event: React.MouseEvent | React.TouchEvent) => void;
}

export interface UseLongPressReturnValue {
  onMouseDown?: (event: React.MouseEvent) => void;
  onMouseUp?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseMove?: (event: React.MouseEvent) => void;
  onTouchStart?: (event: React.TouchEvent) => void;
  onTouchEnd?: (event: React.TouchEvent) => void;
  onTouchCancel?: (event: React.TouchEvent) => void;
  onTouchMove?: (event: React.TouchEvent) => void;
}

const DEFAULT_EVENTS: UseLongPressEvent[] = ['mouse', 'touch'];
const DEFAULT_MOVE_THRESHOLD = 10;

export function useLongPress(
  onLongPress: (event: React.MouseEvent | React.TouchEvent) => void,
  options: UseLongPressOptions = {}
): UseLongPressReturnValue {
  const {
    threshold = 400,
    events = DEFAULT_EVENTS,
    cancelOnMove = false,
    onStart,
    onFinish,
    onCancel,
  } = options;
  const isLongPressActive = useRef(false);
  const isPressed = useRef(false);
  const timeout = useRef<number>(-1);
  const startPosition = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const eventsKey = events.join(',');

  return useMemo(() => {
    if (typeof onLongPress !== 'function') {
      return {} as UseLongPressReturnValue;
    }

    const moveEnabled = cancelOnMove !== false;
    const moveThreshold =
      cancelOnMove === true ? DEFAULT_MOVE_THRESHOLD : cancelOnMove === false ? 0 : cancelOnMove;

    const start = (event: React.MouseEvent | React.TouchEvent) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) {
        return;
      }

      if (onStart) {
        onStart(event);
      }

      startPosition.current = getEventPosition(event);
      isPressed.current = true;
      timeout.current = window.setTimeout(() => {
        onLongPress(event);
        isLongPressActive.current = true;
      }, threshold);
    };

    const cancel = (event: React.MouseEvent | React.TouchEvent) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) {
        return;
      }

      if (isLongPressActive.current) {
        if (onFinish) {
          onFinish(event);
        }
      } else if (isPressed.current) {
        if (onCancel) {
          onCancel(event);
        }
      }

      isLongPressActive.current = false;
      isPressed.current = false;
      startPosition.current = null;

      if (timeout.current !== -1) {
        window.clearTimeout(timeout.current);
        timeout.current = -1;
      }
    };

    const move = (event: React.MouseEvent | React.TouchEvent) => {
      if (!moveEnabled || !isPressed.current || isLongPressActive.current) {
        return;
      }

      const position = getEventPosition(event);
      if (!position || !startPosition.current) {
        return;
      }

      const dx = position.x - startPosition.current.x;
      const dy = position.y - startPosition.current.y;

      if (Math.sqrt(dx * dx + dy * dy) > moveThreshold) {
        cancel(event);
      }
    };

    const handlers: UseLongPressReturnValue = {};

    if (events.includes('mouse')) {
      handlers.onMouseDown = start;
      handlers.onMouseUp = cancel;
      handlers.onMouseLeave = cancel;
      if (moveEnabled) {
        handlers.onMouseMove = move;
      }
    }

    if (events.includes('touch')) {
      handlers.onTouchStart = start;
      handlers.onTouchEnd = cancel;
      handlers.onTouchCancel = cancel;
      if (moveEnabled) {
        handlers.onTouchMove = move;
      }
    }

    return handlers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLongPress, threshold, onCancel, onFinish, onStart, cancelOnMove, eventsKey]);
}

function getEventPosition(
  event: React.MouseEvent | React.TouchEvent
): { x: number; y: number } | null {
  if (isTouchEvent(event)) {
    const touch = event.touches[0] ?? event.changedTouches[0];
    return touch ? { x: touch.clientX, y: touch.clientY } : null;
  }

  return { x: event.clientX, y: event.clientY };
}

function isTouchEvent(event: React.MouseEvent | React.TouchEvent): event is React.TouchEvent {
  return window.TouchEvent
    ? event.nativeEvent instanceof TouchEvent
    : 'touches' in event.nativeEvent;
}

function isMouseEvent(event: React.MouseEvent | React.TouchEvent): event is React.MouseEvent {
  return event.nativeEvent instanceof MouseEvent;
}

export namespace useLongPress {
  export type Options = UseLongPressOptions;
  export type ReturnValue = UseLongPressReturnValue;
}
