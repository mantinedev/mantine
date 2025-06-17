import { act, renderHook } from '@testing-library/react';
import { useSet } from './use-set';

describe('@mantine/hooks/use-set', () => {
  it('has correct initial state', () => {
    const hook = renderHook(() => useSet([1, 2]));
    expect(hook.result.current.has(1)).toBe(true);
    expect(hook.result.current.has(2)).toBe(true);
  });

  it('adds values', () => {
    const hook = renderHook(() => useSet());
    act(() => hook.result.current.add(1));
    act(() => hook.result.current.add(2));
    expect(hook.result.current.has(1)).toBe(true);
    expect(hook.result.current.has(2)).toBe(true);
  });

  it('deletes values', () => {
    const hook = renderHook(() => useSet([1, 2]));
    act(() => hook.result.current.delete(1));
    expect(hook.result.current.has(1)).toBe(false);
    expect(hook.result.current.has(2)).toBe(true);
  });

  it('clears set', () => {
    const hook = renderHook(() => useSet([1, 2]));
    act(() => hook.result.current.clear());
    expect(hook.result.current.has(1)).toBe(false);
    expect(hook.result.current.has(2)).toBe(false);
  });

  it('unions with another set and does not mutate the original set', () => {
    const hook = renderHook(() => useSet([1, 2]));
    const otherSet = new Set([2, 3, 4]);
    const unionResult = (hook.result.current as any).union(otherSet);

    expect(unionResult.has(1)).toBe(true);
    expect(unionResult.has(2)).toBe(true);
    expect(unionResult.has(3)).toBe(true);
    expect(unionResult.has(4)).toBe(true);
    expect(unionResult.size).toBe(4);
  });
});
