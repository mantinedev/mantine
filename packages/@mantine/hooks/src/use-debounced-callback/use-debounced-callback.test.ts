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
});
