import { renderHook } from '@testing-library/react';
import { useDebouncedCallback } from './use-debounced-callback';

describe('@mantine/hooks/use-debounced-callback', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('debounces callback with given delay', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current();
    result.current();
    result.current();
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalled();
  });

  it('calls callback with correct arguments', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current(2);
    result.current(3);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith(3);
  });

  it('can be flushed immediately', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current(2);
    result.current(3);
    result.current.flush();
    expect(callback).toHaveBeenCalledWith(3);
  });

  it('can be flushed immediately after rerender', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    rerender();
    result.current.flush();
    expect(callback).toHaveBeenCalledWith(1);
  });

  it('doesnt flush twice', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current.flush();
    expect(callback).toHaveBeenCalledWith(1);
    callback.mockClear();
    rerender();
    result.current.flush();
    expect(callback).not.toHaveBeenCalled();
  });

  it('doesnt flush after being called if not called since', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith(1);
    callback.mockClear();
    result.current.flush();
    expect(callback).not.toHaveBeenCalled();
  });

  it('can flush on unmount', () => {
    const callback = jest.fn();
    const { result, unmount } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, flushOnUnmount: true })
    );
    result.current(1);
    result.current(2);
    result.current(3);
    unmount();
    expect(callback).toHaveBeenCalledWith(3);
  });

  it('can flush on unmount after rerender', () => {
    const callback = jest.fn();
    const { result, unmount, rerender } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, flushOnUnmount: true })
    );
    result.current(1);
    result.current(2);
    result.current(3);
    rerender();
    unmount();
    expect(callback).toHaveBeenCalledWith(3);
  });

  it('does not call after unmount if timer lapsed', () => {
    const callback = jest.fn();
    const { result, unmount } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, flushOnUnmount: false })
    );
    result.current(1);
    unmount();
    jest.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
  });

  it('does not call on unmount if never called', () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, flushOnUnmount: true })
    );
    unmount();
    expect(callback).not.toHaveBeenCalled();
  });

  it('does not call on unmount if already called and not called since', () => {
    const callback = jest.fn();
    const { result, unmount } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, flushOnUnmount: true })
    );
    result.current(1);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalled();
    callback.mockClear();
    unmount();
    expect(callback).not.toHaveBeenCalled();
  });

  it('debounces callback with leading=true', () => {
    const callback = jest.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, leading: true })
    );
    result.current(1);
    expect(callback).toHaveBeenCalledWith(1);

    callback.mockClear();
    result.current(2);
    result.current(3);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith(3);
  });

  it('resets leading after flush', () => {
    const callback = jest.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, leading: true })
    );

    // The first call fires immediately
    result.current('a');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('a');

    // A second call is made. Since "leadingRef" is now false, this call is debounced and schedules a timeout.
    result.current('b');
    // The callback has still only been called once (with 'a').
    expect(callback).toHaveBeenCalledTimes(1);

    // Then we advance the timers to trigger the internal flush of the first call, executing "b"
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenNthCalledWith(2, 'b');

    // After the flush from "b", "leadingRef" resets, so the next call fires immediately again
    result.current('c');
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith('c');
  });
});
