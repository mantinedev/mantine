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

  it('doesnt still call after flush if not called since', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current.flush();
    expect(callback).toHaveBeenCalledWith(1);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);
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

  // Note: this might not be desired but this is what happens
  it('flushes on option changes', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(({ delay }: { delay: number } = { delay: 100 }) =>
      useDebouncedCallback(callback, { flushOnUnmount: true, delay })
    );
    result.current(1);
    rerender({ delay: 200 });
    expect(callback).toHaveBeenCalledWith(1);
  });

  // Note: this might not be desired but this is what happens
  it('cancels on option changes', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(({ delay }: { delay: number } = { delay: 100 }) =>
      useDebouncedCallback(callback, { flushOnUnmount: false, delay })
    );
    result.current(1);
    rerender({ delay: 200 });
    jest.advanceTimersByTime(200);
    expect(callback).not.toHaveBeenCalled();
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
    expect(callback).not.toHaveBeenCalled(); // Fixed: no trailing call expected
  });

  it('resets leading after delay with leading=true', () => {
    const callback = jest.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, leading: true })
    );

    // The first call fires immediately
    result.current('a');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('a');

    // A second call during delay period should be ignored
    result.current('b');
    expect(callback).toHaveBeenCalledTimes(1); // Still only 'a'

    // After delay, no trailing execution should happen
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1); // Still only 'a'

    // After delay has passed, leading state should reset - next call fires immediately
    result.current('c');
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenNthCalledWith(2, 'c');
  });

  it('doesnt call on leading edge if leading changes from true to false', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(
      ({ leading }: { leading?: boolean } = { leading: true }) =>
        useDebouncedCallback(callback, { delay: 100, leading })
    );
    rerender({ leading: false });
    result.current(1);
    result.current(2);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does call again on leading edge if options change and it was already called before the change', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(({ delay }: { delay: number } = { delay: 100 }) =>
      useDebouncedCallback(callback, { delay, leading: true })
    );
    result.current(1);
    expect(callback).toHaveBeenCalledTimes(1);
    rerender({ delay: 200 });
    result.current(2);
    expect(callback).toHaveBeenCalledTimes(2); // Leading call

    result.current(3);
    expect(callback).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('can cancel debounced callback', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current(2);
    result.current(3);
    result.current.cancel();
    jest.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
  });

  it('can cancel after second render', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    rerender();
    result.current.cancel();
    jest.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
  });

  it('can cancel multiple times without error', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current.cancel();
    result.current.cancel();
    result.current.cancel();
    jest.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
  });

  it('can cancel and then call again', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current.cancel();
    result.current(2);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(2);
  });

  it('cancel does not affect already executed callback', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith(1);
    result.current.cancel();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('cancel resets leading flag for leading=true', () => {
    const callback = jest.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, leading: true })
    );

    // First call fires immediately
    result.current('a');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('a');

    // Second call is debounced
    result.current('b');
    expect(callback).toHaveBeenCalledTimes(1);

    // Cancel the debounced call
    result.current.cancel();
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);

    // Next call should fire immediately again since cancel reset the leading flag
    result.current('c');
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith('c');
  });

  it('cancel prevents flush from working after cancel', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current.cancel();
    result.current.flush();
    expect(callback).not.toHaveBeenCalled();
  });

  it('flush works after cancel if new call is made', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current.cancel();
    result.current(2);
    result.current.flush();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(2);
  });

  it('leading=true should suppress trailing execution', () => {
    const callback = jest.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(callback, { delay: 100, leading: true })
    );
    result.current('first');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('first');

    result.current('second');
    expect(callback).toHaveBeenCalledTimes(1); // Still only first call

    callback.mockClear();
    jest.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled(); // This is the fix

    result.current('third');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('third');
  });
});
