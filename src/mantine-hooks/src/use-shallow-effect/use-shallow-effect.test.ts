import { renderHook } from '@testing-library/react-hooks';
import { useShallowEffect } from './use-shallow-effect';

describe('@mantine/hooks/use-shallow-effect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('is called on initial render', () => {
    const spy = jest.fn();
    renderHook(() => useShallowEffect(spy, []));
    expect(spy).toBeCalled();
  });

  it('is called without dependencies', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useShallowEffect(spy));
    expect(spy).toBeCalled();

    hook.rerender();
    hook.rerender();
    expect(spy.mock.calls.length).toBe(3);
  });

  it('is called with primitive values on rerenders', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: { cb: spy, deps: [1, 'initial'] },
    });
    expect(spy).toBeCalled();

    hook.rerender();
    hook.rerender();
    expect(spy.mock.calls.length).toBe(1);

    hook.rerender({ cb: spy, deps: [2, 'initial'] });
    expect(spy.mock.calls.length).toBe(2);

    hook.rerender({ cb: spy, deps: [1, 'changed'] });
    expect(spy.mock.calls.length).toBe(3);
  });

  it('is called with an empty dependency array', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useShallowEffect(spy, []));
    expect(spy).toBeCalled();
    hook.rerender();
    hook.rerender();
    expect(spy.mock.calls.length).toBe(1);
  });

  it('is called with a non-empty dependency array on rerenders', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: { cb: spy, deps: [{ a: 1 }] },
    });
    expect(spy).toBeCalled();

    hook.rerender({ cb: spy, deps: [{ a: 1 }] });
    expect(spy.mock.calls.length).toBe(1);
  });

  it('is called with the same object on rerenders', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: { cb: spy, deps: [{ a: 1 }] },
    });
    expect(spy).toBeCalled();

    hook.rerender({ cb: spy, deps: [{ a: 1 }] });
    hook.rerender({ cb: spy, deps: [{ a: 1 }] });
    expect(spy.mock.calls.length).toBe(1);
  });

  it('is called with the modified object on rerenders', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: { cb: spy, deps: [{ a: 1 }] },
    });
    expect(spy).toBeCalled();

    hook.rerender({ cb: spy, deps: [{ a: 1, b: 1 } as any] });
    expect(spy).toBeCalled();

    hook.rerender({ cb: spy, deps: [{} as any] });
    expect(spy.mock.calls.length).toBe(3);

    hook.rerender({ cb: spy, deps: [{} as any] });
    expect(spy.mock.calls.length).toBe(3);
  });

  it('is called with the modified objects on rerenders', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: {
        cb: spy,
        deps: [{ a: 1 }, { a: 1 }],
      },
    });
    expect(spy).toBeCalled();

    hook.rerender({ cb: spy, deps: [{ a: 1 }, { a: 1 }] });
    expect(spy.mock.calls.length).toBe(1);

    hook.rerender({ cb: spy, deps: [{ b: 1 } as any, { a: 1 }] });
    expect(spy.mock.calls.length).toBe(2);

    hook.rerender();
    expect(spy.mock.calls.length).toBe(2);

    hook.rerender({ cb: spy, deps: [{ a: 1, b: 1 } as any] });
    expect(spy.mock.calls.length).toBe(3);
  });

  it('is called with the modified array on rerenders (array(s) in dependency array)', () => {
    const spy = jest.fn();
    const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
      initialProps: { cb: spy, deps: [[1, 2]] },
    });
    expect(spy).toBeCalled();

    hook.rerender({ cb: spy, deps: [[1, 2, 3]] });
    expect(spy.mock.calls.length).toBe(2);

    hook.rerender();
    expect(spy.mock.calls.length).toBe(2);
  });
});
