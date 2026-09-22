import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useStepper } from './use-stepper';

function registerSteps(
  hook: { result: { current: ReturnType<typeof useStepper> } },
  count: number,
  withCompleted = false
) {
  act(() => {
    hook.result.current.registerSteps(count, withCompleted);
  });
}

describe('@mantine/core/Stepper/use-stepper', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useStepper(),
    actions: [
      'setActive',
      'next',
      'previous',
      'first',
      'last',
      'complete',
      'isCompleted',
      'isFirst',
      'isLast',
      'getStepCount',
      'registerSteps',
    ],
    setup: (controller) => controller.registerSteps(3, true),
    changeState: (controller) => controller.next(),
  });

  it('returns 0 as the initial active step', () => {
    const hook = renderHook(() => useStepper());
    expect(hook.result.current.active).toBe(0);
  });

  it('supports uncontrolled state with defaultActive', () => {
    const hook = renderHook(() => useStepper({ defaultActive: 2 }));
    expect(hook.result.current.active).toBe(2);

    act(() => hook.result.current.setActive(1));
    expect(hook.result.current.active).toBe(1);
  });

  it('supports controlled state and calls onActiveChange without changing the value', () => {
    const onActiveChange = jest.fn();
    const hook = renderHook(() => useStepper({ active: 1, onActiveChange }));

    act(() => hook.result.current.setActive(2));
    expect(onActiveChange).toHaveBeenLastCalledWith(2);
    expect(hook.result.current.active).toBe(1);
  });

  it('setActive does not clamp the value to the number of steps', () => {
    const hook = renderHook(() => useStepper());
    registerSteps(hook, 3, true);

    act(() => hook.result.current.setActive(10));
    expect(hook.result.current.active).toBe(10);
  });

  it('next stops at the completed step when Stepper.Completed is rendered', () => {
    const hook = renderHook(() => useStepper({ defaultActive: 2 }));
    registerSteps(hook, 3, true);

    act(() => hook.result.current.next());
    expect(hook.result.current.active).toBe(3);

    act(() => hook.result.current.next());
    expect(hook.result.current.active).toBe(3);
  });

  it('next stops at the last step when Stepper.Completed is not rendered', () => {
    const hook = renderHook(() => useStepper({ defaultActive: 1 }));
    registerSteps(hook, 3, false);

    act(() => hook.result.current.next());
    expect(hook.result.current.active).toBe(2);

    act(() => hook.result.current.next());
    expect(hook.result.current.active).toBe(2);
  });

  it('next moves back to the allowed range only by not moving forward', () => {
    const hook = renderHook(() => useStepper({ defaultActive: 10 }));
    registerSteps(hook, 3, true);

    act(() => hook.result.current.next());
    expect(hook.result.current.active).toBe(10);
  });

  it('previous stops at the first step', () => {
    const hook = renderHook(() => useStepper({ defaultActive: 1 }));
    registerSteps(hook, 3, true);

    act(() => hook.result.current.previous());
    expect(hook.result.current.active).toBe(0);

    act(() => hook.result.current.previous());
    expect(hook.result.current.active).toBe(0);
  });

  it('supports consecutive calls within one batch', () => {
    const hook = renderHook(() => useStepper());
    registerSteps(hook, 5, false);

    act(() => {
      hook.result.current.next();
      hook.result.current.next();
      hook.result.current.next();
    });

    expect(hook.result.current.active).toBe(3);
  });

  it('first, last and complete use the registered steps', () => {
    const hook = renderHook(() => useStepper());
    registerSteps(hook, 4, true);

    act(() => hook.result.current.last());
    expect(hook.result.current.active).toBe(3);

    act(() => hook.result.current.complete());
    expect(hook.result.current.active).toBe(4);

    act(() => hook.result.current.first());
    expect(hook.result.current.active).toBe(0);
  });

  it('actions that require the step count are no-op when no steps are registered', () => {
    const hook = renderHook(() => useStepper({ defaultActive: 1 }));

    act(() => hook.result.current.next());
    act(() => hook.result.current.last());
    act(() => hook.result.current.complete());
    expect(hook.result.current.active).toBe(1);

    act(() => hook.result.current.previous());
    expect(hook.result.current.active).toBe(0);
  });

  it('isCompleted, isFirst and isLast reflect the active step', () => {
    const hook = renderHook(() => useStepper({ defaultActive: 1 }));
    registerSteps(hook, 3, true);

    expect(hook.result.current.isCompleted(0)).toBe(true);
    expect(hook.result.current.isCompleted(1)).toBe(false);
    expect(hook.result.current.isFirst()).toBe(false);
    expect(hook.result.current.isLast()).toBe(false);

    act(() => hook.result.current.last());
    expect(hook.result.current.isLast()).toBe(true);

    act(() => hook.result.current.first());
    expect(hook.result.current.isFirst()).toBe(true);
  });

  it('isLast returns false when no steps are registered', () => {
    const hook = renderHook(() => useStepper());
    expect(hook.result.current.isLast()).toBe(false);
    expect(hook.result.current.getStepCount()).toBe(0);
  });

  it('registerSteps ignores the cleanup of a registration that has been replaced', () => {
    const hook = renderHook(() => useStepper());
    let unregisterFirst = () => {};

    act(() => {
      unregisterFirst = hook.result.current.registerSteps(3, true);
      hook.result.current.registerSteps(5, false);
    });

    act(() => unregisterFirst());
    expect(hook.result.current.getStepCount()).toBe(5);
  });

  it('registerSteps returns a handler that resets the registered steps', () => {
    const hook = renderHook(() => useStepper());
    let unregister = () => {};

    act(() => {
      unregister = hook.result.current.registerSteps(3, true);
    });

    expect(hook.result.current.getStepCount()).toBe(3);

    act(() => unregister());
    expect(hook.result.current.getStepCount()).toBe(0);
  });
});
