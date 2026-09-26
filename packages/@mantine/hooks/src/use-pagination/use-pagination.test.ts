import { act, renderHook } from '@testing-library/react';
import { usePagination } from './use-pagination';

describe('@mantine/hooks/use-pagination', () => {
  it('returns the same controller until the state changes', () => {
    const hook = renderHook(() => usePagination({ total: 10 }));
    const initial = hook.result.current;
    hook.rerender();
    expect(hook.result.current).toBe(initial);

    act(() => hook.result.current.setPage(5));
    expect(hook.result.current).not.toBe(initial);
  });

  it('keeps actions stable when the state changes', () => {
    const actions = [
      'setPage',
      'next',
      'previous',
      'first',
      'last',
      'getActive',
      'getRange',
    ] as const;
    const hook = renderHook(() => usePagination({ total: 10 }));
    const initial = actions.map((action) => hook.result.current[action]);

    act(() => hook.result.current.setPage(5));
    actions.forEach((action, index) => {
      expect(hook.result.current[action]).toBe(initial[index]);
    });
  });

  it('returns active page and range from getters', () => {
    const hook = renderHook(() => usePagination({ total: 10, initialPage: 3 }));
    expect(hook.result.current.getActive()).toBe(3);
    expect(hook.result.current.getRange()).toEqual(hook.result.current.range);

    act(() => hook.result.current.setPage(7));
    expect(hook.result.current.getActive()).toBe(7);
    expect(hook.result.current.getRange()).toEqual(hook.result.current.range);
  });

  it('setPage function sets active page', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));

    act(() => result.current.setPage(5));
    expect(result.current.active).toBe(5);

    act(() => result.current.setPage(15));
    expect(result.current.active).toBe(10);

    act(() => result.current.setPage(-1));
    expect(result.current.active).toBe(1);
  });

  it('returns correct initial state', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));
    expect(result.current.range).toStrictEqual([1, 2, 3, 4, 5, 'dots', 10]);
    expect(result.current.active).toBe(1);
  });

  it('does not change range length between page changes', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));

    [...new Array(10).fill(null)].forEach(() => {
      expect(result.current.range.length).toBe(7);
      act(() => result.current.next());
    });
  });

  it('returns correct initial state with custom parameters', () => {
    const { result } = renderHook(() =>
      usePagination({
        total: 20,
        siblings: 2,
        boundaries: 2,
        initialPage: 7,
      })
    );

    expect(result.current.range).toStrictEqual([1, 2, 'dots', 5, 6, 7, 8, 9, 'dots', 19, 20]);
    expect(result.current.active).toBe(7);
  });

  it('calls onChange correctly with active page', () => {
    const spy = jest.fn();
    const { result } = renderHook(() =>
      usePagination({
        page: 7,
        onChange: spy,
        total: 20,
        siblings: 2,
        boundaries: 2,
      })
    );

    act(() => result.current.next());

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(8);
  });

  it('does not change range length between page changes with custom parameters', () => {
    const { result } = renderHook(() =>
      usePagination({
        total: 20,
        siblings: 2,
        boundaries: 2,
        initialPage: 7,
      })
    );

    [...new Array(20).fill(null)].forEach(() => {
      expect(result.current.range.length).toBe(11);

      act(() => result.current.next());
    });
  });

  it('truncates total value', () => {
    const hook = renderHook(() => usePagination({ total: 45.21 }));
    expect(hook.result.current.range).toStrictEqual([1, 2, 3, 4, 5, 'dots', 45]);
  });

  it('handles negative total value correctly', () => {
    const hook = renderHook(() => usePagination({ total: -5 }));
    expect(hook.result.current.range).toStrictEqual([1]);
  });

  it('handles startValue correctly', () => {
    const { result } = renderHook(() => usePagination({ total: 15, startValue: 5 }));
    expect(result.current.range).toStrictEqual([5, 6, 7, 8, 9, 'dots', 15]);
    expect(result.current.active).toBe(5);

    act(() => result.current.setPage(10));
    expect(result.current.active).toBe(10);
    expect(result.current.range).toStrictEqual([5, 'dots', 9, 10, 11, 'dots', 15]);

    act(() => result.current.first());
    expect(result.current.active).toBe(5);

    act(() => result.current.last());
    expect(result.current.active).toBe(15);

    act(() => result.current.setPage(3));
    expect(result.current.active).toBe(5);

    act(() => result.current.setPage(20));
    expect(result.current.active).toBe(15);
  });

  it('returns total', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));
    expect(result.current.total).toBe(10);
  });

  it('next and previous use the current page after the state changes', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));
    const { next, previous } = result.current;

    act(() => next());
    expect(result.current.active).toBe(2);

    act(() => next());
    expect(result.current.active).toBe(3);

    act(() => previous());
    expect(result.current.active).toBe(2);
  });

  it('supports consecutive calls within one batch', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));

    act(() => {
      result.current.next();
      result.current.next();
      result.current.next();
    });

    expect(result.current.active).toBe(4);

    act(() => {
      result.current.last();
      result.current.previous();
    });

    expect(result.current.active).toBe(9);
  });

  it('returns the latest page and range from getters within one batch', () => {
    const { result } = renderHook(() => usePagination({ total: 20 }));
    let active = 0;
    let range: (number | 'dots')[] = [];

    act(() => {
      result.current.setPage(10);
      active = result.current.getActive();
      range = result.current.getRange();
    });

    expect(active).toBe(10);
    expect(range).toStrictEqual([1, 'dots', 9, 10, 11, 'dots', 20]);
    expect(result.current.getRange()).toStrictEqual(range);
  });

  it('clamps consecutive calls within one batch to the total', () => {
    const { result } = renderHook(() => usePagination({ total: 3 }));

    act(() => {
      result.current.next();
      result.current.next();
      result.current.next();
    });

    expect(result.current.active).toBe(3);
  });

  it('does not write through the page in controlled mode', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => usePagination({ total: 10, page: 5, onChange }));
    let active = 0;

    act(() => {
      result.current.next();
      active = result.current.getActive();
    });

    expect(active).toBe(5);
    expect(onChange).toHaveBeenCalledWith(6);
    expect(result.current.active).toBe(5);
  });
});
