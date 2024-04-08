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
});
