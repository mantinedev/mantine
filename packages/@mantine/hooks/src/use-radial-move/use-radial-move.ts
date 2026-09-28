import { useCallback, useEffect, useRef, useState } from 'react';
import { clamp, useCallbackRef } from '../utils';

function radiansToDegrees(radians: number) {
  return radians * (180 / Math.PI);
}

function getElementCenter(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return [rect.left + rect.width / 2, rect.top + rect.height / 2];
}

function getAngle(coordinates: [number, number], element: HTMLElement) {
  const center = getElementCenter(element);
  const x = coordinates[0] - center[0];
  const y = coordinates[1] - center[1];
  const deg = radiansToDegrees(Math.atan2(x, y)) + 180;
  return 360 - deg;
}

function toFixed(value: number, digits: number) {
  return parseFloat(value.toFixed(digits));
}

function getDigitsAfterDot(value: number) {
  return value.toString().split('.')[1]?.length || 0;
}

export function normalizeRadialValue(degree: number, step: number) {
  const clamped = clamp(degree, 0, 360);
  const rounded = toFixed(Math.round(clamped / step) * step, getDigitsAfterDot(step));
  return rounded >= 360 || 360 - clamped <= Math.abs(clamped - rounded) ? 0 : rounded;
}

export interface UseRadialMoveOptions {
  /** Number by which value is incremented/decremented with mouse and touch events, `0.01` by default */
  step?: number;

  /** Called in `onMouseUp` and `onTouchEnd` events with the current value */
  onChangeEnd?: (value: number) => void;

  /** Called in `onMouseDown` and `onTouchStart` events */
  onScrubStart?: () => void;

  /** Called in `onMouseUp` and `onTouchEnd` events */
  onScrubEnd?: () => void;
}

export interface UseRadialMoveReturnValue<T extends HTMLElement = any> {
  /** Ref to be passed to the element that should be used for radial move */
  ref: React.RefCallback<T | null>;

  /** Indicates whether the radial move is active */
  active: boolean;
}

export function useRadialMove<T extends HTMLElement = any>(
  onChange: (value: number) => void,
  { step = 0.01, onChangeEnd, onScrubStart, onScrubEnd }: UseRadialMoveOptions = {}
): UseRadialMoveReturnValue<T> {
  const [active, setActive] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);
  const handleChange = useCallbackRef(onChange);
  const handleChangeEnd = useCallbackRef(onChangeEnd);
  const handleScrubStart = useCallbackRef(onScrubStart);
  const handleScrubEnd = useCallbackRef(onScrubEnd);
  const stepRef = useRef(step);
  stepRef.current = step;

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
    };
  }, []);

  const refCallback: React.RefCallback<T | null> = useCallback((node) => {
    const update = (event: MouseEvent, done = false) => {
      if (node) {
        node.style.userSelect = 'none';
        const deg = getAngle([event.clientX, event.clientY], node);
        const newValue = normalizeRadialValue(deg, stepRef.current || 1);

        handleChange(newValue);
        done && handleChangeEnd(newValue);
      }
    };

    const removeDocumentListeners = () => {
      document.removeEventListener('mousemove', handleMouseMove, false);
      document.removeEventListener('mouseup', handleMouseUp, false);
      document.removeEventListener('touchmove', handleTouchMove, false);
      document.removeEventListener('touchend', handleTouchEnd, false);
    };

    const beginTracking = () => {
      handleScrubStart();
      setActive(true);
      cleanupRef.current = removeDocumentListeners;
      document.addEventListener('mousemove', handleMouseMove, false);
      document.addEventListener('mouseup', handleMouseUp, false);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, false);
    };

    const endTracking = () => {
      handleScrubEnd();
      setActive(false);
      removeDocumentListeners();
      cleanupRef.current = null;
    };

    const onMouseDown = (event: MouseEvent) => {
      beginTracking();
      update(event);
    };

    const handleMouseMove = (event: MouseEvent) => {
      update(event);
    };

    const handleMouseUp = (event: MouseEvent) => {
      update(event, true);
      endTracking();
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      update(event.touches[0] as any);
    };

    const handleTouchEnd = (event: TouchEvent) => {
      update(event.changedTouches[0] as any, true);
      endTracking();
    };

    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      beginTracking();
      update(event.touches[0] as any);
    };

    node?.addEventListener('mousedown', onMouseDown);
    node?.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      if (node) {
        node.removeEventListener('mousedown', onMouseDown);
        node.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, []);

  return { ref: refCallback, active };
}

export namespace useRadialMove {
  export type Options = UseRadialMoveOptions;
  export type ReturnValue<T extends HTMLElement> = UseRadialMoveReturnValue<T>;
}
