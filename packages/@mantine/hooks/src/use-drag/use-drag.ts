// Required to disable for webkit-user-select, although deprecated, it is still required for Safari support
/* eslint-disable @typescript-eslint/no-deprecated */
import { useCallback, useRef, useState } from 'react';

type Vector2 = [number, number];

export interface UseDragState {
  /** Current pointer position [x, y] */
  xy: Vector2;

  /** Position where the gesture started [x, y] */
  initial: Vector2;

  /** Displacement from start [x, y], respects axis constraint */
  movement: Vector2;

  /** Change since previous event [x, y] */
  delta: Vector2;

  /** Absolute distance per axis [x, y] */
  distance: Vector2;

  /** Movement direction per axis: -1, 0, or 1 */
  direction: Vector2;

  /** Speed per axis in px/ms */
  velocity: Vector2;

  /** Time since drag started in ms */
  elapsedTime: number;

  /** `true` on the first handler call after the threshold is met */
  first: boolean;

  /** `true` on the last handler call (pointer released or canceled) */
  last: boolean;

  /** `true` while the gesture is ongoing */
  active: boolean;

  /** `true` when the gesture qualifies as a tap (requires `filterTaps: true`) */
  tap: boolean;

  /** `true` when the gesture was interrupted by a `pointercancel` event */
  canceled: boolean;

  /** Function to programmatically cancel the current gesture */
  cancel: () => void;

  /** The source `PointerEvent` */
  event: PointerEvent;
}

export interface UseDragOptions {
  /** Constrain movement to a specific axis. `'lock'` locks to whichever axis has more movement after `axisThreshold` is exceeded. */
  axis?: 'x' | 'y' | 'lock';

  /** Movement in px required to determine axis when `axis` is `'lock'`, `1` by default */
  axisThreshold?: number;

  /** When `true`, the last state includes `tap: true` when total distance is below `tapThreshold`, `false` by default */
  filterTaps?: boolean;

  /** Max displacement in px to still be considered a tap, `3` by default */
  tapThreshold?: number;

  /** Minimum displacement in px before the drag activates. Can be a number (both axes) or `[x, y]`. `0` by default */
  threshold?: number | Vector2;

  /** Enable or disable the hook, `true` by default */
  enabled?: boolean;
}

export interface UseDragReturnValue<T extends HTMLElement = any> {
  /** Ref callback to attach to the draggable element */
  ref: React.RefCallback<T | null>;

  /** `true` while the element is being dragged */
  active: boolean;
}

const VELOCITY_DECAY_MS = 100;

function sign(n: number): -1 | 0 | 1 {
  if (n > 0) {
    return 1;
  }
  if (n < 0) {
    return -1;
  }
  return 0;
}

function getThresholdVector(threshold: number | Vector2 | undefined): Vector2 {
  const t = threshold ?? 0;
  if (typeof t === 'number') {
    return [t, t];
  }
  return t;
}

interface DragInternalState {
  isActive: boolean;
  pointerId: number;
  startXY: Vector2;
  prevXY: Vector2;
  startTimestamp: number;
  prevTimestamp: number;
  thresholdMet: boolean;
  firstFired: boolean;
  lockedAxis: 'x' | 'y' | null;
  canceled: boolean;
  lastVelocity: Vector2;
}

function createInitialState(): DragInternalState {
  return {
    isActive: false,
    pointerId: -1,
    startXY: [0, 0],
    prevXY: [0, 0],
    startTimestamp: 0,
    prevTimestamp: 0,
    thresholdMet: false,
    firstFired: false,
    lockedAxis: null,
    canceled: false,
    lastVelocity: [0, 0],
  };
}

export function useDrag<T extends HTMLElement = any>(
  handler: (state: UseDragState) => void,
  options: UseDragOptions = {}
): UseDragReturnValue<T> {
  const [active, setActive] = useState(false);

  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  const optionsRef = useRef(options);
  optionsRef.current = options;

  const stateRef = useRef<DragInternalState>(createInitialState());
  const documentControllerRef = useRef<AbortController | null>(null);

  const refCallback: React.RefCallback<T | null> = useCallback((node) => {
    if (!node) {
      return undefined;
    }

    const elementController = new AbortController();

    const applyAxisConstraint = (v: Vector2): Vector2 => {
      const opts = optionsRef.current;
      const s = stateRef.current;

      if (opts.axis === 'x') {
        return [v[0], 0];
      }
      if (opts.axis === 'y') {
        return [0, v[1]];
      }
      if (opts.axis === 'lock') {
        if (s.lockedAxis === null) {
          const t = opts.axisThreshold ?? 1;
          if (Math.abs(v[0]) > t || Math.abs(v[1]) > t) {
            s.lockedAxis = Math.abs(v[0]) >= Math.abs(v[1]) ? 'x' : 'y';
          }
        }
        if (s.lockedAxis === 'x') {
          return [v[0], 0];
        }
        if (s.lockedAxis === 'y') {
          return [0, v[1]];
        }
      }
      return v;
    };

    const resetDrag = () => {
      const s = stateRef.current;
      s.isActive = false;
      s.pointerId = -1;
      s.thresholdMet = false;
      s.firstFired = false;
      s.lockedAxis = null;
      s.canceled = false;
      setActive(false);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      documentControllerRef.current?.abort();
      documentControllerRef.current = null;
    };

    const cancel = () => {
      if (stateRef.current.isActive) {
        stateRef.current.canceled = true;
        resetDrag();
      }
    };

    const activateDrag = () => {
      setActive(true);
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    };

    const onPointerDown = (event: PointerEvent) => {
      if (optionsRef.current.enabled === false) {
        return;
      }
      if (event.button !== 0) {
        return;
      }
      if (stateRef.current.isActive) {
        return;
      }

      const s = stateRef.current;
      s.isActive = true;
      s.pointerId = event.pointerId;
      s.startXY = [event.clientX, event.clientY];
      s.prevXY = [event.clientX, event.clientY];
      s.startTimestamp = event.timeStamp;
      s.prevTimestamp = event.timeStamp;
      s.thresholdMet = false;
      s.firstFired = false;
      s.lockedAxis = null;
      s.canceled = false;
      s.lastVelocity = [0, 0];

      const [tx, ty] = getThresholdVector(optionsRef.current.threshold);
      if (tx === 0 && ty === 0) {
        s.thresholdMet = true;
        s.firstFired = true;
        activateDrag();

        handlerRef.current({
          xy: [event.clientX, event.clientY],
          initial: [event.clientX, event.clientY],
          movement: [0, 0],
          delta: [0, 0],
          distance: [0, 0],
          direction: [0, 0],
          velocity: [0, 0],
          elapsedTime: 0,
          first: true,
          last: false,
          active: true,
          tap: false,
          canceled: false,
          cancel,
          event,
        });
      }

      documentControllerRef.current?.abort();
      documentControllerRef.current = new AbortController();
      const sig = documentControllerRef.current.signal;

      document.addEventListener('pointermove', onPointerMove, { signal: sig });
      document.addEventListener('pointerup', onPointerUp, { signal: sig });
      document.addEventListener('pointercancel', onPointerCancel, { signal: sig });
    };

    const onPointerMove = (event: PointerEvent) => {
      const s = stateRef.current;
      if (!s.isActive || event.pointerId !== s.pointerId) {
        return;
      }

      const rawMovement: Vector2 = [event.clientX - s.startXY[0], event.clientY - s.startXY[1]];

      if (!s.thresholdMet) {
        const [tx, ty] = getThresholdVector(optionsRef.current.threshold);
        if (Math.abs(rawMovement[0]) < tx && Math.abs(rawMovement[1]) < ty) {
          s.prevXY = [event.clientX, event.clientY];
          s.prevTimestamp = event.timeStamp;
          return;
        }
        s.thresholdMet = true;
        activateDrag();
      }

      const movement = applyAxisConstraint(rawMovement);
      const rawDelta: Vector2 = [event.clientX - s.prevXY[0], event.clientY - s.prevXY[1]];
      const delta = applyAxisConstraint(rawDelta);
      const timeDelta = event.timeStamp - s.prevTimestamp;
      const velocity: Vector2 =
        timeDelta > 0
          ? [Math.abs(delta[0]) / timeDelta, Math.abs(delta[1]) / timeDelta]
          : s.lastVelocity;

      s.lastVelocity = velocity;
      const isFirst = !s.firstFired;
      s.firstFired = true;
      s.prevXY = [event.clientX, event.clientY];
      s.prevTimestamp = event.timeStamp;

      handlerRef.current({
        xy: [event.clientX, event.clientY],
        initial: [...s.startXY],
        movement,
        delta,
        distance: [Math.abs(movement[0]), Math.abs(movement[1])],
        direction: [sign(delta[0]), sign(delta[1])],
        velocity,
        elapsedTime: event.timeStamp - s.startTimestamp,
        first: isFirst,
        last: false,
        active: true,
        tap: false,
        canceled: false,
        cancel,
        event,
      });
    };

    const onPointerUp = (event: PointerEvent) => {
      const s = stateRef.current;
      if (!s.isActive || event.pointerId !== s.pointerId) {
        return;
      }

      const opts = optionsRef.current;

      if (!s.thresholdMet) {
        if (opts.filterTaps) {
          const rawMov: Vector2 = [event.clientX - s.startXY[0], event.clientY - s.startXY[1]];
          const mov = applyAxisConstraint(rawMov);
          const dist: Vector2 = [Math.abs(mov[0]), Math.abs(mov[1])];
          const maxDist = Math.max(dist[0], dist[1]);
          const isTap = maxDist < (opts.tapThreshold ?? 3);

          handlerRef.current({
            xy: [event.clientX, event.clientY],
            initial: [...s.startXY],
            movement: mov,
            delta: mov,
            distance: dist,
            direction: [sign(mov[0]), sign(mov[1])],
            velocity: [0, 0],
            elapsedTime: event.timeStamp - s.startTimestamp,
            first: true,
            last: true,
            active: false,
            tap: isTap,
            canceled: false,
            cancel,
            event,
          });
        }
        resetDrag();
        return;
      }

      const rawMovement: Vector2 = [event.clientX - s.startXY[0], event.clientY - s.startXY[1]];
      const movement = applyAxisConstraint(rawMovement);
      const distance: Vector2 = [Math.abs(movement[0]), Math.abs(movement[1])];
      const rawDelta: Vector2 = [event.clientX - s.prevXY[0], event.clientY - s.prevXY[1]];
      const delta = applyAxisConstraint(rawDelta);

      const timeSinceLastMove = event.timeStamp - s.prevTimestamp;
      const velocity: Vector2 = timeSinceLastMove > VELOCITY_DECAY_MS ? [0, 0] : s.lastVelocity;

      const maxDistance = Math.max(distance[0], distance[1]);
      const tap = opts.filterTaps === true && maxDistance < (opts.tapThreshold ?? 3);

      handlerRef.current({
        xy: [event.clientX, event.clientY],
        initial: [...s.startXY],
        movement,
        delta,
        distance,
        direction: [sign(delta[0]), sign(delta[1])],
        velocity,
        elapsedTime: event.timeStamp - s.startTimestamp,
        first: !s.firstFired,
        last: true,
        active: false,
        tap,
        canceled: false,
        cancel,
        event,
      });

      resetDrag();
    };

    const onPointerCancel = (event: PointerEvent) => {
      const s = stateRef.current;
      if (!s.isActive || event.pointerId !== s.pointerId) {
        return;
      }

      const rawMovement: Vector2 = [event.clientX - s.startXY[0], event.clientY - s.startXY[1]];
      const movement = applyAxisConstraint(rawMovement);

      handlerRef.current({
        xy: [event.clientX, event.clientY],
        initial: [...s.startXY],
        movement,
        delta: [0, 0],
        distance: [Math.abs(movement[0]), Math.abs(movement[1])],
        direction: [0, 0],
        velocity: [0, 0],
        elapsedTime: event.timeStamp - s.startTimestamp,
        first: !s.firstFired,
        last: true,
        active: false,
        tap: false,
        canceled: true,
        cancel,
        event,
      });

      resetDrag();
    };

    node.addEventListener('pointerdown', onPointerDown, {
      signal: elementController.signal,
    });

    return () => {
      elementController.abort();
      documentControllerRef.current?.abort();
      documentControllerRef.current = null;
      if (stateRef.current.isActive) {
        stateRef.current.isActive = false;
        setActive(false);
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
      }
    };
  }, []);

  return { ref: refCallback, active };
}

export namespace useDrag {
  export type State = UseDragState;
  export type Options = UseDragOptions;
  export type ReturnValue<T extends HTMLElement = any> = UseDragReturnValue<T>;
}
