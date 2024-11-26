import { useEffect, useRef, useState } from 'react';
import { clamp } from '../utils';

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

function normalize(degree: number, step: number) {
  const clamped = clamp(degree, 0, 360);
  const high = Math.ceil(clamped / step);
  const low = Math.round(clamped / step);
  return toFixed(
    high >= clamped / step ? (high * step === 360 ? 0 : high * step) : low * step,
    getDigitsAfterDot(step)
  );
}

export function useRadialMove<T extends HTMLElement = HTMLDivElement>(
  onChange: (value: number) => void,
  {
    step = 0.01,
    onChangeEnd,
    onScrubStart,
    onScrubEnd,
  }: {
    step?: number;
    onChangeEnd?: (value: number) => void;
    onScrubStart?: () => void;
    onScrubEnd?: () => void;
  } = {}
) {
  const ref = useRef<T>(null);
  const mounted = useRef<boolean>(false);
  // const isSliding = useRef(false);
  // const frame = useRef(0);
  // const [active, setActive] = useState(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  useEffect(() => {
    const update = (event: MouseEvent, done = false) => {
      if (ref.current) {
        const deg = getAngle([event.clientX, event.clientY], ref.current);
        const newValue = normalize(deg, step || 1);

        onChange(newValue);
        done && onChangeEnd?.(newValue);
      }
    };

    const beginTracking = () => {
      document.addEventListener('mousemove', handleMouseMove, false);
      document.addEventListener('mouseup', handleMouseUp, false);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, false);
    };

    const endTracking = () => {
      document.removeEventListener('mousemove', handleMouseMove, false);
      document.removeEventListener('mouseup', handleMouseUp, false);
      document.removeEventListener('touchmove', handleTouchMove, false);
      document.removeEventListener('touchend', handleTouchEnd, false);
    };

    const onMouseDown = () => {
      beginTracking();
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
    };

    ref.current?.addEventListener('mousedown', onMouseDown);
    ref.current?.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousedown', onMouseDown);
        ref.current.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, [onChange]);

  return { ref };
}
