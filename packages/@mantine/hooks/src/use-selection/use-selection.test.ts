import { act, renderHook } from '@testing-library/react';
import { useSelection } from './use-selection';

describe('@mantine/hooks/use-selection', () => {
  const initialData = [1, 2, 3, 4, 5];
  const objectData = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 3, value: 'c' },
  ];

  it('initializes with an empty selection', () => {
    const { result } = renderHook(() => useSelection(initialData));
    const [selected] = result.current;
    expect(selected).toEqual([]);
  });

  it('selects an item', () => {
    const { result } = renderHook(() => useSelection(initialData));
    act(() => {
      result.current[1].select(1);
    });
    expect(result.current[0]).toEqual([1]);
    act(() => {
      result.current[1].select(3);
    });
    expect(result.current[0]).toEqual([1, 3]);
  });

  it('deselects an item', () => {
    const { result } = renderHook(() => useSelection(initialData));
    act(() => {
      result.current[1].select(1);
      result.current[1].select(3);
    });
    expect(result.current[0]).toEqual([1, 3]);
    act(() => {
      result.current[1].deselect(1);
    });
    expect(result.current[0]).toEqual([3]);
  });

  it('toggles an item selection', () => {
    const { result } = renderHook(() => useSelection(initialData));
    act(() => {
      result.current[1].toggle(1);
    });
    expect(result.current[0]).toEqual([1]);
    act(() => {
      result.current[1].toggle(1);
    });
    expect(result.current[0]).toEqual([]);
    act(() => {
      result.current[1].toggle(2);
    });
    expect(result.current[0]).toEqual([2]);
  });

  it('checks if all items are selected', () => {
    const { result } = renderHook(() => useSelection(initialData));
    expect(result.current[1].isAllSelected()).toBe(false);
    act(() => {
      initialData.forEach((item) => result.current[1].select(item));
    });
    expect(result.current[1].isAllSelected()).toBe(true);
    act(() => {
      result.current[1].deselect(1);
    });
    expect(result.current[1].isAllSelected()).toBe(false);
  });

  it('isAllSelected returns false if data is empty', () => {
    const { result } = renderHook(() => useSelection([]));
    expect(result.current[1].isAllSelected()).toBe(false);
  });

  it('checks if some items are selected', () => {
    const { result } = renderHook(() => useSelection(initialData));
    expect(result.current[1].isSomeSelected()).toBe(false);
    act(() => {
      result.current[1].select(1);
    });
    expect(result.current[1].isSomeSelected()).toBe(true);
    act(() => {
      initialData.forEach((item) => result.current[1].select(item));
    });
    expect(result.current[1].isSomeSelected()).toBe(true);
    act(() => {
      result.current[1].resetSelection();
    });
    expect(result.current[1].isSomeSelected()).toBe(false);
  });

  it('sets selection to a given list', () => {
    const { result } = renderHook(() => useSelection(initialData));
    act(() => {
      result.current[1].setSelection([1, 2, 3]);
    });
    expect(result.current[0]).toEqual([1, 2, 3]);
    expect(result.current[1].isSomeSelected()).toBe(true);
    expect(result.current[1].isAllSelected()).toBe(false);
  });

  it('resets selection to an empty array', () => {
    const { result } = renderHook(() => useSelection(initialData));
    act(() => {
      result.current[1].setSelection([1, 2, 3]);
    });
    expect(result.current[0]).toEqual([1, 2, 3]);
    act(() => {
      result.current[1].resetSelection();
    });
    expect(result.current[0]).toEqual([]);
    expect(result.current[1].isSomeSelected()).toBe(false);
    expect(result.current[1].isAllSelected()).toBe(false);
  });

  it('handles object data correctly', () => {
    const { result } = renderHook(() => useSelection(objectData));
    const item1 = objectData[0];
    const item2 = objectData[1];

    act(() => {
      result.current[1].select(item1);
    });
    expect(result.current[0]).toEqual([item1]);

    act(() => {
      result.current[1].toggle(item2);
    });
    expect(result.current[0]).toEqual([item1, item2]);

    act(() => {
      result.current[1].deselect(item1);
    });
    expect(result.current[0]).toEqual([item2]);

    expect(result.current[1].isSomeSelected()).toBe(true);
    expect(result.current[1].isAllSelected()).toBe(false);

    act(() => {
      result.current[1].setSelection(objectData);
    });
    expect(result.current[1].isAllSelected()).toBe(true);
  });

  it('handlers maintain referential equality', () => {
    const { result, rerender } = renderHook(() => useSelection(initialData));
    const initialHandlers = result.current[1];

    rerender();

    const newHandlers = result.current[1];

    expect(newHandlers.select).toBe(initialHandlers.select);
    expect(newHandlers.deselect).toBe(initialHandlers.deselect);
    expect(newHandlers.toggle).toBe(initialHandlers.toggle);
    expect(newHandlers.isAllSelected).toBe(initialHandlers.isAllSelected); // This will fail if data or selected changes
    expect(newHandlers.isSomeSelected).toBe(initialHandlers.isSomeSelected); // This will fail if data or selected changes
    expect(newHandlers.setSelection).toBe(initialHandlers.setSelection);
    expect(newHandlers.resetSelection).toBe(initialHandlers.resetSelection);
  });

  it('isAllSelected and isSomeSelected update when data prop changes', () => {
    let currentData = [1, 2];
    const { result, rerender } = renderHook(() => useSelection(currentData));

    act(() => {
      result.current[1].setSelection([1, 2]);
    });
    expect(result.current[1].isAllSelected()).toBe(true);

    currentData = [1, 2, 3];
    rerender(); // Rerender with new data prop

    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(true); // Still true because [1,2] are selected

    act(() => {
      result.current[1].select(3);
    });
    expect(result.current[1].isAllSelected()).toBe(true);
  });
});
