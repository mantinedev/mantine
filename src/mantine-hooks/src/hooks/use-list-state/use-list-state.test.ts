import { renderHook, act } from '@testing-library/react-hooks';
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
    expect(state).toEqual(TEST_STATE);
  });

  it('sets state with provided value or callback', () => {
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

    expect(withValueState).toEqual([TEST_ITEM_1]);
    expect(withCallbackState).toEqual([TEST_ITEM_1, ...TEST_STATE, TEST_ITEM_2]);
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

    expect(singleState).toEqual([...TEST_STATE, TEST_ITEM_1]);
    expect(multipleState).toEqual([...TEST_STATE, TEST_ITEM_1, TEST_ITEM_2]);
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

    expect(singleState).toEqual([TEST_ITEM_1, ...TEST_STATE]);
    expect(multipleState).toEqual([TEST_ITEM_1, TEST_ITEM_2, ...TEST_STATE]);
  });

  it('inserts item with handlers.insert', () => {
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

    expect(startState).toEqual([TEST_ITEM_1, ...TEST_STATE]);
    expect(middleState).toEqual([TEST_STATE[0], TEST_ITEM_1, TEST_STATE[1], TEST_STATE[2]]);
    expect(endState).toEqual([...TEST_STATE, TEST_ITEM_1]);
    expect(multipleState).toEqual([
      TEST_STATE[0],
      TEST_ITEM_1,
      TEST_ITEM_2,
      TEST_STATE[1],
      TEST_STATE[2],
    ]);
  });

  it('removes items with provided indices with handlers.remove', () => {
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

    expect(singleState).toEqual([TEST_STATE[0], TEST_STATE[2]]);
    expect(multipleState).toEqual([TEST_STATE[2]]);
  });
});
