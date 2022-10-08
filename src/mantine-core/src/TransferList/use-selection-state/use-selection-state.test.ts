import { renderHook, act } from '@testing-library/react';
import { useSelectionState } from './use-selection-state';

describe('@mantine/core/TransferList/use-selection-state', () => {
  it('sets correct selection for string value', () => {
    const hook = renderHook(() => useSelectionState());

    act(() => hook.result.current[1].select(0, 'test-1'));
    expect(hook.result.current[0]).toStrictEqual([['test-1'], []]);

    act(() => hook.result.current[1].select(0, 'test-2'));
    expect(hook.result.current[0]).toStrictEqual([['test-1', 'test-2'], []]);

    act(() => hook.result.current[1].select(1, 'test-3'));
    expect(hook.result.current[0]).toStrictEqual([['test-1', 'test-2'], ['test-3']]);

    act(() => hook.result.current[1].select(0, 'test-1'));
    expect(hook.result.current[0]).toStrictEqual([['test-2'], ['test-3']]);
  });

  it('deselects correct values', () => {
    const hook = renderHook(() => useSelectionState([['test-1', 'test-2', 'test-3'], ['test-4']]));

    act(() => hook.result.current[1].deselect(0, ['test-1', 'test-2']));
    expect(hook.result.current[0]).toStrictEqual([['test-3'], ['test-4']]);

    act(() => hook.result.current[1].deselect(0, ['test-3', 'test-2']));
    expect(hook.result.current[0]).toStrictEqual([[], ['test-4']]);

    act(() => hook.result.current[1].deselect(0, ['test-4']));
    expect(hook.result.current[0]).toStrictEqual([[], ['test-4']]);

    act(() => hook.result.current[1].deselect(1, ['test-4']));
    expect(hook.result.current[0]).toStrictEqual([[], []]);
  });

  it('deselects all values', () => {
    const hook = renderHook(() => useSelectionState([['test-1', 'test-2', 'test-3'], ['test-4']]));

    act(() => hook.result.current[1].deselectAll(0));
    expect(hook.result.current[0]).toStrictEqual([[], ['test-4']]);

    act(() => hook.result.current[1].deselectAll(1));
    expect(hook.result.current[0]).toStrictEqual([[], []]);
  });
});
