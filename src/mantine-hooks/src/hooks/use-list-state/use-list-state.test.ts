import { renderHook, act } from '@testing-library/react-hooks';
import { useListState } from './use-list-state';

const DEFAULT_VALUES = [
  { name: 'John', age: 23, skills: ['JavaScript', 'Dart'] },
  { name: 'Amy', age: 21, skills: ['TypeScript'] },
  { name: 'Bill', age: 36, skills: ['Python', 'Django'] },
];

describe('@mantine/hooks/use-id', () => {
  it('returns initial state of no modifications were applied', () => {
    const hook = renderHook(() => useListState(DEFAULT_VALUES));
    const [state] = hook.result.current;
    expect(state).toEqual(DEFAULT_VALUES);
  });

  it('sets state with value', () => {
    const hook = renderHook(() => useListState(DEFAULT_VALUES));
    act(() => {
      const [, handlers] = hook.result.current;
      handlers.setState([DEFAULT_VALUES[2]]);
    });

    const [state] = hook.result.current;
    expect(state).toEqual([DEFAULT_VALUES[2]]);
  });

  it('sets state with callback', () => {
    const hook = renderHook(() => useListState(DEFAULT_VALUES));
    act(() => {
      const [, handlers] = hook.result.current;
      handlers.setState((current) => [DEFAULT_VALUES[0], ...current, DEFAULT_VALUES[1]]);
    });

    const [state] = hook.result.current;
    expect(state).toEqual([DEFAULT_VALUES[0], ...DEFAULT_VALUES, DEFAULT_VALUES[1]]);
  });
});
