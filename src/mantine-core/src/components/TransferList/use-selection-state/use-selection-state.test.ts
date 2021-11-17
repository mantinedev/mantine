import { renderHook, act } from '@testing-library/react-hooks';
import { useSelectionState } from './use-selection-state';

describe('@mantine/core/TransferList/use-selection-state', () => {
  it('sets correct selection for string value', () => {
    const hook = renderHook(() => useSelectionState());

    act(() => hook.result.current[1](0, 'test-1'));
    expect(hook.result.current[0]).toEqual([['test-1'], []]);

    act(() => hook.result.current[1](0, 'test-2'));
    expect(hook.result.current[0]).toEqual([['test-1', 'test-2'], []]);

    act(() => hook.result.current[1](1, 'test-3'));
    expect(hook.result.current[0]).toEqual([['test-1', 'test-2'], ['test-3']]);

    act(() => hook.result.current[1](0, 'test-1'));
    expect(hook.result.current[0]).toEqual([['test-2'], ['test-3']]);
  });

  it('sets correct selection for array value', () => {
    const hook = renderHook(() => useSelectionState());

    act(() => hook.result.current[1](0, ['test-1', 'test-2']));
    expect(hook.result.current[0]).toEqual([['test-1', 'test-2'], []]);

    act(() => hook.result.current[1](0, ['test-1', 'test-3']));
    expect(hook.result.current[0]).toEqual([['test-1', 'test-2', 'test-3'], []]);

    act(() => hook.result.current[1](1, ['test-4', 'test-5']));
    expect(hook.result.current[0]).toEqual([
      ['test-1', 'test-2', 'test-3'],
      ['test-4', 'test-5'],
    ]);
  });
});
