import { act, renderHook } from '@testing-library/react';
import { useDebouncedState } from './use-debounced-state';

describe('use-debounced-state', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  let timeoutCallback: () => void;
  const setTimeout = jest.spyOn(window, 'setTimeout').mockImplementation(((cb: () => void) => {
    timeoutCallback = cb;
    return 1;
  }) as any);
  const clearTimeout = jest.spyOn(window, 'clearTimeout').mockReturnValue();

  it('should run without errors', () => {
    expect(clearTimeout).toHaveBeenCalledTimes(0);
    renderHook(() => useDebouncedState('asdf1', 100));
    renderHook(() => useDebouncedState('asdf1', 100, { leading: false }));
    renderHook(() => useDebouncedState('asdf1', 100, { leading: true }));
  });

  it('should debounce value with leading=false', () => {
    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(clearTimeout).toHaveBeenCalledTimes(0);

    const hook = renderHook(() => useDebouncedState('test1', 100));
    expect(hook.result.current[0]).toEqual('test1');

    act(() => hook.result.current[1]('test2'));
    expect(hook.result.current[0]).toEqual('test1');

    act(() => hook.result.current[1]('test3'));
    expect(hook.result.current[0]).toEqual('test1');

    act(() => timeoutCallback());
    expect(hook.result.current[0]).toEqual('test3');

    act(() => hook.result.current[1]((prev) => `${prev}0`));
    expect(hook.result.current[0]).toEqual('test3');

    act(() => timeoutCallback());
    expect(hook.result.current[0]).toEqual('test30');

    clearTimeout.mockReset();
    expect(clearTimeout).toHaveBeenCalledTimes(0);
    act(() => hook.unmount());
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });

  it('should debounce value with leading=true', () => {
    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(clearTimeout).toHaveBeenCalledTimes(0);

    const hook = renderHook(() => useDebouncedState('test1', 100, { leading: true }));
    expect(hook.result.current[0]).toEqual('test1');

    act(() => hook.result.current[1]('test2'));
    expect(hook.result.current[0]).toEqual('test2');

    act(() => hook.result.current[1]('test3'));
    expect(hook.result.current[0]).toEqual('test2');

    act(() => timeoutCallback());
    expect(hook.result.current[0]).toEqual('test3');

    clearTimeout.mockReset();
    expect(clearTimeout).toHaveBeenCalledTimes(0);
    act(() => hook.unmount());
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});
