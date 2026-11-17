import { useEffect } from 'react';
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

  it('applies a retained mutator to the latest instance', () => {
    const hook = renderHook(() => useMap<string, number>());
    const retainedSet = hook.result.current.set;
    act(() => hook.result.current.set('a', 1));
    act(() => hook.result.current.set('b', 2));
    act(() => retainedSet('c', 3));
    expect(hook.result.current.get('a')).toBe(1);
    expect(hook.result.current.get('b')).toBe(2);
    expect(hook.result.current.get('c')).toBe(3);
  });

  it('does not trigger a re-render when the map is not changed', () => {
    let renders = 0;
    const value = { id: 1 };
    const hook = renderHook(() => {
      renders += 1;
      return useMap<string, unknown>([['a', value]]);
    });

    const initial = hook.result.current;
    act(() => hook.result.current.set('a', value));
    act(() => hook.result.current.delete('b'));
    expect(renders).toBe(1);
    expect(hook.result.current).toBe(initial);

    act(() => hook.result.current.clear());
    const afterClear = hook.result.current;
    act(() => hook.result.current.clear());
    expect(renders).toBe(2);
    expect(hook.result.current).toBe(afterClear);
  });

  it('updates when an existing key is set to a different value', () => {
    const hook = renderHook(() => useMap([['a', 1]]));
    const initial = hook.result.current;

    act(() => hook.result.current.set('a', 2));

    expect(hook.result.current).not.toBe(initial);
    expect(hook.result.current.get('a')).toBe(2);
  });

  it('does not re-run effects that depend on the map when it is not changed', () => {
    const effect = jest.fn();
    const hook = renderHook(() => {
      const map = useMap([['a', 1]]);
      useEffect(() => effect(map.size), [map]);
      return map;
    });

    act(() => hook.result.current.set('a', 1));
    act(() => hook.result.current.delete('b'));
    expect(effect).toHaveBeenCalledTimes(1);

    act(() => hook.result.current.set('b', 2));
    expect(effect).toHaveBeenCalledTimes(2);
    expect(effect).toHaveBeenLastCalledWith(2);
  });
});
