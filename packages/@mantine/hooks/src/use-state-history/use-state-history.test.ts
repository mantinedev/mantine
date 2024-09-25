import { act, renderHook } from '@testing-library/react';
import { useStateHistory } from './use-state-history';

describe('@mantine/hooks/use-state-history', () => {
  it('initializes with the given value', () => {
    const hook = renderHook(() => useStateHistory(1));
    expect(hook.result.current[0]).toBe(1);
  });

  it('remembers previous state in history', () => {
    const hook = renderHook(() => useStateHistory(1));
    act(() => hook.result.current[1].set(2));
    expect(hook.result.current[0]).toBe(2);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2], current: 1 });

    act(() => hook.result.current[1].set(3));
    expect(hook.result.current[0]).toBe(3);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3], current: 2 });
  });

  it('allows going back and forward in history', () => {
    const hook = renderHook(() => useStateHistory(1));
    act(() => hook.result.current[1].set(2));
    act(() => hook.result.current[1].set(3));
    act(() => hook.result.current[1].set(4));

    expect(hook.result.current[0]).toBe(4);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 3 });

    act(() => hook.result.current[1].back());
    expect(hook.result.current[0]).toBe(3);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 2 });

    act(() => hook.result.current[1].back());
    expect(hook.result.current[0]).toBe(2);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 1 });

    act(() => hook.result.current[1].forward());
    expect(hook.result.current[0]).toBe(3);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 2 });

    act(() => hook.result.current[1].forward());
    expect(hook.result.current[0]).toBe(4);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 3 });
  });

  it('does not allow to go back/forward beyond history', () => {
    const hook = renderHook(() => useStateHistory(1));
    act(() => hook.result.current[1].set(2));
    act(() => hook.result.current[1].set(3));
    act(() => hook.result.current[1].set(4));

    expect(hook.result.current[0]).toBe(4);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 3 });

    act(() => hook.result.current[1].forward());
    act(() => hook.result.current[1].forward());
    act(() => hook.result.current[1].forward());
    expect(hook.result.current[0]).toBe(4);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 3 });

    act(() => hook.result.current[1].back(3));
    expect(hook.result.current[0]).toBe(1);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 0 });

    act(() => hook.result.current[1].back());
    act(() => hook.result.current[1].back());
    act(() => hook.result.current[1].back());
    expect(hook.result.current[0]).toBe(1);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 2, 3, 4], current: 0 });
  });

  it('erase forward history when new value is set', () => {
    const hook = renderHook(() => useStateHistory(1));
    act(() => hook.result.current[1].set(2));
    act(() => hook.result.current[1].set(3));
    act(() => hook.result.current[1].set(4));
    act(() => hook.result.current[1].back());
    act(() => hook.result.current[1].back());
    act(() => hook.result.current[1].back());
    act(() => hook.result.current[1].set(5));

    expect(hook.result.current[0]).toBe(5);
    expect(hook.result.current[2]).toStrictEqual({ history: [1, 5], current: 1 });
  });

  it('resets history', () => {
    const hook = renderHook(() => useStateHistory(1));
    act(() => hook.result.current[1].set(2));
    act(() => hook.result.current[1].set(3));
    act(() => hook.result.current[1].set(4));
    act(() => hook.result.current[1].reset());

    expect(hook.result.current[0]).toBe(1);
    expect(hook.result.current[2]).toStrictEqual({ history: [1], current: 0 });
  });
});
