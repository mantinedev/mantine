import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './use-counter';

describe('@mantine/hooks/use-counter', () => {
  it('correctly returns initial state', () => {
    const hook = renderHook(() => useCounter(20, { min: 0, max: 100 }));
    expect(hook.result.current[0]).toBe(20);
  });

  it('correctly performs operations without initialValue or options', () => {
    const hook = renderHook(() => useCounter());
    expect(hook.result.current[0]).toBe(0);

    act(() => hook.result.current[1].increment(100));
    expect(hook.result.current[0]).toBe(100);

    act(() => hook.result.current[1].decrement(20));
    expect(hook.result.current[0]).toBe(80);

    act(() => hook.result.current[1].set(5));
    expect(hook.result.current[0]).toBe(5);

    act(() => hook.result.current[1].reset());
    expect(hook.result.current[0]).toBe(0);
  });

  it('correctly performs operations with initialValue and options', () => {
    const hook = renderHook(() => useCounter(11, { min: -10, max: 10 }));
    expect(hook.result.current[0]).toBe(10);

    act(() => hook.result.current[1].increment(100));
    expect(hook.result.current[0]).toBe(10);

    act(() => hook.result.current[1].decrement(2));
    expect(hook.result.current[0]).toBe(8);

    act(() => hook.result.current[1].set(5));
    expect(hook.result.current[0]).toBe(5);

    act(() => hook.result.current[1].set(20));
    expect(hook.result.current[0]).toBe(10);

    act(() => hook.result.current[1].reset());
    expect(hook.result.current[0]).toBe(10);
  });

  it('correctly maintains count on rerenders', () => {
    const hook = renderHook(() => useCounter(7, { min: -10, max: 10 }));
    expect(hook.result.current[0]).toBe(7);

    act(() => hook.result.current[1].increment(100));
    expect(hook.result.current[0]).toBe(10);

    act(() => hook.result.current[1].decrement(2));
    expect(hook.result.current[0]).toBe(8);

    act(() => hook.rerender());
    expect(hook.result.current[0]).toBe(8);

    act(() => hook.result.current[1].set(5));
    expect(hook.result.current[0]).toBe(5);

    act(() => hook.result.current[1].reset());
    expect(hook.result.current[0]).toBe(7);
  });
});
