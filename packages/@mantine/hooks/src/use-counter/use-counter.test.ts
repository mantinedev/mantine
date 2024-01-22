import { act, renderHook } from '@testing-library/react';
import { useCounter } from './use-counter';

describe('@mantine/hooks/use-counter', () => {
  it('correctly returns initial state', () => {
    const hook = renderHook(() => useCounter(20, { min: 0, max: 100 }));
    expect(hook.result.current[0]).toBe(20);
  });

  it('correctly performs operations without initialValue or options', () => {
    const hook = renderHook(() => useCounter());
    expect(hook.result.current[0]).toBe(0);

    act(() => hook.result.current[1].increment());
    expect(hook.result.current[0]).toBe(1);

    act(() => hook.result.current[1].decrement());
    expect(hook.result.current[0]).toBe(0);

    act(() => hook.result.current[1].set(5));
    expect(hook.result.current[0]).toBe(5);

    act(() => hook.result.current[1].reset());
    expect(hook.result.current[0]).toBe(0);
  });

  it('correctly performs operations with initialValue and options', () => {
    const hook = renderHook(() => useCounter(11, { min: -10, max: 10 }));
    expect(hook.result.current[0]).toBe(10);

    act(() => hook.result.current[1].increment());
    expect(hook.result.current[0]).toBe(10);

    act(() => hook.result.current[1].decrement());
    expect(hook.result.current[0]).toBe(9);

    act(() => hook.result.current[1].set(5));
    expect(hook.result.current[0]).toBe(5);

    act(() => hook.result.current[1].set(20));
    expect(hook.result.current[0]).toBe(10);

    act(() => hook.result.current[1].reset());
    expect(hook.result.current[0]).toBe(10);
  });
});
