import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseTiltOptions {
  /** If set, the hook reacts to the pointer position anywhere on the page instead of only
   *  when the target element is hovered, `false` by default */
  trackWindow?: boolean;

  /** If set, `roll` and `tilt` reset to `0` when the pointer leaves the target element.
   *  Ignored when the `trackWindow` option is set to `true`, `true` by default */
  resetOnLeave?: boolean;

  /** Adjusts normalized device orientation roll value before it is returned */
  deviceOrientationRollAdjust?: (value: number) => number;

  /** Adjusts normalized device orientation tilt value before it is returned */
  deviceOrientationTiltAdjust?: (value: number) => number;

  /** Adjusts normalized mouse roll value before it is returned */
  mouseRollAdjust?: (value: number) => number;

  /** Adjusts normalized mouse tilt value before it is returned */
  mouseTiltAdjust?: (value: number) => number;
}

export type UseTiltSource = 'mouse' | 'deviceOrientation';

export interface UseTiltReturnValue<T extends HTMLElement = any> {
  /** Ref callback that must be assigned to the target element */
  ref: React.RefCallback<T | null>;

  /** Vertical tilt normalized to `[-0.5, 0.5]` for mouse input, positive when the pointer is above the center of the element */
  roll: number;

  /** Horizontal tilt normalized to `[-0.5, 0.5]` for mouse input, positive when the pointer is right of the center of the element */
  tilt: number;

  /** Input source that produced the current `roll` and `tilt` values */
  source: UseTiltSource;
}

interface TiltState {
  roll: number;
  tilt: number;
  source: UseTiltSource;
}

export function useTilt<T extends HTMLElement = any>(
  options: UseTiltOptions = {}
): UseTiltReturnValue<T> {
  const { trackWindow = false, resetOnLeave = true } = options;
  const hasDeviceOrientation = useRef(false);
  const [state, setState] = useState<TiltState>({ roll: 0, tilt: 0, source: 'mouse' });

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      const isEmptyReading = (beta === null || beta === 0) && (gamma === null || gamma === 0);

      if (!hasDeviceOrientation.current && isEmptyReading) {
        return;
      }

      hasDeviceOrientation.current = true;
      setState({
        source: 'deviceOrientation',
        roll: -(beta ?? 0) / 90,
        tilt: (gamma ?? 0) / 90,
      });
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  const ref: React.RefCallback<T | null> = useCallback(
    (node) => {
      const handleMouseMove = (event: MouseEvent) => {
        if (hasDeviceOrientation.current || !node) {
          return;
        }

        const rect = node.getBoundingClientRect();

        if (!rect.width || !rect.height) {
          return;
        }

        setState({
          source: 'mouse',
          roll: -(event.clientY - rect.top - rect.height / 2) / rect.height,
          tilt: (event.clientX - rect.left - rect.width / 2) / rect.width,
        });
      };

      const handleMouseLeave = () => {
        if (!hasDeviceOrientation.current) {
          setState({ source: 'mouse', roll: 0, tilt: 0 });
        }
      };

      const target = trackWindow ? window : node;
      target?.addEventListener('mousemove', handleMouseMove as EventListener);

      if (!trackWindow && resetOnLeave) {
        node?.addEventListener('mouseleave', handleMouseLeave);
      }

      return () => {
        target?.removeEventListener('mousemove', handleMouseMove as EventListener);
        node?.removeEventListener('mouseleave', handleMouseLeave);
      };
    },
    [trackWindow, resetOnLeave]
  );

  const rollAdjust =
    state.source === 'deviceOrientation'
      ? options.deviceOrientationRollAdjust
      : options.mouseRollAdjust;

  const tiltAdjust =
    state.source === 'deviceOrientation'
      ? options.deviceOrientationTiltAdjust
      : options.mouseTiltAdjust;

  return {
    ref,
    source: state.source,
    roll: rollAdjust ? rollAdjust(state.roll) : state.roll,
    tilt: tiltAdjust ? tiltAdjust(state.tilt) : state.tilt,
  };
}

export namespace useTilt {
  export type Options = UseTiltOptions;
  export type Source = UseTiltSource;
  export type ReturnValue<T extends HTMLElement> = UseTiltReturnValue<T>;
}
