import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

describe('@mantine/form/use-field/dirty', () => {
  it('detects correct dirty state', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.isDirty()).toBe(false);
    act(() => hook.result.current.getInputProps().onChange('new value'));
    expect(hook.result.current.isDirty()).toBe(true);
  });

  it('resets dirty state with reset handler', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.isDirty()).toBe(false);
    act(() => hook.result.current.getInputProps().onChange('new value'));
    expect(hook.result.current.isDirty()).toBe(true);
    act(() => hook.result.current.reset());
    expect(hook.result.current.isDirty()).toBe(false);
  });
});
