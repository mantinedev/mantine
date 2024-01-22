import { renderHook } from '@testing-library/react';
import { useShallowEffect } from './use-shallow-effect';

describe('@mantine/hooks/use-shallow-effect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('is called on initial render', () => {
    const spy = jest.fn();
    renderHook(() => useShallowEffect(spy, []));
    expect(spy).toHaveBeenCalled();
  });

  it('is called without dependencies', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useShallowEffect(spy));
    expect(spy).toHaveBeenCalled();

    hook.rerender();
    hook.rerender();
    expect(spy.mock.calls.length).toBe(3);
  });

  it('is called with an empty dependency array', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useShallowEffect(spy, []));
    expect(spy).toHaveBeenCalled();
    hook.rerender();
    hook.rerender();
    expect(spy.mock.calls.length).toBe(1);
  });

  it('is called with a non-empty dependency array on rerenders', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: { cb: spy, deps: [{ a: 1 }] },
    });
    expect(spy).toHaveBeenCalled();

    hook.rerender({ cb: spy, deps: [{ a: 1 }] });
    expect(spy.mock.calls.length).toBe(1);
  });

  it('is called with the same object on rerenders', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: { cb: spy, deps: [{ a: 1 }] },
    });
    expect(spy).toHaveBeenCalled();

    hook.rerender({ cb: spy, deps: [{ a: 1 }] });
    hook.rerender({ cb: spy, deps: [{ a: 1 }] });
    expect(spy.mock.calls.length).toBe(1);
  });
});
