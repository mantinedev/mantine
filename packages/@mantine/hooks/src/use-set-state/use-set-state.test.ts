import { act, renderHook } from '@testing-library/react';
import { useSetState } from './use-set-state';

const data = {
  a: 1,
  b: 'test',
  c: [1, 2, 3],
};

describe('@mantine/hooks/use-set-state', () => {
  it('returns correct initial state', () => {
    const hook = renderHook(() => useSetState(data));
    expect(hook.result.current[0]).toStrictEqual({ a: 1, b: 'test', c: [1, 2, 3] });
  });

  it('sets state with given state partial', () => {
    const hook = renderHook(() => useSetState(data));
    act(() => hook.result.current[1]({ a: 2 }));
    expect(hook.result.current[0]).toStrictEqual({ ...data, a: 2 });

    act(() => hook.result.current[1]({ a: 3, b: 'test-2' }));
    expect(hook.result.current[0]).toStrictEqual({ ...data, a: 3, b: 'test-2' });
  });

  it('sets state with state function', () => {
    const hook = renderHook(() => useSetState(data));
    act(() => hook.result.current[1]((current) => ({ a: current.a + 1 })));
    expect(hook.result.current[0]).toStrictEqual({ ...data, a: 2 });
  });
});
