import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useUncontrolled } from '@mantine/hooks';

export interface StepperControllerOptions {
  /** Controlled index of the active step */
  active?: number;

  /** Uncontrolled index of the active step initial value @default 0 */
  defaultActive?: number;

  /** Called when the active step index changes */
  onActiveChange?: (active: number) => void;
}

export interface StepperController {
  /** Index of the active step */
  active: number;

  /** Returns the index of the active step */
  getActive: () => number;

  /** Sets the index of the active step, the value is not clamped to the number of steps */
  setActive: (active: number) => void;

  /** Moves to the next step, stops at the last step or at `Stepper.Completed` if it is rendered */
  next: () => void;

  /** Moves to the previous step, stops at the first step */
  previous: () => void;

  /** Moves to the first step */
  first: () => void;

  /** Moves to the last step */
  last: () => void;

  /** Moves past the last step, renders `Stepper.Completed` if it is present */
  complete: () => void;

  /** Returns `true` if the given step index has been passed */
  isCompleted: (step: number) => boolean;

  /** Returns `true` if the first step is active */
  isFirst: () => boolean;

  /** Returns `true` if the last step is active */
  isLast: () => boolean;

  /** Returns the number of `Stepper.Step` components rendered by the associated `Stepper` */
  getStepCount: () => number;

  /** Registers the steps rendered by the associated component, used internally by `Stepper` */
  registerSteps: (count: number, withCompleted: boolean) => () => void;
}

const EMPTY_STEPS = { count: 0, withCompleted: false };

export function useStepper(options: StepperControllerOptions = {}): StepperController {
  const { active: activeProp, defaultActive, onActiveChange } = options;

  const [active, setActiveState] = useUncontrolled({
    value: activeProp,
    defaultValue: defaultActive,
    finalValue: 0,
    onChange: onActiveChange,
  });

  const stepsRef = useRef(EMPTY_STEPS);
  const activeRef = useRef(active);
  activeRef.current = active;

  const setActive = useCallbackRef((next: number) => {
    if (activeProp === undefined) {
      activeRef.current = next;
    }

    setActiveState(next);
  });

  const next = useCallbackRef(() => {
    const { count, withCompleted } = stepsRef.current;

    if (count === 0) {
      return;
    }

    const maxActive = withCompleted ? count : count - 1;

    if (activeRef.current >= maxActive) {
      return;
    }

    setActive(activeRef.current + 1);
  });

  const previous = useCallbackRef(() => {
    if (activeRef.current <= 0) {
      return;
    }

    setActive(activeRef.current - 1);
  });

  const first = useCallbackRef(() => {
    setActive(0);
  });

  const last = useCallbackRef(() => {
    if (stepsRef.current.count === 0) {
      return;
    }

    setActive(stepsRef.current.count - 1);
  });

  const complete = useCallbackRef(() => {
    if (stepsRef.current.count === 0) {
      return;
    }

    setActive(stepsRef.current.count);
  });

  const getActive = useCallback(() => activeRef.current, []);

  const isCompleted = useCallback((step: number) => activeRef.current > step, []);

  const isFirst = useCallback(() => activeRef.current === 0, []);

  const isLast = useCallback(
    () => stepsRef.current.count > 0 && activeRef.current === stepsRef.current.count - 1,
    []
  );

  const getStepCount = useCallback(() => stepsRef.current.count, []);

  const registerSteps = useCallback((count: number, withCompleted: boolean) => {
    const steps = { count, withCompleted };
    stepsRef.current = steps;

    return () => {
      if (stepsRef.current === steps) {
        stepsRef.current = EMPTY_STEPS;
      }
    };
  }, []);

  return useMemo(
    () => ({
      active,
      setActive,
      getActive,
      next,
      previous,
      first,
      last,
      complete,
      isCompleted,
      isFirst,
      isLast,
      getStepCount,
      registerSteps,
    }),
    [active]
  );
}
