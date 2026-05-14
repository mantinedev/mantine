import { renderHook } from '@testing-library/react';
import { useDidUpdate } from './use-did-update';

describe('@mantine/hooks/use-did-update', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('calls `fn` on `dependencies` change', () => {
    const fn = jest.fn();
    let dependency = '';
    const { rerender } = renderHook(() => useDidUpdate(fn, [dependency]));
    expect(fn).not.toHaveBeenCalled();
    //Change dependency and rerender
    dependency = 'foo';
    rerender();
    expect(fn).toHaveBeenCalled();
  });

  it('does not call `fn` on the initial mount', () => {
    const fn = jest.fn();
    renderHook(() => useDidUpdate(fn, ['value']));
    expect(fn).not.toHaveBeenCalled();
  });

  it('calls cleanup returned by `fn` before the next run', () => {
    const cleanup = jest.fn();
    let dependency = 'a';
    const { rerender } = renderHook(() => useDidUpdate(() => cleanup, [dependency]));

    dependency = 'b';
    rerender();
    expect(cleanup).not.toHaveBeenCalled();

    dependency = 'c';
    rerender();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('fires on every rerender when no dependency array is provided', () => {
    const fn = jest.fn();
    const { rerender } = renderHook(() => useDidUpdate(fn));
    expect(fn).not.toHaveBeenCalled();
    rerender();
    expect(fn).toHaveBeenCalledTimes(1);
    rerender();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
