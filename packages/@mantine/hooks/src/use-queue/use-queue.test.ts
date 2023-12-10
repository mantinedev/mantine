import { act, renderHook } from '@testing-library/react';
import { useQueue } from './use-queue';

describe('@mantine/hooks/use-queue', () => {
  it('correctly distributes initial values when limit is not reached', () => {
    const hook = renderHook(() => useQueue({ initialValues: [1], limit: 2 }));
    expect(hook.result.current.state).toStrictEqual([1]);
    expect(hook.result.current.queue).toStrictEqual([]);
  });

  it('correctly distributes initial values when limit is reached', () => {
    const hook = renderHook(() => useQueue({ initialValues: [1, 2, 3, 4, 5], limit: 2 }));
    expect(hook.result.current.state).toStrictEqual([1, 2]);
    expect(hook.result.current.queue).toStrictEqual([3, 4, 5]);
  });

  it('adds items to the state when limit is not reached', () => {
    const hook = renderHook(() => useQueue({ initialValues: [1], limit: 2 }));
    act(() => hook.result.current.add(2));
    expect(hook.result.current.state).toStrictEqual([1, 2]);
    expect(hook.result.current.queue).toStrictEqual([]);
  });

  it('adds items to the queue when limit is reached', () => {
    const hook = renderHook(() => useQueue({ initialValues: [1, 2], limit: 2 }));
    act(() => hook.result.current.add(3, 4, 5));
    expect(hook.result.current.state).toStrictEqual([1, 2]);
    expect(hook.result.current.queue).toStrictEqual([3, 4, 5]);
  });

  it('correctly applies given update to state without queue', () => {
    const hook = renderHook(() => useQueue({ initialValues: [1, 2], limit: 3 }));
    act(() => hook.result.current.update((state) => state.filter((i) => i % 2)));

    expect(hook.result.current.state).toStrictEqual([1]);
    expect(hook.result.current.queue).toStrictEqual([]);
  });

  it('correctly applies given update to state with queue', () => {
    const hook = renderHook(() => useQueue({ initialValues: [1, 2, 3, 4, 5, 6, 7, 8], limit: 3 }));
    act(() => hook.result.current.update((state) => state.filter((i) => i % 2)));

    expect(hook.result.current.state).toStrictEqual([1, 3, 5]);
    expect(hook.result.current.queue).toStrictEqual([7]);
  });

  it('puts extra items to the queue if state has extra items after update', () => {
    const hook = renderHook(() => useQueue<number>({ initialValues: [], limit: 3 }));
    act(() => hook.result.current.update(() => [1, 2, 3, 4, 5, 6, 7, 8]));
    expect(hook.result.current.state).toStrictEqual([1, 2, 3]);
    expect(hook.result.current.queue).toStrictEqual([4, 5, 6, 7, 8]);
  });

  it('cleans queue with cleanQueue handlers', () => {
    const hook = renderHook(() => useQueue({ initialValues: [1, 2, 3, 4], limit: 2 }));
    act(() => hook.result.current.cleanQueue());
    expect(hook.result.current.state).toStrictEqual([1, 2]);
    expect(hook.result.current.queue).toStrictEqual([]);
  });
});
