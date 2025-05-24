import { act, renderHook } from '@testing-library/react';
import { useSelection } from './use-selection';

describe('@mantine/hooks/use-selection', () => {
  const initialData = [1, 2, 3, 4, 5];
  const objectData = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 3, value: 'c' },
  ];

  it('initializes with an empty selection by default', () => {
    const { result } = renderHook(() => useSelection(initialData));
    const [selected] = result.current;
    expect(selected).toEqual([]);
  });

  it('initializes with provided initialSelection', () => {
    const { result } = renderHook(() => useSelection(initialData, [1, 2]));
    const [selected] = result.current;
    expect(selected).toEqual([1, 2]);
  });

  it('selects an item and maintains selected array reference on no-op', () => {
    const { result } = renderHook(() => useSelection(initialData));
    act(() => {
      result.current[1].select(1);
    });
    expect(result.current[0]).toEqual([1]);
    const selectedArrayRef = result.current[0];
    act(() => {
      result.current[1].select(1); // select already selected item
    });
    expect(result.current[0]).toEqual([1]);
    expect(result.current[0]).toBe(selectedArrayRef); // Reference should not change

    act(() => {
      result.current[1].select(3);
    });
    expect(result.current[0]).toEqual([1, 3]);
    expect(result.current[0]).not.toBe(selectedArrayRef); // Reference should change
  });

  it('deselects an item and maintains selected array reference on no-op', () => {
    const { result } = renderHook(() => useSelection(initialData, [1, 3]));
    expect(result.current[0]).toEqual([1, 3]);

    act(() => {
      result.current[1].deselect(1);
    });
    expect(result.current[0]).toEqual([3]);

    const selectedArrayRef = result.current[0];
    act(() => {
      result.current[1].deselect(1); // deselect non-selected item
    });
    expect(result.current[0]).toEqual([3]);
    expect(result.current[0]).toBe(selectedArrayRef); // Reference should not change
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

    // Also check if selection is also empty
    const { result: result2 } = renderHook(() => useSelection([], []));
    expect(result2.current[1].isAllSelected()).toBe(false);
  });

  it('isSomeSelected returns false if data is empty', () => {
    const { result } = renderHook(() => useSelection([]));
    expect(result.current[1].isSomeSelected()).toBe(false);

    // Also check if initialSelection is provided but data is empty
    const { result: result2 } = renderHook(() => useSelection([], [1, 2]));
    expect(result2.current[1].isSomeSelected()).toBe(false);
  });

  it('isSomeSelected returns false when selected items are not in current data', () => {
    const { result } = renderHook(() => useSelection([1, 2, 3]));

    act(() => {
      result.current[1].setSelection([4, 5]);
    });

    expect(result.current[1].isSomeSelected()).toBe(false);
  });

  it('isSomeSelected returns true when some selected items exist in data', () => {
    const { result } = renderHook(() => useSelection([1, 2, 3]));

    // Set selection with mix of existing and non-existing items
    act(() => {
      result.current[1].setSelection([1, 4, 5]);
    });

    expect(result.current[1].isSomeSelected()).toBe(true);
  });

  it('checks if some items are selected', () => {
    const { result } = renderHook(() => useSelection(initialData));
    // Initially, no items are selected
    expect(result.current[1].isSomeSelected()).toBe(false);

    // Select one item
    act(() => {
      result.current[1].select(1);
    });
    expect(result.current[1].isSomeSelected()).toBe(true); // Some selected (1), not all

    // Select all items
    act(() => {
      initialData.forEach((item) => result.current[1].select(item));
    });
    expect(result.current[1].isAllSelected()).toBe(true);
    expect(result.current[1].isSomeSelected()).toBe(false); // All selected, so not 'some'

    // Deselect one item (some are selected again)
    act(() => {
      result.current[1].deselect(initialData[0]);
    });
    expect(result.current[1].isSomeSelected()).toBe(true);

    // Reset selection
    act(() => {
      result.current[1].resetSelection();
    });
    expect(result.current[1].isSomeSelected()).toBe(false); // None selected
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

  it('resets selection and maintains selected array reference on no-op', () => {
    const { result } = renderHook(() => useSelection(initialData, [1, 2, 3]));
    expect(result.current[0]).toEqual([1, 2, 3]);

    act(() => {
      result.current[1].resetSelection();
    });
    expect(result.current[0]).toEqual([]);
    expect(result.current[1].isSomeSelected()).toBe(false);
    expect(result.current[1].isAllSelected()).toBe(false);

    const selectedArrayRef = result.current[0];
    act(() => {
      result.current[1].resetSelection(); // reset already empty selection
    });
    expect(result.current[0]).toEqual([]);
    expect(result.current[0]).toBe(selectedArrayRef); // Reference should not change
  });

  it('handles object data correctly', () => {
    const { result } = renderHook(() => useSelection(objectData, [objectData[0]]));
    const item1 = objectData[0];
    const item2 = objectData[1];

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
    expect(result.current[1].isSomeSelected()).toBe(false); // All selected, so not 'some'
  });

  it('handlers maintain referential equality when state does not change', () => {
    const { result, rerender } = renderHook(() => useSelection(initialData));
    const initialHandlers = result.current[1];

    rerender(); // Rerender without changing props or state that handlers depend on

    const newHandlers = result.current[1];

    expect(newHandlers.select).toBe(initialHandlers.select);
    expect(newHandlers.deselect).toBe(initialHandlers.deselect);
    expect(newHandlers.toggle).toBe(initialHandlers.toggle);
    // isAllSelected and isSomeSelected depend on `data` and `selected` (Set instance)
    // If data and selected Set instance haven't changed, these should be stable.
    expect(newHandlers.isAllSelected).toBe(initialHandlers.isAllSelected);
    expect(newHandlers.isSomeSelected).toBe(initialHandlers.isSomeSelected);
    expect(newHandlers.setSelection).toBe(initialHandlers.setSelection);
    expect(newHandlers.resetSelection).toBe(initialHandlers.resetSelection);
  });

  it('isAllSelected and isSomeSelected update when data prop changes', () => {
    let currentData = [1, 2];
    const { result, rerender } = renderHook(({ data }) => useSelection(data), {
      initialProps: { data: currentData },
    });

    act(() => {
      result.current[1].setSelection([1, 2]);
    });
    expect(result.current[1].isAllSelected()).toBe(true);
    expect(result.current[1].isSomeSelected()).toBe(false);

    currentData = [1, 2, 3];
    rerender({ data: currentData }); // Rerender with new data prop

    expect(result.current[1].isAllSelected()).toBe(false);
    expect(result.current[1].isSomeSelected()).toBe(true); // Still true because [1,2] are selected out of [1,2,3]

    act(() => {
      result.current[1].select(3);
    });
    expect(result.current[1].isAllSelected()).toBe(true);
    expect(result.current[1].isSomeSelected()).toBe(false);
  });
});
