import { act, renderHook } from '@testing-library/react';
import { useListState } from './use-list-state';

const TEST_STATE = [
  { name: 'John', age: 23, skills: ['JavaScript', 'Dart'] },
  { name: 'Amy', age: 21, skills: ['TypeScript'] },
  { name: 'Bill', age: 36, skills: ['Python', 'Django'] },
];

const TEST_ITEM_1 = { name: 'Emily', age: 18, skills: ['Lua', 'Haskell'] };
const TEST_ITEM_2 = { name: 'Bob', age: 44, skills: ['Angular', 'TypeScript'] };

describe('@mantine/hooks/use-list-state', () => {
  it('returns initial state of no modifications were applied', () => {
    const hook = renderHook(() => useListState(TEST_STATE));
    const [state] = hook.result.current;
    expect(state).toStrictEqual(TEST_STATE);
  });

  it('sets state with given value or callback', () => {
    const withValue = renderHook(() => useListState(TEST_STATE));
    const withCallback = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, withValueHandlers] = withValue.result.current;
      const [, withCallbackHandlers] = withCallback.result.current;

      withValueHandlers.setState([TEST_ITEM_1]);
      withCallbackHandlers.setState((current) => [TEST_ITEM_1, ...current, TEST_ITEM_2]);
    });

    const [withValueState] = withValue.result.current;
    const [withCallbackState] = withCallback.result.current;

    expect(withValueState).toStrictEqual([TEST_ITEM_1]);
    expect(withCallbackState).toStrictEqual([TEST_ITEM_1, ...TEST_STATE, TEST_ITEM_2]);
  });

  it('adds item to the end of the list with handlers.append', () => {
    const single = renderHook(() => useListState(TEST_STATE));
    const multiple = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, singleHandlers] = single.result.current;
      const [, multipleHandlers] = multiple.result.current;

      singleHandlers.append(TEST_ITEM_1);
      multipleHandlers.append(TEST_ITEM_1, TEST_ITEM_2);
    });

    const [singleState] = single.result.current;
    const [multipleState] = multiple.result.current;

    expect(singleState).toStrictEqual([...TEST_STATE, TEST_ITEM_1]);
    expect(multipleState).toStrictEqual([...TEST_STATE, TEST_ITEM_1, TEST_ITEM_2]);
  });

  it('adds item to the start of the list with handlers.prepend', () => {
    const single = renderHook(() => useListState(TEST_STATE));
    const multiple = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, singleHandlers] = single.result.current;
      const [, multipleHandlers] = multiple.result.current;

      singleHandlers.prepend(TEST_ITEM_1);
      multipleHandlers.prepend(TEST_ITEM_1, TEST_ITEM_2);
    });

    const [singleState] = single.result.current;
    const [multipleState] = multiple.result.current;

    expect(singleState).toStrictEqual([TEST_ITEM_1, ...TEST_STATE]);
    expect(multipleState).toStrictEqual([TEST_ITEM_1, TEST_ITEM_2, ...TEST_STATE]);
  });

  it('inserts item at given position with handlers.insert', () => {
    const start = renderHook(() => useListState(TEST_STATE));
    const middle = renderHook(() => useListState(TEST_STATE));
    const end = renderHook(() => useListState(TEST_STATE));
    const multiple = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, startHandlers] = start.result.current;
      const [, middleHandlers] = middle.result.current;
      const [, endHandlers] = end.result.current;
      const [, multipleHandlers] = multiple.result.current;

      startHandlers.insert(0, TEST_ITEM_1);
      middleHandlers.insert(1, TEST_ITEM_1);
      endHandlers.insert(TEST_STATE.length, TEST_ITEM_1);
      multipleHandlers.insert(1, TEST_ITEM_1, TEST_ITEM_2);
    });

    const [startState] = start.result.current;
    const [middleState] = middle.result.current;
    const [endState] = end.result.current;
    const [multipleState] = multiple.result.current;

    expect(startState).toStrictEqual([TEST_ITEM_1, ...TEST_STATE]);
    expect(middleState).toStrictEqual([TEST_STATE[0], TEST_ITEM_1, TEST_STATE[1], TEST_STATE[2]]);
    expect(endState).toStrictEqual([...TEST_STATE, TEST_ITEM_1]);
    expect(multipleState).toStrictEqual([
      TEST_STATE[0],
      TEST_ITEM_1,
      TEST_ITEM_2,
      TEST_STATE[1],
      TEST_STATE[2],
    ]);
  });

  it('removes items with given indices with handlers.remove', () => {
    const single = renderHook(() => useListState(TEST_STATE));
    const multiple = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, singleHandlers] = single.result.current;
      const [, multipleHandlers] = multiple.result.current;

      singleHandlers.remove(1);
      multipleHandlers.remove(0, 1);
    });

    const [singleState] = single.result.current;
    const [multipleState] = multiple.result.current;

    expect(singleState).toStrictEqual([TEST_STATE[0], TEST_STATE[2]]);
    expect(multipleState).toStrictEqual([TEST_STATE[2]]);
  });

  it('applies given function to all items with handlers.apply', () => {
    const hook = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.apply((item, index) => ({ ...item, age: index! + item.age }));
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual([
      TEST_STATE[0],
      { ...TEST_STATE[1], age: TEST_STATE[1].age + 1 },
      { ...TEST_STATE[2], age: TEST_STATE[2].age + 2 },
    ]);
  });

  it('applies given function to respective item with handlers.applyWhere', () => {
    const hook = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.applyWhere(
        (item) => item.age > 30,
        (item) => ({ ...item, experienced: true })
      );
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual([
      TEST_STATE[0],
      TEST_STATE[1],
      { ...TEST_STATE[2], experienced: true },
    ]);
  });

  it('reorders item at given position with handlers.reorder', () => {
    const hook = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.reorder({ from: 0, to: 2 });
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual([TEST_STATE[1], TEST_STATE[2], TEST_STATE[0]]);
  });

  it('swap items positions with handlers.swap', () => {
    const hook = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.swap({ from: 0, to: 2 });
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual([TEST_STATE[2], TEST_STATE[1], TEST_STATE[0]]);
  });

  it('sets item at given position with handlers.setItem', () => {
    const hook = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.setItem(1, TEST_ITEM_1);
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual([TEST_STATE[0], TEST_ITEM_1, TEST_STATE[2]]);
  });

  it('sets given item property at given position with handlers.setItemProp', () => {
    const hook = renderHook(() => useListState(TEST_STATE));

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.setItemProp(1, 'age', 90);
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual([TEST_STATE[0], { ...TEST_STATE[1], age: 90 }, TEST_STATE[2]]);
  });

  it('works with primitive values', () => {
    const hook = renderHook(() => useListState(['test-1', 'test-2']));

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.setItem(1, 'test-3');
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual(['test-1', 'test-3']);
  });

  it('removes last item with pop handler', () => {
    const hook = renderHook(() => useListState(['test-1', 'test-2', 'test-3']));
    act(() => {
      const [, handlers] = hook.result.current;
      handlers.pop();
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual(['test-1', 'test-2']);
  });

  it('removes first item with shift handler', () => {
    const hook = renderHook(() => useListState(['test-1', 'test-2', 'test-3']));
    act(() => {
      const [, handlers] = hook.result.current;
      handlers.shift();
    });

    const [state] = hook.result.current;
    expect(state).toStrictEqual(['test-2', 'test-3']);
  });

  it('filter items with handlers.filter', () => {
    const hook = renderHook(() => useListState(TEST_STATE));
    const filterFn = (item: any) => item.name !== 'Bill';

    act(() => {
      const [, handlers] = hook.result.current;
      handlers.filter(filterFn);
    });

    const [state] = hook.result.current;
    expect(state).toEqual(TEST_STATE.filter(filterFn));
  });
});
