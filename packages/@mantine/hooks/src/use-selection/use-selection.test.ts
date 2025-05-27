import { act, renderHook } from '@testing-library/react';
import { useSelection } from './use-selection'; // Assuming your hook is in use-selection.ts

describe('useSelection', () => {
  // Test case for initial state with an empty data array
  it('correctly returns initial state for an empty data array', () => {
    const data: number[] = [];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // selection should be empty
    expect(result.current[1].isAllSelected).toBe(false); // all 0 items selected from 0 (UX-focused)
    expect(result.current[1].isSomeSelected).toBe(false); // no items selected
  });

  // Test case for initial state with a non-empty data array
  it('correctly returns initial state for a non-empty data array', () => {
    const data: number[] = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // selection should be empty
    expect(result.current[1].isAllSelected).toBe(false); // not all selected
    expect(result.current[1].isSomeSelected).toBe(false); // no items selected
  });

  // Test Case: Initial state with defaultSelection
  it('correctly initializes with defaultSelection', () => {
    const data = [1, 2, 3, 4, 5];
    const defaultSelected = [1, 3];
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    expect(result.current[0]).toEqual(defaultSelected);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);
  });

  // Test Case: Initial state with defaultSelection covering all items
  it('correctly initializes with defaultSelection covering all items', () => {
    const data = [1, 2, 3];
    const defaultSelected = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    expect(result.current[0]).toEqual(defaultSelected);
    expect(result.current[1].isAllSelected).toBe(true);
    expect(result.current[1].isSomeSelected).toBe(true);
  });

  // Test Case: Initial state with defaultSelection containing items not in data
  it('correctly initializes with defaultSelection containing items not present in data (selection only concerns itself with what was given)', () => {
    const data = [1, 2];
    const defaultSelected = [1, 3, 4]; // 3 and 4 are not in data
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    // The selection array directly reflects what was passed, the hook doesn't filter based on `data`
    expect(result.current[0]).toEqual(defaultSelected);
    expect(result.current[1].isAllSelected).toBe(false); // Because data.length (2) !== selection.length (3)
    expect(result.current[1].isSomeSelected).toBe(true);
  });

  // Test case for 'select' functionality
  it('correctly selects an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // Initial state

    act(() => result.current[1].select(1));
    expect(result.current[0]).toEqual([1]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);

    // Attempt to select the same item again, state should not change
    act(() => result.current[1].select(1));
    expect(result.current[0]).toEqual([1]);
  });

  // Test Case: Select an item when defaultSelection is active
  it('correctly selects an item when defaultSelection is active', () => {
    const data = [1, 2, 3];
    const defaultSelected = [1];
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    expect(result.current[0]).toEqual([1]);

    act(() => result.current[1].select(2));
    expect(result.current[0]).toEqual([1, 2]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);
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
    expect(result.current[0]).toEqual([1, 2]); // Check initial selection before deselect

    // Deselect an item
    act(() => result.current[1].deselect(1));
    expect(result.current[0]).toEqual([2]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);

    // Attempt to deselect an item not currently selected, state should not change
    act(() => result.current[1].deselect(1));
    expect(result.current[0]).toEqual([2]);
  });

  // Test Case: Deselect an item from defaultSelection
  it('correctly deselects an item from defaultSelection', () => {
    const data = [1, 2, 3];
    const defaultSelected = [1, 2];
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    expect(result.current[0]).toEqual([1, 2]);

    act(() => result.current[1].deselect(1));
    expect(result.current[0]).toEqual([2]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);
  });

  // Test case for 'toggle' functionality
  it('correctly toggles an item', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // Initial state

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

  // Test Case: Toggle an item from defaultSelection
  it('correctly toggles an item when defaultSelection is active', () => {
    const data = [1, 2, 3];
    const defaultSelected = [1];
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    expect(result.current[0]).toEqual([1]);

    // Toggle to deselect
    act(() => result.current[1].toggle(1));
    expect(result.current[0]).toEqual([]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(false);

    // Toggle to re-select
    act(() => result.current[1].toggle(1));
    expect(result.current[0]).toEqual([1]);
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

  // Test Case: resetSelection with defaultSelection
  it('resetSelection correctly resets to an empty array, ignoring defaultSelection', () => {
    const data = [1, 2, 3];
    const defaultSelected = [1, 2];
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    expect(result.current[0]).toEqual(defaultSelected); // Starts with default

    act(() => result.current[1].resetSelection());
    expect(result.current[0]).toEqual([]); // Resets to empty
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(false);
  });

  // Test case for isAllSelected when all items are selected
  it('isAllSelected is true when all items are selected', () => {
    const data: string[] = ['a', 'b', 'c'];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // Initial state

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
    const data: number[] = [10, 20, 30];
    const { result } = renderHook(() => useSelection(data));

    expect(result.current[0]).toEqual([]); // Initial state

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

  // Test Case: setSelection directly when defaultSelection was active
  it('allows direct setting of selection via setSelection, overriding defaultSelection', () => {
    const data: number[] = [10, 20, 30];
    const defaultSelected = [10];
    const { result } = renderHook(() => useSelection(data, defaultSelected));

    expect(result.current[0]).toEqual([10]); // Initial state from defaultSelection

    act(() => result.current[1].setSelection([20, 30]));
    expect(result.current[0]).toEqual([20, 30]);
    expect(result.current[1].isAllSelected).toBe(false);
    expect(result.current[1].isSomeSelected).toBe(true);
  });
});
