import React, { useMemo, useRef } from 'react';
import { useHoldRepeat, UseHoldRepeatOptions } from '../use-hold-repeat/use-hold-repeat';

export type UseHoldRepeatEvent = 'pointer' | 'mouse' | 'touch' | 'keyboard';

export interface UseHoldRepeatHandlersOptions extends UseHoldRepeatOptions {
  /** Which event handlers to produce. `pointer` already unifies mouse and touch input and should
   *  not be combined with `mouse` or `touch` in the same array (doing so triggers the action twice
   *  per interaction). @default ['pointer'] */
  events?: UseHoldRepeatEvent[];

  /** When `events` includes `keyboard`, only these keys start the hold (e.g. `['ArrowUp']`). Omit to react to any key. */
  keys?: string[];

  /** Call `event.preventDefault()` on the pointer, mouse and keyboard start event. Touch start
   *  events are exempt because React registers `touchstart` as a passive listener where
   *  `preventDefault()` has no effect – use the `touch-action` CSS property to control touch
   *  scrolling during a hold. @default true */
  preventDefault?: boolean;
}

export interface UseHoldRepeatHandlersReturnValue {
  onPointerDown?: (event: React.PointerEvent) => void;
  onPointerUp?: (event: React.PointerEvent) => void;
  onPointerLeave?: (event: React.PointerEvent) => void;
  onPointerCancel?: (event: React.PointerEvent) => void;

  onMouseDown?: (event: React.MouseEvent) => void;
  onMouseUp?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;

  onTouchStart?: (event: React.TouchEvent) => void;
  onTouchEnd?: (event: React.TouchEvent) => void;
  onTouchCancel?: (event: React.TouchEvent) => void;

  onKeyDown?: (event: React.KeyboardEvent) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;

  /** Imperative passthrough from `useHoldRepeat` for custom wiring */
  start: () => void;

  /** Imperative passthrough from `useHoldRepeat` for custom wiring */
  stop: () => void;
}

const DEFAULT_EVENTS: UseHoldRepeatEvent[] = ['pointer'];

// Touch interactions dispatch emulated mouse events (mousedown/mouseup/click) shortly after
// touchend. When both `mouse` and `touch` handlers are active, this window is used to ignore the
// emulated mousedown so the action is not triggered twice for a single touch.
const MOUSE_EMULATION_TIMEOUT = 500;

export function useHoldRepeatHandlers(
  onTrigger: () => void,
  options: UseHoldRepeatHandlersOptions = {}
): UseHoldRepeatHandlersReturnValue {
  const { events = DEFAULT_EVENTS, keys, preventDefault = true, ...holdOptions } = options;
  const { start, stop } = useHoldRepeat(onTrigger, holdOptions);

  const lastTouchRef = useRef(0);

  const eventsKey = events.join(',');
  const keysKey = keys ? keys.join(',') : '';

  return useMemo(() => {
    const handlers = {} as UseHoldRepeatHandlersReturnValue;

    if (events.includes('pointer')) {
      handlers.onPointerDown = (event) => {
        if (preventDefault) {
          event.preventDefault();
        }
        start();
      };
      handlers.onPointerUp = () => stop();
      handlers.onPointerLeave = () => stop();
      handlers.onPointerCancel = () => stop();
    }

    if (events.includes('mouse')) {
      handlers.onMouseDown = (event) => {
        if (Date.now() - lastTouchRef.current < MOUSE_EMULATION_TIMEOUT) {
          return;
        }
        if (preventDefault) {
          event.preventDefault();
        }
        start();
      };
      handlers.onMouseUp = () => stop();
      handlers.onMouseLeave = () => stop();
    }

    if (events.includes('touch')) {
      handlers.onTouchStart = () => {
        lastTouchRef.current = Date.now();
        start();
      };
      handlers.onTouchEnd = () => {
        lastTouchRef.current = Date.now();
        stop();
      };
      handlers.onTouchCancel = () => {
        lastTouchRef.current = Date.now();
        stop();
      };
    }

    if (events.includes('keyboard')) {
      handlers.onKeyDown = (event) => {
        if (keys && !keys.includes(event.key)) {
          return;
        }
        if (preventDefault) {
          event.preventDefault();
        }
        // Ignore OS auto-repeat so the hook's own timer drives the cadence, but keep calling
        // preventDefault above so the browser default (e.g. scrolling) stays suppressed while held.
        if (event.repeat) {
          return;
        }
        start();
      };
      handlers.onKeyUp = (event) => {
        if (keys && !keys.includes(event.key)) {
          return;
        }
        stop();
      };
      // The element cannot receive keyup once it loses focus (click away, Alt+Tab, window blur),
      // so stop the hold on blur to avoid a stuck repeat.
      handlers.onBlur = () => stop();
    }

    Object.defineProperties(handlers, {
      start: { value: start },
      stop: { value: stop },
    });

    return handlers;
  }, [start, stop, eventsKey, keysKey, preventDefault]);
}

export namespace useHoldRepeatHandlers {
  export type Event = UseHoldRepeatEvent;
  export type Options = UseHoldRepeatHandlersOptions;
  export type ReturnValue = UseHoldRepeatHandlersReturnValue;
}
