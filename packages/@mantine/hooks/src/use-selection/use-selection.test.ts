import { act, renderHook } from '@testing-library/react';
import { useSelection } from './use-selection'; // Assuming your hook is in use-selection.ts

describe('@mantine/hooks/use-selection', () => {
  // Test case for initial state with an empty data array
  it('correctly returns initial state for an empty data array', () => {
    const data: number[] = [];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // selection should be empty
    expect(result.current[1].isAllSelected).toBe(true); // all 0 items selected from 0
    expect(result.current[1].isSomeSelected).toBe(false); // no items selected
  });

  // Test case for initial state with a non-empty data array
  it('correctly returns initial state for a non-empty data array', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // selection should be empty
    expect(result.current[1].isAllSelected).toBe(false); // not all selected
    expect(result.current[1].isSomeSelected).toBe(false); // no items selected
  });

  // Test case for 'select' functionality
  it('correctly selects an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    act(() => result.current[1].select(1));
    expect(result.current[0]).toEqual([1]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);

    // Attempt to select the same item again, state should not change
    act(() => result.current[1].select(1));
    expect(result.current[0]).toEqual([1]);
  });

  // Test case for 'deselect' functionality
  it('correctly deselects an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    // First select some items
    act(() => {
      result.current[1].select(1);
      result.current[1].select(2);
    });
    expect(result.current[0]).toEqual([1, 2]);

    // Deselect an item
    act(() => result.current[1].deselect(1));
    expect(result.current[0]).toEqual([2]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);

    // Attempt to deselect an item not currently selected, state should not change
    act(() => result.current[1].deselect(1));
    expect(result.current[0]).toEqual([2]);
  });

  // Test case for 'toggle' functionality
  it('correctly toggles an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    // Toggle to select
    act(() => result.current[1].toggle(1));
    expect(result.current[0]).toEqual([1]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);

    // Toggle to deselect
    act(() => result.current[1].toggle(1));
    expect(result.current[0]).toEqual([]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(false);

    // Toggle another item to select
    act(() => result.current[1].toggle(2));
    expect(result.current[0]).toEqual([2]);
  });

  // Test case for 'resetSelection' functionality
  it('correctly resets the selection', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    act(() => {
      result.current[1].select(1);
      result.current[1].select(2);
    });
    expect(result.current[0]).toEqual([1, 2]);
    expect(result.current[1].isSomeSelected).toBe(true);

    act(() => result.current[1].resetSelection());
    expect(result.current[0]).toEqual([]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(false);
  });

  // Test case for isAllSelected when all items are selected
  it('isAllSelected is true when all items are selected', () => {
    const data = ['a', 'b', 'c']; // Using strings to show generic T
    const { result } = renderHook(() => useSelection(data));

    act(() => {
      result.current[1].select('a');
      result.current[1].select('b');
      result.current[1].select('c');
    });
    expect(result.current[0]).toEqual(['a', 'b', 'c']);
    expect(result.current[1].isAllSelected).toBe(true);
    expect(result.current[1].isSomeSelected).toBe(true);
  });

  // Test case for setSelection directly
  it('allows direct setting of selection via setSelection', () => {
    const data = [10, 20, 30];
    const { result } = renderHook(() => useSelection(data));

    act(() => result.current[1].setSelection([10, 30]));
    expect(result.current[0]).toEqual([10, 30]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);

    act(() => result.current[1].setSelection([]));
    expect(result.current[0]).toEqual([]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(false);

    act(() => result.current[1].setSelection([10, 20, 30]));
    expect(result.current[0]).toEqual([10, 20, 30]);
    expect(result.current[1].isAllSelected).toBe(true);
    expect(result.current[1].isSomeSelected).toBe(true);
  });
});
