import React, { useEffect, useMemo, useRef } from 'react';

export interface UseLongPressOptions {
  /** Time in milliseconds to trigger the long press, default is 400ms */
  threshold?: number;

  /** Callback triggered when the long press starts */
  onStart?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press finishes */
  onFinish?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press is canceled */
  onCancel?: (event: React.MouseEvent | React.TouchEvent) => void;
}

export interface UseLongPressReturnValue {
  onMouseDown: (event: React.MouseEvent) => void;
  onMouseUp: (event: React.MouseEvent) => void;
  onMouseLeave: (event: React.MouseEvent) => void;
  onTouchStart: (event: React.TouchEvent) => void;
  onTouchEnd: (event: React.TouchEvent) => void;
}

export function useLongPress(
  onLongPress: (event: React.MouseEvent | React.TouchEvent) => void,
  options: UseLongPressOptions = {}
): UseLongPressReturnValue {
  const { threshold = 400, onStart, onFinish, onCancel } = options;
  const isLongPressActive = useRef(false);
  const isPressed = useRef(false);
  const timeout = useRef<number>(-1);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  return useMemo(() => {
    if (typeof onLongPress !== 'function') {
      return {} as UseLongPressReturnValue;
    }

    const start = (event: React.MouseEvent | React.TouchEvent) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) {
        return;
      }

      if (onStart) {
        onStart(event);
      }

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

      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }
    };

    return {
      onMouseDown: start,
      onMouseUp: cancel,
      onMouseLeave: cancel,
      onTouchStart: start,
      onTouchEnd: cancel,
    };
  }, [onLongPress, threshold, onCancel, onFinish, onStart]);
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
