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
    const unionResult = hook.result.current.union(otherSet);

    expect(unionResult.has(1)).toBe(true);
    expect(unionResult.has(2)).toBe(true);
    expect(unionResult.has(3)).toBe(true);
    expect(unionResult.has(4)).toBe(true);
    expect(unionResult.size).toBe(4);
  });

  it('intersects with another set and does not mutate the original set', () => {
    const hook = renderHook(() => useSet([1, 2, 3]));
    const otherSet = new Set([2, 3, 4, 5]);
    const intersectionResult = hook.result.current.intersection(otherSet);

    expect(intersectionResult.has(1)).toBe(false);
    expect(intersectionResult.has(2)).toBe(true);
    expect(intersectionResult.has(3)).toBe(true);
    expect(intersectionResult.has(4)).toBe(false);
    expect(intersectionResult.has(5)).toBe(false);
    expect(intersectionResult.size).toBe(2);

    expect(hook.result.current.has(1)).toBe(true);
    expect(hook.result.current.has(2)).toBe(true);
    expect(hook.result.current.has(3)).toBe(true);
    expect(hook.result.current.size).toBe(3);
  });

  it('finds difference with another set', () => {
    const hook = renderHook(() => useSet([1, 2, 3, 4]));
    const otherSet = new Set([3, 4, 5, 6]);
    const differenceResult = hook.result.current.difference(otherSet);

    expect(differenceResult.has(1)).toBe(true);
    expect(differenceResult.has(2)).toBe(true);
    expect(differenceResult.has(3)).toBe(false);
    expect(differenceResult.has(4)).toBe(false);
    expect(differenceResult.size).toBe(2);
  });

  it('finds symmetric difference with another set', () => {
    const hook = renderHook(() => useSet([1, 2, 3]));
    const otherSet = new Set([3, 4, 5]);
    const symmetricDifferenceResult = hook.result.current.symmetricDifference(otherSet);

    expect(symmetricDifferenceResult.has(1)).toBe(true);
    expect(symmetricDifferenceResult.has(2)).toBe(true);
    expect(symmetricDifferenceResult.has(3)).toBe(false);
    expect(symmetricDifferenceResult.has(4)).toBe(true);
    expect(symmetricDifferenceResult.has(5)).toBe(true);
    expect(symmetricDifferenceResult.size).toBe(4);
  });
});
