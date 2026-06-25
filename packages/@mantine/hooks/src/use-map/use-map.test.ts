import { act, renderHook } from '@testing-library/react';
import { useMap } from './use-map';

describe('@mantine/hooks/use-map', () => {
  it('has correct initial state', () => {
    const hook = renderHook(() =>
      useMap([
        ['a', 1],
        ['b', 2],
      ])
    );
    expect(hook.result.current.get('a')).toBe(1);
    expect(hook.result.current.get('b')).toBe(2);
  });

  it('sets values', () => {
    const hook = renderHook(() => useMap());
    act(() => hook.result.current.set('a', 1));
    act(() => hook.result.current.set('b', 2));
    expect(hook.result.current.get('a')).toBe(1);
    expect(hook.result.current.get('b')).toBe(2);
  });

  it('deletes values', () => {
    const hook = renderHook(() =>
      useMap([
        ['a', 1],
        ['b', 2],
      ])
    );
    act(() => hook.result.current.delete('a'));
    expect(hook.result.current.get('a')).toBeUndefined();
    expect(hook.result.current.get('b')).toBe(2);
  });

  it('clears map', () => {
    const hook = renderHook(() =>
      useMap([
        ['a', 1],
        ['b', 2],
      ])
    );
    act(() => hook.result.current.clear());
    expect(hook.result.current.get('a')).toBeUndefined();
    expect(hook.result.current.get('b')).toBeUndefined();
  });

  /*
   * React Compiler compatibility guard.
   *
   * The hook must return a NEW Map instance after every mutation. React Compiler memoizes
   * consumer-side values derived from the map (e.g. `map.size`, `[...map]`) keyed on the map's
   * identity; a stable identity (the previous ref-based implementation) let it serve stale derived
   * values forever. We cannot run the compiler in jest, but we can assert the identity invariant it
   * relies on, plus that synchronous multi-mutation still accumulates (the in-place mutation that
   * the clone-per-mutation approach must not regress).
   */
  it('returns a new instance identity after each mutation', () => {
    const hook = renderHook(() => useMap<string, number>([['a', 1]]));

    const afterInit = hook.result.current;
    act(() => hook.result.current.set('b', 2));
    expect(hook.result.current).not.toBe(afterInit);

    const afterSet = hook.result.current;
    act(() => hook.result.current.delete('b'));
    expect(hook.result.current).not.toBe(afterSet);

    const afterDelete = hook.result.current;
    act(() => hook.result.current.clear());
    expect(hook.result.current).not.toBe(afterDelete);
  });

  it('accumulates multiple synchronous mutations', () => {
    const hook = renderHook(() => useMap<string, number>());
    act(() => {
      hook.result.current.set('a', 1);
      hook.result.current.set('b', 2);
    });
    expect(hook.result.current.get('a')).toBe(1);
    expect(hook.result.current.get('b')).toBe(2);
  });
});
