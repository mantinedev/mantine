import { act, renderHook } from '@testing-library/react';
import { useSelection } from './use-selection';

describe('@mantine/hooks/use-selection', () => {
  it('correctly returns initial state for an empty data array', () => {
    const data: number[] = [];
    const { result } = renderHook(() => useSelection({ data }));

    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(false);
  });

  it('correctly returns initial state for a non-empty data array', () => {
    const data: number[] = [1, 2, 3];
    const { result } = renderHook(() => useSelection({ data }));

    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(false);
  });

  it('correctly initializes with defaultSelection', () => {
    const data = [1, 2, 3, 4, 5];
    const defaultSelection = [1, 3];
    const { result } = renderHook(() => useSelection({ data, defaultSelection }));

    expect(result.current[0]).toEqual(expect.arrayContaining(defaultSelection));
    expect(result.current[0]).toHaveLength(2);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(true);
  });

  it('correctly selects an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection({ data }));

    expect(result.current[0]).toStrictEqual([]);

    act(() => result.current[1].select(1));
    expect(result.current[0]).toStrictEqual([1]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(true);

    act(() => result.current[1].select(1));
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('correctly deselects an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection({ data }));

    act(() => {
      result.current[1].select(1);
      result.current[1].select(2);
    });
    expect(result.current[0]).toEqual(expect.arrayContaining([1, 2]));
    expect(result.current[0]).toHaveLength(2);

    act(() => result.current[1].deselect(1));
    expect(result.current[0]).toStrictEqual([2]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(true);

    act(() => result.current[1].deselect(1));
    expect(result.current[0]).toStrictEqual([2]);
  });

  it('correctly toggles an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection({ data }));

    expect(result.current[0]).toStrictEqual([]);

    act(() => result.current[1].toggle(1));
    expect(result.current[0]).toStrictEqual([1]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(true);

    act(() => result.current[1].toggle(1));
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(false);
  });

  it('correctly resets the selection', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection({ data }));

    act(() => {
      result.current[1].select(1);
      result.current[1].select(2);
    });
    expect(result.current[0]).toEqual(expect.arrayContaining([1, 2]));
    expect(result.current[0]).toHaveLength(2);
    expect(result.current[1].isSomeSelected()).toBe(true);

    act(() => result.current[1].resetSelection());
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(false);
  });

  it('isAllSelected is true when all items are selected', () => {
    const data: string[] = ['a', 'b', 'c'];
    const { result } = renderHook(() => useSelection({ data }));

    expect(result.current[0]).toStrictEqual([]);

    act(() => {
      result.current[1].select('a');
      result.current[1].select('b');
      result.current[1].select('c');
    });
    expect(result.current[0]).toEqual(expect.arrayContaining(['a', 'b', 'c']));
    expect(result.current[0]).toHaveLength(3);
    expect(result.current[1].isAllSelected()).toBe(true);
    expect(result.current[1].isSomeSelected()).toBe(true);
  });

  it('allows direct setting of selection via setSelection', () => {
    const data: number[] = [10, 20, 30];
    const { result } = renderHook(() => useSelection({ data }));

    expect(result.current[0]).toStrictEqual([]);

    act(() => result.current[1].setSelection([10, 30]));
    expect(result.current[0]).toEqual(expect.arrayContaining([10, 30]));
    expect(result.current[0]).toHaveLength(2);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(true);

    act(() => result.current[1].setSelection([]));
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(false);

    act(() => result.current[1].setSelection([10, 20, 30]));
    expect(result.current[0]).toEqual(expect.arrayContaining([10, 20, 30]));
    expect(result.current[0]).toHaveLength(3);
    expect(result.current[1].isAllSelected()).toBe(true);
    expect(result.current[1].isSomeSelected()).toBe(true);
  });

  it('does not reset selection when data changes and resetSelectionOnDataChange is false', () => {
    const initialData = [1, 2, 3];
    const { result, rerender } = renderHook(
      ({ data }) => useSelection({ data, resetSelectionOnDataChange: false }),
      { initialProps: { data: initialData } }
    );

    act(() => {
      result.current[1].select(1);
      result.current[1].select(2);
    });
    expect(result.current[0]).toEqual(expect.arrayContaining([1, 2]));
    expect(result.current[0]).toHaveLength(2);

    const newData = [1, 2, 3, 4, 5];
    rerender({ data: newData });

    expect(result.current[0]).toEqual(expect.arrayContaining([1, 2]));
    expect(result.current[0]).toHaveLength(2);
    expect(result.current[1].isSomeSelected()).toBe(true);
  });

  it('resets selection when data changes and resetSelectionOnDataChange is true', () => {
    const initialData = [1, 2, 3];
    const { result, rerender } = renderHook(
      ({ data }) => useSelection({ data, resetSelectionOnDataChange: true }),
      { initialProps: { data: initialData } }
    );

    act(() => {
      result.current[1].select(1);
      result.current[1].select(2);
    });
    expect(result.current[0]).toEqual(expect.arrayContaining([1, 2]));
    expect(result.current[0]).toHaveLength(2);
    expect(result.current[1].isSomeSelected()).toBe(true);

    const newData = [1, 2, 3, 4, 5];
    rerender({ data: newData });

    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1].isSomeSelected()).toBe(false);
    expect(result.current[1].isAllSelected()).toBe(false);
  });

  it('resets to empty selection when data changes and resetSelectionOnDataChange is true', () => {
    const { result, rerender } = renderHook(
      ({ data }) => useSelection({ data, defaultSelection: [1], resetSelectionOnDataChange: true }),
      { initialProps: { data: [1, 2, 3] } }
    );

    expect(result.current[0]).toStrictEqual([1]);
    rerender({ data: [1, 2, 3, 4] });
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1].isSomeSelected()).toBe(false);
  });

  it('correctly calculates isAllSelected based on data and selection lengths', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection({ data }));

    act(() => {
      result.current[1].select(1);
      result.current[1].select(2);
    });
    expect(result.current[1].isAllSelected()).toBe(false);

    act(() => result.current[1].select(3));
    expect(result.current[1].isAllSelected()).toBe(true);

    act(() => result.current[1].deselect(3));
    expect(result.current[1].isAllSelected()).toBe(false);
  });

  it('handles duplicates in defaultSelection correctly', () => {
    const data = [1, 2, 3];
    const defaultSelection = [1, 1, 2];
    const { result } = renderHook(() => useSelection({ data, defaultSelection }));

    expect(result.current[0]).toEqual(expect.arrayContaining([1, 2]));
    expect(result.current[0]).toHaveLength(2);
    expect(result.current[1].isSomeSelected()).toBe(true);
  });
});
